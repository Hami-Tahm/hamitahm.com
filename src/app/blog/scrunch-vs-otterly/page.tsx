import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import ComparisonTable from "@/components/ComparisonTable";

const SLUG = "scrunch-vs-otterly";

const ARTICLE_TITLE = "Scrunch vs Otterly.AI: Pricing & Fit (2026)";
const ARTICLE_DESCRIPTION =
  "Scrunch vs. Otterly.AI compared on pricing, AI-engine coverage, and what each is built to do, sourced from each vendor's own pricing page.";
const DATE_PUBLISHED = "2026-09-07";
const DATE_VERIFIED_HUMAN = "November 13, 2026";
const DATE_VERIFIED = "2026-11-13";
// 2026-11-13 (CIT-06): both pricing pages re-read in a real browser (rendered page,
// Canada). Scrunch Core unchanged ($250, 125 prompts, 4 LLMs, 5 site audits/month,
// 1 brand workspace, 5 users, 25-page site map, 1 country). Correction: AXP shows a dash (not included) on
// Core and "Custom" on Enterprise, so it is Enterprise-only; earlier copy implied Core.
// Otterly moved to credits: every engine on every plan; Lite/Standard/Premium =
// 2,000/15,000/50,000 credits. The browser view showed these as 20/160/535 prompts on
// 3 of 7 engines. The 4-engine figures (16/120/403) are DERIVED: credits / (4 engines x
// 31 daily runs), and match what a plain fetch showed. Comparisons use the 4-engine
// basis because Scrunch Core tracks 4 engines (like for like). Also re-checked in the
// browser: Scrunch Core "Page Optimizations 1 / month"; Otterly 200k agent analytics
// events/month, 2,000 API + 2,000 MCP requests/month from Standard, "1 workspace" on
// Lite and Unlimited above, Enterprise "Unlimited AI engines". The
// per-engine add-ons and the $99-per-100-prompts packs are gone (credit packs instead).
// ⚠️ A plain HTTP fetch of scrunch.com/pricing returned a DIFFERENT plan set
// (Starter/Growth) the same day. The rendered page a visitor sees showed Core, so Core
// is what this page states. Re-check in a browser, not with a fetcher.

const SRC = {
  scrunch: "https://scrunch.com/pricing",
  scrunchAgencies: "https://scrunch.com/agencies",
  otterly: "https://otterly.ai/pricing",
  otterlyEngines: "https://help.otterly.ai/which-ai-searches-does-otterlyai-support",
  otterlyTrial: "https://help.otterly.ai/free-trial",
  otterlyAudit: "https://help.otterly.ai/what-does-the-geo-audit-do",
  clarityBots: "https://clarity.microsoft.com/blog/ai-bot-activity-in-clarity/",
} as const;

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const PEEC_URL = "/blog/peec-vs-profound-vs-airops/";
const HOMECALC_SCRUNCH_URL = "/blog/homecalc-scrunch-citation-mention-gap/";

const BEST_FOR_ROWS = [
  {
    label: "Small budget, solo marketer",
    scrunch: "No entry point below $250/mo",
    otterly: "Best fit ($29/mo Lite, published)",
  },
  {
    label: "Multi-country / global brand",
    scrunch: "1 country on Core; custom on Enterprise",
    otterly: "Best fit (unlimited countries and languages on every plan)",
  },
  {
    label: "Agency managing multiple clients",
    scrunch: "1 brand workspace on Core; custom Enterprise",
    otterly: "Best fit (unlimited workspaces + Agency Partner program)",
  },
  {
    label: "Fixing pages for AI crawlers, not just tracking",
    scrunch: "Best fit (Site Maps and Page Optimizations on Core; AXP on Enterprise)",
    otterly: "Tracking-first; GEO Audit included on every plan, but less central",
  },
  {
    label: "Enterprise / full engine coverage",
    scrunch: "Engines included; price fully custom, none published",
    otterly: "All 7 engines on every plan, paid in credits; Enterprise lists \"unlimited AI engines\", custom-priced from 1,000 prompts",
  },
] as const;

