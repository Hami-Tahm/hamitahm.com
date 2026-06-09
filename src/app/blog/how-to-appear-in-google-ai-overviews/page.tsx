import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "how-to-appear-in-google-ai-overviews";
const ARTICLE_TITLE =
  "How to Appear in Google AI Overviews: A Practical Guide";
const ARTICLE_DESCRIPTION =
  "Google AI Overviews pull from top-ranking pages — but ranking alone isn't enough. Here's what actually determines whether your content gets cited in an AI Overview.";
const DATE_PUBLISHED = "2026-06-08";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const AEO_URL = "/ai-visibility/answer-engine-optimization-consultant-canada/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const CHATGPT_URL = "/blog/how-to-get-mentioned-by-chatgpt/";

const FAQ_ITEMS = [
  {
    q: "Can I opt out of Google AI Overviews?",
    a: "Site owners can use the nosnippet meta tag to prevent Google from using page content in AI Overviews — but this also blocks featured snippets and other rich results. There's no AIO-specific opt-out. It's an all-or-nothing decision.",
  },
  {
    q: "Does appearing in AI Overviews reduce my clicks?",
    a: "Sometimes. For informational queries where the AIO fully answers the question, click-through rates can decline. For commercial or navigational queries, the effect is less pronounced. AIO citations can increase brand recognition and trust even without a direct click.",
  },
  {
    q: "Does page speed affect Google AI Overview inclusion?",
    a: "Indirectly. Page speed affects ranking, and ranking is a prerequisite for AIO. Slow pages that rank poorly are out. Pages that rank well despite speed issues can still be cited — but fixing speed improves ranking, which improves AIO inclusion probability.",
  },
  {
    q: "How quickly can I appear in Google AI Overviews after making changes?",
    a: "Faster than ChatGPT or other training-data-dependent platforms. Once Google re-crawls and re-indexes your updated pages — usually within days to weeks for active, well-linked sites — structural improvements can affect AIO citation probability relatively quickly.",
  },
  {
    q: "Is there a tool to check my Google AI Overview visibility?",
    a: "No purpose-built dedicated tool yet. Google Search Console includes partial AIO performance data. SE Ranking and BrightEdge have query-level AIO tracking. Manual query testing remains the most reliable method for understanding what Google is actually citing.",
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

export default function HowToAppearInGoogleAIOverviewsPost() {
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
            <span>How to Appear in Google AI Overviews</span>
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
              Ranking gets you into the room. Structure determines whether
              Google&rsquo;s AI cites you.
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
                Google AI Overviews cite content that ranks in the top 10 AND is
                structured for direct extraction — clear answers, schema, and
                author authority.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google AI Overviews pull from pages that already rank in the top
              10 — but ranking is a floor, not a guarantee. To get cited, your
              content also needs to be structured for extraction: clear answers,
              strong schema, and content Google&rsquo;s AI can directly quote or
              paraphrase. This guide covers what moves your content from
              &ldquo;ranking&rdquo; to &ldquo;cited.&rdquo;
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
              Google AI Overviews cite content that ranks in the top 10 AND is
              structured for direct extraction — clear answers, schema, and
              author authority.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              For broader context on{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>{" "}
              across all platforms, or for ChatGPT-specific visibility, see the{" "}
              <Link href={CHATGPT_URL} style={linkStyle}>
                how to get mentioned by ChatGPT
              </Link>{" "}
              guide — the mechanics there are different from AIO.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="How Google AI Overviews work" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google AI Overviews are not the same as ChatGPT or Perplexity.
              They don&rsquo;t use a separate AI model trained on static data.
              They use Google&rsquo;s retrieval system to pull from live,
              currently-indexed pages and synthesize an answer in real time.
            </p>
            <p style={{ marginBottom: 26 }}>
              That distinction matters for strategy. AIO is a layer on top of
              Google Search: it takes pages that rank for a query and extracts
              the most directly answerable content from them. You have to rank
              first. But ranking is a prerequisite — not the determining factor.
            </p>
            <p style={{ marginBottom: 26 }}>
              Here&rsquo;s what most guides miss:{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                AIO re-ranks content for citation relevance.
              </strong>{" "}
              A page sitting at position #7 can be cited over a page at position
              #1 if the #7 page has a cleaner, more extractable answer. Ranking
              gets you into the room. Structure determines whether you get cited.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Step 1 — Rank first" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              You cannot appear in Google AI Overviews if you don&rsquo;t rank in
              the top results. AIO primarily pulls from the top 10 organic
              results for a given query. There&rsquo;s no route around this.
            </p>
            <p style={{ marginBottom: 26 }}>
              Traditional SEO is the foundation: page speed, backlinks, topical
              authority, keyword relevance, technical health. If you&rsquo;re not
              ranking for a query, no amount of schema or content structuring
              changes that.
            </p>
            <p style={{ marginBottom: 26 }}>
              Where AIO is most active: informational queries — &ldquo;what
              is,&rdquo; &ldquo;how to,&rdquo; &ldquo;best way to,&rdquo;
              &ldquo;difference between.&rdquo; These are the query types where
              AIO activates most frequently and where your content has the highest
              chance of being selected. Prioritize informational content in your
              vertical.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="03"
              text="Step 2 — Structure content for extraction"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AIO doesn&rsquo;t read your page the way a human does. It looks for
              specific patterns — a direct answer immediately after a heading, a
              definition at the top of a section, a numbered list of steps — and
              pulls from those.
            </p>
            <p style={{ marginBottom: 16 }}>
              Content patterns AIO extracts most reliably:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Direct answer in 1–2 sentences after an H2.
                </strong>{" "}
                State the answer immediately after the heading. Don&rsquo;t build
                up to it. The sentence right after your H2 is the primary
                extraction target.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  FAQ sections.
                </strong>{" "}
                AIO pulls directly from Q&amp;A formatted content. A question on
                your page that matches a user&rsquo;s query, with a short direct
                answer, is a strong citation candidate.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Numbered steps.
                </strong>{" "}
                For how-to queries, AIO frequently reproduces the step structure
                verbatim. Keep steps short and scannable.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Short declarative sentences.
                </strong>{" "}
                Write as if every sentence could stand alone as an answer. Not
                &ldquo;leveraging innovative approaches to enhance digital
                presence&rdquo; — but &ldquo;add FAQPage schema to your homepage
                and service pages.&rdquo;
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              The working principle: write every H2 section as if the heading is
              the question and the first sentence after it is the answer. That is
              the extraction pattern.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Step 3 — Build page authority (E-E-A-T)" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Google AI Overviews have a strong bias toward E-E-A-T — Experience,
              Expertise, Authoritativeness, and Trustworthiness. This is
              Google&rsquo;s own quality framework, and AIO reflects it heavily.
              Low-E-E-A-T pages are deprioritized for citation regardless of their
              ranking position.
            </p>
            <p style={{ marginBottom: 16 }}>In practice:</p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Name your author.
              </strong>{" "}
              An anonymous page is a weaker citation candidate than a page
              authored by a named, linked expert. Add a clear author byline and
              connect it to an author bio page. Add Article schema with the
              author field populated — Google uses this directly.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Show relevant experience.
              </strong>{" "}
              State credentials or experience explicitly on the page. &ldquo;As
              a mortgage broker with 12 years in the Toronto market&rdquo; tells
              Google&rsquo;s systems something. Generic hedged copy doesn&rsquo;t.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Build external authority.
              </strong>{" "}
              Backlinks from credible sources, mentions in industry publications,
              reviews on trusted platforms — these reinforce E-E-A-T signals that
              increase AIO citation probability.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Keep content accurate and current.
              </strong>{" "}
              AIO is specifically designed to avoid citing unreliable content.
              Outdated claims, factual errors, and unsupported assertions reduce
              your trustworthiness signal. If information changes, update the
              page.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Step 4 — Use schema markup" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Schema markup doesn&rsquo;t guarantee AIO inclusion — but it removes
              ambiguity and reduces friction between your content and
              Google&rsquo;s extraction system. Well-structured schema is a
              signal that content is organized, authoritative, and
              extraction-ready.
            </p>
            <p style={{ marginBottom: 16 }}>
              Three schema types most directly relevant to Google AI Overviews:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                FAQPage schema
              </strong>{" "}
              — Mark up your FAQ section with FAQPage schema. When a user&rsquo;s
              query matches a question in your FAQ markup, your answer becomes a
              priority extraction target. This is the highest-ROI schema addition
              for AIO specifically.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                HowTo schema
              </strong>{" "}
              — For step-based content (like this guide), HowTo schema signals the
              structure directly. AIO frequently reproduces step content from
              HowTo-marked pages in Google Search rich results and AIO citations
              simultaneously.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Article schema with author
              </strong>{" "}
              — Populate{" "}
              <code
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.85em",
                  background: "var(--panel)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                author
              </code>
              ,{" "}
              <code
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.85em",
                  background: "var(--panel)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                datePublished
              </code>
              , and{" "}
              <code
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.85em",
                  background: "var(--panel)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                headline
              </code>
              . This feeds directly into Google&rsquo;s E-E-A-T evaluation and
              freshness signals — both inputs into AIO citation decisions.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="06"
              text="Step 5 — Monitor your Google AI Overviews presence"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              There&rsquo;s no dedicated Google AI Overview visibility tool yet
              that gives you clean, reliable tracking across all your target
              queries. The most accurate method remains manual query testing.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Manual audit process:
              </strong>
            </p>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                List your 10–15 highest-priority informational queries
              </li>
              <li style={{ marginBottom: 11 }}>
                Run each query in Google — in an incognito window to reduce
                personalization
              </li>
              <li style={{ marginBottom: 11 }}>
                Record whether an AI Overview appears and whether your site is
                cited
              </li>
              <li style={{ marginBottom: 11 }}>
                Note what the AIO says — accuracy matters as much as presence
              </li>
              <li style={{ marginBottom: 11 }}>
                Track weekly; AIO inclusions shift as Google re-crawls and updates
                its retrieval
              </li>
            </ol>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                What exists on the tool side:
              </strong>
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Google Search Console
                </strong>{" "}
                — AIO impressions are beginning to surface in performance
                reports, though the data is still limited and inconsistently
                categorized
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Third-party tools
                </strong>{" "}
                — SE Ranking, BrightEdge, and Semrush have started tracking AIO
                appearances at the query level; coverage is partial but improving
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Manual testing is slower. It&rsquo;s also more accurate. Use the
              tools to monitor scale; use manual testing to verify what&rsquo;s
              actually being said about you.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="What doesn't work" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 16 }}>
              Common mistakes that reduce AIO citation probability:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Blocking Googlebot.
                </strong>{" "}
                If Googlebot can&rsquo;t crawl your page, AIO can&rsquo;t cite it.
                Check your robots.txt and confirm your core pages aren&rsquo;t
                inadvertently blocked.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Thin content.
                </strong>{" "}
                AIO doesn&rsquo;t cite pages that skim the surface. A 250-word
                page won&rsquo;t be selected over a well-structured 900-word page
                that directly answers the question.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  JavaScript-only rendering.
                </strong>{" "}
                Single-page app architecture means Googlebot often sees an empty
                page. If your site is SPA-rendered, your content may be ranking
                (if Google has managed to crawl it before) but structurally
                invisible for AIO extraction purposes. Server-side rendering (SSR
                or SSG) resolves this.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Vague, keyword-stuffed copy.
                </strong>{" "}
                AIO is designed to avoid citing low-quality content. Pages written
                around keyword density rather than genuine answers are
                deprioritized.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  No-index pages.
                </strong>{" "}
                Pages excluded from Google&rsquo;s index can&rsquo;t appear in
                search results and can&rsquo;t be cited in AIO. Verify your core
                pages are indexed in Google Search Console.
              </li>
            </ul>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="08" text="Frequently asked questions" />
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
              For the{" "}
              <Link href={AEO_URL} style={linkStyle}>
                answer engine optimization
              </Link>{" "}
              strategy that makes AIO inclusion more systematic, or for the full
              picture of{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              across all platforms, those pages cover the methodology in depth.
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
                href={DEFINITION_URL}
                title="What Is AI Visibility?"
                tag="Basics"
              />
              <KeepReadingLink
                href={CHATGPT_URL}
                title="How to Get Mentioned by ChatGPT"
                tag="ChatGPT"
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
                Ranking but not cited in AI Overviews?
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
                An audit maps your Google AIO presence alongside ChatGPT,
                Perplexity, and Gemini. $1,500 CAD flat — prioritized action
                plan included.
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
        Get an expert to audit your Google AIO visibility
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
        An AI visibility audit covers Google AI Overviews alongside ChatGPT,
        Perplexity, and Gemini. You&rsquo;ll see exactly where you&rsquo;re
        cited, where you&rsquo;re absent, and what to fix first.
      </p>
      <Link href={AUDIT_URL} className="btn btn-primary">
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
