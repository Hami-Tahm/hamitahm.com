import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";

/**
 * How to track Perplexity citations, built on first-party repeated measurements.
 *
 * WHY THIS PAGE (2026-10-02). Search Console, three months to Sep 29: a cluster of
 * tracking queries with nowhere good to land. "perplexity visibility checks" (301
 * impressions), "how can i see mentions in perplexity?" (76), "track perplexity source
 * urls" (75), "how can i track sources mentioned by perplexity?" (52), "perplexity
 * citation tracking", "perplexity source urls", at average positions of 20 to 68.
 * /blog/how-to-get-cited-by-perplexity/ answers a different intent (getting cited)
 * and gives tracking one short section. This page is the measurement answer.
 *
 * ⚠️ EVERY NUMBER IN SECTIONS 02 AND 03 COMES FROM THE MEASUREMENT LOG, not memory:
 * citation-engine EXPERIMENTS.md, entries dated 2026-09-12 and 2026-09-14. Runs:
 *   pilot-hard-2026-09-12T13-37-13-569Z   240 calls, 15 reps
 *   pilot-hard-2026-09-12T21-51-33-205Z   408 calls, 68 reps
 *   pilot-hard-2026-09-14T13-32-18-660Z   68 reps, 40 hours later
 *   pilot-hard-2026-09-14T21-47-19-046Z   truncated at 29 reps, 8 hours later
 * If a figure here is ever changed, change it there first.
 *
 * Tool coverage in section 01 was read from each vendor's pricing page on
 * 2026-10-02, the same day /blog/peec-vs-profound-vs-airops/ was re-verified.
 */

const SLUG = "track-perplexity-citations";
const ARTICLE_TITLE = "How to Track Perplexity Citations (and Why One Check Means Nothing)";
const ARTICLE_DESCRIPTION =
  "Four ways to see where Perplexity cites you, and what repeated measurement shows: a domain cited in 68 of 68 runs was cited in 2 of 68 forty hours later. How many runs a Perplexity result actually needs, with the numbers.";
const DATE_PUBLISHED = "2026-10-02";

const HUB_URL = "/ai-visibility/";
const GET_CITED_URL = "/blog/how-to-get-cited-by-perplexity/";
const COMPARISON_URL = "/blog/peec-vs-profound-vs-airops/";
const TOOL_ACCURACY_URL = "/blog/ai-visibility-tool-accuracy/";
const METHODOLOGY_URL = "/methodology/";
const PERPLEXITY_CRAWLERS_URL = "https://docs.perplexity.ai/docs/resources/perplexity-crawlers";

/** Closed-form binomial, ±10 percentage points at 90% confidence. From the 2026-09-12 log entry. */
const RUNS_ABSOLUTE = [
  { rate: "5%", runs: "13" },
  { rate: "10%", runs: "25" },
  { rate: "30%", runs: "57" },
  { rate: "50%", runs: "68" },
] as const;

/** Runs needed for ±25% of the rate itself. From the 2026-09-12 log entry. */
const RUNS_RELATIVE = [
  { rate: "5%", runs: "823" },
  { rate: "10%", runs: "390" },
  { rate: "20%", runs: "174" },
  { rate: "30%", runs: "102" },
  { rate: "50%", runs: "44" },
] as const;

const FAQ_ITEMS = [
  {
    q: "How can I see where Perplexity mentions my site?",
    a: "Four ways, from cheapest to most reliable: ask Perplexity your buyers' questions yourself and read the Sources list; check your analytics for visits referred by perplexity.ai; check your server or CDN logs for Perplexity's crawlers, PerplexityBot and Perplexity-User; or use Perplexity's API or a tracking tool that includes Perplexity, which records the cited sources for every answer. Whichever you use, run each question more than once, because a single answer is a single sample.",
  },
  {
    q: "Why does my Perplexity result change every time I check?",
    a: "Because Perplexity's citations genuinely move, often within hours. In my own repeated measurements in September 2026, one domain was cited in all 68 of 68 runs of a prompt, then in 2 of 68 runs forty hours later. Another went from 10% to 97% to 21% across three sessions in two days. A single check shows you where the answer happened to land that moment, not where it usually lands.",
  },
  {
    q: "How many times should I run a prompt in Perplexity?",
    a: "It depends on how often you are cited. To pin a rate within plus or minus 10 percentage points at 90% confidence you need about 13 runs if the true rate is near 5%, 25 near 10%, 57 near 30%, and 68 near 50%. And because the rate itself moves within hours, every figure needs the date it was measured.",
  },
  {
    q: "Which AI visibility tools track Perplexity?",
    a: "Coverage is tier-gated, so check the plan, not the logo row. As of October 2, 2026: Semrush's AI Visibility toolkit, from $99 a month, includes Perplexity; Peec offers Perplexity as a paid add-on on its self-serve plans and includes it on Enterprise; Profound includes it on Enterprise; AirOps includes it on Pro, which has no published price.",
  },
] as const;

