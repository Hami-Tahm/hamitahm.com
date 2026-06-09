import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const SLUG = "how-to-get-mentioned-by-chatgpt";
const ARTICLE_TITLE =
  "How to Get Mentioned by ChatGPT: A Practical Guide for Businesses";
const ARTICLE_DESCRIPTION =
  "ChatGPT mentions brands that are authoritative, well-structured, and consistently cited across the web. Here's exactly how to improve your chances — with steps you can start this week.";
const DATE_PUBLISHED = "2026-06-08";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;

const FAQ_ITEMS = [
  {
    q: "Can I pay to get mentioned by ChatGPT?",
    a: "No. ChatGPT doesn't offer paid brand placement. Mentions come from training data and real-time retrieval — not advertising. There is no buyable shortcut.",
  },
  {
    q: "Does ChatGPT use real-time information?",
    a: "It depends on the mode. ChatGPT without Browse uses training data up to its knowledge cutoff. ChatGPT with Browse enabled (Plus and GPT-4o) retrieves live pages in real time. This guide covers both modes because the fixes are different.",
  },
  {
    q: "Does schema markup help with ChatGPT mentions?",
    a: "Yes — particularly Organization, FAQPage, and Article schema. Structured data makes your brand identifiable and accurately representable by AI systems. It's one of the fastest technical changes you can make.",
  },
  {
    q: "How do I know if ChatGPT is mentioning my brand?",
    a: "Manual query testing. Run your core queries in ChatGPT weekly and record results. There's no tool yet that gives fully reliable, cross-platform visibility monitoring.",
  },
  {
    q: "What's the fastest way to improve ChatGPT brand visibility?",
    a: "Three moves in order: (1) unblock GPTBot in your robots.txt, (2) switch from SPA to SSR or SSG if applicable, (3) add Organization schema to your homepage. These changes can produce measurable Browse-mode visibility within weeks.",
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

export default function HowToGetMentionedByChatGPTPost() {
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
            <span>How to Get Mentioned by ChatGPT</span>
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
              Training data, Browse mode, entity signals, and the technical fixes
              that actually move the needle.
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
                  June 8, 2026 &middot; 13 min read
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
                ChatGPT mentions brands that are credible, consistently cited,
                and structurally easy for AI to identify — not brands that paid
                for placement.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT mentions brands based on what it learned during training
              and what it retrieves via web browsing. To get mentioned, your
              brand needs to be present, credible, and consistently cited across
              sources that AI systems trust — including structured content,
              authoritative third-party mentions, and schema markup. This guide
              covers the specific steps that move the needle.
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
              ChatGPT mentions brands that are credible, consistently cited, and
              structurally easy for AI to identify — not brands that paid for
              placement.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              This is the same framework that took a financial calculator site
              with zero domain authority from invisible to {HOMECALC_PROOF.citations}{" "}
              AI citations in {HOMECALC_PROOF.timeframe}.{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                See how it worked &rarr;
              </Link>
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="01"
              text="Why ChatGPT mentions some brands and not others"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT has two distinct modes for finding information about your
              brand:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Training data.
              </strong>{" "}
              What it absorbed before its knowledge cutoff. If your brand appeared
              in enough credible sources before that date, it&rsquo;s baked into
              the model. This doesn&rsquo;t update daily.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Browse mode.
              </strong>{" "}
              When ChatGPT has web browsing enabled (available in ChatGPT Plus and
              GPT-4o), it retrieves live web pages in real time. This is
              fundamentally different from training data. If your pages
              aren&rsquo;t indexable, Browse can&rsquo;t find them — even if
              you&rsquo;ve published excellent content.
            </p>
            <p style={{ marginBottom: 26 }}>
              Most guides treat these as the same thing. They&rsquo;re not. Some
              of the steps below produce results in days via Browse mode. Others
              build your training data presence over months. Knowing which is
              which matters for prioritization.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Step 1 — Build a citable entity" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Before ChatGPT can mention you accurately, it needs to clearly
              identify what your brand is.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Add Organization schema
              </strong>{" "}
              to your homepage and about page. At minimum:{" "}
              <code
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.85em",
                  background: "var(--panel)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                name
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
                url
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
                description
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
                sameAs
              </code>{" "}
              — links to your LinkedIn, Google Business Profile, and Crunchbase
              or equivalent. This tells AI systems, unambiguously, who you are and
              what category you belong to.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Create a consistent brand footprint.
              </strong>{" "}
              Your business name, location, and category need to appear
              identically across your website, Google Business Profile, LinkedIn,
              and any directory listings. Inconsistency creates ambiguity. AI
              systems skip ambiguous entities.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Build an author page
              </strong>{" "}
              if your brand centers on personal expertise. A named author with a
              linked bio and publication history reinforces entity clarity — and
              is a direct signal used by Google AI Overviews and Gemini.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="03"
              text="Step 2 — Get cited on sources ChatGPT trusts"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT&rsquo;s training data draws from specific source types.
              Getting onto these is one of the highest-leverage strategies for
              brand visibility in AI interfaces.
            </p>
            <p style={{ marginBottom: 16 }}>The sources that carry real weight:</p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Wikipedia and Wikidata
                </strong>{" "}
                — You don&rsquo;t need a Wikipedia page. Being mentioned on a page
                that&rsquo;s relevant to your category is enough. A Wikidata
                entity entry for your business costs nothing and signals
                legitimacy directly.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Reddit
                </strong>{" "}
                — ChatGPT&rsquo;s training corpus includes extensive Reddit
                content. Genuine mentions in relevant subreddits
                (r/realestate, r/personalfinance, r/smallbusiness,
                r/legaladvice, etc.) are more valuable than most people realize.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  G2, Clutch, Capterra
                </strong>{" "}
                — For software and professional services, these are among the
                most trusted citation sources in AI training data.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Industry publications and trade press
                </strong>{" "}
                — Vertical-specific outlets with real readership. One article in
                an industry-specific publication outweighs ten generic blog
                mentions.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Earned PR mentions
                </strong>{" "}
                — Any coverage in outlets with established domain authority. Even
                a brief mention in a credible outlet adds a data point that AI
                systems draw from.
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              The through-line: the strategy for getting mentioned in AI outputs
              is the same as the strategy for building credibility across the web
              — because that&rsquo;s exactly what AI systems learned from.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="04"
              text="Step 3 — Structure your content for AI extraction"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              ChatGPT extracts claims and facts from structured content. A page
              that buries key information inside dense paragraphs or vague
              marketing copy doesn&rsquo;t give AI much to work with.
            </p>
            <p style={{ marginBottom: 16 }}>
              Practical changes that make your content extractable:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Use clear H2 and H3 headings that directly answer the questions
                your buyers ask
              </li>
              <li style={{ marginBottom: 11 }}>
                Add FAQ sections with short, specific answers
              </li>
              <li style={{ marginBottom: 11 }}>
                State facts about your business explicitly and early: what you
                do, who you serve, where you operate, what results you produce
              </li>
              <li style={{ marginBottom: 11 }}>
                Write in direct declarative sentences — not hedged, abstract
                language
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              A page that says &ldquo;We help mortgage brokers in Toronto close
              more deals using AI-generated lead reports&rdquo; is extractable. A
              page that says &ldquo;We leverage cutting-edge solutions to help
              growth-focused professionals achieve their goals&rdquo; is not.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text="Step 4 — Enable ChatGPT Browse mode to find you"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              If your site blocks AI crawlers or isn&rsquo;t properly indexed,
              ChatGPT Browse cannot see you — regardless of content quality.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Check your robots.txt.
              </strong>{" "}
              OpenAI&rsquo;s crawler is called GPTBot. If your robots.txt
              contains this:
            </p>
            <pre
              style={{
                fontFamily: "var(--mono)",
                fontSize: 14,
                lineHeight: 1.55,
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 8,
                padding: "18px 20px",
                margin: "0 0 26px",
                overflowX: "auto",
                color: "var(--ink)",
              }}
            >
              {`User-agent: GPTBot
Disallow: /`}
            </pre>
            <p style={{ marginBottom: 26 }}>
              ChatGPT Browse cannot access your site. Remove the block.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Check your sitemap.
              </strong>{" "}
              Core pages should be submitted and indexed. If a page isn&rsquo;t
              in your sitemap and has no inbound links, it&rsquo;s unlikely to be
              crawled.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Address your rendering architecture.
              </strong>{" "}
              If your site is built as a single-page application (SPA) — fully
              JavaScript-rendered — GPTBot and most AI crawlers see a near-empty
              page. Server-side rendering (SSG or SSR) is not optional if AI
              visibility matters to you. This was the single highest-impact
              technical change behind the HomeCalc results referenced above.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="06"
              text="Step 5 — Monitor your ChatGPT visibility"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The available tools for tracking ChatGPT brand visibility are
              limited. Platforms like Brandwatch and Mention track web and social
              mentions, but don&rsquo;t give you reliable insight into what
              ChatGPT is actually generating about you in real time.
            </p>
            <p style={{ marginBottom: 16 }}>
              The most accurate method is still manual:
            </p>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Write a list of 10–15 queries your customers would ask that could
                surface your brand
              </li>
              <li style={{ marginBottom: 11 }}>
                Run those queries in ChatGPT weekly — once with Browse enabled,
                once without
              </li>
              <li style={{ marginBottom: 11 }}>
                Record whether your brand appears, what it says, and whether the
                description is accurate
              </li>
              <li style={{ marginBottom: 11 }}>
                Note any inaccuracies for correction in your source content
              </li>
            </ol>
            <p style={{ marginBottom: 26 }}>
              Thirty minutes a week. It&rsquo;s the only way to know with
              certainty what ChatGPT is saying about your business right now.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="How long does it take?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Technical fixes (robots.txt, schema, SSR/SSG):
              </strong>{" "}
              Days to weeks. GPTBot crawls frequently. If your site becomes
              indexable and schema is in place, Browse mode can surface you fast.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Third-party citation building:
              </strong>{" "}
              Months. Training data updates on a model cycle, not a crawl cycle.
              Building your citation presence across Reddit, G2, industry
              publications, and PR takes time — but compounds.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                The practical approach:
              </strong>{" "}
              Fix the technical layer first. It&rsquo;s fast and high-leverage.
              Build the citation layer in parallel. The combination of
              Browse-mode accessibility and strong citation coverage is what
              produces durable ChatGPT presence.
            </p>
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
              For more on what AI visibility means across platforms, see{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>
              . For the full strategy framework, see the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility hub
              </Link>
              .
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
                href="/blog/how-to-get-cited-by-perplexity/"
                title="How to Get Cited by Perplexity"
                tag="ChatGPT & Perplexity"
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
                Want your ChatGPT visibility mapped?
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
                The audit covers ChatGPT, Perplexity, Google AI Overviews, and
                Gemini — with a prioritized action plan. $1,500 CAD flat.
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
        Want this done for you?
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
        An AI visibility audit covers ChatGPT, Perplexity, Google AI Overviews,
        and Gemini — not just one platform. You&rsquo;ll know exactly where you
        stand and what to fix first.
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
