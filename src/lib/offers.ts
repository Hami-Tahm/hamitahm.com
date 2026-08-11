/**
 * Single source of truth for the service ladder and pricing.
 *
 * Every page that shows a price reads from here so the numbers can never drift.
 * If a price changes, change it ONCE, here.
 *
 * The ladder (added 2026-07-14) exists because the site previously sold only the
 * $1,500 audit and explicitly told buyers "implement it yourself" — which contradicted
 * the goal of being hired to DO the implementation. The Implementation Sprint is the
 * done-for-you tier that closes that gap. IP rule still holds: the Sprint IS the
 * mechanism, so its existence is public but its method stays private.
 *
 * The `monitor` tier (added 2026-07-17) is the OPTIONAL ongoing step: monthly
 * monitoring + advisory on a fixed 6–12 month term, offered only AFTER the sprint.
 * Positioning rule: it is never required to get started, and it is term-limited (not
 * open-ended). Copy must say "no retainer to get started / optional ongoing monitoring"
 * — NOT the old absolute "no retainer, not a subscription," which now contradicts it.
 */

export const OFFERS = {
  checker: {
    name: "Free AI Visibility Checker",
    price: "Free",
    href: "/ai-visibility/ai-visibility-checker/",
    role: "The no-cost entry point.",
  },
  audit: {
    name: "AI Visibility Audit",
    price: "$1,500",
    priceNote: "CAD, flat fee, one-time",
    href: "/ai-visibility/ai-visibility-audit/",
    role: "Diagnosis: exactly where AI engines cite you, where they don't, and what to change.",
    /**
     * Live Stripe Payment Link — self-serve checkout (added 2026-07-28).
     *
     * ⚠️ The Stripe account is HOUMSE INC, so that is the descriptor on the
     * buyer's card statement, NOT "Hami Tahm". The Stripe confirmation message
     * states this explicitly; that disclosure is what prevents "I don't
     * recognise this charge" chargebacks. If the account name ever changes,
     * update the Stripe confirmation message in the same session.
     *
     * The checkout collects the buyer's website URL and their target queries as
     * required custom fields — without both, a paid order can't be started.
     */
    checkoutUrl: "https://buy.stripe.com/fZucN7fEFaYf3GAdrF00001",
  },
  implementation: {
    name: "AI Visibility Implementation Sprint",
    price: "From $4,500",
    priceNote: "CAD, fixed scope — the $1,500 audit fee is credited toward it",
    href: "/ai-visibility/implementation/",
    role: "Done-for-you: I make the changes the audit identified.",
    duration: "Up to 30 days",
  },
  monitor: {
    name: "AI Visibility Monitoring & Advisory",
    price: "From $2,500/mo",
    priceNote: "CAD, optional — a fixed 6–12 month term, only after the sprint",
    href: "/contact/",
    role: "Optional and ongoing: I track your citations, watch competitors, and keep you visible as models retrain.",
    duration: "6–12 months",
  },
} as const;

/**
 * Forward-looking price notice shown on the pricing page.
 *
 * SHAPE IS DELIBERATE — two things it is NOT, and why:
 *
 * 1. NOT "after the first N clients." A client-count trigger publicly advertises how
 *    few clients there are. A date says the same thing about urgency without
 *    disclosing the size of the practice.
 *
 * 2. NOT a struck-through or "official" price. Canada's Competition Act
 *    (ordinary-selling-price rules) prohibits advertising a regular price the business
 *    has not genuinely sold at, in order to make the current price look discounted —
 *    the tests are a volume test (>50% of sales at that price) and a time test (offered
 *    in good faith for a substantial period). Since these rates have not been sold at a
 *    higher price, ANY "was $X, now $Y" framing would fail both. A statement about a
 *    future increase is not an ordinary-selling-price claim at all, so it is clean.
 *
 * ⚠️ THE INCREASE MUST ACTUALLY HAPPEN.
 * An increase notice that quietly slips becomes exactly the false-urgency claim this
 * wording was built to avoid. When September 2026 arrives there are only two valid
 * moves: raise the prices in OFFERS above, or set `active: false` and remove the
 * notice. Do not leave it standing past the date.
 */
export const PRICING_NOTICE = {
  active: true,
  text: "Rates increase in September 2026. Engagements booked before then run at the prices shown here.",
} as const;

/**
 * The platforms every audit covers. Single source of truth.
 *
 * ⚠️ WHY THIS EXISTS. Roughly a dozen pages said "six AI platforms" while only a
 * couple actually named all six, and /blog/what-is-ai-visibility/ listed five in the
 * body while its own CTA promised six — a reader could count the gap. The count and
 * the names must come from the same place or they drift again.
 *
 * If the audit scope changes, change it HERE and nowhere else. Use
 * `AUDIT_PLATFORM_COUNT_WORD` for prose rather than typing "six".
 */
export const AUDIT_PLATFORMS = [
  "Google AI Overviews",
  "ChatGPT",
  "Gemini",
  "Claude",
  "Microsoft Copilot",
  "Perplexity",
] as const;

export const AUDIT_PLATFORM_COUNT = AUDIT_PLATFORMS.length;
export const AUDIT_PLATFORM_COUNT_WORD = "six";
