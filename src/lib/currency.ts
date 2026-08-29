import { cookies } from "next/headers";
import { OFFERS } from "@/lib/offers";

/**
 * Visitor-facing currency for the audit product, decided by src/middleware.ts
 * from IP geolocation and handed off via a cookie. Canada sees CAD (the real
 * billing currency and the site's default). Everyone else sees a real USD
 * price backed by its own Stripe Payment Link; see the note on
 * OFFERS.audit.checkoutUrlUSD for why this is a fixed price and a distinct
 * link rather than a live-converted number.
 *
 * ⚠️ THIS IS SCOPED TO THE AUDIT PRODUCT ONLY. The action plan and monitoring
 * tiers are quote/contact-based regardless of currency and are not wired
 * through this helper: do not invent a USD figure for either without first
 * creating a real priced offer for it, the same way the audit has one.
 *
 * Reading cookies() opts a page into dynamic (per-request) rendering; that's
 * an intentional, necessary trade-off for the handful of pages that call
 * this. Pages that don't need currency-aware pricing should keep reading
 * OFFERS.audit.* directly and stay statically generated.
 */
export type Currency = "CAD" | "USD";

const COOKIE_NAME = "currency";

export async function getCurrency(): Promise<Currency> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === "USD" ? "USD" : "CAD";
}

export type AuditPricing = {
  currency: Currency;
  /** e.g. "$1,500" / "$1,100": no currency word. */
  price: string;
  /** e.g. "CAD, flat fee, one-time" / "USD, flat fee, one-time". */
  priceNote: string;
  /** e.g. "$1,500 CAD" / "$1,100 USD": single string, safe to drop straight into JSX. */
  priceWithCurrency: string;
  checkoutUrl: string;
};

export async function getAuditPricing(): Promise<AuditPricing> {
  const currency = await getCurrency();

  if (currency === "USD") {
    return {
      currency,
      price: OFFERS.audit.priceUSD,
      priceNote: OFFERS.audit.priceNoteUSD,
      priceWithCurrency: `${OFFERS.audit.priceUSD} USD`,
      checkoutUrl: OFFERS.audit.checkoutUrlUSD,
    };
  }

  return {
    currency,
    price: OFFERS.audit.price,
    priceNote: OFFERS.audit.priceNote,
    priceWithCurrency: `${OFFERS.audit.price} CAD`,
    checkoutUrl: OFFERS.audit.checkoutUrl,
  };
}
