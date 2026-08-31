import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";
import { getAuditPricing } from "@/lib/currency";
import { HAMITAHM_BENCHMARK } from "@/lib/otterly-hamitahm-benchmark";

const SLUG = "hamitahm-ai-visibility-benchmark";
const ARTICLE_TITLE =
  "Hami Tahm vs. Canada's AI Visibility Agencies: A 39-Prompt AI Search Benchmark";
const ARTICLE_DESCRIPTION =
  "I ran my own methodology on my own name. hamitahm.com is the single most-cited domain across a 39-prompt panel of 1,046 competing domains, ahead of every named AI visibility agency's own site, but AI still names someone else as the recommendation almost every time. Full data, full method, and the honest gap.";
const DATE_PUBLISHED = "2026-08-31";
const HUB_URL = "/ai-visibility/";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CANADA_URL = "/ai-visibility/ai-visibility-consultant-canada/";
const HOMECALC_POST_URL = "/blog/homecalc-ai-search-mortgage-ranking/";
const CITED_CASE_STUDY_URL = "/case-studies/cited-by-ai-engines/";
const TOOL_ACCURACY_URL = "/blog/ai-visibility-tool-accuracy/";
const B = HAMITAHM_BENCHMARK;

const FAQ_ITEMS = [
  {
    q: "Does this mean Hami Tahm is Canada's top AI visibility consultant?",
    a: "No, and this post doesn't claim that. It's a snapshot of one 39-prompt panel, run over one week, through one tracking vendor (Otterly.AI). Within that specific, narrow scope, hamitahm.com was the single most-cited domain out of 1,046 domains that appeared anywhere in the panel. That is a real, sourced result about citations. It is not a claim about who AI recommends most, which the same data shows is a separate and much weaker number: see the next question.",
  },
  {
    q: "If the site is cited the most, why isn't Hami Tahm 'recommended' the most?",
    a: `Because a citation and a named recommendation are different things, and this dataset shows they don't move together. Being cited means an AI engine's answer linked to a page as a source, ${B.hamitahm.citationCount} times here, more than any competing agency's own domain. Being named means the answer's text actually says "hire this person/company," which happened on exactly ${B.hamitahm.namedMentionPromptCount} of ${B.promptCount} prompts. AI engines are already pulling facts and structure from this site; they aren't yet consistently concluding "so this is who you should hire" from what they find. That gap, not a visibility problem, is the real finding here.`,
  },
  {
    q: "Which prompt actually produced a named recommendation?",
    a: `"${B.hamitahm.namedMentionPrompt}", on ${B.hamitahm.namedMentionEngine}, on ${B.hamitahm.namedMentionDate}. It's a specific, local, high-intent phrasing, not a generic "best AI visibility consultant" query. Whether that pattern (specific + local beats generic + national) holds up is worth testing further, and this post says so rather than overstating one data point into a rule.`,
  },
  {
    q: "What's the difference between this and the HomeCalc AI search benchmark?",
    a: `Different subject, same method. The HomeCalc post benchmarks a mortgage-calculator product against Canadian banks and rate sites. This one benchmarks Hami Tahm's own consulting practice against named AI-visibility and AEO agencies in Canada. Both use Otterly.AI, both use the same sum("Times cited") counting method, and neither dataset is ever merged with the other or with the Bing/Google Search Console numbers behind the case studies.`,
  },
  {
    q: "Can I run this same benchmark for my own business?",
    a: `Yes, that's most of what the ${OFFERS.audit.name} does: the same engine-by-engine, prompt-by-prompt competitive comparison, for your category. Running it on my own name first, and publishing the unflattering part, is the point: I'm not asking a client to trust a method I haven't pointed at myself.`,
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

const cellBase: React.CSSProperties = {
  padding: "11px 12px",
  fontSize: 14.5,
  borderBottom: "1px solid var(--line)",
  textAlign: "left",
  verticalAlign: "top",
};
const thStyle: React.CSSProperties = {
  ...cellBase,
  fontFamily: "var(--mono)",
  fontSize: 11.5,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "var(--faint)",
  borderBottom: "1px solid var(--line-strong)",
  fontWeight: 400,
};
const numCell: React.CSSProperties = { ...cellBase, textAlign: "right", fontFamily: "var(--mono)", fontSize: 13.5 };
const numHead: React.CSSProperties = { ...thStyle, textAlign: "right" };

export default async function HamitahmAiVisibilityBenchmarkPost() {
  const { priceWithCurrency } = await getAuditPricing();

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
            <span>HamiTahm AI Search Benchmark</span>
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
              Original research
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.6vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-.025em",
                maxWidth: "21ch",
              }}
            >
              I ran my own audit method on my own name.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Here&rsquo;s what it found.
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
              hamitahm.com is the most-cited domain in a 39-prompt panel of
              &ldquo;who should I hire for AI visibility&rdquo; questions in
              Canada, ahead of every named competing agency&rsquo;s own site.
              AI still recommends someone else by name almost every time.
              Both things are true, and I&rsquo;m publishing both.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="August 31, 2026" readTime="8 min read" />
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
                Across {B.promptCount} real &ldquo;hire an AI visibility
                consultant&rdquo; prompts and {B.totalCitations.toLocaleString()}{" "}
                recorded citations (Otterly.AI, {B.market}, {B.windowStart}
                &ndash;{B.windowEnd}), hamitahm.com was cited{" "}
                {B.hamitahm.citationCount} times: the single most-cited domain
                out of {B.totalDomains.toLocaleString()} domains that appeared
                anywhere in the panel. But it was named as the actual
                recommendation in only {B.hamitahm.namedMentionPromptCount} of{" "}
                {B.promptCount} prompts. Both numbers are real. Neither one is
                the whole picture; see &ldquo;What this isn&rsquo;t
                claiming&rdquo; below.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              I ask clients to let me measure them honestly, including the
              parts that don&rsquo;t flatter them. So I ran the same method on
              myself first. Every number below comes from a raw export you
              could recompute yourself; the source files are described in the
              methodology section.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What was actually measured" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              {B.promptCount} real buyer-intent prompts about hiring an AI
              visibility consultant, an AEO agency, or a GEO specialist
              (&ldquo;Who are the best AI visibility consultants in
              Canada?&rdquo;, &ldquo;Can you recommend an AI visibility
              consultant in Toronto?&rdquo;, and 37 more like them) were run
              through {B.engines.join(", ")}, for the {B.market} market, over
              the week of {B.windowStart} to {B.windowEnd}, using Otterly.AI,
              a competitive AI-search tracking tool. Every domain each engine
              cited as a source was logged, along with how many times:{" "}
              {B.totalCitations.toLocaleString()} total citations, across{" "}
              {B.totalDomains.toLocaleString()} distinct cited domains.
            </p>
            <p style={{ marginBottom: 20 }}>
              Otterly separately maintains a Brand Ranking leaderboard of
              about 10 named competitor brands for this panel, ranked by
              mentions and sentiment, generated from a filtered view (13 of
              the 39 prompts, its own &ldquo;last 14 days&rdquo; default). The
              domain-citation numbers in this post come from the full
              39-prompt export; the Brand Ranking figures are labeled
              separately below and aren&rsquo;t mixed with them.
            </p>
            <ScreenshotFigure
              src="/images/blog/hamitahm-ai-visibility-benchmark/otterly-citation-changes-top-pages.png"
              width={1607}
              height={764}
              alt="Otterly.AI citation-changes table showing hamitahm.com's AI Visibility Consultant Canada, hub, and Toronto pages each newly cited 50, 37, and 35 times, interleaved with a Semrush directory page and a Longhouse blog post."
              caption="Otterly's own citation-changes view for this panel. Three hamitahm.com pages appear in the same top-5 list as a Semrush directory listing and a Longhouse blog post, all logged as newly-cited sources during the window."
            />
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              This is a different instrument and a different dataset from the
              Bing Webmaster Tools / Google Search Console numbers behind{" "}
              <Link href={CITED_CASE_STUDY_URL} style={linkStyle}>
                the &ldquo;AI engines already name Hami Tahm&rdquo; case
                study
              </Link>{" "}
              and{" "}
              <Link href={HOMECALC_POST_URL} style={linkStyle}>
                the HomeCalc AI search benchmark
              </Link>
              . Those measure a different site, a different category, or
              actual search-console traffic over months. This measures one
              competitive prompt panel, one category, one week, through one
              third-party crawler. None of these are added together anywhere
              on this site.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="The domain ranking" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              Sorted by total citations (summed across the whole week) across
              all {B.totalDomains.toLocaleString()} domains that showed up
              anywhere in the {B.promptCount}-prompt panel. hamitahm.com is
              1st, ahead of a Semrush agency directory, YouTube, Google&rsquo;s
              own developer docs, LinkedIn, and every named competing agency&rsquo;s
              own domain, including Longhouse, the agency Otterly&rsquo;s
              separate Brand Ranking table (below) ranks 1st by mentions.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Domain</th>
                    <th style={thStyle}>Kind</th>
                    <th style={numHead}>Citations</th>
                  </tr>
                </thead>
                <tbody>
                  {B.topDomains.map((d, i) => (
                    <tr
                      key={d.domain}
                      style={
                        d.domain === "hamitahm.com"
                          ? { background: "var(--accent-soft)" }
                          : undefined
                      }
                    >
                      <td style={{ ...cellBase, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)" }}>
                        {i + 1}
                      </td>
                      <td style={{ ...cellBase, fontWeight: d.domain === "hamitahm.com" ? 700 : 400 }}>
                        {d.domain}
                      </td>
                      <td style={{ ...cellBase, color: "var(--muted)", fontSize: 13.5 }}>{d.kind}</td>
                      <td style={numCell}>{d.citations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                lineHeight: 1.6,
                color: "var(--faint)",
                marginTop: 12,
              }}
            >
              Source: Otterly.AI, {B.market}, {B.windowStart}&ndash;
              {B.windowEnd}, {B.promptCount} prompts, {B.engines.join(" / ")}.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              The pages doing the work are the AI Visibility hub, the Canada
              and Toronto consultant pages, the audit page, and the pricing
              page, in that order; see the table in the next section. This
              rank is a citation count across one competitive panel, not a
              claim about traffic, revenue, or market share.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="The honest gap: cited, but not recommended" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>Where the citations come from</h3>
            <p style={{ marginBottom: 16 }}>
              Five pages account for {B.topPages.reduce((s, p) => s + p.citations, 0)}{" "}
              of hamitahm.com&rsquo;s {B.hamitahm.citationCount} citations.
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Page</th>
                    <th style={numHead}>Citations</th>
                  </tr>
                </thead>
                <tbody>
                  {B.topPages.map((p) => (
                    <tr key={p.url}>
                      <td style={{ ...cellBase, fontFamily: "var(--mono)", fontSize: 13.5 }}>{p.url}</td>
                      <td style={numCell}>{p.citations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>Where it shows up most</h3>
            <p style={{ marginBottom: 16 }}>
              hamitahm.com was cited in {B.hamitahm.promptsCitedIn} of the{" "}
              {B.hamitahm.promptsTracked} tracked prompts. Its strongest
              questions are specific and commercial, not generic:
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Prompt</th>
                    <th style={numHead}>Citations</th>
                  </tr>
                </thead>
                <tbody>
                  {B.topPrompts.map((p) => (
                    <tr key={p.prompt}>
                      <td style={cellBase}>
                        &ldquo;{p.prompt}&rdquo;
                        {"note" in p && p.note && (
                          <div style={{ fontSize: 12.5, color: "var(--accent)", marginTop: 4 }}>
                            {p.note}
                          </div>
                        )}
                      </td>
                      <td style={numCell}>{p.citations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>The engine breakdown</h3>
            <p style={{ marginBottom: 20 }}>
              ChatGPT accounts for {B.hamitahm.byEngine.chatgpt.citationCount}{" "}
              of hamitahm.com&rsquo;s {B.hamitahm.citationCount} citations,
              Perplexity {B.hamitahm.byEngine.perplexity.citationCount},
              Google {B.hamitahm.byEngine.google.citationCount}, and Microsoft
              Copilot {B.hamitahm.byEngine.copilot.citationCount}. Across all{" "}
              {B.hamitahm.citationRows} recorded citation observations, the
              average cited position was {B.hamitahm.avgPosition} and the
              median was {B.hamitahm.medianPosition}: consistently a source
              in the answer, rarely the very first one.
            </p>

            <h3 style={h3Style}>Where it doesn&rsquo;t show up: named recommendations</h3>
            <p style={{ marginBottom: 20 }}>
              Out of {B.promptCount} prompts, hamitahm.com was cited as a
              source on {B.hamitahm.promptsCitedIn}. It was named as the
              actual recommendation, the AI&rsquo;s answer explicitly saying
              to hire this practice, on exactly{" "}
              {B.hamitahm.namedMentionPromptCount}: &ldquo;
              {B.hamitahm.namedMentionPrompt}&rdquo;, on{" "}
              {B.hamitahm.namedMentionEngine}, on{" "}
              {B.hamitahm.namedMentionDate}, at sentiment{" "}
              {B.hamitahm.namedMentionSentiment}. Every other prompt in the
              panel, including the generic, high-volume ones like &ldquo;best
              AI visibility consultants in Canada&rdquo; and &ldquo;AEO
              implementation guide for transaction-focused landing
              pages,&rdquo; produced a citation, a competitor&rsquo;s name in
              the answer, or both, but not this practice&rsquo;s name.
            </p>
            <p style={{ marginBottom: 20 }}>
              Otterly&rsquo;s separate Brand Ranking table (the filtered
              13-prompt view described above) puts this in a leaderboard
              against the same named competitors:
            </p>
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Brand</th>
                    <th style={numHead}>Sentiment</th>
                    <th style={numHead}>Mentions</th>
                    <th style={numHead}>Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {B.brandRanking.map((r) => (
                    <tr
                      key={r.name}
                      style={r.name === "Hami Tahm" ? { background: "var(--accent-soft)" } : undefined}
                    >
                      <td style={{ ...cellBase, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)" }}>
                        {r.rank}
                      </td>
                      <td style={{ ...cellBase, fontWeight: r.name === "Hami Tahm" ? 700 : 400 }}>{r.name}</td>
                      <td style={numCell}>{r.sentiment}</td>
                      <td style={numCell}>{r.mentions}</td>
                      <td style={numCell}>{r.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScreenshotFigure
              src="/images/blog/hamitahm-ai-visibility-benchmark/otterly-brand-ranking-top10.png"
              width={1607}
              height={764}
              alt="Otterly.AI Brand Ranking table showing Hami Tahm in 8th place with +50 sentiment and 1 mention, behind Longhouse, Canopy Media, First Page Sage, Parabolic Studio, Digital 6ix, iPullRank, and Valory."
              caption="The unedited screenshot behind the table above. 8th of 10 by mentions, despite being the most-cited domain in the same panel by a wide margin."
            />
            <ScreenshotFigure
              src="/images/blog/hamitahm-ai-visibility-benchmark/otterly-brand-visibility-index.png"
              width={1607}
              height={764}
              alt="Otterly.AI Brand Visibility Index chart placing HamiTahm in the Niche quadrant with 0.19% brand coverage and a 100% likelihood-to-buy score, alongside Longhouse and Canopy Media in the Leaders quadrant."
              caption="Sentiment (+50) and likelihood-to-buy (100%) are both strong once someone actually reads a hamitahm.com page. The gap is reach, not reception."
            />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="What this isn't claiming" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                "It does not claim Hami Tahm is Canada's top, or top-5, AI visibility consultant. This measures citation volume and mention count in one 39-prompt panel, not market share, client roster size, or quality of work.",
                "It does not claim being cited the most is the same as being recommended the most. This post's whole point is that those two numbers moved in opposite directions for the same site in the same window.",
                "It does not claim this holds outside Canada. Every prompt in this panel is Canada-scoped.",
                "It does not claim this is permanent. AI answers change week to week; this is a one-week window, not a standing rank.",
                "It does not claim Otterly's crawler, or its 13-prompt filtered dashboard view, is the ground truth. Every figure above that comes from the full 39-prompt export is labeled as such; the Brand Ranking numbers are labeled as coming from the filtered view instead, on purpose.",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    borderTop: "1px solid var(--line)",
                    padding: "16px 0",
                    fontSize: 16.5,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA priceWithCurrency={priceWithCurrency} />
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
              For the full strategy framework behind closing a gap like this
              one, see the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              hub. To see the audit this method is drawn from, see the{" "}
              <Link href={AUDIT_URL} style={linkStyle}>
                AI Visibility Audit
              </Link>{" "}
              page.
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
                Hami Tahm is an AI visibility consultant based in Toronto,
                serving businesses across{" "}
                <Link href={CANADA_URL} style={linkStyle}>
                  Canada
                </Link>
                .
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
              hamitahm.com is this practice's own site, and this article
              describes a service sold on it. The ranking data itself is
              unedited: every figure is counted from the raw Otterly.AI
              export, including the part (8th of 10 by named mentions, not
              1st) that is less flattering than a rounder claim would be.
            </p>
          </RevealSection>

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
                href={HOMECALC_POST_URL}
                title="HomeCalc.ca vs. Canada's Big Banks"
                tag="Original research"
              />
              <KeepReadingLink
                href={CITED_CASE_STUDY_URL}
                title="AI Engines Already Name Hami Tahm"
                tag="Case study"
              />
              <KeepReadingLink
                href={TOOL_ACCURACY_URL}
                title="How to Evaluate AI Visibility Tool Accuracy"
                tag="Tools & Comparisons"
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
                Want this benchmark run for your business?
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
                Cross-platform citation analysis, accuracy review, competitor
                gap mapping, and a prioritized action plan.
              </p>
              <Link
                href={OFFERS.checker.href}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI Visibility Check{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href={OFFERS.audit.href}
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

function ScreenshotFigure({
  src,
  width,
  height,
  alt,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure style={{ margin: "26px 0" }}>
      <div
        style={{
          border: "1px solid var(--line-strong)",
          borderRadius: 10,
          overflow: "hidden",
          background: "var(--panel)",
        }}
      >
        <ZoomableImage
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <figcaption
        style={{
          fontFamily: "var(--sans)",
          fontSize: 13,
          color: "var(--faint)",
          lineHeight: 1.55,
          marginTop: 10,
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function InlineAuditCTA({ priceWithCurrency }: { priceWithCurrency: string }) {
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
        Curious where your own brand ranks?
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
        {OFFERS.audit.name} runs the same kind of engine-by-engine
        competitive comparison shown above, for your category, checked by a
        person, not just pattern-matched. {priceWithCurrency}{" "}
        {OFFERS.audit.priceNote}.
      </p>
      <Link href={OFFERS.audit.href} className="btn btn-primary">
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
