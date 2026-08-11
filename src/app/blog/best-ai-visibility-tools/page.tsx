import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "best-ai-visibility-tools";
const ARTICLE_TITLE = "Best AI Visibility Tools & Checkers (2026)";
const ARTICLE_DESCRIPTION =
  "AI visibility tools and checkers in 2026 — engine coverage and entry pricing taken from each vendor's own documentation, with the source linked for every claim. By an independent consultant with no affiliate relationships.";
const DATE_PUBLISHED = "2026-06-09";
const DATE_MODIFIED = "2026-08-11";

/**
 * ── WHY THIS FILE LOOKS LIKE THIS ──
 *
 * The first version of this post carried star ratings (4.5/5), a rank order,
 * and a "Last reviewed July 2026" line. None of it was reproducible: there was
 * no scoring rubric, no prompt count, no test dates, no per-criterion score.
 * A number like "4.5/5" reads as measurement and was actually opinion.
 *
 * So the ratings and the rank order are gone. What replaced them is narrower
 * and checkable: for each tool, the engines the vendor documents and the entry
 * price the vendor publishes, each with the URL it came from and the date it
 * was read. Where a vendor publishes no price, this page says so rather than
 * guessing a range.
 *
 * RULE FOR FUTURE EDITS: every `engines` and `entryPrice` value below must be
 * traceable to the `sourceUrl` on the same object, as read on
 * DATE_FACT_CHECKED. If you cannot open that URL and see the claim, change the
 * claim — do not change the date.
 */
const DATE_FACT_CHECKED = "2026-08-11";
const DATE_FACT_CHECKED_HUMAN = "August 11, 2026";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const CONSULTANT_URL = "/ai-visibility/ai-visibility-consultant-canada/";
const CHECK_URL = "/blog/how-to-check-ai-visibility/";
const TOOLS_VS_AUDIT_URL = "/blog/ai-visibility-tools-vs-audit/";

type Tool = {
  name: string;
  category: "dedicated" | "seo-platform" | "enterprise";
  /** Engines the vendor documents. Must be traceable to sourceUrl. */
  engines: string;
  /** Lowest published price, or an explicit "not published" note. */
  entryPrice: string;
  sourceUrl: string;
  sourceLabel: string;
  what: string;
  whoFor: string;
  /** The thing a buyer would get wrong if they only read the marketing page. */
  watchOut: string;
};

