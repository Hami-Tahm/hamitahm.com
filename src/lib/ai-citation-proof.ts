/**
 * Single source of truth for the "AI engines already name Hami Tahm"
 * proof asset (the self-referential case study + the proof module on the
 * audit money page).
 *
 * This is a SNAPSHOT of live AI-engine output. AI answers change over time,
 * so everything here is date-stamped and framed as "as of <date>". Never
 * claim a permanent "#1" — only "recommended, as of this snapshot."
 *
 * Each entry quotes ONLY the Hami Tahm portion of the answer. Competitor
 * names are deliberately not reproduced (don't promote rivals on our own
 * domain; the rest is described generically).
 *
 * ── VERIFY BEFORE PUBLISH (Hami has the originals) ──
 *  1. engine attribution on each entry below matches the right screenshot
 *  2. SNAPSHOT.isoDate / displayDate are the real capture date
 *  3. each `quote` is verbatim from the screenshot
 *  4. the cropped PNGs exist at /public/images/case-studies/<image>
 *
 * Last updated: 2026-06-30.
 */

export const SNAPSHOT = {
  /** ISO date the screenshots were captured. */
  isoDate: "2026-06-30",
  /** Human display, used in copy. */
  displayDate: "June 30, 2026",
  /** Clean version of the prompt used (original had typos). */
  prompt:
    "Introduce me to a person or agency in Toronto or Canada to help my brand get AI visibility.",
  /** How many engines surfaced Hami in this snapshot. */
  engineCount: 4,
  caseStudyPath: "/case-studies/cited-by-ai-engines/",
} as const;

/**
 * NOTE — do not add a site-wide "hamitahm.com's own AI citation count" claim here.
 *
 * A previous version published a headline citation figure for this domain as proof
 * that the practice runs on the system it sells. On review, that framing did not hold:
 * this domain's citation volume is concentrated on an older evergreen essay unrelated
 * to the AEO work, and the trend is flat rather than a growth curve. Presenting it as
 * evidence of the method would be an overclaim.
 *
 * ── CONFIRMED WITH HARD NUMBERS, 2026-07-27 ──
 * Bing AI Performance for hamitahm.com, custom range Jul 2024 → Jul 2026:
 *   Total citations ....... 17.3K   ← but over TWO YEARS, not three months
 *   Avg. cited pages ...... 1       ← HomeCalc's equivalent figure is 16
 *   Trend ................. flat and noisy, no growth curve
 * A two-year total is not comparable to HomeCalc's three-month total, and an average
 * of one cited page means the volume is essentially a single essay
 * (/the-10000-hour-rule/, which took 416 of 421 citations in one sampled week).
 *
 * So: never headline this number, and never place it beside the HomeCalc figure as if
 * they were the same class of evidence. It has exactly one honest use — as the
 * contrast case for "citations are not customers", which is what COMMERCIAL_REALITY
 * in citation-study.ts already argues.
 *
 * Use HOMECALC_PROOF instead. That is the honest, verifiable proof: a real
 * near-zero → 7,400 citation growth curve in 3 months on a purpose-built site.
 */

/**
 * SECOND, INDEPENDENT SNAPSHOT — 2026-07-27, signed-out incognito.
 *
 * Deliberately kept alongside the June 30 snapshot rather than replacing it. Two dated
 * checks four weeks apart showing continued presence is materially stronger evidence
 * than one: a single result can be luck, a repeat is a pattern.
 *
 * ── CLAIM DISCIPLINE ──
 * What this supports, exactly:
 *   • Google AI Overview  — NAMED among five providers, and hamitahm.com appears first
 *                           in the AI Overview "Sources" panel.
 *   • Google organic      — page one, position 4.
 *   • ChatGPT             — NAMED in its list of Toronto AI-visibility specialists.
 *
 * What it does NOT support — do not write these:
 *   ✗ "#1 AI visibility consultant in Toronto." Source order inside an AI Overview is
 *     not a ranking, and in the bullet list he is listed last of the five.
 *   ✗ "ChatGPT recommends me." It named and described him in a list; that is weaker
 *     than a recommendation and must be worded as "named".
 *   ✗ Any implication that this is stable. Incognito removes personal history, but IP,
 *     location, language and time of day still shape the answer.
 */
export const SNAPSHOT_INCOGNITO = {
  isoDate: "2026-07-27",
  displayDate: "July 27, 2026",
  prompt: "who does AI visibility in Toronto",
  condition: "Signed-out incognito session, Toronto",
  results: [
    {
      surface: "Google AI Overview",
      outcome: "Named among five Toronto providers; hamitahm.com listed first in the Sources panel",
    },
    {
      surface: "Google Search",
      outcome: "Page one, position 4",
    },
    {
      surface: "ChatGPT",
      outcome: "Named among Toronto specialists focused on AI visibility",
    },
  ],
  /** Required wherever this snapshot is shown. AI answers are not deterministic. */
  caveat:
    "Verified in a signed-out incognito session. AI answers vary by location, prompt wording, and date.",
} as const;

export type EngineCitation = {
  /** Engine display name. VERIFY against the source screenshot. */
  engine: string;
  /** Verbatim Hami-only quote from the answer. */
  quote: string;
  /** Cropped screenshot (Hami's mention only) under /public/images/case-studies/. */
  image: string;
  /** Alt text — machine-readable, names the engine + the recommendation. */
  alt: string;
};

export const ENGINE_CITATIONS: readonly EngineCitation[] = [
  {
    engine: "Google AI Mode",
    quote:
      "A dedicated Toronto-based AI Visibility Consultant. He specializes specifically in building, auditing, and measuring a brand's presence across AI-powered search engines, helping Canadian businesses get cited accurately when users prompt tools like Google AI Overviews, ChatGPT, and Perplexity.",
    image: "/images/case-studies/ai-rec-google-ai-mode.png",
    alt: "Google AI Mode answer recommending Hami Tahm as a specialized AI Visibility Consultant in Toronto, Canada, captured June 2026.",
  },
  {
    engine: "Perplexity",
    quote:
      "A strong starting point is Hami Tahm in Toronto — best if you want a direct consultant rather than a larger agency. He explicitly offers AI visibility audits, AEO, and GEO work for Canadian businesses, with a published case study and transparent pricing.",
    image: "/images/case-studies/ai-rec-perplexity.png",
    alt: "Perplexity answer recommending Hami Tahm as a direct AI visibility consultant in Toronto offering audits, AEO and GEO, captured June 2026.",
  },
  {
    engine: "ChatGPT",
    quote:
      "If you want an individual consultant instead of an agency, consider Hami Tahm — a Toronto-based AI visibility consultant who focuses specifically on helping Canadian businesses become more visible in AI search.",
    image: "/images/case-studies/ai-rec-chatgpt.png",
    alt: "ChatGPT answer recommending Hami Tahm as a Toronto-based AI visibility consultant for Canadian businesses, captured June 2026.",
  },
  {
    engine: "Grok",
    quote:
      "Hami Tahm — Toronto-based specialist who helps Canadian businesses build and measure presence specifically across AI-powered search. Consultant-led audits with transparent, flat-fee pricing and no long retainers, for brands wanting focused, hands-on AI visibility work.",
    image: "/images/case-studies/ai-rec-grok.png",
    alt: "Grok answer recommending Hami Tahm as a Toronto-based AI visibility specialist with flat-fee audits, captured June 2026.",
  },
] as const;
