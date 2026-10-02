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
  // www.clarity.ms serves the tag; the wildcard covers the regional ingest
  // subdomains Clarity rotates through (a.clarity.ms, b.clarity.ms, ...). Without
  // both, the CSP silently drops every session — the failure mode is an empty
  // dashboard with no console error the user would ever look for.
  //
  // MICROSOFT UET: bat.bing.com AND bat.bing.net, both required.
  // bat.bing.com serves bat.js and receives the page-load and event beacons.
  // bat.bing.net receives the consent calls (/actionp). Added 2026-09-28 with only
  // the .com host, which was half the job: Microsoft's own CSP guide lists both for
  // script-src (MicrosoftDocs, hlp_BA_CONC_UETv2CSP). .net added 2026-10-02.
  //
  // GOOGLE ADS (remarketing collection, added 2026-10-02): www.googleadservices.com,
  // www.google.com, www.google.ca, pagead2.googlesyndication.com, ad.doubleclick.net.
  // The exact list from Google's CSP guide for a Conversion, Remarketing or
  // Conversion Linker tag. googleads.g.doubleclick.net is already covered by the
  // *.g.doubleclick.net wildcard. Google TLDs cannot be wildcarded in CSP, so each
  // one is listed: .com, and .ca because the audience is Canadian.
  //
  // The same trap as Clarity, and worth stating a third time because it has now
  // nearly happened twice: a tag the CSP blocks produces no console error anyone
  // goes looking for. The ads account records zero conversions, the remarketing
  // list never fills, and it looks exactly like "the channel doesn't work".
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://*.clarity.ms https://bat.bing.com https://bat.bing.net https://www.googleadservices.com https://www.google.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.clarity.ms https://bat.bing.com https://bat.bing.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.google.com https://www.google.ca https://ad.doubleclick.net",
  "frame-src 'self' https://www.googletagmanager.com",
  // Note: no `upgrade-insecure-requests` — it's ignored in a report-only policy
  // (browsers warn about it), and it's redundant once enforced because the site is
  // HTTPS-only and Strict-Transport-Security already forces HTTPS. Add it to the
  // enforced policy later only if a genuine mixed-content need appears.
].join("; ");

const securityHeaders = [
  // CSP enforced (flipped from report-only on 2026-07-26 after a clean
  // observation window — see the note above).
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
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
      /*
       * WORDPRESS-ERA URLS — added 2026-08-16 from Search Console data.
       *
       * These are not hypothetical. Over the last three months Google recorded ~126
       * impressions on URLs from the old WordPress install that now return 404:
       * /page/2/ and /page/3/ (the old blog pagination) and nine /category/* archives.
       * An impression on a 404 is a person who searched, saw the site, clicked, and
       * hit nothing.
       *
       * All of them map to the same place — the current index of written work — so
       * there is no per-slug mapping to maintain. `:slug*` also catches the ones the
       * report hasn't surfaced yet, including /category/unicorn-🦄/, which is
       * percent-encoded in the wild and would be miserable to enumerate by hand.
       */
      { source: "/page/:n", destination: "/blog/", permanent: true },
      { source: "/category/:slug*", destination: "/blog/", permanent: true },
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
