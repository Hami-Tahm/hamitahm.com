import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import {
  HOMECALC_CITED_PAGES,
  HOMECALC_PROOF,
  HOMECALC_TOP_QUERIES,
  homecalcPageUrl,
} from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const TURNAROUND = "7 business days";
const CHART_SRC = "/images/case-studies/homecalc-citation-chart.png";
const CHART_ALT =
  "HomeCalc.ca AI citation growth chart, May–June 2026 — citations climbing from May 24 through mid-June, reaching 3,100+ total across 20+ cited pages, with daily peaks of 250+.";

export const metadata: Metadata = {
  title: "HomeCalc.ca AI Visibility Case Study",
  description:
    "How HomeCalc.ca went from near-zero to 3,100+ AI citations in 60 days on a YMYL financial site under three months old — now commanding up to 88% citation share on key queries. By Hami Tahm.",
  alternates: {
    canonical: "https://hamitahm.com/case-studies/homecalc-ai-visibility/",
  },
};

const HERO_STATS = [
  { value: HOMECALC_PROOF.citations, label: "Total AI Citations" },
  { value: HOMECALC_PROOF.pagesCited, label: "Pages Cited" },
  { value: HOMECALC_PROOF.timeframe, label: "Timeframe" },
  { value: "< 3 months", label: "Domain Age" },
] as const;

const RESULT_STATS = [
  { value: HOMECALC_PROOF.citations, label: "Total citations" },
  { value: HOMECALC_PROOF.pagesCited, label: "Pages cited" },
  { value: `< ${HOMECALC_PROOF.timeframe}`, label: "Time to lift" },
] as const;

const PROCESS_STEPS = [
  {
    label: "Audit",
    outcome: "Tested AI queries across 6 platforms",
  },
  {
    label: "Identify",
    outcome: "Surfaced the single highest-leverage gap",
  },
  {
    label: "Implement",
    outcome: "Change deployed; citations climbed within 48 hours",
  },
] as const;

const TOP_QUERIES = HOMECALC_TOP_QUERIES.map(
  ({ query, citations, share }) =>
    [query, `${citations} · ${share} AI citation share`] as const,
);

const VERTICALS = [
  {
    label: "Dental clinics",
    href: "/ai-visibility/ai-visibility-for-dental-clinics/",
  },
  {
    label: "Mortgage brokers",
    href: "/ai-visibility/ai-visibility-for-mortgage-brokers/",
  },
  {
    label: "Canadian SMBs",
    href: "/ai-visibility/ai-visibility-consultant-canada/",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: "https://hamitahm.com/case-studies/homecalc-ai-visibility/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "HomeCalc AI Visibility Case Study",
          item: "https://hamitahm.com/case-studies/homecalc-ai-visibility/",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "HomeCalc.ca — AI Visibility Case Study",
      datePublished: "2026-05-01",
      dateModified: "2026-06-17",
      author: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
      },
      publisher: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
      },
      about: {
        "@type": "WebSite",
        name: "HomeCalc.ca",
        url: HOMECALC_PROOF.siteUrl,
      },
    },
  ],
};

