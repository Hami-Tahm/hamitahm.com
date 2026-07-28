import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { RESEARCH, RESEARCH_FILES, RESEARCH_LIMITS } from "@/lib/research";
import { STUDY, SITES } from "@/lib/citation-study";

const SLUG = "/research/";

/**
 * /research/ — the citable front door for the original dataset.
 *
 * ── WHY THIS PAGE EXISTS (GEO) ──
 * Original, first-party, re-usable data is the single most citation-worthy thing
 * this site owns. It was only reachable through a blog post, which means a
 * journalist or an answer engine had to read an essay to find the source. This
 * page is the canonical landing spot: identifier, mirror, files, method, limits.
 *
 * ── THE HONESTY LINE ──
 * The DOI / Zenodo / GitHub blocks render ONLY when those fields are non-null in
 * lib/research.ts. Do not hardcode a placeholder identifier to make the page look
 * finished — an unresolvable DOI destroys exactly the credibility this page is
 * built to earn. Until the record is published, the page still works: it points
 * at the CSV served from this domain.
 */

export const metadata: Metadata = {
  title: "Research & Data — AI Citation Dataset",
  description:
    "The open dataset behind the AI citation study: 21,700 citations across two owner-operated Canadian sites in three months. Files, methodology, and stated limitations, CC BY 4.0.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

const isPublished = RESEARCH.doi !== null && RESEARCH.zenodoUrl !== null;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `https://hamitahm.com${SLUG}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "Research & Data", item: `https://hamitahm.com${SLUG}` },
      ],
    },
    {
      "@type": "Dataset",
      "@id": `https://hamitahm.com${SLUG}#dataset`,
      name: RESEARCH.title,
      description:
        "Citation counts, most-cited pages, and query-level citation share for two websites under common ownership, measured over the same three-month window in Bing Webmaster Tools' AI Performance report (Microsoft Copilot and partners). Includes a file comparing citations against actual clicks and leads.",
      url: `https://hamitahm.com${SLUG}`,
      creator: { "@id": "https://hamitahm.com/#hami-tahm" },
      license: RESEARCH.licenseUrl,
      isAccessibleForFree: true,
      version: RESEARCH.version,
      temporalCoverage: "2026-04-25/2026-07-25",
      spatialCoverage: "Canada",
      measurementTechnique:
        "Bing Webmaster Tools AI Performance report (first-party citation counts); Google Search Console (clicks, impressions, average position)",
      variableMeasured: [
        "AI citations",
        "Pages earning citations",
        "Citation share per query",
        "Organic clicks",
        "Leads generated",
      ],
      // Only claim an identifier once one actually exists.
      ...(isPublished ? { identifier: `https://doi.org/${RESEARCH.doi}`, sameAs: RESEARCH.zenodoUrl } : {}),
      distribution: [
        {
          "@type": "DataDownload",
          encodingFormat: "text/csv",
          contentUrl: `https://hamitahm.com${RESEARCH.csvPath}`,
        },
      ],
    },
  ],
};

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <header style={{ padding: "72px 0 44px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <div style={eyebrow}>
              <span style={eyebrowLine} />
              Research &amp; Data
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              An open dataset on what AI engines actually cite &mdash;{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                including the parts that don&rsquo;t flatter me.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 26,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              Two websites. One owner. The same {STUDY.windowLabel.toLowerCase()},
              measured the same way. {STUDY.totalCitations} AI citations between
              them &mdash; and completely opposite results. Everything below is
              free to download, re-use and check, under {RESEARCH.license}.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
              <a href={RESEARCH.csvPath} download className="btn btn-primary">
                Download the data (CSV) <span className="arr">&darr;</span>
              </a>
              <Link href={RESEARCH.writeUpPath} className="btn btn-ghost">
                Read the full write-up
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — The headline numbers ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="01" text="What the dataset contains" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Same owner, same window, opposite outcomes.</h2>
            <p style={pStyle}>
              This is the finding, and it is the reason the dataset is worth
              publishing rather than just the total. Both sites were read from the
              same console on the same day, on the same trailing window.
            </p>
          </RevealSection>

          <div style={{ display: "grid", gap: 16, marginTop: 26 }}>
            {[SITES.homecalc, SITES.hamitahm].map((s, i) => (
              <RevealSection key={s.name} delay={0.04 * i}>
                <div style={card}>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "baseline" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>
                      {s.name}
                    </span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--accent)" }}>
                      {s.citations} citations &middot; {s.pagesCited} pages
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
                    {s.what} {s.ageAtStart.charAt(0).toUpperCase() + s.ageAtStart.slice(1)} at
                    the start of the window. Curve: {s.curve}.
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.12}>
            <p style={pStyle}>
              Roughly comparable totals. One is spread across{" "}
              {SITES.homecalc.pagesCited} pages and climbing; the other is dominated
              by a single page and flat.{" "}
              <b style={bStyle}>
                A citation total, on its own, tells you almost nothing.
              </b>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — Files ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="02" text="Files in the package" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ overflowX: "auto", marginTop: 8 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
                <thead>
                  <tr>
                    {["File", "What it holds"].map((h) => (
                      <th key={h} style={th}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESEARCH_FILES.map((f) => (
                    <tr key={f.name}>
                      <td style={{ ...td, fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--ink)", whiteSpace: "nowrap" }}>
                        {f.name}
                      </td>
                      <td style={td}>{f.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p style={pStyle}>
              The selected-sample CSV is served directly from this domain and will
              always resolve:{" "}
              <a href={RESEARCH.csvPath} download style={linkStyle}>
                download it here
              </a>
              . For the complete per-page export, or the underlying console
              screenshots, email{" "}
              <a href={`mailto:${RESEARCH.contactEmail}`} style={linkStyle}>
                {RESEARCH.contactEmail}
              </a>{" "}
              &mdash; I send them.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — How to cite (only when a real identifier exists) ── */}
      {isPublished && (
        <section style={{ padding: "40px 0" }}>
          <div className="wrap" style={{ maxWidth: 820 }}>
            <RevealSection>
              <SectionLabel number="03" text="How to cite" />
            </RevealSection>
            <RevealSection delay={0.06}>
              <div style={{ ...card, borderLeftColor: "var(--accent)" }}>
                <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
                  Tahm, H. (2026). <i>{RESEARCH.title}</i> [Data set]. Zenodo.{" "}
                  <a href={`https://doi.org/${RESEARCH.doi}`} style={linkStyle}>
                    https://doi.org/{RESEARCH.doi}
                  </a>
                </p>
              </div>
              <p style={pStyle}>
                Archived copy:{" "}
                <a href={RESEARCH.zenodoUrl!} style={linkStyle}>
                  Zenodo record
                </a>
                {RESEARCH.githubUrl && (
                  <>
                    {" "}
                    &middot; mirror:{" "}
                    <a href={RESEARCH.githubUrl} style={linkStyle}>
                      GitHub
                    </a>
                  </>
                )}
                .
              </p>
            </RevealSection>
          </div>
        </section>
      )}

      {/* ── Provenance ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number={isPublished ? "04" : "03"} text="Where the numbers come from" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Every figure was read off a console screen.</h2>
            <p style={pStyle}>
              Source: {STUDY.source}. Window: {STUDY.windowStart} &ndash;{" "}
              {STUDY.windowEnd}. Pulled: {STUDY.pulledOn}. Click and position data
              comes from Google Search Console over the same window. Nothing here is
              modelled, projected, or rounded upward.
            </p>
            <p style={pStyle}>
              Where the console displayed its own rounded figure &mdash; &ldquo;1.7K&rdquo;
              rather than an exact integer &mdash; the dataset publishes that same
              rounded string, so it never implies more precision than the source
              gave. The full measurement method, including how prompts and conditions
              are recorded for the non-Copilot engines, is on the{" "}
              <Link href={RESEARCH.methodologyPath} style={linkStyle}>
                methodology page
              </Link>
              .
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── Limitations ── */}
      <section style={{ padding: "40px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number={isPublished ? "05" : "04"} text="What this does not prove" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2 style={h2Style}>Stated up front, not buried in a footnote.</h2>
          </RevealSection>

          <div style={{ display: "grid", gap: 16, marginTop: 26 }}>
            {RESEARCH_LIMITS.map((l, i) => (
              <RevealSection key={l.head} delay={0.03 * i}>
                <div style={card}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>
                    {l.head}
                  </span>
                  <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>
                    {l.body}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Re-use ── */}
      <section style={{ padding: "40px 0 20px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div
              style={{
                border: "1px solid var(--line)",
                borderLeft: "2px solid var(--accent)",
                background: "var(--accent-soft)",
                borderRadius: 4,
                padding: "22px 24px",
                fontSize: 15.5,
                lineHeight: 1.65,
              }}
            >
              <p style={{ marginTop: 0, marginBottom: 10 }}>
                <b style={{ color: "var(--ink)" }}>Use this data. Please.</b> If you
                are writing about AI search and want real numbers instead of
                speculation, take them &mdash; charts, tables, figures. The licence is{" "}
                <a href={RESEARCH.licenseUrl} style={linkStyle}>
                  {RESEARCH.license}
                </a>
                : commercial use included, attribution the only condition.
              </p>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                Credit &ldquo;Hami Tahm&rdquo; and link back to this page so readers can
                check the source themselves.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "40px 0 80px" }}>
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
                Want this run on your own site?
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "52ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                The same measurement, on your queries and your competitors &mdash;
                dated, attributed, and honest about what it can&rsquo;t tell you.
              </p>
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <Link href="/ai-visibility/ai-visibility-checker/" className="btn btn-primary">
                  Run the free check <span className="arr">&rarr;</span>
                </Link>
                <Link href={RESEARCH.caseStudyPath} className="btn btn-ghost">
                  Read the case study
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── shared bits ─────────────────────────────────────────────────────── */

const h2Style: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontWeight: 500,
  fontSize: "clamp(24px, 3.4vw, 34px)",
  lineHeight: 1.14,
  letterSpacing: "-.015em",
};
const pStyle: React.CSSProperties = {
  marginTop: 18,
  fontSize: "clamp(16px, 1.9vw, 18px)",
  color: "var(--muted)",
  lineHeight: 1.7,
};
const bStyle: React.CSSProperties = { color: "var(--ink)", fontWeight: 500 };
const linkStyle: React.CSSProperties = { color: "var(--accent)", fontWeight: 500 };

const card: React.CSSProperties = {
  border: "1px solid var(--line)",
  borderLeft: "2px solid var(--accent)",
  borderRadius: 6,
  padding: "18px 22px",
  background: "var(--panel)",
};

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px 10px 0",
  borderBottom: "1px solid var(--line-strong)",
  fontFamily: "var(--mono)",
  fontSize: 11,
  letterSpacing: ".06em",
  textTransform: "uppercase",
  color: "var(--faint)",
  fontWeight: 400,
};
const td: React.CSSProperties = {
  padding: "12px 12px 12px 0",
  borderBottom: "1px solid var(--line)",
  color: "var(--muted)",
  verticalAlign: "top",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  letterSpacing: ".18em",
  color: "var(--accent)",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: 12,
};
const eyebrowLine: React.CSSProperties = {
  width: 34,
  height: 1,
  background: "var(--accent)",
  display: "inline-block",
};

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
