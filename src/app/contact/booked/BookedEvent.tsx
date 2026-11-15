"use client";

import { useEffect } from "react";

/**
 * Pushes `call_booked` once per browser session when Cal.com redirects here after a
 * booking. Guarded so a refresh or a second visit in the same session records nothing.
 * Carries no personal data: Cal.com's redirect parameters are not read.
 */
const KEY = "ht_call_booked_sent";

export default function BookedEvent() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY)) return;
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage blocked: still record once for this page view */
    }
    const w = window as Window & { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "call_booked", booking_tool: "cal.com", page_path: window.location.pathname });
  }, []);
  return null;
}
