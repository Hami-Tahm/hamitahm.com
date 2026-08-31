/**
 * Otterly.AI competitive benchmark: hamitahm.com vs. Canada's AI-visibility /
 * AEO-agency category in AI search. Same instrument, same counting method,
 * and the same site-wide separation rule as src/lib/otterly-mortgage-benchmark.ts:
 * this is a DIFFERENT dataset from homecalc-proof.ts and citation-study.ts
 * (different subject, different panel, different window) and must never be
 * merged with either.
 *
 * ── SOURCE ──
 * Otterly.AI, the same competitive AI-search-tracking tool used for the
 * HomeCalc mortgage-calculator benchmark. 39 hand-picked, real buyer-intent
 * prompts about hiring an AI-visibility consultant, AEO agency, or GEO
 * specialist in Canada, run across ChatGPT, Perplexity, Google (AI
 * Overviews), and Microsoft Copilot, for the week of 2026-08-24 to
 * 2026-08-30. Raw export: hamitahm_citations_3464bff3...csv (3,737 citation
 * rows) and hamitahm_prompts_2026-08-31...csv (39 prompt-level rows).
 *
 * ── COUNTING METHOD ──
 * Same rule established for the HomeCalc benchmark: SUM("Times cited"),
 * treating a blank field as 0, not raw row count. Verified two independent
 * ways: (1) summing "Times cited" across all 3,737 citation rows for
 * hamitahm.com gives 188, and (2) summing the separate "Your domain cited"
 * column across all 39 rows of the prompt-level export ALSO gives 188. Two
 * different exports, same number, so this figure is solid.
 *
 * ⚠️ THE DASHBOARD/PDF BRAND REPORT IS A DIFFERENT, SMALLER SCOPE. Otterly's
 * own generated PDF ("HamiTahm-Brand-Report-2026-08-31.pdf") states on its
 * first page: "13 prompts, Last 14 days," a FILTERED subset of the full
 * 39-prompt, 7-day panel this file is computed from. That is why the
 * dashboard's "0.19% brand coverage" / "rank 8" / "3,256 citations" tiles do
 * not match the numbers below: different denominator, not a contradiction.
 * The Brand Ranking table (mentions/sentiment/coverage per competitor) below
 * is the one exception kept from that filtered PDF view, because it is the
 * only source for competitor-level mention/sentiment data; it is labeled as
 * such everywhere it's used and must stay labeled that way.
 *
 * ── WHAT THIS IS NOT ──
 * Not a claim that Hami Tahm is Canada's #1, top-5, or best AI visibility
 * consultant. It is one week, one 39-prompt panel, and one vendor's crawler.
 * See the "What this isn't claiming" section on the post that uses this data.
 */
