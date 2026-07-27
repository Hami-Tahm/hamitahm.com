"use client";

import { useEffect } from "react";

/**
 * Site-wide CTA click tracking — one delegated listener, mounted once in the layout.
 *
 * WHY A DELEGATED LISTENER instead of wrapping every CTA in a tracked component:
 * the money pages are server components (they export `metadata`), so adding onClick
 * handlers would mean converting them to client components or wrapping dozens of
 * links by hand. A single capture-phase listener on `document` covers every CTA on
 * every page — including ones added later — with zero changes to page code.
 *
 * ⚠️ POSSIBLE OVERLAP WITH EXISTING GTM TRIGGERS: GA4 already receives
 * `book_audit_click` and `contact_click`, which are almost certainly fired by click
 * triggers configured inside the GTM container. This pushes a DIFFERENT event name
 * (`cta_click`), so nothing double-counts under the same name — but once this data
 * looks right, the older single-purpose triggers can be retired in GTM in favour of
 * `cta_click` + its parameters, which carry far more context.
 *
 * GTM is loaded with `lazyOnload`, so `dataLayer` may not exist yet on an early
 * click. Pushing to a self-initialised array means those events simply queue and are
 * processed once the container loads.
 */

/** Maps a destination href to a funnel step, so GA4 can show where people drop. */
function classify(href: string): { cta: string; funnelStep: string } | null {
  if (href.startsWith("mailto:")) return { cta: "email", funnelStep: "contact" };

  // Ignore anything that isn't an internal path we care about.
  if (!href.startsWith("/") && !href.includes("hamitahm.com")) return null;

  if (href.includes("/ai-visibility/ai-visibility-checker")) {
    return { cta: "checker", funnelStep: "0_free_checker" };
  }
  if (href.includes("/ai-visibility/ai-visibility-audit")) {
    return { cta: "audit", funnelStep: "1_audit" };
  }
  if (href.includes("/ai-visibility/implementation")) {
    return { cta: "implementation", funnelStep: "2_sprint" };
  }
  if (href.includes("/pricing")) {
    return { cta: "pricing", funnelStep: "pricing" };
  }
  if (href.includes("/contact")) {
    return { cta: "contact", funnelStep: "contact" };
  }
  return null;
}

export function CtaTracking() {
  useEffect(() => {
    const onClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const hit = classify(href);
      if (!hit) return;

      // Link text is site copy, never user input — safe to send. Trimmed and capped
      // so an unexpectedly long label can't bloat the payload.
      const label = (anchor.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);

      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "cta_click",
        cta: hit.cta,
        funnel_step: hit.funnelStep,
        cta_label: label,
        // Where the click happened — lets you see which page actually drives the audit.
        source_path: window.location.pathname,
        destination: href,
        // Buttons vs inline text links convert very differently; worth splitting.
        cta_style: anchor.className?.includes?.("btn") ? "button" : "link",
      });
    };

    // Capture phase so the event is recorded even if something later calls
    // stopPropagation or the router navigates away.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
