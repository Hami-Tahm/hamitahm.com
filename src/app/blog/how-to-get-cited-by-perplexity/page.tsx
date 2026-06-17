import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const SLUG = "how-to-get-cited-by-perplexity";
const ARTICLE_TITLE =
  "How to Get Cited by Perplexity AI: What Actually Drives Citations";
const ARTICLE_DESCRIPTION =
  "Perplexity cites sources differently than Google — it actively retrieves, reads, and ranks pages in real time. Here's how to make your content one it chooses to cite.";
const DATE_PUBLISHED = "2026-06-08";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const CHATGPT_URL = "/blog/how-to-get-mentioned-by-chatgpt/";
const AIO_URL = "/blog/how-to-appear-in-google-ai-overviews/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;

const FAQ_ITEMS = [
  {
    q: "Does Perplexity use the same sources as Google?",
    a: "No. Perplexity runs its own live retrieval — it doesn't pull from Google's index. Ranking in Google doesn't automatically translate to Perplexity citations. Perplexity performs its own search on every query and selects sources based on its own quality and relevance signals.",
  },
  {
    q: "Can I request to be cited by Perplexity?",
    a: "No. There's no submission process. The only lever is making your content more retrievable, more structured, and more authoritative — so Perplexity's system selects it over competing pages.",
  },
  {
    q: "Does Perplexity cite paywalled content?",
    a: "Rarely. PerplexityBot generally can't access content behind authentication or paywalls. Publicly accessible content is the foundation.",
  },
  {
    q: "How long does it take to start appearing in Perplexity citations?",
    a: "Faster than training-data-dependent platforms. Because Perplexity retrieves live, technical and structural improvements can affect citation frequency within weeks. The caveat: if your pages have near-zero authority, it takes longer to reach the threshold where Perplexity selects you over more established sources.",
  },
  {
    q: "Is Perplexity growing as a search platform?",
    a: "Yes. Perplexity is one of the fastest-growing AI search platforms, with particular strength in professional and B2B contexts. Search volume for Perplexity-related queries is increasing consistently. Establishing visibility now captures that growth as it compounds.",
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

export default function HowToGetCitedByPerplexityPost() {
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
            <span>How to Get Cited by Perplexity</span>
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
              Live retrieval, crawlability, extraction structure, and the
              authority signals Perplexity weighs on every query.
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
              <Image
                src="/images/hami-tahm/hami-tahm-portrait.png"
                alt="Hami Tahm"
                width={38}
                height={38}
                style={{
                  borderRadius: "50%",
                  border: "1px solid var(--line-strong)",
                  objectFit: "cover",
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
                  June 8, 2026 &middot; 11 min read
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
                Perplexity is retrieval-first — it browses live pages and cites
                what it finds, not what it was trained on. Your indexability and
                content structure determine whether it cites you.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity AI is a retrieval-first system — it searches the web in
              real time, reads your pages, and cites the sources it finds most
              direct, credible, and well-structured. Unlike ChatGPT&rsquo;s
              training-based knowledge, Perplexity actively browses. That means
              your indexability, content structure, and page authority all
              directly affect whether Perplexity cites you — and whether it
              cites you accurately.
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
              Perplexity is retrieval-first — it browses live pages and cites
              what it finds, not what it was trained on. Your indexability and
              content structure determine whether it cites you.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              This is the third in a platform-by-platform series. See also:{" "}
              <Link href={CHATGPT_URL} style={linkStyle}>
                how to get mentioned by ChatGPT
              </Link>{" "}
              and{" "}
              <Link href={AIO_URL} style={linkStyle}>
                how to appear in Google AI Overviews
              </Link>{" "}
              — the mechanisms are different on each platform.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="How Perplexity citations work" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity&rsquo;s citation model is distinct from both Google AI
              Overviews and ChatGPT.
            </p>
            <p style={{ marginBottom: 26 }}>
              When a user asks Perplexity a question, it doesn&rsquo;t draw from
              a pre-trained knowledge base. It runs a live web search, retrieves
              the top results, reads those pages directly, synthesizes an
              answer, and cites its sources — all in real time, on every query.
            </p>
            <p style={{ marginBottom: 26 }}>This means:</p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                If your page is blocked from crawling, Perplexity can&rsquo;t
                see it
              </li>
              <li style={{ marginBottom: 11 }}>
                If your page is accessible but poorly structured, Perplexity will
                read it and pass it by
              </li>
              <li style={{ marginBottom: 11 }}>
                If your page is accessible, well-structured, and authoritative,
                Perplexity is likely to cite it
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Google AIO works from Google&rsquo;s existing search index. ChatGPT
              works from training data with an optional Browse layer. Perplexity
              runs its own fresh retrieval on every single query. That&rsquo;s a
              meaningfully different pipeline — and it changes what optimization
              looks like.
            </p>
            <p style={{ marginBottom: 26 }}>
              One more pattern worth knowing: Perplexity heavily cites Reddit,
              Quora, G2, Clutch, and niche authority sites alongside traditional
              web pages. Brand presence on those platforms feeds directly into
              Perplexity citation frequency.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Step 1 — Make your pages retrievable" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              If Perplexity can&rsquo;t crawl your page, you&rsquo;re invisible.
              This is step zero.
            </p>
            <p style={{ marginBottom: 26 }}>
              Check your robots.txt. Perplexity&rsquo;s crawler is PerplexityBot.
              If you&rsquo;re blocking all crawlers with a blanket{" "}
              <code
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.9em",
                  background: "var(--panel)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                Disallow: /
              </code>{" "}
              or blocking PerplexityBot specifically, Perplexity cannot read
              your content.
            </p>
            <p style={{ marginBottom: 26 }}>
              Beyond robots.txt: confirm your core pages are indexed, internally
              linked, and included in your sitemap. If your site is SPA-rendered
              (JavaScript-only), retrieval-based systems including Perplexity
              often see an empty page. SSG or SSR is the fix — and it&rsquo;s
              the same fix that applies across every AI platform.
            </p>
            <p style={{ marginBottom: 26 }}>
              Page speed matters too. Retrieval systems time out on slow pages.
              Core Web Vitals improvements reduce that risk.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Step 2 — Write for direct extraction" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity reads pages to extract specific claims. It&rsquo;s
              looking for the most quotable, direct answer to the query
              it&rsquo;s processing. Dense paragraphs without a clear lead
              claim don&rsquo;t extract well.
            </p>
            <p style={{ marginBottom: 26 }}>The content pattern that works:</p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Heading = the topic or question
                </strong>
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  First 1-2 sentences = the direct answer
                </strong>{" "}
                — don&rsquo;t build up to it
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Remainder of the section = evidence, context, examples
                </strong>
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Perplexity reads headings to understand what a section covers, then
              pulls from the opening sentences for citation. If your best answer
              is buried in the third paragraph, it frequently gets missed. Every
              section should be able to stand alone as a citable unit.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Step 3 — Build domain authority" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity preferentially cites high-authority sources. A newly
              published page from a site with no backlinks competes against pages
              from established industry publications. The established source
              usually wins — unless your content is significantly more direct
              and relevant.
            </p>
            <p style={{ marginBottom: 26 }}>
              Authority-building for Perplexity follows the same logic as
              third-party trust signals generally:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Backlinks from credible sources in your vertical
              </li>
              <li style={{ marginBottom: 11 }}>
                Genuine mentions on Reddit, Quora, G2, Clutch, or equivalent
                community platforms
              </li>
              <li style={{ marginBottom: 11 }}>
                Consistent brand presence across directories and listings
              </li>
              <li style={{ marginBottom: 11 }}>
                Press coverage in outlets with real readership
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              HomeCalc.ca — a financial calculator site with no established
              authority — went from near-zero Perplexity citations to being
              regularly cited across mortgage and real estate queries. Perplexity
              was one of the platforms tracked in the{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                original AI visibility audit
              </Link>
              . The authority-building phase was a core part of what drove that
              shift.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text="Step 4 — Structure content Perplexity can parse"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity&rsquo;s retrieval reads page structure alongside
              content. A well-structured page gives the retrieval system clear
              signals about what each section covers and which sentences are the
              key claims.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                What helps:
              </strong>
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Short paragraphs (2-4 sentences)
              </li>
              <li style={{ marginBottom: 11 }}>
                H2 and H3 headings that describe each section specifically — not
                vaguely
              </li>
              <li style={{ marginBottom: 11 }}>
                Numbered and bulleted lists for multi-part answers
              </li>
              <li style={{ marginBottom: 11 }}>
                FAQ sections — Perplexity frequently pulls directly from Q&amp;A
                formatted content
              </li>
              <li style={{ marginBottom: 11 }}>
                Definitions and direct statements at the top of each section
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                What hurts:
              </strong>
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Long paragraphs with the key claim buried in the middle
              </li>
              <li style={{ marginBottom: 11 }}>
                Hedged or vague language that makes claims hard to extract
              </li>
              <li style={{ marginBottom: 11 }}>
                Content behind JavaScript-rendered tabs or accordions that
                retrieval bots can&rsquo;t access
              </li>
            </ul>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="06"
              text="Step 5 — Check your Perplexity citations"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Manual query testing is currently the most accurate method for
              monitoring Perplexity citation frequency.
            </p>
            <p style={{ marginBottom: 26 }}>The process:</p>
            <ol style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                Write a list of 10-15 queries your customers would ask that
                could surface your brand
              </li>
              <li style={{ marginBottom: 11 }}>
                Run each query in Perplexity
              </li>
              <li style={{ marginBottom: 11 }}>
                Record whether your site is cited, what Perplexity quotes, and
                whether the attribution is accurate
              </li>
              <li style={{ marginBottom: 11 }}>
                Flag inaccuracies — Perplexity occasionally misrepresents
                sources; if it&rsquo;s attributing incorrect claims to your
                page, you need to know and correct it
              </li>
            </ol>
            <p style={{ marginBottom: 26 }}>
              Perplexity Pro users see the specific sources cited. Run audits
              from a Pro account — you&rsquo;ll see exactly which pages are being
              pulled and what text was extracted.
            </p>
            <p style={{ marginBottom: 26 }}>
              There&rsquo;s no dedicated Perplexity citation tracking tool with
              reliable cross-query coverage yet. Manual testing remains the
              ground truth.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="07"
              text="Why Perplexity citations matter for business"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Perplexity&rsquo;s user base is concentrated among professional,
              research-oriented, and high-intent buyers — the audience most
              high-ticket service businesses and B2B companies want. A citation
              in Perplexity positions your brand as a verified source at the
              exact moment a buyer is forming their view.
            </p>
            <p style={{ marginBottom: 26 }}>
              The brands building Perplexity presence now are establishing
              authority before the platform reaches mainstream scale. The window
              to be first in this space is still open.
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
              For the full{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              strategy framework, see the hub.
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
                href={CHATGPT_URL}
                title="How to Get Mentioned by ChatGPT"
                tag="ChatGPT"
              />
              <KeepReadingLink
                href={AIO_URL}
                title="How to Appear in Google AI Overviews"
                tag="Google AIO"
              />
              <KeepReadingLink
                href={DEFINITION_URL}
                title="What Is AI Visibility?"
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
                Want your Perplexity presence audited?
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
                The audit covers Perplexity alongside ChatGPT, Google AI
                Overviews, and Gemini — with platform-specific citation analysis
                and a prioritized action plan. $1,500 CAD flat.
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
        Want your Perplexity presence audited?
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
        If you want to know exactly how often Perplexity is citing you, what
        it&rsquo;s saying, and where the gaps are — the audit covers Perplexity
        alongside ChatGPT, Google AI Overviews, and Gemini.
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
