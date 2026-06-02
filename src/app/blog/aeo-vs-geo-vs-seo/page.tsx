import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AEO vs GEO vs SEO — What's the Difference? | Hami Tahm",
  description:
    "SEO = ranking on search results pages. AEO = being cited in AI answer engines. GEO = appearing in generative search. All three matter — here's how they differ.",
};

export default function AEOvsGEOvsSEOPost() {
  return (
    <>
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
            <span>AEO vs GEO vs SEO</span>
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
              AEO / GEO / SEO
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
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AEO vs GEO vs SEO
              </em>{" "}
              &mdash; what&rsquo;s the difference?
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
              Three acronyms, one goal &mdash; being found. Here&rsquo;s how
              they differ and where to focus your effort.
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
                SEO = ranking on search results pages. AEO = being cited in AI
                answer engines like ChatGPT and Perplexity. GEO = appearing in
                generative search experiences like Google AI Overviews. All three
                matter, but AEO and GEO require different strategies than
                traditional SEO.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — What SEO is ── */}
          <RevealSection>
            <SectionLabel number="01" text="What SEO is (briefly)" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              You probably already know this one. Search Engine Optimization is
              the practice of getting your pages to rank higher in traditional
              search results &mdash; Google, Bing, the list of blue links.
            </p>

            <p style={{ marginBottom: 26 }}>
              SEO has been the dominant customer-acquisition channel for over two
              decades. You research keywords, create content, earn backlinks, and
              optimize technical performance. The goal: rank a link that users
              click.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                The user still makes the choice.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              SEO isn&rsquo;t going away. But the surface where people find
              businesses is expanding, and SEO alone no longer covers it.
            </p>
          </RevealSection>

          {/* ── 02 — What AEO is ── */}
          <RevealSection>
            <SectionLabel number="02" text="What AEO is" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Answer Engine Optimization (AEO)
              </strong>{" "}
              is about structuring your content so that AI answer engines can
              cleanly extract and cite it. The &ldquo;answer engines&rdquo; in
              question are tools like ChatGPT, Perplexity, Claude, and similar
              systems that generate direct answers instead of links.
            </p>

            <p style={{ marginBottom: 26 }}>
              Where SEO optimizes for placement in a list, AEO optimizes for{" "}
              <em>inclusion in a generated answer</em>. The mechanics are
              different: answer engines care about how clearly your content
              answers a question, how your entity is defined, and whether
              third-party sources corroborate what you claim.
            </p>

            <p style={{ marginBottom: 26 }}>
              If someone asks ChatGPT &ldquo;what&rsquo;s the best accounting
              firm in Vancouver?&rdquo; and your firm is named, that&rsquo;s AEO
              working. If your firm is absent despite being excellent &mdash;
              that&rsquo;s an AEO gap.
            </p>
          </RevealSection>

          {/* ── 03 — What GEO is ── */}
          <RevealSection>
            <SectionLabel number="03" text="What GEO is" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Generative Engine Optimization (GEO)
              </strong>{" "}
              is the broader practice of earning mentions and citations inside
              AI-generated responses &mdash; particularly within search engines
              that have added generative features, like Google&rsquo;s AI
              Overviews.
            </p>

            <p style={{ marginBottom: 26 }}>
              GEO sits between SEO and AEO. You still need traditional ranking
              signals (backlinks, relevance, authority), but you also need
              content that the generative layer can synthesize into an answer.
              Research on Google AI Overviews has found that a meaningful share
              of cited sources don&rsquo;t even rank on the first page of normal
              results.
            </p>

            <p style={{ marginBottom: 26 }}>
              GEO is heavily influenced by what others say about you &mdash;
              not just what your own pages say. Third-party authority and
              corroboration become more important than on-page optimization
              alone.
            </p>
          </RevealSection>

          {/* ── 04 — Key differences ── */}
          <RevealSection>
            <SectionLabel number="04" text="Key differences" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "0 0 30px",
                fontFamily: "var(--sans)",
                fontSize: 15,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 16,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span />
                <span>SEO</span>
                <span>AEO</span>
                <span>GEO</span>
              </div>

              {[
                ["Target", "Search results page", "AI answer engine", "AI-enhanced search"],
                ["Goal", "Rank a link", "Be cited in answers", "Appear in AI Overviews"],
                ["User action", "User clicks a link", "AI selects for user", "AI summarizes, may link"],
                ["Key signals", "Backlinks, relevance", "Entity clarity, structure", "Authority + extractability"],
                ["Maturity", "25+ years", "~2 years", "~1 year"],
              ].map(([label, seo, aeo, geo]) => (
                <div
                  key={label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 16,
                    padding: "12px 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: 14,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{ fontWeight: 600, color: "var(--ink)" }}
                  >
                    {label}
                  </span>
                  <span style={{ color: "var(--muted)" }}>{seo}</span>
                  <span style={{ color: "var(--muted)" }}>{aeo}</span>
                  <span style={{ color: "var(--muted)" }}>{geo}</span>
                </div>
              ))}
            </div>
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
                Not sure which gaps you have?
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
                A free AI Visibility Snapshot covers all three surfaces &mdash;
                traditional search, AI answers, and AI Overviews.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 05 — Do you need all three? ── */}
          <RevealSection>
            <SectionLabel number="05" text="Do you need all three?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Short answer: yes, eventually. But you don&rsquo;t need to tackle
              them all at once, and the priority depends on your business.
            </p>

            <p style={{ marginBottom: 26 }}>
              If you already rank well on Google, your biggest opportunity is
              probably in AEO &mdash; making sure AI answer engines know about
              you too. If you&rsquo;re starting from scratch, traditional SEO
              foundations will support all three channels.
            </p>

            <p style={{ marginBottom: 26 }}>
              The good news: many of the fundamentals overlap.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Entity clarity, structured data, authoritative content, and
                third-party signals
              </strong>{" "}
              help across all three surfaces. The differences are in how you
              structure content and what you optimize for extraction.
            </p>
          </RevealSection>

          {/* ── 06 — How they work together ── */}
          <RevealSection>
            <SectionLabel number="06" text="How they work together" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Think of it as layers. SEO builds the foundation &mdash;
              authoritative content, backlinks, technical health. AEO adds an
              extraction layer &mdash; clear answers, entity markup, structured
              data. GEO extends into the generative surfaces &mdash;
              third-party authority and corroboration that make AI confident
              enough to cite you.
            </p>

            <p style={{ marginBottom: 26 }}>
              The businesses that will dominate the next phase of search are the
              ones building all three layers now &mdash; while the competition
              is still debating whether AI search matters.
            </p>

            <p style={{ marginBottom: 26 }}>
              For a deeper look at{" "}
              <Link
                href="/blog/what-is-ai-visibility/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1,
                }}
              >
                what AI visibility is
              </Link>{" "}
              or{" "}
              <Link
                href="/blog/what-is-answer-engine-optimization/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1,
                }}
              >
                what answer engine optimization involves
              </Link>
              , those guides go deeper on each topic.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              SEO, AEO, and GEO are three views of the same problem: being
              found when it matters. The vocabulary is new, but the goal
              isn&rsquo;t. The surface is just expanding.
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
                href="/blog/what-is-answer-engine-optimization/"
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
                  What Is Answer Engine Optimization (AEO)?
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  AEO / GEO / SEO
                </span>
              </Link>

              <Link
                href="/ai-visibility/answer-engine-optimization-consultant-canada/"
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
                  AEO Consultant in Canada
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Service
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
