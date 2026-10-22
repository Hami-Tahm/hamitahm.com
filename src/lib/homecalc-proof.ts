/**
 * Single source of truth for all HomeCalc proof metrics shown across hamitahm.com.
 *
 * Update HOMECALC_PROOF below. The HOMECALC_CLAIMS strings auto-derive from it,
 * so every page that imports them (hami-tahm, the-10000-hour-rule, all 6 AI
 * Visibility pages, seo-expert-toronto, orthodontic-seo-marketing-case-study,
 * and the case study itself) updates with one change here.
 *
 * Outcome only. Never put the underlying mechanism in this file or anywhere
 * else on the public site: that is paid IP.
 *
 * RE-VERIFIED 2026-10-22 against the live console, Custom range May 9 to Aug 7, 2026:
 * Total Citations 17.8K, 56 pages listed, daily series 3, 1, 0, 2 ... peak 575 (Jul 22),
 * top page /blog/how-to-qualify-for-a-mortgage-in-canada 1.8K, and 71.83% citation share
 * on "calculate land transfer tax ontario" (102 citations). Bing labels the tables "a
 * sample of overall activity".
 *
 * ⚠️ 2026-10-22: THE 32,800 "AI APPEARANCES" SUM IS RETIRED. Independent fact-check
 * rejected adding Copilot citations to Google impressions (different metrics, and the
 * two console windows do not match: Bing May 9 to Aug 7, Google's 3-month view captured
 * Aug 10). The legacy keys below (combinedAppearances, combinedLabel, combinedSourceLong,
 * HOMECALC_CLAIMS.appearances*) are KEPT so ~30 pages compile, but now resolve to the
 * Copilot-only figure and a Bing-only source line. Google impressions are only ever shown
 * as their own separate figure. Do not reintroduce a sum.
 *
 * Originally read 2026-08-07 directly from Bing Webmaster → AI Performance,
 * site selector confirmed as homecalc.ca (it defaults to another property, always
 * check it before reading a number), trailing 3-month view, May 9 – Aug 7, 2026.
 * The 91 daily values on that chart sum to 17,826, which is what the console rounds
 * to "17.8K".
 *
 * WHY THE NUMBER MOVED:
 * 6,500+ → 7,400+ (Jul 14) → 14,600+ (Jul 27) → 17,800+ (Aug 7). Verified in the
 * console, not inferred. Growth is now coming from breadth rather than a steeper
 * peak: distinct cited pages went 25 → 56, while peak/day moved only 424 → 575.
 *
 * ⚠️ DO NOT "SYNC" src/lib/citation-study.ts TO THIS FILE.
 * They are different things and are supposed to disagree:
 *   - THIS file  = the live, current proof number. It moves whenever the console does.
 *   - citation-study.ts = a FIXED, PUBLISHED dataset (Apr 25 – Jul 25, 2026) with a
 *     DOI: 10.5281/zenodo.21651568, licensed CC BY 4.0. It is citable and immutable.
 *     Editing it to match this file would make the site contradict a published record
 *     that other people can download, far worse than the two numbers differing.
 * The study's total (21,700+) stays above this figure, so there is no contradiction;
 * they simply describe different windows. If this figure ever exceeds the study total,
 * that is the signal to publish a NEW dataset version, not to edit the old one.
 *
 * ⚠️ WHEN THIS NUMBER CHANGES, THESE MUST CHANGE WITH IT:
 *   - public/llms.txt (lines 5 and 39, but NOT the /research/ line, which correctly
 *     describes the published dataset's own window)
 *   - README.md
 *   - the X / LinkedIn / Product Hunt bios, which are edited by hand
 * Several different citation figures across properties we own is exactly the kind of
 * contradiction an LLM cross-checks and downgrades us for.
 */
