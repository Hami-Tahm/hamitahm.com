import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import PrintButton from "./PrintButton";
import {
  OFFERS,
  AUDIT_PLATFORMS,
  AUDIT_PLATFORM_COUNT_WORD,
} from "@/lib/offers";
import { getAuditPricing } from "@/lib/currency";
import {
  HOMECALC_PROOF,
  HOMECALC_CLAIMS,
  HOMECALC_CITED_PAGES,
  HOMECALC_TOP_QUERIES,
  homecalcPageUrl,
} from "@/lib/homecalc-proof";
import { STUDY, SITES, COMMERCIAL_REALITY } from "@/lib/citation-study";

/**
 * /ai-visibility/sample-report/: the audit deliverable, shown in public.
 *
 * ── WHY THIS PAGE EXISTS ──
 * The audit is $1,500 paid up front by strangers, with no sales call. The single
 * biggest thing standing between a visitor and that button is not price, it is not
 * knowing what arrives. This page removes that unknown by showing the real thing.
 *
 * ── THE TWO RULES THIS PAGE MUST NEVER BREAK ──
 *
 * 1. EVERY NUMBER ON THIS PAGE IS REAL AND ALREADY PUBLISHED ELSEWHERE ON THIS SITE.
 *    Nothing here is illustrative, modelled or "representative". It is all imported
 *    from homecalc-proof.ts and citation-study.ts, which each carry their own
 *    provenance rules. Do not hardcode a figure into this file; if a number is
 *    worth showing here, it belongs in one of those two files first.
 *
 *    This matters more here than anywhere else on the site: this is the page that
 *    says "here is what my work looks like". A fabricated sample of a product whose
 *    entire value is honest measurement would be self-defeating.
 *
 * 2. STRUCTURE IS PUBLISHABLE. METHOD IS NOT.
 *    Showing the report's sections, its tables, and what a finding looks like is
 *    marketing. How the thirty prompts are selected, and how many times each is
 *    re-run to separate a real pattern from model variance, is the product. Same
 *    line as citation-study.ts: publish the outcome, never the mechanism.
 *
 * ── WHY THE SUBJECT IS OUR OWN DATA ──
 * No client's audit is reproduced here, redacted or otherwise. The two subjects are
 * HomeCalc.ca and hamitahm.com (both owned by us, both already published with their
 * consoles on screen). That means no consent question, no anonymisation that a reader
 * has to take on faith, and a sample where the unflattering half (hamitahm.com's
 * plateau) is shown as plainly as the flattering half.
 *
 * ── THE PDF ──
 * There is deliberately NO static PDF in /public. A hand-built PDF would drift from
 * offers.ts the first time a price moved, and would then be a stale document with a
 * download link pointed at it. Instead this page carries print styles (see the
 * @media print block in globals.css) and a print button, so the buyer's PDF is
 * generated from the live page and can never disagree with it.
 */

const SITE = "https://hamitahm.com";
const URL = `${SITE}/ai-visibility/sample-report/`;
const AUDIT_URL = OFFERS.audit.href;
const CHECKER_URL = OFFERS.checker.href;
const HUB_URL = "/ai-visibility/";

export const metadata: Metadata = {
  title: "Sample AI Visibility Audit Report",
  description:
    "See exactly what the $1,500 AI Visibility Audit delivers: the real sections, tables and findings, built from published console data rather than a mock-up.",
  alternates: { canonical: URL },
};

/**
 * The report's table of contents, also rendered as the on-page nav, so the buyer
 * can see the shape of the deliverable before reading a word of it.
 */
const SECTIONS = [
  { id: "scope", n: "01", title: "Scope and method statement" },
  { id: "standing", n: "02", title: "Where you stand today" },
  { id: "pages", n: "03", title: "Which pages earn citations" },
  { id: "queries", n: "04", title: "Query-level citation share" },
  { id: "engines", n: "05", title: "Engine-by-engine read" },
  { id: "finding", n: "06", title: "Prioritized findings" },
  { id: "gap", n: "07", title: "Content gap" },
  { id: "not", n: "08", title: "What this report does not claim" },
] as const;