const QUICK_COMPARISON_ROWS = [
  {
    label: "Built to do",
    scrunch: "Monitor AI visibility and optimize/serve pages for AI agents",
    otterly: "Track citations, share of voice and AI-referred traffic",
  },
  {
    label: "Cheapest published plan",
    scrunch: "$250/month (Core), billed monthly, 7-day free trial",
    otterly: "$29/month (Lite), 15% off if billed annually",
  },
  {
    label: "Prompts included at that price",
    scrunch: "125 prompt variants (Core)",
    otterly: "2,000 credits a month (Lite): 20 prompts on 3 engines, or about 16 on 4",
  },
  {
    label: "Engines on the entry plan",
    scrunch: "ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot",
    otterly: "Any of 7 on every plan (ChatGPT, AI Overviews, Perplexity, Copilot, AI Mode, Gemini, Claude), paid in credits",
  },
  {
    label: "Engines at the top tier",
    scrunch: "9 on Enterprise (adds Claude, Gemini, Meta AI, Google AI Mode, Grok)",
    otterly: "All 7 on every plan (a Claude answer uses 3 credits); Enterprise lists \"unlimited AI engines\"",
  },
  {
    label: "Site technical audit",
    scrunch: "Site Maps: per-page 0-100 audit score, up to 25 pages on Core",
    otterly: "GEO Audit on every plan; no monthly cap published",
  },
  {
    label: "AI agent / bot traffic tracking",
    scrunch: "Included from Core ($250/mo)",
    otterly: "Agent Analytics from Standard ($189/mo) up: 200k events/mo",
  },
  {
    label: "Free alternative for bot-traffic visibility alone",
    scrunch: "Microsoft Clarity's AI Bot Activity dashboard, $0, since Jan 2026",
    otterly: "Same free alternative applies",
  },
  {
    label: "Workspaces / multi-brand",
    scrunch: "1 brand workspace on Core; custom count on Enterprise",
    otterly: "1 on Lite; unlimited from Standard",
  },
  {
    label: "API / MCP access",
    scrunch: "Enterprise only",
    otterly: "From Standard: 2,000 API + 2,000 MCP requests/month",
  },
  {
    label: "Content generation",
    scrunch: "Basic, included on Core",
    otterly: "Not a listed feature; Otterly stays tracking-focused",
  },
  {
    label: "Enterprise price",
    scrunch: "Not published: \"talk to us\"",
    otterly: "Custom (\"starting from 1,000 search prompts\"); no dollar figure since October 2026",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Is Scrunch or Otterly cheaper?",
    a: "Otterly, at every published tier. Otterly's Lite plan is $29/month, with no Scrunch equivalent below its $250/month Core plan. Compared like for like on four engines (Scrunch Core tracks four), Otterly is also cheaper per prompt: its Standard plan is $189/month for 15,000 credits, which works out to about 120 prompts tracked daily on four engines (roughly $1.58 a prompt; Otterly's own table shows 160 on three), against Scrunch Core's $250/month for 125 prompts ($2.00 a prompt). Otterly's prompt count rises or falls with the number of engines you track, so treat unit cost as a guide. Figures read from both vendors' pricing pages on November 13, 2026.",
  },
  {
    q: "Do Scrunch and Otterly track the same AI engines?",
    a: "Not on the same terms. Scrunch's Core plan tracks four: ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot; its full nine-engine list (adding Claude, Gemini, Meta AI, Google AI Mode and Grok) is Enterprise-only, and Enterprise carries no published price. Otterly makes all seven of its engines (ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot, Google AI Mode, Gemini and Claude) available on every plan and meters them in monthly credits, with a Claude answer counting as three credits, so you can work out what fuller coverage costs before buying.",
  },
  {
    q: "Which tool is better for an agency with multiple clients?",
    a: "Otterly, on what's published. Its Standard and Premium tiers include unlimited workspaces, and it runs an explicit Agency Partner program (per-client workspace management, pitch workspaces for prospects before they sign, white-labeled reporting via Looker Studio, consolidated billing). Scrunch's Core plan includes one brand workspace and multiple workspaces require the custom-priced Enterprise tier; Scrunch does run an Agency Partner Program, but it doesn't publish per-client workspace pricing the way Otterly does.",
  },
  {
    q: "Does either tool actually fix AI visibility problems, or just track them?",
    a: "Scrunch goes further on the built-in-fix side: Site Maps scores every tracked page 0-100 on its own AI-accessibility audit, basic content generation and one page optimization a month are included from Core, and AXP (its Agent Experience Platform, Enterprise-only) serves an optimized version of pages to AI agents. Otterly is closer to Peec in this comparison series: strong on measurement (citations, share of voice, sentiment, domain ranking), with its GEO Audit included but positioned as a diagnostic, not an on-page fix. Neither replaces a written, prioritized action plan built for your own site.",
  },
  {
    q: "Is paying for AI bot traffic tracking worth it, when Microsoft Clarity does this for free?",
    a: "Not for that feature alone. Microsoft Clarity launched an AI Bot Activity dashboard in January 2026 (reading real server logs from a connected CDN, not client-side JS) and added a robots.txt-violations layer in June 2026, both at Clarity's standard price of $0. That covers the same ground as the \"AI agent/bot traffic tracking\" checkbox on Scrunch's Core plan and Otterly's Agent Analytics feature: which AI crawlers are hitting your site and whether they're following robots.txt. What Clarity does not do is score individual pages for AI-readability or serve an optimized version of a page to an agent; that's Scrunch's Site Maps and AXP specifically, and Otterly's GEO Audit covers the diagnostic half without the serving part either. If bot-traffic visibility is the only thing you need, start with the free tool.",
  },
  {
    q: "Do I need a tool or a consultant for AI visibility?",
    a: "Most businesses need both, in sequence, and this comparison doesn't change that answer from the Peec/Profound/AirOps one: an audit first to establish baseline and a prioritized fix list, then a tracking tool (Scrunch, Otterly, or another) to measure progress once changes are live. Buying a tracking tool before an audit gives you a dashboard with no context for which number to act on first.",
  },
] as const;

