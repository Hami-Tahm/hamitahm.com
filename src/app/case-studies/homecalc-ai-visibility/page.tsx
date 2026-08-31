import type { Metadata } from "next";
import { ZoomableImage } from "@/components/ZoomableImage";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import {
  HOMECALC_CITED_PAGES,
  HOMECALC_CLAIMS,
  HOMECALC_HEADLINE_STAT,
  HOMECALC_PROOF,
  HOMECALC_TOP_QUERIES,
  homecalcPageUrl,
} from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const TURNAROUND = "7 business days";
/**
 * Screenshot of the Bing Webmaster Tools → AI Performance console for homecalc.ca,
 * trailing 3-month view (May 9 – Aug 7, 2026), captured 2026-08-07.
 *
 * ⚠️ width/height below must match the file's real pixel dimensions (2368×1144).
 * The previous values (1400×532) described a differently-cropped screenshot and no
 * longer matched, which makes Next.js reserve the wrong aspect ratio and shifts the
 * layout as the image loads. If the screenshot is ever re-cropped, re-measure it.
 */
const CHART_SRC = "/images/case-studies/homecalc-citation-chart.jpg";

/**
 * Google Search Console → Performance → Generative AI features (Beta), homecalc.ca,
 * 3-month view, captured 2026-08-10. 1549×679.
 *
 * ⚠️ This report exposes IMPRESSIONS ONLY: no clicks, no CTR, no position, no query
 * breakdown. It is not the same measurement as Bing's citation count and must never be
 * added to it. See the figcaption, which says so to the reader as well.
 */
const GOOGLE_AI_SRC = "/images/case-studies/homecalc-google-ai-impressions.jpg";
const GOOGLE_AI_ALT =
  "Google Search Console Generative AI features report for homecalc.ca, three-month view: 15,000 total impressions in Google's generative AI surfaces.";
const CHART_ALT = `Bing Webmaster Tools AI Performance console for homecalc.ca, three-month view: AI citations climbing from near-zero in early May 2026 to ${HOMECALC_PROOF.citations} total across ${HOMECALC_PROOF.pagesCited} cited pages, with daily peaks of ${HOMECALC_PROOF.peakPerDay}.`;

export const metadata: Metadata = {
  title: "HomeCalc.ca AI Visibility Case Study",
  description: `How HomeCalc.ca went from near-zero to ${HOMECALC_CLAIMS.appearancesInTimeframe} on a YMYL financial site that was under three months old when the audit began, now commanding up to ${HOMECALC_PROOF.topCitationShare} citation share on key queries. By Hami Tahm.`,
  alternates: {
    canonical: "https://hamitahm.com/case-studies/homecalc-ai-visibility/",
  },
};

const HERO_STATS = [
  { value: HOMECALC_HEADLINE_STAT.value, label: "Total AI Appearances" },
  { value: HOMECALC_PROOF.pagesCited, label: "Pages Cited" },
  { value: HOMECALC_PROOF.timeframe, label: "Timeframe" },
  { value: "< 3 months", label: "Domain Age" },
] as const;

