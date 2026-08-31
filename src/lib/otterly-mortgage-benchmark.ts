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
 * 2026-08-23 to 2026-08-30.
 *
 * ⚠️ COUNTING METHOD, CORRECTED 2026-08-31.
 * The raw export (homecalc_citations_07feff64...csv) has one row per recorded
 * citation OBSERVATION and a "Times cited" field on each row (how many times that
 * exact citation was logged; some prompts were monitored daily across the window,
 * so the same domain/prompt/engine combination can accumulate several days' worth
 * of "Times cited" under one row). The first version of this file summed ROW
 * COUNT per domain (undercounting anything with Times cited > 1, and zeroing out
 * blank values incorrectly). The correct aggregate is SUM("Times cited"), treating
 * a blank field as 0. All figures below use that method, cross-checked against a
 * second AI-written draft of this same analysis that used the same method
 * independently and matched. citationRows fields (kept for the row-level position
 * stats, which are NOT reweighted by Times cited) are labeled separately from
 * citationCount fields (the Times-cited sum) so the two are never confused.
 *
 * ── WHAT THIS IS NOT ──
 * Not a claim of #1 or top-5 position in the Canadian mortgage industry as a
 * whole. This is one week, one 50-prompt panel, and one vendor's crawler,
 * scoped to the calculator / affordability-tool corner of that category. See
 * the "What this isn't claiming" section on the post that uses this data.
 *
 * ── UPDATING THIS FILE ──
 * If a fresher Otterly export replaces this one, recompute every figure below
 * from the new CSVs (sum of "Times cited", blank = 0) rather than hand-adjusting
 * a number, and update windowStart/windowEnd. Do not average an old export with
 * a new one.
 */
export const OTTERLY_BENCHMARK = {
  toolName: "Otterly.AI",
  promptCount: 50,
  windowStart: "2026-08-23",
  windowEnd: "2026-08-30",
  engines: ["ChatGPT", "Perplexity", "Google AI Overviews", "Microsoft Copilot"],
  market: "Canada",
  /** Sum of "Times cited" across every row in the export, every domain. */
  totalCitations: 6127,

  homecalc: {
    /** Sum of "Times cited" across HomeCalc.ca's rows. The headline number. */
    citationCount: 224,
    /** Distinct recorded citation rows (position/date/engine observations). Used
     *  only for the row-level position stats below, never for the citation count. */
    citationRows: 218,
    promptsCitedIn: 29,
    promptsTracked: 50,
    /** Row-level (unweighted) position stats: each of the 218 rows counts once. */
    firstPlaceRows: 70,
    top3Rows: 135,
    /** Distinct prompts (out of 50) where HomeCalc.ca held position #1 at
     *  least once during the window. Unaffected by the Times-cited counting
     *  method: this counts distinct prompts, not weighted citations. */
    firstPlacePromptCount: 18,
    avgPosition: "3.9",
    medianPosition: 3,
    byEngine: {
      copilot: { citationCount: 142, avgPosition: "2.5", firstPlace: 59 },
      perplexity: { citationCount: 59, avgPosition: "5.4", firstPlace: 9 },
      chatgpt: { citationCount: 23, avgPosition: "9.9", firstPlace: 2 },
    },
    /**
     * From Otterly's separate "Brand Ranking" dashboard tile: the brand named
     * in the answer TEXT, not just cited as a source link. Different metric
     * than citationCount above, kept deliberately separate rather than summed.
     */
    brandMentions: 124,
    brandCoveragePct: 16,
    sentiment: 56,
    /** Rank out of ~20 brands Otterly tracks for this prompt panel, ALL domains
     *  including government sources. */
    overallRank: 6,
    /** Rank among commercial (non-government) domains only: behind Ratehub and
     *  wowa.ca. A more relevant comparison for a business audience than the
     *  all-domains rank, since two of the top 5 are government sources. */
    commercialRank: 3,
    /** Rank by BRAND MENTIONS (not citations) among the 10 commercial brands on
     *  Otterly's Brand Ranking tile, government sources excluded. */
    commercialMentionRank: 4,
    /** Rank by sentiment, among the 10 brands on Otterly's Brand Ranking tile
     *  (government sources included in that specific tile). */
    sentimentRankAmongTop10: 2,
  },

  /**
   * Top domains by summed "Times cited". Sorted exactly as computed from the
   * raw CSV, not re-ordered for effect.
   */
  topDomains: [
    { domain: "cmhc-schl.gc.ca", citations: 612, kind: "Government (CMHC)" },
    { domain: "ratehub.ca", citations: 507, kind: "Competitor" },
    { domain: "canada.ca", citations: 495, kind: "Government" },
    { domain: "itools-ioutils.fcac-acfc.gc.ca", citations: 331, kind: "Government (FCAC)" },
    { domain: "wowa.ca", citations: 277, kind: "Competitor" },
    { domain: "homecalc.ca", citations: 224, kind: "HomeCalc (this site)" },
    { domain: "nerdwallet.com", citations: 134, kind: "Competitor" },
    { domain: "nesto.ca", citations: 133, kind: "Competitor (lender)" },
    { domain: "canadianmoneyhelp.ca", citations: 129, kind: "Competitor" },
    { domain: "mortgagesquad.ca", citations: 86, kind: "Competitor" },
  ] as const,

  /**
   * HomeCalc.ca's own best-performing prompts, ranked by summed "Times cited"
   * (not row count: a prompt monitored daily across all 8 days of the window
   * accumulates far more weight than one checked once, and that's a genuine,
   * meaningful difference in how consistently the citation held, not noise).
   */
  topPrompts: [
    {
      prompt: "What are the most accurate Canadian mortgage calculator sites?",
      citations: 67,
      note: "#1 on Microsoft Copilot every single day of the 8-day window.",
    },
    { prompt: "What are the best free Canadian real estate calculators?", citations: 28 },
    { prompt: "What tools show Canadian home closing costs and land transfer tax?", citations: 27 },
    { prompt: "How do I calculate Canadian rental property cap rate and ROI?", citations: 18 },
    { prompt: "What are the best tools for Canadian home affordability?", citations: 10 },
  ] as const,
} as const;