const blogGraph = buildBlogSchema({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
})["@graph"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...blogGraph,
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

// Search snippet (<=158 chars). Kept separate from any long on-page/schema
// description, which can stay longer. Added 2026-10-03.
const META_DESCRIPTION =
  "Four ways to track Perplexity citations, and why one check means nothing: a site cited in 68 of 68 runs was cited in 2 of 68 forty hours later.";
// Under ~48 chars so the " | Hami Tahm" suffix still fits a Google title.
const META_TITLE = "How to Track Perplexity Citations";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
};

const linkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
  textDecorationThickness: 1,
} as const;

const h3Style = {
  fontFamily: "var(--serif)",
  fontWeight: 600,
  fontSize: 23,
  letterSpacing: "-.01em",
  margin: "34px 0 12px",
  color: "var(--ink)",
} as const;

const cellBase: React.CSSProperties = {
  padding: "11px 12px",
  fontSize: 14.5,
  borderBottom: "1px solid var(--line)",
  textAlign: "left",
  verticalAlign: "top",
};
const thStyle: React.CSSProperties = {
  ...cellBase,
  fontFamily: "var(--mono)",
  fontSize: 11.5,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "var(--faint)",
  borderBottom: "1px solid var(--line-strong)",
  fontWeight: 400,
};
const numCell: React.CSSProperties = { ...cellBase, textAlign: "right", fontFamily: "var(--mono)", fontSize: 13.5 };
const numHead: React.CSSProperties = { ...thStyle, textAlign: "right" };
const captionStyle: React.CSSProperties = {
  fontFamily: "var(--sans)",
  fontSize: 13,
  color: "var(--faint)",
  margin: "0 0 26px",
};

