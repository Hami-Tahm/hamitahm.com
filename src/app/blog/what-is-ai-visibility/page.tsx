import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { AUDIT_PLATFORMS, AUDIT_PLATFORM_COUNT_WORD } from "@/lib/offers";
import { COMMERCIAL_REALITY } from "@/lib/citation-study";

const SLUG = "what-is-ai-visibility";
const ARTICLE_TITLE =
  "What Is AI Visibility? Definition & Metrics";
const ARTICLE_DESCRIPTION =
  "AI visibility is how often — and how accurately — your brand appears in AI-generated answers. What it means, how to measure it, and where it genuinely differs from SEO — with Google's own guidance quoted rather than talked around.";
const DATE_PUBLISHED = "2026-06-08";
const DATE_MODIFIED = "2026-08-11";

/**
 * ── WHY THIS FILE CHANGED ──
 *
 * The first version leaned on a clean story: AI visibility is a separate problem from
 * SEO, fixed with schema and server-side rendering. Google's own documentation
 * contradicts most of that, in its own words:
 *
 *   - "our generative AI features on Google Search are rooted in our core Search
 *     ranking and quality systems"
 *   - "From Google Search's perspective, optimizing for generative AI search is
 *     optimizing for the search experience, and thus still SEO."
 *   - "There are no additional requirements to appear in AI Overviews or AI Mode, nor
 *     other special optimizations necessary."
 *   - "Structured data isn't required for generative AI search, and there's no special
 *     schema.org markup you need to add."
 *   - "Google is able to process content within JavaScript as long as it isn't blocked."
 *
 * Selling a service in this category does not entitle me to a more convenient version
 * of those facts. So the page now quotes them and draws the line where it actually
 * sits: Google's guidance governs Google's surfaces. It says nothing about ChatGPT,
 * Perplexity or Claude, which do not use Google's index. And no engine's guidance
 * addresses whether what the answer says about you is TRUE.
 *
 * RULE FOR FUTURE EDITS: a causal claim ("X improves AI visibility") needs either a
 * vendor doc or a figure from the published dataset. Otherwise write it as a
 * hypothesis to test, not a finding.
 */
const DATE_FACT_CHECKED = "2026-08-11";
const DATE_FACT_CHECKED_HUMAN = "August 11, 2026";

const GOOGLE_AI_GUIDE_URL =
  "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide";
const GOOGLE_AI_FEATURES_URL =
  "https://developers.google.com/search/docs/appearance/ai-features";
const GOOGLE_JS_URL =
  "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics";
const OPENAI_SEARCH_URL = "https://help.openai.com/en/articles/9237897-chatgpt-search";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const STUDY_URL = "/blog/ai-citation-study/";
const AEO_URL = "/ai-visibility/answer-engine-optimization-consultant-canada/";
const GEO_URL =
  "/ai-visibility/generative-engine-optimization-consultant-canada/";

