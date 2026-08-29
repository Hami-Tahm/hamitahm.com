import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";
import { getAuditPricing } from "@/lib/currency";

const SLUG = "ai-visibility-tool-accuracy";
const ARTICLE_TITLE = "How to Evaluate AI Visibility Tool Accuracy";
const ARTICLE_DESCRIPTION =
  "AI visibility platforms like Profound, AirOps, Peec, and Share-of-Model trackers all report a number, but they don't all measure the same thing the same way. A self-test protocol and the questions to ask any vendor before you trust their dashboard.";
const DATE_PUBLISHED = "2026-08-26";
const HUB_URL = "/ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const HOW_TO_CHECK_URL = "/blog/how-to-check-ai-visibility/";
const CHECKLIST_URL = "/blog/ai-visibility-audit-checklist/";
const COMPARISON_URL = "/blog/peec-vs-profound-vs-airops/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const SOM_DEFINITION_SRC = "https://cdp.com/glossary/share-of-model/";

const FAQ_ITEMS = [
  {
    q: "How do I know if an AI visibility tool's numbers are accurate?",
    a: "Run the same 10-15 prompts manually on the same platforms the tool claims to track, on the same day, and compare. If the tool shows a mention the manual check doesn't confirm (or misses one the manual check finds), that's a real discrepancy, not necessarily a broken tool, since AI answers vary by session too, but a data point worth repeating three times before you draw a conclusion either way.",
  },
  {
    q: "What's the difference between a false positive and a false negative in AI visibility tracking?",
    a: "A false positive is a tool reporting you were mentioned when a manual check of the same prompt and platform doesn't show it. A false negative is the reverse: you were actually mentioned, but the tool's sample didn't catch it. Sampled tools produce more false negatives than false positives, since missing an instance is a lot easier than inventing one.",
  },
  {
    q: "Do all AI visibility tools sample the same way?",
    a: "No. Publicly described approaches vary: some tools run a large, repeated set of prompts and treat the response distribution as the signal; others draw prompts from real user-intent sources like search queries or support tickets; some rely on scraping each platform's own interface rather than its API. Each approach has different blind spots, which is exactly why a vendor's dashboard number and your own manual check can legitimately disagree.",
  },
  {
    q: "Is Share of Model a specific tool or a metric?",
    a: "Both, depending on who's using the phrase. As a metric, share of model is your brand's mentions as a percentage of all brand mentions in your category, across the AI platforms your buyers use, the AI-era equivalent of share of voice. Several vendors also sell a product under that name. Before comparing a \"share of model\" number between two tools, confirm both are measuring the same set of platforms and prompts, or the comparison is meaningless.",
  },
  {
    q: "Should I trust a vendor's own accuracy claims?",
    a: "Read them, but verify with your own prompts before buying: this is a self-test protocol, not a defense of any one platform. A vendor's marketing page will describe its methodology in the most favorable light available; your own core buyer questions, run on your own account, are the only test that tells you how the tool performs on the thing you actually need it to track.",
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

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
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

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

export default async function AIVisibilityToolAccuracyPost() {
  const { priceWithCurrency } = await getAuditPricing();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <RevealSection>
          <nav
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--faint)",
              display: "flex",
              gap: 8,
            }}
          >
            <Link href={HUB_URL} style={{ color: "var(--muted)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>
              Blog
            </Link>
            <span>/</span>
            <span>Tool Accuracy</span>
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
              Tools & Comparisons
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-.025em",
              }}
            >
              How to evaluate AI visibility tool accuracy:{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                before you buy one.
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
              Profound, AirOps, Peec, and Share-of-Model trackers all report a
              number. They don&rsquo;t all measure the same thing the same
              way. Here&rsquo;s how to test one yourself.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="August 26, 2026" readTime="10 min read" />
          </RevealSection>
        </div>
      </header>

      <article>
        <div
          className="wrap"
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            lineHeight: 1.72,
            color: "#2a2824",
            maxWidth: 740,
          }}
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
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 16,
                  color: "var(--ink)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                No independent, apples-to-apples accuracy benchmark of these
                platforms exists publicly, including here. What does exist is
                a repeatable way to test any one of them yourself in an
                afternoon. This is that protocol, not a ranked score.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              A fair warning before the framework: this article does not
              contain a scored comparison of Profound, AirOps, Peec, or any
              Share-of-Model tool&rsquo;s accuracy. Producing one honestly
              would require running the same fixed set of prompts through
              every platform, repeated enough times to separate a real
              pattern from ordinary AI response variance, then checking every
              result by hand: work no publisher of a comparison post
              actually appears to do, judging by how few show their prompts or
              their method. Publishing invented numbers instead would be
              worse than publishing nothing. What follows is the test protocol
              itself, so you can run it against whichever tool you&rsquo;re
              evaluating.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="01"
              text='Why "accuracy" means different things for different tools'
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Every AI visibility platform reports a headline number:
              mentions, citations, share of model. What differs, often
              unstated, is what sits underneath that number: how many prompts
              were actually run, how those prompts were chosen, how often
              each one is repeated, and whether the underlying AI response was
              read by a person or only pattern-matched by a script. Two tools
              can both report "you appear in 40% of relevant AI answers" while
              measuring genuinely different things. For background on what
              the underlying concept is measuring, see{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Four dimensions worth testing separately" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>Coverage</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What to check:</strong>{" "}Which
              platforms does the tool actually query, and at what tier? A
              vendor advertising broad engine support often gates most of it
              behind a higher plan; our own{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                Profound vs AirOps vs Peec comparison
              </Link>{" "}
              found each vendor's entry-level plan covers meaningfully fewer
              engines than the number in its marketing headline.
            </p>
            <h3 style={h3Style}>Sample size and repetition</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What to check:</strong>{" "}How many
              prompts run, and how many times each one repeats? A single run
              of a prompt tells you what the model said once. AI answers vary
              by session, so a tool that runs each prompt once and reports the
              result as fact is reporting a sample of one.
            </p>
            <h3 style={h3Style}>Freshness</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What to check:</strong>{" "}How
              recently was the dashboard number actually refreshed? Some
              platforms update daily; others batch on a longer cycle. A
              number that's three weeks stale can describe a competitive
              landscape that's already changed.
            </p>
            <h3 style={h3Style}>Verification</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What to check:</strong>{" "}Is a
              "mention" counted by a person reading the response, or by a
              script matching your brand name in the text? Automated matching
              misses paraphrased references and can also over-count:
              your brand name appearing in a disclaimer or a competitor list
              is not the same as being recommended.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="03"
              text="A self-test protocol you can run in an afternoon"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              This is the same manual method covered in{" "}
              <Link href={HOW_TO_CHECK_URL} style={linkStyle}>
                how to check AI visibility
              </Link>
              , applied specifically to test a tool rather than your own
              brand:
            </p>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 14 }}>
                <strong style={labelStyle}>Pick 10&ndash;15 real buyer
                questions</strong>{" "}you already know the likely answer to,
                ideally a mix of ones where you&rsquo;re confident
                you're mentioned and ones where you suspect you aren't.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={labelStyle}>Run each one manually</strong>{" "}
                on every platform the tool claims to track, on the same day
                you check the tool's dashboard, and record whether you're
                mentioned, in what position, and whether the description is
                accurate.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={labelStyle}>Pull the same prompts from the
                tool</strong>{" "}(or the closest equivalent it tracks) and
                compare row by row.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={labelStyle}>Flag every mismatch</strong>{" "}
                as a false positive (tool says yes, manual check says no) or
                false negative (tool says no, manual check says yes) rather
                than averaging them away.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={labelStyle}>Repeat once more, a few days
                later</strong>, before drawing a conclusion: a single
                mismatch can be ordinary AI response variance rather than a
                tool problem, but a mismatch that repeats is a real signal.
              </li>
            </ol>
            <p style={{ marginBottom: 26 }}>
              Use the checklist's{" "}
              <Link href={CHECKLIST_URL} style={linkStyle}>
                citation and mention tracking section
              </Link>{" "}
              if you want the same categories laid out as a standing
              checklist rather than a one-time protocol.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="04"
              text="Questions worth asking any vendor before you trust their number"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                How many prompts run per report, and are they yours, a
                generated set, or drawn from real search or support data?
              </li>
              <li style={{ marginBottom: 11 }}>
                How many times is each prompt repeated before a result is
                reported?
              </li>
              <li style={{ marginBottom: 11 }}>
                Is a "mention" verified by a person, or only pattern-matched?
              </li>
              <li style={{ marginBottom: 11 }}>
                How often does the dashboard actually refresh?
              </li>
              <li style={{ marginBottom: 11 }}>
                Which specific platforms are included at the plan you'd
                actually pay for, not the plan in the marketing
                headline?
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              A vendor that answers all five specifically, rather than in
              marketing language, is telling you something. So is one that
              can't.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text='A note on "Share of Model"'
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <a
                href={SOM_DEFINITION_SRC}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Share of model
              </a>{" "}
              is used two ways in this space, and mixing them up is its own
              accuracy problem. As a metric, it's your brand's mentions as a
              percentage of all brand mentions in your category: the
              AI-era version of share of voice. Several vendors also sell a
              product under that literal name. Before comparing a share-of-
              model number pulled from two different tools, confirm they
              covered the same platforms and the same prompt set. Otherwise
              you're comparing two different measurements that happen to
              share a label.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ marginBottom: 36 }}>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 21,
                      fontWeight: 600,
                      letterSpacing: "-.01em",
                      color: "var(--ink)",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              For the full{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              strategy framework, see the hub. For published pricing and
              engine coverage across three specific platforms, see{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                Profound vs AirOps vs Peec
              </Link>
              , and for the wider field, see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the best AI visibility tools
              </Link>
              .
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <em>
                Hami Tahm is an AI visibility consultant based in Toronto.
              </em>
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                color: "var(--faint)",
                lineHeight: 1.65,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px solid var(--line)",
              }}
            >
              <strong style={{ color: "var(--muted)", fontWeight: 600 }}>
                Disclosure:
              </strong>{" "}
              This article is educational and also describes a service I
              sell. It does not contain an original accuracy benchmark of any
              named platform: see the note in Section 01 for why.
            </p>
          </RevealSection>
        </div>

        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <div
              style={{
                padding: "44px 0 30px",
                borderTop: "1px solid var(--line)",
                marginTop: 44,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 22,
                }}
              >
                Keep reading
              </div>

              <KeepReadingLink
                href={COMPARISON_URL}
                title="Profound vs AirOps vs Peec"
                tag="Tools & Comparisons"
              />
              <KeepReadingLink
                href={CHECKLIST_URL}
                title="The AI Visibility Audit Checklist"
                tag="Strategy"
              />
              <KeepReadingLink
                href={HOW_TO_CHECK_URL}
                title="How to Check AI Visibility: 7 Free Methods"
                tag="Basics"
              />
            </div>
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
                Skip the dashboard debate. Get a verified answer.
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
                Cross-platform citation analysis, accuracy review checked by a
                person, competitor gap mapping, and a prioritized action plan.{" "}
                {priceWithCurrency} {OFFERS.audit.priceNote}.
              </p>
              <Link
                href={OFFERS.checker.href}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI Visibility Check{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href={OFFERS.audit.href}
                className="btn btn-ghost"
                style={{ marginTop: 14, marginLeft: 12, position: "relative" }}
              >
                Or book the {priceWithCurrency} audit
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

function InlineAuditCTA() {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 14,
        padding: "30px 32px",
        margin: "42px 0",
        boxShadow:
          "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-.01em",
        }}
      >
        Rather not build the test yourself?
      </h3>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: "14.5px",
          color: "var(--muted)",
          margin: "8px 0 18px",
          lineHeight: 1.55,
        }}
      >
        The audit runs the same kind of verification described above across
        all six major platforms, with every mention checked by a person, not
        just pattern-matched.
      </p>
      <Link href={OFFERS.audit.href} className="btn btn-primary">
        Book an AI Visibility Audit <span className="arr">&rarr;</span>
      </Link>
    </div>
  );
}

function KeepReadingLink({
  href,
  title,
  tag,
}: {
  href: string;
  title: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 20,
        padding: "15px 0",
        borderBottom: "1px solid var(--line)",
        transition: "padding-left .2s",
      }}
    >
      <span
        style={{
          fontFamily: "var(--serif)",
          fontSize: 19,
          fontWeight: 500,
          color: "var(--ink)",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11.5px",
          color: "var(--faint)",
          whiteSpace: "nowrap",
        }}
      >
        {tag}
      </span>
    </Link>
  );
}
