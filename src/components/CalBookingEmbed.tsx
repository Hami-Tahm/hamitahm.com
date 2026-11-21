"use client";

import { useEffect } from "react";
import { BOOKING_URL } from "@/lib/offers";
import { recordCallBooked } from "@/lib/booking-conversion";
import { readLeadAttribution, type Touch } from "@/lib/attribution";

/**
 * Opens the Cal.com booking page as a pop-up ON hamitahm.com instead of sending the
 * visitor to cal.com (2026-11-16).
 *
 * WHY: Cal.com's free plan has no "Redirect on booking", so a visitor who booked on
 * cal.com never came back to /contact/booked/ and the Google Ads booking conversion
 * could never fire. The embed stays on this site and tells us when a booking is
 * complete (Cal.com embed event `bookingSuccessfulV2`), which is when
 * recordCallBooked() fires `call_booked` + the Ads conversion, once per session.
 *
 * HOW: one capture-phase click listener. Any plain left-click on a link whose href
 * starts with BOOKING_URL opens the pop-up. Nothing on the pages changes: every
 * booking CTA stays a normal link to cal.com, so
 *   - cmd/ctrl/shift/middle-click still opens cal.com in a new tab,
 *   - if the embed script cannot load (blocked, offline), the click falls back to the
 *     normal cal.com page,
 *   - CtaTracker still records the cta_click as before.
 *
 * The embed script (app.cal.com/embed/embed.js, ~50 KB) is loaded only on the first
 * booking click, never on page load, so it costs nothing for visitors who don't book.
 * CSP: app.cal.com is allowed in script-src, frame-src and connect-src
 * (next.config.ts).
 *
 * PRIVACY: the booking event payload (attendee name, email, time) is never read.
 */

const EMBED_SRC = "https://app.cal.com/embed/embed.js";
const NAMESPACE = "ai-call";
const CAL_LINK = BOOKING_URL.replace(/^https:\/\/cal\.com\//, ""); // "hamitahm/ai-visibility-call"

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalFn>;
  q?: unknown[];
};
type Win = Window & { Cal?: CalFn; __htCalBound?: boolean };

let loader: Promise<void> | null = null;

/** Cal.com's official queueing stub, plus onload/onerror so we can fall back. */
function loadCal(): Promise<void> {
  if (loader) return loader;
  const w = window as Win;
  loader = new Promise<void>((resolve, reject) => {
    const queue = (api: CalFn, args: unknown) => {
      (api.q = api.q || []).push(args);
    };
    if (!w.Cal) {
      const cal: CalFn = function (...args: unknown[]) {
        const self = w.Cal as CalFn;
        if (args[0] === "init") {
          const api: CalFn = function (...a: unknown[]) {
            queue(api, a);
          };
          const namespace = args[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            self.ns = self.ns || {};
            self.ns[namespace] = self.ns[namespace] || api;
            queue(self.ns[namespace], args);
            queue(self, ["initNamespace", namespace]);
          } else {
            queue(self, args);
          }
          return;
        }
        queue(self, args);
      };
      cal.ns = {};
      cal.q = [];
      w.Cal = cal;
    }
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("cal embed failed to load"));
    document.head.appendChild(s);
    (w.Cal as CalFn).loaded = true;

    w.Cal!("init", NAMESPACE, { origin: "https://app.cal.com" });
    const api = w.Cal!.ns![NAMESPACE];
    api("ui", {
      // Light to match the site's cream palette (the Cal.com account default is dark).
      theme: "light",
      layout: "month_view",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { "cal-brand": "#0F6E78" }, dark: { "cal-brand": "#0F6E78" } },
    });
    const onBooked = () => {
      recordCallBooked("embed");
    };
    api("on", { action: "bookingSuccessfulV2", callback: onBooked });
    api("on", { action: "bookingSuccessful", callback: onBooked });
  });
  loader.catch(() => {
    loader = null;
  });
  return loader;
}

/**
 * 2026-11-21: where this visitor came from, as one short line, prefilled into a
 * HIDDEN booking question on the Cal.com event (identifier "traffic_source"). It shows
 * up in the booking details and the booking email, next to the visitor's own answer
 * to "How did you hear about me?". Source, medium, campaign and landing path only:
 * no gclid, no query strings, nothing the visitor typed.
 */
const SOURCE_FIELD = "traffic_source";

function touchLine(t: Touch | null): string {
  if (!t) return "";
  const parts = [`${t.source} / ${t.medium}`];
  if (t.campaign) parts.push(`campaign=${t.campaign}`);
  if (t.term) parts.push(`keyword=${t.term}`);
  if (t.landing_page) parts.push(`landing=${t.landing_page}`);
  return parts.join(" | ");
}

function sourceSummary(): string {
  try {
    const a = readLeadAttribution();
    const now = touchLine(a.session_touch);
    const first = touchLine(a.first_touch);
    const line = first && first !== now ? `This visit: ${now} || First visit: ${first}` : `This visit: ${now}`;
    return line.slice(0, 400);
  } catch {
    return "";
  }
}

function isBookingHref(href: string): boolean {
  try {
    const u = new URL(href, window.location.origin);
    return `${u.origin}${u.pathname}`.replace(/\/$/, "") === BOOKING_URL.replace(/\/$/, "");
  } catch {
    return false;
  }
}

export function CalBookingEmbed() {
  useEffect(() => {
    const w = window as Win;
    if (w.__htCalBound) return;
    w.__htCalBound = true;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!isBookingHref(href)) return;

      e.preventDefault();
      loadCal()
        .then(() => {
          const config: Record<string, string> = { layout: "month_view" };
          const src = sourceSummary();
          if (src) config[SOURCE_FIELD] = src;
          w.Cal!.ns![NAMESPACE]("modal", { calLink: CAL_LINK, config });
        })
        .catch(() => {
          window.location.href = a.href;
        });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      w.__htCalBound = false;
    };
  }, []);

  return null;
}
