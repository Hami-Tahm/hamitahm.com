/**
 * HomeCalc AI benchmark, October 2026. Data for /case-studies/homecalc-ai-benchmark-canada/.
 *
 * PROVENANCE (read before changing a number):
 *   - Otterly.AI brand report "HomeCalc": 50 prompts, country Canada, 4 engines (ChatGPT,
 *     Google AI Overviews, Perplexity, Microsoft Copilot). Tracking began Oct 13, 2026; read
 *     from the dashboard on Oct 20, 2026, so the data covers Oct 13 to 19. Full extract:
 *     citation-engine/data/reports/homecalc-otterly-2026-10/otterly-extract.md
 *   - Bing Webmaster Tools, AI Performance, homecalc.ca, 3-month view read Oct 20, 2026:
 *     61.9K total citations, 49 average cited pages per day. Weekly averages below were
 *     derived from the same console's daily data.
 *   - API test, Oct 13, 2026: citation-engine/data/reports/homecalc-2026-10/summary.md
 *
 * This is a FIXED, dated benchmark. Do not "refresh" it in place: publish a new one.
 * Outcome only. The method that produced it is not described here or on the page.
 */

export const BENCHMARK = {
  otterlyWindow: "October 13 to 19, 2026",
  otterlyWindowShort: "Oct 13 to 19, 2026",
  promptCount: 50,
  engines: ["Microsoft Copilot", "Perplexity", "ChatGPT", "Google AI Overviews"] as const,
  promptLevelCitations: "12,555",
  homecalcCitations: 559,
  homecalcUrls: 42,
  bingTotal: "61.9K",
  bingTotalLong: "61,900",
  bingAvgPagesPerDay: 49,
  bingReadOn: "October 20, 2026",
  bingLowWeek: 164,
  bingPeakWeek: 1065,
  bingPeakDay: "1,500",
  publishedISO: "2026-10-20",
} as const;

/** Weekly average Copilot citations per day, weeks starting Jul 20 to Oct 5. Last week partial. */
export const BING_WEEKLY = [491, 164, 354, 519, 411, 589, 689, 720, 954, 1036, 1065, 867] as const;
export const BING_WEEK_LABELS = ["Jul 20", "", "Aug 3", "", "Aug 17", "", "Aug 31", "", "Sep 14", "", "Sep 28", "Oct 5"] as const;

/** Share of the 50 prompts in which each domain was cited, all 4 engines. */
export const DOMAIN_COVERAGE = [
  { domain: "canada.ca", pct: 31, gov: true },
  { domain: "homecalc.ca", pct: 26, us: true },
  { domain: "ratehub.ca", pct: 23 },
  { domain: "wowa.ca", pct: 23 },
  { domain: "cmhc-schl.gc.ca", pct: 19, gov: true },
  { domain: "FCAC tools", pct: 15, gov: true },
  { domain: "nesto.ca", pct: 11 },
  { domain: "scotiabank.com", pct: 11 },
  { domain: "nerdwallet.com", pct: 11 },
  { domain: "rbcroyalbank.com", pct: 9 },
] as const;

export type EngineCard = { engine: string; big: string; line1: string; line2: string; good: boolean };
export const ENGINE_CARDS: readonly EngineCard[] = [
  { engine: "Microsoft Copilot", big: "#1", line1: "most-cited domain (51% of prompts)", line2: "Named in 23% of answers, #2 brand behind CMHC", good: true },
  { engine: "Perplexity", big: "#1", line1: "most-cited domain (46% of prompts)", line2: "Named in 18% of answers, #2 brand behind CMHC", good: true },
  { engine: "ChatGPT", big: "#8", line1: "brand, named in 3.1% of answers", line2: "28 citations, most from a single prompt", good: false },
  { engine: "Google AI Overviews", big: "3%", line1: "brand coverage, outside the top 10", line2: "Named in 2 of the 50 prompts", good: false },
];

