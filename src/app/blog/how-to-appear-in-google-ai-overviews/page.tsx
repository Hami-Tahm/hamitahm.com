import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "How to Appear in Google AI Overviews",
  description:
    "Google AI Overviews pull from pages that already rank well AND have clear, extractable answers.",
  alternates: {
    canonical: "https://hamitahm.com/blog/how-to-appear-in-google-ai-overviews/",
  },
};

export default function HowToAppearInGoogleAIOverviewsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "how-to-appear-in-google-ai-overviews",
            title: "How to Appear in Google AI Overviews",
            description: "Google AI Overviews pull from pages that already rank well AND have clear, extractable answers. Here's how to optimize for both traditional SEO and AI-friendly content.",
            datePublished: "2026-05-22",
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
            <span>How to Appear in Google AI Overviews</span>
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
              Google AI Overviews
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
              How to appear in Google{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI Overviews.
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
              Why AI Overviews cite sources that don&rsquo;t rank on page one
              &mdash; and how to become one of the sources they pull from.
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
                Google AI Overviews pull from pages that already rank well AND
                have clear, extractable answers. Optimize for both traditional
                SEO and AI-friendly content structure &mdash; structured data,
                entity clarity, and concise answer formatting are what get you
                featured.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — What AI Overviews are ── */}
          <RevealSection>
            <SectionLabel number="01" text="What AI Overviews are" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google AI Overviews (formerly Search Generative Experience, or SGE)
              are the AI-generated summaries that appear at the top of Google
              search results for certain queries. Instead of showing you a list
              of links and letting you choose, Google synthesizes an answer from
              multiple sources and presents it directly.
            </p>

            <p style={{ marginBottom: 26 }}>
              For users, it&rsquo;s convenient. For businesses, it&rsquo;s a
              fundamental shift:{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                if your site is cited in the AI Overview, you get prominent
                visibility before the traditional results. If you&rsquo;re not
                cited, you&rsquo;re pushed further down the page.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              AI Overviews don&rsquo;t appear for every query, but they&rsquo;re
              expanding rapidly. Informational queries, comparison queries, and
              &ldquo;how to&rdquo; searches are most likely to trigger them.
            </p>
          </RevealSection>

          {/* ── 02 — How Google selects sources ── */}
          <RevealSection>
            <SectionLabel number="02" text="How Google selects sources" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google&rsquo;s AI Overview sources are influenced by traditional
              ranking signals but not limited to them. Research has shown that a
              meaningful share of cited sources in AI Overviews don&rsquo;t rank
              on the first page of normal results. This means the AI layer has
              its own selection logic.
            </p>

            <p style={{ marginBottom: 26 }}>
              The key factors that influence source selection:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Content clarity.
                </strong>{" "}
                Pages that present clear, direct answers to the query are easier
                for the AI to extract from.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Authority.
                </strong>{" "}
                Domain authority, backlinks, and E-E-A-T signals still matter
                &mdash; Google wants to cite sources users can trust.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Topical relevance.
                </strong>{" "}
                Pages focused on a specific topic are preferred over pages that
                cover many topics broadly.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Freshness.
                </strong>{" "}
                For time-sensitive queries, recently updated content gets
                priority.
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
              You don&rsquo;t need to rank #1 to be cited in AI Overviews. But
              you do need content the AI can cleanly extract from.
            </blockquote>
          </RevealSection>

          {/* ── 03 — Content structure that gets featured ── */}
          <RevealSection>
            <SectionLabel
              number="03"
              text="Content structure that gets featured"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI Overviews favor content that is structured for extraction, not
              just for reading. This means:
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Lead with the answer.
              </strong>{" "}
              Put the key takeaway in the first paragraph or sentence, not in
              the conclusion. The AI needs to find the answer quickly.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Use clear heading hierarchy.
              </strong>{" "}
              H2s and H3s that match the questions users ask make it easier for
              the AI to identify relevant sections.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Write concise paragraphs.
              </strong>{" "}
              Short, focused paragraphs (2&ndash;3 sentences) are easier to
              extract than dense blocks of text.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Use lists and tables.
              </strong>{" "}
              Structured formats like bulleted lists, numbered steps, and
              comparison tables are highly extractable and frequently appear in
              AI Overviews.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Cover the topic completely.
              </strong>{" "}
              AI Overviews synthesize from multiple sources, so comprehensive
              coverage of a topic increases the chances that your page is
              selected as a source.
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
                Are you showing up in AI Overviews?
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
                A free AI Visibility Snapshot checks your presence across
                Google AI Overviews, ChatGPT, and Perplexity.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get a Free Snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 04 — Technical requirements ── */}
          <RevealSection>
            <SectionLabel number="04" text="Technical requirements" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The technical foundation matters more here than with standalone
              AI tools like ChatGPT, because Google AI Overviews are deeply
              integrated with Google&rsquo;s existing search infrastructure.
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Crawlability.
                </strong>{" "}
                Googlebot needs full access to your content. No blocked
                resources, no JavaScript-only rendering that hides text.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Page speed.
                </strong>{" "}
                Core Web Vitals remain a factor. Fast, accessible pages are
                more likely to be selected.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Mobile-first.
                </strong>{" "}
                AI Overviews appear prominently on mobile, where they can
                dominate the entire visible screen. Your content needs to work
                well on mobile.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Clean HTML.
                </strong>{" "}
                Semantic HTML with proper heading hierarchy makes extraction
                easier.
              </li>
            </ul>
          </RevealSection>

          {/* ── 05 — Schema and entity signals ── */}
          <RevealSection>
            <SectionLabel number="05" text="Schema and entity signals" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Structured data helps Google understand the context and entities on
              your page. For AI Overviews, several schema types are particularly
              valuable:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Organization / LocalBusiness schema
                </strong>{" "}
                &mdash; clarifies who you are and where you operate.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  FAQ schema
                </strong>{" "}
                &mdash; marks up question-and-answer pairs that are directly
                extractable.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  HowTo schema
                </strong>{" "}
                &mdash; for step-by-step content that AI Overviews frequently
                feature.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Article schema
                </strong>{" "}
                &mdash; signals that a page is editorial content with an author,
                date, and topic.
              </li>
            </ul>

            <p style={{ marginBottom: 26 }}>
              Beyond schema, entity signals include consistent naming across
              your site, a Wikipedia or Wikidata presence (for larger brands),
              and a well-maintained Google Knowledge Panel. The clearer your
              entity is to Google, the more confident it is citing you.
            </p>
          </RevealSection>

          {/* ── 06 — Monitoring your visibility ── */}
          <RevealSection>
            <SectionLabel number="06" text="Monitoring your visibility" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google Search Console is starting to surface data on AI Overview
              impressions and clicks, though the reporting is still evolving.
              In the meantime, manual monitoring gives you the clearest picture:
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Build a prompt library.
              </strong>{" "}
              Create a list of 20&ndash;30 queries your customers actually
              search. Run them on Google regularly and note which trigger AI
              Overviews and whether your site appears as a source.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Track competitors.
              </strong>{" "}
              Note which competitors appear in AI Overviews for your target
              queries. Understanding why they&rsquo;re cited (and you&rsquo;re
              not) reveals the gaps to close.
            </p>

            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Watch for new query types.
              </strong>{" "}
              AI Overviews are expanding to more query categories over time.
              Queries that didn&rsquo;t trigger an Overview six months ago may
              trigger one now.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              Google AI Overviews are reshaping the search results page. The
              sources that get cited are the ones that combine traditional
              authority with AI-friendly structure. If you optimize for both,
              you&rsquo;re ahead of most of your competition.
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