const TOOLS: readonly Tool[] = [
  {
    name: "Profound",
    category: "dedicated",
    engines:
      "Starter: ChatGPT only. Growth: 3 answer engines (ChatGPT, Perplexity, Google AI Overviews). Enterprise: up to 9, adding Google AI Mode, Gemini, Copilot, Grok, DeepSeek and Claude.",
    entryPrice:
      "$99/mo (Starter, billed yearly, 50 prompts, 1 seat) · $399/mo (Growth, 100 prompts, 3 seats) · Enterprise custom",
    sourceUrl: "https://www.tryprofound.com/pricing",
    sourceLabel: "Profound pricing page",
    what:
      "A purpose-built answer-engine monitoring platform. It runs a prompt set on a daily schedule and reports mentions, citations, sentiment and competitive presence, plus a separate Agent Analytics product that tracks AI-referred traffic to your own domains.",
    whoFor:
      "Teams that want cross-engine tracking as the primary job of the tool, not a feature bolted onto something else.",
    watchOut:
      "The commonly repeated line that Profound is enterprise-only is out of date — but so is the opposite reading. The $99 tier tracks ChatGPT and nothing else. Cross-engine coverage starts at the $399 tier, and the full nine engines are Enterprise. Price the plan against the engines you actually need, not the logo list on the homepage.",
  },
  {
    name: "Otterly.ai",
    category: "dedicated",
    engines:
      "Included on every plan: ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot. Gemini, Google AI Mode and Claude are paid add-ons.",
    entryPrice:
      "$29/mo (Lite, 15 prompts) · $189/mo (Standard, 100 prompts) · $489/mo (Premium, 400 prompts) · Enterprise from $1,000/mo",
    sourceUrl: "https://otterly.ai/pricing",
    sourceLabel: "Otterly.ai pricing page",
    what:
      "Daily prompt tracking with brand visibility scoring, link citation analysis, competitor comparison and a GEO audit, across 50+ countries. API, MCP access and Looker Studio reporting start at the Standard tier.",
    whoFor:
      "Small teams and agencies that want systematic multi-engine tracking at a price that does not require a procurement process.",
    watchOut:
      "The engine list is the thing to read carefully. Copilot and AI Overviews are included; Gemini and Claude are not. Adding Gemini costs $9–$149/mo depending on plan, and Claude $29–$439/mo. A quoted base price can understate the real cost by a wide margin if Gemini or Claude matter to you.",
  },
  {
    name: "SE Visible (SE Ranking)",
    category: "dedicated",
    engines: "ChatGPT, Gemini, Google AI Mode, Perplexity, Google AI Overviews — on every tier.",
    entryPrice:
      "$99/mo (Basic, 200 prompts) · $189/mo (Core, 450 prompts) · $355/mo (Plus, 1,000 prompts)",
    sourceUrl: "https://visible.seranking.com/for-product-marketers/",
    sourceLabel: "SE Visible product page",
    what:
      "SE Ranking's dedicated AI visibility product — a separate app from its SEO suite, not a checkbox inside rank tracking. Covers visibility, sentiment, cited sources and competitor benchmarking with weekly updates across 7 countries and 5 languages.",
    whoFor:
      "Teams that want the same five engines on the cheapest tier rather than an add-on ladder.",
    watchOut:
      "Do not confuse SE Visible with SE Ranking's classic rank tracker. They are separately priced products, and older comparisons (including an earlier version of this page) described the rank tracker's AI Overviews flag as if it were the whole AI offering. Coverage is 7 countries and 5 languages — narrow if you sell outside them.",
  },
  {
    name: "Frase",
    category: "dedicated",
    engines: "ChatGPT, Perplexity, Claude, Gemini, Google AI.",
    entryPrice: "Plans from $39/mo billed yearly; AI visibility tracking is part of the platform.",
    sourceUrl: "https://www.frase.io/features/ai-tracking",
    sourceLabel: "Frase AI visibility feature page",
    what:
      "Daily prompt tracking with share of voice against competitors you nominate, the full response text behind each citation, alerts when visibility moves, and a log of which AI crawlers are actually reaching your pages.",
    whoFor:
      "Content teams that want the tracking and the content work in the same place — a gap you spot hands off to the editor rather than to a separate tool.",
    watchOut:
      "Frase is usually filed under content optimization, and this page filed it that way too until this revision. That is now wrong: it does daily multi-engine tracking. The trade-off is depth of the tracking analytics compared with a tool that does only tracking.",
  },
  {
    name: "Semrush",
    category: "seo-platform",
    engines:
      "Google AI Overviews, Google AI Mode, ChatGPT, Perplexity, Gemini — tracked weekly in Brand Performance.",
    entryPrice:
      "AI Visibility toolkit from $99/mo · Semrush One (SEO + AI visibility) from $199/mo · free plan shows AI mentions, citations and a visibility score",
    sourceUrl: "https://www.semrush.com/kb/1626-ai-visibility-features",
    sourceLabel: "Semrush AI visibility documentation",
    what:
      "A full AI visibility toolkit rather than an AI Overviews flag: share of voice and sentiment tracking, competitor benchmarking against up to four rivals, a prompt research database, and a site audit that flags which AI crawlers you are blocking.",
    whoFor:
      "SEO teams already inside Semrush, and anyone who wants one bill covering both classic search and AI answers.",
    watchOut:
      "Which toolkit you are on determines what you see. Google and AI Overviews tracking is on any plan including the free one; tracking on ChatGPT, Perplexity and Gemini requires Semrush One or the AI Visibility toolkit. Brand Performance runs on Semrush-generated synthetic prompts based on your domain and location — useful, but not your customers' actual wording.",
  },
  {
    name: "Ahrefs Brand Radar",
    category: "seo-platform",
    engines:
      "Seven AI platforms: Google AI Overviews & AI Mode, ChatGPT, Perplexity, Gemini, Copilot, Grok (data collection currently paused), and Claude (custom prompts only). Plus SEO, YouTube, Reddit and TikTok indexes.",
    entryPrice:
      "AI indexes are a paid add-on on any plan: $199/mo per single platform, or $699/mo for all platforms. Custom prompt tracking is separate: $50 / $100 / $250 per month by volume.",
    sourceUrl: "https://help.ahrefs.com/en/articles/11064852-what-is-brand-radar-and-how-to-use-it",
    sourceLabel: "Ahrefs Brand Radar documentation",
    what:
      "A discovery-first tool. Instead of only running prompts you define, it queries a standing index of 405M+ search-backed prompts derived from People Also Ask questions, so there is history to look at from the moment you get access — back to May 2025 for chatbot sources and August 2024 for AI Overviews.",
    whoFor:
      "Teams that want breadth and back-history rather than a small, hand-picked prompt set, and that already live in Ahrefs.",
    watchOut:
      "Two things the pricing page does not put up front. The AI indexes are an add-on, not something included with a standard Ahrefs plan — describing Brand Radar as bundled at $100/mo is wrong. And the AI chatbot index refreshes once a month; only AI Overviews and your own custom prompts move faster than that.",
  },
  {
    name: "BrightEdge",
    category: "enterprise",
    engines:
      "AI Hyper Cube covers ChatGPT, Gemini and other generative engines; AI Agent Insights reports which AI bots are hitting your own site.",
    entryPrice: "No public pricing. BrightEdge does not publish rate cards; figures elsewhere are third-party guesses.",
    sourceUrl:
      "https://www.brightedge.com/news/press-releases/brightedge-ai-hypercube-brands-ai-search-visibility",
    sourceLabel: "BrightEdge AI Hyper Cube announcement (March 10, 2026)",
    what:
      "Enterprise SEO platform with a dedicated AI search layer. AI Hyper Cube maps which prompts mention you, which sources the engines lean on, how competitors appear alongside you, and whether the narrative is positive or negative. AI Agent Insights covers the other direction — blocked pages and broken paths that stop AI systems reaching you.",
    whoFor: "Enterprises with an existing BrightEdge relationship and a search team to run it.",
    watchOut:
      "\"Generative Parser\" is the name older comparisons still use, including an earlier version of this page. The current product is AI Hyper Cube, launched March 2026, and it is not AI-Overviews-only. Any figure you see quoted for BrightEdge pricing — including the $2,000+/mo this page previously carried — is not from BrightEdge.",
  },
  {
    name: "Yext Scout",
    category: "enterprise",
    engines:
      "Google Search, Google Maps and Google AI Overviews, plus ChatGPT, Gemini, Claude and Perplexity.",
    entryPrice: "No public pricing. A free Scout scan is available without a contract.",
    sourceUrl: "https://www.yext.com/platform/scout",
    sourceLabel: "Yext Scout product page",
    what:
      "Visibility measured location by location rather than only at brand level, head-to-head win rates against your 20 closest competitors, sentiment themes (Yext's own example: \"long wait times\"), citation-source tracking, and an Action Center where agents update listings, correct business data and respond to reviews.",
    whoFor: "Multi-location brands — the per-location view is the reason to choose it over a brand-level tracker.",
    watchOut:
      "Scout is the clearest counter-example to the claim that AI visibility tools only diagnose. It prioritises fixes and executes some of them. The trade-off is the Yext ecosystem: the execution side runs on Yext's listings and Knowledge Graph products, so the value depends on committing to those.",
  },
  {
    name: "Brandwatch",
    category: "enterprise",
    engines:
      "GenAI engines including ChatGPT, alongside Google, Amazon, TikTok and Baidu search data, across 150+ countries.",
    entryPrice: "No public pricing.",
    sourceUrl: "https://www.brandwatch.com/suite/search-intelligence/",
    sourceLabel: "Brandwatch Search Intelligence",
    what:
      "Brandwatch's AI coverage sits in a named Search Intelligence and GenAI Monitoring product, powered by Trajaan — not as an afterthought inside social listening. It monitors how leading LLMs cite your brand and competitors across thousands of prompts, surfaces sentiment shifts, identifies which media domains and pages the LLMs trust, and flags high-risk narratives early.",
    whoFor:
      "Enterprise brand and comms teams who need social, news and AI in one place and would otherwise buy two platforms. The early-warning framing — catching a reputational problem in LLM answers before it surfaces in social — is the distinctive part.",
    watchOut:
      "This page previously described Brandwatch as social listening \"with some AI\" and quoted $1,000+/month. The first understated the product badly and the second had no public source. Brandwatch publishes no pricing; treat any number you read as someone's estimate.",
  },
];

