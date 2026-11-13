import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import ComparisonTable from "@/components/ComparisonTable";

const SLUG = "peec-vs-profound-vs-airops";
/*
 * TITLE ORDER IS A SEARCH DECISION, NOT A STYLE ONE - changed 2026-08-24
 *
 * This page was called "Peec vs Profound vs AirOps" for two and a half months and
 * earned, in the last 28 days: 2,832 impressions and ZERO clicks, at positions
 * between 5.5 and 9.8. Search Console shows what people actually type:
 *
 *   profound vs airops                     437 impressions, position 9.8
 *   airops vs profound which is better     position 5.5
 *   does airops outperform profound        position 6.3
 *
 * Nobody searches "peec vs". The page led with the one brand the query does not
 * contain, so the title never matched the search and the result was never clicked.
 * Ranking on page one and taking no clicks is a title problem, not a content one.
 *
 * Bing's AI Performance report says the same thing independently: the grounding
 * queries citing this domain are "Profound vs Share of Model", "Profound vs AirOps",
 * "AirOps AI visibility products competitors": Profound leads every one.
 *
 * ⚠️ Peec stays IN the title and in the comparison. It is the cheapest published
 * entry point of the three and dropping it would make the page less useful. It just
 * does not go first.
 */
const ARTICLE_TITLE =
  "Profound vs AirOps vs Peec (2026): Pricing & Best Fit";
const ARTICLE_DESCRIPTION =
  "Profound, AirOps and Peec AI compared on published pricing, AI-engine coverage and what each is actually built to do. Every figure read from the vendor's own page and linked, re-verified November 13, 2026.";
const DATE_PUBLISHED = "2026-06-09";
const DATE_MODIFIED = "2026-11-13";
/*
 * 2026-10-02: FULL RE-VERIFICATION, AND THE PAGE WAS WRONG IN WAYS THAT MATTERED.
 *
 * This is the business page AI engines cite most: 814 Google AI-feature impressions
 * and 903 Copilot citations in the three months to Sep 29. Whatever it says gets
 * repeated in AI answers with this site's name on it. Re-reading all three pricing
 * pages found:
 *
 *   - Profound removed its self-serve brand plans. The $99 Starter and $399 Growth
 *     tiers this page was built around no longer exist; brands get a free 7-day trial
 *     and then Enterprise. The only published Profound price is now on the AGENCY
 *     tab: Agency Growth, $99/month plus $399/month per client workspace.
 *   - Peec added an Advanced tier ($495) and renamed nothing else, so "$505
 *     Enterprise" in section 02 was wrong twice. Prices shown are monthly billing;
 *     annual is 15% off per Peec's FAQ, so "billed annually" was also wrong.
 *     Perplexity left the self-serve pick list (now an add-on); Enterprise goes to 13.
 *   - Peec now lists gap analysis, recommended actions and agent actions. "Peec shows
 *     the problem, not the fix" is no longer true and is gone.
 *   - AirOps raised task allowances (Solo 35,000, Pro 100,000) and Pro now covers
 *     "7+ answer engines". Prompt counts are no longer on the page, so they are gone.
 *
 * Also removed, independent of the vendors: every sentence that ranked a tool on data
 * accuracy (Profound "most complete", "reference-class"; BrightEdge "the claim holds";
 * "most data-accurate option"), because the page itself says nothing here was
 * measured for accuracy. And two illustrative percentages (62% vs 8%, 14 of 20)
 * that read as findings.
 */
// 2026-08-26: added an "at a glance, best fit by situation" table right above
// the existing "In short" verdict: a persona-based read (monitoring-only,
// content workflow, enterprise, small budget) distinct from the capability
// comparison in QUICK_COMPARISON_ROWS further down. Title/H1 order left as-is
// (already fixed 2026-08-24 to match actual query phrasing).

/**
 * VERIFICATION RULE FOR THIS PAGE
 *
 * Every price and engine list below was read from the vendor's own pricing page on
 * DATE_VERIFIED and carries a `source` URL. If you cannot open that URL and see the
 * figure, change the figure, never the date.
 *
 * The first version of this post got the central claim wrong. It said Profound
 * covers "10+ engines" and led the comparison with that. Profound's own pricing page
 * says up to NINE, and only on Enterprise; the $399 Growth plan tracks three. A
 * comparison post whose headline differentiator is wrong is worse than no post.
 *
 * Peec's prices do not appear in the page source: the site is Framer and renders
 * them client-side. They were read from the rendered page in a browser. Anything
 * fetched without JavaScript will show plan names and no numbers.
 */
