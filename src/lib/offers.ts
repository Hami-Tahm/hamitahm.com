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
