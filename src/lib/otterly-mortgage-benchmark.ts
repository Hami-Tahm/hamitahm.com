/**
 * Otterly.AI competitive benchmark: HomeCalc.ca vs. Canada's mortgage-calculator
 * category in AI search.
 *
 * ── SOURCE ──
 * Otterly.AI, a competitive AI-search-tracking tool. It is a DIFFERENT instrument
 * from the Bing Webmaster Tools / Google Search Console consoles that
 * homecalc-proof.ts and citation-study.ts are built from: Otterly runs a fixed
 * panel of prompts against ChatGPT, Perplexity, Google AI Overviews and Microsoft
 * Copilot and records every domain each engine's answer cites as a source.
 *
 * ⚠️ DO NOT MERGE THESE NUMBERS INTO homecalc-proof.ts OR citation-study.ts.
 * Same rule as the one already guarding citation-study.ts: different instrument,
 * different window, different method, so this stays a separately-labeled figure.
 * Otterly's "citation" (a domain appearing as a source in an AI answer) is not the
 * same count as Bing's Copilot citation metric even though both use the word
 * "citation": the prompt panel, the window, and the crawler are all different.
 * Report each dataset under its own name; never add them together.
 *
 * ── DATASET ──
 * 50 hand-picked, real buyer-intent prompts about mortgage calculators,
 * affordability, and home-buying tools (e.g. "What are the best free Canadian
 * real estate calculators?"), run for the Canada market across ChatGPT,
 * Perplexity, Google AI Overviews and Microsoft Copilot, over the week of
 * 2026-08-23 to 2026-08-30. Every number below was counted directly from the raw
 * export (homecalc_citations_07feff64...csv: 5,665 citation rows across all
 * tracked domains; homecalc_prompts_2026-08-31...csv: 50 rows, one per prompt),
 * not read off a rounded dashboard tile.
 *
 * ── WHAT THIS IS NOT ──
 * Not a claim of #1 or top-5 position in the Canadian mortgage industry as a
 * whole. This is one week, one 50-prompt panel, and one vendor's crawler,
 * scoped to the calculator / affordability-tool corner of that category. See
 * the "What this isn't claiming" section on the post that uses this data.
 *
 * ── UPDATING THIS FILE ──
 * If a fresher Otterly export replaces this one, recompute every figure below
 * from the new CSVs rather than hand-adjusting a number, and update
 * windowStart/windowEnd. Do not average an old export with a new one.
 */
export const OTTERLY_BENCHMARK = {
  toolName: "Otterly.AI",
  promptCount: 50,
  windowStart: "2026-08-23",
  windowEnd: "2026-08-30",
  engines: ["ChatGPT", "Perplexity", "Google AI Overviews", "Microsoft Copilot"],
  market: "Canada",
  /** Total citation rows in the raw export, across every domain tracked. */
  totalCitationRows: 5665,

  homecalc: {
    citationRows: 218,
    promptsCitedIn: 29,
    promptsTracked: 50,
    firstPlaceRows: 70,
    top3Rows: 135,
    avgPosition: "3.9",
    byEngine: {
      copilot: { rows: 142, avgPosition: "2.5", firstPlace: 59 },
      perplexity: { rows: 59, avgPosition: "5.4", firstPlace: 9 },
      chatgpt: { rows: 17, avgPosition: "9.9", firstPlace: 2 },
    },
    /**
     * From Otterly's separate "Brand Ranking" dashboard tile: the brand named
     * in the answer TEXT, not just cited as a source link. This is a different
     * metric than citationRows above (which counts source links), kept
     * deliberately separate rather than summed, same reasoning as the
     * citations-vs-impressions rule in homecalc-proof.ts.
     */
    brandMentions: 124,
    brandCoveragePct: 16,
    sentiment: 56,
    /** Rank out of the ~20 brands Otterly tracks for this prompt panel. */
    overallRankByCitationRows: 6,
    /** Rank by sentiment, among the 10 brands on Otterly's Brand Ranking tile. */
    sentimentRankAmongTop10: 2,
  },

  /**
   * Top domains by citation-row count. Sorted exactly as the raw CSV's own
   * Domain column counts, not re-ordered for effect.
   */
  topDomains: [
    { domain: "cmhc-schl.gc.ca", rows: 538, kind: "Government (CMHC)" },
    { domain: "ratehub.ca", rows: 458, kind: "Competitor" },
    { domain: "canada.ca", rows: 383, kind: "Government" },
    { domain: "itools-ioutils.fcac-acfc.gc.ca", rows: 314, kind: "Government (FCAC)" },
    { domain: "wowa.ca", rows: 275, kind: "Competitor" },
    { domain: "homecalc.ca", rows: 218, kind: "HomeCalc (this site)" },
    { domain: "nesto.ca", rows: 131, kind: "Competitor (lender)" },
    { domain: "nerdwallet.com", rows: 127, kind: "Competitor" },
    { domain: "canadianmoneyhelp.ca", rows: 124, kind: "Competitor" },
    { domain: "bmo.com", rows: 81, kind: "Bank" },
  ] as const,

  /**
   * Every real prompt where HomeCalc.ca held position #1 at least once in the
   * window. The raw export has more; this is the representative set used in
   * the post's list.
   */
  firstPlacePrompts: [
    "What are the most accurate Canadian mortgage calculator sites?",
    "What are the best free Canadian real estate calculators?",
    "What are the best mortgage affordability calculators in Canada?",
    "How much house can I afford with my income?",
    "How much down payment do I need for mortgage?",
    "How to qualify for first home mortgage in Canada?",
    "What tools show Canadian home closing costs and land transfer tax?",
    "What is the best mortgage calculator for newcomers to Canada?",
  ] as const,
} as const;
