import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { OFFERS, PRICING_NOTICE } from "@/lib/offers";

const SLUG = "/pricing/";
const CONTACT_URL = "/contact/";

export const metadata: Metadata = {
  // Rendered length must stay under ~60 including the " | Hami Tahm" template.
  title: "AI Visibility Pricing & Audit Cost",
  description:
    "What AI visibility work costs in Canada: a free checker, a $1,500 flat-fee audit, an implementation sprint from $4,500, and optional monitoring. Prices published.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

/**
 * Every price on this page reads from src/lib/offers.ts. Never hardcode a number
 * here — a pricing page that disagrees with the money pages is exactly the kind of
 * contradiction an AI engine cross-checks and downgrades the whole site for.
 */
const TIERS = [
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
      "A real analyst runs the checks — not an automated score",
      "A personalized report by email within one business day",
    ],
  },
  {
    step: "Step 1",
    name: OFFERS.audit.name,
    price: OFFERS.audit.price,
    priceNote: OFFERS.audit.priceNote,
    href: OFFERS.audit.href,
    role: OFFERS.audit.role,
    ctaLabel: "Book the audit",
    highlight: true,
    includes: [
      "Written report across six AI platforms — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Bing Copilot",
      "A prioritized action plan ranked by impact and effort",
      "A 60-minute walkthrough call",
      "14 days of follow-up questions",
      "Delivered within 7 business days of payment",
    ],
  },
  {
    step: "Step 2 (optional)",
    name: OFFERS.implementation.name,
    price: OFFERS.implementation.price,
    priceNote: OFFERS.implementation.priceNote,
    href: OFFERS.implementation.href,
    role: OFFERS.implementation.role,
    ctaLabel: "See the Sprint",
    highlight: false,
    includes: [
      "Scoped in writing from your audit before anything starts",
      "Schema and structured-data corrections",
      "Rendering fixes (SPA → SSR/SSG where needed)",
      "Entity and profile consistency, page rewrites, internal linking",
      `Typically ${OFFERS.implementation.duration.toLowerCase()}`,
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
      `A fixed ${OFFERS.monitor.duration} term — never open-ended`,
    ],
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "How much does an AI visibility audit cost?",
    a: `${OFFERS.audit.price} CAD, flat. One-time payment, no retainer to get started, and it is not gated behind a sales call. That covers all six AI platforms, the written report, the prioritized action plan, a 60-minute walkthrough call, and 14 days of follow-up questions — delivered within 7 business days.`,
  },
  {
    q: "What does AI SEO or AEO work cost in Canada?",
    a: `It depends who you ask, because the category has several names — AI SEO, AEO, GEO, LLMO, AI visibility — and pricing models vary widely. Agency retainers for this work in Canada typically run $2,000–$5,000 per month, ongoing. My structure is different: a ${OFFERS.audit.price} one-time audit, then optional fixed-scope implementation from ${OFFERS.implementation.price.replace("From ", "")} CAD. You can stop after the audit.`,
  },
  {
    q: "Do you charge a monthly retainer?",
    a: `No retainer is required to get started, and most engagements never become monthly. Ongoing Monitoring & Advisory exists (${OFFERS.monitor.price} CAD) but it is optional, offered only after an implementation sprint, and runs on a fixed ${OFFERS.monitor.duration} term rather than open-ended.`,
  },
  {
    q: "Why are your prices published when most agencies hide theirs?",
    a: "Because hiding the price is a sales tactic, not a service decision. If you have to sit through a discovery call to learn whether something costs $1,500 or $15,000, the call is the product. Publishing the numbers means you can decide whether this is worth your time before you ever contact me.",
  },
  {
    q: "Is there a free option?",
    a: `Yes — the ${OFFERS.checker.name} is free and there is no card and no call. It is a genuine first read, not a teaser: a real analyst checks how the engines you pick answer for your domain and emails you a personalized report within one business day.`,
  },
  {
    q: "Do I have to buy the implementation sprint after the audit?",
    a: `No. The audit is a complete deliverable on its own — the report and action plan are yours to hand to your own team or developer. The Sprint exists for people who would rather I make the changes myself, and if you do choose it the ${OFFERS.audit.price} audit fee is credited toward the price.`,
  },
  {
    q: "Do you guarantee results for the price?",
    a: "No, and be careful with anyone who does. AI engines are not under any consultant's control, so a guaranteed citation or ranking is not a promise anyone can honestly make. What is guaranteed is the deliverable: the audit you paid for, on the timeline quoted, and — in a Sprint — the changes implemented correctly.",
  },
];

const structuredData = {
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
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
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

export default function PricingPage() {
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
              Published prices.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                No sales call to find out.
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
              Most AI visibility, AI SEO, and AEO providers quote on request. Here is
              the whole ladder instead &mdash; what each step costs, what you get, and
              where you can stop. You can go as far as the free checker and never spend
              anything.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href={OFFERS.audit.href} className="btn btn-primary">
                Book the {OFFERS.audit.price} audit <span className="arr">&rarr;</span>
              </Link>
              <Link href={OFFERS.checker.href} className="btn btn-ghost">
                Or start free
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — The ladder ── */}
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

          {/* Forward-looking price notice — see PRICING_NOTICE in lib/offers.ts for
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

      {/* ── 02 — How this compares ── */}
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
              $2,000&ndash;$5,000 per month, ongoing &mdash; which is roughly
              $24,000&ndash;$60,000 in a year, usually with an account manager between
              you and whoever does the work.
            </p>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              The diagnosis here is {OFFERS.audit.price} once. If you want the fixes
              done for you, that is a fixed scope quoted from the audit, and the audit
              fee comes off it. Monitoring afterward is optional and term-limited.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                You are never signing something open-ended.
              </b>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — FAQ ── */}
      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="03" text="Questions about price" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
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
                Not sure yet? Run the free checker first &mdash; it costs nothing and
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
                <Link href={OFFERS.audit.href} className="btn btn-primary">
                  Book the audit <span className="arr">&rarr;</span>
                </Link>
                <Link href={OFFERS.checker.href} className="btn btn-ghost">
                  Run the free checker
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
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
