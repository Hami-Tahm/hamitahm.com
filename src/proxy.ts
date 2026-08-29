import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Crawlers and AI answer-engine fetchers, matched against User-Agent. These
 * ALWAYS get CAD, regardless of the IP they crawl from.
 *
 * WHY THIS MATTERS MORE HERE THAN ON A TYPICAL SITE: Googlebot and most AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot...) predominantly
 * crawl from US data centers. Without this exemption, this site's own
 * metadata (title/description, hardcoded CAD, unaffected by this cookie)
 * would disagree with the visible page price and the FAQPage/Service JSON-LD
 * on the same URL: the exact kind of cross-signal contradiction this
 * consultancy's own content (see offers.ts, blog-schema.ts) warns AI engines
 * downgrade a whole domain for. One canonical price for every crawler keeps
 * the indexed/cited version of this page internally consistent; only real
 * human visitors, identified by IP, see the localized price.
 */
const BOT_USER_AGENT = /bot|crawler|spider|slurp|googlebot|bingbot|gptbot|chatgpt-user|oai-searchbot|ccbot|claudebot|anthropic|perplexitybot|applebot|yandexbot|duckduckbot|baiduspider|semrushbot|ahrefsbot|mj12bot|facebookexternalhit|twitterbot|linkedinbot/i;

/**
 * Geo-based currency cookie.
 *
 * NOTE: this file is named proxy.ts, not middleware.ts. Next.js 16 renamed
 * the convention (middleware.ts still works but is deprecated and warns on
 * every build). Same NextRequest/NextResponse API, same matcher config,
 * function just needs to be named/exported as `proxy` instead of
 * `middleware`. See node_modules/next/dist/docs/.../file-conventions/proxy.md
 * if this needs revisiting after a future Next.js upgrade.
 *
 * WHY THIS EXISTS: the audit's real billing currency is CAD. Visitors browsing
 * from outside Canada see a real USD price backed by an actual USD Stripe
 * Payment Link (see src/lib/offers.ts, checkoutUrlUSD), not a cosmetic
 * relabeling of the CAD charge. The displayed price and the price Stripe
 * actually charges must always match: that's the whole point of having a
 * second real Payment Link instead of just converting a number on the page.
 *
 * DETECTION: Vercel injects `x-vercel-ip-country` on every request in
 * production, no package needed. `cf-ipcountry` is checked as a fallback in
 * case the domain is ever proxied through Cloudflare in front of Vercel.
 * Locally (or if neither header is present), country is empty and we default
 * to CAD; USD is only set when we can positively confirm the visitor is
 * outside Canada, never on an unknown/undetectable request.
 *
 * The cookie is set on BOTH the outgoing request (so Server Components can
 * read it via cookies() in this same request, on a visitor's very first hit)
 * and the response (so the browser carries it on the next navigation).
 */
export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isBot = BOT_USER_AGENT.test(userAgent);

  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "";

  const currency = !isBot && country && country !== "CA" ? "USD" : "CAD";

  request.cookies.set("currency", currency);

  const response = NextResponse.next({ request });
  response.cookies.set("currency", currency, {
    path: "/",
    // Re-derived from the live IP on every visit anyway; this just avoids
    // re-computing it for repeat page views within the same short session.
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  // Skip static assets: geo pricing only matters for actual pages.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
