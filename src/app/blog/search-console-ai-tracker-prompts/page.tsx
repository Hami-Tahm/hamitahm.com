import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";

/**
 * Original research post: AI tracking tools' scripted prompts inside Search Console.
 *
 * WHY THIS IS ITS OWN POST AND NOT "COPILOT CITED MY SITE 8,100 TIMES" (2026-10-02).
 * The first draft of this file led with Copilot citation concentration. That finding
 * is already published, with an earlier window, in /blog/ai-citation-study/ (Apr 25
 * to Jul 25, ~91% of this domain's citations on one essay). A second post with the
 * same thesis would compete with the flagship for the same queries. What was new in
 * the October data is the scripted-prompt finding, so that is what this post is
 * about; the citation numbers appear only as a dated follow-up that links back.
 *
 * Sources, each with its own window, never added together:
 *   Google Search Console, Performance              Jun 30 to Sep 29, 2026
 *   Google Search Console, Generative AI features   same window
 *   Bing Webmaster Tools, AI Performance            3 months to end of September
 *   Microsoft Clarity                               30 days to Oct 2, 2026
 *
 * ⚠️ CLAIM DISCIPLINE. Only queries matching an unmistakable pattern are counted
 * (118 queries, 805 impressions). The larger AirOps/Profound/Peec group is argued
 * from circumstantial evidence with the reasoning on the page, and given no number.
 * The link between tracker prompts and Copilot citations is presented as likely,
 * not shown.
 */

const SLUG = "search-console-ai-tracker-prompts";
const ARTICLE_TITLE = "Your Search Console Queries Include AI Tracker Prompts";
const ARTICLE_DESCRIPTION =
  "AI visibility tools send scripted prompts to Google, and when your page is a source they land in Search Console looking like real searches. What they look like, how many I found, why they wreck click-through rate, and a regex to filter them.";
const DATE_PUBLISHED = "2026-10-02";
const DATA_READ = "October 2, 2026";

const HUB_URL = "/ai-visibility/";
const CITATION_STUDY_URL = "/blog/ai-citation-study/";
const COMPARISON_URL = "/blog/peec-vs-profound-vs-airops/";
const TOOL_ACCURACY_URL = "/blog/ai-visibility-tool-accuracy/";
const METHODOLOGY_URL = "/methodology/";

/** A conservative Search Console filter. Lowercase on purpose: GSC stores queries lowercased. */
const FILTER_REGEX =
  "provide a definitive answer|pros and cons specific to|evaluate the .+ products company|-site:";

/** Bing Webmaster Tools, AI Performance, Pages tab, 3 months. */
const COPILOT_PAGES = [
  { page: "/the-10000-hour-rule/", citations: "6,900" },
  { page: "/blog/peec-vs-profound-vs-airops/", citations: "903" },
  { page: "/blog/ai-visibility-tool-accuracy/", citations: "106" },
  { page: "/ai-visibility/ai-visibility-consultant-canada/", citations: "67" },
  { page: "/blog/best-ai-visibility-tools/", citations: "35" },
] as const;