export const HOMECALC_PROOF = {
  citations: "17,800+",
  // Console lists 56 distinct cited pages (Aug 7). Stated as "50+" deliberately:
  // conservative, still true if a few pages drop out next month, and consistent with
  // how every other figure here rounds DOWN.
  // ⚠️ Do not read this off the "Avg. Cited Pages" tile: that tile showed 19 on the
  // same screen and is a per-DAY average, not a count of distinct pages. Two different
  // metrics; conflating them would overstate or understate by ~3x.
  pagesCited: "50+",
  timeframe: "3 months",
  /** The exact Bing window every Copilot figure in this file comes from. */
  window: "May 9 to Aug 7, 2026",
  // ⚠️ TIME-ANCHORED ON PURPOSE. HomeCalc launched around March 2026, so by the END of
  // the current measurement window (Aug 7, 2026) the domain is roughly five months old,
  // not three. What is true, and verifiable in the console, is that it was under three
  // months old and still at near-zero citations when the window OPENED on May 9, 2026:
  // the first days of that chart read 3, 1, 0, 2 citations.
  // Saying "a site under three months old" with no time reference would quietly imply the
  // domain is still that young. It isn't. Keep the clause attached, and re-check this
  // wording every time the window rolls forward.
  domainAge: "under three months old when the audit began",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  siteUrl: "https://homecalc.ca/",
  // Highest single day in the May 9 – Aug 7 window was 575 (Jul 22). Rounded down.
  peakPerDay: "570+",
  // ⚠️ HELD at 72% on 2026-08-07 even though a higher number exists, deliberately.
  // Sorting the grounding-query table by Citation Share descending, the top row is
  // "mortgage affordability second home calculator" at 80.00%, but that is 80% of
  // FIVE citations. A headline claim resting on n=4 is exactly the kind of figure this
  // file's provenance rule exists to keep out. The second row, "calculate land transfer
  // tax ontario", is 71.83% on 102 citations, which is a real result.
  // So: 72% stays. Raise this only when a higher share appears on a query with a
  // meaningful citation count behind it. Never guess upward, and never round up off a
  // tiny denominator.
  topCitationShare: "72%",
  /** The query the 72% belongs to. Never attach 72% to any other query or page. */
  topCitationShareQuery: "calculate land transfer tax ontario",
  topCitationShareCitations: "102",

  // PLATFORM PROVENANCE: the single most important honesty control
  // `citations` above comes from ONE source: Bing Webmaster Tools' AI Performance
  // report, which measures Microsoft Copilot and its partners. It does NOT measure
  // Google AI Overviews, ChatGPT, Gemini or Perplexity. Never attach the CITATION
  // number to those platforms.
  // Attribute the NUMBER with `sourceLabel`; only describe the audit *service* as
  // covering ChatGPT/Perplexity/etc, because the audit genuinely reviews them.
  sourceLabel: "Microsoft Copilot (Bing AI Performance)",
  sourceLong:
    "measured in Bing Webmaster Tools' AI Performance report (Microsoft Copilot and partners)",

  // ── THE FORMER COMBINED FIGURE (retired 2026-10-22) ──
  // From 2026-08-10 the site summed Copilot citations and Google impressions as
  // "32,800+ AI appearances". Independent fact-check rejected it: different metrics,
  // different consoles, and windows that do not match. ❌ Do not sum them again.
  // Legacy keys, retired sum (see header). Resolve to the Copilot-only figure.
  combinedAppearances: "17,800+",
  combinedLabel: "Microsoft Copilot citations",
  googleImpressions: "15,000",
  googleSourceLabel: "Google generative AI features (Search Console, Beta)",
  /** Google's own window: 3-month view captured Aug 10, 2026. Not Bing's window. */
  googleWindow: "3-month view captured Aug 10, 2026",
  googleSourceLong:
    "measured in Google Search Console's Generative AI features report (Beta), which reports impressions only: no clicks, CTR, position or queries",

  // Legacy keys: now Bing-only, because the headline figure is Copilot-only.
  combinedSourceLong:
    "measured in Bing Webmaster Tools' AI Performance report (Microsoft Copilot and partners), May 9 to Aug 7, 2026",
  combinedSourceLabel: "Microsoft Copilot (Bing AI Performance)",
} as const;

const COMBINED_BARE = HOMECALC_PROOF.citations.replace("+", "");
const TIMEFRAME_TITLE = HOMECALC_PROOF.timeframe
  .split(" ")
  .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : w))
  .join(" ");

/**
 * Pre-formatted claim phrases. Use these on every page instead of hardcoding
 * the numbers. When HOMECALC_PROOF changes, all phrases update automatically.
 *
 * Since 2026-10-22 these say "Microsoft Copilot citations" and carry the Copilot-only
 * figure. The key names still say "appearances" only so existing pages compile; the
 * values are citations. Render them next to `combinedSourceLong` (now Bing-only).
 */
