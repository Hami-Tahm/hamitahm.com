import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "aeo-vs-geo-vs-seo";
const ARTICLE_TITLE =
  "AEO vs GEO vs SEO: What's the Difference and Which Do You Need?";
const ARTICLE_DESCRIPTION =
  "SEO optimizes for search rankings. AEO targets AI-generated answers. GEO optimizes for AI-generated content. Here's how they differ — and which one applies to your business.";
const DATE_PUBLISHED = "2026-06-08";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const AEO_URL = "/ai-visibility/answer-engine-optimization-consultant-canada/";
const GEO_URL =
  "/ai-visibility/generative-engine-optimization-consultant-canada/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";

const FAQ_ITEMS = [
  {
    q: "Is AEO the same as GEO?",
    a: "No. AEO focuses on appearing in AI-generated direct answer blocks — when a user asks a specific question and the AI produces a cited response. GEO is broader — it covers how AI systems represent your brand across all AI-generated content, not just direct Q&A answers.",
  },
  {
    q: "Does SEO still matter with AI search?",
    a: "Yes. Traditional search rankings still drive significant volume, and the technical signals SEO requires — clean architecture, authority, structured content — also feed AEO and GEO performance. A strong SEO foundation makes every other optimization layer more effective.",
  },
  {
    q: "Which should I invest in first — AEO, GEO, or SEO?",
    a: "If your SEO foundation is weak: fix that first. If SEO is in reasonable shape and your buyers are using AI tools for research or decisions: prioritize AEO. Add GEO when brand accuracy in AI-generated content is a specific concern — typically B2B, professional services, and thought-leadership categories.",
  },
  {
    q: "What industries benefit most from AEO?",
    a: "Any category with high-intent, question-driven buyer behavior: legal, financial services, real estate, healthcare, SaaS, professional services. If your customer's journey includes specific research questions, AEO is high-value.",
  },
  {
    q: "How do I know if I need GEO optimization?",
    a: "Ask ChatGPT or Gemini about your company. Ask what options exist in your category. Ask which vendors they'd recommend. If your brand doesn't appear — or appears inaccurately — you have a GEO problem.",
  },
  {
    q: "Can one consultant handle SEO, AEO, and GEO?",
    a: "Yes, and it's usually better that way. The strategies are interdependent. Siloing them across different agencies or specialists creates the common problem of optimizing one layer and inadvertently undermining another.",
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

export default function AEOvsGEOvsSEOPost() {
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
            <span>AEO vs GEO vs SEO</span>
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
              </em>
              : What&rsquo;s the Difference?
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
              Three strategies, three surfaces — and how to know which layer
              your business needs first.
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
                  June 8, 2026 &middot; 12 min read
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
                SEO targets traditional rankings. AEO targets AI-generated direct
                answers. GEO targets how AI models represent your brand across
                generated content. Most businesses need all three — priority
                depends on where your buyers search.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              SEO, AEO, and GEO are three distinct optimization strategies — each
              targeting a different layer of modern search. SEO targets
              traditional search rankings. AEO (Answer Engine Optimization)
              targets AI-generated direct answers in platforms like Perplexity
              and Google AI Overviews. GEO (Generative Engine Optimization)
              targets how AI models generate and cite content across any
              AI-powered interface. Most businesses need all three — but the
              priority depends on where your buyers search.
            </p>
            <p style={{ marginBottom: 26 }}>
              If you&rsquo;re still getting oriented on what AI visibility means
              before comparing strategies, start with{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What is SEO?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              SEO — search engine optimization — is the practice of making your
              content rank in Google and Bing. It has been the dominant digital
              marketing strategy for over two decades.
            </p>
            <p style={{ marginBottom: 26 }}>
              The signals: backlinks, keyword relevance, technical health, domain
              authority. The output: positions in the ranked results your
              customers see when they search.
            </p>
            <p style={{ marginBottom: 26 }}>
              SEO is not going away. But it&rsquo;s no longer the only game.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="What is AEO?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <Link href={AEO_URL} style={linkStyle}>
                AEO (Answer Engine Optimization)
              </Link>{" "}
              is the practice of optimizing your content to appear in
              AI-generated direct answers — the responses that Perplexity,
              Google AI Overviews, Gemini, and similar platforms generate when
              someone asks a question.
            </p>
            <p style={{ marginBottom: 26 }}>
              The signals: FAQPage schema, structured Q&amp;A content, citation
              authority, clear direct answers. The output: your brand cited in
              the answer block, not buried in the ranked results below it.
            </p>
            <p style={{ marginBottom: 26 }}>
              AEO matters because a growing share of searches now end without a
              click. The AI answers the question directly. If you&rsquo;re not in
              that answer, you&rsquo;re invisible to the buyer at the moment
              they&rsquo;re most ready to decide.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="What is GEO?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <Link href={GEO_URL} style={linkStyle}>
                GEO (Generative Engine Optimization)
              </Link>{" "}
              is broader. It&rsquo;s the practice of optimizing how AI systems
              — ChatGPT, Claude, Gemini, Copilot, and others — represent your
              brand whenever they generate content about your industry, your
              category, or your competitors.
            </p>
            <p style={{ marginBottom: 26 }}>
              The signals: entity consistency across the web, structured data,
              third-party mentions, training data coverage. The output: accurate
              brand mentions in AI-generated content, whether or not someone
              explicitly searched for you.
            </p>
            <p style={{ marginBottom: 26 }}>
              The key difference from AEO: GEO isn&rsquo;t only about answering
              questions. It&rsquo;s about making sure that when any AI generates
              content about your space, your brand shows up correctly.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Side-by-side comparison" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ComparisonTable />
            <p style={{ marginBottom: 26 }}>
              AEO targets AI-generated direct answers. GEO targets how AI
              systems generate content about your brand. SEO targets traditional
              search rankings. All three work best together.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Which one does your business need?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This is the question the comparison is actually trying to answer.
              Here&rsquo;s how to think through it.
            </p>

            <h3 style={h3Style}>If your buyers use Google Search</h3>
            <p style={{ marginBottom: 26 }}>
              Start with SEO. If your customers are still finding businesses
              primarily through Google — clicking links, visiting pages,
              comparing options — SEO is your highest-leverage channel. Fix the
              foundation before adding layers.
            </p>

            <h3 style={h3Style}>If your buyers ask AI tools questions</h3>
            <p style={{ marginBottom: 26 }}>
              Prioritize AEO. A buyer who asks Perplexity &ldquo;what&rsquo;s the
              best mortgage broker in Vancouver&rdquo; isn&rsquo;t clicking
              through to page two. If you&rsquo;re not cited in the answer block,
              you don&rsquo;t exist for that buyer. AEO is what puts you there.
            </p>

            <h3 style={h3Style}>
              If AI platforms generate content about your industry
            </h3>
            <p style={{ marginBottom: 26 }}>
              Add GEO. If your buyers are using ChatGPT or Gemini for research
              and decision-making — asking about vendors, comparing categories,
              looking for recommendations — GEO determines whether your brand
              appears accurately in those conversations.
            </p>

            <h3 style={h3Style}>B2B businesses typically need all three</h3>
            <p style={{ marginBottom: 26 }}>
              For most B2B businesses, the honest answer is: all three, in
              layers. A prospect might find your category through Google (SEO),
              get a vendor recommendation from Perplexity (AEO), then ask
              ChatGPT directly about your company (GEO). Absent at any one
              touchpoint, you&rsquo;ve lost a buyer you never knew you had.
            </p>
            <p style={{ marginBottom: 26 }}>
              The best practice for AI optimization: start with AEO if
              you&rsquo;re in a high-intent, Q&amp;A-driven vertical — then
              layer GEO for brand accuracy across AI platforms — while
              maintaining your SEO foundation underneath.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="How they work together" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              These are not alternatives. They&rsquo;re layers.
            </p>
            <p style={{ marginBottom: 26 }}>
              Good technical SEO — clean architecture, server-rendered pages,
              fast load times — makes your content more crawlable by AI systems.
              Strong AEO content, built around clear questions and direct answers,
              creates the kind of authoritative signals that GEO builds on. GEO
              entity work — consistent brand representation across third-party
              sources — reinforces the authority signals that SEO relies on for
              rankings.
            </p>
            <p style={{ marginBottom: 26 }}>
              The mistake is treating them as three separate products to evaluate
              and choose between. AI visibility tools for SEO are emerging across
              the market — but the most effective approach is treating AEO, GEO,
              and SEO as a unified strategy rather than separate products you
              layer on top of each other.
            </p>
            <p style={{ marginBottom: 26 }}>
              What that unified strategy looks like in practice is covered in the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              hub — that&rsquo;s where the full framework lives, not here.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
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
              <em>
                Hami Tahm is an AI visibility consultant based in Toronto. He
                works with businesses on integrated SEO, AEO, and GEO strategy.
              </em>
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 8,
              }}
            >
              &rarr; See{" "}
              <Link href={AEO_URL} style={linkStyle}>
                Answer Engine Optimization
              </Link>{" "}
              for AEO specifics.
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 8,
              }}
            >
              &rarr; See{" "}
              <Link href={GEO_URL} style={linkStyle}>
                Generative Engine Optimization
              </Link>{" "}
              for GEO specifics.
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              &rarr; Start with an{" "}
              <Link href={AUDIT_URL} style={linkStyle}>
                AI visibility audit
              </Link>{" "}
              to find out where you stand.
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
                href={DEFINITION_URL}
                title="What Is AI Visibility?"
                tag="Basics"
              />
              <KeepReadingLink
                href="/blog/how-to-check-ai-visibility/"
                title="How to Check Your AI Visibility"
                tag="Basics"
              />
              <KeepReadingLink
                href={AEO_URL}
                title="AEO Consultant in Canada"
                tag="Service"
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
                Not sure which layer to fix first?
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
                An AI visibility audit maps your state across SEO, AEO, and GEO
                and gives you a prioritized action plan. $1,500 CAD flat — no
                retainer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
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

