import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";
import { STUDY } from "@/lib/citation-study";
import { SNAPSHOT } from "@/lib/ai-citation-proof";
import { OFFERS } from "@/lib/offers";

const SLUG = "/methodology/";

/**
 * THE IP LINE ON THIS PAGE — read before editing.
 *
 * Publish: how visibility is MEASURED (engines, prompt handling, what gets recorded,
 * which metrics, what the numbers can and cannot support). That is credibility, and
 * it backs up the "transparent methodology" claim the money pages already make.
 *
 * Never publish: how visibility is FIXED. The specific technical changes behind the
 * HomeCalc lift are the paid deliverable. Their existence is public; the mechanism is
 * not. See the note in src/lib/homecalc-proof.ts.
 */

export const metadata: Metadata = {
  title: "How I Measure AI Visibility — Methodology",
  description:
    "The measurement method behind every audit: which engines, how prompts are run and recorded, which metrics, and — just as importantly — what these numbers cannot prove.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

const FAQ_ITEMS = [
  {
    q: "Why publish your methodology at all?",
    a: "Because a number you can't interrogate isn't evidence. Most AI visibility providers report a score without saying which engines they queried, on what date, from which country, or how many times. That makes the result impossible to check and impossible to reproduce. Publishing the method is what separates a measurement from a marketing claim.",
  },
  {
    q: "Which AI engines do you actually measure?",
    a: "Six: Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, and Perplexity. They are not equivalent as data sources, which is the important part — only Copilot reports citations back to publishers, so it is the only engine where a first-party count exists. The rest are observed, not counted.",
  },
  {
    q: "Do you use an AI visibility score out of 100?",
    a: "No. A composite score hides more than it shows: two brands with the same score can have completely different problems. You get the underlying observations instead — where you appeared, where a competitor appeared instead, and what each engine said — because those are the things you can act on.",
  },
  {
    q: "Can you prove your work caused a change in citations?",
    a: "Not in the strict sense, and I won't claim otherwise. AI engines change their models and retrieval independently of anything a consultant does, so a rise after an implementation is correlation with a plausible mechanism — not proof of causation. What I do is record a dated baseline before any work starts, so at least the before-and-after is real and you can judge it yourself.",
  },
  {
    q: "How do you avoid cherry-picking a good result?",
    a: "By fixing the prompt set in advance, running it across engines rather than picking the flattering one, and recording the date and country of every answer. A single screenshot proves nothing — AI answers vary by session, phrasing, and region. Anything I report should say when it was captured and under what conditions.",
  },
];

const MEASURES = [
  {
    metric: "Mention",
    q: "Does the engine name you at all?",
    detail:
      "The most basic question, and the one most businesses fail. Being absent from the answer is a different problem from being described badly, and it has a different fix.",
  },
  {
    metric: "Citation",
    q: "Does it link to you as a source?",
    detail:
      "Distinct from a mention. An engine can describe your category accurately while citing a competitor's page as the source. Copilot is currently the only engine that reports this back to publishers first-party.",
  },
  {
    metric: "Recommendation",
    q: "Are you named as a suggested option?",
    detail:
      "The commercially meaningful one. Appearing in a list of examples is not the same as being the answer to “who should I hire.”",
  },
  {
    metric: "Accuracy",
    q: "Is what it says about you correct?",
    detail:
      "An inaccurate mention can be worse than none — wrong service, wrong location, wrong pricing, or confusion with a similarly-named business.",
  },
  {
    metric: "Share of voice",
    q: "Who gets named instead of you?",
    detail:
      "Measured on the same question, at the same time, against named competitors — because “you're not very visible” is not actionable, and “on this query they are named and you are not” is.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `https://hamitahm.com${SLUG}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "Methodology", item: `https://hamitahm.com${SLUG}` },
      ],
    },
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

export default function MethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <header style={{ padding: "72px 0 44px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <div style={eyebrow}>
              <span style={eyebrowLine} />
              Methodology
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              How I measure AI visibility &mdash;{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                and what the numbers can&rsquo;t prove.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 26,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "60ch",
                lineHeight: 1.65,
              }}
            >
              Most providers in this category report a score without saying which
              engines they asked, on what date, from which country, or how many times.
              That is not a measurement &mdash; it is a claim. This page documents the
              method behind every audit I deliver, including its limits.
            </p>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — What gets measured ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="01" text="What gets measured" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Five questions, not one score.</h2>
          </RevealSection>

          <div style={{ display: "grid", gap: 16, marginTop: 26 }}>
            {MEASURES.map((m, i) => (
              <RevealSection key={m.metric} delay={0.03 * i}>
                <div
                  style={{
                    border: "1px solid var(--line)",
                    borderLeft: "2px solid var(--accent)",
                    borderRadius: 6,
                    padding: "18px 22px",
                    background: "var(--panel)",
                  }}
                >
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}>
                    <span
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {m.metric}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12.5,
                        color: "var(--accent)",
                      }}
                    >
                      {m.q}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      marginTop: 8,
                    }}
                  >
                    {m.detail}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 — How it's recorded ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="How every observation is recorded" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>A result without conditions attached is noise.</h2>
            <p style={pStyle}>
              AI answers vary by session, by how the question is phrased, and by the
              country the query comes from. The same prompt can name you at 9am and
              omit you at 3pm. So every observation carries the conditions it was
              captured under:
            </p>
            <ul style={ulStyle}>
              <li>
                <b style={bStyle}>The exact prompt</b> &mdash; fixed in advance, not
                adjusted afterwards to produce a better-looking result.
              </li>
              <li>
                <b style={bStyle}>The engine</b> &mdash; reported separately, never
                merged into a single blended figure.
              </li>
              <li>
                <b style={bStyle}>The date</b> &mdash; every claim on this site is
                dated for this reason.
              </li>
              <li>
                <b style={bStyle}>The country</b> &mdash; a Toronto business gets
                different answers than the same query run from the US.
              </li>
              <li>
                <b style={bStyle}>Named competitors</b> &mdash; measured on the same
                question at the same time, so the comparison is like-for-like.
              </li>
            </ul>
            <p style={pStyle}>
              You can see this applied in the public{" "}
              <Link href={SNAPSHOT.caseStudyPath} style={linkStyle}>
                engine snapshot
              </Link>{" "}
              &mdash; {SNAPSHOT.engineCount} engines, one fixed prompt, captured{" "}
              {SNAPSHOT.displayDate}, each answer attributed to the engine that gave it.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — Where the numbers come from ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="03" text="Where the numbers come from" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Not all engines are equal as data sources.</h2>
            <p style={pStyle}>
              This is the distinction most reporting in this category gets wrong.{" "}
              <b style={bStyle}>
                Only Microsoft Copilot reports citations back to publishers.
              </b>{" "}
              Bing Webmaster Tools&rsquo; AI Performance report gives a first-party
              count: which of your pages were cited, how often, and the queries that
              retrieved them. ChatGPT, Perplexity, Gemini and Google AI Overviews
              expose no equivalent data to site owners.
            </p>
            <p style={pStyle}>
              So a citation <i>count</i> can only ever come from Copilot. Everything
              else is observation &mdash; running the prompt and recording what came
              back. Both are useful; conflating them is not.
            </p>

            <div
              style={{
                marginTop: 24,
                border: "1px solid var(--line)",
                borderLeft: "2px solid var(--accent)",
                background: "var(--accent-soft)",
                borderRadius: 4,
                padding: "20px 22px",
              }}
            >
              <p style={{ margin: 0, color: "var(--ink)", lineHeight: 1.7, fontSize: 15.5 }}>
                This is why the {HOMECALC_PROOF.citations} figure on this site is
                always attributed to {HOMECALC_PROOF.sourceLabel} and never presented
                as a cross-engine total. The{" "}
                <Link href="/blog/ai-citation-study/" style={linkStyle}>
                  AI Citation Study
                </Link>{" "}
                publishes a sample of the underlying data (CC BY 4.0) covering{" "}
                {STUDY.windowStart} to {STUDY.windowEnd}, so the method can be checked
                rather than taken on trust.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Limits ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="04" text="What this cannot prove" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>The limits, stated plainly.</h2>
            <ul style={ulStyle}>
              <li>
                <b style={bStyle}>Causation.</b> Engines change their models and
                retrieval on their own schedule. A rise after an implementation is
                correlation with a plausible mechanism &mdash; not proof. A dated
                baseline is what makes it judgeable at all.
              </li>
              <li>
                <b style={bStyle}>Completeness.</b> Manual observation samples a
                fixed prompt set. It cannot cover every phrasing a real buyer might use.
              </li>
              <li>
                <b style={bStyle}>Permanence.</b> Any snapshot describes the day it
                was taken. Answers move.
              </li>
              <li>
                <b style={bStyle}>Guaranteed outcomes.</b> No one controls what an AI
                engine says. Anyone promising a guaranteed citation or ranking is
                describing something they cannot deliver.
              </li>
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* ── 05 — What stays private ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="05" text="What stays private" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Measurement is public. The fix is the product.</h2>
            <p style={pStyle}>
              Everything above &mdash; how visibility is measured, recorded, and
              reported &mdash; is published so you can evaluate the work before paying
              for it. What is not published is the specific set of technical and
              structural changes that produced the results in the case study.
            </p>
            <p style={pStyle}>
              That is not evasiveness; it is the deliverable. You receive it in full,
              written down, in the{" "}
              <Link href={OFFERS.audit.href} style={linkStyle}>
                {OFFERS.audit.name}
              </Link>{" "}
              &mdash; documented so your own team can execute it, or so I can implement
              it for you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "20px 0 60px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="06" text="Questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {q}
                  </h3>
                  <p style={{ marginTop: 10, fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 0 80px" }}>
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
                See the method applied to your brand.
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "50ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                The free checker runs this same method on a small scale &mdash; your
                keywords, your competitors, dated and attributed.
              </p>
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <Link href={OFFERS.checker.href} className="btn btn-primary">
                  Run the free checker <span className="arr">&rarr;</span>
                </Link>
                <Link href={OFFERS.audit.href} className="btn btn-ghost">
                  Or book the full audit
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── shared bits ─────────────────────────────────────────────────────── */

const h2Style: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontWeight: 500,
  fontSize: "clamp(24px, 3.4vw, 34px)",
  lineHeight: 1.14,
  letterSpacing: "-.015em",
};
const pStyle: React.CSSProperties = {
  marginTop: 18,
  fontSize: "clamp(16px, 1.9vw, 18px)",
  color: "var(--muted)",
  lineHeight: 1.7,
};
const ulStyle: React.CSSProperties = {
  marginTop: 18,
  paddingLeft: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 14,
  fontSize: "clamp(15.5px, 1.8vw, 17px)",
  color: "var(--muted)",
  lineHeight: 1.65,
};
const bStyle: React.CSSProperties = { color: "var(--ink)", fontWeight: 500 };
const linkStyle: React.CSSProperties = { color: "var(--accent)", fontWeight: 500 };

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  letterSpacing: ".18em",
  color: "var(--accent)",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: 12,
};
const eyebrowLine: React.CSSProperties = {
  width: 34,
  height: 1,
  background: "var(--accent)",
  display: "inline-block",
};

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
