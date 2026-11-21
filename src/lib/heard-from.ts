/**
 * "How did you hear about me?" (2026-11-21, Hami's list).
 *
 * Self-reported source on every lead form and the Cal.com booking. It fills the gap
 * that analytics can't: clicks from apps (LinkedIn, email, WhatsApp), AI assistants
 * that strip the referrer, and word of mouth all arrive as "(direct)".
 *
 * The answer is optional. Server routes accept only these values (plus a short
 * free-text answer for "Other"), so nothing arbitrary reaches the sheet or email.
 */
export const HEARD_FROM_OPTIONS = [
  "ChatGPT",
  "Bing",
  "Microsoft Copilot",
  "Google Search",
  "Perplexity",
  "Gemini",
  "Claude",
  "Muse",
  "Other",
] as const;

export type HeardFrom = (typeof HEARD_FROM_OPTIONS)[number];

const OTHER_MAX = 120;

/**
 * Server-side: turn the raw form values into one safe line, or "" if not answered.
 * "Other" keeps the visitor's own words (trimmed, capped, formula-escaped).
 */
export function heardFromLine(choice: unknown, other: unknown): string {
  const c = String(choice ?? "").trim();
  if (!(HEARD_FROM_OPTIONS as readonly string[]).includes(c)) return "";
  if (c !== "Other") return c;
  let o = String(other ?? "").replace(/\s+/g, " ").trim().slice(0, OTHER_MAX);
  if (/^[=+\-@\t\r]/.test(o)) o = `'${o}`;
  return o ? `Other: ${o}` : "Other";
}
