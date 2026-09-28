import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

/**
 * /for-agencies/thanks/: the conversion page.
 *
 * WHAT THIS IS FOR (2026-09-28). This URL is reachable only by submitting the form on
 * /for-agencies/, so a load of it is evidence that a partnership enquiry was actually
 * delivered. The Microsoft Ads conversion goal fires on this URL, not on a click.
 *
 * WHY NOT A CLICK EVENT, which would be less work: a click fires when someone presses
 * a button, which is before the request succeeds and therefore before anything reaches
 * the inbox. It also fires on a double press. Tying the conversion to a page that only
 * exists after a 200 response means the number in the ads account is a count of leads
 * received rather than a count of intentions, and it can be checked by visiting the URL.
 *
 * ⚠️ NOINDEX, and deliberately absent from sitemap.ts. If this page were indexed it
 * could be reached from search, and every such visit would be recorded as a conversion
 * that never happened. That is not a cosmetic inaccuracy: automated bidding would then
 * be optimising towards traffic that never contacted anyone.
 */

export const metadata: Metadata = {
  title: "Thanks: your partnership enquiry is in",
  robots: { index: false, follow: true },
};

export default function AgencyPartnerThanks() {
  return (
    <section style={{ padding: "clamp(80px, 14vh, 150px) 0" }}>
      <div className="wrap">
        <RevealSection>
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
              Enquiry received
            </p>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(30px, 4.4vw, 46px)",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                marginTop: 18,
              }}
            >
              Got it. I will reply myself.
            </h1>

            <p style={{ marginTop: 20, fontSize: 17, color: "var(--muted)", lineHeight: 1.7 }}>
              Usually within one business day, and from me rather than from an assistant or
              a sequence. If you asked about wholesale for a specific client, tell me the
              site and the market and I will come back with a number and a delivery date
              instead of a discovery call.
            </p>

            <p style={{ marginTop: 18, fontSize: 17, color: "var(--muted)", lineHeight: 1.7 }}>
              If nothing arrives, the form did not reach me and email will:{" "}
              <a href="mailto:hami@hamitahm.com" style={{ color: "var(--ink)" }}>
                hami@hamitahm.com
              </a>
              .
            </p>

            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/ai-visibility/sample-report/" className="btn btn-primary">
                Read the sample report <span className="arr">&rarr;</span>
              </Link>
              <Link href="/methodology/" className="btn">
                How the measurement works
              </Link>
            </div>

            <p style={{ marginTop: 28, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
              Worth reading before we speak. The sample is built on sites I own and includes
              a result that is unflattering, which is the part that tells you what happens
              when the answer is not what a client hoped for.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
