/** Shared HomeCalc proof metrics — outcome only, no mechanism. Updated 2026-06-17. */
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