const RESULT_STATS = [
  { value: HOMECALC_HEADLINE_STAT.value, label: "Total appearances" },
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
          item: "https://hamitahm.com/case-studies/",
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
      headline: `How a brand-new Canadian site earned ${HOMECALC_CLAIMS.appearancesInTimeframe}`,
      datePublished: "2026-05-01",
      dateModified: "2026-07-17",
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      publisher: { "@id": "https://hamitahm.com/#organization" },
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
            <Link href="/case-studies/" style={{ color: "var(--faint)" }}>
              Case Study
            </Link>
            <span>/</span>
            <span>HomeCalc.ca</span>
          </nav>
        </RevealSection>
      </div>

      {/* 1. Hero */}
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
              How a brand-new Canadian site earned {HOMECALC_PROOF.combinedAppearances} AI
              appearances in {HOMECALC_PROOF.timeframe}
            </h1>
          </RevealSection>

          <RevealSection delay={0.03}>
            <p
              style={{
                marginTop: 18,
                fontFamily: "var(--serif)",
                fontSize: "clamp(19px, 2.4vw, 26px)",
                color: "var(--ink)",
                lineHeight: 1.4,
                maxWidth: "40ch",
              }}
            >
              Proof that AI search visibility can be built, not bought. The same
              method we run for your business.
            </p>
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
              </Link>
              , May 2026. Updated June 17, 2026 with latest citation data.
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
              HomeCalc.ca launched into one of Canada&rsquo;s most competitive
              niches: real estate and mortgage. With no ad budget and nothing
              to buy its way in, it earned {HOMECALC_PROOF.combinedAppearances} AI
              appearances in its first {HOMECALC_PROOF.timeframe}, in a market
              dominated by banks/finance. Here is exactly what we did, and what
              it means for your business.
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

      {/* 2. The Client */}
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
              The Client: HomeCalc.ca
            </h2>
            <div
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                HomeCalc.ca is a Canadian personal finance calculator platform:
                mortgage qualifiers, closing-cost estimators, rent-increase
                tools, and land-transfer-tax calculators for buyers and renters
                in Ontario and across the rest of Canada. The site launched in
                early 2026 and was under three months old when the audit took
                place.
              </p>
              <p style={{ marginBottom: 20 }}>
                Personal finance is a YMYL category (
                <em style={{ fontStyle: "italic" }}>Your Money or Your Life</em>
                ), Google&rsquo;s designation for content that could materially
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

      {/* 3. The Challenge */}
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
              The Challenge: Invisible in AI Search
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
              financial questions. For YMYL queries (&ldquo;how much mortgage
              can I afford,&rdquo; &ldquo;what closing costs should I
              expect,&rdquo; &ldquo;how much can my landlord raise my
              rent&rdquo;), the bar to be cited is steep. Engines prefer
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
              platforms start recognizing it, if ever.
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
              Pre-audit baseline: near-zero AI citations in Bing Webmaster
              Tools&rsquo; AI Performance report (the same Microsoft
              Copilot source the after-figures come from).
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 4. The Results */}
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
              HomeCalc.ca accumulated {HOMECALC_PROOF.citations} AI citations
              across {HOMECALC_PROOF.pagesCited} pages in{" "}
              {HOMECALC_PROOF.timeframe}, on a financial site less than three
              months old at the time of the audit. The closing-cost-calculator
              page alone received {HOMECALC_CITED_PAGES[0].citations} citations,
              and on the &ldquo;mortgage affordability calculator&rdquo; query,
              HomeCalc commands a {HOMECALC_PROOF.topCitationShare} citation
              share, meaning roughly three out of every four AI answers on that
              query cite HomeCalc.
            </p>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="cs-results-row">
              {RESULT_STATS.map(({ value, label }) => (
                <StatBox key={label} value={value} label={label} />
              ))}
            </div>
          </RevealSection>

          {/*
            HEADLINE COMBINED FIGURE. Deliberately labelled "AI appearances", not
            "citations": 15,000 of it is Google impressions, and calling that a
            citation is the one move here that would be indefensible. The breakdown
            sits directly underneath so the total is never load-bearing on its own.
          */}
          <RevealSection delay={0.08}>
            <div
              style={{
                marginTop: 40,
                padding: "34px 32px",
                borderRadius: 14,
                background: "var(--accent-soft)",
                border: "1px solid var(--accent)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(46px, 9vw, 88px)",
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  color: "var(--accent)",
                }}
              >
                {HOMECALC_PROOF.combinedAppearances}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(19px, 2.6vw, 26px)",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginTop: 8,
                  letterSpacing: "-.01em",
                }}
              >
                {HOMECALC_PROOF.combinedLabel} in {HOMECALC_PROOF.timeframe}
              </div>

              <div
                style={{
                  marginTop: 22,
                  paddingTop: 20,
                  borderTop: "1px solid var(--line-strong)",
                  display: "grid",
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.55 }}>
                  <strong style={{ fontWeight: 600 }}>
                    {HOMECALC_PROOF.citations} citations
                  </strong>{" "}
                  <span style={{ color: "var(--muted)" }}>
                    via {HOMECALC_PROOF.sourceLabel}
                  </span>
                </div>
                <div style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.55 }}>
                  <strong style={{ fontWeight: 600 }}>
                    {HOMECALC_PROOF.googleImpressions} impressions
                  </strong>{" "}
                  <span style={{ color: "var(--muted)" }}>
                    via {HOMECALC_PROOF.googleSourceLabel}
                  </span>
                </div>
              </div>

              <p
                style={{
                  marginTop: 20,
                  fontSize: 14.5,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  maxWidth: "64ch",
                }}
              >
                Two companies&rsquo; consoles, two different metrics, added under the
                one word that is honestly true of both: a link to this site appeared
                inside an AI-generated answer. They are separate engines, so nothing is
                counted twice. Deliberately <em style={{ fontStyle: "italic" }}>not</em>{" "}
                called 32,800 citations: 15,000 of it is impressions, and Google
                reports no citation count at all. Neither console shows the total; each
                shows its own half, and both screenshots are below.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <figure style={{ marginTop: 36 }}>
              <ZoomableImage
                src={CHART_SRC}
                alt={CHART_ALT}
                width={2368}
                height={1144}
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
                The trailing three-month view, May 9 &ndash; August 7, 2026.
                Citations start at effectively zero (the first days on this
                chart read 3, 1, 0), then climb to peaks of{" "}
                {HOMECALC_PROOF.peakPerDay} citations per day, accumulating to{" "}
                {HOMECALC_PROOF.citations.replace("+", "")} across{" "}
                {HOMECALC_PROOF.pagesCited} cited pages.{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Source:
                </strong>{" "}
                {HOMECALC_PROOF.sourceLong}. This is Copilot data. Google now
                reports <em style={{ fontStyle: "italic" }}>impressions</em> in
                generative AI features (below), but not citation counts; ChatGPT,
                Gemini and Perplexity still report nothing to publishers. A
                selected-sample dataset behind this work is published openly
                (CC BY 4.0) in the{" "}
                <Link href="/blog/ai-citation-study/" style={{ color: "var(--accent)", fontWeight: 500 }}>
                  AI Citation Study
                </Link>
                .
              </figcaption>
            </figure>
          </RevealSection>

          {/*
            SECOND, INDEPENDENT PLATFORM: added 2026-08-10.
            Deliberately a separate figure with its own number, not merged into the
            Bing total. Bing reports CITATIONS (the page was cited in an answer);
            this report gives IMPRESSIONS ONLY (the page appeared in a generative AI
            feature): no clicks, no CTR, no position. Adding 17,800 citations to
            15,000 impressions would produce a figure that traces back to no console
            screen anywhere, which is exactly what this site's provenance rule exists
            to prevent. Two independent platforms agreeing is the stronger claim.
          */}
          <RevealSection delay={0.12}>
            <figure style={{ marginTop: 44 }}>
              <ZoomableImage
                src={GOOGLE_AI_SRC}
                alt={GOOGLE_AI_ALT}
                width={1549}
                height={679}
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
                The same site, a different company&rsquo;s console. Google Search
                Console&rsquo;s{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Generative AI features
                </strong>{" "}
                report (Beta) shows{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  15,000 impressions
                </strong>{" "}
                over roughly the same three months.{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  This is not added to the Copilot figure above, on purpose.
                </strong>{" "}
                Bing counts citations; this report counts impressions and exposes
                no clicks, CTR or position at all. They are different measurements
                from different companies, and summing them would invent a number
                that neither console shows. Two platforms independently registering
                the same site is the point, not a bigger total.
              </figcaption>
            </figure>
          </RevealSection>

          {/*
            Cross-platform page comparison, added 2026-08-10.
            NOTE ON METHOD: this deliberately compares WHICH pages appear and in what
            ORDER: never the magnitudes. Bing counts citations, Google counts
            impressions; the two numbers are not comparable, but "does this page show
            up at all, and how high" is a fair question to ask of both.
          */}
          <RevealSection delay={0.13}>
            <h3
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                fontWeight: 600,
                marginTop: 48,
                marginBottom: 12,
              }}
            >
              The two platforms reward completely different pages
            </h3>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20, maxWidth: "62ch" }}>
              Having both consoles open at once surfaced something neither shows on
              its own. Same site, same window: almost entirely different
              winners.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 18 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
                <thead>
                  <tr>
                    {["", "Copilot: most cited", "Google AI: most impressions"].map((h) => (
                      <th
                        key={h}
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
                  {[
                    ["1", "How to Qualify for a Mortgage (guide)", "Income Tax Calculator"],
                    ["2", "Mortgage Affordability Calculator", "Mortgage Prepayment Calculator"],
                    ["3", "Closing Cost Calculator", "Mortgage Affordability Calculator"],
                    ["4", "Mortgage Amortization Calculator", "Mortgage Payment Calculator"],
                    ["5", "Ontario Land Transfer Tax Calculator", "Mortgage Qualifier Calculator"],
                  ].map(([n, b, g]) => (
                    <tr key={n}>
                      <td style={{ padding: "11px 12px 11px 0", borderBottom: "1px solid var(--line)", color: "var(--faint)", fontFamily: "var(--mono)", fontSize: 12 }}>{n}</td>
                      <td style={{ padding: "11px 12px 11px 0", borderBottom: "1px solid var(--line)", color: "var(--ink)" }}>{b}</td>
                      <td style={{ padding: "11px 12px 11px 0", borderBottom: "1px solid var(--line)", color: "var(--ink)" }}>{g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 14, maxWidth: "62ch" }}>
              Three things stand out, and all three are checkable in the two
              screenshots above:
            </p>
            <ul style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16, paddingLeft: 20, maxWidth: "62ch" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ color: "var(--ink)" }}>
                  Google&rsquo;s single biggest page does not appear in Copilot&rsquo;s
                  top 25 at all.
                </strong>{" "}
                The income tax calculator draws 3,659 impressions (nearly
                three times Google&rsquo;s second-place page), and Copilot
                barely registers it.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ color: "var(--ink)" }}>Copilot cites guides. Google&rsquo;s AI surfaces do not.</strong>{" "}
                Seven of Copilot&rsquo;s top 25 are written guides, including the
                single most-cited page on the site. Google&rsquo;s top ten are ten
                calculators, not one article.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Rank does not transfer.</strong>{" "}
                Google&rsquo;s number-two page sits at twenty-first on Copilot. Only
                four pages are strong on both.
              </li>
            </ul>
            <p style={{ fontSize: 15, color: "var(--faint)", lineHeight: 1.65, marginBottom: 8, maxWidth: "62ch" }}>
              To be precise about method: the two columns are not the same
              measurement, so the numbers are never compared against each other.
              What is compared is which pages appear, and where: a fair
              question to ask of either console.
            </p>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: "62ch" }}>
              The practical consequence: optimising for &ldquo;AI visibility&rdquo;
              as one thing is a mistake. A page can own an answer on one platform
              and be invisible on the other, on the same day, from the same site.
            </p>
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
              for a given query that came from HomeCalc.ca. A{" "}
              {HOMECALC_PROOF.topCitationShare} share means that when AI engines
              answered this query, they cited HomeCalc in roughly three of every
              four answers.
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
              cited by AI engines for Canadian financial calculations; for
              several of the most important queries in the category, it is the
              <em style={{ fontStyle: "italic" }}> default source</em>.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 5. What Was Done */}
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
              implemented, and citations began climbing within 48 hours.
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

      {/* 6. What This Means */}
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
                If this worked on a YMYL financial site {HOMECALC_PROOF.domainAge}
                (the hardest category on the web, on one of the youngest domains
                in market), it works on businesses with real authority,
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

          {/*
            THE TWO-SIDED FINDING: added 2026-08-24

            Deliberately carries NO NUMBERS, and that is the point.

            It came out of a third-party AI-visibility report on homecalc.ca
            (Otterly, 22 prompts, 14 days) which is NOT published and should not
            be. Two reasons it stays private:

              1. Its "citation share" figure (3.2%, sixth of ten domains) means
                 something completely different from the "up to 72%" this page
                 already states from Bing Webmaster Tools: the first is share of
                 all citations across a prompt set, the second is share on one
                 query. Same words, different instruments. Publishing both on one
                 site invites a cross-check that reads as a contradiction.

              2. Its most interesting claim (that OAI-SearchBot had never reached
                 the domain, so ChatGPT visibility was zero) is unverified. This
                 site does not publish load-bearing claims it has not checked.

            What survived is the conclusion itself, which needs neither figure to
            be true and is corroborated by this site's OWN uncomfortable data:
            hamitahm.com earns thousands of Copilot citations while the page it
            sells earns 12. Placement and discovery are different problems.

            ⚠️ If a number is ever added to this block, the reasoning above stops
            applying: check it against homecalc-proof.ts first.
          */}
          <RevealSection delay={0.04}>
            <div
              style={{
                maxWidth: 740,
                marginBottom: 32,
                padding: "24px 26px",
                borderLeft: "3px solid var(--accent)",
                background: "var(--panel)",
                borderRadius: 4,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(19px, 2.4vw, 23px)",
                  lineHeight: 1.5,
                  letterSpacing: "-.01em",
                  color: "var(--ink)",
                  marginBottom: 16,
                }}
              >
                Content quality determines where you are placed when you appear.
                Distribution determines whether you appear at all.
              </p>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 17.5px)",
                  color: "var(--muted)",
                  lineHeight: 1.72,
                }}
              >
                Neither one substitutes for the other, and most sites are only
                working on one of them. That is the finding underneath every
                figure on this page, and it cuts both ways. This site,
                hamitahm.com, has the opposite problem to HomeCalc: it earns
                thousands of AI citations while the page it actually sells earns
                twelve. Being cited is not the same as being cited where it
                matters, and an audit that only counts citations would have
                missed it entirely.
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

      {/* 7. CTA */}
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
                <a href="mailto:hami@hamitahm.com" style={{ color: "var(--ink)" }}>
                  hami@hamitahm.com
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