export default function TrackPerplexityCitationsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <RevealSection>
          <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
            <Link href={HUB_URL} style={{ color: "var(--muted)" }}>AI Visibility</Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>Blog</Link>
            <span>/</span>
            <span>Track Perplexity citations</span>
          </nav>
        </RevealSection>
      </div>

      <header style={{ padding: "24px 0 26px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11.5px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              Measurement
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.6vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-.025em",
                maxWidth: "21ch",
              }}
            >
              How to track Perplexity citations,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                and why one check means nothing.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 21,
                color: "var(--muted)",
                marginTop: 18,
                lineHeight: 1.5,
              }}
            >
              Four ways to see where Perplexity cites you, and what hundreds of
              repeated runs show about how much a single answer can be trusted.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="October 2, 2026" readTime="8 min read" />
          </RevealSection>
        </div>
      </header>

      <article>
        <div
          className="wrap"
          style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.72, color: "#2a2824", maxWidth: 740 }}
        >
          <RevealSection>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "6px 0 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                In short
              </div>
              <ul style={{ fontFamily: "var(--sans)", fontSize: 16, color: "var(--ink)", lineHeight: 1.55, margin: 0, paddingLeft: 20 }}>
                <li style={{ marginBottom: 8 }}>
                  You can see Perplexity citations four ways: ask it yourself, read
                  perplexity.ai referrals, read Perplexity&rsquo;s crawler visits in your
                  logs, or record sources at scale through the API or a tracking tool.
                </li>
                <li style={{ marginBottom: 8 }}>
                  One answer is one sample. In my measurements, a domain cited in 68 of
                  68 runs was cited in 2 of 68 forty hours later.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Pinning a rate within plus or minus 10 points takes 13 to 68 runs of
                  the same prompt, depending on the rate, in one session.
                </li>
                <li>
                  Every figure needs its measurement date. Perplexity&rsquo;s citations
                  move on a timescale of hours.
                </li>
              </ul>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This is about measuring where you stand. If you are earlier than that
              and want to be cited in the first place, start with{" "}
              <Link href={GET_CITED_URL} style={linkStyle}>
                how to get cited by Perplexity
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="Four ways to see where Perplexity cites you" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>1. Ask it yourself, and read the sources</h3>
            <p style={{ marginBottom: 26 }}>
              Ask Perplexity the questions your buyers actually ask, in a fresh thread
              each time so an earlier conversation does not shape the answer, and read
              the Sources list rather than just the answer text. Record three things
              alongside each result: the date, the country you asked from, and whether
              you were named in the text, cited as a source, or both. Those are
              different outcomes and it is worth keeping them apart. Free, slow, and
              fine for a first look.
            </p>

            <h3 style={h3Style}>2. Read perplexity.ai referrals in your analytics</h3>
            <p style={{ marginBottom: 26 }}>
              Visits that arrive from a Perplexity answer show perplexity.ai as the
              referrer. This tells you which pages people actually clicked through to,
              which is the number closest to business value. It badly undercounts
              citations, though: most people read the answer and never click.
            </p>

            <h3 style={h3Style}>3. Read Perplexity&rsquo;s crawler visits in your logs</h3>
            <p style={{ marginBottom: 26 }}>
              Perplexity runs two crawlers,{" "}
              <a href={PERPLEXITY_CRAWLERS_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                PerplexityBot and Perplexity-User
              </a>
              . The second fetches a page when a user&rsquo;s question needs it, so its
              visits are the closest thing in your own logs to &ldquo;Perplexity read
              this page to answer someone&rdquo;. Server logs, your CDN, and some
              analytics tools such as Microsoft Clarity report these by page. On this
              site, Clarity logged 78 requests from Perplexity&rsquo;s bots in the 30
              days to October 2, 2026. Being fetched is not the same as being cited,
              but a page Perplexity never fetches is a page it cannot cite.
            </p>

            <h3 style={h3Style}>4. Record sources at scale: the API or a tracker</h3>
            <p style={{ marginBottom: 26 }}>
              Perplexity&rsquo;s API returns the list of sources it used with every
              answer, which makes it the easiest of the major engines to measure
              programmatically, and it is how the measurements in the next section
              were taken. If you would rather not build anything, several AI
              visibility tools track Perplexity, but check the tier: as of October 2,
              2026, Semrush&rsquo;s AI Visibility toolkit (from $99 a month) includes
              it, Peec sells it as a paid add-on on its self-serve plans, Profound
              includes it on Enterprise, and AirOps on Pro, which has no published
              price. Details in{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                the Profound, AirOps and Peec comparison
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Why one check means nothing" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              In September 2026 I ran the same contested buyer prompts through
              Perplexity and ChatGPT dozens of times each, in separate sessions days
              and hours apart, and recorded every source cited in every answer. Then I
              compared how often each domain was cited from one session to the next.
            </p>
            <p style={{ marginBottom: 26 }}>
              Some of it was stable. Some of it was not stable at all. On one prompt in
              Perplexity, a domain was cited in all 68 of 68 runs, and 40 hours later
              in 2 of 68. Another domain on the same prompt was cited in 10% of runs,
              then 97% forty hours later, then 21% eight hours after that. That is not
              a slow drift in one direction. It is oscillation.
            </p>
            <p style={{ marginBottom: 26 }}>
              Across the two full sessions, 11 of 109 measured citation rates moved by
              more than sampling error could explain, after a strict correction for
              testing many things at once. Eight of those eleven were Perplexity. A
              comparison eight hours apart on the same day showed as much movement as
              one 48 hours apart at the same clock time, which rules out a simple
              nightly refresh: the churn is continuous.
            </p>
            <p style={{ marginBottom: 26 }}>
              So if you check once and see yourself cited, you have learned that you
              can be cited. You have not learned how often, and you have not learned
              whether it will be true tomorrow.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="How many runs a result actually needs" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 22 }}>
              Treat each run as a yes or no: cited, or not. How many runs it takes to
              know the rate depends on the rate itself, and mid-range rates are the
              expensive ones. To pin a rate within plus or minus 10 percentage points
              at 90% confidence:
            </p>
            <div style={{ overflowX: "auto", margin: "0 0 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--sans)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>If you are cited about</th>
                    <th style={numHead}>Runs of the same prompt</th>
                  </tr>
                </thead>
                <tbody>
                  {RUNS_ABSOLUTE.map((r) => (
                    <tr key={r.rate}>
                      <td style={cellBase}>{r.rate} of the time</td>
                      <td style={numCell}>{r.runs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={captionStyle}>
              Binomial sample size, plus or minus 10 points at 90% confidence. Tested
              directly at 68 runs: every one of the 67 variable citation rates measured
              stabilised, including the 20 to 80% band that never stabilised at 15 runs.
            </p>
            <p style={{ marginBottom: 22 }}>
              There is a catch at the low end, which is where most businesses start. A
              plus or minus 10 point margin cannot tell 0% from 10%, so it cannot see
              you go from 4% to 8%, which is a doubling. Measuring the change relative
              to the rate itself, within 25% of its own value, costs far more:
            </p>
            <div style={{ overflowX: "auto", margin: "0 0 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--sans)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>True citation rate</th>
                    <th style={numHead}>Runs for &plusmn;25% of the rate</th>
                  </tr>
                </thead>
                <tbody>
                  {RUNS_RELATIVE.map((r) => (
                    <tr key={r.rate}>
                      <td style={cellBase}>{r.rate}</td>
                      <td style={numCell}>{r.runs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={captionStyle}>
              Same measurement log, September 12, 2026.
            </p>
            <p style={{ marginBottom: 26 }}>
              The practical conclusion is not &ldquo;run every prompt 800 times&rdquo;.
              It is that a precise rate on a handful of prompts is the wrong thing to
              buy. Coverage across many prompts, each run enough times to be honest,
              tells you more for the same effort. More on why tools rarely say this in{" "}
              <Link href={TOOL_ACCURACY_URL} style={linkStyle}>
                how to judge AI visibility tool accuracy
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="A tracking routine that holds up" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong>Fix the prompt set.</strong> Write down the 10 to 30 questions
                your buyers ask, in their words, and do not edit them between
                measurements. A changed prompt is a different measurement.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong>Run each prompt several times per session,</strong> not once,
                and record every source in every answer, not only yours. Competitors
                moving is half the story.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong>Date every number,</strong> and note the country you asked
                from. A rate from last Tuesday is a historical fact, not a current one.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong>Compare sessions with suspicion.</strong> A before-and-after
                difference can be real churn rather than the effect of anything you
                changed. Repeat the &ldquo;after&rdquo; session before believing it.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong>Check fetches alongside citations.</strong> If Perplexity-User
                never fetches a page, fix crawlability before anything else.
              </li>
            </ol>
            <p style={{ marginBottom: 26 }}>
              The full measurement method behind this page is on the{" "}
              <Link href={METHODOLOGY_URL} style={linkStyle}>
                methodology page
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} style={{ marginBottom: 26 }}>
                <h3 style={h3Style}>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
            <p style={{ fontFamily: "var(--sans)", fontSize: 15, color: "var(--muted)", fontStyle: "italic", margin: "30px 0 0" }}>
              Hami Tahm is an AI visibility consultant based in Toronto.
            </p>
          </RevealSection>
        </div>
      </article>

      <section style={{ padding: "60px 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <div className="final-cta">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                Want this measured for your brand, properly?
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Your buyers&rsquo; questions, across Perplexity and the other major
                engines, each result recorded with its date and country.
              </p>
              <Link href={OFFERS.checker.href} className="btn btn-primary" style={{ marginTop: 30, position: "relative" }}>
                Run the free AI Visibility Check <span className="arr">&rarr;</span>
              </Link>
              <Link
                href={OFFERS.audit.href}
                className="btn btn-ghost"
                style={{ marginTop: 14, marginLeft: 12, position: "relative" }}
              >
                Get an audit by an expert
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <h2
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 34,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </h2>
  );
}
