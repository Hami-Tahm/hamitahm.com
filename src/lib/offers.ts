/**
 * Single source of truth for the service ladder and pricing.
 *
 * Every page that shows a price reads from here so the numbers can never drift.
 * If a price changes, change it ONCE, here.
 *
 * ⚠️ THE LADDER CHANGED ON 2026-08-16. READ THIS BEFORE RE-ADDING ANYTHING.
 *
 * From 2026-07-14 to 2026-08-16 the second tier was an "Implementation Sprint",
 * sold as done-for-you: "I make the changes the audit identified." That tier is
 * GONE, and it is not coming back. Hami does not take execution work — not as a
 * pricing decision but as a business one. Execution carries unbounded scope, makes
 * revenue a function of his own hours, and is the thing that stops this practice
 * from serving ten clients a month instead of two.
 *
 * It is also unnecessary. Anyone who has a website already has someone who edits
 * it. The product is therefore not "I will change your site" but "here is a
 * change list your developer can ship without asking a single question."
 *
 * ⚠️ SO: NEVER let copy anywhere say done-for-you, "I implement", "I make the
 * changes", or "have me do it for you". That is a promise the practice will not
 * keep, and a client who pays $4,500 expecting execution is entitled to it.
 *
 * The `monitor` tier (added 2026-07-17) is the OPTIONAL ongoing step: monthly
 * monitoring + advisory on a fixed 6–12 month term, offered only AFTER the plan.
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
     * What the audit covers, in the buyer's words. Kept here so the pages can't drift
     * from each other the way the platform count once did.
     *
     * ⚠️ THE PROMPT COUNT IS PUBLISHABLE, THE METHOD IS NOT. "30 prompts" is scope —
     * it tells a buyer what they are getting. How those 30 are chosen, and how many
     * times each is re-run to separate a real pattern from model variance, is the
     * mechanism and stays private. Same rule as citation-study.ts: publish the
     * outcome, never the mechanism.
     */
    scope: {
      promptCount: 30,
      promptCountWord: "thirty",
      contentGap: true,
    },
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
  /*
   * Renamed from `implementation` on 2026-08-16 — the key too, deliberately. A key
   * called `implementation` on a product that contains no implementation is exactly
   * the drift the rest of this file exists to prevent, and TypeScript catches every
   * missed reference at build time, so the rename is cheap.
   *
   * The URL stays /ai-visibility/implementation/ on purpose. It has inbound links and
   * crawl history, and changing it would trade a real asset for a tidier slug.
   */
  actionPlan: {
    name: "AI Visibility Action Plan",
    price: "From $4,500",
    /** Use this in prose. See PRICE DISPLAY RULE below. */
    priceWithCurrency: "From $4,500 CAD",
    priceNote: "CAD, fixed scope — the $1,500 audit fee is credited toward it",
    href: "/ai-visibility/implementation/",
    role: "Recommendations, a prioritized action plan and a roadmap — built for your team to ship.",
    duration: "Up to 30 days",
  },
  /*
   * ⚠️ MONITORING IS DELIBERATELY UNPRICED — changed 2026-08-16. Do not "fix" this
   * by putting a number back without being asked.
   *
   * It used to publish "From $2,500/mo". That number was wrong for this ladder and
   * was quietly costing conversions: a buyer whose whole engagement is $1,500 plus
   * $4,500 reads $2,500/month as a different product for a different company, and
   * stops reading. It is also the one tier whose real cost genuinely varies with the
   * number of engines, prompts and competitors tracked, so a single "From" figure
   * was never going to be honest across cases.
   *
   * Every OTHER price on this site stays published — that is a deliberate position
   * and this is the single exception, not a softening of it. The audit and the
   * action plan are the things a stranger needs to price without talking to anyone.
   * Monitoring only ever gets discussed with someone who has already worked with us
   * and whose scope is therefore known.
   */
  monitor: {
    name: "AI Visibility Monitoring & Advisory",
    price: "Contact us",
    /** Kept for API symmetry with the other tiers — no currency to append. */
    priceWithCurrency: "Contact us",
    priceNote: "Optional — a fixed 6–12 month term, only after the action plan",
    href: "/contact/",
    role: "Optional and ongoing: I track your citations, watch competitors, and keep you visible as models retrain.",
    duration: "6–12 months",
    /** Use this in prose instead of `${duration} term` — see the rule below. */
    durationPhrase: "a fixed 6–12 month term",
  },
} as const;

/**
 * ── PRICE DISPLAY RULE — read before writing `{OFFERS.x.price} CAD` ──
 *
 * On the live hub page these rendered with the space missing:
 *
 *     From $4,500CAD, fixed scope
 *     From $2,500/moCAD · optional
 *     on a fixed 6–12 monthsterm
 *
 * The JSX source looked correct — `{OFFERS.implementation.price} CAD` with a space.
 * The cause is that an expression and the text beside it are two ADJACENT TEXT NODES,
 * and the separating space survives or dies depending on how the boundary between
 * them is serialised and re-read downstream. A price is the last thing on the site
 * that should depend on that.
 *
 * So: never concatenate a unit onto a price across a JSX expression boundary.
 * Render ONE node — `{OFFERS.implementation.priceWithCurrency}` — and keep the unit
 * inside the constant, where it also stays consistent site-wide.
 *
 * Same reasoning for `durationPhrase`. `{OFFERS.monitor.duration} term` is the same
 * shape of bug.
 */

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