const FAQ_ITEMS = [
  {
    q: "Is AI visibility the same as SEO?",
    a: "For Google's surfaces, Google says it largely is. Its own guidance states that generative AI features are rooted in Google's core Search ranking systems, that there are no additional requirements to appear in AI Overviews or AI Mode, and that optimizing for generative AI search is 'still SEO'. Two things remain genuinely separate. First, that guidance is about Google — ChatGPT, Perplexity and Claude do not use Google's index and publish no equivalent rules. Second, no ranking guidance addresses whether what an answer says about you is accurate, which is a question SEO never had to ask.",
  },
  {
    q: "What platforms does AI visibility cover?",
    a: `The ${AUDIT_PLATFORM_COUNT_WORD} surfaces worth tracking for most businesses are ${AUDIT_PLATFORMS.join(", ")}. They retrieve differently and cite differently, so coverage has to be recorded per platform rather than rolled into one score. Google's AI Overviews and AI Mode sit inside Google Search; the Gemini app is a separate product that happens to share model families.`,
  },
  {
    q: "How do I track my AI visibility on Gemini?",
    a: "Run your core queries in the Gemini app and record whether your brand appears, what it says, and whether that is correct. Keep the conditions fixed — same wording, same location, same model — and repeat each query at least three times, because answers vary between sessions. Track the Gemini app separately from Google AI Overviews and AI Mode: they are different products and can disagree about you. Paid tools automate this at a scale manual testing cannot reach; manual testing is the most direct look at a single answer, not the most accurate measurement overall.",
  },
  {
    q: "What is a good AI visibility benchmark?",
    a: "There is no independent cross-vendor standard, so the benchmark is your own baseline measured consistently over time. Some businesses start at zero on their commercial queries and some do not — that is something to measure on your own domain, not to assume.",
  },
  {
    q: "Can a small business improve AI visibility without a big budget?",
    a: "Usually yes, because the work is diagnosis and content rather than media spend. But start by finding out what is actually wrong. The common candidates — pages that are not indexed, content that does not answer the question, an ambiguous entity, inconsistent business details across directories, or simply a competitor with more authority — need different fixes, and picking one before testing wastes the budget you have.",
  },
  {
    q: "How long does it take to see AI visibility results?",
    a: "There is no published service level for this, and any specific promise should be treated with suspicion. Google's own documentation says recrawling alone can take days to months, and that indexing and serving are never guaranteed. Different surfaces also refresh at different rates. What you can control is measuring on a fixed schedule so you can tell movement from noise.",
  },
] as const;