export default function HomeCalcCaseStudy() {
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
            <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <span>Case Study</span>
            <span>/</span>
            <span>HomeCalc.ca</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── 1 — Hero ── */}
      <header style={{ padding: "30px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.2vw, 58px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "24ch",
              }}
            >
              HomeCalc.ca — AI Visibility Case Study
            </h1>
          </RevealSection>

          <RevealSection delay={0.04}>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--faint)",
              }}
            >
              Case study by{" "}
              <Link href="/hami-tahm/" style={{ color: "var(--accent)" }}>
                Hami Tahm
              </Link>{" "}
              — May 2026. Updated June 17, 2026 with latest citation data.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 19.5px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              HomeCalc.ca is a Canadian financial calculator site — under three
              months old at the time of the audit — operating in one of
              Google&rsquo;s most scrutinized content categories: personal
              finance. After an AI visibility audit by Hami Tahm, the site went
              from near-zero AI citations to 3,100+ citations in 60 days, with
              20+ pages cited across major AI search platforms — and now
              commands up to 88% citation share on key Canadian financial
              queries.
            </p>
          </RevealSection>

          <RevealSection delay={0.12}>
            <div className="cs-stat-strip" style={{ marginTop: 32 }}>
              {HERO_STATS.map(({ value, label }) => (
                <StatBox key={label} value={value} label={label} large />
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.16}>
            <div style={{ marginTop: 36 }}>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 2 — The Client ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              The Client — HomeCalc.ca
            </h2>
            <div
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                HomeCalc.ca is a Canadian personal finance calculator platform
                — mortgage qualifiers, closing-cost estimators, rent-increase
                tools, and land-transfer-tax calculators for buyers and renters
                in Ontario and across the rest of Canada. The site launched in
                early 2026 and was under three months old when the audit took
                place.
              </p>
              <p style={{ marginBottom: 20 }}>
                Personal finance is a YMYL category —{" "}
                <em style={{ fontStyle: "italic" }}>Your Money or Your Life</em>{" "}
                — Google&rsquo;s designation for content that could materially
                affect a reader&rsquo;s financial wellbeing. YMYL sites are held
                to a higher standard than almost any other category, and AI
                engines apply similar caution before citing them. Building
                authority in YMYL is slow under the best conditions. On a domain
                under three months old, it shouldn&rsquo;t have been possible at
                all.
              </p>
            </div>
            <p style={{ marginTop: 8, fontSize: 15 }}>
              <a
                href={HOMECALC_PROOF.siteUrl}
                target="_blank"
                rel="noopener"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Visit HomeCalc.ca &rarr;
              </a>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — The Challenge ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 28,
              }}
            >
              The Challenge — Invisible in AI Search
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              YMYL category: why this was harder than average
            </h3>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 28,
              }}
            >
              AI engines weight content authority heavily when answering
              financial questions. For YMYL queries — &ldquo;how much mortgage
              can I afford,&rdquo; &ldquo;what closing costs should I
              expect,&rdquo; &ldquo;how much can my landlord raise my
              rent&rdquo; — the bar to be cited is steep. Engines prefer
              established institutional sources: banks, government departments,
              decade-old advisor brands. A new financial calculator site is, by
              default, invisible.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Domain age: under 3 months
            </h3>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 28,
              }}
            >
              HomeCalc.ca had no traditional domain authority to lean on. No
              backlink portfolio. No years of indexed content. No brand
              recognition signals. By every conventional measure, a site like
              this is expected to wait twelve to eighteen months before AI
              platforms start recognizing it — if ever.
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.6,
                paddingTop: 20,
                borderTop: "1px solid var(--line)",
              }}
            >
              Pre-audit baseline: near-zero AI citations across ChatGPT,
              Perplexity, and Google AI Overviews.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 4 — The Results ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 20,
              }}
            >
              The Results
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              HomeCalc.ca accumulated 3,100+ AI citations across 20+ pages in
              60 days — on a financial site less than three months old at the
              time of the audit. The closing-cost-calculator page alone received
              484 citations, and on the &ldquo;mortgage affordability calculator&rdquo;
              query, HomeCalc now commands an 88% citation share — meaning
              nearly nine out of every ten AI answers on that query cite
              HomeCalc.
            </p>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="cs-results-row">
              {RESULT_STATS.map(({ value, label }) => (
                <StatBox key={label} value={value} label={label} />
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <figure style={{ marginTop: 36 }}>
              <Image
                src={CHART_SRC}
                alt={CHART_ALT}
                width={1024}
                height={284}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 12,
                  border: "1px solid var(--line-strong)",
                }}
              />
              <figcaption
                style={{
                  marginTop: 16,
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  maxWidth: "62ch",
                }}
              >
                Citations began climbing around May 24, 2026 and have
                accelerated consistently — reaching peaks of 250+ citations per
                day by mid-June, with total accumulation exceeding 3,100 across
                20+ cited pages.
              </figcaption>
            </figure>
          </RevealSection>

          <RevealSection delay={0.14}>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                fontWeight: 600,
                marginTop: 48,
                marginBottom: 16,
              }}
            >
              Top performing pages
            </h3>
            <DataTable
              headers={["Page", "AI Citations"]}
              rows={HOMECALC_CITED_PAGES.map((page) => ({
                label: page.label,
                value: page.citations,
                href: homecalcPageUrl(page.path),
              }))}
            />
          </RevealSection>

          <RevealSection delay={0.18}>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                fontWeight: 600,
                marginTop: 40,
                marginBottom: 16,
              }}
            >
              Top grounding queries &amp; market share
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                maxWidth: "62ch",
                marginBottom: 16,
              }}
            >
              &ldquo;Citation share&rdquo; is the percentage of all AI citations
              for a given query that came from HomeCalc.ca. An 88% share means
              that when AI engines answered this query, they cited HomeCalc
              nearly nine times out of ten.
            </p>
            <DataTable
              headers={["Query", "AI Citations"]}
              rows={TOP_QUERIES.map(([label, value]) => ({ label, value }))}
            />
          </RevealSection>

          <RevealSection delay={0.22}>
            <p
              style={{
                marginTop: 40,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--ink)",
                lineHeight: 1.65,
                maxWidth: "62ch",
                paddingTop: 24,
                borderTop: "1px solid var(--line)",
                fontWeight: 500,
              }}
            >
              Volume matters. Dominance matters more. HomeCalc is no longer just
              cited by AI engines for Canadian financial calculations — for
              several of the most important queries in the category, it is the
              <em style={{ fontStyle: "italic" }}> default source</em>.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — What Was Done ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              What Was Done
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 24,
              }}
            >
              Hami Tahm conducted an AI visibility audit on HomeCalc.ca. He
              identified a specific technical change that would improve AI
              platform recognition of the site&rsquo;s pages. The change was
              implemented — and citations began climbing within 48 hours.
            </p>
            <blockquote
              style={{
                margin: "0 0 32px",
                paddingLeft: 20,
                borderLeft: "3px solid var(--accent)",
                fontFamily: "var(--serif)",
                fontSize: "clamp(17px, 2vw, 19px)",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.6,
              }}
            >
              &ldquo;I identified a specific technical change that produced this
              lift. The methodology is part of what you receive in the
              audit.&rdquo;
            </blockquote>
            <div className="cs-process-steps">
              {PROCESS_STEPS.map(({ label, outcome }, i) => (
                <div key={label} className="cs-process-step">
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 28,
                      color: "var(--accent)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 8,
                    }}
                  >
                    {label}
                  </div>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 14,
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 6 — What This Means ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              What This Means for Your Business
            </h2>
            <div
              style={{
                maxWidth: 740,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 32,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                If this worked on a YMYL financial site under three months old
                — the hardest category on the web, on one of the youngest domains
                in market — it works on businesses with real authority,
                established history, and clearer queries.
              </p>
              <p>
                An established dental clinic, mortgage broker, or B2B services
                firm doesn&rsquo;t carry the trust deficit HomeCalc started with.
                The same audit applied to your business should move faster, with
                less friction, against weaker competition for AI citations in
                your category.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div className="cs-verts-row">
              {VERTICALS.map(({ label, href }) => (
                <Link key={label} href={href} className="vert">
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--accent)",
                    }}
                  >
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 7 — CTA ── */}
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
                Get Your AI Visibility Audit
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
                See what an AI visibility audit can do for your business.
              </p>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                $1,500 CAD flat. Report and walkthrough call within {TURNAROUND}.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                Or email{" "}
                <a href="mailto:TahmHami@gmail.com" style={{ color: "var(--ink)" }}>
                  TahmHami@gmail.com
                </a>
              </p>
              <p
                style={{
                  marginTop: 28,
                  fontSize: 13,
                  color: "var(--faint)",
                  position: "relative",
                }}
              >
                <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>
                  AI Visibility hub
                </Link>
                {" · "}
                <Link
                  href="/ai-visibility/ai-visibility-consultant-canada/"
                  style={{ color: "var(--faint)" }}
                >
                  Consultant in Canada
                </Link>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

function StatBox({
  value,
  label,
  large,
}: {
  value: string;
  label: string;
  large?: boolean;
}) {
  return (
    <div className="proof-card">
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: large ? "clamp(32px, 4vw, 44px)" : 36,
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "-.02em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 14,
          color: "var(--muted)",
          marginTop: 10,
          lineHeight: 1.45,
        }}
      >
        {label}
      </div>
    </div>
  );
}

type TableRow = {
  label: string;
  value: string;
  href?: string;
};

function DataTable({
  headers,
  rows,
}: {
  headers: readonly [string, string];
  rows: readonly TableRow[];
}) {
  return (
    <table className="cs-data-table">
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, value, href }) => (
          <tr key={label}>
            <td>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--accent)", fontWeight: 500 }}
                >
                  {label}
                </a>
              ) : (
                label
              )}
            </td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
