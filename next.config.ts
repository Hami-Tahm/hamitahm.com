import type { NextConfig } from "next";

/**
 * Content Security Policy — shipped in REPORT-ONLY mode first (2026-07-19).
 *
 * WHY report-only: this site loads Google Tag Manager + GA4 and renders several
 * INLINE scripts (the GTM init snippet, JSON-LD schema, and Next.js's own hydration
 * scripts). A strict enforcing CSP that gets any source wrong would silently break
 * analytics — or worse, block hydration. `Content-Security-Policy-Report-Only`
 * never blocks anything; it only logs violations to the browser console. So this
 * is safe to deploy live, and lets us SEE what a real policy would break before we
 * enforce it.
 *
 * HOW TO ENFORCE (after watching the console on a few pages — home, a blog post,
 * and the /ai-visibility/ai-visibility-checker/ form — and confirming there are no
 * unexpected violations): change the header key below from
 * "Content-Security-Policy-Report-Only" to "Content-Security-Policy".
 *
 * `'unsafe-inline'` in script-src is deliberate and required here: Next.js injects
 * inline hydration scripts and we render inline GTM + JSON-LD. Removing it would
 * require a nonce/middleware setup. The policy still meaningfully hardens the site
 * via object-src 'none', base-uri 'self', frame-ancestors 'self', and by
 * allow-listing exactly which external origins may load scripts / receive beacons.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net",
  "frame-src 'self' https://www.googletagmanager.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // CSP in report-only — see the note above. Flip the key to enforce.
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
  // Stop the browser from MIME-sniffing a response away from its declared type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin (not the full path/query) on cross-origin navigations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Clickjacking: don't allow the site to be framed by other origins.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Turn off powerful browser features the site doesn't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS — force HTTPS for two years (site is HTTPS-only on Vercel). No `preload`
  // on purpose: that requires a separate, hard-to-reverse submission to the
  // browser preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  // Serve all URLs with trailing slash. Required so the live URL matches
  // sitemap entries AND `metadata.alternates.canonical` declarations
  // (both already use trailing slash). Without this, Next.js was redirecting
  // /foo/ → /foo while the canonical tag pointed back to /foo/, producing
  // a "Redirect error" in Google Search Console and blocking indexing of
  // /ai-visibility/ai-visibility-audit/ (the $1,500 money page).
  trailingSlash: true,

  // Force www → non-www (apex is canonical). Stops GSC from splitting
  // impressions across www and non-www duplicates of the same page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hamitahm.com" }],
        destination: "https://hamitahm.com/:path*",
        permanent: true,
      },
    ];
  },

  // Security headers on every route. See securityHeaders above; CSP is
  // report-only until verified, everything else is enforced immediately.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