export const HAMITAHM_BENCHMARK = {
  toolName: "Otterly.AI",
  promptCount: 39,
  windowStart: "2026-08-24",
  windowEnd: "2026-08-30",
  engines: ["ChatGPT", "Perplexity", "Google", "Microsoft Copilot"],
  market: "Canada",
  totalCitations: 3985,
  totalDomains: 1046,

  hamitahm: {
    citationCount: 188,
    citationRows: 159,
    promptsCitedIn: 10,
    promptsTracked: 39,
    avgPosition: "5.4",
    medianPosition: 4,
    overallRank: 1,
    byEngine: {
      chatgpt: { citationCount: 84, rows: 55 },
      perplexity: { citationCount: 70, rows: 70 },
      google: { citationCount: 19, rows: 19 },
      copilot: { citationCount: 15, rows: 15 },
    },
    /**
     * Named-recommendation count from the full 39-prompt export's "Your
     * brand mentioned" column: exactly 1. That single mention happened on
     * Perplexity, on one day (2026-08-25), for one prompt, across 4 cited
     * sources within that one answer, which is why the raw citation file
     * shows 4 rows with "Brand Mentioned on AI Response: Yes" even though
     * it is one prompt, one engine, one day.
     */
    namedMentionPromptCount: 1,
    namedMentionPrompt: "Can you recommend an AI visibility consultant in Toronto?",
    namedMentionEngine: "Perplexity",
    namedMentionDate: "2026-08-25",
    namedMentionRank: 1,
    namedMentionSentiment: "+50",
  },

  /** Top domains by summed "Times cited", full 39-prompt panel. */
  topDomains: [
    { domain: "hamitahm.com", citations: 188, kind: "HamiTahm (this site)" },
    { domain: "agencies.semrush.com", citations: 131, kind: "Directory (Semrush)" },
    { domain: "youtube.com", citations: 114, kind: "Video platform" },
    { domain: "developers.google.com", citations: 78, kind: "Google documentation" },
    { domain: "linkedin.com", citations: 68, kind: "Social platform" },
    { domain: "help.openai.com", citations: 59, kind: "OpenAI documentation" },
    { domain: "thatware.co", citations: 52, kind: "Competitor" },
    { domain: "longhouse.co", citations: 43, kind: "Competitor" },
    { domain: "semrush.com", citations: 43, kind: "Directory (Semrush)" },
    { domain: "lumirank.ca", citations: 41, kind: "Competitor" },
  ] as const,

  /** hamitahm.com's own most-cited pages, trailing-slash variants merged. */
  topPages: [
    { url: "/ai-visibility/ai-visibility-consultant-canada/", citations: 50 },
    { url: "/ai-visibility/", citations: 37 },
    { url: "/ai-visibility/ai-visibility-consultant-toronto/", citations: 35 },
    { url: "/ai-visibility/ai-visibility-audit/", citations: 29 },
    { url: "/pricing/", citations: 17 },
  ] as const,

  /** hamitahm.com's own best-performing prompts by "Your domain cited". */
  topPrompts: [
    { prompt: "Who offers a flat-fee AI visibility audit without a monthly retainer?", citations: 36 },
    { prompt: "Who are the best AI visibility consultants in Canada?", citations: 32 },
    { prompt: "Where can I get an AI visibility audit in Canada?", citations: 29 },
    { prompt: "Which AI visibility consultants work with healthcare clinics in Canada?", citations: 27 },
    { prompt: "Which consultants provide an AI visibility audit and prioritized action plan?", citations: 26 },
    {
      prompt: "Can you recommend an AI visibility consultant in Toronto?",
      citations: 24,
      note: "The one prompt where Hami Tahm was also named as the recommendation, not just cited as a source.",
    },
  ] as const,

  /**
   * Otterly's Brand Ranking leaderboard: mentions/sentiment/coverage for the
   * ~10 competitor brands it tracks by name. FROM THE FILTERED 13-of-39-
   * prompt PDF view, not the full panel; see the note at the top of this
   * file. Do not recompute a "citations" number from this table, it measures
   * mentions, a different thing.
   */
  brandRanking: [
    { rank: 1, name: "Longhouse", sentiment: "+61", mentions: 33, coverage: "6.4%" },
    { rank: 2, name: "Canopy Media", sentiment: "+48", mentions: 17, coverage: "3.3%" },
    { rank: 3, name: "First Page Sage", sentiment: "+70", mentions: 8, coverage: "1.6%" },
    { rank: 4, name: "Parabolic Studio", sentiment: "+72", mentions: 7, coverage: "1.4%" },
    { rank: 5, name: "Digital 6ix", sentiment: "+57", mentions: 6, coverage: "1.2%" },
    { rank: 6, name: "iPullRank", sentiment: "+20", mentions: 6, coverage: "1.2%" },
    { rank: 7, name: "Valory", sentiment: "+43", mentions: 3, coverage: "0.58%" },
    { rank: 8, name: "Hami Tahm", sentiment: "+50", mentions: 1, coverage: "0.19%" },
    { rank: 9, name: "AEO Agency Canada", sentiment: "+50", mentions: 1, coverage: "0.19%" },
    { rank: 10, name: "CAUSE Marketing", sentiment: "+100", mentions: 1, coverage: "0.19%" },
  ] as const,
} as const;