const blogGraph = buildBlogSchema({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
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

          <RevealSection delay={0.2}>
            <p
              style={{
                marginTop: 22,
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--faint)",
                fontStyle: "italic",
              }}
            >
              Last fact-checked: {DATE_FACT_CHECKED_HUMAN}. This revision corrected
              several claims about SEO, schema and JavaScript rendering against
              Google&rsquo;s own published guidance. The corrections are marked in the
              text rather than quietly applied.
            </p>
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
                appears in AI-generated answers, measured per platform across{" "}
                {AUDIT_PLATFORMS.join(", ")}. It overlaps heavily with SEO on
                Google&rsquo;s own surfaces, by Google&rsquo;s own account. Where
                it genuinely departs is on the engines that don&rsquo;t use
                Google&rsquo;s index — and on the question SEO never had to ask:
                is what the answer says about you correct?
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility is the degree to which your brand, product, or
              content appears — accurately and prominently — in AI-generated
              answers. Where traditional SEO measures rankings and clicks, AI
              visibility measures whether AI systems know you exist, what they
              say about you, and how often they cite you when users ask relevant
              questions.
            </p>
            <p style={{ marginBottom: 26 }}>
              If someone asks ChatGPT &ldquo;who are the best mortgage brokers in
              Toronto&rdquo; and you don&rsquo;t come up, that is worth knowing —
              and Google Search rankings will not tell you about it, because
              ChatGPT does not use Google&rsquo;s index.
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
              Accuracy is the one that has no equivalent in SEO. Ranking is a
              position; it is never wrong about you. A generated answer makes
              claims, and those claims can be false while your ranking is
              perfect. That is a category of risk search never created.
            </p>
            <p style={{ marginBottom: 26 }}>
              A common assumption is that ranking well in Google means AI systems
              will pick you up automatically. On Google&rsquo;s own AI surfaces
              that assumption is roughly right, and Google says so — more on that
              in the next section. Across the other engines it does not follow,
              because they retrieve from their own indexes. And even where you
              are cited, being cited is not the same as being visited: on my own
              site, the single most-cited page earned{" "}
              {COMMERCIAL_REALITY.aiCitations} AI citations and{" "}
              {COMMERCIAL_REALITY.googleClicksPerQuarter} Google clicks over the
              same three months. Both numbers are in the{" "}
              <Link href={STUDY_URL} style={linkStyle}>
                published dataset
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="AI visibility vs. SEO" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              An earlier version of this page said AI visibility was a separate
              problem from SEO requiring a separate strategy. That was too strong,
              and for Google specifically it is contradicted by Google.
            </p>
            <p style={{ marginBottom: 26 }}>
              Google&rsquo;s published guidance on generative AI features says its
              AI features are &ldquo;rooted in our core Search ranking and quality
              systems,&rdquo; that from Google&rsquo;s perspective optimizing for
              generative AI search is &ldquo;still SEO,&rdquo; and — in the AI
              features documentation — that there are{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                no additional requirements
              </strong>{" "}
              to appear in AI Overviews or AI Mode, and no special optimizations
              necessary. It also names AEO and GEO directly and treats them as
              labels for the same work. I sell in this category, which is exactly
              why that belongs on the page rather than off it. Read it yourself:{" "}
              <a
                href={GOOGLE_AI_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google&rsquo;s guide to optimizing for generative AI
              </a>{" "}
              and{" "}
              <a
                href={GOOGLE_AI_FEATURES_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                AI features and your website
              </a>
              .
            </p>
            <p style={{ marginBottom: 26 }}>
              So where does that leave anything distinct? Three places, and only
              three.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Google&rsquo;s guidance is about Google.
              </strong>{" "}
              It describes how AI Overviews and AI Mode draw on Google&rsquo;s
              index. It says nothing about ChatGPT, Perplexity or Claude, which
              retrieve through their own crawlers and partners — ChatGPT, for
              instance, requires that{" "}
              <a
                href={OPENAI_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                OAI-SearchBot be allowed to crawl your site
              </a>
              , a control that lives outside Google entirely. Being findable on
              Google does not decide what those engines do.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Accuracy is not a ranking question.
              </strong>{" "}
              No engine&rsquo;s guidance tells you whether the sentence it
              generates about your business is true. There is no rank position
              for &ldquo;described you correctly.&rdquo;
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Measurement is genuinely separate.
              </strong>{" "}
              Knowing how to rank and knowing whether you are being cited are
              different problems with different instruments — and for most
              engines, no instrument at all. That gap is the honest reason this
              work exists as a distinct exercise.
            </p>
            <ComparisonTable />
            <p style={{ marginBottom: 26 }}>
              The mistake worth avoiding is not &ldquo;doing SEO instead.&rdquo;
              It is assuming that because you rank, you must be cited everywhere —
              and never checking the engines that don&rsquo;t report back to you.
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
                  Google AI Overviews and AI Mode
                </strong>{" "}
                — Inside Google Search itself, drawing on Google&rsquo;s index.
                Because they sit where your existing search audience already is,
                this is the surface most people will meet by default. Google has
                not published query volume for them, so treat &ldquo;the big
                one&rdquo; as a statement about placement, not a measured number.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Gemini (the app)
                </strong>{" "}
                — A separate product from AI Overviews and AI Mode. It shares
                model families with them, which is why the two get conflated, but
                it is a different experience and can give a different answer about
                you. Track it separately or you will misattribute a result.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Claude (Anthropic)
                </strong>{" "}
                — Widely used for research and professional work, with web search
                and visible sources.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Microsoft Copilot
                </strong>{" "}
                — Microsoft&rsquo;s AI layer over Bing. Notable for one practical
                reason: through Bing Webmaster Tools it is the only major engine
                that reports citation counts back to publishers at all.
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Being well-cited on one doesn&rsquo;t guarantee anything on the
              others. They retrieve from different indexes, refresh on different
              schedules, and weigh sources differently &mdash; which is why{" "}
              <Link href="/blog/which-ai-platform-matters-most/" style={linkStyle}>
                deciding which platform to prioritise
              </Link>{" "}
              matters more than trying to win all of them at once.
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
              A correction on this section. It previously said there was no
              dashboard for this. There are several — Semrush, Ahrefs, Profound,
              Otterly and SE Visible all sell multi-platform dashboards. What
              doesn&rsquo;t exist is an{" "}
              <em style={{ fontStyle: "italic" }}>independent, cross-vendor</em>{" "}
              standard: no shared definition of a &ldquo;visibility score,&rdquo;
              no way to compare one vendor&rsquo;s number to another&rsquo;s, and
              — as Google itself notes — no third-party tool with access to any
              engine&rsquo;s internal systems. So whatever you use, the number is
              only meaningful against itself over time.
            </p>
            <p style={{ marginBottom: 26 }}>
              These are the four things worth recording, whether a tool collects
              them or you do.
            </p>

            <h3 style={h3Style}>Mentions and citations (not the same thing)</h3>
            <p style={{ marginBottom: 26 }}>
              This distinction gets blurred constantly, including in the earlier
              version of this page. A{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>mention</strong>{" "}
              is your brand name appearing in the text of an answer. A{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>citation</strong>{" "}
              is the answer linking to your page as a source. You can be mentioned
              without being cited — the engine knows of you but sent the reader
              elsewhere — and cited without being mentioned, where your page
              supplied the fact but not the recommendation. They call for
              different fixes, so record them in separate columns.
            </p>
            <p style={{ marginBottom: 26 }}>
              The method: build a set of 10–20 queries that represent how your
              customers would actually ask for what you do. Run them on each
              platform. Because answers vary between sessions, models and
              locations, hold those conditions fixed, repeat each query at least
              three times, and record the model and date alongside the result —
              otherwise you are measuring variance and calling it change. Then
              repeat on a consistent schedule.
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
              A brand that appears in Perplexity but not in{" "}
              <a
                href={GOOGLE_AI_FEATURES_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Google&rsquo;s AI features
              </a>{" "}
              has a gap worth closing, because Google&rsquo;s surfaces sit in
              front of the audience already searching for you. Track the Gemini
              app as its own row rather than folding it in with AI Overviews —
              they are different products and routinely disagree.
            </p>
            <p style={{ marginBottom: 26 }}>
              One asymmetry is worth knowing before you start: Microsoft Copilot,
              through Bing Webmaster Tools, is the only major engine that reports
              citation counts back to publishers. Google Search Console&rsquo;s
              Generative AI features report gives impressions but no clicks,
              positions or queries. ChatGPT, Gemini, Claude and Perplexity expose
              nothing. So &ldquo;coverage&rdquo; is partly measured and partly
              sampled, and being clear about which is which keeps the number
              honest.
            </p>

            <h3 style={h3Style}>Benchmark comparison</h3>
            <p style={{ marginBottom: 26 }}>
              What counts as &ldquo;good&rdquo;? There is no independent
              cross-vendor benchmark, so the comparison is against your own
              earlier readings.
            </p>
            <p style={{ marginBottom: 26 }}>
              This page used to say most businesses start at zero. I have no data
              supporting that, so I have removed it — some do and some
              don&rsquo;t, and it is cheap to find out for your own domain rather
              than assume. The reason to establish the baseline first is simply
              that without it, you cannot tell later whether anything you changed
              worked.
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
              Three areas are worth checking. Two of the three were overstated
              here before, so the corrections are marked.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Retrievable content.
              </strong>{" "}
              An engine cannot cite what it cannot fetch. This page previously
              said JavaScript single-page apps are &ldquo;often invisible to AI
              crawlers&rdquo; and recommended migrating to server rendering as one
              of the highest-leverage changes available. That was too strong and,
              for Google, wrong:{" "}
              <a
                href={GOOGLE_JS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google renders JavaScript
              </a>{" "}
              as long as it isn&rsquo;t blocked. Other crawlers differ and some
              don&rsquo;t execute JavaScript at all, so the shape of the question
              is per crawler and per URL, not per framework. Test it: fetch the
              page as each engine&rsquo;s bot and see whether the main content is
              in what comes back. Re-architecting a site is a large, expensive
              change and should follow evidence that content is genuinely
              unreachable — never a default recommendation, including from me.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Entity clarity.
              </strong>{" "}
              What matters is that a machine can tell who you are, what you sell
              and where, without guessing. This page previously said FAQPage,
              Article, LocalBusiness and Organization schema increase AI
              visibility. Google says the opposite in plain terms:{" "}
              <a
                href={GOOGLE_AI_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                structured data isn&rsquo;t required for generative AI search and
                there is no special schema.org markup you need to add
              </a>
              . Schema still earns its place for rich results and for describing
              entities unambiguously, and Google asks that it match the visible
              text on the page. But it is a way of stating facts clearly, not a
              lever that buys citations. FAQPage in particular no longer produces
              a rich result for the overwhelming majority of sites.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                What the rest of the web says about you.
              </strong>{" "}
              Reviews, directory listings, press and industry sources are where
              engines learn things your own site cannot assert credibly. Keeping
              those consistent and correct is legitimate work. Manufacturing
              mentions is not — Google explicitly calls out seeking inauthentic
              mentions as ineffective, and it is the tactic most likely to be sold
              to you under an AI-visibility label.
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
              This page used to say the highest-leverage moves are technical
              first. Diagnose first is the more defensible order. Absence has
              several plausible causes — pages not indexed or not eligible for a
              snippet, content that doesn&rsquo;t answer the question asked, an
              entity the engine can&rsquo;t pin down, business details that
              disagree across directories, a competitor with more authority, or a
              query set that doesn&rsquo;t match how people actually ask. Those
              need different fixes. Picking the technical one before testing is
              how a business ends up rebuilding a site that was never the problem.
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
                works with businesses on getting accurately cited across{" "}
                {AUDIT_PLATFORMS.join(", ")}.
              </em>
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                color: "var(--faint)",
                lineHeight: 1.65,
                marginBottom: 12,
                borderTop: "1px solid var(--line)",
                paddingTop: 20,
                marginTop: 20,
              }}
            >
              <strong style={{ color: "var(--muted)" }}>Disclosure.</strong> I
              sell an audit in this category, so I have an interest in this
              category sounding difficult. That is the reason Google&rsquo;s
              guidance is quoted directly above rather than paraphrased around:
              on Google&rsquo;s own surfaces, Google says this is still SEO and
              that no special optimization is required. The parts I argue are
              distinct — the non-Google engines, accuracy, and measurement — are
              stated narrowly enough that you can check them. Corrected against
              vendor documentation on {DATE_FACT_CHECKED_HUMAN} (
              {DATE_FACT_CHECKED}).
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
                Know where you stand across {AUDIT_PLATFORM_COUNT_WORD} AI
                platforms.
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
  /**
   * ⚠️ The "what content it needs" row used to read "Keywords, backlinks" vs
   * "Authority, schema, structured data". That was a false dichotomy — both depend on
   * the same foundations, and Google states plainly that no special schema is needed
   * for generative AI search. The row now says so.
   */
  const rows = [
    ["Where it shows up", "Ranked list of links", "Synthesized answer"],
    ["What it measures", "Position, clicks, traffic", "Mentions, citations, accuracy"],
    [
      "Where it applies",
      "Google, Bing",
      "Google AI surfaces + engines with their own indexes",
    ],
    [
      "What it needs",
      "Crawlable, credible, relevant content",
      "The same foundations — plus consistent, correct facts about you off-site",
    ],
    [
      "Can it be wrong about you?",
      "No — a position isn't a claim",
      "Yes — and that's the risk with no SEO equivalent",
    ],
    [
      "How to track",
      "Search Console, GA4",
      "Per-platform testing; most engines report nothing",
    ],
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
        An AI visibility audit tests your core queries across all{" "}
        {AUDIT_PLATFORM_COUNT_WORD} platforms &mdash;{" "}
        {AUDIT_PLATFORMS.join(", ")} &mdash; and gives you mention and citation
        counts, accuracy gaps, and a prioritized action plan.
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