function buildFaqItems(priceDisplay: string) {
  return [
  {
    q: "Is this a real report or a mock-up?",
    a: "The data is real. Every figure on this page was read from Bing Webmaster Tools' AI Performance report or Google Search Console, and each one is published elsewhere on this site with its source named. The subject is our own two properties (HomeCalc.ca and hamitahm.com) rather than a client's audit, so nothing here depends on you trusting an anonymisation.",
  },
  {
    q: "Why use your own sites instead of a client's?",
    a: "Two reasons. A client's report is theirs, and redacting one still asks you to believe the redaction. And using our own sites let us include the bad result: hamitahm.com is in here as a site that earned thousands of AI citations while the page it actually sells earned twelve. A sample that only shows wins tells you nothing about what happens when the answer is unflattering.",
  },
  {
    q: "Does the real report show the method?",
    a: `Your report shows every input and every result: the prompts, the engines, the country each answer was recorded from, and the date. What it does not publish, here or in the report, is how the ${OFFERS.audit.scope.promptCount} prompts are selected and how variance between model runs is handled. That is the part you are paying for, and putting it in a public sample would make it worth nothing.`,
  },
  {
    q: "How long is the actual report?",
    a: "Longer than this page, because yours is specific to you: every prompt, every engine's answer recorded verbatim with its date and country, the competitor comparison, the content gap, and the full prioritized finding list. This page shows the structure and one worked finding, not the volume.",
  },
  {
    q: "Do I get a call, or just the document?",
    a: `Both. The ${priceDisplay} audit includes the written report, a 60-minute walkthrough call, and 14 days of follow-up access. If you then want the findings turned into a fixed-scope plan your own developer can ship, that is the ${OFFERS.actionPlan.name} (${OFFERS.actionPlan.priceWithCurrency}) and the audit fee is credited toward it.`,
  },
  ];
}

function buildStructuredData(faqItems: ReturnType<typeof buildFaqItems>) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${URL}#page`,
        url: URL,
        name: "Sample AI Visibility Audit Report",
        description:
          "A public sample of the AI Visibility Audit deliverable, built from published console data.",
        inLanguage: "en-CA",
        publisher: { "@id": `${SITE}/#organization` },
        about: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "AI Visibility", item: `${SITE}${HUB_URL}` },
          { "@type": "ListItem", position: 3, name: "Sample Report", item: URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/* ── small presentational helpers, local to this page ── */

function SectionHead({ n, id, title }: { n: string; id: string; title: string }) {
  return (
    <div id={id} style={{ scrollMarginTop: 90, marginBottom: 18 }}>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: ".18em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Section {n}
      </div>
      <h2
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 500,
          fontSize: "clamp(24px, 3.2vw, 32px)",
          lineHeight: 1.15,
          letterSpacing: "-.015em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Source({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--mono)",
        fontSize: 11.5,
        lineHeight: 1.6,
        color: "var(--faint)",
        marginTop: 12,
      }}
    >
      Source: {children}
    </p>
  );
}

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

