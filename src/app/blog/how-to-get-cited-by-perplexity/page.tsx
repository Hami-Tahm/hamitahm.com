import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "How to Get Cited by Perplexity AI",
  description:
    "Learn how Perplexity AI selects sources to cite. Practical guide for Canadian businesses on getting your content cited in Perplexity answers.",
  alternates: {
    canonical: "https://hamitahm.com/blog/how-to-get-cited-by-perplexity/",
  },
};

export default function HowToGetCitedByPerplexityPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "how-to-get-cited-by-perplexity",
            title: "How to Get Cited by Perplexity AI",
            description: "Learn how Perplexity AI selects sources to cite. Practical guide for Canadian businesses on getting your content cited in Perplexity answers.",
            datePublished: "2026-05-25",
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
            <span>How to Get Cited by Perplexity</span>
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
              ChatGPT &amp; Perplexity
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
              How to get cited by{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Perplexity.
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
              Perplexity shows its sources. That makes it the most transparent AI
              engine &mdash; and the most actionable to optimize for.
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
                  Updated 2026 &middot; 8 min read
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
                Perplexity uses real-time retrieval, not just training data. It
                cites pages it can crawl, extract clean answers from, and verify
                against other sources. Structured content + crawlability +
                authority = citations.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — How Perplexity works ── */}
          <RevealSection>
            <SectionLabel number="01" text="How Perplexity works" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity is a retrieval-augmented generation (RAG) engine. When
              you ask it a question, it doesn&rsquo;t just pull from a frozen
              training set the way base ChatGPT does. It searches the live web in
              real time, reads the pages it finds, and synthesizes an answer with
              inline citations.
            </p>

            <p style={{ marginBottom: 26 }}>
              Think of it as a research assistant that Googles on your behalf,
              reads the top results, and writes you a summary &mdash; with
              footnotes. Every claim in the answer links back to a specific
              source. That&rsquo;s the mechanism you&rsquo;re trying to appear
              in.
            </p>
          </RevealSection>

          {/* ── 02 — What makes Perplexity different from ChatGPT ── */}
          <RevealSection>
            <SectionLabel
              number="02"
              text="What makes Perplexity different from ChatGPT"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT generates answers primarily from training data &mdash;
              patterns absorbed during pre-training. It can browse the web, but
              that&rsquo;s a secondary capability.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Perplexity starts with live retrieval.
              </strong>{" "}
              Every answer is grounded in pages it fetches right now.
            </p>

            <p style={{ marginBottom: 26 }}>
              This has a practical implication for businesses: with ChatGPT,
              getting mentioned means building long-term training signals. With
              Perplexity, getting cited means having content that&rsquo;s{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                findable, readable, and trustworthy today.
              </strong>
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
              ChatGPT rewards brand authority built over time. Perplexity
              rewards content quality right now.
            </blockquote>
          </RevealSection>

          {/* ── 03 — How it selects sources to cite ── */}
          <RevealSection>
            <SectionLabel number="03" text="How it selects sources to cite" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              When Perplexity retrieves pages for a query, it doesn&rsquo;t cite
              everything it reads. It selects sources based on a combination of
              signals:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Relevance.
                </strong>{" "}
                Does the page directly address the question being asked?
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Extractability.
                </strong>{" "}
                Can it pull a clean, specific answer from the content?
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Corroboration.
                </strong>{" "}
                Do other sources confirm the same information?
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Authority.
                </strong>{" "}
                Is the source recognized as credible in its domain?
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Freshness.
                </strong>{" "}
                Is the content current and recently updated?
              </li>
            </ul>

            <p style={{ marginBottom: 26 }}>
              The most important factor for Canadian businesses to understand:{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Perplexity can only cite what it can reach.
              </strong>{" "}
              If your pages are blocked from crawling, hidden behind JavaScript
              rendering, or buried in thin content, you won&rsquo;t be cited
              regardless of how good your business is.
            </p>
          </RevealSection>

          {/* ── 04 — Content structure for citation ── */}
          <RevealSection>
            <SectionLabel number="04" text="Content structure for citation" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity extracts answers at the paragraph and sentence level.
              Content that earns citations tends to share specific structural
              qualities:
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
              Lead with the answer
            </h3>
            <p style={{ marginBottom: 26 }}>
              Don&rsquo;t bury your key point three paragraphs in. State it
              upfront. If someone asks &ldquo;what does an immigration consultant
              in Vancouver charge?&rdquo; and your page opens with a clear
              range, Perplexity can extract and cite that immediately.
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
              Use descriptive headings
            </h3>
            <p style={{ marginBottom: 26 }}>
              Headings act as labels for the retrieval system. A heading like
              &ldquo;Average Cost of Immigration Consulting in BC&rdquo; is far
              more useful than &ldquo;Our Pricing.&rdquo; Descriptive headings
              help the engine match your section to the right query.
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
              Keep paragraphs concise
            </h3>
            <p style={{ marginBottom: 26 }}>
              Short, self-contained paragraphs are easier to cite than sprawling
              ones. If a paragraph mixes three different ideas, the engine
              may skip it because it can&rsquo;t cleanly attribute one point.
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
              Include specific data
            </h3>
            <p style={{ marginBottom: 26 }}>
              Numbers, dates, and concrete facts make your content more citable.
              Perplexity prefers sources that provide verifiable specifics over
              vague generalities.
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
                Want to see if Perplexity cites you today?
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
                I&rsquo;ll run your brand through Perplexity, ChatGPT, and
                Google AI Overviews and show you where you stand.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 05 — Technical requirements ── */}
          <RevealSection>
            <SectionLabel number="05" text="Technical requirements" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Because Perplexity fetches pages in real time, technical
              crawlability is non-negotiable. Here&rsquo;s what to check:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Don&rsquo;t block Perplexity&rsquo;s crawler.
                </strong>{" "}
                Check your robots.txt. Some sites accidentally block AI crawlers
                while intending to block only scrapers.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Serve content in HTML, not just JavaScript.
                </strong>{" "}
                If your key content only renders client-side, retrieval engines
                may not see it.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Use clean, semantic markup.
                </strong>{" "}
                Proper heading hierarchy, structured data, and logical page
                structure all help the engine parse your content.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Fast load times matter.
                </strong>{" "}
                Retrieval engines have timeout limits. A slow page may not get
                fully indexed.
              </li>
            </ul>
          </RevealSection>

          {/* ── 06 — Building authority signals ── */}
          <RevealSection>
            <SectionLabel number="06" text="Building authority signals" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Even with perfectly structured content, Perplexity weighs source
              authority. Pages from recognized, frequently-cited domains get
              preferred treatment. For Canadian businesses, building authority
              means:
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Get mentioned by other credible sources.
              </strong>{" "}
              Industry publications, local media, professional directories, and
              review platforms all contribute. Each third-party mention is a
              signal that your business is real and relevant.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Publish original research or data.
              </strong>{" "}
              Content that contains unique information &mdash; survey results,
              case studies, local market data &mdash; is more citable than
              content that rehashes what everyone else says.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Maintain consistency across platforms.
              </strong>{" "}
              Your Google Business Profile, LinkedIn, industry listings, and
              website should all tell the same story about who you are and what
              you do.
            </p>
          </RevealSection>

          {/* ── 07 — Monitoring citations ── */}
          <RevealSection>
            <SectionLabel number="07" text="Monitoring citations" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Unlike ChatGPT, Perplexity makes monitoring straightforward because
              it shows its sources. You can run your target queries and see
              exactly which pages get cited &mdash; yours or a competitor&rsquo;s.
            </p>

            <p style={{ marginBottom: 26 }}>
              Build a list of 10&ndash;20 queries your customers actually ask.
              Run them through Perplexity monthly and track: Are you cited? Which
              page is cited? Who else appears? This gives you a clear picture of
              your citation share over time.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              Perplexity is the most transparent AI engine for businesses to
              optimize for. It tells you exactly what it cited and why. The
              formula is straightforward: make your content crawlable,
              structured, authoritative, and specific. Do that, and the
              citations follow.
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
