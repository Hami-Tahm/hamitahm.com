import Link from "next/link";
import { BOOKING_URL } from "@/lib/offers";
import { BENCHMARK } from "@/lib/homecalc-benchmark-2026-10";

/**
 * The one funnel the site sells through (decided with Hami, 2026-11-10):
 *   free AI visibility check  ->  written report  ->  20-minute call.
 *
 * Shared by the homepage and the AEO / GEO landing pages (Google Ads final URLs since
 * 2026-11-10) so the promise is worded the same everywhere. Every step restates what
 * the checker page already commits to: the engines it covers, a report read and
 * written by a person within one business day, Canada and the United States only.
 * Change those facts on the checker page first, then here.
 *
 * Buttons: the free check is the primary action; booking a call is the quiet
 * secondary for people who already know they want to talk. Under 560px both go
 * full width (.funnel-ctas in globals.css).
 */

export const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-benchmark-canada/";

const STEPS = [
  {
    n: "1",
    title: "Free check",
    text: "Tell me your domain and up to three searches your customers make.",
  },
  {
    n: "2",
    title: "Written report",
    text: "I run them on ChatGPT, Google AI Overview and Gemini, and send what each says about you within one business day.",
  },
  {
    n: "3",
    title: "20-minute call",
    text: "We go through the report together. You decide whether a full audit is worth it. No obligation.",
  },
] as const;

export default function FreeCheckFunnel({
  buttons = true,
  booking = true,
  proof = false,
  center = false,
}: {
  /** Show the CTA buttons above the steps. */
  buttons?: boolean;
  /** Show "Book a free call" as the secondary button. */
  booking?: boolean;
  /** Show the HomeCalc benchmark line under the steps. */
  proof?: boolean;
  /** Centre the block (for the final CTA panels). */
  center?: boolean;
}) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {buttons && (
        <div
          className="funnel-ctas"
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: center ? "center" : "flex-start",
          }}
        >
          <Link href={CHECKER_URL} className="btn btn-primary">
            Get your free AI visibility check <span className="arr">&rarr;</span>
          </Link>
          {booking && (
            <Link href={BOOKING_URL} className="btn btn-ghost">
              Or book a free call
            </Link>
          )}
        </div>
      )}

      <ol
        className="funnel-steps"
        style={{
          listStyle: "none",
          padding: 0,
          margin: buttons ? "26px 0 0" : 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 14,
          textAlign: "left",
        }}
      >
        {STEPS.map((s) => (
          <li
            key={s.n}
            style={{
              borderLeft: "2px solid var(--accent)",
              padding: "2px 0 2px 14px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Step {s.n} &middot; {s.title}
            </div>
            <p style={{ margin: "6px 0 0", fontSize: 14.5, color: "var(--muted)", lineHeight: 1.55 }}>
              {s.text}
            </p>
          </li>
        ))}
      </ol>

      <p
        style={{
          margin: "14px 0 0",
          fontSize: 13,
          color: "var(--faint)",
          fontFamily: "var(--mono)",
        }}
      >
        Free for businesses in Canada and the United States.
      </p>

      {proof && (
        <p style={{ margin: "18px 0 0", fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: "62ch", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>
          <strong style={{ color: "var(--ink)" }}>Proof on my own site:</strong>{" "}
          in a {BENCHMARK.promptCount}-question Canadian mortgage benchmark across{" "}
          {BENCHMARK.engines.length} AI engines ({BENCHMARK.otterlyWindowShort}),
          HomeCalc.ca was the most-cited non-government domain, ahead of Ratehub and WOWA.{" "}
          <Link href={CASE_STUDY_URL} style={{ color: "var(--accent)", fontWeight: 600 }}>
            See the case study &rarr;
          </Link>
        </p>
      )}
    </div>
  );
}
