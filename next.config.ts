import type { NextConfig } from "next";

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
};

export default nextConfig;
