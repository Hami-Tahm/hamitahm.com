/**
 * Single source of truth for all HomeCalc proof metrics shown across hamitahm.com.
 *
 * Update HOMECALC_PROOF below. The HOMECALC_CLAIMS strings auto-derive from it,
 * so every page that imports them (hami-tahm, the-10000-hour-rule, all 6 AI
 * Visibility pages, seo-expert-toronto, orthodontic-seo-marketing-case-study,
 * and the case study itself) updates with one change here.
 *
 * Outcome only. Never put the underlying mechanism in this file or anywhere
 * else on the public site — that is paid IP.
 *
 * Last updated: 2026-07-27 — read directly from Bing Webmaster → AI Performance,
 * site selector confirmed as homecalc.ca, trailing 3-month view ending Jul 25, 2026.
 *
 * ── WHY THE NUMBER MOVED ──
 * 6,500+ → 7,400+ (Jul 14) → 14,600+ (Jul 27). Verified in the console, not inferred.
 * The curve steepened rather than plateaued: peak/day went 280 → 424 (Jul 25), which
 * is why the total roughly doubled while the window only moved ~2.5 weeks.
 *
 * ⚠️ WHEN THIS NUMBER CHANGES, THESE MUST CHANGE WITH IT:
 *   - public/llms.txt (appears twice)
 *   - README.md
 *   - src/lib/citation-study.ts → STUDY.totalCitations (it is HomeCalc + hamitahm.com,
 *     so it can never be lower than this figure)
 *   - the X / LinkedIn / Product Hunt bios, which are edited by hand
 * Several different citation figures across properties we own is exactly the kind of
 * contradiction an LLM cross-checks and downgrades us for.
 */
export const HOMECALC_PROOF = {
  citations: "14,600+",
  pagesCited: "25+",
  timeframe: "3 months",
  domainAge: "under three months old",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  siteUrl: "https://homecalc.ca/",
  peakPerDay: "420+",
  // ⚠️ LOWERED from 76% on 2026-07-27, deliberately. The Jul 25 console shows the
  // former 76% query ("mortgage affordability calculator 100000 salary") now sitting
  // at 63.02%, and the highest share visible in the sorted-by-citations view is
  // 71.83% ("calculate land transfer tax ontario"). 76% is therefore no longer
  // supported. Confirm by sorting the grounding-query table by Citation Share — if a
  // higher share exists further down, raise this back up. Never guess upward.
  topCitationShare: "72%",

  // ── PLATFORM PROVENANCE — the single most important honesty control ──
  // This citation count comes from ONE source: Bing Webmaster Tools' AI Performance
  // report, which measures Microsoft Copilot and its partners. It does NOT measure
  // ChatGPT, Perplexity, Gemini or Google AI Overviews — none of which expose citation
  // data to publishers. Do NOT attach this number to those platforms anywhere.
  // Attribute the NUMBER with `sourceLabel`; only describe the audit *service* as
  // covering ChatGPT/Perplexity/etc, because the audit genuinely reviews them.
  sourceLabel: "Microsoft Copilot (Bing AI Performance)",
  sourceLong:
    "measured in Bing Webmaster Tools' AI Performance report (Microsoft Copilot and partners)",
} as const;

const CITATIONS_BARE = HOMECALC_PROOF.citations.replace("+", "");
const TIMEFRAME_TITLE = HOMECALC_PROOF.timeframe
  .split(" ")
  .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : w))
  .join(" ");

/**
 * Pre-formatted claim phrases. Use these on every page instead of hardcoding
 * the numbers. When HOMECALC_PROOF changes, all phrases update automatically.
 */
export const HOMECALC_CLAIMS = {
  /** "6,500+ AI citations in 3 months" */
  citationsInTimeframe: `${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "over 6,500 AI citations in 3 months" */
  overCitationsInTimeframe: `over ${CITATIONS_BARE} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "6,500-citation lift visible in 3 months" (compound, no plus sign) */
  liftVisible: `${CITATIONS_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "full 6,500-citation lift visible in 3 months" */
  fullLiftVisible: `full ${CITATIONS_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "near-zero to 6,500+ AI citations in 3 months" */
  zeroToCitations: `near-zero to ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "HomeCalc case study — 6,500+ AI citations in 3 months" */
  caseStudyCardLabel: `HomeCalc case study — ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "6,500+ AI Citations. 3 Months." (hero / H2 punch line) */
  heroPunchLine: `${HOMECALC_PROOF.citations} AI Citations. ${TIMEFRAME_TITLE}.`,
} as const;

export const HOMECALC_CITED_PAGES = [
  // Refreshed 2026-07-27 from the same trailing 3-month view as the headline figure.
  // Values are shown exactly as the console renders them (1.7K, not "1,700") so the
  // page never implies more precision than the source does. Note the order changed:
  // the how-to-qualify guide overtook the calculators.
  { label: "How to Qualify for a Mortgage", path: "blog/how-to-qualify-for-a-mortgage-in-canada", citations: "1.7K" },
  { label: "Mortgage Affordability Calculator", path: "tools/mortgage-affordability-calculator", citations: "1.4K" },
  { label: "Closing Cost Calculator", path: "tools/closing-cost-calculator", citations: "1.3K" },
  { label: "Mortgage Amortization Calculator", path: "tools/mortgage-amortization-calculator", citations: "876" },
  { label: "Mortgage Qualifier Calculator", path: "tools/mortgage-qualifier-calculator", citations: "656" },
  { label: "Down Payment on a House in Canada", path: "blog/down-payment-of-a-house-canada", citations: "644" },
] as const;

/** Top grounding queries — query, citations, citation share (% of all AI citations for that query). */
export const HOMECALC_TOP_QUERIES = [
  { query: "property transfer tax bc", citations: "263", share: "29%" },
  { query: "land transfer tax ontario", citations: "160", share: "39%" },
  { query: "best rent increase calculator", citations: "123", share: "21%" },
  { query: "calculate land transfer tax ontario", citations: "102", share: "72%" },
  { query: "mortgage affordability calculator (100K salary)", citations: "86", share: "76%" },
] as const;

export function homecalcPageUrl(path: string) {
  return `${HOMECALC_PROOF.siteUrl}${path}`;
}
