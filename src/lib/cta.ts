/**
 * CIT-05 (2026-11-13): stable IDs for contextual CTAs.
 *
 * Every tracked CTA gets   data-gtm="cta-{page}-{destination}-{position}"
 * plus                     data-cta-position="{position}"
 * and src/components/CtaTracker.tsx pushes ONE `cta_click` event to the
 * dataLayer when it is clicked.
 *
 * Rules:
 *   - Contextual CTAs only. Header nav and footer links are NOT tagged.
 *   - An ID must be unique on its page. If you add a second CTA with the same
 *     page + destination + position, give it a new position ("final-2").
 *   - cta_click is a SECONDARY engagement event. It is not a lead, not a GA4
 *     key event and not a Google Ads conversion. Leads stay qualified_lead_submit
 *     and the checker's "Free check request".
 *   - Never put user input, emails or query strings in an ID.
 */
export type CtaDestination =
  | "checker"
  | "audit"
  | "sample-report"
  | "methodology"
  | "agencies"
  | "contact";

export type CtaProps = {
  "data-gtm": string;
  "data-cta-position": string;
};

export function cta(page: string, destination: CtaDestination, position: string): CtaProps {
  return {
    "data-gtm": `cta-${page}-${destination}-${position}`,
    "data-cta-position": position,
  };
}

/** Map an internal href to its CTA destination key, for lists rendered from data. */
export function ctaDestinationFor(href: string): CtaDestination | null {
  if (href.startsWith("/ai-visibility/ai-visibility-checker")) return "checker";
  if (href.startsWith("/ai-visibility/ai-visibility-audit")) return "audit";
  if (href.startsWith("/ai-visibility/sample-report")) return "sample-report";
  if (href.startsWith("/methodology")) return "methodology";
  if (href.startsWith("/for-agencies")) return "agencies";
  if (href.startsWith("/contact") || href.startsWith("mailto:")) return "contact";
  return null;
}
