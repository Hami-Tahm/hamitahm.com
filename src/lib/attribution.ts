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

/* ────────────────────────────────────────────────────────────────────────────
 * LEAD ATTRIBUTION v2 (2026-11-14)
 *
 * WHY: the Whizlabs checker lead (Nov 14) arrived with no source at all; the only
 * way to learn it came from organic Google was a Clarity recording. From now on
 * every form submission carries where the person came from, on two clocks:
 *
 *   FIRST TOUCH  the very first visit in this browser (90 days). Never overwritten.
 *   LAST TOUCH   the most recent NON-direct visit (90 days). A direct return visit
 *                does not erase "came from Google Ads last week" (GA4's convention).
 *   SESSION      this visit's own entry, direct included (sessionStorage).
 *
 * Each touch: source, medium, campaign, term (keyword), content, gclid / gbraid /
 * wbraid / msclkid, referrer (host + path, NEVER the query string), landing page
 * (path only) and a timestamp.
 *
 * Source/medium: utm_* wins; otherwise a click ID implies paid search; otherwise
 * the referrer host is classified (organic search, AI assistant, social, referral);
 * otherwise (direct) / (none).
 *
 * NOTE ON KEYWORDS: Google and Bing do not pass the organic search term to the
 * site, so `term` is only filled for paid clicks (utm_term={keyword} is set on the
 * Ads campaign). Organic queries live in Search Console, not here.
 *
 * NO PII: campaign parameters, hostnames, paths and timestamps only.
 * ──────────────────────────────────────────────────────────────────────────── */

export type Touch = {
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  msclkid?: string;
  referrer?: string;
  landing_page: string;
  at: string;
};

export type LeadAttribution = {
  first_touch: Touch | null;
  last_touch: Touch | null;
  session_touch: Touch | null;
};

const FT_KEY = "ht_ft_v2";
const LT_KEY = "ht_lt_v2";
const SESSION_KEY = "ht_session_touch";

const SEARCH_HOSTS = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.yahoo\.com|yahoo\.com|ecosia\.org|baidu\.com|yandex\.[a-z.]+|search\.brave\.com|naver\.com)$/;
const AI_HOSTS = /(^|\.)(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|claude\.ai|you\.com|phind\.com|meta\.ai|grok\.com|deepseek\.com)$/;
const SOCIAL_HOSTS = /(^|\.)(linkedin\.com|lnkd\.in|facebook\.com|fb\.com|instagram\.com|x\.com|twitter\.com|t\.co|reddit\.com|youtube\.com|youtu\.be|threads\.net|pinterest\.com|tiktok\.com|producthunt\.com|medium\.com)$/;

function cut(v: string | null | undefined): string | undefined {
  const t = (v || "").trim();
  return t ? t.slice(0, MAX_LEN) : undefined;
}

function searchName(host: string): string {
  const m = host.match(/(google|bing|duckduckgo|yahoo|ecosia|baidu|yandex|brave|naver)/);
  return m ? m[1] : host;
}

/**
 * Pure: builds a Touch from a landing URL and a referrer. Exported for tests.
 * `selfHost` is this site's hostname; a referrer from it is internal (not a touch).
 */
export function classifyTouch(landingHref: string, referrer: string, selfHost: string, nowIso: string): Touch {
  let landing: URL;
  try {
    landing = new URL(landingHref);
  } catch {
    landing = new URL("https://invalid.local/");
  }
  const q = landing.searchParams;
  const t: Touch = {
    source: "(direct)",
    medium: "(none)",
    landing_page: landing.pathname.slice(0, MAX_LEN),
    at: nowIso,
  };
  const campaign = cut(q.get("utm_campaign"));
  const term = cut(q.get("utm_term"));
  const content = cut(q.get("utm_content"));
  const gclid = cut(q.get("gclid"));
  const gbraid = cut(q.get("gbraid"));
  const wbraid = cut(q.get("wbraid"));
  const msclkid = cut(q.get("msclkid"));
  if (campaign) t.campaign = campaign;
  if (term) t.term = term;
  if (content) t.content = content;
  if (gclid) t.gclid = gclid;
  if (gbraid) t.gbraid = gbraid;
  if (wbraid) t.wbraid = wbraid;
  if (msclkid) t.msclkid = msclkid;

  let refHost = "";
  try {
    if (referrer) {
      const r = new URL(referrer);
      refHost = r.hostname.replace(/^www\./, "");
      if (r.hostname !== selfHost) t.referrer = `${r.hostname}${r.pathname}`.slice(0, MAX_LEN);
      else refHost = "";
    }
  } catch {
    refHost = "";
  }

  const utmSource = cut(q.get("utm_source"));
  const utmMedium = cut(q.get("utm_medium"));
  if (utmSource) {
    t.source = utmSource;
    // ChatGPT and some other assistants append utm_source=chatgpt.com with no medium.
    // Infer the medium from the source host the same way a referrer is classified.
    const srcHost = utmSource.toLowerCase().replace(/^www\./, "");
    t.medium =
      utmMedium ||
      (AI_HOSTS.test(srcHost)
        ? "ai-assistant"
        : SEARCH_HOSTS.test(srcHost)
          ? "organic"
          : SOCIAL_HOSTS.test(srcHost)
            ? "social"
            : "(not set)");
  } else if (gclid || gbraid || wbraid) {
    t.source = "google";
    t.medium = "cpc";
  } else if (msclkid) {
    t.source = "bing";
    t.medium = "cpc";
  } else if (refHost) {
    if (AI_HOSTS.test(refHost)) {
      t.source = refHost;
      t.medium = "ai-assistant";
    } else if (SEARCH_HOSTS.test(refHost)) {
      t.source = searchName(refHost);
      t.medium = "organic";
    } else if (SOCIAL_HOSTS.test(refHost)) {
      t.source = refHost;
      t.medium = "social";
    } else {
      t.source = refHost;
      t.medium = "referral";
    }
  }
  return t;
}

