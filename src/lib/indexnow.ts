/**
 * IndexNow client: notifies Bing, Yandex, Naver, Seznam, and Copilot
 * the moment new or changed URLs ship. Faster than waiting for crawl cycles.
 *
 * Key + key-file pattern: the key must be hosted at `https://<host>/<key>.txt`
 * with the key string as content. That file lives in `public/<key>.txt`.
 *
 * Override the default key via the INDEXNOW_KEY env var if you rotate it.
 */

import sitemap from "@/app/sitemap";

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "4f8a9b2c1d3e6f7a5b8c2d1e9f6a3b7c";

export const INDEXNOW_HOST = "hamitahm.com";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export type IndexNowResult = {
  ok: boolean;
  status: number;
  statusText: string;
  submitted: number;
};

/** Submit one or more absolute URLs to IndexNow. */
export async function submitToIndexNow(
  urls: string[],
): Promise<IndexNowResult> {
  // De-dup, normalize, and keep only same-host URLs.
  const cleaned = Array.from(
    new Set(
      urls
        .map((u) => u.trim())
        .filter((u) => u.startsWith(`https://${INDEXNOW_HOST}`)),
    ),
  );

  if (cleaned.length === 0) {
    return { ok: false, status: 400, statusText: "no valid URLs", submitted: 0 };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: cleaned,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
    submitted: cleaned.length,
  };
}

/**
 * Every canonical URL on the site, derived from the sitemap, not retyped.
 *
 * ⚠️ THIS USED TO BE A HAND-WRITTEN LIST and it had silently drifted. It was
 * missing eleven live pages, including /ai-visibility/ai-visibility-consultant-toronto/,
 * /ai-visibility/ai-visibility-checker/, /ai-visibility/implementation/, /pricing/,
 * /methodology/, /research/ and three blog posts, so every "full resubmit" quietly
 * skipped them.
 *
 * Reading from the sitemap means the two can never disagree again: add a page to
 * src/app/sitemap.ts and it is automatically submitted here.
 *
 * The trailing-slash form matters. The site serves `/path/` (trailingSlash: true)
 * and redirects `/path` → `/path/`. Submitting the slash-less form would hand Bing
 * a URL that 308s, which is exactly the fragmentation this file should be fixing.
 * The sitemap already emits the correct form, which is another reason to read it.
 */
export function getAllPrimaryUrls(): string[] {
  return sitemap()
    .map((entry) => entry.url)
    .filter((url) => url.startsWith(`https://${INDEXNOW_HOST}/`));
}
