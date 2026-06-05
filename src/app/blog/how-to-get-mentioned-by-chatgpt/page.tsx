import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "How to Get Your Business Mentioned by ChatGPT",
  description:
    "ChatGPT mentions brands it finds authoritative and well-structured. Here's how to improve entity clarity, structured data, and authority to get cited.",
  alternates: {
    canonical: "https://hamitahm.com/blog/how-to-get-mentioned-by-chatgpt/",
  },
};

export default function HowToGetMentionedByChatGPTPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "how-to-get-mentioned-by-chatgpt",
            title: "How to Get Your Business Mentioned by ChatGPT",
            description: "ChatGPT mentions brands it finds authoritative and well-structured. Here's how to improve entity clarity, structured data, and authority to get cited.",
            datePublished: "2026-05-24",
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
            <span>How to Get Mentioned by ChatGPT</span>
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
              How to get mentioned by{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                ChatGPT.
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
              What actually influences whether ChatGPT names and recommends your
              business &mdash; and what you can do about it.
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
                ChatGPT mentions brands it finds authoritative and
                well-structured. To get cited, improve your entity clarity,
                structured data, third-party citations, and answer-formatted
                content. There is no paid placement &mdash; you earn it through
                signals.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — How ChatGPT decides who to mention ── */}
          <RevealSection>
            <SectionLabel
              number="01"
              text="How ChatGPT decides who to mention"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT doesn&rsquo;t have a ranking algorithm like Google. It
              generates answers based on patterns in its training data and, in
              newer versions, through real-time web browsing. When someone asks
              &ldquo;who&rsquo;s a good immigration lawyer in Toronto?&rdquo;
              the model isn&rsquo;t looking up a results page. It&rsquo;s
              synthesizing an answer from everything it knows.
            </p>

            <p style={{ marginBottom: 26 }}>
              That means the brands ChatGPT mentions are the ones the model has{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                high confidence are real, relevant, and credible.
              </strong>{" "}
              Confidence comes from multiple sources saying consistent things
              about who you are and what you do.
            </p>

            <p style={{ marginBottom: 26 }}>
              There&rsquo;s no way to pay for placement. There&rsquo;s no
              &ldquo;ChatGPT Ads.&rdquo; The only path is to build the signals
              that make the model confident enough to name you.
            </p>
          </RevealSection>

          {/* ── 02 — What you need ── */}
          <RevealSection>
            <SectionLabel number="02" text="What you need" />
          </RevealSection>

          <RevealSection delay={0.06}>
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
              The model needs to understand your brand as a distinct entity.
              That means consistent naming across your site, clear descriptions
              of what you do, and structured data (Organization schema, local
              business markup) that makes your identity machine-readable.
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
              Structured content
            </h3>
            <p style={{ marginBottom: 26 }}>
              Content formatted as clear questions and direct answers is easier
              for AI to extract. Think FAQ structures, concise definitions at the
              top of pages, and logical heading hierarchies. If the model has to
              dig through walls of text to find what you do, it probably
              won&rsquo;t bother.
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
              Authority and corroboration
            </h3>
            <p style={{ marginBottom: 26 }}>
              ChatGPT is more likely to mention you if multiple independent
              sources confirm who you are. This includes press coverage, review
              sites, industry directories, guest posts, podcast appearances, and
              any third-party mention that corroborates your expertise.
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
              Technical SEO
            </h3>
            <p style={{ marginBottom: 26 }}>
              Crawlability, fast load times, clean HTML, and proper schema
              markup remain important. When ChatGPT browses the web in real
              time, it needs to be able to access and parse your pages
              efficiently.
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
                Want to know if ChatGPT mentions you today?
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
                I&rsquo;ll run your brand through ChatGPT, Perplexity, and
                Google AI Overviews and show you exactly where you stand.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 03 — Step-by-step approach ── */}
          <RevealSection>
            <SectionLabel number="03" text="Step-by-step approach" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                1. Audit your current visibility.
              </strong>{" "}
              Open ChatGPT and ask the questions your customers ask. Note
              whether you appear, how you&rsquo;re described, and who else is
              mentioned instead.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                2. Fix your entity foundation.
              </strong>{" "}
              Ensure your website has clear, consistent descriptions of who you
              are, what you do, and where you operate. Add Organization schema
              markup and make sure your Google Business Profile is complete.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                3. Restructure content for extraction.
              </strong>{" "}
              Rewrite key pages so they lead with clear answers. Use question-
              and-answer formatting. Put definitions near the top, not buried in
              the third paragraph.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                4. Build third-party authority.
              </strong>{" "}
              Get mentioned in industry publications, directories, and review
              platforms. Each independent mention is a signal the model can use
              to confirm your credibility.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                5. Monitor and iterate.
              </strong>{" "}
              AI models retrain periodically. Check your visibility regularly and
              update your approach as the models evolve.
            </p>
          </RevealSection>

          {/* ── 04 — Common mistakes ── */}
          <RevealSection>
            <SectionLabel number="04" text="Common mistakes" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Assuming SEO rankings transfer automatically.
                </strong>{" "}
                Ranking #1 on Google doesn&rsquo;t guarantee ChatGPT knows you
                exist.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Ignoring structured data.
                </strong>{" "}
                Without schema markup, the model has to guess what your pages
                are about.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Having no third-party mentions.
                </strong>{" "}
                If the only source saying you&rsquo;re great is your own
                website, the model has low confidence.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Burying answers in long-form content.
                </strong>{" "}
                AI extraction favors content that leads with the answer, not
                content that builds to it.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Not checking.
                </strong>{" "}
                Most businesses have never asked ChatGPT about themselves. You
                can&rsquo;t fix what you haven&rsquo;t measured.
              </li>
            </ul>
          </RevealSection>

          {/* ── 05 — Measuring progress ── */}
          <RevealSection>
            <SectionLabel number="05" text="Measuring progress" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility measurement is still maturing, but the core approach
              is straightforward: maintain a set of prompts that represent how
              your customers search, run them regularly across ChatGPT and other
              AI tools, and track whether you appear, how you&rsquo;re
              described, and how your share of mentions changes over time.
            </p>

            <p style={{ marginBottom: 26 }}>
              Dedicated tools for tracking AI citations are starting to emerge.
              Until they mature, manual prompt testing combined with structured
              logging gives you a reliable baseline.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              Getting mentioned by ChatGPT isn&rsquo;t about gaming a system.
              It&rsquo;s about making your business clearly understandable,
              well-corroborated, and easy for AI to cite. The businesses doing
              this now are building an advantage that compounds.
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
                href="/blog/how-to-get-cited-by-perplexity/"
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
                  How to Get Cited by Perplexity
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