function isDirect(t: Touch): boolean {
  return t.source === "(direct)";
}

function readStored(storage: Storage, key: string): Touch | null {
  try {
    const raw = storage.getItem(key);
    if (!raw) return null;
    const t = JSON.parse(raw) as Touch;
    if (t.at && Date.now() - Date.parse(t.at) > TTL_MS) {
      storage.removeItem(key);
      return null;
    }
    return t;
  } catch {
    return null;
  }
}

/** Legacy first touch (utm-only, pre v2) → v2 shape, so older visitors keep their origin. */
function migrateLegacy(): Touch | null {
  const old = readFirstTouch();
  if (!old) return null;
  return {
    source: old.utm_source || (old.gclid ? "google" : "(not set)"),
    medium: old.utm_medium || (old.gclid ? "cpc" : "(not set)"),
    ...(old.utm_campaign ? { campaign: old.utm_campaign } : {}),
    ...(old.utm_term ? { term: old.utm_term } : {}),
    ...(old.utm_content ? { content: old.utm_content } : {}),
    ...(old.gclid ? { gclid: old.gclid } : {}),
    landing_page: old.landing_path || "",
    at: old.captured_at || new Date().toISOString(),
  };
}

/**
 * Runs once per page load (AttributionCapture). Records the session touch on the
 * first page of a visit and updates first/last touch accordingly.
 */
export function captureTouches(): void {
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return; // already captured this visit
    const touch = classifyTouch(
      window.location.href,
      document.referrer,
      window.location.hostname,
      new Date().toISOString(),
    );
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(touch));

    if (!readStored(window.localStorage, FT_KEY)) {
      const first = migrateLegacy() || touch;
      window.localStorage.setItem(FT_KEY, JSON.stringify(first));
    }
    const last = readStored(window.localStorage, LT_KEY);
    if (!isDirect(touch) || !last) {
      window.localStorage.setItem(LT_KEY, JSON.stringify(touch));
    }
  } catch {
    /* attribution is best-effort */
  }
}

/** What a form sends with a submission. Never throws. */
export function readLeadAttribution(): LeadAttribution {
  try {
    return {
      first_touch: readStored(window.localStorage, FT_KEY),
      last_touch: readStored(window.localStorage, LT_KEY),
      session_touch: readStored(window.sessionStorage, SESSION_KEY),
    };
  } catch {
    return { first_touch: null, last_touch: null, session_touch: null };
  }
}

/* ── Server side: sanitising what the browser sent ─────────────────────────── */

const TOUCH_FIELDS = [
  "source",
  "medium",
  "campaign",
  "term",
  "content",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "referrer",
  "landing_page",
  "at",
] as const;

/** Sheet formula-injection defence + length cap, same rule as the API routes. */
function sheetSafe(v: unknown): string {
  const t = String(v ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, MAX_LEN);
  return /^[=+\-@]/.test(t) ? `'${t}` : t;
}

/** Pure: allow-lists and sanitises one touch from untrusted JSON. */
export function sanitizeTouch(raw: unknown): Partial<Touch> | null {
  if (!raw || typeof raw !== "object") return null;
  const src = raw as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const k of TOUCH_FIELDS) {
    const v = sheetSafe(src[k]);
    if (v) out[k] = v;
  }
  return Object.keys(out).length ? (out as Partial<Touch>) : null;
}

/** Pure: flat columns (ft_*, lt_*, st_*) for a sheet row, plus a readable block for email. */
export function flattenAttribution(raw: unknown): { fields: Record<string, string>; text: string } {
  const src = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const groups: [string, string, Partial<Touch> | null][] = [
    ["ft", "First touch", sanitizeTouch(src.first_touch)],
    ["lt", "Last touch", sanitizeTouch(src.last_touch)],
    ["st", "This visit", sanitizeTouch(src.session_touch)],
  ];
  const fields: Record<string, string> = {};
  const lines: string[] = [];
  for (const [prefix, label, t] of groups) {
    for (const k of TOUCH_FIELDS) fields[`${prefix}_${k}`] = (t && (t as Record<string, string>)[k]) || "";
    if (!t) {
      lines.push(`${label}: (not recorded)`);
      continue;
    }
    const sm = `${t.source || "?"} / ${t.medium || "?"}`;
    const parts = [
      sm,
      t.campaign ? `campaign=${t.campaign}` : "",
      t.term ? `keyword=${t.term}` : "",
      t.content ? `content=${t.content}` : "",
      t.gclid ? `gclid=${t.gclid}` : "",
      t.gbraid ? `gbraid=${t.gbraid}` : "",
      t.wbraid ? `wbraid=${t.wbraid}` : "",
      t.msclkid ? `msclkid=${t.msclkid}` : "",
      t.referrer ? `referrer=${t.referrer}` : "referrer=(none)",
      `landing=${t.landing_page || "?"}`,
      t.at ? `at=${t.at}` : "",
    ].filter(Boolean);
    lines.push(`${label}: ${parts.join(" | ")}`);
  }
  return { fields, text: lines.join("\n") };
}