export const HOMECALC_CLAIMS = {
  /** "17,800+ Microsoft Copilot citations in 3 months" */
  appearancesInTimeframe: `${HOMECALC_PROOF.citations} Microsoft Copilot citations in ${HOMECALC_PROOF.timeframe}`,
  /** "over 17,800 Microsoft Copilot citations in 3 months" */
  overAppearancesInTimeframe: `over ${COMBINED_BARE} Microsoft Copilot citations in ${HOMECALC_PROOF.timeframe}`,
  /** "17,800-citation lift visible in 3 months" (compound, no plus sign) */
  liftVisible: `${COMBINED_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "full 17,800-citation lift visible in 3 months" */
  fullLiftVisible: `full ${COMBINED_BARE}-citation lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "near-zero to 17,800+ Microsoft Copilot citations in 3 months" */
  zeroToAppearances: `near-zero to ${HOMECALC_PROOF.citations} Microsoft Copilot citations in ${HOMECALC_PROOF.timeframe}`,
  /** "HomeCalc case study: 17,800+ Copilot citations in 3 months" */
  caseStudyCardLabel: `HomeCalc case study: ${HOMECALC_PROOF.citations} Copilot citations in ${HOMECALC_PROOF.timeframe}`,
  /** "17,800+ Copilot Citations. 3 Months." */
  heroPunchLine: `${HOMECALC_PROOF.citations} Copilot Citations. ${TIMEFRAME_TITLE}.`,
  /** The two figures, kept separate. */
  breakdown: `${HOMECALC_PROOF.citations} citations in ${HOMECALC_PROOF.sourceLabel} (${HOMECALC_PROOF.window}); Google's generative AI features report showed ${HOMECALC_PROOF.googleImpressions} impressions in its own ${HOMECALC_PROOF.googleWindow}, a different metric that is never added to it`,
} as const;

/**
 * READY-MADE STAT PAIRS. Use these instead of pairing a number with a hand-written
 * label.
 *
 * ── WHY THIS EXISTS ──
 * When the headline moved from citations to appearances, every sentence built from
 * HOMECALC_CLAIMS updated itself. But six stat blocks were written as
 * `{ value: HOMECALC_PROOF.citations, label: "AI citations" }`; the value came from
 * the constant and the noun was typed by hand, so the homepage, /case-studies/ and
 * /ai-visibility/ kept showing the old figure with the old word. A number and its
 * unit must travel together or they drift apart. Pair them here, once.
 */
export const HOMECALC_HEADLINE_STAT = {
  /** "17,800+" (Copilot only since 2026-10-22) */
  value: HOMECALC_PROOF.citations,
  /** "Microsoft Copilot citations" */
  label: HOMECALC_PROOF.combinedLabel,
  /** "Microsoft Copilot citations (HomeCalc, 3 months)" */
  labelLong: `${HOMECALC_PROOF.combinedLabel} (HomeCalc, ${HOMECALC_PROOF.timeframe})`,
} as const;

/**
 * The Copilot-only figure. ONLY for exhibits that are genuinely Bing-specific: the
 * citation chart, the cited-pages table, the grounding-query table, and the two pages
 * (/methodology/, /disclaimer/) that deliberately explain the difference.
 * Never use this as the site's headline number.
 */
export const HOMECALC_COPILOT_STAT = {
  /** "17,800+" */
  value: HOMECALC_PROOF.citations,
  /** "Copilot citations": never bare "AI citations", which now reads as the total. */
  label: "Copilot citations",
} as const;

export const HOMECALC_CITED_PAGES = [
  // Refreshed 2026-08-07 from the same trailing 3-month view as the headline figure.
  // Values are shown exactly as the console renders them (1.8K, not "1,800") so the
  // page never implies more precision than the source does.
  // Change since Jul 27: the Ontario land-transfer-tax calculator entered the top six
  // at 1.0K and pushed the down-payment guide (now 700) out of it.
  { label: "How to Qualify for a Mortgage", path: "blog/how-to-qualify-for-a-mortgage-in-canada", citations: "1.8K" },
  { label: "Mortgage Affordability Calculator", path: "tools/mortgage-affordability-calculator", citations: "1.5K" },
  { label: "Closing Cost Calculator", path: "tools/closing-cost-calculator", citations: "1.4K" },
  { label: "Mortgage Amortization Calculator", path: "tools/mortgage-amortization-calculator", citations: "1.3K" },
  { label: "Ontario Land Transfer Tax Calculator", path: "tools/land-transfer-tax-calculator/ontario", citations: "1.0K" },
  { label: "Mortgage Qualifier Calculator", path: "tools/mortgage-qualifier-calculator", citations: "831" },
] as const;

/**
 * Top grounding queries: query, citations, citation share (% of all AI citations for
 * that query). Sorted by CITATIONS, not by share, so this table shows where the volume
 * actually is. The separate `topCitationShare` figure above comes from a different
 * query ("calculate land transfer tax ontario", 102 citations at 71.83%); the two are
 * answering different questions and are not meant to match.
 * Refreshed 2026-08-07, same window.
 */
export const HOMECALC_TOP_QUERIES = [
  { query: "land transfer tax ontario", citations: "443", share: "39%" },
  { query: "Canada mortgage qualification requirements", citations: "263", share: "39%" },
  { query: "property transfer tax bc", citations: "263", share: "29%" },
  { query: "closing costs", citations: "224", share: "18%" },
  { query: "amortization period", citations: "206", share: "21%" },
] as const;

export function homecalcPageUrl(path: string) {
  return `${HOMECALC_PROOF.siteUrl}${path}`;
}
