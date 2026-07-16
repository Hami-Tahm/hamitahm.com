import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { ShortAnswer } from "@/components/ShortAnswer";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";
import {
  STUDY,
  SITES,
  HOMECALC_PAGES,
  HOMECALC_QUERIES,
  HAMITAHM_PAGES,
  COMMERCIAL_REALITY,
} from "@/lib/citation-study";

const SLUG = "ai-citation-study";
const ARTICLE_TITLE = `What ${STUDY.totalCitations} AI Citations Actually Taught Me`;
const ARTICLE_DESCRIPTION =
  "Two sites. Three months. 14,400 AI citations from Microsoft Copilot. Which pages got cited, which got nothing, and the finding nobody in this industry wants to publish: citations are not customers.";
const DATE_PUBLISHED = "2026-07-14";

const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";

export const metadata: Metadata = {
  // Kept well under 60 chars — ARTICLE_TITLE alone is long, so the metadata title is a
  // tighter, keyword-forward variant rather than the full H1.
  title: { absolute: "AI Citation Study: What 14,400 Citations Taught Me" },
  description: ARTICLE_DESCRIPTION,
  alternates: { canonical: `https://hamitahm.com/blog/${SLUG}/` },
};

const schemaJson = blogSchemaJson({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
  cluster: "ai-visibility",
});