/** Tools that turn up on lists like this one — including an earlier version of this one — without a documented AI answer-tracking product. */
const NOT_AI_TRACKERS = [
  {
    name: "Mention",
    finding:
      "Mention's own site describes three products — Monitor, Analyze and Engage — across web and social sources. There is no AI answer monitoring in the product navigation, the feature pages or the source list. Mention has AI features in the sense that it uses AI to summarise and classify mentions, which is a different thing from monitoring what ChatGPT or Perplexity says about you. Mention was acquired by Agorapulse.",
    sourceUrl: "https://mention.com/en/",
    sourceLabel: "Mention product site",
  },
  {
    name: "Wincher",
    finding:
      "Wincher documents a rank tracker, local rank tracker, keyword explorer and on-page checker. Its feature list mentions SERP features generically. There is no documented AI Overviews product and no AI answer tracking. An earlier version of this page said Wincher's AI Overview detection was accurate — there is no public evidence for that, and no product page to check it against.",
    sourceUrl: "https://www.wincher.com/",
    sourceLabel: "Wincher product site",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Is there a free AI visibility tracker?",
    a: "There are free entry points, but no free tool that tracks multiple engines on a schedule. Semrush's free plan shows AI mentions, citations and a visibility score in Domain Overview, and audits 100 pages for AI readiness. Yext offers a free Scout scan. Google Search Console's Generative AI features report shows impressions from Google's AI surfaces for your own site. Beyond that, free means manual: you run the prompts yourself. For ongoing multi-engine tracking, paid tools are the only systematic option.",
  },
  {
    q: "What's the difference between AI visibility tools and SEO tools?",
    a: "SEO tools track rankings, traffic and backlinks in traditional search. AI visibility tools track whether you are mentioned and cited in AI-generated answers, and what those answers say. The line has blurred: Semrush, Ahrefs and SE Ranking all now sell AI visibility products covering ChatGPT, Gemini and Perplexity as well as Google's AI surfaces. The practical difference is usually packaging and price — in Ahrefs the AI indexes are a paid add-on, in Semrush they are a separate toolkit, and in SE Ranking's case an entirely separate product called SE Visible.",
  },
  {
    q: "Can AI visibility tools track Perplexity citations?",
    a: "Yes, and this is now the normal case rather than the exception. Profound (from the Growth tier), Otterly.ai, SE Visible, Frase, Semrush's AI Visibility toolkit, Ahrefs Brand Radar and Yext Scout all document Perplexity coverage. If a tool does not cover Perplexity in 2026, that is the unusual thing.",
  },
  {
    q: "Do I need an AI visibility tool or a consultant?",
    a: "It depends on where you are. If you have no AI visibility foundation and don't know where you stand, start with an audit. Once you have a baseline and an action plan, ongoing tracking tools make sense. Buying a tracking platform before you have a strategy is like buying a fitness tracker before you know what you're trying to improve.",
  },
  {
    q: "How accurate are AI visibility tracking tools?",
    a: "Directionally accurate rather than precise, and for a structural reason: AI answers vary between sessions, models, phrasings and locations, so any single reading is a sample. Refresh rates differ too — Otterly, Frase and Profound track daily, Semrush's Brand Performance updates weekly, and Ahrefs' AI chatbot index refreshes monthly. Two tools reporting different numbers for the same brand are not necessarily contradicting each other. Manual verification of the queries that matter commercially is always worth doing.",
  },
  {
    q: "What is Profound AI visibility?",
    a: "Profound is a dedicated answer-engine monitoring platform. It runs a prompt set daily and reports mentions, citations, sentiment, ranking and competitive presence, plus AI-referred traffic through a separate Agent Analytics product. Self-serve plans start at $99/month for ChatGPT-only tracking, $399/month for three answer engines, and Enterprise plans cover up to nine.",
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

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

const CATEGORY_HEADS: Record<Tool["category"], { title: string; blurb: string }> = {
  dedicated: {
    title: "Dedicated AI visibility platforms",
    blurb:
      "Built for this job first. Tracking AI answers is the product, not a feature added to something else.",
  },
  "seo-platform": {
    title: "SEO platforms with AI visibility products",
    blurb:
      "You may already be paying for the base platform. The AI coverage is real, but it is packaged and priced separately in every case below.",
  },
  enterprise: {
    title: "Enterprise brand and search platforms",
    blurb:
      "Broad platforms where AI visibility is one capability among many. None of the three publishes pricing.",
  },
};

export default function BestAIVisibilityToolsPost() {
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
            <span>Best AI Visibility Tools</span>
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
              Tools &amp; Comparisons
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
              AI visibility tools in 2026 —{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                what each one actually covers, and what it costs.
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
              Engine coverage and entry pricing taken from each vendor&rsquo;s own
              documentation, with the source linked for every claim. No affiliate
              links, no vendor relationships, no star ratings I can&rsquo;t defend.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 9, 2026" readTime="16 min read" />
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
              Last fact-checked: {DATE_FACT_CHECKED_HUMAN}. Every engine list and
              price below was read on that date from the linked vendor page. This
              category changes monthly &mdash; if you are reading this well after
              that date, open the source link before you buy.
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
                Multi-engine coverage is no longer the differentiator &mdash; nearly
                every tool here covers ChatGPT, Gemini and Perplexity. What separates
                them now is packaging: whether the engines you need are included or
                sold as add-ons, how often the data refreshes, and whether the tool
                stops at reporting or also prioritises fixes. Read the plan you would
                actually buy, not the logo row on the homepage.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.05}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "20px 22px",
                margin: "0 0 36px",
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink)",
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
                From the author
              </div>
              <p style={{ margin: 0 }}>
                A tool tells you <em style={{ fontStyle: "italic" }}>where</em> you
                stand. The AI Visibility Audit I run for clients tells you{" "}
                <em style={{ fontStyle: "italic" }}>why</em> &mdash; and gives you a
                prioritized 7-day fix plan, $1,500 CAD flat.{" "}
                <Link
                  href={AUDIT_URL}
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  See the AI Visibility Audit &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="How this list was put together" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              I&rsquo;m an AI visibility consultant. I don&rsquo;t sell these tools
              and I have no affiliate relationship with any of them.
            </p>
            <p style={{ marginBottom: 26 }}>
              This page used to carry star ratings &mdash; 4.5/5, 3/5, and so on
              &mdash; and a rank order running from 1 to 10. I have removed them, and
              the reason matters more than the ratings did. There was no published
              rubric behind those numbers: no weighting across the five criteria, no
              count of prompts run, no test dates, no per-tool subscores. A reader
              could not reproduce them, and neither could I. A number like
              &ldquo;4.5/5&rdquo; reads as measurement when it was opinion, which
              makes it the wrong kind of wrong for a page about accuracy.
            </p>
            <p style={{ marginBottom: 26 }}>
              What replaced them is narrower and checkable. For each tool below you
              get two things I can point at a source for: the{" "}
              <strong style={labelStyle}>engines the vendor documents</strong> and
              the <strong style={labelStyle}>entry price the vendor publishes</strong>
              , each linked to the page it came from, all read on{" "}
              {DATE_FACT_CHECKED_HUMAN}. Where a vendor publishes no pricing, this
              page says so instead of inventing a range &mdash; three of the nine
              tools here fall into that bucket, and the dollar figures this page used
              to quote for them came from nowhere.
            </p>
            <p style={{ marginBottom: 26 }}>
              The judgement calls &mdash; who a tool suits, what a buyer would get
              wrong &mdash; are labelled as judgement, not scored. Where I have used a
              tool with clients I say so in the entry; where I am reading
              documentation, that is what the source link represents.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="What changed since the first version" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This post first ran in June 2026. Enough of it was wrong by August that
              a quiet edit would have been dishonest, so here is what changed and why.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                &ldquo;Most SEO tools only cover Google AI Overviews.&rdquo;
              </strong>{" "}
              This was the organising claim of the original piece and it is no longer
              true. Semrush covers AI Overviews, AI Mode, ChatGPT, Perplexity and
              Gemini. Ahrefs&rsquo; Brand Radar covers seven AI platforms. SE Ranking
              spun its AI coverage out into a separate product, SE Visible, covering
              five. The AI-Overviews-only framing described the market of a year ago.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Two tools should not have been here.</strong>{" "}
              The original list included Mention and Wincher as AI visibility tools.
              Checking their own documentation, neither has a documented AI
              answer-tracking product. That section is below, kept rather than
              deleted, because the same two names appear on other lists.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                &ldquo;Every tool gives you a dashboard; none gives you a prioritized
                fix list.&rdquo;
              </strong>{" "}
              Too strong. Yext Scout recommends actions and executes some of them
              through its Action Center. Semrush&rsquo;s Content Toolkit generates
              optimization recommendations. Otterly ships weekly recommendations, and
              Frase hands a losing prompt to its editor as optimization insights. The
              honest version of this point is further down, and it is narrower.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Prices and product names moved.</strong>{" "}
              Profound now sells self-serve from $99. Otterly starts at $29, not $100.
              BrightEdge&rsquo;s AI product is AI Hyper Cube, not Generative Parser.
              Details are in each entry.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Coverage and pricing at a glance" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ComparisonTable />
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.55,
                marginBottom: 26,
              }}
            >
              <em>
                Every row was read from the linked vendor page on{" "}
                {DATE_FACT_CHECKED_HUMAN}. &ldquo;Not published&rdquo; means the
                vendor does not disclose pricing publicly &mdash; not that it is
                expensive, though in practice these are enterprise contracts.
              </em>
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="The tools, by category" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {(["dedicated", "seo-platform", "enterprise"] as const).map((category) => (
              <div key={category}>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 600,
                    fontSize: 26,
                    letterSpacing: "-.015em",
                    margin: "44px 0 6px",
                    color: "var(--ink)",
                  }}
                >
                  {CATEGORY_HEADS[category].title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 15.5,
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    marginBottom: 8,
                  }}
                >
                  {CATEGORY_HEADS[category].blurb}
                </p>

                {TOOLS.filter((tool) => tool.category === category).map((tool) => (
                  <div key={tool.name}>
                    <h4
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 600,
                        fontSize: 22,
                        letterSpacing: "-.01em",
                        margin: "34px 0 14px",
                        color: "var(--ink)",
                      }}
                    >
                      {tool.name}
                    </h4>
                    <p style={{ marginBottom: 26 }}>{tool.what}</p>
                    <p style={{ marginBottom: 26 }}>
                      <strong style={labelStyle}>Engines covered:</strong>{" "}
                      {tool.engines}
                    </p>
                    <p style={{ marginBottom: 26 }}>
                      <strong style={labelStyle}>Published pricing:</strong>{" "}
                      {tool.entryPrice}
                    </p>
                    <p style={{ marginBottom: 26 }}>
                      <strong style={labelStyle}>Who it fits:</strong> {tool.whoFor}
                    </p>
                    <p style={{ marginBottom: 14 }}>
                      <strong style={labelStyle}>What to watch for:</strong>{" "}
                      {tool.watchOut}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        color: "var(--faint)",
                        lineHeight: 1.6,
                        marginBottom: 26,
                      }}
                    >
                      Source:{" "}
                      <a
                        href={tool.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {tool.sourceLabel}
                      </a>
                      , read {DATE_FACT_CHECKED}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text="Two tools that are often listed here and shouldn't be"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Both of these appeared in the first version of this post. Neither has a
              documented product that monitors AI-generated answers. They are good at
              what they do &mdash; that is a separate thing.
            </p>
            {NOT_AI_TRACKERS.map((tool) => (
              <div key={tool.name}>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 600,
                    fontSize: 22,
                    letterSpacing: "-.01em",
                    margin: "30px 0 12px",
                    color: "var(--ink)",
                  }}
                >
                  {tool.name}
                </h3>
                <p style={{ marginBottom: 14 }}>{tool.finding}</p>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--faint)",
                    lineHeight: 1.6,
                    marginBottom: 26,
                  }}
                >
                  Source:{" "}
                  <a
                    href={tool.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    {tool.sourceLabel}
                  </a>
                  , read {DATE_FACT_CHECKED}
                </p>
              </div>
            ))}
            <p style={{ marginBottom: 26 }}>
              The general lesson is worth more than the two names: &ldquo;uses
              AI&rdquo; and &ldquo;monitors AI answers&rdquo; are different claims,
              and vendor marketing blurs them. A tool that summarises your mentions
              with an LLM is not tracking what ChatGPT says about you. Before you buy,
              find the page that names the engines. If there isn&rsquo;t one, that is
              your answer.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="Content and schema tools" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Trackers measure where you appear. Content tools help you earn the
              appearance. The two categories overlap more than they used to &mdash;
              Frase does both, and Semrush&rsquo;s Content Toolkit scores drafts
              against factors it correlates with citation rates.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Clearscope</strong> and{" "}
              <strong style={labelStyle}>MarketMuse</strong> remain the established
              options for topical depth and coverage gaps. Neither markets itself as
              an AI visibility tool, and neither should be bought as one.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                On schema, this page was giving bad advice.
              </strong>{" "}
              It previously said FAQPage and HowTo schema were
              &ldquo;non-negotiable for AEO.&rdquo; That is wrong on both counts.
              Google&rsquo;s own documentation now carries a deprecation notice: as of
              May 7, 2026, FAQ rich results no longer appear in Google Search, and
              even before that they were restricted to well-known, authoritative
              government and health sites. HowTo rich results were removed earlier.
              And no published evidence shows either schema type is a condition of
              being cited by an LLM.
            </p>
            <p style={{ marginBottom: 26 }}>
              Structured data still earns its place &mdash;{" "}
              <strong style={labelStyle}>Organization</strong>,{" "}
              <strong style={labelStyle}>Article</strong>,{" "}
              <strong style={labelStyle}>LocalBusiness</strong> and{" "}
              <strong style={labelStyle}>Product</strong> markup describe entities in
              a form machines read reliably. But the honest framing is that schema
              helps machines parse a page that was already clear, not that a
              particular schema type buys you a citation. See{" "}
              <a
                href="https://developers.google.com/search/docs/appearance/structured-data/faqpage"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Google&rsquo;s FAQPage documentation
              </a>{" "}
              for the deprecation notice.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="Free vs paid" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Free methods are a legitimate starting point, and there are more of them
              than there were: Semrush&rsquo;s free plan surfaces AI mentions,
              citations and a visibility score; Yext offers a free Scout scan; several
              vendors run free one-off checkers.
            </p>
            <p style={{ marginBottom: 26 }}>
              One correction on Google. This page previously referred to Search
              Console&rsquo;s &ldquo;AI Overviews data.&rdquo; The report is called{" "}
              <strong style={labelStyle}>Generative AI features</strong>, it is in
              Beta, it covers Google&rsquo;s AI surfaces together rather than AI
              Overviews alone, and it reports{" "}
              <strong style={labelStyle}>total impressions only</strong> &mdash; no
              clicks, no CTR, no position, and no query-level breakdown. I use it on my
              own properties; that is what is in it.
            </p>
            <p style={{ marginBottom: 26 }}>
              The real constraint on free methods is not breadth any more, it is
              repetition. Free tiers give you a reading. Tracking is what tells you
              whether a change worked, and that is what you are paying for.
            </p>
            <p style={{ marginBottom: 26 }}>
              For the full breakdown of what free checkers show and where they fall
              short, see{" "}
              <Link href={CHECK_URL} style={linkStyle}>
                how to check AI visibility for free
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="08" text="How to choose" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Coverage lists have converged, so choose on the things that still
              differ:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Which engines are included, not listed.</strong>{" "}
                Otterly bundles Copilot and AI Overviews but charges extra for Gemini
                and Claude. Profound&rsquo;s cheapest tier is ChatGPT-only.
                Ahrefs&rsquo; AI indexes are an add-on. SE Visible and Semrush include
                five engines from the entry tier.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>How often it refreshes.</strong> Daily
                (Otterly, Frase, Profound), weekly (Semrush Brand Performance,
                SE Visible), or monthly for the standing chatbot index (Ahrefs). If
                you are shipping changes and want to see movement, monthly is too
                slow.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Whose prompts.</strong> Some tools run the
                prompts you write; Semrush generates synthetic prompts from your
                domain and location; Ahrefs queries a standing index built from People
                Also Ask data. Each answers a slightly different question.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Whether it stops at reporting.</strong>{" "}
                Yext Scout prioritises and executes. Frase and Semrush hand you
                content recommendations. Profound is deliberately strong on data and
                lighter on prescription.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>Geography and language.</strong> SE Visible
                covers 7 countries and 5 languages. Otterly covers 50+ countries. If
                you sell in more than one language, check this before anything else.
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              An{" "}
              <Link href={AUDIT_URL} style={linkStyle}>
                AI visibility audit
              </Link>{" "}
              is often the right starting point before committing to ongoing tracking
              software &mdash; it tells you which platforms you have exposure on and
              which to prioritise, so you don&rsquo;t buy a platform that tracks the
              wrong thing.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="09" text="What tools still don't do" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <blockquote
              style={{
                borderLeft: "2px solid var(--accent)",
                padding: "6px 0 6px 24px",
                margin: "0 0 26px",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              The gap is no longer that tools only report. It is that what they
              recommend is generic to the platform, not specific to your business.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              The original version of this section claimed every tool lacked accuracy
              review, competitor explanation and a prioritized action plan. Several
              now do some of that. The narrower version that survives scrutiny:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                Whether a citation helps you is a commercial judgement.
              </strong>{" "}
              Sentiment analysis tells you an answer was positive. It cannot tell you
              that being cited as the cheap option is bad for a premium
              positioning &mdash; that requires knowing what you sell and to whom.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Diagnosing absence is still manual.</strong>{" "}
              Ahrefs, Semrush, BrightEdge and Frase all log AI crawler activity now,
              which covers the technical layer. Whether the real problem is content
              extraction, entity ambiguity or plain authority still takes someone
              looking at the pages.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                Recommendations don&rsquo;t know your constraints.
              </strong>{" "}
              A tool that recommends 40 fixes has not told you which three you can
              ship this quarter with the team you have. Prioritisation that ignores
              cost is a list, not a plan.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Citations are not customers.</strong> No tool
              in this list connects citation volume to revenue, because the platforms
              don&rsquo;t expose the data to connect it with. On one of my own sites,
              the single most-cited page earned 6,500 AI citations and 24 Google
              clicks in the same three months. A dashboard showing 6,500 would have
              looked like a win.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="10" text="Frequently asked questions" />
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
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 26,
                marginTop: 10,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  color: "var(--faint)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                <strong style={{ color: "var(--muted)" }}>Disclosure.</strong> I have
                no affiliate relationship with, and receive no compensation from, any
                tool named on this page. I sell an AI visibility audit, which competes
                for the same budget as some of them. Engine lists and prices were read
                from the linked vendor pages on {DATE_FACT_CHECKED_HUMAN}; the
                judgements about fit are mine and are not scored.
              </p>
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
                strategy framework and how tools fit into it, see the hub. For free
                one-off checks, see{" "}
                <Link href={CHECK_URL} style={linkStyle}>
                  how to check AI visibility for free
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
                  Hami Tahm is an{" "}
                  <Link href={CONSULTANT_URL} style={linkStyle}>
                    independent AI visibility consultant
                  </Link>{" "}
                  based in Toronto.
                </em>
              </p>
            </div>
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
                href={CHECK_URL}
                title="How to Check AI Visibility for Free"
                tag="Basics"
              />
              <KeepReadingLink
                href={TOOLS_VS_AUDIT_URL}
                title="AI Visibility Tools vs. Audit"
                tag="Strategy"
              />
              <KeepReadingLink
                href="/blog/peec-vs-profound-vs-airops/"
                title="Peec vs Profound vs AirOps"
                tag="Comparison"
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
                Tools show data. An audit shows what to do.
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
                Start with platform-specific citation analysis, accuracy review, and a
                prioritized action plan before committing to ongoing tracking
                software. $1,500 CAD flat.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-checker/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI Visibility Check{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href={AUDIT_URL}
                className="btn btn-ghost"
                style={{ marginTop: 14, marginLeft: 12, position: "relative" }}
              >
                Or book the $1,500 audit
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
        fontSize: 12,
        fontWeight: 400,
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

const TABLE_COLUMNS = "0.9fr 1.7fr 1.4fr 0.8fr";

function ComparisonTable() {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
        padding: "24px 20px",
        margin: "0 0 16px",
        fontFamily: "var(--sans)",
        fontSize: 13,
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: TABLE_COLUMNS,
          gap: 14,
          minWidth: 700,
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "var(--faint)",
          paddingBottom: 12,
          borderBottom: "1px solid var(--line)",
        }}
      >
        <span>Tool</span>
        <span>Engines (per vendor docs)</span>
        <span>Entry price</span>
        <span>Source</span>
      </div>
      {TOOLS.map((tool) => (
        <div
          key={tool.name}
          style={{
            display: "grid",
            gridTemplateColumns: TABLE_COLUMNS,
            gap: 14,
            minWidth: 700,
            padding: "12px 0",
            borderBottom: "1px solid var(--line)",
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontWeight: 600, color: "var(--ink)" }}>{tool.name}</span>
          <span style={{ color: "var(--muted)" }}>{tool.engines}</span>
          <span style={{ color: "var(--muted)" }}>{tool.entryPrice}</span>
          <span>
            <a
              href={tool.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Vendor page
            </a>
          </span>
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
        Need a picture before you pick a platform?
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
        The audit covers ChatGPT, Google AI Overviews and Gemini &mdash; with
        platform-specific citation analysis, accuracy review, competitor gap mapping,
        and a prioritized action plan.
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
