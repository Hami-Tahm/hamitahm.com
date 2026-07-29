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

import { HOMECALC_CITED_PAGES } from "@/lib/homecalc-proof";

/** "1.7K" -> 1700, "876" -> 876. Used only for the bar chart's relative width —
 *  never displayed directly, so it can't imply more precision than the console gave. */
function citationsToNumber(v: string): number {
  const cleaned = v.replace(/,/g, "");
  if (cleaned.endsWith("K")) return Math.round(parseFloat(cleaned) * 1000);
  return parseInt(cleaned, 10);
}

export const STUDY = {
  /** Bing Webmaster → AI Performance, 3-month window. */
  windowStart: "April 25, 2026",
  windowEnd: "July 25, 2026",
  /**
   * ISO copies of the same two dates above, for anything machine-readable (JSON-LD
   * temporalCoverage, Zenodo metadata, etc.).
   *
   * ⚠️ This file previously only had human-readable dates, and a JSON-LD block on the
   * blog page hardcoded its OWN separate ISO date string by hand. When the window got
   * refreshed (April 19–July 8 → April 25–July 25), the hardcoded copy was never
   * updated, so the page's structured data silently disagreed with its own visible
   * content for weeks. Always read the window from here — never retype it.
   */
  windowStartISO: "2026-04-25",
  windowEndISO: "2026-07-25",
  windowLabel: "3 months",
  pulledOn: "July 27, 2026",
  pulledOnISO: "2026-07-27",
  source: "Bing Webmaster Tools → AI Performance (Microsoft Copilot and partners)",

  /**
   * 14,600 (HomeCalc) + 7,100 (hamitahm.com), both read from the console on the same
   * day, both on the trailing 3-month view.
   *
   * ⚠️ This can never be lower than HOMECALC_PROOF.citations — it contains it. If you
   * raise the HomeCalc figure, raise this in the same commit.
   */
  totalCitations: "21,700+",
} as const;

/** The two sites in the study. Same owner, same window, opposite results. */
export const SITES = {
  homecalc: {
    name: "HomeCalc.ca",
    what: "Canadian real-estate calculators. Purpose-built, brand new.",
    ageAtStart: "under three months old",
    citations: "14,600+",
    citationsNum: 14600,
    /** Distinct pages earning citations. */
    pagesCited: "25+",
    /** Bing's "Avg. Cited Pages" metric. Refreshed 2026-07-27: 10 → 16. */
    avgCitedPagesPerDay: 16,
    peakPerDay: "420+",
    curve: "near-zero → steep, sustained growth",
  },
  hamitahm: {
    name: "HamiTahm.com",
    what: "A personal blog that later became a consultancy site.",
    ageAtStart: "about 18 months old",
    citations: "7,100+",
    citationsNum: 7100,
    // "6+" not "effectively 1" — the top-cited-pages table (HAMITAHM_PAGES below) lists
    // 6 distinct pages that earned at least one citation, and this is a selected sample
    // (see LIMITATIONS.md), so the true count may be higher still. "Effectively 1" was
    // true in spirit (93%→~91% of volume concentrates on a single page) but false as a
    // literal page count against this column's own definition ("distinct pages that
    // earned at least one citation"). The concentration point belongs in `curve` below,
    // not in a count field that a reader — or a dataset consumer — takes literally.
    pagesCited: "6+",
    avgCitedPagesPerDay: 2,
    peakPerDay: "—",
    // This is the finding, stated as a fact rather than an opinion: across the SAME
    // three months, under the SAME owner, HomeCalc went 7,400 → 14,600 while this
    // domain went 7,000 → 7,100. One has a growth curve; one has a plateau.
    curve: "flat across the entire window — no growth, ~91% concentrated on a single page",
  },
} as const;