const blogGraph = buildBlogSchema({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_VERIFIED,
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
  alternates: { canonical: `https://hamitahm.com/blog/${SLUG}/` },
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

export default function ScrunchVsOtterlyPost() {
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
            <span>Scrunch vs Otterly.AI</span>
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
              Scrunch vs Otterly.AI:{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                tracking vs. fixing.
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
              Two AI visibility platforms with different centers of gravity:
              what each actually measures, what each publishes, and who it
              fits.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="September 7, 2026" readTime="11 min read" />
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--faint)",
                fontStyle: "italic",
              }}
            >
              Published September 7, 2026 &middot;{" "}
              <strong style={{ fontStyle: "normal" }}>Last reviewed: November 2026</strong>
              {" "}&middot; every price and feature read from the vendors&rsquo;
              own pages on {DATE_VERIFIED_HUMAN}.
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
                <strong>Otterly</strong>{" "}if price, multi-country reach or
                agency workspace management decide it: it publishes a full
                pricing ladder from $29/month, covers unlimited countries and
                languages even on its cheapest plan, and runs a named agency
                program.{" "}
                <strong>Scrunch</strong>{" "}if the job includes fixing what AI
                crawlers see on your own pages, not just measuring it: site
                audits, page optimizations and basic content generation are
                built in from its $250/month Core plan, and its Agent
                Experience Platform is added on Enterprise.
                <br />
                <br />
                Engine coverage is priced two different ways: Otterly
                opens all seven of its engines on every plan and meters them
                in published monthly credits; Scrunch tracks four on Core and
                folds its full nine into an Enterprise plan with no published
                number at all.
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
                <strong>How this was checked.</strong>{" "}Prices, plan names,
                prompt counts and engine lists come from each vendor&rsquo;s
                own pricing page, read on {DATE_VERIFIED_HUMAN} and linked in
                each section. This is a documentation-based comparison, not a
                controlled test: the {" "}
                <Link href={HOMECALC_SCRUNCH_URL} style={linkStyle}>
                  companion post on HomeCalc.ca&rsquo;s own Scrunch data
                </Link>{" "}
                reports what one Scrunch account actually showed for one
                site; it doesn&rsquo;t compare that against a parallel
                Otterly account, so nothing here ranks the two on data
                accuracy.
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Method and sources.</strong>{" "}Each pricing page was
                read as a visitor sees it, in a browser, on{" "}
                {DATE_VERIFIED_HUMAN}. Per-prompt costs on four engines are my
                own arithmetic from Otterly&rsquo;s published credits. Scrunch:{" "}
                <a href={SRC.scrunch} target="_blank" rel="noopener noreferrer" style={linkStyle}>pricing</a>,{" "}
                <a href={SRC.scrunchAgencies} target="_blank" rel="noopener noreferrer" style={linkStyle}>agencies</a>.
                Otterly:{" "}
                <a href={SRC.otterly} target="_blank" rel="noopener noreferrer" style={linkStyle}>pricing</a>,{" "}
                <a href={SRC.otterlyEngines} target="_blank" rel="noopener noreferrer" style={linkStyle}>engines supported</a>,{" "}
                <a href={SRC.otterlyTrial} target="_blank" rel="noopener noreferrer" style={linkStyle}>free trial</a>,{" "}
                <a href={SRC.otterlyAudit} target="_blank" rel="noopener noreferrer" style={linkStyle}>GEO Audit</a>.
                Microsoft Clarity:{" "}
                <a href={SRC.clarityBots} target="_blank" rel="noopener noreferrer" style={linkStyle}>AI Bot Activity</a>.
                Vendors change plans often; if a page here disagrees with the
                vendor&rsquo;s, the vendor&rsquo;s page wins.
              </p>
              <p style={{ margin: "12px 0 0" }}>
                <strong>Disclosure.</strong>{" "}I hold a paid Scrunch account
                for HomeCalc.ca and no commercial relationship with either
                company: no affiliate commission, no payment, no free access
                given in exchange for this post. I sell an AI visibility
                audit, which competes for some of the same budget as
                monitoring-only tools; the comparison sticks to what each
                vendor&rsquo;s own page states.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Scrunch and Otterly both get pitched as &ldquo;AI visibility
              tracking,&rdquo; and on the entry plan they genuinely overlap:
              the same core engines, prompt-based tracking, competitor
              benchmarking. Past the entry plan they diverge. Otterly stays a
              measurement tool end to end and publishes a full price ladder
              for it. Scrunch adds a second job, fixing what it measures
              (site audits, an Agent Experience Platform, content
              generation), and prices that combination higher with no entry
              tier below $250/month.
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 16,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 26,
              }}
            >
              <em>
                I don&rsquo;t have affiliate relationships with either tool.
                This comparison is based on their own published pricing pages
                and, for Scrunch, direct use on a real account.
              </em>
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="Quick comparison: Scrunch vs Otterly" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <QuickComparisonTable />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Scrunch: what it is and what it measures" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it tracks:</strong>{" "}Scrunch
              monitors brand mentions, citations, sentiment and competitive
              position across ChatGPT, Perplexity, Google AI Overviews and
              Microsoft Copilot on its Core plan, expanding to Claude, Gemini,
              Meta AI, Google AI Mode and Grok (nine engines total) on
              Enterprise. It separates &ldquo;mention&rdquo; (the AI names
              your brand) from &ldquo;citation&rdquo; (your URL is used as a
              source) as two different tracked metrics, which is the
              distinction the {" "}
              <Link href={HOMECALC_SCRUNCH_URL} style={linkStyle}>
                HomeCalc.ca companion post
              </Link>{" "}
              is built around.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Standout feature:</strong>{" "}Site
              Maps, a per-page audit that scores every tracked page 0-100 on
              AI accessibility and shows which pages an AI agent actually
              crawls, paired on Enterprise with AXP (Agent Experience
              Platform), which serves an optimized version of a page to AI
              agents rather than only reporting a score. Neither Otterly nor the three tools in
              the companion Peec/Profound/AirOps comparison publish an
              equivalent on-page fix layer.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it doesn&rsquo;t include at
              Core:</strong>{" "}AXP, API access, MCP access, expanded model
              coverage, SSO beyond Google, and more than one brand workspace
              are all Enterprise-only, and Enterprise carries no published
              price. A prospective buyer who needs any one of those has to
              start a sales conversation to learn the number.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}Core is
              $250/month: 125 prompt variants, 5 site audits/month, 1 brand
              workspace, 5 user licenses, a 25-page site map limit, and a
              7-day free trial. Enterprise is unpriced (&ldquo;talk to
              us&rdquo;).{" "}
              <a href={SRC.scrunch} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Scrunch pricing
              </a>
              , read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Teams whose AI
              visibility problem includes a real technical component, thin
              structured data, pages AI agents can't parse well, and who want
              that measured and partly fixed inside one tool rather than
              handed off to a developer as a separate step.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}Scrunch is the
              stronger choice when the job is bigger than tracking. It is
              priced for that job; there is no cheap way to try only the
              tracking half.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Otterly.AI: what it is and what it measures" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it tracks:</strong>{" "}Otterly
              runs a scheduled prompt set (daily tracking frequency on every
              tier) across any of{" "}
              <a href={SRC.otterlyEngines} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                seven engines
              </a>{" "}
              (ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot,
              Google AI Mode, Gemini and Claude), all available on every plan
              and paid for in monthly credits. It reports a Brand
              Visibility Index, domain ranking, link-citation analysis, and
              recommendations, plus, from Standard up, Agent Analytics for
              AI-referred traffic to your own site and a Looker Studio
              connector for custom reporting.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Standout feature:</strong>{" "}the
              credit model. Every engine is available on every plan, each
              answer uses credits, and a Claude answer counts as three. What
              wider coverage costs can be worked out from Otterly&rsquo;s own
              page, not a sales call.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it doesn&rsquo;t track:</strong>{" "}
              on-page fixes. The{" "}
              <a href={SRC.otterlyAudit} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                GEO Audit
              </a>{" "}
              is included on every plan, with no monthly cap published, but
              Otterly frames it as diagnostic output, not an applied
              optimization the way Scrunch&rsquo;s AXP is positioned. It
              isn&rsquo;t gated behind a paid tier either: Otterly&rsquo;s{" "}
              <a href={SRC.otterlyTrial} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                free trial
              </a>{" "}
              lists GEO audits with no limit. Each audit reports separate
              results (content analysis including static vs. dynamic
              rendering, readiness, and structured data) rather than the
              single 0-100 number Scrunch&rsquo;s Site Maps shows per page,
              which I saw directly on this site&rsquo;s own trial account.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}Lite $29/month
              (2,000 credits), Standard $189/month (15,000 credits), Premium
              $489/month (50,000 credits), Enterprise custom-priced from 1,000
              prompts. Otterly&rsquo;s table shows those credits as 20, 160 and
              535 prompts tracked daily on three engines; on four engines the
              same credits work out to about 16, 120 and 403. More engines means
              fewer prompts. Annual billing takes 15% off.
              Extra credit packs are $65/month for 5,000 on Standard and
              $99/month for 10,000 on Premium; Lite can&rsquo;t add any.{" "}
              <a href={SRC.otterly} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Otterly pricing
              </a>
              , read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Solo marketers
              and small teams who want to start cheap and scale by buying
              credits; agencies running AI
              visibility as a service across many client workspaces; brands
              in multiple countries from day one.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}Otterly is the
              more transparent and more affordable option at every tier it
              publishes. It stays a
              measurement tool throughout: excellent at telling you where you
              stand, silent on how to fix a page it flags.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Head to head" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>Scrunch vs Otterly: which is cheaper?</h3>
            <p style={{ marginBottom: 26 }}>
              Otterly, without qualification, at the entry tier: $29/month
              against Scrunch&rsquo;s $250/month minimum. Per prompt, on the
              same four engines Scrunch Core tracks, it is cheaper too:
              Otterly Standard works out to about $1.58 (roughly 120 prompts
              for $189, our calculation from its credits), Scrunch Core to
              $2.00 (125 for $250). Neither publishes an Enterprise number
              you can compare directly. Otterly used to state a $1,000/month
              floor; since October 2026 it has listed Enterprise as custom-priced,
              starting from 1,000 prompts, the same &ldquo;talk to us&rdquo;
              position as Scrunch.
            </p>

            <h3 style={h3Style}>Scrunch vs Otterly: tracking or fixing?</h3>
            <p style={{ marginBottom: 26 }}>
              This is the real fork. If the deliverable you want is a
              dashboard, both work, and Otterly gets you one for less money.
              If the deliverable includes changing what an AI agent actually
              receives when it crawls your page, Scrunch&rsquo;s Site Maps
              and AXP are built for that specifically (AXP on Enterprise);
              Otterly&rsquo;s GEO Audit measures the same territory but hands
              the fix back to you.
            </p>

            <h3 style={h3Style}>
              Scrunch vs Otterly: which is better for agencies?
            </h3>
            <p style={{ marginBottom: 26 }}>
              Otterly, on published features: unlimited workspaces from
              Standard ($189/month), a named Agency Partner tier with pitch
              workspaces and white-labeled Looker Studio reports, and
              consolidated billing across clients. Scrunch&rsquo;s Core plan
              includes exactly one brand workspace; running multiple clients
              means either separate Core subscriptions or a custom Enterprise
              deal. Scrunch does run an{" "}
              <a href={SRC.scrunchAgencies} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Agency Partner Program
              </a>
              , but doesn&rsquo;t publish per-client workspace pricing the way
              Otterly does.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="05"
              text="How these compare to the other tools already reviewed here"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Neither Scrunch nor Otterly is the only option; see the{" "}
              <Link href={PEEC_URL} style={linkStyle}>
                Peec vs Profound vs AirOps comparison
              </Link>{" "}
              for three more, and {" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the full list of AI visibility tools
              </Link>{" "}
              this site tracks. On the specific axis this post is built
              around, Scrunch&rsquo;s AXP sits closest to Profound&rsquo;s
              Agents (both act on findings rather than only reporting them),
              while Otterly&rsquo;s published, credit-based ladder has more in
              common with Peec&rsquo;s transparent, self-serve pricing than
              with Profound&rsquo;s Enterprise-only one.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </RevealSection>

          <RevealSection delay={0.08}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "40px 0 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 15.5,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Whichever tool you track with, it needs a baseline and a
                prioritized fix list to point at first. An{" "}
                <Link href={AUDIT_URL} style={linkStyle}>
                  AI visibility audit
                </Link>{" "}
                does that once, in writing, across six platforms, before you
                start paying monthly for a dashboard.
              </p>
            </div>
          </RevealSection>
        </div>
      </article>
    </>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

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
      columns={["Scrunch", "Otterly"]}
      rows={BEST_FOR_ROWS.map((r) => ({ label: r.label, values: [r.scrunch, r.otterly] }))}
    />
  );
}

function QuickComparisonTable() {
  return (
    <ComparisonTable
      caption={`Scrunch vs Otterly.AI, from each vendor's own pricing page, read ${DATE_VERIFIED_HUMAN}`}
      columns={["Scrunch", "Otterly"]}
      rows={QUICK_COMPARISON_ROWS.map((r) => ({ label: r.label, values: [r.scrunch, r.otterly] }))}
    />
  );
}
