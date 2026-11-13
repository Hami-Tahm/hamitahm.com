"use client";

import { useEffect } from "react";

/**
 * The site's ONLY `cta_click` emitter. One delegated click listener, mounted once
 * in the layout, pushes exactly one dataLayer event per click.
 *
 * CIT-05 (2026-11-13) replaced the older src/components/CtaTracking.tsx, which
 * pushed `cta_click` for every link to the checker, audit, contact, pricing or
 * implementation page, header and footer included. Running both would have sent
 * two `cta_click` events for one click, so the two were merged here.
 *
 * Two kinds of click are recorded, both as `cta_click` with the same schema:
 *
 *  1. TAGGED contextual CTAs: elements with data-gtm="cta-{page}-{dest}-{position}"
 *     (see src/lib/cta.ts). cta_id is that attribute.
 *  2. UNTAGGED funnel links in page content on pages not yet tagged: cta_id is
 *     "cta-untagged-{dest}" and cta_position is "untagged", so reports can tell
 *     them apart and tagging can be extended page by page.
 *
 * Links inside <nav> or <footer> are NEVER recorded: site navigation is not a CTA.
 *
 * Schema (CIT-05):    event, page_path, cta_id, cta_text, cta_destination, cta_position
 * Legacy keys kept so the existing GTM tag keeps working until it is updated:
 *                     cta, funnel_step, cta_label, cta_style, source_path, destination
 *                     (destination is now path-only, no query string, for privacy)
 *
 * PRIVACY: paths only (no query string, no hash), mailto addresses reduced to
 * "mailto:", email-shaped text masked. Nothing the visitor typed is read.
 *
 * cta_click is a secondary engagement event: never a lead, never a GA4 key event,
 * never a Google Ads conversion.
 *
 * GTM loads lazily, so dataLayer may not exist on an early click; pushing to a
 * self-initialised array queues the event until the container loads.
 */

const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/g;

type Classified = { cta: string; funnelStep: string };

/** Legacy funnel classification, kept from CtaTracking.tsx for continuity. */
function classify(href: string): Classified | null {
  if (href.startsWith("mailto:")) return { cta: "email", funnelStep: "contact" };
  let path: string;
  try {
    const url = new URL(href, window.location.origin);
    if (!/(^|\.)hamitahm\.com$/.test(url.hostname) && url.origin !== window.location.origin) return null;
    path = url.pathname;
  } catch {
    return null;
  }
  // Match on the start of the path only, so a blog slug that merely contains
  // "contact" or "pricing" is not counted as a funnel click.
  if (path.startsWith("/ai-visibility/ai-visibility-checker")) return { cta: "checker", funnelStep: "0_free_checker" };
  if (path.startsWith("/ai-visibility/ai-visibility-audit")) return { cta: "audit", funnelStep: "1_audit" };
  if (path.startsWith("/ai-visibility/implementation")) return { cta: "implementation", funnelStep: "2_sprint" };
  if (path.startsWith("/ai-visibility/sample-report")) return { cta: "sample-report", funnelStep: "1_audit" };
  if (path.startsWith("/methodology")) return { cta: "methodology", funnelStep: "proof" };
  if (path.startsWith("/for-agencies")) return { cta: "agencies", funnelStep: "agencies" };
  if (path.startsWith("/pricing")) return { cta: "pricing", funnelStep: "pricing" };
  if (path.startsWith("/contact")) return { cta: "contact", funnelStep: "contact" };
  return null;
}

function cleanDestination(href: string): string {
  if (!href) return "";
  if (href.startsWith("mailto:")) return "mailto:";
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? url.pathname : `${url.origin}${url.pathname}`;
  } catch {
    return "";
  }
}

function cleanText(el: HTMLElement): string {
  return (el.innerText || el.textContent || "")
    .replace(EMAIL_RE, "[email]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}

type Win = Window & { dataLayer?: unknown[]; __htCtaBound?: boolean };

export function CtaTracker() {
  useEffect(() => {
    const w = window as Win;
    if (w.__htCtaBound) return;
    w.__htCtaBound = true;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;
      if (target.closest("nav, footer")) return;

      const tagged = target.closest<HTMLElement>('[data-gtm^="cta-"]');
      const el = tagged || target.closest<HTMLElement>("a[href]");
      if (!el) return;

      const href = el.getAttribute("href") || "";
      const hit = classify(href);
      if (!tagged && !hit) return;

      const text = cleanText(el);
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "cta_click",
        page_path: window.location.pathname,
        cta_id: tagged ? el.getAttribute("data-gtm") || "" : `cta-untagged-${hit!.cta === "email" ? "contact" : hit!.cta}`,
        cta_text: text,
        cta_destination: cleanDestination(href),
        cta_position: tagged ? el.getAttribute("data-cta-position") || "" : "untagged",
        // Legacy keys (pre CIT-05 GTM tag). Remove once GTM uses the keys above.
        cta: hit?.cta || "",
        funnel_step: hit?.funnelStep || "",
        cta_label: text,
        cta_style: el.className?.includes?.("btn") ? "button" : "link",
        source_path: window.location.pathname,
        destination: cleanDestination(href),
      });
    };

    // Capture phase: recorded even if something later stops propagation.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      w.__htCtaBound = false;
    };
  }, []);

  return null;
}
