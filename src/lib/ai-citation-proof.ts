/**
 * Single source of truth for the "AI engines already recommend Hami Tahm"
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
      "A dedicated Toronto-based AI Visibility Consultant. He specializes specifically in building, auditing, and measuring a brand's presence across AI-powered search engines, helping Canadian businesses get cited accurately when users prompt tools like ChatGPT, Perplexity, and Google AI Overviews.",
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