/*
 * 2026-11-13 (CIT-06): all three pricing pages re-read in a browser (rendered).
 *   - Peec: prices unchanged. Perplexity is back in the self-serve pick list (ChatGPT,
 *     Perplexity, AI Overview, AI Mode, Gemini, Naver AI Briefing, ERNIE, Bing AI Mode;
 *     Copilot no longer named); extra models are add-ons from $30/mo; Enterprise "Up to
 *     26 LLM models tracked" (was 13); the Enterprise list adds API models incl. Claude,
 *     Grok, DeepSeek, Qwen, Mistral, Meta Wonder and Exa (browser, Nov 13). Prices ARE
 *     now in the server HTML too.
 *   - Profound: Enterprise "Up to 10 Answer Engines" (adds Muse Spark and Qwen; no
 *     Copilot). Agency tab no longer shows a base price for Agency Growth; it shows
 *     $399/mo per client workspace and "+5 Trial Workspaces for $199/month". Both brand
 *     plans include unlimited seats, so "seats" is not a sales lever.
 *   - AirOps: Pro "Insights Across 10+ Answer Engines" (was 7+); the homepage no
 *     longer uses the "growth platform for AI search" tagline.
 */
const DATE_VERIFIED = "2026-11-13";
const DATE_VERIFIED_HUMAN = "November 13, 2026";

const SRC = {
  profoundAgencies: "https://www.tryprofound.com/solutions/agencies",
  peec: "https://peec.ai/pricing",
  peecAgencies: "https://peec.ai/pricing-agencies",
  profound: "https://www.tryprofound.com/pricing",
  airops: "https://www.airops.com/pricing",
  semrush: "https://www.semrush.com/kb/1626-ai-visibility-features",
} as const;
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const TOOLS_VS_AUDIT_URL = "/blog/ai-visibility-tools-vs-audit/";

// Persona-fit verdict, separate from QUICK_COMPARISON_ROWS below (which compares
// capabilities). This answers "which one for my situation" in one glance, before
// the reader has to read the capability table to work that out themselves.
const BEST_FOR_ROWS = [
  {
    label: "Monitoring only, no content team",
    peec: "Best fit",
    profound: "Enterprise only, after a 7-day trial",
    airops: "Not built for this",
  },
  {
    label: "Feeding a content production workflow",
    peec: "Recommends actions, does not produce content",
    profound: "Good fit (AI Marketer, agents)",
    airops: "Best fit",
  },
  {
    label: "Enterprise, multi-brand or multi-market",
    peec: "Good fit (Enterprise, up to 26 models)",
    profound: "Good fit (up to 10 engines, agents)",
    airops: "Good fit, price on request",
  },
  {
    label: "Small budget, self-serve signup",
    peec: "Best fit ($95/mo, published)",
    profound: "No self-serve brand plan",
    airops: "Free start; paid tiers unpublished",
  },
  {
    label: "Agency managing client brands",
    peec: "Separate agency plans",
    profound: "Agency Growth (base price not shown) + $399/mo per client workspace",
    airops: "Not listed on the pricing page",
  },
] as const;

const QUICK_COMPARISON_ROWS = [
  {
    label: "Built to do",
    peec: "Track citations and share of voice across AI answers",
    profound: "Monitor answer engines, plus agents and AI-referral analytics",
    airops: "Connect AI search insights to content production",
  },
  {
    label: "Engines on the entry plan",
    peec: "Any 3 of: ChatGPT, Perplexity, AI Overviews, AI Mode, Gemini, Naver AI Briefing, ERNIE, Bing AI Mode (most can be added as paid add-ons, from $30/mo)",
    profound: "Free trial: ChatGPT, Gemini, AI Overviews for 7 days",
    airops: "ChatGPT only (Solo)",
  },
  {
    label: "Engines at the top tier",
    peec: "Up to 26 on Enterprise (adds API models including Claude, Grok, DeepSeek, Qwen, Mistral, Meta and Exa)",
    profound: "Up to 10 on Enterprise (ChatGPT, Perplexity, AI Mode, Gemini, DeepSeek, Claude, AI Overviews, Exa, Muse Spark, Qwen)",
    airops: "10+ on Pro (logos shown: OpenAI, Google, Perplexity, Google AI Studio, Claude, Copilot, Grok)",
  },
  {
    label: "Published price",
    peec: "$95 Starter / $245 Pro / $495 Advanced per month (15% off annual) · Enterprise custom",
    profound: "Brands: free trial, then Enterprise custom · Agencies: $399/mo per client workspace (Agency Growth base price not shown)",
    airops: "Not published: priced on task volume. Free to start",
  },
  {
    label: "Prompts included",
    peec: "50 / 150 / 350 by tier",
    profound: "50 on the trial (7 days); Enterprise custom",
    airops: "Not stated on the pricing page",
  },
  {
    label: "Tells you what to fix?",
    peec: "Gap analysis, recommended actions and agent actions",
    profound: "AI Marketer and agents act on what tracking finds",
    airops: "Opportunity reports feed a content workflow",
  },
] as const;

