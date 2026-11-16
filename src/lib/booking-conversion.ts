/**
 * One place that records "a call was booked" (2026-11-16).
 *
 * Fires, once per browser session:
 *   1. dataLayer `call_booked` (GA4 via GTM), and
 *   2. the Google Ads conversion "Submit lead form". That action counts ONE per ad
 *      click, so a visitor who both submits the contact form and books is counted once.
 *
 * Called from two places:
 *   - src/components/CalBookingEmbed.tsx, when the Cal.com embed reports a completed
 *     booking (the live path: Cal.com's free plan has no "Redirect on booking").
 *   - src/app/contact/booked/BookedEvent.tsx, kept for the day the redirect exists.
 *
 * PRIVACY: nothing about the booking (name, email, time) is read or sent. Only the
 * fact that a booking happened, the tool and the page path.
 */
const SESSION_KEY = "ht_call_booked_sent";
export const GOOGLE_ADS_LEAD_DESTINATION = "AW-18546533331/fNHOCPDV_64dENPH1otF";

type Win = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/** Returns true if it fired, false if this session already recorded a booking. */
export function recordCallBooked(surface: "embed" | "redirect"): boolean {
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return false;
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* storage blocked: still record once for this page view */
  }

  const w = window as Win;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "call_booked",
    booking_tool: "cal.com",
    booking_surface: surface,
    page_path: window.location.pathname,
  });

  w.gtag =
    w.gtag ||
    function () {
      // gtag.js expects its queued commands as the special `arguments` object.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer?.push(arguments as unknown as Record<string, unknown>);
    };
  w.gtag("event", "conversion", { send_to: GOOGLE_ADS_LEAD_DESTINATION });
  return true;
}
