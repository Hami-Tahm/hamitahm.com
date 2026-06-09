import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "what-is-answer-engine-optimization";
const ARTICLE_TITLE = "What Is Answer Engine Optimization (AEO)?";
const ARTICLE_DESCRIPTION =
  "Answer Engine Optimization (AEO) is the practice of structuring content so AI-powered search engines cite it directly. Here's what it is, how it works, and why it's different from SEO.";
const DATE_PUBLISHED = "2026-06-09";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const AEO_URL =
  "/ai-visibility/answer-engine-optimization-consultant-canada/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const COMPARISON_URL = "/blog/aeo-vs-geo-vs-seo/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";

const FAQ_ITEMS = [
  {
    q: "Is AEO replacing SEO?",
    a: "No. AEO is an additional layer, not a replacement. SEO remains essential for traditional search rankings, and ranking is often a prerequisite for AIO citation. AEO and SEO work best together — they target different surfaces of modern search.",
  },
  {
    q: "Does AEO work for small businesses?",
    a: "Yes. A well-structured page from a small business can be cited by AI platforms over a poorly structured page from a major brand — if it's more direct, clear, and authoritative on the specific question. The playing field is more level than traditional search.",
  },
  {
    q: "How long does AEO take to show results?",
    a: "It depends on the platform and what's being changed. Structural and technical changes produce visible lift in Perplexity and Google AIO within weeks. Training data improvements in ChatGPT operate on a longer cycle. Most businesses see measurable movement within one to three months of focused work.",
  },
  {
    q: "Can I do AEO myself or do I need a consultant?",
    a: "Some elements are accessible without a consultant — schema markup tools, content restructuring, FAQ additions. The harder parts — entity mapping, cross-platform citation strategy, competitor gap analysis — benefit from expertise. Most businesses start with a professional audit to understand where they stand before deciding how much to implement themselves.",
  },
  {
    q: "What's the difference between AEO and GEO?",
    a: "AEO optimizes for being cited in AI-generated direct answers. GEO (Generative Engine Optimization) is broader — it covers how AI systems represent your brand across all AI-generated content, not just direct Q&A responses. They overlap, but AEO is narrower and answer-specific. See AEO vs GEO vs SEO for the full breakdown.",
  },
  {
    q: "Is AEO only for ChatGPT?",
    a: "No. AEO applies to any platform that generates AI answers — Perplexity, Google AI Overviews, Gemini, Bing Copilot, and ChatGPT. The tactics differ by platform; the foundation is the same.",
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

export default function WhatIsAnswerEngineOptimizationPost() {
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
            <span>What Is Answer Engine Optimization</span>
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
                answer engine optimization?
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
              SEO targets rankings. AEO targets citations — being the source AI
              chooses to quote when users ask questions in your space.
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
                  June 9, 2026 &middot; 11 min read
                </div>
              </div>
            </div>
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
                AEO structures content so AI search platforms — Perplexity,
                Google AI Overviews, ChatGPT — cite it directly. The goal is
                citations, not rankings.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Answer Engine Optimization (AEO) is the practice of structuring
              your content so that AI-powered search platforms — Perplexity,
              Google AI Overviews, ChatGPT, and Gemini — cite it directly in
              their answers. Where SEO targets rankings, AEO targets citations.
              The goal is not to be ranked first, but to be the source AI
              chooses to quote, paraphrase, or recommend when users ask questions
              in your space.
            </p>
            <blockquote
              style={{
                borderLeft: "2px solid var(--accent)",
                padding: "6px 0 6px 24px",
                margin: "0 0 26px",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              AEO structures content so AI search platforms — Perplexity, Google
              AI Overviews, ChatGPT — cite it directly. The goal is citations,
              not rankings.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              AEO is one layer of a broader{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              strategy. If you&rsquo;re new to the concept of AI visibility,
              start there.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="AEO vs SEO — what's different" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              SEO optimizes for position in a ranked list. AEO optimizes for
              inclusion in a synthesized answer. Both matter — but they require
              different strategies and produce different outcomes.
            </p>
            <p style={{ marginBottom: 26 }}>
              The clearest way to see the difference: in traditional search, users
              see a list of links and choose one. In AI search, users get an
              answer — and your brand either contributed to that answer or it
              didn&rsquo;t. If it didn&rsquo;t, you weren&rsquo;t ranked lower.
              You were absent entirely.
            </p>
            <p style={{ marginBottom: 26 }}>
              For the full three-way comparison — AEO, GEO, and SEO — including
              which to prioritize for your business, see{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                AEO vs GEO vs SEO
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="How answer engines work" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Answer engines like Perplexity, Google AI Overviews, and ChatGPT
              don&rsquo;t rank pages. They retrieve content, read it, and generate
              a synthesized response — citing the sources they found most direct,
              credible, and well-structured.
            </p>
            <p style={{ marginBottom: 26 }}>The citation pipeline:</p>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>User asks a question</li>
              <li style={{ marginBottom: 11 }}>
                The engine retrieves relevant content (from training data, live
                web retrieval, or both)
              </li>
              <li style={{ marginBottom: 11 }}>
                It synthesizes an answer from what it found
              </li>
              <li style={{ marginBottom: 11 }}>
                It cites the sources that contributed most directly
              </li>
            </ol>
            <p style={{ marginBottom: 26 }}>
              AEO is the practice of engineering your content to perform well at
              steps 2, 3, and 4 — so the engine retrieves you, extracts your
              content cleanly, and names you as a source.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="What AEO actually involves" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AEO is not one tactic. It&rsquo;s a set of practices across
              content, structure, and authority.
            </p>

            <h3 style={h3Style}>Content structure</h3>
            <p style={{ marginBottom: 26 }}>
              AI systems extract content that&rsquo;s organized for direct
              retrieval: clear headings that describe exactly what each section
              covers, direct answers in the first 1-2 sentences after each
              heading, FAQ sections with short and specific responses, and
              numbered or bulleted lists for multi-part answers.
            </p>
            <p style={{ marginBottom: 26 }}>
              The rule: if an AI can pull a clean, quotable answer from your
              page, it will. If your best answer is buried in paragraph four, it
              won&rsquo;t.
            </p>

            <h3 style={h3Style}>Schema markup</h3>
            <p style={{ marginBottom: 26 }}>
              Schema markup removes ambiguity. FAQPage schema tells AI systems
              which questions your page answers. Article schema with author
              signals freshness and authority. HowTo schema makes step-based
              content directly parseable.
            </p>
            <p style={{ marginBottom: 26 }}>
              Schema doesn&rsquo;t guarantee citation — but it reduces friction
              between your content and the AI&rsquo;s extraction process.
            </p>

            <h3 style={h3Style}>Authority signals</h3>
            <p style={{ marginBottom: 26 }}>
              Answer engines favor sources that other credible sources trust.
              Backlinks from relevant industry publications, mentions on platforms
              AI systems read heavily — Reddit, Quora, G2, Clutch — and consistent
              brand presence across the web all contribute to citation authority.
            </p>
            <p style={{ marginBottom: 26 }}>
              E-E-A-T — Experience, Expertise, Authoritativeness,
              Trustworthiness — is Google&rsquo;s own quality framework, and it
              applies to AIO citation decisions directly. Named authors, clear
              credentials, and external validation increase your citation
              probability.
            </p>

            <h3 style={h3Style}>Entity clarity</h3>
            <p style={{ marginBottom: 26 }}>
              AI systems need to know who you are before they can represent you
              accurately. Organization schema, consistent name/location/category
              across your web properties, and clearly stated positioning on your
              core pages all make your brand identifiable and citable. An ambiguous
              entity gets skipped.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="What AEO is for" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AEO produces the highest return in industries with high-intent,
              question-driven buyer behavior:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Professional services</strong> — legal,
                financial, consulting, accounting
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Healthcare and wellness</strong> — where
                patients research before they book
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Real estate and mortgage</strong> —
                buyers ask specific, high-stakes questions
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>B2B software and SaaS</strong> —
                comparison and evaluation queries
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  Any business where customers research before they buy
                </strong>
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              If your customers ask specific questions before making a decision —
              and most do — AEO determines whether your brand is the answer they
              find.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="AEO for AI search visibility" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AEO is the foundational layer of{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>
              . Before GEO, before platform-specific tactics, AEO determines
              whether AI systems can extract and cite your content at all.
            </p>
            <p style={{ marginBottom: 26 }}>
              The sequence matters: if your content isn&rsquo;t structured for
              extraction, no amount of entity-building or third-party citation
              work compensates. AI systems can&rsquo;t cite what they can&rsquo;t
              parse. AEO is where visibility starts. GEO builds brand presence on
              top of it. Platform-specific work extends coverage from there.
            </p>
            <p style={{ marginBottom: 26 }}>
              There are emerging tools for tracking AEO performance — but AEO
              itself is a content and structure practice, not a software purchase.
              If you&rsquo;re looking for tracking tools, the{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                AI visibility tools overview
              </Link>{" "}
              covers what&rsquo;s currently available.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="What AEO is not" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This matters — because AEO is one of the more frequently
              misunderstood practices in digital marketing right now.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>AEO is not paid placement.</strong> You
              cannot pay Perplexity, ChatGPT, or Google AI Overviews to cite you.
              There is no ad unit inside an AI-generated answer. Citations are
              earned by being credible, structured, and authoritative. There is no
              shortcut here.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>AEO is not just adding FAQ pages.</strong>{" "}
              FAQPage schema is one tactic inside a broader practice. Businesses
              that add a single FAQ section and expect AI citation are missing
              most of what drives it — content structure, authority, entity
              clarity, and third-party signals. FAQ is a tool, not the strategy.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>AEO is not an overnight result.</strong>{" "}
              Structural changes can produce visible lift within weeks on
              retrieval-based platforms like Perplexity and Google AIO. Training
              data improvements take longer — months. AEO is a compounding
              practice, not a one-time fix.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>AEO is not only for ChatGPT.</strong> AEO
              applies to every AI search platform: Perplexity, Google AI Overviews,
              Gemini, Bing Copilot, and ChatGPT. The retrieval mechanics differ
              by platform, but the AEO foundation — structured, credible, citable
              content — applies universally.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAEOCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="Frequently asked questions" />
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
              strategy framework and how AEO fits into it, see the hub.
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
                title="AEO vs GEO vs SEO Explained"
                tag="Comparison"
              />
              <KeepReadingLink
                href={DEFINITION_URL}
                title="What Is AI Visibility?"
                tag="Basics"
              />
              <KeepReadingLink
                href="/blog/how-to-check-ai-visibility/"
                title="How to Check Your AI Visibility"
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
                Ready to implement AEO for your business?
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
                Platform-specific citation work with a clear audit and prioritized
                action plan — or start with a cross-platform{" "}
                <Link href={AUDIT_URL} style={linkStyle}>
                  AI visibility audit
                </Link>{" "}
                ($1,500 CAD flat).
              </p>
              <Link
                href={AEO_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Work With an AEO Consultant <span className="arr">&rarr;</span>
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

function InlineAEOCTA() {
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
        Work with an AEO consultant
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
        If you&rsquo;re ready to implement AEO — not just understand what it is
        — the next step is working with someone who can audit where you stand and
        build a plan specific to your industry and platforms.
      </p>
      <Link href={AEO_URL} className="btn btn-primary">
        Work With an AEO Consultant <span className="arr">&rarr;</span>
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