const FAQ_ITEMS = [
  {
    q: "What are the long 'provide a definitive answer' queries in Search Console?",
    a: "Almost certainly scripted prompts from AI visibility tracking tools, not people. They read like 'Which is better for SMBs, Profound or Peec AI? Provide a definitive answer, along with a list of pros and cons specific to SMBs for each', sometimes with an invented persona in front. When your page is one of the sources Google uses to answer such a prompt, the prompt appears in your Search Console like a search. On hamitahm.com, 118 of them accounted for 805 impressions over three months.",
  },
  {
    q: "Why do they matter?",
    a: "They inflate impressions and never click, so they drag click-through rate down and can make a well-ranking page look broken. On this site the 208 queries about AI visibility tools such as AirOps, Profound and Peec produced 7,148 impressions at an average position of about 8 and no clicks at all. Before rewriting a title for low CTR, read the page's query list.",
  },
  {
    q: "How do I filter them out of Search Console?",
    a: "In the Performance report, add a Query filter, choose Custom (regex), set it to 'Doesn't match regex', and paste: provide a definitive answer|pros and cons specific to|evaluate the .+ products company|-site: . It is deliberately conservative: it removes the unmistakable ones and leaves borderline long questions in, because some of those are real people.",
  },
  {
    q: "Do AI tracker prompts also show up as AI citations?",
    a: "Probably, though no dashboard separates them. In Bing's AI Performance report, the grounding queries behind this site's second most cited page include templated phrasings such as 'Profound vs Share of Model automated content workflows comparison', the same machine-generated shape as the Search Console prompts. Some share of reported AI citations for tool-comparison pages is likely produced by trackers asking about those tools.",
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

const quoteStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 14,
  lineHeight: 1.6,
  color: "var(--muted)",
  borderLeft: "3px solid var(--line-strong)",
  margin: "0 0 18px",
  padding: "4px 0 4px 18px",
};

export default function SearchConsoleTrackerPromptsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <RevealSection>
          <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
            <Link href={HUB_URL} style={{ color: "var(--muted)" }}>AI Visibility</Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>Blog</Link>
            <span>/</span>
            <span>AI tracker prompts in Search Console</span>
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
              Some of your Search Console queries aren&rsquo;t people.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                They&rsquo;re AI trackers.
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
              AI visibility tools send scripted prompts to Google. When your page is
              one of the sources, those prompts land in your Search Console looking
              like searches, and they never click.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="October 2, 2026" readTime="7 min read" />
          </RevealSection>
        </div>
      </header>

      <article>
        <div
          className="wrap"
          style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.72, color: "#2a2824", maxWidth: 740 }}
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
              <ul style={{ fontFamily: "var(--sans)", fontSize: 16, color: "var(--ink)", lineHeight: 1.55, margin: 0, paddingLeft: 20 }}>
                <li style={{ marginBottom: 8 }}>
                  Search Console now records prompts sent by AI visibility trackers,
                  such as &ldquo;which is better, Profound or AirOps? provide a
                  definitive answer&rdquo;, as if they were searches.
                </li>
                <li style={{ marginBottom: 8 }}>
                  On this site, 118 unmistakable ones made 805 impressions in three
                  months. That is the floor, not the total.
                </li>
                <li style={{ marginBottom: 8 }}>
                  They never click. A page ranking around position 8 for 7,148
                  impressions got zero clicks, and the title was not the problem.
                </li>
                <li>
                  A one-line regex filter, below, takes the obvious ones out before
                  you judge click-through rate.
                </li>
              </ul>
            </div>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What they look like" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 22 }}>
              I went through the query list for{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                my comparison of Profound, AirOps and Peec
              </Link>{" "}
              because it ranked on page one and got no clicks. Alongside normal
              searches like &ldquo;profound vs airops&rdquo; sat queries no person
              types. Three real examples, copied as Search Console shows them:
            </p>
            <blockquote style={quoteStyle}>
              i am looking for an ai visibility tool suitable for an smb. which is
              better for smbs, profound or peec ai? provide a definitive answer, along
              with a list of pros and cons specific to smbs for each.
            </blockquote>
            <blockquote style={quoteStyle}>
              which is better for citation authority tracking, profound or airops?
              provide a definitive answer, along with a list of pros and cons
              specific to their citation authority tracking features for each.
            </blockquote>
            <blockquote style={{ ...quoteStyle, marginBottom: 26 }}>
              i am a 25-34 year old in the consumer goods industry. i work at a
              company with 250-1k employees. [...] evaluate the ai visibility products
              company hotwire gaio.tech on competitor analysis
            </blockquote>
            <p style={{ marginBottom: 26 }}>
              The fixed scaffolding (&ldquo;provide a definitive answer, along with a
              list of pros and cons specific to ... for each&rdquo;), the invented
              personas, and the search operators some of them carry all point the same
              way: these are templates, filled in and fired by AI visibility tools on
              behalf of their customers to see which brands Google&rsquo;s AI answers
              recommend. When your page is one of the sources behind the answer, the
              prompt is logged in your Search Console as a query you appeared for.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="How many, on one small site" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Counting only queries with an unmistakable pattern (the scaffolding
              phrases above, persona preambles, search operators), I found 118 such
              queries in the three months from June 30 to September 29, 2026,
              accounting for 805 impressions. That is about 2% of the impressions
              visible in the query table, and it is a floor: plenty of tracker
              prompts are shorter and look like a person wrote them.
            </p>
            <p style={{ marginBottom: 26 }}>
              The circumstantial case for more is much stronger. The 208 queries
              about AI visibility tools such as AirOps, Profound and Peec produced
              7,148 impressions at an average position of about 8, and not one click.
              Real searchers click a result in that position somewhere around 1 to 3%
              of the time, which would have meant dozens of visits. Zero means either
              an AI answer fully satisfied every one of them, or a large share of that
              audience was never human. I think it is mostly the second. I cannot
              prove the split, so I am not putting a number on it.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Why it matters: CTR stops meaning anything" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Across the whole site Search Console showed 51,300 impressions and 58
              clicks over those three months, a click-through rate of 0.1%. Without
              looking at the queries, the natural reading is that the titles are bad.
              For the comparison page, an earlier version of me did exactly that and
              rewrote its title in August to match how people phrase the search.
              Some of the audience it was rewritten for was probably software.
            </p>
            <p style={{ marginBottom: 26 }}>
              The rule I now follow, and would give any team:{" "}
              <strong>
                if a page ranks well and gets no clicks, read its query list before
                touching its title.
              </strong>{" "}
              If the queries are long, templated and comparison-shaped, the fix is not
              on the page.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="How to filter them out" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 18 }}>
              In Search Console&rsquo;s Performance report, add a filter on Query,
              choose <em>Custom (regex)</em>, set it to <em>Doesn&rsquo;t match
              regex</em>, and paste:
            </p>
            <pre
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13.5,
                lineHeight: 1.6,
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 8,
                padding: "14px 16px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: "0 0 18px",
              }}
            >
              {FILTER_REGEX}
            </pre>
            <p style={{ marginBottom: 26 }}>
              It is deliberately conservative. It removes the unmistakable ones and
              leaves borderline long questions in, because some of those are real
              people and throwing them away would hide genuine demand. Flip the filter
              to <em>Matches regex</em> to see what it catches on your own site; the
              list is often more interesting than the rest of the report.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="They probably inflate AI citations too" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 22 }}>
              This is a follow-up to{" "}
              <Link href={CITATION_STUDY_URL} style={linkStyle}>
                my earlier study of 21,700 Copilot citations
              </Link>
              , which covered April to July and found about 91% of this site&rsquo;s
              citations on one old essay about the 10,000-hour rule. Bing&rsquo;s AI
              Performance report for the following three months, read {DATA_READ},
              shows about 8,100 citations with the same concentration, slightly
              diluted:
            </p>
            <div style={{ overflowX: "auto", margin: "0 0 12px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--sans)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Page</th>
                    <th style={numHead}>Copilot citations</th>
                  </tr>
                </thead>
                <tbody>
                  {COPILOT_PAGES.map((r) => (
                    <tr key={r.page}>
                      <td style={{ ...cellBase, fontFamily: "var(--mono)", fontSize: 13 }}>{r.page}</td>
                      <td style={numCell}>{r.citations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)", margin: "0 0 26px" }}>
              Bing Webmaster Tools, AI Performance (beta), Pages tab, three-month view.
              Bing describes these figures as a sample of overall activity. Top five of
              18 cited pages.
            </p>
            <p style={{ marginBottom: 26 }}>
              The essay now takes about 85% instead of 91%, and the comparison page
              has become the second most cited page with 903. Here is the connection
              to the rest of this post: the grounding queries Bing lists for that
              comparison page include phrasings like &ldquo;Profound vs Share of Model
              automated content workflows comparison&rdquo; and &ldquo;Profound vs
              Share of Model real-time misinformation detection&rdquo;, in long runs of
              near-identical variations. That is the same machine-generated shape as
              the Search Console prompts.
            </p>
            <p style={{ marginBottom: 26 }}>
              No dashboard separates tracker-driven citations from human-driven ones,
              so I cannot say how many of those 903 came from software. But the
              reasonable reading is that for any page comparing AI visibility tools,
              part of its &ldquo;AI citations&rdquo; are the tools&rsquo; own trackers
              asking about themselves and their competitors. That is worth knowing
              before anyone sells you a citation count as proof of reach. Google&rsquo;s
              separate Generative AI features report, for the same window, shows the
              same two pages on top: the essay with 1,320 of 2,930 AI-feature
              impressions, and the comparison page with 814.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="What I changed" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Not the title. The comparison page&rsquo;s{" "}
              <em>content</em> was the problem worth fixing: whoever is asking, AI
              answers quote it, so anything wrong on it gets repeated with this
              site&rsquo;s name attached. Re-reading the three vendors&rsquo; pricing
              pages on {DATA_READ} found that Profound had removed the self-serve plans
              the page was built around and Peec had added a tier, so it has been{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                rewritten against what the vendors say today
              </Link>
              .
            </p>
            <p style={{ marginBottom: 26 }}>
              Measuring the business pages themselves, as distinct from what a
              dashboard reports about them, needs repeated runs of real prompts, for
              the reasons in{" "}
              <Link href={TOOL_ACCURACY_URL} style={linkStyle}>
                how to judge AI visibility tool accuracy
              </Link>{" "}
              and on the{" "}
              <Link href={METHODOLOGY_URL} style={linkStyle}>
                methodology page
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} style={{ marginBottom: 26 }}>
                <h3 style={h3Style}>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
            <p style={{ fontFamily: "var(--sans)", fontSize: 15, color: "var(--muted)", fontStyle: "italic", margin: "30px 0 0" }}>
              Hami Tahm is an AI visibility consultant based in Toronto.
            </p>
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
                Want to know what AI really says about you?
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
                Real prompts, run by a person, recorded with the engine, the country
                and the date. Not a dashboard count.
              </p>
              <Link href={OFFERS.checker.href} className="btn btn-primary" style={{ marginTop: 30, position: "relative" }}>
                Run the free AI Visibility Check <span className="arr">&rarr;</span>
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
