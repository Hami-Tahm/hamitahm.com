"use client";

import { useEffect } from "react";

/**
 * Runs when Cal.com redirects here after a booking (Cal.com event → Advanced →
 * "Redirect on booking" → https://hamitahm.com/contact/booked/).
 *
 * Once per browser session it:
 *   1. pushes `call_booked` to the dataLayer (GA4 via GTM), and
 *   2. fires the Google Ads conversion "Submit lead form" (2026-11-15, Hami: a booked
 *      call is the most direct lead signal). That action counts ONE per ad click, so a
 *      visitor who both submits the contact form and books a call is counted once.
 *
 * Guards against junk: nothing fires on a refresh or a second visit in the same
 * session, and nothing fires unless the visitor arrived from Cal.com (referrer), so a
 * direct visit or a crawler does not record a conversion.
 *
 * PRIVACY: Cal.com's "forward parameters" option must stay OFF. If any query string
 * arrives anyway (it can carry name/email), it is stripped from the address bar and
 * nothing from it is read or sent.
 */
const KEY = "ht_call_booked_sent";
const GOOGLE_ADS_LEAD_DESTINATION = "AW-18546533331/fNHOCPDV_64dENPH1otF";

export default function BookedEvent() {
  useEffect(() => {
    try {
      if (window.location.search) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } catch {
      /* ignore */
    }

    const fromCal = /(^|\.)cal\.com$/.test(
      (() => {
        try {
          return document.referrer ? new URL(document.referrer).hostname : "";
        } catch {
          return "";
        }
      })(),
    );
    if (!fromCal) return;

    try {
      if (window.sessionStorage.getItem(KEY)) return;
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage blocked: still record once for this page view */
    }

    const w = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "call_booked", booking_tool: "cal.com", page_path: window.location.pathname });

    w.gtag =
      w.gtag ||
      function () {
        // gtag.js expects its queued commands as the special `arguments` object.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer?.push(arguments as unknown as Record<string, unknown>);
      };
    w.gtag("event", "conversion", { send_to: GOOGLE_ADS_LEAD_DESTINATION });
  }, []);
  return null;
}
