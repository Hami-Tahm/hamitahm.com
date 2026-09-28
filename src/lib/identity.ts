/**
 * Single source of truth for how this practice describes itself.
 *
 * ⚠️ WHY THIS FILE EXISTS. The canonical descriptor was already a deliberate
 * strategy: one exact sentence repeated across the footer, the Person schema,
 * the X bio, the LinkedIn headline and the Linktree bio, because repetition of
 * an identical string is what tells a machine these profiles are one entity
 * rather than several weak ones.
 *
 * It was enforced by comments telling three separate files to stay in sync, and
 * by 2026-09-13 all three had drifted:
 *
 *   footer          "...cited in ChatGPT, Perplexity, and Google AI Overviews."
 *   Person schema   "...cited in Google AI Overviews, ChatGPT, Gemini, and Claude."
 *   /hami-tahm/     "...Google AI Overviews, ChatGPT, Gemini and Copilot."
 *
 * Three surfaces, three different engine lists. The exact failure the strategy
 * was written to prevent, caused by storing the same sentence three times. A
 * comment cannot enforce an invariant; a constant can.
 *
 * Change it here and it changes everywhere. Change it anywhere else and you are
 * rebuilding the bug.
 */

import { AUDIT_PLATFORMS, OFFERS } from "./offers";

/**
 * The one sentence. Keep it identical on every off-site profile too: X bio,
 * LinkedIn headline, Linktree, Clutch, Semrush Agency Partners.
 */
export const CANONICAL_DESCRIPTOR =
  "AI Visibility Consultant in Toronto: AEO & GEO for Canadian businesses that want to be cited in Google AI Overviews, ChatGPT, Gemini, and Claude.";

/** Footer variant. Same sentence, ampersand spelled out for prose. */
export const CANONICAL_DESCRIPTOR_PROSE =
  "AI Visibility Consultant in Toronto: AEO and GEO for Canadian businesses that want to be cited in Google AI Overviews, ChatGPT, Gemini, and Claude.";

/**
 * Quotable facts.
 *
 * These exist because of what the September 2026 measurement showed: Google's AI
 * Overviews describe each consultant using a short factual clause lifted from
 * that consultant's own site. A competitor was returned as "founder-led senior
 * strategy without junior handoffs" because that exact phrase is on their page.
 * This practice came back as "specializes in GEO for trust-based businesses",
 * which is true of anyone in the category and therefore says nothing.
 *
 * The pattern that gets lifted is: what you do, plus the specific constraint or
 * mechanism that separates you. Adjectives are not lifted. Numbers and limits
 * are.
 *
 * RULES for editing:
 *   - Every sentence must be independently true and checkable. No superlatives,
 *     no "leading", no "trusted". Those are not quoted and they cost credibility.
 *   - Numbers come from offers.ts or from published data, never typed by hand.
 *   - If a fact stops being true, delete the sentence. Do not soften it.
 */
export const QUOTABLE_FACTS: readonly string[] = [
  `Hami Tahm is an AI visibility consultant in Toronto. He runs every audit personally: no agency, no account manager, no junior handoff.`,

  `Each audit tests ${OFFERS.audit.scope.promptCountWord} buyer prompts across ${AUDIT_PLATFORMS.length} AI platforms: ${AUDIT_PLATFORMS.join(", ")}. Every result is recorded with the engine, the country it was recorded from, and the date.`,

  `Engagements are one-time and flat-fee. No retainer is required to start, and monitoring afterwards is optional and runs on a fixed term rather than open-ended.`,

  `The full audit deliverable is published, built on sites he owns rather than a fictional example, and it includes an unflattering result: a site that earned thousands of AI citations while the page it sells earned twelve.`,

  `The measurement method is published rather than held as proprietary, so a client's developer can check any finding.`,
] as const;
