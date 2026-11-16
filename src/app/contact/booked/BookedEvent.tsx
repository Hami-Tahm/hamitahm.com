"use client";

import { useEffect } from "react";
import { recordCallBooked } from "@/lib/booking-conversion";

/**
 * Runs if Cal.com ever redirects here after a booking.
 *
 * 2026-11-16: "Redirect on booking" is a paid (Teams) Cal.com feature, so on the
 * current free plan nobody arrives here from Cal.com and this does not fire. The live
 * booking conversion comes from src/components/CalBookingEmbed.tsx. This page stays
 * so the redirect works the day the plan allows it; both paths share the same
 * once-per-session guard, so a booking is never counted twice.
 *
 * Guards against junk: nothing fires unless the visitor arrived from Cal.com
 * (referrer), so a direct visit or a crawler does not record a conversion.
 *
 * PRIVACY: Cal.com's "forward parameters" option must stay OFF. If any query string
 * arrives anyway (it can carry name/email), it is stripped from the address bar and
 * nothing from it is read or sent.
 */
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
    recordCallBooked("redirect");
  }, []);
  return null;
}
