import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "how-to-check-ai-visibility";
const ARTICLE_TITLE =
  "I Tested 8 Free AI Visibility Checkers — Results";
const ARTICLE_DESCRIPTION =
  "Free AI visibility checkers exist — but they measure different things. I tested 8 of them on real sites to show you what each actually finds, what they miss, and when a professional audit is worth it instead.";
const DATE_PUBLISHED = "2026-06-09";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const CHATGPT_URL = "/blog/how-to-get-mentioned-by-chatgpt/";
const PERPLEXITY_URL = "/blog/how-to-get-cited-by-perplexity/";

const FAQ_ITEMS = [
  {
    q: "Is there a free AI visibility checker?",
    a: "Yes — several. Google Search Console's AIO performance filter, Semrush's AI Overviews tracking, manual ChatGPT and Perplexity queries, and Ubersuggest's AIO detection are all free or partially free. The limitation: each covers only one or two platforms, and none checks whether what AI says about you is accurate.",
  },
  {
    q: "Does Semrush check ChatGPT visibility?",
    a: "No. Semrush's AI visibility features track Google AI Overviews only. ChatGPT, Perplexity, and Gemini are not currently covered by Semrush's platform.",
  },
  {
    q: "How accurate are free AI visibility tools?",
    a: "They're accurate for what they measure, but narrow. Platform-specific tools reliably detect AIO appearances on that one platform. What they miss — cross-platform coverage, citation accuracy, competitor comparison — is often the most strategically important information.",
  },
  {
    q: "Can I check my Perplexity visibility for free?",
    a: "Yes — manually. Run your core queries in Perplexity and observe whether your site is cited. Perplexity shows its sources explicitly, making manual auditing relatively transparent. There's no automated free tool that tracks Perplexity citation frequency at scale.",
  },
  {
    q: "What's the difference between a free AI visibility checker and a professional audit?",
    a: "Free checkers give you a one-platform snapshot with no context on accuracy, competitors, or what to fix. A professional audit covers all major AI platforms, checks what AI is actually saying about you, identifies competitor gaps, and delivers a prioritized action plan.",
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

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

export default function HowToCheckAIVisibilityPost() {
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
            <span>How to Check AI Visibility</span>
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
              I tested 8 free AI visibility checkers —{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                here&rsquo;s what each actually found.
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
              Semrush, Search Console, manual ChatGPT queries, and five more —
              what each measures, what they miss, and when an audit is worth it.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 9, 2026" readTime="14 min read" />
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
                padding: "22px 24px",
                marginBottom: 34,
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--sans)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--ink)",
                  maxWidth: "46ch",
                }}
              >
                <strong>Rather not check by hand?</strong> Pick your engines and
                keywords and a real analyst emails your AI visibility report &mdash;
                free, within one business day.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-checker/"
                className="btn btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                Run the free AI Visibility Check{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
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
                Free checkers show you a signal, not a picture. Each covers one
                or two platforms — none checks accuracy, competitor gaps, or
                what to fix.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              There are several free tools that claim to check your AI
              visibility — from Semrush&rsquo;s AI search visibility feature to
              manual Perplexity and ChatGPT queries. I tested them across real
              sites to see what each actually measures, what gaps they leave,
              and whether the results are actionable. Short version: free
              checkers show you a signal, not a picture. Here&rsquo;s what each
              one found — and where each falls short.
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
                This post covers free, one-off checkers. If you&rsquo;re looking
                for paid ongoing AI visibility tracking platforms, that&rsquo;s a
                different category — see{" "}
                <Link href={TOOLS_URL} style={linkStyle}>
                  the best AI visibility tools
                </Link>{" "}
                instead.
              </em>
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="01"
              text='What "AI visibility" means before you check it'
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              AI visibility is how often — and how accurately — your brand appears
              in AI-generated answers across platforms like ChatGPT, Perplexity,
              Google AI Overviews, and Gemini. It&rsquo;s not the same as SEO
              rankings, and it can&rsquo;t be measured with the same tools. For a
              full definition, see{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>
              .
            </p>
            <p style={{ marginBottom: 26 }}>
              The challenge with free checkers: AI visibility spans multiple
              platforms, each with different retrieval mechanisms. Most free tools
              cover one. That&rsquo;s where the gaps start.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="02"
              text="The 8 free AI visibility checkers I tested"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The best AI visibility checker for your situation depends on which
              platform you&rsquo;re trying to monitor and how much time you have.
              Here&rsquo;s what I found across all eight.
            </p>

            <h3 style={h3Style}>Semrush AI Search Visibility Checker</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}
              Semrush&rsquo;s Position Tracking tool includes an AI Overviews
              column showing whether your tracked keywords trigger a Google AI
              Overview — and whether your domain appears in it. Free accounts get
              limited keyword tracking; Semrush Pro unlocks full coverage.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> For keyword sets
              with informational intent, Semrush surfaced AIO presence accurately,
              matching what I observed manually in Google. The data is
              query-level: you can see which specific keywords trigger an AIO and
              whether your site is cited. That&rsquo;s genuinely useful for SEO
              teams already working inside Semrush.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> Google AI
              Overviews only. ChatGPT, Perplexity, Gemini, and Bing Copilot are
              not tracked. The tool shows whether you appear — not what the AIO
              says about you. Accuracy checking is absent. No competitor gap view
              on the free tier.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Existing Semrush users
              who want Google AIO inclusion data layered onto their current
              keyword tracking workflow.
            </p>

            <h3 style={h3Style}>Ubersuggest AI Search Visibility</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Ubersuggest has
              added AI Overview detection to its rank tracking. For keywords
              you&rsquo;re monitoring, it flags whether a Google AI Overview
              appeared in results.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> Ubersuggest&rsquo;s
              AIO detection is functional but less granular than Semrush. It shows
              whether an AI Overview was present for a query — but doesn&rsquo;t
              tell you whether your site was specifically cited in it. That&rsquo;s
              a critical gap: an AIO present does not mean you&rsquo;re in it.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> No citation
              attribution — you can&rsquo;t tell from Ubersuggest alone whether
              you&rsquo;re actually being cited or just nearby. No Perplexity,
              ChatGPT, or Gemini coverage. Accuracy not addressed.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Ubersuggest users who
              want a rough signal on how often AI Overviews appear for their
              tracked keywords — not for checking whether they&rsquo;re cited.
            </p>

            <h3 style={h3Style}>Wix AI Visibility Overview</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Wix offers an AI
              Visibility Overview dashboard in its site analytics for Wix-hosted
              sites. It shows how often your content is referenced by AI platforms
              based on Wix&rsquo;s internal tracking layer and AI-driven traffic
              patterns.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> For Wix sites with
              real traffic, the dashboard surfaces useful data on AI-attributed
              visits and content referrals. The framing is more analytics-oriented
              than audit-oriented — it shows you what arrived, not whether
              you&rsquo;re being cited for specific queries.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> Only available on
              Wix-hosted sites. Platform coverage is limited. Doesn&rsquo;t show
              citation accuracy or competitor gaps. No actionable fix
              recommendations.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Wix site owners who
              want a quick AI traffic overview from inside their existing
              dashboard. Not usable if you&rsquo;re not on Wix.
            </p>

            <h3 style={h3Style}>Manual ChatGPT Query Method</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Running your
              core queries directly in ChatGPT — with Browse enabled and without
              — to see whether your brand is mentioned, what it says, and how
              accurate the description is.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> This is the most
              accurate ChatGPT-specific check available. It shows you exactly what
              ChatGPT generates about your brand in real time. Browse mode and
              training-data responses often differ — testing both is essential.
              The limitation is scale: manual testing covers 10-20 queries, not
              hundreds.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> No tracking over
              time. No competitor comparison. Time-intensive at any meaningful
              scale. Results can vary by session — ChatGPT&rsquo;s responses
              aren&rsquo;t perfectly consistent.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Any business that wants
              a ground-truth snapshot of what ChatGPT says about them right now.
              The fastest first check, and the most honest one. See also:{" "}
              <Link href={CHATGPT_URL} style={linkStyle}>
                how to get mentioned by ChatGPT
              </Link>
              .
            </p>

            <h3 style={h3Style}>Manual Perplexity Query Method</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Running your
              core queries in Perplexity to check whether your site is cited,
              which pages are pulled, and what text is extracted and displayed
              alongside your citation.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> Perplexity is the
              most transparent platform to audit manually. It shows its sources
              explicitly — you can see which exact pages are cited, what text was
              extracted, and how your brand is described in the synthesized
              answer. That level of visibility makes it easier to identify
              inaccuracies than any other platform.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> Same limitations
              as ChatGPT manual — no scale, no historical tracking, no competitor
              comparison. Perplexity Pro shows fuller source attribution on some
              queries; free accounts see limited source data.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Anyone who wants to
              understand not just whether they&rsquo;re cited, but which specific
              pages are being pulled and what content is being extracted from
              them. See also:{" "}
              <Link href={PERPLEXITY_URL} style={linkStyle}>
                how to get cited by Perplexity
              </Link>
              .
            </p>

            <h3 style={h3Style}>Manual Google AI Overviews Method</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Running queries
              in Google (in an incognito window) to observe whether an AI Overview
              appears and whether your site is cited within it.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> Reliable for
              individual query checks. Incognito mode reduces personalization
              bias — what you see is closer to what a cold user sees. AIO
              activation varies by query type: high for informational queries,
              lower for commercial and navigational ones. Reading the AIO text
              directly lets you catch accuracy issues.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> No systematic
              tracking. AIO inclusion changes frequently. What you see today may
              differ from what a buyer sees in a week. This method is a
              point-in-time snapshot, not a monitoring system.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Quick manual checks on
              high-priority queries. Best combined with Google Search Console for
              scale and historical data.
            </p>

            <h3 style={h3Style}>Amplitude AI Visibility</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Amplitude is a
              product analytics platform — not an AI visibility checker in the
              brand citation sense. If you&rsquo;ve searched for &ldquo;Amplitude
              AI visibility,&rdquo; you&rsquo;re likely looking for one of two
              things: Amplitude&rsquo;s AI-powered analytics features (which help
              analyze user behavior and product data), or its attribution tools for
              tracking which traffic sources — including AI-referred traffic —
              convert in your product.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> Amplitude
              doesn&rsquo;t offer a standalone checker for brand citations in
              ChatGPT, Perplexity, or Google AI Overviews. It&rsquo;s a behavioral
              analytics platform. If you&rsquo;re trying to track AI-referred
              traffic in your conversion funnel after users arrive, Amplitude can
              help — but that&rsquo;s a different layer than checking whether
              you&rsquo;re being cited in the first place.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> It&rsquo;s not
              designed for this job. Amplitude measures what happens on your site
              after users arrive. AI visibility is about whether they find you
              through AI search before they arrive.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Product and conversion
              analytics downstream. For AI citation visibility, use the other
              tools in this list.
            </p>

            <h3 style={h3Style}>
              Google Search Console (AIO Performance Data)
            </h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong> Google Search
              Console now surfaces AI Overviews data in its Performance reports.
              You can filter by &ldquo;Search type: AI Overviews&rdquo; to see
              impressions and clicks from AIO-featured results specifically — for
              queries where your site was cited.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong> This is the most
              underused free AI visibility tool available — and the most
              authoritative for Google AI Overviews. Unlike third-party tools that
              estimate AIO presence, Search Console shows actual impression and
              click data from Google for queries where your site was specifically
              included. It&rsquo;s real data, not an approximation.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong> Google AI
              Overviews only — ChatGPT, Perplexity, and Gemini are not covered.
              The AIO data filter is still rolling out and may not be available in
              all accounts yet. You can see that you were cited, but not what the
              AIO said — you&rsquo;d need to run the query manually for that.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong> Every site owner. Set
              this up first. If you&rsquo;re only going to use one free method,
              start with Search Console — the data is authoritative, free, and
              already available if you&rsquo;re verified.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="What free checkers miss" />
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
              Free AI visibility checkers show you a signal, not a complete
              picture — they check one or two platforms but miss accuracy issues,
              competitor gaps, and actionable fixes.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              Across all eight tools, four gaps came up consistently:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Platform coverage.</strong> Every free
              tool covers at most one or two platforms. Your buyers may be asking
              questions across ChatGPT, Perplexity, Gemini, and Google AIO
              simultaneously — and free tools give you no view into most of them.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Accuracy.</strong> Free tools show whether
              you appear. They don&rsquo;t check what AI says about you. A citation
              that gets your specialty, location, or positioning wrong
              isn&rsquo;t a win — it&rsquo;s a problem you don&rsquo;t know you
              have.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Competitor gaps.</strong> None of the free
              tools show where competitors are being cited that you&rsquo;re not.
              That&rsquo;s often the most actionable insight: knowing which queries
              you&rsquo;re losing.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Actionable fixes.</strong> Free tools
              surface the presence or absence. They don&rsquo;t explain why
              you&rsquo;re absent or what to change. The signal is useful. The
              roadmap requires analysis.
            </p>
            <p style={{ marginBottom: 26 }}>
              If you need cross-platform coverage — ChatGPT, Perplexity, Google
              AIO, and Gemini — with accuracy checking, competitor gap analysis,
              and a prioritized fix plan, that&rsquo;s what a professional audit
              delivers.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="04"
              text="When a professional AI visibility audit is worth it"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              A professional audit makes sense when:
            </p>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;re losing business to competitors who appear in AI answers
                and you don&rsquo;t
              </li>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;re being cited, but AI platforms are describing your
                business inaccurately
              </li>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;ve made technical or content changes and want to measure
                their actual effect
              </li>
              <li style={{ marginBottom: 11 }}>
                You&rsquo;re entering a new market and need to establish AI
                presence strategically
              </li>
            </ul>
            <p style={{ marginBottom: 26 }}>
              Free checkers are a starting point. An audit is a decision tool.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Frequently asked questions" />
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
              strategy framework, see the hub. For paid ongoing tracking software,
              see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the best AI visibility tools
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
                href={DEFINITION_URL}
                title="What Is AI Visibility?"
                tag="Basics"
              />
              <KeepReadingLink
                href={TOOLS_URL}
                title="Best AI Visibility Tools"
                tag="Tools"
              />
              <KeepReadingLink
                href="/blog/ai-visibility-tools-vs-audit/"
                title="AI Visibility Tools vs. Audit"
                tag="Tools"
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
                Free checkers show a signal. An audit shows the picture.
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
                Cross-platform citation analysis, accuracy review, competitor gap
                mapping, and a prioritized action plan. $1,500 CAD flat.
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
        Need cross-platform coverage?
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
        The audit covers ChatGPT, Perplexity, Google AI Overviews, and Gemini —
        with platform-specific citation analysis, accuracy review, competitor gap
        mapping, and a prioritized action plan.
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
