/**
 * First-touch campaign attribution (client-side only).
 *
 * Captures utm_* and gclid from the FIRST landing URL that carries any of them and
 * keeps that record for 90 days in localStorage, so a visitor who lands from an ad on
 * one page and submits the contact form later (same browser) still carries the
 * campaign that brought them. First touch wins: later UTM'd visits do not overwrite it.
 *
 * Contains no personal data: campaign parameters, the landing path and a timestamp.
 * Every storage call is wrapped, because storage can throw (Safari private mode,
 * disabled cookies) and attribution must never break the page.
 */

export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];

export type FirstTouch = Partial<Record<AttributionKey, string>> & {
  landing_path?: string;
  captured_at?: string;
};

const STORAGE_KEY = "ht_first_touch";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;
const MAX_LEN = 150;

/** Pure: extracts campaign params from a query string. Exported for tests. */
export function parseCampaign(search: string): Partial<Record<AttributionKey, string>> {
  const params = new URLSearchParams(search);
  const out: Partial<Record<AttributionKey, string>> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const v = params.get(key);
    if (v && v.trim()) out[key] = v.trim().slice(0, MAX_LEN);
  }
  return out;
}

export function readFirstTouch(): FirstTouch | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as FirstTouch;
    if (data.captured_at && Date.now() - Date.parse(data.captured_at) > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/** Stores campaign params from the current URL unless a first touch already exists. */
export function captureFirstTouch(): void {
  try {
    const campaign = parseCampaign(window.location.search);
    if (Object.keys(campaign).length === 0) return;
    if (readFirstTouch()) return;
    const record: FirstTouch = {
      ...campaign,
      landing_path: window.location.pathname.slice(0, MAX_LEN),
      captured_at: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* attribution is best-effort */
  }
}