// Dataset schema — tells crawlers and answer engines that this page is backed by a
// real, downloadable dataset, and where to get it. Original first-party data is the
// most citation-worthy thing a GEO page can carry; marking it up as a Dataset makes
// that legible to machines instead of leaving it as prose.
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "HomeCalc.ca AI Citation Study — top cited pages and queries",
  description:
    "Top cited pages and top grounding queries for HomeCalc.ca from Bing Webmaster AI Performance (Microsoft Copilot), April 19 – July 8, 2026. A selected sample; full per-page export available on request.",
  url: "https://hamitahm.com/blog/ai-citation-study/",
  creator: { "@id": "https://hamitahm.com/#hami-tahm" },
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
  temporalCoverage: "2026-04-19/2026-07-08",
  distribution: [
    {
      "@type": "DataDownload",
      encodingFormat: "text/csv",
      contentUrl: "https://hamitahm.com/blog/ai-citation-study/dataset.csv",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <article style={{ padding: "72px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div style={mono}>
              <Link href="/" style={{ color: "var(--accent)" }}>
                Home
              </Link>{" "}
              / <Link href="/blog/" style={{ color: "var(--accent)" }}>Blog</Link> /
              Original research
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5.4vw, 54px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              What {STUDY.totalCitations} AI citations actually taught me
            </h1>

            <p
              style={{
                marginTop: 24,
                fontSize: 20,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              Two sites I own. {STUDY.windowLabel}. {STUDY.totalCitations} citations from
              AI answer engines. Almost everyone writing about AI visibility right now is
              working from theory. This is the data &mdash; including the part that makes
              me look bad.
            </p>

            <AuthorByline date="July 14, 2026" readTime="9 min read" />
          </RevealSection>

          <RevealSection delay={0.08}>
            <div className="prose" style={{ marginTop: 44 }}>
              {/* Direct-answer block at the top — the one thing an answer engine can
                  lift verbatim. Every other AEO post on this site has one; this page
                  (added the same day) was the only one missing it. */}
              <ShortAnswer>
                Across two sites over three months, Microsoft Copilot generated{" "}
                {STUDY.totalCitations} AI citations. The lesson wasn&rsquo;t the size of
                the number &mdash; it was that citations concentrate on tools and
                purpose-built pages, follow a winner-take-most pattern per query, and do
                not, by themselves, produce traffic or customers. A citation count is a
                vanity metric unless it lands on pages a buyer actually reaches.
              </ShortAnswer>

              <Callout>
                <strong style={{ color: "var(--ink)" }}>Where this comes from.</strong>{" "}
                Every number below was read from {STUDY.source}, plus Google Search
                Console, on {STUDY.pulledOn}. Window: {STUDY.windowStart} &ndash;{" "}
                {STUDY.windowEnd}. Nothing is modelled or estimated. It measures Microsoft
                Copilot and its partners &mdash; not every AI engine. That is a real limit
                and I&rsquo;m stating it up front rather than burying it.
              </Callout>

              <H2>The setup</H2>
              <p>
                I run two sites. Same owner, same three months, same measurement. They
                produced almost identical citation totals and{" "}
                <strong>completely opposite results.</strong> That accident is the whole
                study.
              </p>

              <Table
                head={["", SITES.homecalc.name, SITES.hamitahm.name]}
                rows={[
                  ["What it is", SITES.homecalc.what, SITES.hamitahm.what],
                  ["Age", SITES.homecalc.ageAtStart, SITES.hamitahm.ageAtStart],
                  ["AI citations", SITES.homecalc.citations, SITES.hamitahm.citations],
                  ["Pages earning them", SITES.homecalc.pagesCited, SITES.hamitahm.pagesCited],
                  ["Shape of the curve", SITES.homecalc.curve, SITES.hamitahm.curve],
                ]}
              />

              <p>
                Roughly the same number of citations. One is spread across{" "}
                {SITES.homecalc.pagesCited} pages and climbing. The other is one page and
                flat.{" "}
                <strong style={{ color: "var(--ink)" }}>
                  Total citation count, on its own, tells you almost nothing.
                </strong>
              </p>

              <H2>Finding 1 &mdash; A new site is invisible for about three weeks, then it isn&rsquo;t</H2>
              <p>
                HomeCalc was a brand-new domain, {SITES.homecalc.ageAtStart}, in a market
                owned by banks and national brokerages. For roughly the first three weeks
                of the window it earned effectively nothing. Then it moved &mdash; fast
                &mdash; to a peak of {SITES.homecalc.peakPerDay} citations a day.
              </p>
              <p>
                If you launch and see nothing for a month, that is not necessarily
                failure. It may just be the lag. Most people quit inside that window.
              </p>

              <H2>Finding 2 &mdash; Tools get cited. Opinions don&rsquo;t.</H2>
              <p>
                The most-cited pages on HomeCalc, in order:
              </p>

              <BarList
                items={HOMECALC_PAGES.map((p) => ({
                  label: p.label,
                  tag: p.type,
                  value: p.citations,
                }))}
                max={HOMECALC_PAGES[0].citations}
              />

              <p>
                Five of the top six are <strong>calculators</strong>. Not essays, not
                opinion pieces, not thought leadership. Things that compute a number a
                person actually needed.
              </p>
              <p>
                An answer engine is trying to answer a question. A tool that produces the
                answer is more useful to it than a page that has feelings about the
                question.
              </p>

              <H2>Finding 3 &mdash; AI picks a source and stays loyal</H2>
              <p>
                &ldquo;Citation share&rdquo; is the percentage of <em>all</em> citations
                for a query that went to this one site:
              </p>

              <Table
                head={["Query", "Citations", "Share of all citations"]}
                rows={HOMECALC_QUERIES.map((q) => [
                  q.query,
                  String(q.citations),
                  q.share,
                ])}
                emphasiseLastCol
              />

              <p>
                On <em>calculate land transfer tax ontario</em>, HomeCalc is{" "}
                <strong style={{ color: "var(--ink)" }}>72%</strong> of every citation the
                query produces. On the affordability query, <strong>76%</strong>.
              </p>
              <p>
                This does not behave like the ten blue links, where positions two through
                ten still get something. It behaves closer to winner-take-most. Being{" "}
                <em>a</em> source is worth very little. Being <em>the</em> source is worth
                nearly everything.
              </p>

              <H2>
                Finding 4 &mdash; A purpose-built site earns citations. A blog buys a
                lottery ticket.
              </H2>
              <p>
                Now the same measurement on my personal site, and this is where it stops
                being flattering:
              </p>

              <BarList
                items={HAMITAHM_PAGES.map((p) => ({
                  label: p.label,
                  tag: p.note,
                  value: p.citations,
                  danger: p.note === "the money page",
                }))}
                max={HAMITAHM_PAGES[0].citations}
              />

              <p>
                <strong style={{ color: "var(--ink)" }}>
                  93% of this entire domain&rsquo;s AI citations land on one old essay
                  about the 10,000-hour rule.
                </strong>{" "}
                It was written years ago, it is about skill mastery, and it has nothing to
                do with what I sell.
              </p>
              <p>
                The page I actually sell &mdash; my AI visibility services page &mdash;
                earned <strong>{COMMERCIAL_REALITY.moneyPageCitations} citations</strong>{" "}
                in three months.
              </p>
              <p>
                HomeCalc was built on purpose, for a topic, with tools that answer
                questions. It got broad, repeatable, growing citations. My blog got one
                accidental jackpot and a flat line. Same person. Same three months.
              </p>

              <H2>Finding 5 &mdash; The one nobody in this industry wants to publish</H2>

              <Callout danger>
                <p style={{ marginBottom: 12 }}>
                  <strong style={{ color: "var(--ink)", fontSize: 17 }}>
                    AI citations are not traffic. AI citations are not customers.
                  </strong>
                </p>
                <p style={{ marginBottom: 10 }}>
                  My most-cited page in the world &mdash;{" "}
                  {COMMERCIAL_REALITY.aiCitations} AI citations &mdash; produced{" "}
                  <strong>{COMMERCIAL_REALITY.googleClicksPerQuarter} clicks</strong> from
                  Google last quarter and{" "}
                  <strong>{COMMERCIAL_REALITY.leadsGenerated} leads.</strong> Zero.
                </p>
                <p style={{ margin: 0 }}>
                  The whole site earned {COMMERCIAL_REALITY.siteClicksPerQuarter} clicks
                  in three months, at an average position of{" "}
                  {COMMERCIAL_REALITY.siteAvgPosition}.
                </p>
              </Callout>

              <p>
                I could have led this article with{" "}
                <em>&ldquo;{STUDY.totalCitations} AI citations!&rdquo;</em> and you would
                have been impressed. It would also have been close to meaningless.
              </p>
              <p>
                A citation count is a <strong>vanity metric</strong> unless the citations
                land on pages that sell something, for queries a buyer actually types. Mine
                mostly didn&rsquo;t. That is not a reason to ignore AI visibility &mdash;
                HomeCalc proves the opposite. It is a reason to be extremely suspicious of
                anyone, including me, who shows you a big citation number and stops there.
              </p>
              <p>
                <strong style={{ color: "var(--ink)" }}>
                  Ask the follow-up question: cited on which pages, for which queries, and
                  did anyone buy anything?
                </strong>
              </p>

              <H2>What earned nothing</H2>
              <p>Also true, and rarely published:</p>
              <ul>
                <li>
                  <strong>Opinion and mindset posts:</strong> essentially zero citations.
                </li>
                <li>
                  <strong>Off-topic content:</strong> a post about diets earned 61
                  citations on a site that sells AI visibility consulting. Useless
                  citations are worse than none &mdash; they teach the model the wrong
                  thing about who you are.
                </li>
                <li>
                  <strong>My own commercial pages:</strong> 12 citations. The thing I most
                  wanted cited was cited least.
                </li>
              </ul>

              <H2>What I would tell you to do with this</H2>
              <ol>
                <li>
                  <strong>Build the tool, not the take.</strong> If your page computes,
                  compares, or resolves something concrete, it is a candidate for citation.
                  If it merely has a view, it probably isn&rsquo;t.
                </li>
                <li>
                  <strong>Chase the query, not the count.</strong> One citation on a query
                  your buyer types beats a thousand on a query they never will.
                </li>
                <li>
                  <strong>Give it three weeks before you judge it.</strong>
                </li>
                <li>
                  <strong>Measure what happens after the citation.</strong> If it produces
                  no clicks and no customers, you have a trophy, not a channel.
                </li>
              </ol>

              <H2>Method, and what this doesn&rsquo;t prove</H2>
              <ul>
                <li>
                  Citation data: {STUDY.source}, {STUDY.windowStart} &ndash;{" "}
                  {STUDY.windowEnd}. Click and position data: Google Search Console, same
                  window.
                </li>
                <li>
                  <strong>This measures Copilot and its partners</strong> &mdash; not
                  ChatGPT, Perplexity, Gemini or Grok, none of which publish citation data
                  to publishers. Behaviour may differ on those engines. Anyone claiming
                  otherwise with confidence is guessing.
                </li>
                <li>
                  <strong>n = 2 sites, one owner, one market.</strong> This is a strong
                  signal, not a law. Both sites are mine, which means I had total control
                  and no stakeholders &mdash; advantages your business will not have.
                </li>
                <li>
                  I am publishing the outcomes, not the build method. The method is what I
                  am paid for, and I would rather tell you that plainly than pretend
                  otherwise.
                </li>
              </ul>

              <Callout>
                <p style={{ marginBottom: 10 }}>
                  <strong style={{ color: "var(--ink)" }}>
                    Use this data. Please.
                  </strong>{" "}
                  If you are writing about AI search and need real numbers instead of
                  speculation, take them &mdash; charts, tables, figures. All I ask is a
                  link back to this page so people can check the source.
                </p>
                <p style={{ marginBottom: 14 }}>
                  <a
                    href="/blog/ai-citation-study/dataset.csv"
                    download="homecalc-ai-citation-study.csv"
                    style={{ color: "var(--accent)", fontWeight: 600 }}
                  >
                    &darr; Download the data (CSV)
                  </a>{" "}
                  &mdash; the top cited pages and queries for HomeCalc, CC BY 4.0.
                  Want the full per-page export, or the HamiTahm.com side? Email me.
                </p>
                <p style={{ margin: 0 }}>
                  Questions about the method, or want the underlying screenshots?{" "}
                  <a href="mailto:hami@hamitahm.com" style={{ color: "var(--accent)" }}>
                    hami@hamitahm.com
                  </a>
                  . I&rsquo;ll send them.
                </p>
              </Callout>

              <H2>The related work</H2>
              <p>
                The full HomeCalc write-up is here:{" "}
                <Link href={CASE_STUDY_URL} style={{ color: "var(--accent)" }}>
                  how a brand-new Canadian site earned {SITES.homecalc.citations} AI
                  citations in {STUDY.windowLabel}
                </Link>
                .
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div className="cta-box" style={{ marginTop: 60 }}>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  fontWeight: 500,
                  position: "relative",
                }}
              >
                Want to know what AI actually says about your business?
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 14,
                  position: "relative",
                  maxWidth: "52ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Not a score out of 100. A real check, by a person, on the queries your
                buyers actually type.
              </p>
              <Link
                href={CHECKER_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI visibility check <span className="arr">&rarr;</span>
              </Link>
              <div style={{ marginTop: 16, position: "relative" }}>
                <Link href={AUDIT_URL} style={{ color: "var(--muted)", fontSize: 14 }}>
                  Or book the $1,500 audit &rarr;
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </article>
    </>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

const mono: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 12,
  color: "var(--faint)",
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--serif)",
        fontSize: 27,
        fontWeight: 500,
        letterSpacing: "-.015em",
        marginTop: 52,
        marginBottom: 16,
        color: "var(--ink)",
        lineHeight: 1.25,
      }}
    >
      {children}
    </h2>
  );
}