/**
 * HomeCalc — which pages actually earned the citations.
 *
 * SOURCED FROM HOMECALC_CITED_PAGES in homecalc-proof.ts — do not hand-maintain a
 * second copy of this table. An earlier version of this file kept its own July-14
 * pull (833 / 542 / 523...) which drifted out of sync once the headline figure was
 * refreshed to 14,600+ on July 25 — the exact kind of internal contradiction this
 * study's credibility depends on not having. `citations` here is a parsed numeric
 * estimate used only for the bar chart's relative width; `display` carries the
 * console's own rounded string (e.g. "1.7K") so the rendered number never implies
 * more precision than Bing actually showed.
 */
export const HOMECALC_PAGES: readonly {
  label: string;
  type: "Tool" | "Guide";
  citations: number;
  display: string;
}[] = HOMECALC_CITED_PAGES.map((p) => ({
  label: p.label,
  type: p.path.startsWith("tools/") ? ("Tool" as const) : ("Guide" as const),
  citations: citationsToNumber(p.citations),
  display: p.citations,
}));

/**
 * HomeCalc — query-level citation share.
 * "share" = what percentage of ALL citations for that query went to HomeCalc.
 */
export const HOMECALC_QUERIES = [
  { query: "property transfer tax bc", citations: 263, share: "29%" },
  { query: "land transfer tax ontario", citations: 160, share: "39%" },
  { query: "best rent increase calculator", citations: 123, share: "21%" },
  { query: "calculate land transfer tax ontario", citations: 102, share: "72%" },
  // Share refreshed 2026-07-27: this query was 76% in the July 14 pull and reads
  // 63.02% in the July 25 console. Citation counts in this table are still from the
  // earlier pull — see the note on HOMECALC_TOP_QUERIES in homecalc-proof.ts.
  { query: "mortgage affordability calculator (100K salary)", citations: 86, share: "63%" },
] as const;

/**
 * HamiTahm.com — the uncomfortable one.
 * Roughly 91% of an entire domain's AI citations land on one old essay about skill
 * mastery, while the page the business actually sells earns 12.
 *
 * ⚠️ The "91%" below is 6,500 / 7,100 (SITES.hamitahm.citationsNum), rounded down and
 * phrased as "roughly" on purpose — both figures are Bing's own rounded display
 * values, not exact counts, so a bare "93%" (this file's earlier, stale figure,
 * computed back when the domain total was still ~7,000) implied more precision than
 * the source supports. If either number here changes, recompute this by hand — do not
 * hand-type a percentage.
 */
export const HAMITAHM_PAGES = [
  { label: "The 10,000-Hour Rule (an old essay)", citations: 6500, note: "roughly 91% of the entire domain" },
  { label: "Blog — AI visibility tools comparison", citations: 302, note: "" },
  { label: "How Many Diets Exist in the World", citations: 61, note: "off-topic" },
  { label: "The Longevity Economy", citations: 26, note: "off-topic" },
  { label: "Blog — Best AI visibility tools", citations: 21, note: "" },
  { label: "/ai-visibility/ — the page the business sells", citations: 12, note: "the money page" },
] as const;

/**
 * Commercial reality of the most-cited page, from Google Search Console.
 *
 * ⚠️ There is deliberately no `leadsGenerated` field here. An earlier version claimed
 * "0 leads," but there was no traceable method behind that number — no CRM record, no
 * analytics goal, nothing pointable the way every other figure in this file is. This
 * file's own provenance rule (top of file) says a number that can't be sourced doesn't
 * belong here. The clicks number alone (24 clicks from 6,500 citations) already makes
 * the point — citations aren't traffic — without needing an unverifiable leads claim
 * on top of it.
 */
export const COMMERCIAL_REALITY = {
  page: "The 10,000-Hour Rule",
  aiCitations: "6,500",
  googleClicksPerQuarter: 24,
  moneyPageCitations: 12,
  moneyPageImpressionsPerQuarter: 59,
  siteClicksPerQuarter: 44,
  siteAvgPosition: 42.8,
} as const;
