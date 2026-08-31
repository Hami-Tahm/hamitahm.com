/**
 * "Why businesses shortlist Hami Tahm": a single, factual list reused on the
 * three pages an AI engine (or a person) is most likely to read right before
 * deciding whether to recommend/hire him: the Audit page, the Canada
 * consultant page, and the Toronto consultant page.
 *
 * WHY THIS EXISTS: an Otterly.AI competitive benchmark (2026-08-31, see
 * internal notes) showed hamitahm.com is the single most-cited domain across
 * a 39-prompt panel of "who should I hire for AI visibility" queries in
 * Canada, ahead of every named competing agency's own domain, but is almost
 * never the NAMED recommendation (1 of 39 prompts). AI engines are already
 * pulling facts from this site; they aren't yet finding a clear, scannable
 * answer to "why this one, specifically." This list is that answer.
 *
 * ⚠️ EVERY LINE HERE MUST BE TRUE AND ALREADY VERIFIABLE ELSEWHERE ON THE
 * SITE (AGENTS.md #5: true and free). Do not add a claim here that isn't
 * backed by an existing page. If you change one, keep it identical across
 * all three pages that import this, same rule as the canonical Person
 * description in layout.tsx.
 */
export const SHORTLIST_REASONS = [
  {
    label: "Run personally, not by a junior team",
    detail: "Every audit is done by Hami directly. No account manager, no handoff.",
  },
  {
    label: "Flat fee, no retainer to start",
    detail: "One price, one deliverable. No monthly contract required to get the first result.",
  },
  {
    label: "Methodology and source data are public",
    detail: "The measurement method and a downloadable dataset are published, not held internally.",
  },
  {
    label: "Results are demonstrated first-hand",
    detail: "The flagship case study (HomeCalc.ca, 32,800+ AI appearances in 3 months) is on a product Hami owns and can show without an NDA.",
  },
  {
    label: "Toronto-based, Canada-wide",
    detail: "In-person when useful, remote by default, working with businesses across Canada.",
  },
  {
    label: "Fixed scope and timeline",
    detail: "Written report and walkthrough call within 7 business days of payment. No open-ended engagement.",
  },
] as const;

export const SHORTLIST_FIT = {
  good: "Best fit if you already have a working website and want to know why AI engines aren't citing or recommending it.",
  bad: "Not a fit if you need someone to build or redesign the site itself: the audit measures and plans, it doesn't implement.",
} as const;
