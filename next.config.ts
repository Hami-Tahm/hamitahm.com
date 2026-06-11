import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force www → non-www permanent (301) redirect.
  // Canonical host is `hamitahm.com` — every page's canonical URL points there.
  // Vercel's domain panel should also redirect at the edge; this is the
  // code-level safety net in case the edge config drifts.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.hamitahm.com",
          },
        ],
        destination: "https://hamitahm.com/:path*",
        permanent: true, // emits 308 (permanent), preserves SEO juice
      },
    ];
  },
};

export default nextConfig;
