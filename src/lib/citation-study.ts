/**
 * Data for the AI Citation Study (/blog/ai-citation-study/).
 *
 * ── PROVENANCE — read this before changing a single number ──
 * Every figure below was read directly from Bing Webmaster Tools → AI Performance
 * (Microsoft Copilot and partners) and Google Search Console, on 2026-07-14, with the
 * site selector confirmed for each domain. Nothing here is modelled, estimated or
 * rounded up. If you cannot point at the console screen a number came from, it does
 * not belong in this file.
 *
 * This study is the single most valuable marketing asset the practice has, and its
 * entire value rests on being true. One invented number destroys all of it.
 *
 * ── THE IP LINE ──
 * Publish the OUTCOME: what got cited, how much, how fast, and what didn't.
 * Never publish the MECHANISM: how the pages were built to earn it. That is the
 * $1,500 audit. The dataset is the marketing; the method is the product.
 */

export const STUDY = {
  /** Bing Webmaster → AI Performance, 3-month window. */
  windowStart: "April 19, 2026",
  windowEnd: "July 8, 2026",
  windowLabel: "3 months",
  pulledOn: "July 14, 2026",
  source: "Bing Webmaster Tools → AI Performance (Microsoft Copilot and partners)",

  /** 7,400 (HomeCalc) + 7,000 (hamitahm.com), both verified. */
  totalCitations: "14,400+",
} as const;

/** The two sites in the study. Same owner, same window, opposite results. */
export const SITES = {
  homecalc: {
    name: "HomeCalc.ca",
    what: "Canadian real-estate calculators. Purpose-built, brand new.",
    ageAtStart: "under three months old",
    citations: "7,400+",
    citationsNum: 7400,
    /** Distinct pages earning citations. */
    pagesCited: "25+",
    /** Bing's "Avg. Cited Pages" metric. */
    avgCitedPagesPerDay: 10,
    peakPerDay: "280+",
    curve: "near-zero → steep, sustained growth",
  },
  hamitahm: {
    name: "HamiTahm.com",
    what: "A personal blog that later became a consultancy site.",
    ageAtStart: "about 18 months old",
    citations: "7,000+",
    citationsNum: 7000,
    pagesCited: "effectively 1",
    avgCitedPagesPerDay: 2,
    peakPerDay: "—",
    curve: "flat across the entire window — no growth at all",
  },
} as const;

/** HomeCalc — which pages actually earned the citations. */
export const HOMECALC_PAGES = [
  { label: "Closing Cost Calculator", type: "Tool", citations: 833 },
  { label: "Mortgage Affordability Calculator", type: "Tool", citations: 542 },
  { label: "Land Transfer Tax — Ontario", type: "Tool", citations: 523 },
  { label: "How to Qualify for a Mortgage", type: "Guide", citations: 467 },
  { label: "Land Transfer Tax — BC", type: "Tool", citations: 447 },
  { label: "Mortgage Amortization Calculator", type: "Tool", citations: 393 },
] as const;

/**
 * HomeCalc — query-level citation share.
 * "share" = what percentage of ALL citations for that query went to HomeCalc.
 */
export const HOMECALC_QUERIES = [
  { query: "property transfer tax bc", citations: 263, share: "29%" },
  { query: "land transfer tax ontario", citations: 160, share: "39%" },
  { query: "best rent increase calculator", citations: 123, share: "21%" },
  { query: "calculate land transfer tax ontario", citations: 102, share: "72%" },
  { query: "mortgage affordability calculator (100K salary)", citations: 86, share: "76%" },
] as const;

/**
 * HamiTahm.com — the uncomfortable one.
 * 93% of an entire domain's AI citations land on one old essay about skill mastery,
 * while the page the business actually sells earns 12.
 */
export const HAMITAHM_PAGES = [
  { label: "The 10,000-Hour Rule (an old essay)", citations: 6500, note: "93% of the entire domain" },
  { label: "Blog — AI visibility tools comparison", citations: 302, note: "" },
  { label: "How Many Diets Exist in the World", citations: 61, note: "off-topic" },
  { label: "The Longevity Economy", citations: 26, note: "off-topic" },
  { label: "Blog — Best AI visibility tools", citations: 21, note: "" },
  { label: "/ai-visibility/ — the page the business sells", citations: 12, note: "the money page" },
] as const;

/** Commercial reality of the most-cited page, from Google Search Console. */
export const COMMERCIAL_REALITY = {
  page: "The 10,000-Hour Rule",
  aiCitations: "6,500",
  googleClicksPerQuarter: 24,
  leadsGenerated: 0,
  moneyPageCitations: 12,
  moneyPageImpressionsPerQuarter: 59,
  siteClicksPerQuarter: 44,
  siteAvgPosition: 42.8,
} as const;
