import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import {
  OFFERS,
  PRICING_NOTICE,
  AUDIT_PRICE_DISPLAY,
  ACTION_PLAN_PRICE_DISPLAY,
  BOOKING_URL,
  AUDIT_CTA_LABEL,
} from "@/lib/offers";

const SLUG = "/pricing/";
const CONTACT_URL = BOOKING_URL;

export const metadata: Metadata = {
  // Rendered length must stay under ~60 including the " | Hami Tahm" template.
  title: "AI Visibility Pricing & Audit Cost",
  description:
    "What AI visibility work costs: a free checker, an audit, and an action plan and roadmap, each scoped to your business and confirmed on a short, free call. Optional monitoring is quoted to scope.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

/**
 * Every price on this page reads from src/lib/offers.ts. As of 2026-09-08,
 * pricing is call-gated: the audit and action plan tiers show the display
 * constants (AUDIT_PRICE_DISPLAY / ACTION_PLAN_PRICE_DISPLAY), not a dollar
 * figure. Never hardcode a number here: a pricing page that disagrees with
 * the money pages is exactly the kind of contradiction an AI engine
 * cross-checks and downgrades the whole site for.
 */
function buildTiers() {
  return [
  {
    step: "Step 0",
    name: OFFERS.checker.name,
    price: OFFERS.checker.price,
    priceNote: "No cost, no credit card, no sales call",
    href: OFFERS.checker.href,
    role: OFFERS.checker.role,
    ctaLabel: "Run the free checker",
    highlight: false,
    includes: [
      "You choose the engines and up to three keywords",
      "A real analyst runs the checks, not an automated score",
      "A personalized report by email within one business day",
    ],
  },
  {
    step: "Step 1",
    name: OFFERS.audit.name,
    price: AUDIT_PRICE_DISPLAY,
    priceNote: "Confirmed once we've talked, not before",
    href: OFFERS.audit.href,
    role: OFFERS.audit.role,
    ctaLabel: AUDIT_CTA_LABEL,
    highlight: true,
    includes: [
      "Written report across six AI platforms: Google AI Overviews, ChatGPT, Gemini, Claude, Bing Copilot, Perplexity",
      "A prioritized action plan ranked by impact and effort",
      "A 60-minute walkthrough call",
      "14 days of follow-up questions",
      "Delivered within 7 business days of booking",
    ],
  },
  {
    step: "Step 2 (optional)",
    name: OFFERS.actionPlan.name,
    price: ACTION_PLAN_PRICE_DISPLAY,
    priceNote: "Fixed scope: your audit fee is credited toward it",
    href: OFFERS.actionPlan.href,
    role: OFFERS.actionPlan.role,
    ctaLabel: "See the Action Plan",
    highlight: false,
    includes: [
      "Scoped in writing from your audit before anything starts",
      "Prioritized against your own Search Console and Bing Webmaster data",
      "Page-level recommendations: content structure, entities, structured data, rendering",
      "A roadmap sequencing the work, plus a walkthrough call with whoever will ship it",
      `Typically ${OFFERS.actionPlan.duration.toLowerCase()}`,
      "Final price scales with your traffic volume, industry, and site size",
    ],
  },
  {
    step: "Step 3 (optional)",
    name: OFFERS.monitor.name,
    price: OFFERS.monitor.price,
    priceNote: OFFERS.monitor.priceNote,
    href: OFFERS.monitor.href,
    role: OFFERS.monitor.role,
    ctaLabel: "Talk about monitoring",
    highlight: false,
    includes: [
      "Ongoing citation tracking across the engines that matter to you",
      "Competitor movement, so you see when someone displaces you",
      "Adjustments as models retrain and answers shift",
      `A fixed ${OFFERS.monitor.duration} term, never open-ended`,
    ],
  },
  ] as const;
}

function buildFaqItems() {
  return [
  {
    q: "How much does an AI visibility audit cost?",
    a: "It depends on your company's size and scope, so there's no single number to publish. Pricing is confirmed on a short, free, no-obligation call: we scope your needs first so the price is right for your business, not to pressure you into anything. If you're not ready for a call, the free AI Visibility Checker is the best first step and costs nothing.",
  },
  {
    q: "What does AI SEO or AEO work cost in Canada?",
    a: "It depends who you ask, because the category has several names (AI SEO, AEO, GEO, LLMO, AI visibility) and pricing models vary widely. Agency retainers for this work in Canada typically run $2,000–$5,000 per month, ongoing. My structure is different: a one-time audit, then an optional fixed-scope action plan, both scoped to your business and confirmed on a call rather than a flat rate that ignores your traffic volume, industry, and site size. You can stop after the audit.",
  },
  {
    q: "Do you charge a monthly retainer?",
    a: `No retainer is required to get started, and most engagements never become monthly. Ongoing Monitoring & Advisory exists but it is optional, offered only after the action plan, and runs on a fixed ${OFFERS.monitor.duration} term rather than open-ended. It is quoted once your scope is known, the same way the audit and action plan now are.`,
  },
  {
    q: "Why don't you publish exact prices?",
    a: "Because the honest answer depends on your company's size and scope, and a single published number would either overcharge a small business or undercharge a large one. A short, free call lets us confirm the real scope first, so the price you're quoted is the right one, not a starting point for negotiation. Nothing here is gated to waste your time: the free checker has no call and no card, and every paid step is quoted quickly once we've talked.",
  },
  {
    q: "Is there a free option?",
    a: `Yes, the ${OFFERS.checker.name} is free and there is no card and no call. It is a genuine first read, not a teaser: a real analyst checks how the engines you pick answer for your domain and emails you a personalized report within one business day.`,
  },
  {
    q: "Do I have to buy the action plan after the audit?",
    a: "No. The audit is a complete deliverable on its own: the report and action plan are yours to hand to your own team or developer. The Action Plan exists for people who want the findings turned into page-level work their team can pick up without interpreting it, and if you choose it your audit fee is credited toward the price.",
  },
  {
    q: "Do you guarantee results for the price?",
    a: "No, and be careful with anyone who does. AI engines are not under any consultant's control, so a guaranteed citation or ranking is not a promise anyone can honestly make. What is guaranteed is the deliverable: the audit you booked, on the timeline quoted, and (in the Action Plan) recommendations specific enough for your team to act on without interpreting them.",
  },
  ];
}

function buildStructuredData(faqItems: ReturnType<typeof buildFaqItems>) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://hamitahm.com${SLUG}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
          { "@type": "ListItem", position: 2, name: "Pricing", item: `https://hamitahm.com${SLUG}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
    // NOTE: deliberately no Offer/Service nodes here. Each service already declares its
    // own Offer on its own page (audit, implementation). Re-declaring them on a pricing
    // index would create two competing declarations of the same offer.
  };
}

export default function PricingPage() {
  const TIERS = buildTiers();
  const FAQ_ITEMS = buildFaqItems();
  const structuredData = buildStructuredData(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ── */}
      <header style={{ padding: "72px 0 44px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <div style={eyebrow}>
              <span style={eyebrowLine} />
              Pricing &middot; Toronto, Canada
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              Straightforward pricing,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                tailored to you.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 26,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
              }}
            >
              Here is the whole ladder: what each step gets you, and where you
              can stop. Price depends on your company's size and scope, so the
              audit and action plan are confirmed on a short, free call rather
              than guessed at here. That's so we scope your needs first and
              the price is right for you, not to pressure you into anything.
              You can go as far as the free checker and never spend anything.
            </p>
          </RevealSection>
        </div>
      </header>

      {/* Section 01: The ladder */}
      <section style={{ padding: "40px 0 20px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="01" text="What each step costs" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 28,
              }}
            >
              Four steps. You choose where to stop.
            </h2>
          </RevealSection>

          <div style={{ display: "grid", gap: 18 }}>
            {TIERS.map((t, i) => (
              <RevealSection key={t.name} delay={0.04 * i}>
                <div
                  style={{
                    border: "1px solid var(--line)",
                    borderLeft: t.highlight
                      ? "3px solid var(--accent)"
                      : "1px solid var(--line)",
                    background: t.highlight ? "var(--accent-soft)" : "var(--panel)",
                    borderRadius: 10,
                    padding: "24px 26px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "var(--faint)",
                        }}
                      >
                        {t.step}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 22,
                          fontWeight: 500,
                          color: "var(--ink)",
                          marginTop: 4,
                        }}
                      >
                        {t.name}
                      </h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 26,
                          fontWeight: 500,
                          color: t.highlight ? "var(--accent)" : "var(--ink)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.price}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.6,
                    }}
                  >
                    {t.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--faint)",
                      marginTop: 8,
                    }}
                  >
                    {t.priceNote}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "18px 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {t.includes.map((item) => (
                      <li
                        key={item}
                        style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontFamily: "var(--mono)",
                            fontSize: 13,
                            flexShrink: 0,
                          }}
                        >
                          &rarr;
                        </span>
                        <span
                          style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.55 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={t.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 18,
                      fontFamily: "var(--sans)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    {t.ctaLabel} <span>&rarr;</span>
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Forward-looking price notice: see PRICING_NOTICE in lib/offers.ts for
              why this is date-based and carries no struck-through "regular" price. */}
          {PRICING_NOTICE.active && (
            <RevealSection delay={0.08}>
              <p
                style={{
                  marginTop: 22,
                  padding: "14px 18px",
                  border: "1px solid var(--line)",
                  borderLeft: "2px solid var(--accent)",
                  borderRadius: 4,
                  fontFamily: "var(--sans)",
                  fontSize: 14.5,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {PRICING_NOTICE.text}
              </p>
            </RevealSection>
          )}
        </div>
      </section>

      {/* Section 02: How this compares */}
      <section style={{ padding: "56px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="How this compares" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              Why one number instead of a monthly one.
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Agency retainers for AI visibility work in Canada typically run
              $2,000&ndash;$5,000 per month, ongoing, roughly
              $24,000&ndash;$60,000 in a year, usually with an account manager
              between you and whoever does the work. Here is how the structure
              on this page differs:
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "22px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                <>
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                    One scoped fee
                  </b>{" "}
                  for the diagnosis, not a monthly fee.
                </>,
                <>
                  Want it turned into a plan your team can ship? That is a{" "}
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                    fixed scope quoted from the audit
                  </b>
                  , and the audit fee comes off the price.
                </>,
                <>
                  Monitoring afterward is optional and{" "}
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                    term-limited
                  </b>
                  .
                </>,
                <>
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                    You are never signing something open-ended.
                  </b>
                </>,
              ].map((content, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(16px, 1.9vw, 18px)",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {content}
                  </span>
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* Section 03: FAQ */}
      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="03" text="Questions about price" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {/* Native <details>/<summary>, not a JS accordion library: the
                answer text stays physically in the DOM at all times, so the
                FAQPage schema below (built from this same FAQ_ITEMS array)
                never diverges from what's rendered. See
                /blog/faq-schema-accordion-bug/ for why every other FAQ on
                this site renders fully expanded instead of collapsible;
                this is the one place a visual dropdown was requested, built
                the DOM-safe way. */}
            <div>
              {FAQ_ITEMS.map(({ q, a }) => (
                <details className="pricing-faq" key={q}>
                  <summary className="pricing-faq-q">{q}</summary>
                  <p className="pricing-faq-a">{a}</p>
                </details>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <div className="final-cta">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                Start where it makes sense.
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Not sure yet? Run the free checker first: it costs nothing and
                tells you whether this is even a problem for you.
              </p>
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <Link href={OFFERS.checker.href} className="btn btn-primary">
                  Get free AI visibility check <span className="arr">&rarr;</span>
                </Link>
                <Link href={BOOKING_URL} className="btn btn-ghost">
                  Book a call
                </Link>
              </div>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                Questions first?{" "}
                <Link href={CONTACT_URL} style={{ color: "var(--ink)" }}>
                  Email me
                </Link>
                .
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  letterSpacing: ".18em",
  color: "var(--accent)",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: 12,
};
const eyebrowLine: React.CSSProperties = {
  width: 34,
  height: 1,
  background: "var(--accent)",
  display: "inline-block",
};

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
