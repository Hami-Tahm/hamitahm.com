import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";

const SLUG = "how-to-check-ai-visibility";
/*
 * Title shortened: 2026-08-24
 *
 * It was 84 characters, and the root layout appends " | Hami Tahm" on top of that.
 * Google truncates around 60 rendered characters, so the ": Plus One That Doesn't Work"
 * part (the only interesting part) was never visible to anyone. A hook nobody reads is
 * not a hook. It has moved into the description, which has room for it.
 *
 * This page sits at position 22.5 on 7,706 impressions with 3 clicks. At that
 * position the title is doing almost all of the work, and a truncated one does none.
 *
 * ⚠️ This page owns the "how to check" phrasing ONLY. Singular checker intent
 * belongs to /ai-visibility/ai-visibility-checker/ (position 19.9, and it captures
 * the lead); "best tools / software" belongs to /blog/best-ai-visibility-tools/.
 * See the note at the top of that file for the three-way split and why it exists.
 */
const ARTICLE_TITLE =
  "How to Check AI Visibility: 7 Free Methods";
const ARTICLE_DESCRIPTION =
  "Seven free and freemium ways to check whether AI engines mention your brand: what each one actually measures, where each falls short, and one widely confused analytics tool that does not do this job at all.";
const DATE_PUBLISHED = "2026-06-09";
// Tool features, pricing and platform availability in this space change monthly.
// This is the date every product description below was last checked against the
// vendor's own documentation. Bump it whenever you re-verify, not when you edit prose.
const DATE_FACT_CHECKED = "2026-08-11";
const DATE_MODIFIED = "2026-08-26";
// 2026-08-26: added a "track it yourself" section (a copyable log template
// + prompt-coverage/share-of-voice/sentiment definitions) and a link to the
// full sample report, so the page hands the reader something usable instead
// of only describing tools. Also fixed a duplicate "04" section number bug
// (two sections both read 04; now 04-07 in order).
//
// Title deliberately NOT changed to anything containing "AI Visibility
// Checker": that phrase is already owned by /ai-visibility/ai-visibility-
// checker/ (see the note above ARTICLE_TITLE). Retitling this page to match
// would cannibalize the exact split that was deliberately built.
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const CHATGPT_URL = "/blog/how-to-get-mentioned-by-chatgpt/";
const PERPLEXITY_URL = "/blog/how-to-get-cited-by-perplexity/";

