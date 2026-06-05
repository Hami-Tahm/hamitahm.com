import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "What Is AI Visibility (and Why It Matters Now)",
  description:
    "AI visibility is whether your brand appears when people ask ChatGPT, Perplexity, or Google AI Overviews for recommendations in your space.",
  alternates: {
    canonical: "https://hamitahm.com/blog/what-is-ai-visibility/",
  },
};

export default function WhatIsAIVisibilityPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "what-is-ai-visibility",
            title: "What Is AI Visibility (and Why It Matters Now)",
            description: "AI visibility is whether your brand appears when people ask ChatGPT, Perplexity, or Google AI Overviews for recommendations in your space. Here's what it means in plain English.",
            datePublished: "2026-05-10",
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
            <span>What Is AI Visibility</span>
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
              What is{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI visibility?
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
              As people stop Googling and start asking AI, being named in the
              answer becomes the new being found. Here&rsquo;s what that means
              &mdash; in plain English.
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
                  Updated 2026 &middot; 7 min read
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
                AI visibility = whether your brand appears when people ask
                ChatGPT, Perplexity, or Google AI Overviews for recommendations
                in your space. It&rsquo;s the AI-era successor to SEO: instead
                of ranking a link, you&rsquo;re trying to be the source the AI
                names and cites.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — Definition ── */}
          <RevealSection>
            <SectionLabel number="01" text="Definition" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              For twenty years, &ldquo;being found online&rdquo; meant one
              thing: ranking on Google. You optimized a page, climbed the
              results, and hoped people clicked. That game still exists &mdash;
              but a second game has started next to it, and most businesses
              haven&rsquo;t noticed.
            </p>

            <p style={{ marginBottom: 26 }}>
              People are increasingly skipping the list of links entirely. They
              ask ChatGPT &ldquo;who&rsquo;s a good mortgage broker in
              Toronto?&rdquo; They type a question into Perplexity. They read
              the AI Overview at the top of Google and never scroll. In each
              case,{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                an AI gives them an answer that names a few businesses &mdash;
                and silently leaves out everyone else.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              AI visibility is simply:{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                are you one of the names the AI mentions?
              </strong>{" "}
              It&rsquo;s how often, and how favourably, your business appears in
              answers from AI systems like ChatGPT, Perplexity, and
              Google&rsquo;s AI Overviews.
            </p>
          </RevealSection>

          {/* ── 02 — Why it matters now ── */}
          <RevealSection>
            <SectionLabel number="02" text="Why it matters now" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI search is newer and far less saturated than Google. The
              businesses that show up well in AI answers today are mostly there
              by luck &mdash; very few are optimizing for it deliberately.
              That&rsquo;s the opening.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Moving early in an uncrowded channel is how you win before it
                becomes competitive.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              It&rsquo;s tempting to think this is just SEO with a new label. It
              isn&rsquo;t, though the foundations overlap. The difference is in
              the target:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  SEO
                </strong>{" "}
                optimizes to rank a link in a list. The user still chooses and
                clicks.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  AI visibility
                </strong>{" "}
                optimizes to be selected and cited{" "}
                <em>inside a generated answer</em>. The AI chooses for the user.
              </li>
            </ul>

            <blockquote
              style={{
                borderLeft: "2px solid var(--accent)",
                padding: "6px 0 6px 24px",
                margin: "30px 0",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              You can rank #1 on Google and still be invisible in AI answers.
              They&rsquo;re related games, not the same game.
            </blockquote>
          </RevealSection>

          {/* ── 03 — How AI decides who to cite ── */}
          <RevealSection>
            <SectionLabel number="03" text="How AI decides who to cite" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Answer engines don&rsquo;t have a simple ranking algorithm the way
              Google does. But patterns are emerging around four areas that
              influence which brands get mentioned:
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
              Entity clarity
            </h3>
            <p style={{ marginBottom: 26 }}>
              AI models need to understand what your brand is, what you do, and
              what space you operate in. If your website doesn&rsquo;t make
              these things obvious &mdash; through structured data, clear
              copy, and consistent naming &mdash; the model has less confidence
              recommending you.
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
              Content structure
            </h3>
            <p style={{ marginBottom: 26 }}>
              Answer engines lean heavily on how cleanly your content can be
              extracted. Clear questions followed by direct answers, logical
              heading hierarchy, and concise paragraphs all make it easier for
              an AI to pull from your page.
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
              Authority signals
            </h3>
            <p style={{ marginBottom: 26 }}>
              What do other sources say about you? Third-party mentions,
              reviews, citations, press coverage, and backlinks all contribute
              to the model&rsquo;s confidence that you&rsquo;re a credible
              entity worth recommending.
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
              Technical foundation
            </h3>
            <p style={{ marginBottom: 26 }}>
              Schema markup, crawlability, page speed, and a clean technical
              setup still matter. They&rsquo;re how the model accesses and
              understands your content in the first place.
            </p>
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
                Curious where your business stands?
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
                I run a free AI Visibility Snapshot that checks whether ChatGPT,
                Perplexity, and Google AI mention you today.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 04 — How to check yours ── */}
          <RevealSection>
            <SectionLabel number="04" text="How to check yours" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The simplest way to check is to open ChatGPT, Perplexity, and
              Google and ask the kinds of questions your customers ask. If your
              brand doesn&rsquo;t appear in the answers, you have an AI
              visibility gap.
            </p>

            <p style={{ marginBottom: 26 }}>
              For a more systematic approach, read{" "}
              <Link
                href="/blog/how-to-check-ai-visibility/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1,
                }}
              >
                how to check your AI visibility
              </Link>
              . It walks through the process step by step.
            </p>
          </RevealSection>

          {/* ── 05 — What to do about it ── */}
          <RevealSection>
            <SectionLabel number="05" text="What to do about it" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This field is young, so the vocabulary is still settling. Three
              acronyms come up constantly &mdash;{" "}
              <Link
                href="/blog/aeo-vs-geo-vs-seo/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1,
                }}
              >
                AEO, GEO, and SEO
              </Link>
              . If the acronyms feel confusing, that&rsquo;s normal. Most
              buyers just want one thing:{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                &ldquo;I want to show up when people ask AI about what I
                do.&rdquo;
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              In practical terms, the work involves strengthening entity clarity,
              restructuring content for extractability, building third-party
              authority, and ensuring your technical foundation supports AI
              retrieval. The earlier you start, the larger your lead.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              The short version: search is splitting into two games, and a new
              one is wide open. AI visibility is making sure that when the
              machine answers, your name is in it.
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
                href="/blog/how-to-check-ai-visibility/"
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
                  How to Check Your AI Visibility
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
                href="/blog/aeo-vs-geo-vs-seo/"
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
                  AEO vs GEO vs SEO Explained
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Comparison
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