// 2026-11-07: added the AirOps-vs-Profound question first. Search Console (28 days to
// Nov 4) shows ~650 impressions at position 5 to 10 on exactly this question in several
// phrasings ("is airops or profound better for tracking ai visibility?", "does airops
// outperform profound in citation visibility?", "which is better airops or profound?")
// with zero clicks, i.e. answered on the results page. The answer below uses only
// figures already on this page and verified on DATE_VERIFIED; no accuracy ranking.
const FAQ_ITEMS = [
  {
    q: "Is AirOps or Profound better for tracking AI visibility?",
    a: "It depends on what the data is for. Profound is built around monitoring: up to ten engines on Enterprise, agents that act on what tracking finds, and analytics on AI-referred traffic. Brands now get a free 7-day trial on ChatGPT, Gemini and Google AI Overviews, then an Enterprise contract. AirOps also tracks citations, through Insights (ChatGPT only on Solo, ten or more engines on Pro), but it is built to feed a content production workflow and publishes no plan prices. Pick Profound for monitoring plus agents on an enterprise budget, AirOps if visibility data should drive content production. If you only need tracking at a published price, Peec starts at $95 a month. Figures read from each vendor's pricing page on November 13, 2026.",
  },
  {
    q: "Is Peec or Profound better for AI visibility tracking?",
    a: "They are now sold to different buyers. Peec publishes self-serve plans: $95, $245 and $495 a month for 50, 150 and 350 prompts, each tracking three engines you choose, with Enterprise reaching up to 26 models. Profound no longer sells a self-serve plan to brands: you get a free 7-day trial on ChatGPT, Gemini and Google AI Overviews, then an Enterprise contract covering up to ten engines. If you want to start tracking this month at a known price, that is Peec. If you want agents that act on what tracking finds and can negotiate an enterprise contract, look at Profound. Figures read from both pricing pages on November 13, 2026.",
  },
  {
    q: "Does AirOps track AI citations?",
    a: "Yes, through Insights, and the tier decides the engines. Solo covers ChatGPT only; Pro covers 10+ answer engines, including Google, Perplexity, Claude and Copilot. AirOps still publishes no plan prices: its FAQ says pricing is based on task volume and requirements, and you can start for free. Solo includes 35,000 tasks a month and Pro 100,000. If tracking is all you need, Peec publishes its numbers and you can compare them directly.",
  },
  {
    q: "What's the cheapest AI visibility tool?",
    a: "Of the three here, AirOps and Profound both let you start free, but neither publishes the price of what comes after; Peec's cheapest paid plan is $95 a month for three engines. Outside this comparison, Semrush's free plan shows AI mentions, citations and a visibility score, and its AI Visibility toolkit starts at $99 a month. Cheapest and sufficient are different questions: check the engine list and prompt count on the specific tier you would buy, not the headline price.",
  },
  {
    q: "How much does Profound cost for an agency?",
    a: "Profound's agency tab is the only place it publishes prices, and only for add-ons: each full client workspace is $399 a month and five extra trial workspaces are $199 a month. Agency Growth itself, which includes 10 pitch workspaces a month for auditing prospects, no longer shows a base price on the page, and Agency Enterprise is custom. Read from Profound's pricing page on November 13, 2026.",
  },
  {
    q: "Is Semrush good for tracking AI visibility?",
    a: "Better than this article used to say. It previously described Semrush as strong for Google AI Overviews but weak for ChatGPT, Perplexity and Gemini; that is out of date. Semrush's AI Visibility toolkit starts at $99/month and covers AI Overviews, AI Mode, ChatGPT, Perplexity and Gemini, with share-of-voice and sentiment tracking and competitor comparison. What decides it is packaging: Google and AI Overviews tracking is on any plan including the free one, while the other engines require Semrush One or the AI Visibility toolkit.",
  },
  {
    q: "Do I need a tool or a consultant for AI visibility?",
    a: "Most businesses need both, in sequence. An audit first: to establish baseline, diagnose the problem, and build a prioritized fix plan. Then a tracking tool: to measure progress after you've implemented changes. Buying a tool before doing an audit gives you data without context; you'll watch a dashboard for months without knowing which numbers to act on.",
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

// Search snippet (<=158 chars). Kept separate from any long on-page/schema
// description, which can stay longer. Added 2026-10-03.
const META_DESCRIPTION =
  "Profound vs AirOps vs Peec AI: published pricing, AI engines covered and what each is built for. Every figure from the vendor's own page, checked Oct 2026.";
// Under ~48 chars so the " | Hami Tahm" suffix still fits a Google title.
// 2026-11-07: led with "AirOps vs Profound" and "which" to match how the question is
// actually searched (see the FAQ_ITEMS note). Previous: "Profound vs AirOps vs Peec (2026): Pricing".
const META_TITLE = "AirOps vs Profound vs Peec (2026): Which Fits?";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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

const h3Style = {
  fontFamily: "var(--serif)",
  fontWeight: 600,
  fontSize: 23,
  letterSpacing: "-.01em",
  margin: "34px 0 12px",
  color: "var(--ink)",
} as const;

export default function PeecVsProfoundVsAirOpsPost() {
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
            <span>Profound vs AirOps vs Peec</span>
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
              Profound vs AirOps:{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                and where Peec fits.
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
              The two tools buyers compare most, plus the cheapest published
              alternative: what each one actually measures, and who it fits.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 9, 2026" readTime="14 min read" />
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--faint)",
                fontStyle: "italic",
              }}
            >
              Published June 9, 2026 &middot;{" "}
              <strong style={{ fontStyle: "normal" }}>Last reviewed: November 2026</strong>
              {" "}&middot; every price and engine list re-read from the
              vendors&rsquo; own pages on {DATE_VERIFIED_HUMAN}.
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
            <BestForTable />
          </RevealSection>

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
                <strong>Profound</strong>{" "}if you want monitoring plus agents that
                act on what the tracking finds, analytics on AI-referred traffic to
                your own site, and you are buying an enterprise contract: it no
                longer sells a self-serve plan to brands.{" "}
                <strong>AirOps</strong>{" "}if visibility is the front end of a
                content production line; it publishes no plan prices, so budget for
                a conversation. <strong>Peec</strong>{" "}if you want citation and
                share-of-voice tracking at a published, self-serve price, now with
                recommended actions on top.
                <br />
                <br />
                Engine coverage is tier-gated on all three, and the gap between the
                logo row and the plan you would actually buy is the single most
                expensive detail on this page. On Peec&rsquo;s self-serve plans you
                pick three engines; most others can be added as paid add-ons,
                from $30 a month.
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
                <strong>How this was checked.</strong>{" "}Prices, plan names, prompt
                counts and engine lists come from each vendor&rsquo;s own pricing
                page, read on {DATE_VERIFIED_HUMAN} and linked in each section. This
                is a documentation-based comparison, not a controlled test: I have
                not run the same prompt set through all three and measured the
                results against each other, so nothing here ranks them on accuracy.
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Method and sources.</strong>{" "}Each pricing page was read
                as a visitor sees it, in a browser, on {DATE_VERIFIED_HUMAN}:{" "}
                <a href={SRC.peec} target="_blank" rel="noopener noreferrer" style={linkStyle}>Peec pricing</a>{" "}
                (and its{" "}
                <a href={SRC.peecAgencies} target="_blank" rel="noopener noreferrer" style={linkStyle}>agency pricing</a>
                ),{" "}
                <a href={SRC.profound} target="_blank" rel="noopener noreferrer" style={linkStyle}>Profound pricing</a>{" "}
                (brand and agency tabs),{" "}
                <a href={SRC.airops} target="_blank" rel="noopener noreferrer" style={linkStyle}>AirOps pricing</a>{" "}
                and{" "}
                <a href={SRC.semrush} target="_blank" rel="noopener noreferrer" style={linkStyle}>Semrush&rsquo;s AI Visibility documentation</a>
                {" "}(a static help page, fetched the same day). Where a vendor stopped stating a number, the number was taken
                out rather than carried over.
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Disclosure.</strong>{" "}I take no affiliate commission and no
                payment from any of these companies. I sell an AI visibility audit,
                which competes for the same budget, so the comparison sticks to
                what their own pages state, and the recommendation at the end includes
                the case for buying none of them.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Peec, Profound and AirOps get named together constantly, which
              suggests they are alternatives to each other. They are not. Peec is
              citation and share-of-voice tracking at a published, self-serve price.
              Profound is monitoring plus agents that act on what the monitoring
              finds, plus analytics on AI-referred traffic to your own site, sold to
              brands as an enterprise contract. AirOps treats visibility as the front
              end of a content production line. The expensive mistake is buying the
              one whose shape does not match the job you actually have. Here&rsquo;s
              what each one&rsquo;s own pricing and product pages say it does.
            </p>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                margin: "0 0 26px",
                padding: "14px 18px",
                border: "1px solid var(--line)",
                borderRadius: 8,
              }}
            >
              <strong style={{ color: "var(--ink)" }}>Updated {DATE_VERIFIED_HUMAN}.</strong>{" "}
              Since the October 2 check: Peec put Perplexity back in its
              self-serve pick list, sells extra models as add-ons, and now
              reaches up to 26 models on Enterprise. Profound&rsquo;s Enterprise
              now covers up to ten engines, and its agency tab no longer shows a
              base price for Agency Growth. AirOps&rsquo; Pro now lists 10+
              answer engines. Earlier, on October 2, Profound had dropped its
              $99 Starter and $399 Growth brand plans; brands now get a 7-day
              trial and then Enterprise. Every figure below was re-read on{" "}
              {DATE_VERIFIED_HUMAN}.
            </div>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="Quick comparison: Profound vs AirOps vs Peec" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <QuickComparisonTable />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Peec: what it is and what it measures" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it tracks:</strong>{" "}Peec is an AI
              search analytics platform built for marketing teams and SEO agencies.
              It tracks how often your brand is cited and mentioned when AI systems
              answer buyer questions, with visibility, position, sentiment and share
              of voice tracked daily against named competitors. On the self-serve
              plans you choose three engines from ChatGPT, Perplexity, Google AI
              Mode, Google AI Overviews, Gemini, Naver AI Briefing, ERNIE and Bing
              AI Mode. Most of those can be added beyond your three as paid
              add-ons, or come included on Enterprise.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What changed:</strong>{" "}this section used to
              say Peec shows the problem but not the fix. Its pricing page now lists
              gap analysis (sources that name competitors but not you), recommended
              actions ranked by opportunity, and agent actions generated from your
              data. Whether those recommendations are any good for your situation is
              not something a pricing page can tell you, but the claim that it offers
              none is no longer true.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}$95 a month Starter (50
              prompts, 3 models, 1 project), $245 Pro (150 prompts, 3 models, 2
              projects), $495 Advanced (350 prompts, 3 models, 5 projects, multiple
              countries). Those are monthly-billing prices; Peec&rsquo;s FAQ gives
              15% off for annual billing. Extra models are add-ons from $30 a month.
              Enterprise is custom and reaches up to 26 models. Agencies have a{" "}
              <a
                href={SRC.peecAgencies}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                separate pricing page
              </a>
              .{" "}
              <a href={SRC.peec} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Peec pricing
              </a>
              , read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Marketing teams and SEO
              agencies that want systematic AI share-of-voice tracking and
              competitor benchmarking without enterprise overhead. Good starting
              point for teams new to dedicated AI visibility monitoring.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}Of the three, Peec is
              the only one where a brand can sign up today at a published price and
              start tracking. That alone makes it the default starting point for
              most small and mid-sized teams. The three-engine limit on self-serve
              plans is the constraint to price carefully: extra engines are paid
              add-ons.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Profound: what it is and what it measures" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it tracks:</strong>{" "}Profound runs a
              prompt set on a daily schedule and reports mentions, citations,
              sentiment and competitive presence. Its distinctive pieces are Agents
              (which draft and optimise content from what the tracking finds),
              Prompt Volumes, and Agent Analytics, which tracks AI-referred
              traffic arriving at your own domain rather than what the engines say.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>The big change:</strong>{" "}until recently
              Profound sold two self-serve brand plans, a $99 Starter tracking
              ChatGPT and a $399 Growth plan tracking three engines, and this page
              was built around them. Both are gone. For brands, Profound&rsquo;s
              pricing page now offers a free trial (50 prompts run daily for 7 days,
              on ChatGPT, Gemini and Google AI Overviews, with prompts you cannot
              customise) and then Enterprise at a custom price. Enterprise covers up
              to ten engines: ChatGPT, Perplexity, Google AI Mode, Gemini, DeepSeek,
              Claude, Google AI Overviews, Exa Search, Muse Spark and Qwen. Microsoft
              Copilot is not on the list.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>For agencies:</strong>{" "}the agency tab is
              the only place Profound shows prices, and only for add-ons. Agency
              Growth includes 10 pitch workspaces a month for auditing prospects;
              each full client workspace is $399 a month, and five extra trial
              workspaces are $199 a month. Agency Growth itself no longer shows a
              base price, and Agency Enterprise is custom.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>An earlier correction still stands:</strong>{" "}
              this article once said Profound covers &ldquo;10+ engines&rdquo; when
              its own page said up to nine. It now says up to ten, still on
              Enterprise only. Funding and
              customer-logo claims that used to sit here were removed too: they were
              not sourced, and they were never a reason to buy a tool.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Data quality:</strong>{" "}I have no way to
              rank these three on accuracy, and neither does anyone without running
              the same prompt set through all three and comparing against a ground
              truth that does not exist. The earlier version of this page called
              Profound &ldquo;the strongest&rdquo; on accuracy; that was an
              impression, not a measurement, so it is gone. What is checkable is on
              the pricing pages: engines, prompt counts, refresh frequency.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}brands: free 7-day
              trial, then Enterprise at a custom price. Agencies: $399 a month per
              client workspace, with no base price shown for Agency Growth, as
              above.{" "}
              <a
                href={SRC.profound}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Profound pricing
              </a>
              , both tabs, read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}companies ready for an
              enterprise contract that want tracking, agents that act on it, and
              analytics on AI-referred traffic in one place; and agencies that want
              to run prospect audits with published per-client add-on prices.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}for a brand, Profound
              is now a sales conversation rather than a signup, so it only belongs
              on your shortlist if you are buying at enterprise scale. For an agency,
              it is the only one of the three with a published per-client price
              (the Agency Growth base fee is not shown), which makes it the easiest to
              cost out per client.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="AirOps: what it is and what it measures" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it tracks:</strong>{" "}AirOps positions
              itself around AI search strategy and execution. It combines two functions that most tools treat separately: visibility
              tracking (called Insights) and content operations (AI-powered content
              creation and publishing workflows). The Insights feature tracks how your brand appears across answer
              engines, with competitor, sentiment and prompt-volume data alongside.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it doesn&rsquo;t track:</strong>{" "}The
              catch is the tier split, not a price cliff: AirOps publishes no plan
              prices at all, and its FAQ says pricing is set by task volume and
              requirements. Solo covers ChatGPT only, for a single user. Pro covers
              10+ answer engines (the page shows OpenAI, Google, Perplexity, Google
              AI Studio, Claude, Copilot and Grok) with unlimited seats. If you need
              anything beyond ChatGPT, Solo will not do it, and since Pro carries no
              published price, you cannot size that step without talking to sales.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}Not published. You can start for free,
              and AirOps&rsquo; own FAQ states pricing is based on task volume and
              requirements. Solo includes 35,000 tasks, with overage at $0.025 per
              task; Pro includes 100,000. Prompt counts for Solo and Pro used to be
              stated and no longer are, so they have been taken out of this page
              rather than carried over. The $200 and $2,000 figures this article
              once quoted appear nowhere on AirOps&rsquo; site and were removed
              earlier.{" "}
              <a
                href={SRC.airops}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                AirOps pricing
              </a>
              , read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Content teams that want
              to track AI search visibility <em>and</em> use that data to drive
              content production in one platform. AirOps makes the most sense when
              you&rsquo;re already running a structured content operation and want
              to align it with AI search performance, not just see a dashboard.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}AirOps is the right
              choice if you need both tracking and content operations in one
              workflow. If you only need tracking, Solo is too narrow at ChatGPT
              alone, and Pro is hard to justify unless you are also using the content
              workflow: you would be paying for a production system to get a
              dashboard. Of the three, only Peec publishes what brand tracking
              costs; AirOps and Profound both ask you to talk to sales.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text="How these compare to broader AI visibility suites"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>BrightEdge</h3>
            <p style={{ marginBottom: 26 }}>
              BrightEdge positions itself on data accuracy: it is one of the few
              enterprise SEO platforms with dedicated generative search tracking
              built into a mature analytics suite, including{" "}
              <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Google AI Overviews</a>.{" "}
              This page used to add that &ldquo;the claim holds&rdquo;. Nothing here
              measured it, so that judgement is gone and the positioning is
              reported as BrightEdge&rsquo;s, not as a finding. The honest
              limitation is access: BrightEdge publishes no pricing at all, so any
              figure you see quoted for it (including the &ldquo;$2,000+/month&rdquo;
              this page used to state) comes from someone other than BrightEdge.
              It is an enterprise contract, which for most teams comparing the three
              tools above puts it in a different category entirely.
            </p>

            <h3 style={h3Style}>Semrush AI Visibility Toolkit</h3>
            <p style={{ marginBottom: 26 }}>
              This section used to say Semrush was strong for Google AI Overviews
              but &ldquo;weak for Perplexity, ChatGPT, or Gemini.&rdquo; That is no
              longer true and the correction matters, because it was being used to
              push readers toward the paid tools above. Semrush&rsquo;s AI Visibility
              toolkit starts at $99/month and covers AI Overviews, AI Mode, ChatGPT,
              Perplexity and Gemini, with share-of-voice and sentiment tracking,
              competitor comparison against up to four rivals, and a prompt research
              database. The free plan surfaces AI mentions, citations and a visibility
              score.{" "}
              <a
                href={SRC.semrush}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Semrush&rsquo;s own documentation
              </a>
              , read {DATE_VERIFIED}. The real decision point is packaging: Google and
              AI Overviews tracking is available on any plan including the free one,
              while the other engines need Semrush One or the AI Visibility toolkit.
            </p>

            <h3 style={h3Style}>Gaio.tech</h3>
            <p style={{ marginBottom: 26 }}>
              This entry has been removed. It carried specific figures (120+
              query variations per brand term, 300+ scraped industry sources, named
              API integrations) that I could not trace to any source. Repeating
              a vendor&rsquo;s own numbers as if they were findings is exactly what
              the rest of this page is trying not to do.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="Head to head" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>Profound vs AirOps: which is better?</h3>
            <p style={{ marginBottom: 26 }}>
              For tracking alone, the honest answer is now about how you buy rather
              than what you get. Peec sells three engines of your choosing from $95
              a month, self-serve. Profound sells brand tracking only as an
              Enterprise contract after a 7-day trial, and AirOps prices Pro, the
              tier with more than ChatGPT, on request. At the top end, Peec&rsquo;s
              Enterprise reaches up to 26 models, Profound&rsquo;s ten and
              AirOps&rsquo; Pro 10+.
            </p>
            <p style={{ marginBottom: 26 }}>
              Profound earns its price somewhere else: Agents that draft and optimise
              content from what the tracking finds, and Agent Analytics, which
              measures AI-referred traffic arriving at your own domain. That second
              one is worth more than an extra engine to most businesses, because it
              is the only number in this whole category that connects to revenue.
            </p>

            <h3 style={h3Style}>
              Profound vs AirOps: monitoring platform or content operation?
            </h3>
            <p style={{ marginBottom: 26 }}>
              Both go beyond reporting, in opposite directions. Profound starts from
              monitoring and adds agents that produce content. AirOps starts from a
              content production system and adds visibility insights to point it. If
              you already have a content team and want to know what to brief them on,
              Profound fits. If your bottleneck is producing the content at all,
              AirOps is built for that and Profound is not.
            </p>
            <p style={{ marginBottom: 26 }}>
              Practical difference when you go to buy: neither publishes a brand price
              any more. Budgeting for either means a sales conversation, about
              prompts and engines with Profound (its free trial and Enterprise
              both include unlimited seats), about task volume with AirOps.
            </p>

            <h3 style={h3Style}>Peec vs AirOps: tracking only, or tracking plus execution?</h3>
            <p style={{ marginBottom: 26 }}>
              This is the cleanest comparison of the three, because the tools barely
              overlap. Peec tells you where you stand across up to three engines on a
              self-serve plan and now suggests actions, but it does not produce
              content. AirOps tracks a narrower set on its entry tier (ChatGPT only
              on Solo) and spends the rest of the product on producing and
              publishing content.
            </p>
            <p style={{ marginBottom: 26 }}>
              Choose Peec if you have the content capability and need measurement.
              Choose AirOps if measurement is not the constraint and output is.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="Which tool should you choose?" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>The clearest decision framework:</p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You primarily need Google AI Overviews tracking
                </strong>{" "}
                → Semrush, if you&rsquo;re already a subscriber
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You need multi-platform citation tracking at SMB budget
                </strong>{" "}
                → Peec
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You are buying at enterprise scale and want agents on top of tracking
                </strong>{" "}
                → Profound
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You need citation tracking AND a content production workflow
                </strong>{" "}
                → AirOps Pro, once you have a quote and can weigh it against the
                content-operations value
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You are an agency costing AI visibility tracking per client
                </strong>{" "}
                → Profound Agency Growth has a published per-client price; check
                Peec&rsquo;s agency plans against it
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>
                  You don&rsquo;t yet know which platforms matter for your business
                </strong>{" "}
                → skip the tool subscription for now
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              That last point is worth expanding. Buying a tracking platform before
              you understand your AI visibility baseline is like buying a gym
              membership before you&rsquo;ve had a health assessment. The tool will
              give you numbers. Without context, you won&rsquo;t know which numbers
              matter or what to do about them.
            </p>
            <p style={{ marginBottom: 26 }}>
              For a full ranked review of AI visibility platforms including pricing,
              platform coverage, and use case, see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the full AI visibility tools rankings
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="08" text="What none of these tools tell you" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Every tool in this comparison has the same fundamental gap: some are
              more honest about it than others.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>None tell you why you&rsquo;re missing.</strong>{" "}
              A tracker can show you that a competitor is
              cited far more often than you, or that you are absent from most of your
              tracked prompts. Gap reports, including Peec&rsquo;s, go further and
              show which sources cite competitors and not you. What none of them can
              settle from outside your site is whether the cause is technical (your
              pages are not crawlable or render empty), structural (your content is
              not extraction-ready), or authority-based (nothing outside your site
              vouches for you).
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>None show you exactly what to change.</strong>{" "}
              Profound&rsquo;s agents draft content from citation gaps, Peec ranks
              recommended actions, and AirOps generates optimisation opportunities.
              None of that replaces a diagnosis of what is actually causing the gap,
              and the diagnosis is where most of the leverage is.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                What they recommend doesn&rsquo;t know your constraints.
              </strong>{" "}
              All three now produce recommendations, so &ldquo;tools only show you
              data&rdquo; is not true and this page used to overstate it. The
              narrower, still-true version: a list of forty suggested changes is not
              a plan until someone knows which three you can actually ship this
              quarter, with the team and budget you have.
            </p>
            <p style={{ marginBottom: 26 }}>
              Which is also the honest case for buying one of these instead of hiring
              anyone. If you know what your gap is and just need to watch it move,
              buy the tool. The diagnosis is what is worth paying a person for.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="09" text="Frequently asked questions" />
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
              For the full ranked list of AI visibility tools including broader
              category options, see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the best AI visibility tools in 2026
              </Link>
              .
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
              For the comparison of tools vs. a professional audit, see{" "}
              <Link href={TOOLS_VS_AUDIT_URL} style={linkStyle}>
                AI visibility tools vs. a professional audit
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
                href={TOOLS_URL}
                title="Best AI Visibility Tools in 2026"
                tag="Tools"
              />
              <KeepReadingLink
                href={TOOLS_VS_AUDIT_URL}
                title="AI Visibility Tools vs. Audit"
                tag="Strategy"
              />
              <KeepReadingLink
                href="/blog/scrunch-vs-otterly/"
                title="Scrunch vs Otterly.AI (2026)"
                tag="Tools"
              />
              <KeepReadingLink
                href="/blog/how-to-check-ai-visibility/"
                title="How to Check AI Visibility for Free"
                tag="Basics"
              />
              {/* 2026-11-07: internal link to the AEO/GEO explainer (2,400 impressions at
                  position ~36 in Search Console); this page is the site's strongest in Google. */}
              <KeepReadingLink
                href="/blog/aeo-vs-geo-vs-seo/"
                title="AEO vs GEO vs SEO: What's the Difference?"
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
                Not sure which tool, or whether you need one yet?
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
                Start with an audit to map your baseline and know which platforms
                to prioritize, before committing to a subscription. Scoped to
                your business, confirmed on a free call.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit{" "}
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
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </h2>
  );
}

function BestForTable() {
  return (
    <ComparisonTable
      caption={"At a glance: best fit by situation"}
      rowHeader="Situation"
      columns={["Peec", "Profound", "AirOps"]}
      rows={BEST_FOR_ROWS.map((r) => ({ label: r.label, values: [r.peec, r.profound, r.airops] }))}
      minWidth={640}
    />
  );
}

function QuickComparisonTable() {
  return (
    <ComparisonTable
      caption={`Profound vs AirOps vs Peec, from each vendor's own pricing page, read ${DATE_VERIFIED_HUMAN}`}
      columns={["Peec", "Profound", "AirOps"]}
      rows={QUICK_COMPARISON_ROWS.map((r) => ({ label: r.label, values: [r.peec, r.profound, r.airops] }))}
      minWidth={640}
    />
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
        Need direction, not just data?
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
        Still deciding between tools and an audit? See{" "}
        <Link href={TOOLS_VS_AUDIT_URL} style={linkStyle}>
          AI visibility tools vs. a professional audit
        </Link>{" "}
        for a direct comparison, or book an audit to get a prioritized fix plan
        first.
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
