import type { Metadata } from "next";
import Link from "next/link";
import BookedEvent from "./BookedEvent";

/**
 * /contact/booked/: thank-you page for a Cal.com redirect after booking.
 *
 * 2026-11-16: Cal.com's "Redirect on booking" is a paid (Teams) feature, so on the
 * free plan nobody is sent here. Bookings now happen in an on-site pop-up
 * (src/components/CalBookingEmbed.tsx), which records the conversion itself. This
 * page is kept for the day the redirect is available.
 *
 * NOINDEX and absent from sitemap.ts. If reached from Cal.com, fires `call_booked`
 * and the Google Ads lead conversion once per session (see BookedEvent).
 */
export const metadata: Metadata = {
  title: "You're booked",
  robots: { index: false, follow: true },
};

export default function CallBooked() {
  return (
    <section style={{ padding: "clamp(80px, 14vh, 150px) 0" }}>
      <BookedEvent />
      <div className="wrap">
        <div style={{ maxWidth: "54ch" }}>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Call booked
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 500,
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-.02em",
              marginTop: 14,
            }}
          >
            You&rsquo;re booked. See you on the call.
          </h1>
          <p style={{ marginTop: 22, fontSize: 18, color: "var(--muted)", lineHeight: 1.65 }}>
            The calendar invite with the Google Meet link is on its way to your inbox.
            If you have a few minutes before we talk, run the free check so we can look
            at real answers together.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/ai-visibility/ai-visibility-checker/" className="btn btn-primary">
              Run the free AI visibility check <span className="arr">&rarr;</span>
            </Link>
            <Link href="/ai-visibility/sample-report/" className="btn btn-ghost">
              See a sample report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
