import type { Metadata } from "next";
import Link from "next/link";
import LeadSuccessEvent from "./LeadSuccessEvent";

/**
 * /contact/thanks/: reached after the server confirms a contact-form lead.
 *
 * NOINDEX and absent from sitemap.ts. The page itself is not the conversion signal:
 * qualified_lead_submit fires only when the form left a confirmed pending record in
 * this browser session, so a direct visit or a refresh records nothing.
 */
export const metadata: Metadata = {
  title: "Thanks: your message is in",
  robots: { index: false, follow: true },
};

export default function ContactThanks() {
  return (
    <section style={{ padding: "clamp(80px, 14vh, 150px) 0" }}>
      <LeadSuccessEvent />
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
            Message received
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 500,
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-.02em",
              marginTop: 16,
            }}
          >
            Thanks. I&rsquo;ll reply personally, usually within one business day.
          </h1>
          <p style={{ marginTop: 20, fontSize: 17, color: "var(--muted)", lineHeight: 1.65 }}>
            If it is urgent, email{" "}
            <a href="mailto:hami@hamitahm.com" style={{ color: "var(--ink)" }}>
              hami@hamitahm.com
            </a>
            .
          </p>
          <p style={{ marginTop: 28 }}>
            <Link href="/ai-visibility/sample-report/" style={{ color: "var(--accent)" }}>
              Read the sample report while you wait &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
