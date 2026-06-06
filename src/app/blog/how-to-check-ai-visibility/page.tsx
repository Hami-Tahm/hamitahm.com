import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "How to Check Your AI Visibility",
  description:
    "Step-by-step guide to checking how your brand appears in ChatGPT, Perplexity, Google AI Overviews, and other AI search engines.",
  alternates: {
    canonical: "https://hamitahm.com/blog/how-to-check-ai-visibility/",
  },
};

export default function HowToCheckAIVisibilityPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "how-to-check-ai-visibility",
            title: "How to Check Your AI Visibility",
            description: "Step-by-step guide to checking how your brand appears in ChatGPT, Perplexity, Google AI Overviews, and other AI search engines.",
            datePublished: "2026-05-12",
          }),
        }}
      />
      {/* ── Breadcrumb ── */}
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
            <Link href="/ai-visibility/" style={{ color: "var(--muted)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>
              Blog
            </Link>
            <span>/</span>
            <span>How to Check Your AI Visibility</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Header ── */}
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
              Basics
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
              How to check your{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI visibility.
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
              A practical, step-by-step process for seeing how your brand
              appears &mdash; or doesn&rsquo;t &mdash; across every major AI
              engine.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 26,
                paddingTop: 22,
                borderTop: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid var(--line-strong)",
                  background: "linear-gradient(145deg,#e8dfce,#fff)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Hami Tahm</div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    marginTop: 1,
                  }}
                >
                  Updated 2026 &middot; 9 min read
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Article ── */}
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
          {/* ── TL;DR ── */}
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
                You can manually check by asking AI engines about your industry.
                For a systematic assessment, you need to test across multiple
                engines, prompts, and query types &mdash; then track the results
                over time.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — Why you should check ── */}
          <RevealSection>
            <SectionLabel number="01" text="Why you should check" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Most businesses have never asked an AI about themselves. They
              assume that if they rank well on Google, they&rsquo;re covered. But{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                AI visibility and search rankings are separate things.
              </strong>{" "}
              You can rank #1 on Google and be completely absent from ChatGPT
              answers.
            </p>

            <p style={{ marginBottom: 26 }}>
              Checking is the first step because you can&rsquo;t improve what
              you haven&rsquo;t measured. A five-minute check can reveal whether
              you&rsquo;re being recommended, ignored, or &mdash; worse &mdash;
              misrepresented.
            </p>
          </RevealSection>

          {/* ── 02 — Manual checking method ── */}
          <RevealSection>
            <SectionLabel number="02" text="Manual checking method" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Start with the engines your customers are most likely using. For
              each one, ask the types of questions a potential customer would ask
              about your industry.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              ChatGPT
            </h3>
            <p style={{ marginBottom: 26 }}>
              Open a new conversation (don&rsquo;t use an existing thread
              &mdash; context from earlier messages will skew results). Ask
              questions like: &ldquo;Who are the best [your service] providers in
              [your city]?&rdquo; &ldquo;Can you recommend a [your category]
              company in Canada?&rdquo; Try 5&ndash;10 variations. Note whether
              you appear, how you&rsquo;re described, and who else is mentioned.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Perplexity
            </h3>
            <p style={{ marginBottom: 26 }}>
              Run the same queries. Perplexity shows its sources, so you can see
              exactly which pages it cited. Check whether your website appears in
              the footnotes. If a competitor&rsquo;s page is cited instead, note
              which page and why it might have been selected.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Google AI Overviews
            </h3>
            <p style={{ marginBottom: 26 }}>
              Search Google for your target queries and look at the AI-generated
              summary at the top of the results page. Not every query triggers an
              AI Overview, but when they do, check whether your brand or content
              is referenced in the generated answer.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Other engines
            </h3>
            <p style={{ marginBottom: 26 }}>
              Depending on your audience, also check Microsoft Copilot (used by
              enterprise customers) and Claude (growing in professional use).
              Each engine has different training data and retrieval methods, so
              your visibility varies across them.
            </p>
          </RevealSection>

          {/* ── 03 — What to look for ── */}
          <RevealSection>
            <SectionLabel number="03" text="What to look for" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              When you run your queries, you&rsquo;ll find your brand falls into
              one of three categories:
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Named.
              </strong>{" "}
              The AI mentions your brand by name. This is the goal. Check how
              you&rsquo;re described &mdash; is it accurate? Is it
              favourable? Are competitors mentioned alongside you?
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Missing.
              </strong>{" "}
              The AI answers the question but doesn&rsquo;t mention you at all.
              This is the most common finding. It means the AI either
              doesn&rsquo;t know about you or doesn&rsquo;t have enough
              confidence to recommend you.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Misrepresented.
              </strong>{" "}
              The AI mentions you but gets something wrong &mdash; wrong
              location, outdated services, inaccurate descriptions. This can be
              worse than not appearing at all, because it actively misleads
              potential customers.
            </p>

            <blockquote
              style={{
                borderLeft: "2px solid var(--accent)",
                padding: "6px 0 6px 24px",
                margin: "30px 0",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              Being misrepresented by AI is worse than being invisible. At least
              invisibility doesn&rsquo;t send the wrong message.
            </blockquote>
          </RevealSection>

          {/* ── Inline CTA ── */}
          <RevealSection>
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
                Or skip the manual work.
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
                Request a free AI Visibility Snapshot &mdash; I&rsquo;ll check
                ChatGPT, Perplexity, and Google AI Overviews for you and send a
                clear report.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 04 — Tools that can help ── */}
          <RevealSection>
            <SectionLabel number="04" text="Tools that can help" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              A few tools are emerging to help automate AI visibility monitoring,
              though the space is young and no single tool covers everything yet:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Peec AI
                </strong>{" "}
                &mdash; tracks brand mentions across AI engines and provides
                share-of-voice metrics. Good for ongoing monitoring.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  AirOps
                </strong>{" "}
                &mdash; offers AI content optimization tools that can help
                structure content for better AI extraction.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Ubersuggest
                </strong>{" "}
                &mdash; while primarily an SEO tool, its keyword and content
                analysis features can help identify gaps in your content
                structure.
              </li>
            </ul>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                A note on limitations:
              </strong>{" "}
              these tools are useful but none of them give you the complete
              picture. AI answers vary by session, location, phrasing, and model
              version. No monitoring tool captures all of that variability.
              Manual spot-checking remains important even with tools in place.
            </p>
          </RevealSection>

          {/* ── 05 — When to get professional help ── */}
          <RevealSection>
            <SectionLabel number="05" text="When to get professional help" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Manual checking works for an initial assessment. But if you want a
              systematic understanding of your AI visibility &mdash; across
              engines, query types, and competitor comparisons &mdash; the
              process becomes time-intensive.
            </p>

            <p style={{ marginBottom: 26 }}>
              Consider professional help when:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;re consistently missing from AI answers in your
                category.
              </li>
              <li style={{ marginBottom: 11 }}>
                Competitors are being mentioned and you&rsquo;re not.
              </li>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;re being misrepresented and need to correct it.
              </li>
              <li style={{ marginBottom: 11 }}>
                You want a structured optimization plan, not just a diagnosis.
              </li>
              <li style={{ marginBottom: 11 }}>
                You don&rsquo;t have time to run queries across multiple engines
                weekly.
              </li>
            </ul>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              Checking your AI visibility takes five minutes. Understanding it
              takes a structured approach. Start with the manual method, build a
              query list, and track what you find. That baseline alone puts you
              ahead of most businesses that have never looked.
            </p>
          </RevealSection>
        </div>

        {/* ── Keep reading ── */}
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

              <Link
                href="/blog/what-is-ai-visibility/"
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
                  What Is AI Visibility?
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Basics
                </span>
              </Link>

              <Link
                href="/blog/how-to-get-mentioned-by-chatgpt/"
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
                  How to Get Mentioned by ChatGPT
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ChatGPT &amp; Perplexity
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </article>

      {/* ── Final CTA ── */}
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
                Let&rsquo;s see if you&rsquo;re showing up.
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
                Start with a free AI Visibility Snapshot &mdash; I&rsquo;ll show
                you exactly how your brand appears (or doesn&rsquo;t) inside
                ChatGPT, Perplexity, and Google AI&nbsp;Overviews.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get your free snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── Local helper ── */

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 34,
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
