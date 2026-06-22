import type { MetadataRoute } from "next";

/**
 * Paths that should never be crawled or indexed:
 * - /_next/static/  → Next.js build artifacts (JS chunks, CSS, fonts, media).
 *                     Pure assets, not pages. Site is SSG/SSR so the rendered
 *                     HTML already contains all content — crawlers don't need
 *                     these for content understanding.
 * - /*?dpl=         → Vercel deploy-version query strings appended to static
 *                     assets. Cause duplicate-URL noise in GSC.
 * - /feed/, /*\/feed/, /comments/feed/, /category/
 *                  → WordPress legacy RSS endpoints. Site is on Next.js now,
 *                     these don't exist as real pages.
 */
const DISALLOW = [
  "/_next/static/",
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
