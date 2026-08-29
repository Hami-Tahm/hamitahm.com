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
 * Last updated: 2026-08-07, read directly from Bing Webmaster → AI Performance,
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

  // ── THE COMBINED FIGURE ──
  // Added 2026-08-10, after Google Search Console shipped its "Generative AI features"
  // report (Beta) and homecalc.ca showed 15,000 impressions there.
  //
  // THE RULE, stated precisely: an earlier version of this comment said "never sum",
  // which was too blunt and would have made the site contradict Hami's own bios:
  //
  //   ✅ ALLOWED: summing them under a label that is true of BOTH, with the two
  //      components and their metrics shown alongside. "32,800+ AI appearances" is
  //      honest: a Copilot citation and a Google AI impression are both "a link to
  //      this page appeared inside an AI-generated answer", the two engines are
  //      separate surfaces so nothing is double-counted, and every part is checkable.
  //
  //   ❌ FORBIDDEN: calling the total "citations". 15,000 of it is not citations.
  //      Anyone opening Google Search Console would find no such number. That single
  //      word is the difference between a defensible claim and a fabricated one.
  //
  // Also: Google renders its figure as a rounded "15K", so the combined number carries
  // no more precision than that. Write 32,800+, never 32,826.
  combinedAppearances: "32,800+",
  combinedLabel: "AI appearances",
  googleImpressions: "15,000",
  googleSourceLabel: "Google generative AI features (Search Console, Beta)",
  googleSourceLong:
    "measured in Google Search Console's Generative AI features report (Beta), which reports impressions only: no clicks, CTR, position or queries",

  // Attribution that MUST travel with the combined figure. `sourceLong` above names
  // Bing only and is now reserved for the Copilot-specific exhibits on the case study.
  // Rendering the 32,800 number next to a Bing-only source line would attribute a
  // two-console total to one console, a worse error than the label problem, because
  // it is not just imprecise, it is false.
  combinedSourceLong:
    "counted across two consoles: Bing Webmaster Tools' AI Performance report (Microsoft Copilot) for citations, and Google Search Console's Generative AI features report for impressions",
  combinedSourceLabel: "Microsoft Copilot + Google generative AI features",
} as const;

const COMBINED_BARE = HOMECALC_PROOF.combinedAppearances.replace("+", "");
const TIMEFRAME_TITLE = HOMECALC_PROOF.timeframe
  .split(" ")
  .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : w))
  .join(" ");

/**
 * Pre-formatted claim phrases. Use these on every page instead of hardcoding
 * the numbers. When HOMECALC_PROOF changes, all phrases update automatically.
 *
 * ⚠️ THESE SAY "APPEARANCES", NOT "CITATIONS" (2026-08-10).
 * The headline figure across the site is now the two-console total (32,800+), so the
 * noun had to change with the number. 15,000 of that total is Google IMPRESSIONS;
 * calling it a citation count would be false, and Google publishes no citation count
 * at all. The keys were renamed too (citationsInTimeframe → appearancesInTimeframe)
 * rather than left pointing at a different noun, because a constant named for one
 * thing and returning another is how the next person reintroduces the error.
 *
 * ⚠️ ALWAYS render these next to `combinedSourceLong`, never `sourceLong`:
 * the latter names Bing alone and would attribute a two-console total to one console.
 * `sourceLong` / `sourceLabel` are now reserved for the Copilot-only exhibits on the
 * case study (the Bing chart, the cited-pages table, the grounding-query table).
 */
export const HOMECALC_CLAIMS = {
  /** "32,800+ AI appearances in 3 months" */
  appearancesInTimeframe: `${HOMECALC_PROOF.combinedAppearances} AI appearances in ${HOMECALC_PROOF.timeframe}`,
  /** "over 32,800 AI appearances in 3 months" */
  overAppearancesInTimeframe: `over ${COMBINED_BARE} AI appearances in ${HOMECALC_PROOF.timeframe}`,
  /** "32,800-appearance lift visible in 3 months" (compound, no plus sign) */
  liftVisible: `${COMBINED_BARE}-appearance lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "full 32,800-appearance lift visible in 3 months" */
  fullLiftVisible: `full ${COMBINED_BARE}-appearance lift visible in ${HOMECALC_PROOF.timeframe}`,
  /** "near-zero to 32,800+ AI appearances in 3 months" */
  zeroToAppearances: `near-zero to ${HOMECALC_PROOF.combinedAppearances} AI appearances in ${HOMECALC_PROOF.timeframe}`,
  /** "HomeCalc case study: 32,800+ AI appearances in 3 months" */
  caseStudyCardLabel: `HomeCalc case study: ${HOMECALC_PROOF.combinedAppearances} AI appearances in ${HOMECALC_PROOF.timeframe}`,
  /** "32,800+ AI Appearances. 3 Months." (hero / H2 punch line) */
  heroPunchLine: `${HOMECALC_PROOF.combinedAppearances} AI Appearances. ${TIMEFRAME_TITLE}.`,
  /** The breakdown, for anywhere the total appears without the two figures beside it. */
  breakdown: `${HOMECALC_PROOF.citations} citations in ${HOMECALC_PROOF.sourceLabel} plus ${HOMECALC_PROOF.googleImpressions} impressions in ${HOMECALC_PROOF.googleSourceLabel}`,
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
  /** "32,800+" */
  value: HOMECALC_PROOF.combinedAppearances,
  /** "AI appearances" */
  label: HOMECALC_PROOF.combinedLabel,
  /** "AI appearances (HomeCalc, 3 months)": for stat rails that need the context. */
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
