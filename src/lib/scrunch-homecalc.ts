/**
 * HomeCalc.ca AI-visibility data from Scrunch (app.scrunchai.com), read directly
 * from the live dashboard on 2026-09-07. This is a THIRD, SEPARATE instrument
 * from the other two HomeCalc datasets already on this site, and must never be
 * merged or averaged with either:
 *
 *   - src/lib/homecalc-proof.ts: Bing Webmaster Tools' AI Performance report.
 *     Copilot-only citation counts, a live rolling number.
 *   - src/lib/citation-study.ts: the fixed, published Zenodo dataset (DOI
 *     10.5281/zenodo.21651568), a manually-run 6-engine prompt panel.
 *   - THIS file: Scrunch's own automated tracking, which runs its own prompt
 *     set against ChatGPT, Perplexity, Google AI Overviews and Microsoft
 *     Copilot and computes its own "mention" and "citation" definitions.
 *     Different vendor, different methodology, different prompt set, and a
 *     different (much shorter) time window. Numbers from this file are
 *     labeled "per Scrunch" everywhere they appear.
 *
 * ── TWO DIFFERENT TOTALS, SAME TOOL, EXPLAINED ──
 * Scrunch's "Home" dashboard and its "Explorer" drill-down each defaulted to a
 * slightly different date window when read (both on 2026-09-07, both showing
 * an "Aug 30 - Sep 6" style range but not identical row counts): Home showed
 * 140 total responses and a Brand-citation count of 78; the Explorer Citations
 * view showed 110 total responses (explicitly labeled Sep 1 - Sep 6 on the
 * Brands page) and a Brand-citation count of 63. Both are real, both are
 * screenshotted from the live tool, and they are kept separate below rather
 * than picked-and-mixed. The headline stats (mention rate, citation rate,
 * sentiment) match on both views; only the underlying response/citation
 * counts differ by window.
 *
 * ── WHAT "MENTION" VS "CITATION" MEANS IN SCRUNCH ──
 * Citation = HomeCalc's own domain appears as a linked source in the AI
 * answer. Mention = the AI's own written text names "HomeCalc" as a brand,
 * independent of whether a HomeCalc URL was the source. A page can be cited
 * with a 0% mention rate (used as a source, never named), which is the
 * central finding below.
 */
