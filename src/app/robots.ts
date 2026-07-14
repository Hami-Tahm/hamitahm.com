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
 * - /feed/, /*\/feed/, /comments/feed/, /category/
 *             → WordPress legacy RSS endpoints. Site is on Next.js now; not real pages.
 */
const DISALLOW = [
  "/*?dpl=",
  "/feed/",
  "/*/feed/",
  "/comments/feed/",
  "/category/",
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