const FAQ_ITEMS = [
  {
    q: "Is there a free AI visibility checker?",
    a: "Yes, several. Google Search Console's Generative AI performance report, Semrush's free visibility baseline, Wix's AI Visibility Overview for eligible sites, Ubersuggest, and manual ChatGPT and Perplexity checks are all free or freemium. The limitation is depth rather than absence: free tiers sample prompts, vary in platform coverage and history, and no automated score can confirm that what an AI says about you is factually correct.",
  },
  {
    q: "Does Semrush check ChatGPT visibility?",
    a: "Yes. Semrush's AI Visibility Toolkit and Semrush One monitor brand mentions and citations across ChatGPT and other AI platforms. Free accounts get a more limited high-level view; custom prompt tracking and deeper analysis require a paid subscription.",
  },
  {
    q: "How accurate are free AI visibility tools?",
    a: "They're accurate for what they measure, but narrow. Platform-specific tools reliably detect AIO appearances on that one platform. What they miss (cross-platform coverage, citation accuracy, competitor comparison) is often the most strategically important information.",
  },
  {
    q: "Can I check my Perplexity visibility for free?",
    a: "Yes, manually. Run your core queries in Perplexity and observe whether your site is cited. Perplexity shows its sources explicitly, making manual auditing relatively transparent. Eligible Wix users can also monitor Perplexity inside Wix's AI Visibility Overview, and some third-party tools offer limited or paid Perplexity tracking.",
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
              How to check your AI visibility:{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                7 free and freemium methods.
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
              Search Console, Semrush, Wix, manual ChatGPT and Perplexity checks:
              what each one measures, where each falls short, and one tool
              everyone mistakes for a visibility checker.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 9, 2026" readTime="14 min read" />
            {/*
              This category changes monthly: Semrush added cross-platform coverage
              and Google shipped a Generative AI report after this post first ran.
              A visible re-verification date is the cheapest way to stop the article
              quietly rotting, and to let a reader judge how stale it might be.
            */}
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginTop: 10,
              }}
            >
              Last fact-checked: August 11, 2026
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
                <strong>Rather have an expert check it?</strong>{" "}Fill out this
                short form, and I&rsquo;ll send you your AI visibility report
                within one business day. It&rsquo;s free.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-checker/"
                className="btn btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                Get my free AI visibility check{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          <RevealSection>
            {/*
              Was the same bordered card as the CTA panel right above it (same
              background/border/border-left/radius), so the two fought for attention
              back to back. Restyled 2026-08-30 to a quieter inline callout, distinct
              from plain body copy but no longer competing with the CTA card for the
              eye: no background, no box border, just a thin rule and a label.
            */}
            <div
              style={{
                borderLeft: "2px solid var(--line-strong)",
                paddingLeft: 20,
                margin: "6px 0 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 8,
                }}
              >
                In short
              </div>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: 17,
                  color: "var(--muted)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Free checkers show you a signal, not a picture. Each covers one
                or two platforms. Coverage, prompt samples, history and
                response-level detail vary a lot between them.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Several free and freemium tools claim to check your AI visibility,
              from Semrush and Wix to manual Perplexity and ChatGPT queries. Below
              is what each one actually measures, what it leaves out, and whether
              the output is something you can act on. Some now include competitor
              comparisons and brand-perception analysis, so the old line that
              &ldquo;free tools only detect AI Overviews&rdquo; is out of date. What
              remains true: no free option gives you exhaustive, reproducible
              coverage across every platform, model, location and user context.
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
                different category: see{" "}
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
              AI visibility is how often, and how accurately, your brand appears
              in AI-generated answers across platforms like ChatGPT, Perplexity,
              <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Google AI Overviews</a>, and Gemini. It&rsquo;s not the same as SEO
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
            <SectionLabel number="02" text="How I evaluated these" />
          </RevealSection>

          <RevealSection delay={0.04}>
            <p style={{ marginBottom: 26 }}>
              Worth being precise about what this article is, because &ldquo;I
              tested N tools&rdquo; posts rarely say. These write-ups come from
              hands-on use of the free tiers plus each vendor&rsquo;s current
              product documentation, not from a controlled study with a
              fixed sample of sites and prompts. Where a feature sits behind a paid
              plan or was not available to my account, I say so rather than
              describing it as though I had used it.
            </p>
            <p style={{ marginBottom: 26 }}>
              That matters because AI answers are variable by design. The same
              prompt can return different results by model, location, account
              history and time of day, so anything here should be read as a
              point-in-time observation rather than a benchmark. If you want a
              number you can defend, run the checks yourself and record the model,
              search mode, location and date each time.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="03"
              text="7 free and freemium AI visibility checkers"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Which one fits depends on the platform you need to monitor and how
              much time you have.
            </p>

            <h3 style={h3Style}>Semrush AI Visibility</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Semrush now spans several AI visibility
              features. Free accounts get a high-level visibility baseline in Domain
              Overview and can track Google AI Overview appearances through Position
              Tracking. Semrush One and the paid AI Visibility Toolkit add monitoring
              across ChatGPT, Gemini, Perplexity, Google AI Mode and AI Overviews,
              including mentions, citations, sentiment, prompt research and competitor
              comparison.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}The free features are enough to establish a
              directional baseline; the paid toolkit is where the cross-platform view
              lives. Either way the output depends on Semrush&rsquo;s prompt database
              or the custom prompts you choose to track, so treat the score as a
              sample, not as coverage of everything real users ask.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}The free tier does not give you the depth,
              history or custom prompt tracking of the paid toolkit. And like every
              third-party tracker, it samples AI responses; it cannot promise that
              every user sees the same answer you do.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Teams that want SEO and AI visibility in one
              platform: a usable free baseline, with deeper monitoring behind
              the paid plan.{" "}
            <a href="https://www.semrush.com/kb/1626-ai-visibility-features" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Semrush AI Visibility documentation</a>
            </p>

            <h3 style={h3Style}>Ubersuggest AI Search Visibility</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Ubersuggest runs relevant prompts across AI
              platforms including ChatGPT and Gemini, aggregates the responses, and
              reports brand visibility, industry rank, top prompts and competitor
              visibility trends. Its traditional rank tracking can also flag Google AI
              Overview appearances separately.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}Broader than a plain AI Overview detector. The
              real value is the pattern across repeated prompts, particularly
              the questions where a competitor shows up and you do not.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}The prompts are generated or selected
              samples, not a log of what real users actually typed. Access, limits,
              platform coverage and history vary by plan, and results carry the usual
              AI-response variability.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Small businesses and SEO teams that want keyword
              research and AI visibility in the same product.{" "}
            <a href="https://neilpatel.com/blog/ubersuggest-ai-visibility-features/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Ubersuggest AI Visibility</a>
            </p>

            <h3 style={h3Style}>Wix AI Visibility Overview</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Wix generates a set of likely customer
              questions from your site description, URL and business name, then checks
              whether the site is mentioned or cited across ChatGPT, Gemini, Perplexity
              and Claude. Depending on availability the dashboard can show the full AI
              response, the cited sources, where the mention sits, brand perception,
              competitor visibility, AI-referred traffic and AI-bot activity.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}Far more than an AI-traffic dashboard. The
              response-level and competitor views make it one of the more complete
              native options available to an eligible site.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}Wix sites only. The generated questions are
              plausible prompts, not verified user-query data, and results can differ
              from running the same question directly on the platform. Wix also needs
              enough site traffic before it will show the report at all.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Wix owners who want multi-platform visibility,
              citation, perception and traffic data without adding another tool.{" "}
            <a href="https://support.wix.com/en/article/ai-visibility-overview" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Wix AI Visibility Overview</a>
            </p>

            <h3 style={h3Style}>Manual ChatGPT Query Method</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Running your
              core queries directly in ChatGPT (once with Search
              explicitly selected and once without) to see whether your brand
              comes up, what it says, and whether the description is accurate.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}This is the most
              direct way to inspect what ChatGPT returns in your own account and
              session, but it is an observational sample, not universal ground
              truth. Responses generated with visible web search and those generated
              without it often differ, so run both. Use a Temporary Chat and record
              the model, date, location and at least three repeats; ChatGPT may search
              the web on its own, and memory can shape the answer. The limit is scale:
              manual checks cover 10&ndash;20 queries, not hundreds.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}No tracking over
              time. No competitor comparison. Time-intensive at any meaningful
              scale. Results can vary by session: ChatGPT&rsquo;s responses
              aren&rsquo;t perfectly consistent.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Any business that wants
              a first-hand look at what ChatGPT says about them right now, in one
              account and one session.
              The fastest first check. See also:{" "}
              <Link href={CHATGPT_URL} style={linkStyle}>
                how to get mentioned by ChatGPT
              </Link>
              .
            </p>

            <h3 style={h3Style}>Manual Perplexity Query Method</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Running your
              core queries in Perplexity to check whether your site is cited,
              which pages are pulled, and what text is extracted and displayed
              alongside your citation.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}Perplexity is the
              most transparent platform to audit manually. It shows its sources
              explicitly: you can see which exact pages are cited, what text was
              extracted, and how your brand is described in the synthesized
              answer. That level of visibility makes it easier to identify
              inaccuracies than any other platform.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}Same limitations
              as ChatGPT manual: no scale, no historical tracking, no competitor
              comparison. Perplexity Pro shows fuller source attribution on some
              queries; free accounts see limited source data.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Anyone who wants to
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
              <strong style={labelStyle}>What it checks:</strong>{" "}Running queries
              in Google (in an incognito window) to observe whether an AI Overview
              appears and whether your site is cited within it.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}Reliable for
              individual query checks. Incognito reduces the influence of account
              and browser history, but it does not produce a universal
              &ldquo;cold user&rdquo; result; Google still varies answers by
              location, language, device and current search context. AI Overview
              activation also varies by query type: higher for informational queries,
              lower for commercial and navigational ones. Reading the text directly is
              what lets you catch accuracy problems.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}No systematic
              tracking. AIO inclusion changes frequently. What you see today may
              differ from what a buyer sees in a week. This method is a
              point-in-time snapshot, not a monitoring system.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Quick manual checks on
              high-priority queries. Best combined with <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Google Search Console</a> for
              scale and historical data.
            </p>

            <h3 style={h3Style}>Why Amplitude is not an AI visibility checker</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Amplitude is a
              product analytics platform, not an AI visibility checker in the
              brand citation sense. If you&rsquo;ve searched for &ldquo;Amplitude
              AI visibility,&rdquo; you&rsquo;re likely looking for one of two
              things: Amplitude&rsquo;s AI-powered analytics features (which help
              analyze user behavior and product data), or its attribution tools for
              tracking which traffic sources (including AI-referred traffic)
              convert in your product.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}Amplitude
              doesn&rsquo;t offer a standalone checker for brand citations in
              Google AI Overviews, ChatGPT, Gemini, or Claude. It&rsquo;s a behavioral
              analytics platform. If you&rsquo;re trying to track AI-referred
              traffic in your conversion funnel after users arrive, Amplitude can
              help, but that&rsquo;s a different layer than checking whether
              you&rsquo;re being cited in the first place.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}It&rsquo;s not
              designed for this job. Amplitude measures what happens on your site
              after users arrive. AI visibility is about whether they find you
              through AI search before they arrive.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Product and conversion
              analytics downstream. For AI citation visibility, use the other
              tools in this list.
            </p>

            <h3 style={h3Style}>
              Google Search Console: Generative AI performance report
            </h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it checks:</strong>{" "}Google is rolling out a dedicated
              Generative AI performance report to eligible Search Console properties.
              It reports impressions for links shown in Google AI Overviews and AI
              Mode, broken down by page, country, date and device. That activity is
              also folded into the wider Web search totals.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What I found:</strong>{" "}This is the most authoritative first-party
              source for aggregate visibility inside Google&rsquo;s generative
              surfaces, and it is genuinely underused. It is not, however, a
              query-level citation tracker.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>What it misses:</strong>{" "}Impressions only. Opening this report on
              one of my own properties on {DATE_FACT_CHECKED}, the only metric
              offered was Total impressions: no clicks, no CTR, no average
              position, and no query breakdown. An earlier version of this article
              described a &ldquo;Search type: AI Overviews&rdquo; filter showing
              impressions and clicks; that is not what the report currently provides,
              and the claim has been corrected. It also will not show you the answer
              itself or why a page appeared, and availability is still limited while
              the rollout continues.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Best for:</strong>{" "}Aggregate, first-party impression trends across
              AI Overviews and AI Mode. Set it up first, but pair it with
              manual checks, because it cannot audit an individual prompt.{" "}
              <a href="https://support.google.com/webmasters/answer/16984139?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontWeight: 500 }}>Google&rsquo;s documentation on the report</a>
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Track it yourself: a simple log" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Every method above answers one question at a time. The useful
              signal is what happens when you repeat the same prompts on a
              schedule and log the results yourself: that&rsquo;s what turns
              a one-off check into an actual visibility picture. A simple
              spreadsheet with these columns is enough to start:
            </p>
            <div
              style={{
                overflowX: "auto",
                margin: "0 0 20px",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--sans)",
                  fontSize: 14.5,
                }}
              >
                <thead>
                  <tr style={{ background: "var(--panel)" }}>
                    {["Prompt", "Engine", "Date", "Mentioned?", "Position", "Competitor named instead", "Notes"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "10px 12px",
                            borderBottom: "1px solid var(--line-strong)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                      &ldquo;best [your category] in [your city]&rdquo;
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>ChatGPT</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>2026-08-26</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Y / N</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>1st / 2nd / …</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>who, if not you</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>anything inaccurate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginBottom: 26 }}>
              Run the same 10&ndash;15 prompts across the platforms that
              matter to your business, on a fixed schedule (weekly is enough
              for most businesses), and three numbers fall out of the log
              without any tool:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Prompt coverage:</strong>{" "}the share of your prompts where you show up
              at all, mentioned or not.{" "}
              <strong style={labelStyle}>Share of voice:</strong>{" "}of the prompts where <em style={{ fontStyle: "italic" }}>any</em>{" "}
              brand gets named, how often it&rsquo;s you versus a competitor.{" "}
              <strong style={labelStyle}>Sentiment:</strong>{" "}not a score, just a Y/N read on whether the
              description is accurate and favorable, since that&rsquo;s the
              one thing no automated tool can verify for you.
            </p>
            <p style={{ marginBottom: 26 }}>
              This is exactly the raw material a professional audit
              formalizes and scales. See a{" "}
              <Link href="/ai-visibility/sample-report/" style={linkStyle}>
                full sample report
              </Link>{" "}
              to see what the same log looks like run at 30 prompts across
              six engines with the analysis done for you.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="What free checkers miss" />
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
              Free and freemium checkers give you a signal, not a complete
              picture. The gaps are narrower than they were a year ago, but
              they are still gaps.
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              Four limits show up across the free tiers:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Platform coverage.</strong>{" "}Free tiers generally give you less
              platform coverage, prompt volume or history than the paid plans above
              them, though Wix and some freemium products now reach several AI
              platforms, so this is no longer the flat &ldquo;one or two platforms&rdquo;
              limit it once was.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Accuracy.</strong>{" "}Some tools now expose the full response,
              the citations, even brand perception. What no automated score can do is
              decide whether every statement made about your brand is factually
              correct. That still needs a human reading the answers.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Competitor context.</strong>{" "}Wix, Ubersuggest and the paid Semrush
              products do surface competitors. The limit is depth and customisation
              (which competitors, on which prompts, over what period),
              not the complete absence it used to be.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Actionable fixes.</strong>{" "}Several products offer recommendations
              or flag prompt gaps. None can reliably prove <em style={{ fontStyle: "italic" }}>why</em>{" "}
              an AI system included or excluded a brand, because the systems
              themselves do not publish that.
            </p>
            <p style={{ marginBottom: 26 }}>
              If you need cross-platform coverage (ChatGPT, Perplexity, Google
              AIO, and Gemini) with accuracy checking, competitor gap analysis,
              and a prioritized fix plan, that&rsquo;s what a professional audit
              delivers.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel
              number="06"
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
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                color: "var(--faint)",
                lineHeight: 1.65,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px solid var(--line)",
              }}
            >
              <strong style={{ color: "var(--muted)", fontWeight: 600 }}>
                Disclosure:
              </strong>{" "}
              This article is educational and also describes a service I sell. Tool
              features, pricing and platform availability change frequently; every
              product description above was last verified on {DATE_FACT_CHECKED}.
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
                <strong style={{ fontWeight: 700 }}>
                  Free checkers show a signal.
                </strong>{" "}
                <span style={{ fontWeight: 400 }}>
                  An audit shows the picture.
                </span>
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
                mapping, and a prioritized action plan.
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
                Get an audit by an expert
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
        The audit covers Google AI Overviews, ChatGPT, and Gemini,
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
