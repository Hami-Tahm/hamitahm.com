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
 * Last updated: 2026-07-05 (Bing Copilot AI Performance, 3-month window).
 */
export const HOMECALC_PROOF = {
  citations: "6,500+",
  pagesCited: "25+",
  timeframe: "3 months",
  domainAge: "under three months old",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  siteUrl: "https://homecalc.ca/",
  peakPerDay: "280+",
  topCitationShare: "76%",
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
  { label: "Closing Cost Calculator", path: "tools/closing-cost-calculator", citations: "833" },
  { label: "Mortgage Affordability Calculator", path: "tools/mortgage-affordability-calculator", citations: "542" },
  { label: "Land Transfer Tax — Ontario", path: "tools/land-transfer-tax-calculator/ontario", citations: "523" },
  { label: "How to Qualify for a Mortgage", path: "blog/how-to-qualify-for-a-mortgage-in-canada", citations: "467" },
  { label: "Land Transfer Tax — BC", path: "tools/land-transfer-tax-calculator/bc", citations: "447" },
  { label: "Mortgage Amortization Calculator", path: "tools/mortgage-amortization-calculator", citations: "393" },
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