export default async function SampleReportPage() {
  const { priceWithCurrency, checkoutUrl } = await getAuditPricing();
  const FAQ_ITEMS = buildFaqItems(priceWithCurrency);
  const structuredData = buildStructuredData(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <nav
          className="no-print"
          style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}
        >
          <Link href={HUB_URL} style={{ color: "var(--faint)" }}>AI Visibility</Link>
          <span>/</span>
          <span>Sample Report</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <header style={{ padding: "30px 0 26px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Sample Report: {OFFERS.audit.name}
            </div>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.2vw, 56px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "20ch",
              }}
            >
              Before you pay {priceWithCurrency}, see exactly what arrives
            </h1>
          </RevealSection>
          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19.5px)",
                color: "var(--muted)",
                maxWidth: "60ch",
                lineHeight: 1.6,
              }}
            >
              Eight sections, real tables, and one worked finding, built from
              console data that is already published on this site, on our own two
              properties. Not a mock-up, and not only the flattering half.
            </p>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }} className="no-print">
              <a
                href={checkoutUrl}
                style={{
                  display: "inline-block",
                  padding: "13px 22px",
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: 4,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Book the audit for {priceWithCurrency}
              </a>
              <PrintButton />
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Contents ── */}
      <section style={{ padding: "10px 0 44px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div
              style={{
                border: "1px solid var(--line-strong)",
                borderRadius: 6,
                padding: "22px 24px",
                background: "var(--panel)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11.5,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 14,
                }}
              >
                What&rsquo;s in the report
              </div>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {SECTIONS.map((s) => (
                  <li
                    key={s.id}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "8px 0",
                      borderTop: "1px solid var(--line)",
                      fontSize: 15.5,
                    }}
                  >
                    <span style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--faint)", paddingTop: 2 }}>
                      {s.n}
                    </span>
                    <a href={`#${s.id}`} style={{ color: "var(--ink)", textDecoration: "none" }}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 01 Scope ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[0]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7 }}>
              Every report opens by stating what was measured and what was not, so
              that no figure later in the document has to be taken on trust. Yours
              covers {OFFERS.audit.scope.promptCount} prompts across{" "}
              {AUDIT_PLATFORM_COUNT_WORD} engines ({AUDIT_PLATFORMS.join(", ")}), plus up to
              three named competitors and a content gap analysis.
              Each recorded answer carries the date it was captured and the country it
              was run from, because these engines answer differently by market and an
              undated screenshot proves nothing.
            </p>
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 14 }}>
              The section also states the limits plainly. Only two of the six engines
              report anything back to publishers at all: Microsoft Copilot, through
              Bing Webmaster Tools, and Google, through Search Console, and
              Google publishes impressions with no citation count. ChatGPT, Gemini,
              Claude and Perplexity report nothing. Where a number exists it is named
              and sourced; where it does not, the report says so rather than
              estimating.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 Where you stand ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[1]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 22 }}>
              The baseline. For this sample the subject is{" "}
              <a href={HOMECALC_PROOF.siteUrl} style={{ color: "var(--accent)" }}>
                HomeCalc.ca
              </a>
              , a Canadian real-estate calculator site that was{" "}
              {HOMECALC_PROOF.domainAge} and sitting at near-zero.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 1,
                background: "var(--line-strong)",
                border: "1px solid var(--line-strong)",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {[
                { v: HOMECALC_PROOF.combinedAppearances, l: HOMECALC_PROOF.combinedLabel },
                { v: HOMECALC_PROOF.pagesCited, l: "distinct cited pages" },
                { v: HOMECALC_PROOF.peakPerDay, l: "peak citations per day" },
                { v: HOMECALC_PROOF.topCitationShare, l: "top citation share" },
              ].map((s) => (
                <div key={s.l} style={{ background: "var(--panel)", padding: "20px 18px" }}>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 30,
                      lineHeight: 1.1,
                      letterSpacing: "-.02em",
                    }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Source>
              {HOMECALC_PROOF.combinedSourceLong}. The {HOMECALC_PROOF.combinedLabel}{" "}
              total is {HOMECALC_CLAIMS.breakdown}.
            </Source>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 Pages ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[2]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
              A total tells you nothing about what to do. This table is where the
              report becomes actionable: it names the pages the engines actually pull
              from, which is almost never the pages a business assumes.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Page</th>
                    <th style={thStyle}>Type</th>
                    <th style={numHead}>Citations</th>
                  </tr>
                </thead>
                <tbody>
                  {HOMECALC_CITED_PAGES.map((p) => (
                    <tr key={p.path}>
                      <td style={cellBase}>
                        <a href={homecalcPageUrl(p.path)} style={{ color: "var(--ink)" }}>
                          {p.label}
                        </a>
                      </td>
                      <td style={{ ...cellBase, color: "var(--muted)", fontSize: 13.5 }}>
                        {p.path.startsWith("tools/") ? "Tool" : "Guide"}
                      </td>
                      <td style={numCell}>{p.citations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Source>{HOMECALC_PROOF.sourceLong}, trailing three-month view.</Source>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 Queries ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[3]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
              Share matters more than volume. A query where you hold 39% of all
              citations is a position worth defending; one where you hold 2% of a
              bigger number is a queue you are standing in.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Grounding query</th>
                    <th style={numHead}>Citations</th>
                    <th style={numHead}>Share</th>
                  </tr>
                </thead>
                <tbody>
                  {HOMECALC_TOP_QUERIES.map((q) => (
                    <tr key={q.query}>
                      <td style={cellBase}>{q.query}</td>
                      <td style={numCell}>{q.citations}</td>
                      <td style={{ ...numCell, color: "var(--accent)" }}>{q.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Source>
              {HOMECALC_PROOF.sourceLong}. Sorted by citations, not by share: a
              high share on a handful of citations is noise, and the report says so
              wherever it appears.
            </Source>
          </RevealSection>
        </div>
      </section>

      {/* ── 05 Engines ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[4]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
              One row per engine, per prompt. In your report each row carries the
              engine&rsquo;s answer recorded verbatim, the date, the country it was run
              from, and which competitor was named if you were not. Below is the shape
              of it, and what each engine can and cannot tell us.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--panel)" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Engine</th>
                    <th style={thStyle}>Reports back to publishers?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Microsoft Copilot", "Yes: citation counts, cited pages and grounding queries, via Bing Webmaster Tools."],
                    ["Google AI Overviews", "Partly: impressions only, in Search Console. No clicks, no citation count, no queries."],
                    ["ChatGPT", "No: measured by hand, recorded verbatim with date and country."],
                    ["Gemini", "No: measured by hand, recorded verbatim with date and country."],
                    ["Claude", "No: measured by hand, recorded verbatim with date and country."],
                    ["Perplexity", "No: measured by hand, recorded verbatim with date and country."],
                  ].map(([e, r]) => (
                    <tr key={e}>
                      <td style={{ ...cellBase, whiteSpace: "nowrap", fontWeight: 600 }}>{e}</td>
                      <td style={{ ...cellBase, color: "var(--muted)" }}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginTop: 16 }}>
              This table is the reason the audit is done by a person rather than a
              dashboard. Four of the {AUDIT_PLATFORM_COUNT_WORD} engines publish
              nothing at all, so any tool claiming a score across all of them is
              inferring it. The report distinguishes the measured from the observed on
              every line.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 06 Worked finding ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[5]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 22 }}>
              Findings are ranked by what they cost you, not by how easy they are to
              fix. Here is a real one, worked end to end, and it is about{" "}
              <strong style={{ color: "var(--ink)" }}>this site</strong>, not a
              client&rsquo;s, because a sample that only shows wins is not a sample.
            </p>

            <div
              style={{
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 6,
                background: "var(--panel)",
                padding: "24px 26px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11.5,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                Finding 01 &middot; Priority: high &middot; Subject: {SITES.hamitahm.name}
              </div>
              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.35,
                  marginBottom: 14,
                }}
              >
                The domain earns thousands of AI citations. The page it sells earns
                twelve.
              </h3>

              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--ink)" }}>Observed.</strong>{" "}
                {SITES.hamitahm.name} recorded {SITES.hamitahm.citations} Copilot
                citations across the window, and the curve was{" "}
                {SITES.hamitahm.curve}. Meanwhile{" "}
                {HOMECALC_PROOF.siteUrl.replace("https://", "").replace("/", "")}{" "}
                (same owner, same window, {SITES.homecalc.ageAtStart}) recorded{" "}
                {SITES.homecalc.citations} on a curve described as{" "}
                {SITES.homecalc.curve}.
              </p>

              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 14 }}>
                <strong style={{ color: "var(--ink)" }}>Diagnosis.</strong> The volume
                is real but it is landing in the wrong place. An old essay,{" "}
                &ldquo;{COMMERCIAL_REALITY.page}&rdquo;, absorbs{" "}
                {COMMERCIAL_REALITY.aiCitations} of them. The commercial page
                (the one the business actually sells) earns{" "}
                {COMMERCIAL_REALITY.moneyPageCitations}.
              </p>

              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 14 }}>
                <strong style={{ color: "var(--ink)" }}>Commercial impact.</strong>{" "}
                Over the same quarter that essay produced{" "}
                {COMMERCIAL_REALITY.googleClicksPerQuarter} Google clicks, and the
                whole domain produced {COMMERCIAL_REALITY.siteClicksPerQuarter} at an
                average position of {COMMERCIAL_REALITY.siteAvgPosition}. Citations
                are not traffic and traffic is not revenue; the report says which of
                the three a number belongs to every time it shows one.
              </p>

              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 14 }}>
                <strong style={{ color: "var(--ink)" }}>What this means for you.</strong>{" "}
                A visibility number that goes up is not automatically a win. Before
                anyone spends a dollar chasing more citations, the report establishes
                whether the citations already being earned point at anything that
                makes money, and if they do not, that becomes finding 01 rather
                than a footnote.
              </p>
            </div>

            <Source>
              {STUDY.source}, {STUDY.windowStart} &ndash; {STUDY.windowEnd}, pulled{" "}
              {STUDY.pulledOn}; Google Search Console for the clicks and position
              figures. The full dataset is published, licensed CC BY 4.0, at{" "}
              <Link href="/research/" style={{ color: "var(--accent)" }}>
                /research/
              </Link>
              .
            </Source>

            <p style={{ fontSize: 15, color: "var(--faint)", lineHeight: 1.7, marginTop: 18 }}>
              Your report contains the full ranked list in this format. Each entry names
              the pages involved, the evidence, and what changing it is expected to move.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 07 Content gap ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[6]} />
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7 }}>
              The last analytical section, and usually the one that produces the most
              work for the client&rsquo;s team. It lists the questions buyers in your
              category are asking the engines where a competitor is answering and you
              are not, separated into pages you do not have, pages you have but
              that are not structured to be extracted from, and pages that exist and
              are being passed over for a reason the report names.
            </p>
            <p style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.7, marginTop: 14 }}>
              For the sample subject the pattern is visible in section 03 above: five
              of the six most-cited pages are tools rather than articles. That is a
              content-gap finding, not a coincidence, and it is the kind of thing the
              section exists to surface before you commission another blog post.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 08 What it does not claim ── */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionHead {...SECTIONS[7]} />
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                "It does not promise a citation count. Nobody can, and any report that does is selling you a forecast dressed as a finding.",
                "It does not include execution. The deliverable is the measurement and the recommendations; your own developer or agency ships the changes.",
                "It does not report on engines that publish nothing as though they did. Where an answer was observed by hand, the report says so, with the date and the country.",
                "It does not treat a citation as a customer. Section 06 above exists precisely because those two came apart on our own site.",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    borderTop: "1px solid var(--line)",
                    padding: "16px 0",
                    fontSize: 15.5,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "10px 0 56px" }} className="no-print">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div
              style={{
                border: "1px solid var(--line-strong)",
                borderRadius: 6,
                background: "var(--panel)",
                padding: "28px 28px 30px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: 1.15,
                  letterSpacing: "-.015em",
                  marginBottom: 12,
                }}
              >
                This, about your site
              </h2>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: "56ch" }}>
                {OFFERS.audit.name}: {priceWithCurrency}, flat fee,
                one-time. {OFFERS.audit.scope.promptCount} prompts
                across {AUDIT_PLATFORM_COUNT_WORD} engines, up to three competitors, a
                content gap analysis, a 60-minute walkthrough and 14 days of follow-up.
                Delivered within 7 business days.
              </p>
              <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={checkoutUrl}
                  style={{
                    display: "inline-block",
                    padding: "13px 22px",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Book the audit
                </a>
                <Link
                  href={CHECKER_URL}
                  style={{
                    display: "inline-block",
                    padding: "13px 22px",
                    border: "1px solid var(--line-strong)",
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  Or start with the free check
                </Link>
              </div>
              <p style={{ fontSize: 13.5, color: "var(--faint)", marginTop: 16, lineHeight: 1.6 }}>
                Not ready for the full audit? The{" "}
                <Link href={AUDIT_URL} style={{ color: "var(--accent)" }}>
                  audit page
                </Link>{" "}
                covers scope and turnaround in detail.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 0 70px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.15,
                letterSpacing: "-.015em",
                marginBottom: 20,
              }}
            >
              Sample report: FAQ
            </h2>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} className="faq-item" style={{ borderTop: "1px solid var(--line)", padding: "18px 0" }}>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16.5, fontWeight: 600, marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65 }}>{a}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>
    </>
  );
}