function Callout({
  children,
  danger,
}: {
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderLeft: `2px solid ${danger ? "#b3261e" : "var(--accent)"}`,
        background: danger ? "rgba(179,38,30,.04)" : "var(--accent-soft)",
        borderRadius: 4,
        padding: "22px 24px",
        margin: "30px 0",
        fontSize: 15.5,
        lineHeight: 1.65,
      }}
    >
      {children}
    </div>
  );
}

function Table({
  head,
  rows,
  emphasiseLastCol,
}: {
  head: readonly string[];
  rows: readonly (readonly string[])[];
  emphasiseLastCol?: boolean;
}) {
  return (
    <div style={{ overflowX: "auto", margin: "26px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "10px 12px 10px 0",
                  borderBottom: "1px solid var(--line-strong)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  fontWeight: 400,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td
                  key={j}
                  style={{
                    padding: "12px 12px 12px 0",
                    borderBottom: "1px solid var(--line)",
                    color: j === 0 ? "var(--ink)" : "var(--muted)",
                    fontWeight:
                      emphasiseLastCol && j === r.length - 1 ? 600 : 400,
                    ...(emphasiseLastCol && j === r.length - 1
                      ? { color: "var(--accent)" }
                      : {}),
                  }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarList({
  items,
  max,
}: {
  items: readonly {
    label: string;
    tag?: string;
    value: number;
    danger?: boolean;
  }[];
  max: number;
}) {
  return (
    <div style={{ margin: "28px 0" }}>
      {items.map((it) => {
        const pct = Math.max(1.5, (it.value / max) * 100);
        return (
          <div key={it.label} style={{ marginBottom: 16 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontSize: 14.5,
                  color: it.danger ? "#b3261e" : "var(--ink)",
                  fontWeight: it.danger ? 600 : 400,
                }}
              >
                {it.label}
                {it.tag && (
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      color: it.danger ? "#b3261e" : "var(--faint)",
                      marginLeft: 8,
                    }}
                  >
                    {it.tag}
                  </span>
                )}
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: it.danger ? "#b3261e" : "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {it.value.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                height: 6,
                background: "var(--line)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: it.danger ? "#b3261e" : "var(--accent)",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
