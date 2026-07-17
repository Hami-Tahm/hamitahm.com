import type { MetadataRoute } from "next";

/**
 * Paths that should never be crawled or indexed.
 *
 * NOTE (2026-07-14): `/_next/static/` was REMOVED from this list.
 * Blocking it stopped compliant crawlers from fetching the site's own CSS and JS.
 * On an SSR site the HTML content is still readable, but Google renders pages to
 * assess layout/mobile/experience, and blocking the assets it needs to render is a
 * real risk for no real benefit. The thing we actually wanted to suppress — the
 * Vercel `?dpl=` cache-busting query strings that created duplicate-URL noise in GSC
 * — is handled precisely by `/*?dpl=` below, without blocking the assets themselves.
 *
 * - /*?dpl=   → Vercel deploy-version query strings. Duplicate-URL noise in GSC.
 *
 * NOTE (2026-07-14): /category/, /feed/, /comments/feed/ were REMOVED from the block.
 * These are dead WordPress-era URLs that now return 404, but Google had them cached in
 * the index (they still showed for "Hami Tahm" searches with old longevity/Up-Diet
 * titles). Google only DROPS a URL from the index when it can re-crawl it and see the
 * 404 — and we were blocking exactly those paths in robots.txt, freezing the stale
 * snapshot in place. Unblocking them lets Googlebot re-crawl, hit the 404, and evict
 * them over the next few weeks. Same logic already applied to noindex pages: never
 * block a URL you're trying to get de-indexed.
 */
const DISALLOW = [
  "/*?dpl=",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: "GPTBot", allow: "/", disallow: DISALLOW },
      { userAgent: "PerplexityBot", allow: "/", disallow: DISALLOW },
      { userAgent: "ClaudeBot", allow: "/", disallow: DISALLOW },
      { userAgent: "Google-Extended", allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://hamitahm.com/sitemap.xml",
  };
}