function ComparisonTable() {
  const rows = [
    ["Targets", "Google/Bing rankings", "AI direct answers", "AI-generated content"],
    ["Platforms", "Google, Bing", "Perplexity, Google AIO, Gemini", "ChatGPT, Claude, all LLMs"],
    ["Ranking signal", "Backlinks, keywords", "Schema, authority, citations", "Training data, entity presence"],
    ["Traffic type", "Click-through", "Zero-click answers", "Brand mentions + citations"],
    ["Measurement", "Rankings, clicks", "Citation frequency, featured placement", "Brand mention rate, accuracy"],
    ["Best for", "All businesses", "Q&A-heavy industries", "Thought leadership, B2B"],
  ] as const;

  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
        padding: "24px 26px",
        margin: "0 0 30px",
        fontFamily: "var(--sans)",
        fontSize: 15,
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 12,
          minWidth: 560,
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
      {rows.map(([label, seo, aeo, geo]) => (
        <div
          key={label}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 12,
            minWidth: 560,
            padding: "12px 0",
            borderBottom: "1px solid var(--line)",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontWeight: 600, color: "var(--ink)" }}>{label}</span>
          <span style={{ color: "var(--muted)" }}>{seo}</span>
          <span style={{ color: "var(--muted)" }}>{aeo}</span>
          <span style={{ color: "var(--muted)" }}>{geo}</span>
        </div>
      ))}
    </div>
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
        Not sure where to start?
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
        An AI visibility audit maps your current state across SEO, AEO, and GEO,
        identifies the highest-leverage gaps, and gives you a prioritized action
        plan.
      </p>
      <Link href={AUDIT_URL} className="btn btn-primary">
        Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
        <span className="arr">&rarr;</span>
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
