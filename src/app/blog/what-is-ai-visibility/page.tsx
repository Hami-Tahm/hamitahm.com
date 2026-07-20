import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "what-is-ai-visibility";
const ARTICLE_TITLE =
  "What Is AI Visibility? Definition, Metrics, Tracking";
const ARTICLE_DESCRIPTION =
  "AI visibility is how often — and how accurately — your brand appears in AI-generated search answers. Here's what it means, how to measure it, and why it's different from SEO.";
const DATE_PUBLISHED = "2026-06-08";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const AEO_URL = "/ai-visibility/answer-engine-optimization-consultant-canada/";
const GEO_URL =
  "/ai-visibility/generative-engine-optimization-consultant-canada/";

const FAQ_ITEMS = [
  {
    q: "Is AI visibility the same as SEO?",
    a: "No. SEO measures rankings and clicks in traditional search. AI visibility measures whether AI systems cite you accurately and prominently in generated answers. The inputs overlap — good technical SEO helps — but the strategies, platforms, and metrics are distinct.",
  },
  {
    q: "What platforms does AI visibility cover?",
    a: "Primarily ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot. Each platform pulls from different sources and behaves differently, so coverage needs to be tracked per platform, not as a single number.",
  },
  {
    q: "How do I track my AI visibility on Gemini?",
    a: "Run your core queries directly in Gemini and record whether your brand appears. Note what it says about you and whether it's accurate. There's no automated tool that covers all platforms reliably — manual query testing is still the most accurate method.",
  },
  {
    q: "What is a good AI visibility benchmark?",
    a: "There's no industry-wide standard yet. Establish your own baseline by running your query set and recording results. Zero citations is the starting point for most businesses. Progress is measured against your own prior performance.",
  },
  {
    q: "Can a small business improve AI visibility without a big budget?",
    a: "Yes. The highest-impact changes — schema markup, SSR/SSG migration, consistent entity signals across directories and listings — are technical and content-based. The investment is in expertise and time, not media spend.",
  },
  {
    q: "How long does it take to see AI visibility results?",
    a: "Faster than traditional SEO in some cases. Schema and structural changes can be picked up in a few weeks. Platforms vary: Google AI Overviews and Gemini tend to update faster than ChatGPT's training data cycle. Most businesses see measurable movement within one to three months of focused work.",
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

export default function WhatIsAIVisibilityPost() {
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
            <span>What Is AI Visibility</span>
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
              What Is{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI Visibility?
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
              Definition, metrics, and how to track whether AI systems know you
              exist — and say the right things when they do.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 8, 2026" readTime="14 min read" />
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
                AI visibility is how often — and how accurately — your brand
                appears in AI-generated answers. Unlike SEO, it measures
                citations and coverage across ChatGPT, Perplexity, Google AI
                Overviews, Gemini, and Bing Copilot — not rankings in blue
                links.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility is the degree to which your brand, product, or
              content appears — accurately and prominently — in AI-generated
              search results from platforms like ChatGPT, Perplexity, Google AI
              Overviews, and Gemini. Unlike traditional SEO, which measures
              rankings and clicks, AI visibility measures whether AI systems know
              you exist, what they say about you, and how often they cite you
              when users ask relevant questions.
            </p>
            <p style={{ marginBottom: 26 }}>
              If someone asks ChatGPT &ldquo;who are the best mortgage brokers in
              Toronto&rdquo; and you don&rsquo;t come up — that&rsquo;s an AI
              visibility problem. Not an SEO problem. A different problem
              entirely.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text='What "AI visibility" actually means' />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility meaning breaks down into three things.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Presence.
              </strong>{" "}
              Does the AI know you exist? Can it name you, describe what you do,
              and associate you with the right category?
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Accuracy.
              </strong>{" "}
              When the AI mentions you, is what it says correct? Wrong
              descriptions, outdated information, misattributed claims — all of
              that counts against you, even if you technically &ldquo;appear.&rdquo;
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Prominence.
              </strong>{" "}
              Are you cited early in the answer, or buried at the end of a list,
              or skipped entirely?
            </p>
            <p style={{ marginBottom: 26 }}>
              Most businesses assume that if they rank well in Google, AI systems
              will pick them up automatically. That&rsquo;s not how it works. AI
              models draw from different sources, weight authority differently,
              and don&rsquo;t necessarily surface the same sites that rank in
              traditional search. You can hold the #1 position on Google and be
              completely absent from every AI-generated answer in your category.
            </p>
            <p style={{ marginBottom: 26 }}>
              Those are two separate problems that need two separate strategies.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="AI visibility vs. SEO" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The fastest way to understand AI visibility is to see what it
              isn&rsquo;t.
            </p>
            <ComparisonTable />
            <p style={{ marginBottom: 26 }}>
              SEO is about earning a position in a ranked list. AI visibility is
              about being included — and described correctly — in a synthesized
              answer. The inputs overlap in places, but the outputs are
              different, the platforms are different, and the measurement is
              entirely different.
            </p>
            <p style={{ marginBottom: 26 }}>
              The biggest mistake I see: businesses optimize only for rankings,
              assume the AI layer will follow, and find out months later
              they&rsquo;re invisible where their customers are now asking
              questions.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Where AI visibility happens" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility isn&rsquo;t one platform. It spans several, each with
              different behavior and different audiences:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  ChatGPT (OpenAI)
                </strong>{" "}
                — Conversational queries, product and service recommendations,
                research questions. The platform most people picture first.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Perplexity
                </strong>{" "}
                — High-citation responses with visible source links. Strong in
                professional, research, and comparison searches.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Google AI Overviews
                </strong>{" "}
                — Integrated into Google Search itself. Highest volume by far.
                Directly competes with traditional organic results.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Gemini (Google)
                </strong>{" "}
                — Integrated across Google&rsquo;s ecosystem — Search,
                Workspace, mobile. Strong in local and professional service
                queries.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Bing Copilot (Microsoft)
                </strong>{" "}
                — Microsoft&rsquo;s AI layer over Bing. Significant in B2B
                contexts and Windows-native audiences.
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Being well-cited on one doesn&rsquo;t guarantee anything on the
              others. Each platform uses different training data, different
              retrieval methods, and different signals to decide what to
              include.
            </p>
            <p style={{ marginBottom: 26 }}>
              For what it takes to get cited on each, see my work on{" "}
              <Link href={AEO_URL} style={linkStyle}>
                answer engine optimization
              </Link>{" "}
              and{" "}
              <Link href={GEO_URL} style={linkStyle}>
                generative engine optimization
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="How to measure AI visibility" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              There&rsquo;s no single dashboard for this yet. No universal
              &ldquo;AI visibility index&rdquo; that scores you across platforms
              and hands you a report. What exists right now is a set of four
              metrics you track manually — or with a structured audit process.
            </p>

            <h3 style={h3Style}>Citation count</h3>
            <p style={{ marginBottom: 26 }}>
              How often does the AI mention your brand when someone asks a
              relevant question?
            </p>
            <p style={{ marginBottom: 26 }}>
              The method: build a set of 10–20 queries that represent how your
              customers would search for what you do. Run those queries across
              each AI platform. Count how many times your brand appears in the
              responses. Do this on a consistent schedule — weekly or monthly —
              and track the number over time.
            </p>
            <p style={{ marginBottom: 26 }}>
              This is your most fundamental metric. Everything else builds on top
              of it.
            </p>

            <h3 style={h3Style}>Accuracy rate</h3>
            <p style={{ marginBottom: 26 }}>
              When the AI does cite you, what exactly does it say?
            </p>
            <p style={{ marginBottom: 26 }}>
              You want to check: Does it describe your product or service
              correctly? Does it have your location, specialty, or positioning
              right? Is anything outdated, wrong, or misleading?
            </p>
            <p style={{ marginBottom: 26 }}>
              An inaccurate citation can actively work against you. A potential
              customer who reads a wrong description and acts on it is worse
              than no citation at all. Accuracy rate matters as much as presence.
            </p>

            <h3 style={h3Style}>Platform coverage</h3>
            <p style={{ marginBottom: 26 }}>
              Which AI platforms include you — and which don&rsquo;t?
            </p>
            <p style={{ marginBottom: 26 }}>
              A brand that appears in Perplexity but not in <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Google AI Overviews</a>
              has a major gap. AIO has the highest query volume by a significant
              margin. Platform coverage tells you where to focus first. On Gemini
              specifically, the key metric is whether your brand appears in
              AI-generated responses for your core queries — Gemini&rsquo;s deep
              integration across Google products makes it a high-priority
              platform to track separately.
            </p>

            <h3 style={h3Style}>Benchmark comparison</h3>
            <p style={{ marginBottom: 26 }}>
              What counts as &ldquo;good&rdquo;? There&rsquo;s no
              industry-standard benchmark for AI visibility yet. Most businesses,
              when they first check, are at zero — zero citations for their core
              queries across most platforms.
            </p>
            <p style={{ marginBottom: 26 }}>
              The &ldquo;AI answer visibility benchmark&rdquo; isn&rsquo;t an
              external standard you compare against. It&rsquo;s your own baseline,
              measured consistently over time. Zero citations is the starting
              point. Any movement from there is measurable progress. Businesses
              that start tracking early have a structural advantage because they
              can see their own trajectory before their competitors even begin.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="What affects AI visibility" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Three factors determine how visible you are in AI-generated
              answers.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Structured, crawlable content.
              </strong>{" "}
              AI systems can&rsquo;t cite what they can&rsquo;t read. Pages built
              entirely in JavaScript — single-page app architecture — are often
              invisible to AI crawlers. Static or server-rendered content is
              indexed and cited significantly more reliably. This is one of the
              highest-leverage technical changes a business can make.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Schema markup and entity clarity.
              </strong>{" "}
              The clearer you define your brand, category, and offerings in
              <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>structured data</a>, the more confidently AI systems can represent you.
              FAQPage, Article, LocalBusiness, and Organization schema all
              contribute to this.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Third-party authority signals.
              </strong>{" "}
              AI systems read about you across the web — reviews, mentions,
              directory listings, press, industry publications. The more
              consistently and accurately your brand is described across external
              sources, the more confident AI becomes in citing you.
            </p>
            <p style={{ marginBottom: 26 }}>
              These are the inputs. For the actual methodology behind improving
              each one, the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility hub
              </Link>{" "}
              is where that lives — not here.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="How to improve your AI visibility" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The practical starting point is understanding where you stand: what
              AI systems currently say about you, what they get wrong, and where
              you&rsquo;re absent entirely.
            </p>
            <p style={{ marginBottom: 26 }}>
              For most businesses, the highest-leverage moves are technical first
              — migrating from SPA to server-rendered architecture if needed,
              adding schema markup, and building consistent entity signals across
              third-party sources. Content and authority work follows from that
              foundation.
            </p>
            <p style={{ marginBottom: 26 }}>
              If you want a structured assessment of your current AI visibility
              and a prioritized action plan, an{" "}
              <Link href={AUDIT_URL} style={linkStyle}>
                AI visibility audit
              </Link>{" "}
              is the fastest way to get that picture. That&rsquo;s exactly what I
              run for businesses starting out on this.
            </p>
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
                works with businesses on getting accurately cited in ChatGPT,
                Perplexity, Google AI Overviews, Gemini, and Bing Copilot.
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
              &rarr; See the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility hub
              </Link>{" "}
              for the full picture.
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
              if you want to know where you stand.
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
                href="/blog/how-to-check-ai-visibility/"
                title="How to Check Your AI Visibility"
                tag="Basics"
              />
              <KeepReadingLink
                href="/blog/aeo-vs-geo-vs-seo/"
                title="AEO vs GEO vs SEO Explained"
                tag="Comparison"
              />
              <KeepReadingLink
                href="/blog/ai-visibility-tools-vs-audit/"
                title="AI Visibility Tools vs. an Audit"
                tag="Guide"
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
                Know where you stand across six AI platforms.
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
                Structured audit, written report, action plan, and walkthrough
                call. $1,500 CAD flat — no retainer.
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
    <h2
      style={{
        fontFamily: "var(--mono)",
        fontWeight: 400,
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
    </h2>
  );
}

function ComparisonTable() {
  const rows = [
    ["Where it shows up", "Google blue links", "AI-generated answers"],
    ["What it measures", "Rankings, traffic", "Citations, accuracy, coverage"],
    ["Key platforms", "Google, Bing", "ChatGPT, Perplexity, Gemini, AIO"],
    ["What content it needs", "Keywords, backlinks", "Authority, schema, structured data"],
    ["How to track", "GA4, Search Console", "Manual audits, citation monitoring"],
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
          gridTemplateColumns: "1.1fr 1fr 1fr",
          gap: 16,
          minWidth: 480,
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
        <span>Traditional SEO</span>
        <span>AI Visibility</span>
      </div>
      {rows.map(([label, seo, ai]) => (
        <div
          key={label}
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gap: 16,
            minWidth: 480,
            padding: "12px 0",
            borderBottom: "1px solid var(--line)",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontWeight: 600, color: "var(--ink)" }}>{label}</span>
          <span style={{ color: "var(--muted)" }}>{seo}</span>
          <span style={{ color: "var(--muted)" }}>{ai}</span>
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
        Want a structured baseline?
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
        An AI visibility audit tests your core queries across all six platforms
        and gives you citation count, accuracy gaps, and a prioritized action
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
