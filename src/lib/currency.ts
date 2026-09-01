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
 *
 * ⚠️ DISPLAY NEVER SHOWS THE CURRENCY CODE, decided 2026-09-01. Every number
 * on the site reads as a bare "$1,500", never "$1,500 CAD" or "$1,500 USD".
 * A Canadian reads "$" as CAD and an American reads the same "$" as USD, so
 * the bare symbol is correct for both without printing a code most visitors
 * don't need. The actual currency split still happens for real at checkout:
 * this helper still routes a Canadian to the CAD Stripe link and everyone
 * else to the USD one (see checkoutUrl/checkoutUrlUSD in offers.ts). Only
 * the on-page label changed, not the billing logic. Do not re-add " CAD" /
 * " USD" to `price`, `priceNote`, or `priceWithCurrency` below.
 */
export type Currency = "CAD" | "USD";

const COOKIE_NAME = "currency";

export async function getCurrency(): Promise<Currency> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === "USD" ? "USD" : "CAD";
}

export type AuditPricing = {
  currency: Currency;
  /** e.g. "$1,500" / "$1,500": bare symbol, never a currency code. */
  price: string;
  /** e.g. "Flat fee, one-time": no currency word. */
  priceNote: string;
  /**
   * Kept as its own field for call-site compatibility (many pages already
   * read `priceWithCurrency` expecting one JSX-safe node per the PRICE
   * DISPLAY RULE in offers.ts). As of 2026-09-01 this is identical to
   * `price`: no code is appended for either currency.
   */
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
      priceWithCurrency: OFFERS.audit.priceUSD,
      checkoutUrl: OFFERS.audit.checkoutUrlUSD,
    };
  }

  return {
    currency,
    price: OFFERS.audit.price,
    priceNote: OFFERS.audit.priceNote,
    priceWithCurrency: OFFERS.audit.price,
    checkoutUrl: OFFERS.audit.checkoutUrl,
  };
}
