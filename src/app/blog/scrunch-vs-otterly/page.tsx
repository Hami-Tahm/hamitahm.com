import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "scrunch-vs-otterly";

const ARTICLE_TITLE = "Scrunch vs Otterly.AI: Pricing & Fit (2026)";
const ARTICLE_DESCRIPTION =
  "Scrunch vs. Otterly.AI compared on pricing, AI-engine coverage, and what each is built to do, sourced from each vendor's own pricing page.";
const DATE_PUBLISHED = "2026-09-07";
const DATE_VERIFIED_HUMAN = "September 7, 2026";
const DATE_VERIFIED = "2026-09-07";

const SRC = {
  scrunch: "https://scrunch.com/pricing",
  otterly: "https://otterly.ai/pricing",
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
    otterly: "Best fit (50+ countries from Lite)",
  },
  {
    label: "Agency managing multiple clients",
    scrunch: "1 brand workspace on Core; custom Enterprise",
    otterly: "Best fit (unlimited workspaces + Agency Partner program)",
  },
  {
    label: "Fixing pages for AI crawlers, not just tracking",
    scrunch: "Best fit (Site Maps, AXP, Page Optimizations built in)",
    otterly: "Tracking-first; GEO URL Audits included but less central",
  },
  {
    label: "Enterprise, full 9-engine coverage",
    scrunch: "Engines included; price fully custom, none published",
    otterly: "Add-on engines priced per tier; Enterprise starts at $1,000/mo",
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
    otterly: "15 search prompts (Lite)",
  },
  {
    label: "Engines on the entry plan",
    scrunch: "ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot",
    otterly: "ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot",
  },
  {
    label: "Engines at the top tier",
    scrunch: "9 on Enterprise (adds Claude, Gemini, Meta AI, Google AI Mode, Grok)",
    otterly: "7 total; Claude, Gemini, Google AI Mode are paid add-ons at any tier",
  },
  {
    label: "Site technical audit",
    scrunch: "Site Maps: per-page 0-100 audit score, up to 25 pages on Core",
    otterly: "GEO URL Audits: 1,000/mo on Lite, 5,000 on Standard, 10,000 on Premium",
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
    otterly: "Published starting point: \"starting from $1,000/month\"",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Is Scrunch or Otterly cheaper?",
    a: "Otterly, at every published tier. Otterly's Lite plan is $29/month for 15 prompts, with no Scrunch equivalent below its $250/month Core plan. At comparable prompt volume the gap narrows: Otterly's Standard plan is $189/month for 100 prompts ($1.89/prompt) against Scrunch Core's $250/month for 125 prompts ($2.00/prompt), close enough that prompt cost alone shouldn't decide it. Figures read from both vendors' pricing pages on September 7, 2026.",
  },
  {
    q: "Do Scrunch and Otterly track the same AI engines?",
    a: "Their entry plans track the identical four: ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot. Past that, the paths differ. Otterly sells Claude, Gemini and Google AI Mode as priced add-ons on any tier (for example, Claude is $29/month extra on Lite, $109 on Standard, $439 on Premium), so you can see exactly what full coverage costs before buying. Scrunch bundles its full nine-engine list (adding Claude, Gemini, Meta AI, Google AI Mode and Grok) into Enterprise only, and Enterprise carries no published price at all.",
  },
  {
    q: "Which tool is better for an agency with multiple clients?",
    a: "Otterly, on what's published. Its Standard and Premium tiers include unlimited workspaces, and it runs an explicit Agency Partner program (per-client workspace management, pitch workspaces for prospects before they sign, white-labeled reporting via Looker Studio, consolidated billing). Scrunch's Core plan includes one brand workspace; multiple workspaces require the custom-priced Enterprise tier, and Scrunch's pricing page doesn't describe an agency-specific program the way Otterly's does.",
  },
  {
    q: "Does either tool actually fix AI visibility problems, or just track them?",
    a: "Scrunch goes further on the built-in-fix side: Site Maps scores every tracked page 0-100 on its own AI-accessibility audit, AXP (its Agent Experience Platform) serves an optimized version of pages to AI agents, and a basic content-generation feature is included from Core. Otterly is closer to Peec in this comparison series: strong on measurement (citations, share of voice, sentiment, domain ranking), with GEO URL Audits included but positioned as a diagnostic, not an on-page fix. Neither replaces a written, prioritized action plan built for your own site.",
  },
  {
    q: "Is paying for AI bot traffic tracking worth it, when Microsoft Clarity does this for free?",
    a: "Not for that feature alone. Microsoft Clarity launched an AI Bot Activity dashboard in January 2026 (reading real server logs from a connected CDN, not client-side JS) and added a robots.txt-violations layer in June 2026, both at Clarity's standard price of $0. That covers the same ground as the \"AI agent/bot traffic tracking\" checkbox on Scrunch's Core plan and Otterly's Agent Analytics feature: which AI crawlers are hitting your site and whether they're following robots.txt. What Clarity does not do is score individual pages for AI-readability or serve an optimized version of a page to an agent; that's Scrunch's Site Maps and AXP specifically, and Otterly's GEO URL Audits cover the diagnostic half without the serving part either. If bot-traffic visibility is the only thing you need, start with the free tool.",
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
  dateModified: "2026-09-08",
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
              Published September 7, 2026 &middot; every price and feature
              read from the vendors&rsquo; own pricing pages on{" "}
              {DATE_VERIFIED_HUMAN}.
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
                pricing ladder from $29/month, covers 50+ countries even on
                its cheapest plan, and runs a named agency program.{" "}
                <strong>Scrunch</strong>{" "}if the job includes fixing what AI
                crawlers see on your own pages, not just measuring it: site
                audits, an Agent Experience Platform and basic content
                generation are built in from its $250/month Core plan, at a
                price Otterly doesn&rsquo;t have an equivalent tier for.
                <br />
                <br />
                Both track the identical four engines on their entry
                plans. Coverage past that is priced two different ways:
                Otterly sells extra engines à la carte with a listed price
                per tier; Scrunch folds full coverage into an Enterprise plan
                with no published number at all.
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
              same four engines, a prompt-based pricing model, competitor
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
              crawls, paired with AXP (Agent Experience Platform), which
              serves an optimized version of a page to AI agents rather than
              only reporting a score. Neither Otterly nor the three tools in
              the companion Peec/Profound/AirOps comparison publish an
              equivalent on-page fix layer.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it doesn&rsquo;t include at
              Core:</strong>{" "}API access, MCP access, expanded model
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
              tier) across ChatGPT, Google AI Overviews, Perplexity and
              Microsoft Copilot, with Claude, Google AI Mode and Gemini
              available as priced add-ons on any plan. It reports a Brand
              Visibility Index, domain ranking, link-citation analysis, and
              recommendations, plus, from Standard up, Agent Analytics for
              AI-referred traffic to your own site and a Looker Studio
              connector for custom reporting.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Standout feature:</strong>{" "}the
              published, per-tier add-on pricing for extra engines. Wanting
              Claude tracking on the $29 Lite plan costs a stated $29/month
              more; wanting it on Premium costs $439/month more. Whatever the
              final number, it comes from Otterly&rsquo;s own page, not a
              sales call.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it doesn&rsquo;t track:</strong>{" "}
              on-page fixes. GEO URL Audits are included at meaningful volume
              (1,000/month even on Lite, up to 10,000 on Premium), but
              Otterly&rsquo;s own page frames these as diagnostic output, not
              an applied optimization the way Scrunch&rsquo;s AXP is
              positioned. Notably, this audit tool isn&rsquo;t gated behind a
              paid tier at all: the free trial itself includes 100 GEO URL
              Audits, each scoring a page on three separate axes (static vs.
              dynamic rendering, content analysis, structured data) rather
              than the single 0-100 number Scrunch&rsquo;s Site Maps shows per
              page, tested directly on this site&rsquo;s own trial account.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Pricing:</strong>{" "}Lite $29/month
              (15 prompts), Standard $189/month (100 prompts, &ldquo;Most
              Popular&rdquo;), Premium $489/month (400 prompts), Enterprise
              from $1,000/month. Annual billing takes 15% off any tier. Extra
              prompts can be added at $99/month per 100 on Standard and
              Premium.{" "}
              <a href={SRC.otterly} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Otterly pricing
              </a>
              , read {DATE_VERIFIED}.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Solo marketers
              and small teams who want to start cheap and scale by adding
              prompts and engines individually; agencies running AI
              visibility as a service across many client workspaces; brands
              in multiple countries from day one.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Verdict:</strong>{" "}Otterly is the
              more transparent and more affordable option at every tier it
              publishes, including its Enterprise starting price. It stays a
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
              against Scrunch&rsquo;s $250/month minimum. At matched prompt
              volume the gap narrows a lot: Otterly Standard is $1.89 per
              prompt (100 prompts for $189), Scrunch Core is $2.00 per
              prompt (125 for $250). Neither publishes an Enterprise number
              you can compare directly, though Otterly at least states a
              floor: &ldquo;starting from $1,000/month.&rdquo; Scrunch states
              none.
            </p>

            <h3 style={h3Style}>Scrunch vs Otterly: tracking or fixing?</h3>
            <p style={{ marginBottom: 26 }}>
              This is the real fork. If the deliverable you want is a
              dashboard, both work, and Otterly gets you one for less money.
              If the deliverable includes changing what an AI agent actually
              receives when it crawls your page, Scrunch&rsquo;s Site Maps
              and AXP are built for that specifically; Otterly&rsquo;s GEO
              URL Audits measure the same territory but hand the fix back to
              you.
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
              deal, and Scrunch&rsquo;s page doesn&rsquo;t describe an
              agency-specific structure the way Otterly&rsquo;s does.
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
              while Otterly&rsquo;s published per-engine add-on pricing has
              more in common with Peec&rsquo;s transparent, self-serve ladder
              than with Profound&rsquo;s tier-gated one.
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
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
        padding: "20px 16px",
        margin: "0 0 20px",
        fontFamily: "var(--sans)",
        fontSize: 13,
        overflowX: "auto",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--faint)",
          marginBottom: 14,
        }}
      >
        At a glance: best fit by situation
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 12,
          minWidth: 560,
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "var(--faint)",
          paddingBottom: 12,
          borderBottom: "1px solid var(--line)",
        }}
      >
        <span />
        <span>Scrunch</span>
        <span>Otterly</span>
      </div>
      {BEST_FOR_ROWS.map((row) => (
        <div
          key={row.label}
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr",
            gap: 12,
            minWidth: 560,
            padding: "14px 0",
            borderBottom: "1px solid var(--line)",
            alignItems: "start",
          }}
        >
          <span style={{ color: "var(--ink)", fontWeight: 600 }}>{row.label}</span>
          <span style={{ color: "var(--muted)" }}>{row.scrunch}</span>
          <span style={{ color: "var(--muted)" }}>{row.otterly}</span>
        </div>
      ))}
    </div>
  );
}

function QuickComparisonTable() {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
        padding: "24px 16px",
        margin: "0 0 26px",
        fontFamily: "var(--sans)",
        fontSize: 13,
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr 1fr",
          gap: 12,
          minWidth: 560,
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "var(--faint)",
          paddingBottom: 12,
          borderBottom: "1px solid var(--line)",
        }}
      >
        <span />
        <span>Scrunch</span>
        <span>Otterly</span>
      </div>
      {QUICK_COMPARISON_ROWS.map((row) => (
        <div
          key={row.label}
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gap: 12,
            minWidth: 560,
            padding: "14px 0",
            borderBottom: "1px solid var(--line)",
            alignItems: "start",
          }}
        >
          <span style={{ color: "var(--ink)", fontWeight: 600 }}>{row.label}</span>
          <span style={{ color: "var(--muted)" }}>{row.scrunch}</span>
          <span style={{ color: "var(--muted)" }}>{row.otterly}</span>
        </div>
      ))}
    </div>
  );
}
