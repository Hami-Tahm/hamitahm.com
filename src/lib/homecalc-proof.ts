/** Shared HomeCalc proof metrics — outcome only, no mechanism. */
export const HOMECALC_PROOF = {
  citations: "1,100+",
  pagesCited: "15",
  timeframe: "30 days",
  domainAge: "under three months old",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  siteUrl: "https://homecalc.ca/",
} as const;

export const HOMECALC_CITED_PAGES = [
  { path: "mortgage-qualifier-calculator", citations: "231" },
  { path: "closing-cost-calculator", citations: "194" },
  { path: "rent-increase-calculator", citations: "130" },
  { path: "land-transfer-tax/ontario", citations: "110" },
  { path: "mortgage-affordability-calculator", citations: "74" },
] as const;

export function homecalcPageUrl(path: string) {
  return `${HOMECALC_PROOF.siteUrl}${path}`;
}