/** Brand coverage (share of answers naming the brand) and rank. null = outside that engine's top 10. */
type Cell = { v: string; r: number } | null;
export const BRAND_TABLE: readonly { brand: string; gov?: boolean; us?: boolean; all: Cell; copilot: Cell; perplexity: Cell; chatgpt: Cell; google: Cell }[] = [
  { brand: "CMHC", gov: true, all: { v: "38%", r: 1 }, copilot: { v: "53%", r: 1 }, perplexity: { v: "20%", r: 1 }, chatgpt: { v: "30%", r: 1 }, google: { v: "47%", r: 2 } },
  { brand: "Ratehub", all: { v: "19%", r: 2 }, copilot: { v: "4%", r: 10 }, perplexity: { v: "6.5%", r: 3 }, chatgpt: { v: "16%", r: 2 }, google: { v: "47%", r: 1 } },
  { brand: "WOWA", all: { v: "13%", r: 3 }, copilot: null, perplexity: { v: "4.3%", r: 5 }, chatgpt: { v: "8.6%", r: 4 }, google: { v: "40%", r: 3 } },
  { brand: "HomeCalc", us: true, all: { v: "11%", r: 4 }, copilot: { v: "23%", r: 2 }, perplexity: { v: "18%", r: 2 }, chatgpt: { v: "3.1%", r: 8 }, google: null },
  { brand: "Canadian Mortgage App", all: { v: "6.5%", r: 5 }, copilot: null, perplexity: { v: "1.9%", r: 10 }, chatgpt: { v: "4.6%", r: 6 }, google: { v: "19%", r: 4 } },
  { brand: "Mortgage Squad", all: { v: "5.3%", r: 6 }, copilot: { v: "12%", r: 3 }, perplexity: null, chatgpt: { v: "9.1%", r: 3 }, google: null },
  { brand: "CIBC", all: { v: "5.3%", r: 7 }, copilot: { v: "4.3%", r: 9 }, perplexity: { v: "2.5%", r: 8 }, chatgpt: null, google: { v: "14%", r: 5 } },
  { brand: "NerdWallet", all: { v: "4.1%", r: 9 }, copilot: null, perplexity: { v: "5.3%", r: 4 }, chatgpt: null, google: { v: "10%", r: 6 } },
  { brand: "Scotiabank", all: { v: "3.6%", r: 10 }, copilot: { v: "4.9%", r: 7 }, perplexity: { v: "2.2%", r: 9 }, chatgpt: null, google: { v: "6.1%", r: 10 } },
  { brand: "nesto", all: null, copilot: { v: "4.6%", r: 8 }, perplexity: { v: "3.4%", r: 7 }, chatgpt: null, google: null },
  { brand: "CalcCanada", all: null, copilot: { v: "5.4%", r: 5 }, perplexity: { v: "4.3%", r: 6 }, chatgpt: null, google: null },
];

export const TOP_URLS = [
  { path: "/", label: "Homepage", cited: 77 },
  { path: "/embed", label: "Free embeddable calculators", cited: 41 },
  { path: "/white-label-calculators", label: "White-label calculators", cited: 34 },
  { path: "/tools/closing-cost-calculator", label: "Closing cost calculator", cited: 32 },
  { path: "/tools/land-transfer-tax-calculator", label: "Land transfer tax calculator", cited: 31 },
  { path: "/white-label-mortgage-calculators/mortgage-brokers", label: "Calculators for mortgage brokers", cited: 28 },
  { path: "/blog/how-to-calculate-cap-rate", label: "How to calculate cap rate", cited: 22 },
  { path: "/tools", label: "All calculators", cited: 22 },
  { path: "/blog/income-needed-for-mortgage-canada", label: "Income needed for a mortgage", cited: 22 },
  { path: "/tools/cap-rate-calculator", label: "Cap rate calculator", cited: 20 },
] as const;
