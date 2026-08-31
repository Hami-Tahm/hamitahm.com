import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";
import { getAuditPricing } from "@/lib/currency";
import { OTTERLY_BENCHMARK } from "@/lib/otterly-mortgage-benchmark";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const SLUG = "homecalc-ai-search-mortgage-ranking";
const ARTICLE_TITLE =
  "HomeCalc.ca vs. Canada's Big Banks: A 50-Prompt AI Search Benchmark";
const ARTICLE_DESCRIPTION =
  "Ran 50 real mortgage-calculator questions through ChatGPT, Perplexity, Google AI Overviews, and Copilot. HomeCalc.ca outranked every major Canadian bank and held the #1 position for 18 different buyer questions. Full data, full method, and what this doesn't prove.";
const DATE_PUBLISHED = "2026-08-31";
const HUB_URL = "/ai-visibility/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const CITATION_STUDY_URL = "/blog/ai-citation-study/";
const HOW_TO_CHECK_URL = "/blog/how-to-check-ai-visibility/";
const TOOL_ACCURACY_URL = "/blog/ai-visibility-tool-accuracy/";
const B = OTTERLY_BENCHMARK;

const FAQ_ITEMS = [
  {
    q: "Does this mean HomeCalc.ca is a top-5 mortgage brand in Canada?",
    a: "No, and this post doesn't claim that. It's a snapshot of one 50-prompt panel, run over one week, for the calculator/affordability-tool corner of the mortgage category, through one tracking vendor (Otterly.AI). Within that specific, narrow scope, HomeCalc.ca ranked 6th by citation volume among roughly 20 tracked domains, ahead of every major bank's own domain individually. That is a real, sourced result. It is not a market-share claim about the mortgage industry as a whole.",
  },
  {
    q: "What's the difference between a 'citation' and a 'mention' in this data?",
    a: `A citation is Otterly recording that an AI engine's answer linked to a domain as a source, counted once per day it was observed; that's the ${B.totalCitations.toLocaleString()}-citation export this post's ranking table comes from. A mention is the brand named in the answer's text, which Otterly reports separately on its Brand Ranking dashboard (${B.homecalc.brandMentions} for HomeCalc.ca in this window). The two numbers measure different things and are never added together here, same rule this site applies to citations vs. impressions elsewhere.`,
  },
  {
    q: "Is this the same data as the HomeCalc AI citation case study?",
    a: "No, and the two shouldn't be combined. The case study and the published citation study are built from Bing Webmaster Tools and Google Search Console, HomeCalc's own site-wide numbers over months. This post is a one-week, 50-prompt competitive benchmark from Otterly.AI, scoped to mortgage calculators specifically. Different instrument, different window, different scope.",
  },
  {
    q: "Which AI engine cited HomeCalc.ca the most?",
    a: `Microsoft Copilot, by a wide margin: ${B.homecalc.byEngine.copilot.citationCount} of HomeCalc.ca's ${B.homecalc.citationCount} citations in this panel, at an average position of ${B.homecalc.byEngine.copilot.avgPosition} and the #1 spot in ${B.homecalc.byEngine.copilot.firstPlace} of its recorded observations. Perplexity and ChatGPT cited it too, but less often and at lower average positions; Google AI Overviews recorded none of HomeCalc.ca's citations in this particular window, which is one week of one prompt panel, not a claim that Google never cites it.`,
  },
  {
    q: "Can I run this same benchmark for my own business?",
    a: `Yes, that's most of what the ${OFFERS.audit.name} does: the same kind of engine-by-engine, prompt-by-prompt competitive comparison, built for your category instead of Canadian mortgage calculators. A sample of that report is published at hamitahm.com/ai-visibility/sample-report/.`,
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

export default async function HomecalcAiSearchMortgageRankingPost() {
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
            <span>HomeCalc AI Search Benchmark</span>
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
                maxWidth: "20ch",
              }}
            >
              HomeCalc.ca vs. Canada&rsquo;s big banks:{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                a 50-prompt AI search benchmark.
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
              I ran 50 real mortgage-calculator questions through four AI
              engines and counted every recorded citation. HomeCalc.ca beat
              every major bank&rsquo;s own domain. Here&rsquo;s the data, the
              method, and exactly what it doesn&rsquo;t prove.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="August 31, 2026" readTime="9 min read" />
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
                Across {B.promptCount} real mortgage-calculator prompts and{" "}
                {B.totalCitations.toLocaleString()} recorded citations
                (Otterly.AI, {B.market}, {B.windowStart}&ndash;{B.windowEnd}),
                HomeCalc.ca was cited {B.homecalc.citationCount} times: 6th
                among all ~20 tracked domains, 3rd among commercial
                (non-government) domains, and #1 on Microsoft Copilot every
                single day of the window for one specific question. That is a
                narrow, sourced result, not a market-share claim; see
                &ldquo;What this isn&rsquo;t claiming&rdquo; below.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Most AI-visibility claims are unfalsifiable: &ldquo;we help
              brands get recommended by AI&rdquo; with no prompts, no engines
              named, and no way to check the work. This post is the opposite
              of that, on my own product. Every number below comes from a raw
              export you could recompute yourself; the two source files are
              linked in the methodology section.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What was actually measured" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              {B.promptCount} real buyer-intent prompts about mortgage
              calculators, affordability, and home-buying tools (&ldquo;What
              are the best free Canadian real estate calculators?&rdquo;,
              &ldquo;How much house can I afford with my income?&rdquo;, and
              48 more like them) were run through {B.engines.join(", ")}, for
              the {B.market} market, over the week of {B.windowStart} to{" "}
              {B.windowEnd}, using Otterly.AI, a competitive AI-search
              tracking tool. Every domain each engine cited as a source was
              logged, along with how many times: {B.totalCitations.toLocaleString()}{" "}
              total citations, across roughly 20 competing domains. (Some
              prompts were checked once during the window; others were
              checked daily across all 8 days, so a domain&rsquo;s total
              reflects both how often it&rsquo;s cited and how consistently
              that citation held up day after day.)
            </p>
            <p style={{ marginBottom: 20 }}>
              This is deliberately a different instrument and a different
              dataset from the Bing Webmaster Tools / Google Search Console
              numbers behind{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                HomeCalc&rsquo;s existing AI visibility case study
              </Link>{" "}
              and{" "}
              <Link href={CITATION_STUDY_URL} style={linkStyle}>
                the published citation study
              </Link>
              . Those measure HomeCalc&rsquo;s actual search-console traffic
              over months, across every topic the site covers. This measures
              one competitive prompt panel, one category, one week, through
              one third-party crawler. The two are not added together
              anywhere on this site, and shouldn&rsquo;t be.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="The domain ranking" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              Sorted by total citations (summed across every day of the
              window) across all {B.promptCount} prompts. The top four spots
              are two government sources (CMHC, the federal consumer-finance
              regulator) and Canada&rsquo;s two largest rate-comparison sites.
              HomeCalc.ca is 6th overall, and 3rd once government sources are
              set aside, behind only Ratehub and wowa.ca among commercial
              domains.
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
                        d.domain === "homecalc.ca"
                          ? { background: "var(--accent-soft)" }
                          : undefined
                      }
                    >
                      <td style={{ ...cellBase, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)" }}>
                        {i + 1}
                      </td>
                      <td style={{ ...cellBase, fontWeight: d.domain === "homecalc.ca" ? 700 : 400 }}>
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
              Read a different way: HomeCalc.ca&rsquo;s domain was cited more
              often than BMO&rsquo;s, Scotiabank&rsquo;s, RBC&rsquo;s, TD&rsquo;s
              or CIBC&rsquo;s own domains individually, for this specific set
              of calculator and affordability questions. None of those banks
              cracked the top 10. And against the two sites that actually beat
              it (Ratehub, wowa.ca), the gap isn&rsquo;t close to what a
              &ldquo;3rd of 20+&rdquo; ranking might suggest on its own; both
              are established, general-purpose rate-comparison platforms,
              while HomeCalc.ca is a narrower, calculator-only product.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Where it wins outright" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>The standout: #1 on Copilot, 8 days running</h3>
            <p style={{ marginBottom: 20 }}>
              The single strongest result in the dataset is also the easiest
              to miss in a table sorted by raw totals. For the prompt
              &ldquo;What are the most accurate Canadian mortgage calculator
              sites?&rdquo;, HomeCalc.ca held position #1 on Microsoft Copilot
              on every one of the 8 days the window was monitored, plus
              secondary mentions on Perplexity and ChatGPT. That consistency
              is what drives its {B.topPrompts[0].citations} citations on this
              one prompt alone, more than double its next-best question.
            </p>

            <h3 style={h3Style}>Its five best-performing prompts</h3>
            <p style={{ marginBottom: 16 }}>
              Ranked by total citations, not by how many separate times it was
              checked. A prompt monitored daily for a week and cited every
              time earns its higher total honestly.
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
            <p style={{ marginBottom: 20 }}>
              That one prompt is the extreme case, not the whole story.
              HomeCalc.ca was cited in {B.homecalc.promptsCitedIn} of the{" "}
              {B.homecalc.promptsTracked} tracked prompts overall, and held
              position #1 at least once for {B.homecalc.firstPlacePromptCount}{" "}
              different questions, everything from rental-property cap rate to
              down payment size to newcomer mortgages. Across its{" "}
              {B.homecalc.citationRows} recorded citation observations, it
              held the #1 spot{" "}
              {Math.round((B.homecalc.firstPlaceRows / B.homecalc.citationRows) * 100)}
              % of the time and a top-3 spot{" "}
              {Math.round((B.homecalc.top3Rows / B.homecalc.citationRows) * 100)}
              % of the time, with a median cited position of{" "}
              {B.homecalc.medianPosition} and an average of{" "}
              {B.homecalc.avgPosition}.
            </p>

            <h3 style={h3Style}>One engine drives most of it: Copilot</h3>
            <p style={{ marginBottom: 20 }}>
              The engine breakdown isn&rsquo;t even. Microsoft Copilot
              accounts for {B.homecalc.byEngine.copilot.citationCount} of
              HomeCalc.ca&rsquo;s {B.homecalc.citationCount} citations, at an
              average position of {B.homecalc.byEngine.copilot.avgPosition}{" "}
              and #1 in {B.homecalc.byEngine.copilot.firstPlace} of its
              recorded observations. Perplexity contributed{" "}
              {B.homecalc.byEngine.perplexity.citationCount} at a weaker
              average position ({B.homecalc.byEngine.perplexity.avgPosition}
              ), ChatGPT only {B.homecalc.byEngine.chatgpt.citationCount} at a
              much lower average position ({B.homecalc.byEngine.chatgpt.avgPosition}
              ), and Google AI Overviews recorded none of HomeCalc.ca&rsquo;s
              citations in this particular window. A brand that looks strong
              on a blended, all-engine number can still be nearly invisible
              on the one engine a given buyer happens to be using, which is
              the whole reason to look at engines separately rather than at a
              single combined score.
            </p>

            <h3 style={h3Style}>Sentiment and mentions: consistently top 5</h3>
            <p style={{ marginBottom: 0 }}>
              Otterly&rsquo;s separate Brand Ranking dashboard, which tracks
              brand mentions in the answer text rather than source citations,
              recorded {B.homecalc.brandMentions} mentions for HomeCalc.ca in
              this window and {B.homecalc.brandCoveragePct}% brand coverage:
              4th among the ten commercial brands ranked, once CMHC and the
              Financial Consumer Agency of Canada are set aside. Its sentiment
              score of +{B.homecalc.sentiment} was the 2nd-highest of all ten
              ranked brands, government sources included, behind only
              Ratehub.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="What this isn't claiming" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                "It does not claim HomeCalc.ca is a top-5 mortgage brand in Canada. It ranked 6th, by citation count, in this specific 50-prompt panel.",
                "It does not claim any presence outside Canada. Every prompt, every cited government source, and every competitor in this panel is Canadian; there is no data here about the United States or any other market.",
                "It does not claim this holds for the mortgage category broadly. The panel is calculator and affordability-tool questions specifically, not mortgage rates, mortgage brokers, or lending in general.",
                "It does not claim this is permanent. AI answers change week to week; this is a one-week window, not a standing rank. Re-running the same panel next month could move every number in the table above.",
                "It does not claim Otterly's crawler is the ground truth. It is one vendor's method, same caveat as every tool covered in the tool-accuracy guide linked below.",
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
              For the method behind checking any brand&rsquo;s own AI
              visibility, not just a competitive panel, see{" "}
              <Link href={HOW_TO_CHECK_URL} style={linkStyle}>
                how to check AI visibility
              </Link>
              . For the full strategy framework, see the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              hub.
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
                Hami Tahm is an AI visibility consultant based in Toronto, and
                the founder of{" "}
                <a href={HOMECALC_PROOF.siteUrl} style={linkStyle}>
                  HomeCalc.ca
                </a>
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
              HomeCalc.ca is my own product, and this article also describes
              a service I sell. The ranking data itself is unedited: every
              figure is counted from the raw Otterly.AI export, including the
              parts (rank 6th, not 1st; zero Google citations in this window)
              that are less flattering than a rounder claim would be.
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
                href={CASE_STUDY_URL}
                title="HomeCalc AI Visibility Case Study"
                tag="Case study"
              />
              <KeepReadingLink
                href={CITATION_STUDY_URL}
                title="What 21,700+ AI Citations Actually Taught Me"
                tag="Original research"
              />
              <KeepReadingLink
                href={HOW_TO_CHECK_URL}
                title="How to Check AI Visibility: 7 Free Methods"
                tag="Basics"
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
                Want this benchmark run for your category?
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
