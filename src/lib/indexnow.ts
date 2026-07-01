/**
 * IndexNow client — notifies Bing, Yandex, Naver, Seznam, and Copilot
 * the moment new or changed URLs ship. Faster than waiting for crawl cycles.
 *
 * Key + key-file pattern: the key must be hosted at `https://<host>/<key>.txt`
 * with the key string as content. That file lives in `public/<key>.txt`.
 *
 * Override the default key via the INDEXNOW_KEY env var if you rotate it.
 */

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

/** All known commercial + cluster URLs — useful for a full resubmit. */
export function getAllPrimaryUrls(): string[] {
  const base = `https://${INDEXNOW_HOST}`;
  return [
    `${base}/`,
    `${base}/hami-tahm/`,
    `${base}/ai-visibility/`,
    `${base}/ai-visibility/ai-visibility-audit/`,
    `${base}/ai-visibility/ai-visibility-consultant-canada/`,
    `${base}/ai-visibility/answer-engine-optimization-consultant-canada/`,
    `${base}/ai-visibility/generative-engine-optimization-consultant-canada/`,
    `${base}/ai-visibility/ai-visibility-for-dental-clinics/`,
    `${base}/ai-visibility/ai-visibility-for-mortgage-brokers/`,
    `${base}/case-studies/homecalc-ai-visibility/`,
    `${base}/case-studies/cited-by-ai-engines/`,
    `${base}/blog/`,
    `${base}/blog/what-is-ai-visibility/`,
    `${base}/blog/what-is-answer-engine-optimization/`,
    `${base}/blog/aeo-vs-geo-vs-seo/`,
    `${base}/blog/how-to-check-ai-visibility/`,
    `${base}/blog/how-to-get-mentioned-by-chatgpt/`,
    `${base}/blog/how-to-get-cited-by-perplexity/`,
    `${base}/blog/how-to-appear-in-google-ai-overviews/`,
    `${base}/blog/best-ai-visibility-tools/`,
    `${base}/blog/ai-visibility-tools-vs-audit/`,
    `${base}/blog/peec-vs-profound-vs-airops/`,
  ];
}
