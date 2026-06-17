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
 * Last updated: 2026-06-17.
 */
export const HOMECALC_PROOF = {
  citations: "3,100+",
  pagesCited: "20+",
  timeframe: "60 days",
  domainAge: "under three months old",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  siteUrl: "https://homecalc.ca/",
  peakPerDay: "250+",
  topCitationShare: "88%",
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
  /** "3,100+ AI citations in 60 days" */
  citationsInTimeframe: `${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "over 3,100 AI citations in 60 days" */
  overCitationsInTimeframe: `over ${CITATIONS_BARE} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "3,100-citation lift visible in 60 days" (compound, no plus sign) */
  liftVisible: `${CITATIONS_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "full 3,100-citation lift visible in 60 days" */
  fullLiftVisible: `full ${CITATIONS_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "near-zero to 3,100+ AI citations in 60 days" */
  zeroToCitations: `near-zero to ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "HomeCalc case study — 3,100+ AI citations in 60 days" */
  caseStudyCardLabel: `HomeCalc case study — ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
  /** "3,100+ AI Citations. 60 Days." (hero / H2 punch line) */
  heroPunchLine: `${HOMECALC_PROOF.citations} AI Citations. ${TIMEFRAME_TITLE}.`,
} as const;

export const HOMECALC_CITED_PAGES = [
  { label: "Closing Cost Calculator", path: "tools/closing-cost-calculator", citations: "484" },
  { label: "Land Transfer Tax — BC", path: "tools/land-transfer-tax-calculator/bc", citations: "325" },
  { label: "Mortgage Affordability Calculator", path: "tools/mortgage-affordability-calculator", citations: "320" },
  { label: "Land Transfer Tax — Ontario", path: "tools/land-transfer-tax-calculator/ontario", citations: "292" },
  { label: "Rent Increase Calculator", path: "tools/rent-increase-calculator", citations: "250" },
  { label: "Mortgage Qualifier Calculator", path: "tools/mortgage-qualifier-calculator", citations: "211" },
] as const;

/** Top grounding queries — query, citations, citation share (% of all AI citations for that query). */
export const HOMECALC_TOP_QUERIES = [
  { query: "property transfer tax bc", citations: "200", share: "32%" },
  { query: "best rent increase calculator", citations: "123", share: "21%" },
  { query: "mortgage affordability calculator (100K salary)", citations: "64", share: "88%" },
  { query: "land transfer tax ontario", citations: "59", share: "46%" },
  { query: "how much mortgage can I afford", citations: "51", share: "41%" },
] as const;

export function homecalcPageUrl(path: string) {
  return `${HOMECALC_PROOF.siteUrl}${path}`;
}