export const SCRUNCH_HOMECALC = {
  tool: "Scrunch",
  toolUrl: "https://app.scrunchai.com/",
  readDate: "2026-09-07",
  engines: ["ChatGPT", "Perplexity", "Google AI Overviews", "Microsoft Copilot"],
  promptVariants: 20,
  promptVariantsCap: 500,
  seedPrompts: 5,

  home: {
    window: "Aug 30 - Sep 6, 2026 (Home dashboard default view)",
    totalResponses: 140,
    mentionsRate: "17.1%",
    citationsRate: "45%",
    sentimentAverage: 100,
    citationsByOwner: {
      brand: { count: 78, pct: "8.7%" },
      competitor: { count: 123, pct: "13.8%" },
      thirdParty: { count: 693, pct: "77.5%" },
    },
    position: { top: { pct: "62.5%", count: 15 }, middle: { pct: "37.5%", count: 9 } },
    sentiment: { positive: { pct: "100.0%", count: 23 } },
    topBrandsByMentionRate: [
      { brand: "HomeCalc", rate: "17.1%" },
      { brand: "Ratehub", rate: "24.3%" },
      { brand: "WOWA", rate: "21.4%" },
      { brand: "rates.ca", rate: "3.6%" },
    ],
  },

  /** Explorer > Citations template, a different date window than `home` above (see file header). */
  explorerCitations: {
    window: "Sep 1 - Sep 6, 2026 (Explorer / Brands page window)",
    totalResponses: 110,
    citationsByOwner: {
      brand: { count: 63, pct: "8.5%" },
      competitor: { count: 108, pct: "14.6%" },
      thirdParty: { count: 571, pct: "77.0%" },
    },
    topDomainsCited: [
      { domain: "homecalc.ca", citations: 63 },
      { domain: "wowa.ca", citations: 45 },
      { domain: "cmhc-schl.gc.ca", citations: 43 },
      { domain: "ratehub.ca", citations: 40 },
    ],
    /**
     * The central finding: per-domain citation rate vs. how often that
     * citation comes with the brand actually named in the answer text.
     * "Citation Mention Rate" columns straight from Scrunch's own table.
     */
    citationVsMentionRate: [
      { domain: "homecalc.ca", citationsRate: "45%", homecalcMentionRate: "100%", competitorMentionRate: "0%" },
      { domain: "wowa.ca", citationsRate: "32.1%", homecalcMentionRate: "0%", competitorMentionRate: "100%" },
      { domain: "ratehub.ca", citationsRate: "28.6%", homecalcMentionRate: "0%", competitorMentionRate: "100%" },
      { domain: "nesto.ca", citationsRate: "11.4%", homecalcMentionRate: "0%", competitorMentionRate: "100%" },
    ],
    /**
     * Page-level: HomeCalc's own land-transfer-tax calculator gets cited but
     * the citation never comes with the brand named, unlike its own other
     * calculator pages (which show 100% mention rate on their own citations
     * because they're first-party URLs, i.e. self-mentioning). Compare to the
     * competitor land-transfer-tax pages below, which DO get named.
     */
    landTransferTaxComparison: [
      { url: "homecalc.ca/tools/land-transfer-tax-calculator", citationsCount: 7, citationsRate: "5%", homecalcMentionRate: "100%" },
      { url: "wowa.ca/calculators/land-transfer-tax", citationsCount: 14, citationsRate: "10%", competitorMentionRate: "100%" },
      { url: "ratehub.ca/land-transfer-tax", citationsCount: 13, citationsRate: "9.3%", competitorMentionRate: "100%" },
    ],
  },

  /** Explorer > Topics template. Per-prompt breakdown, n=28 responses per prompt. */
  topicsPrompts: [
    { prompt: "Where can I find user-friendly calculators specifically designed for Canadian real estate math?", mentionsRate: "46.4%", citationsRate: "71.4%" },
    { prompt: "Are there any calculators that can help me estimate profits from house flipping, including the impact of the federal anti-flipping tax?", mentionsRate: "25%", citationsRate: "39.3%" },
    { prompt: "What are some reliable online calculators for calculating mortgage affordability in Canada, especially under the OSFI B-20 stress test?", mentionsRate: "7.1%", citationsRate: "46.4%" },
    { prompt: "What resources can assist me in calculating cash flow for house-hacking, particularly with the different CMHC premium tiers?", mentionsRate: "7.1%", citationsRate: "42.9%" },
    { prompt: "Can you recommend tools that help me figure out land transfer taxes in different provinces and cities in Canada?", mentionsRate: "0%", citationsRate: "25%" },
  ],

  /** Site Maps > Domain Insights. 24 pages tracked, all scoring 100/Excellent on Scrunch's own audit. */
  siteAudit: {
    pagesTracked: 24,
    pagesWithPerfectAuditScore: 24,
    pagesWithAnyCitations: 2,
    pagesCitedDetail: [
      { page: "homecalc.ca (homepage)", citations: 12 },
      { page: "/tools/house-flip-tax-calculator", citations: 4 },
    ],
    lastCrawl: "2026-08-31",
    planCrawlLimit: 25,
  },

  /**
   * AI Referrals tab, Google Analytics integration confirmed Active (not a
   * missing-integration false zero). 90-day window, read 2026-09-07.
   */
  aiReferrals: {
    integration: "Google Analytics",
    integrationStatus: "Active",
    window: "last 90 days",
    sessions: 0,
    views: 0,
  },

  /**
   * Configure > Brand Entities. 5 competitors configured; 0 sub-brands
   * accepted; 10 AI-suggested sub-brands pending review. Two of the ten
   * cross-check as real, independent third-party domains rather than
   * HomeCalc sub-brands (see WHAT LOOKS LIKE A DATA ERROR below).
   */
  competitorsConfigured: ["myperch.io", "nesto.ca", "Ratehub (ratehub.ca)", "rates.ca", "WOWA (wowa.ca)"],
  suggestedSubBrandsPending: 10,
  /**
   * WHAT LOOKS LIKE A DATA ERROR, not a HomeCalc finding: Scrunch's AI-detected
   * sub-brand suggestions included "Maple Syrup Money" (88-89% confidence) and
   * "CanCalc" (88% confidence). Cross-checking the Citations domain table shows
   * maplesyrupmoney.com (13 citations) and cancalc.com (8 citations) as
   * independent third-party domains competing for the same prompts, not
   * HomeCalc products. Accepting either suggestion would fold a competitor's
   * citations into HomeCalc's own numbers. Flagged, not accepted, as of the
   * read date above.
   */
  likelyMisattributedSuggestions: [
    { suggested: "Maple Syrup Money", confidence: "88-89%", actualDomain: "maplesyrupmoney.com", actualCitations: 13 },
    { suggested: "CanCalc", confidence: "88%", actualDomain: "cancalc.com", actualCitations: 8 },
  ],
} as const;
