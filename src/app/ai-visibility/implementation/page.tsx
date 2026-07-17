import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { OFFERS } from "@/lib/offers";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const SLUG = "/ai-visibility/implementation/";
const CONTACT_URL = "/contact/";

export const metadata: Metadata = {
  title: {
    absolute: "AI Visibility Implementation — Done-for-You (Toronto, Canada)",
  },
  description:
    "Done-for-you AI visibility implementation. After the audit, I make the changes myself — schema, rendering, entity fixes, page rewrites — as a fixed-scope sprint. From $4,500 CAD, audit fee credited.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

const FAQ_ITEMS = [
  {
    q: "What is the Implementation Sprint?",
    a: "It is the done-for-you version of the audit. After the AI Visibility Audit identifies exactly what to change, I make those changes myself — instead of handing you a plan to execute. Fixed scope, fixed timeline, fixed price.",
  },
  {
    q: "How is this different from the audit?",
    a: "The audit is the diagnosis: where AI engines cite you, where they don't, and the prioritized list of fixes. The Implementation Sprint is the treatment: I do the fixes. Most people start with the audit; the audit fee is then credited toward the Sprint if you decide to have me implement.",
  },
  {
    q: "What does the Sprint actually include?",
    a: "The work the audit surfaced as highest-impact — typically some mix of: structured-data and schema corrections, rendering fixes (SPA→SSR/SSG where needed), entity and profile consistency, page and answer-block rewrites for extractability, internal linking, and llms.txt / crawler configuration. The exact scope is set from your audit, in writing, before we start.",
  },
  {
    q: "How much does it cost and how long does it take?",
    a: "From $4,500 CAD, fixed scope, and the $1,500 audit fee is credited toward it. Most sprints run up to 30 days. Larger or multi-site scopes are quoted from the audit. The Sprint is a one-time, fixed-scope engagement — optional monitoring and advisory is available afterward on a 6–12 month term, but it's never required.",
  },
  {
    q: "Do you guarantee I'll get cited by AI?",
    a: "No — and anyone who guarantees a specific AI result is either mistaken or selling you something. AI engines aren't under anyone's control. What I guarantee is that the changes the audit identified get implemented correctly. See the disclaimer for the honest version.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes. If you're a web or marketing agency whose clients need AI visibility work you don't do in-house, the audit and Sprint can be delivered as a white-label supplier arrangement. Email me.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Start with the audit",
    body: "Every Sprint begins from a completed AI Visibility Audit — so the work is scoped from evidence, not guesswork. If you've already had the audit, we go straight to scoping.",
  },
  {
    n: "02",
    title: "Fixed-scope proposal",
    body: "I turn the audit's priority list into a concrete statement of work: exactly what I'll change, the timeline, and the fixed price. You approve it before anything starts.",
  },
  {
    n: "03",
    title: "I implement",
    body: "I make the changes — schema, rendering, entity, content structure, crawler config — directly, or hand your developers exact, ready-to-ship specs where I can't push to your codebase.",
  },
  {
    n: "04",
    title: "Verify and hand off",
    body: "Each change is verified live. You get a short record of what changed and why, so any future team can maintain it — and you can re-run the checks yourself.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Visibility Implementation Sprint",
      serviceType: "AI visibility implementation (done-for-you)",
      areaServed: { "@type": "Country", name: "Canada" },
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: `https://hamitahm.com${SLUG}`,
      description:
        "Done-for-you implementation of AI visibility fixes identified by the AI Visibility Audit: schema, rendering, entity consistency, page rewrites and crawler configuration. Fixed scope, from $4,500 CAD.",
      offers: {
        "@type": "Offer",
        price: "4500",
        priceCurrency: "CAD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "4500",
          priceCurrency: "CAD",
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://hamitahm.com/#hami-tahm" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "AI Visibility", item: "https://hamitahm.com/ai-visibility/" },
        { "@type": "ListItem", position: 3, name: "Implementation", item: `https://hamitahm.com${SLUG}` },
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
};

export default function ImplementationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO */}
      <header style={{ padding: "72px 0 48px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <div style={eyebrow}>
              <span style={eyebrowLine} />
              AI Visibility Implementation &middot; Toronto, Canada
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              Don&rsquo;t just find out what&rsquo;s wrong.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Have me fix it.
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
              The audit tells you exactly what to change. The Implementation Sprint
              is where I make those changes myself &mdash; schema, rendering, entity
              consistency, page rewrites, crawler config &mdash; on a fixed scope,
              fixed price, and a fixed timeline. It&rsquo;s the same work I did on my
              own site to earn {HOMECALC_CLAIMS.citationsInTimeframe}.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Link href={CONTACT_URL} className="btn btn-primary">
                Talk about a Sprint <span className="arr">&rarr;</span>
              </Link>
              <Link href={OFFERS.audit.href} className="btn btn-ghost">
                Or start with the ${"1,500"} audit
              </Link>
            </div>
            <p style={{ marginTop: 16, fontFamily: "var(--mono)", fontSize: 13, color: "var(--faint)" }}>
              {OFFERS.implementation.price} CAD &middot; fixed scope &middot; audit fee credited &middot; one-time
            </p>
          </RevealSection>
        </div>
      </header>

      {/* THE LADDER */}
      <section style={{ padding: "40px 0 20px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="01" text="Where this sits" />
          </RevealSection>
          <RevealSection delay={0.08}>
            <div style={{ display: "grid", gap: 14 }}>
              <LadderRow o={OFFERS.checker} step="Step 0" />
              <LadderRow o={OFFERS.audit} step="Step 1" />
              <LadderRow o={OFFERS.implementation} step="Step 2" highlight />
              <LadderRow o={OFFERS.monitor} step="Step 3 (optional)" />
            </div>
            <p style={{ marginTop: 18, fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: "62ch" }}>
              Most people start at the checker or the audit. You only reach the Sprint
              if you want the fixes done for you &mdash; and the audit fee comes off the
              price when you do. Monitoring afterward is optional and term-limited,
              never required to get started.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* WHAT'S INCLUDED / STEPS */}
      <section style={{ padding: "56px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="02" text="How a Sprint runs" />
          </RevealSection>
          <RevealSection delay={0.08}>
            <div style={{ display: "grid", gap: 22 }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", paddingTop: 3 }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, marginBottom: 6 }}>
                      {s.title}
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, maxWidth: "58ch" }}>
                      {s.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding: "0 0 56px" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <div
              style={{
                border: "1px solid var(--line)",
                borderLeft: "2px solid var(--accent)",
                background: "var(--accent-soft)",
                borderRadius: 4,
                padding: "24px 26px",
              }}
            >
              <p style={{ color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
                I don&rsquo;t ask you to trust the method on faith. I ran this exact
                implementation work on my own product, HomeCalc.ca, and took it from
                near-zero to {HOMECALC_CLAIMS.citationsInTimeframe} &mdash;{" "}
                {HOMECALC_PROOF.sourceLong}. The{" "}
                <Link href={HOMECALC_PROOF.caseStudyPath} style={{ color: "var(--accent)" }}>
                  full case study
                </Link>{" "}
                shows what changed and what didn&rsquo;t.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 0 72px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="03" text="Questions" />
          </RevealSection>
          {FAQ_ITEMS.map(({ q, a }, i) => (
            <RevealSection key={q} delay={0.04 * i}>
              <div style={{ padding: "20px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 500, marginBottom: 8, color: "var(--ink)" }}>
                  {q}
                </div>
                <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.65 }}>{a}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <div className="cta-box">
              <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 500, position: "relative" }}>
                Ready to have it done?
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 16, position: "relative", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>
                Tell me about your site. If you haven&rsquo;t had the audit yet,
                we&rsquo;ll start there &mdash; and its fee comes off the Sprint.
              </p>
              <Link href={CONTACT_URL} className="btn btn-primary" style={{ marginTop: 34, position: "relative" }}>
                Talk about a Sprint <span className="arr">&rarr;</span>
              </Link>
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
        marginBottom: 28,
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

function LadderRow({
  o,
  step,
  highlight,
}: {
  o: { name: string; price: string; role: string };
  step: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 16,
        border: "1px solid var(--line)",
        borderLeft: highlight ? "3px solid var(--accent)" : "1px solid var(--line)",
        borderRadius: 6,
        padding: "16px 20px",
        background: highlight ? "var(--accent-soft)" : "transparent",
        flexWrap: "wrap",
      }}
    >
      <div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", color: "var(--faint)", textTransform: "uppercase" }}>
          {step}
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 500, color: "var(--ink)", marginTop: 2 }}>
          {o.name}
        </div>
        <div style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 4, maxWidth: "46ch" }}>{o.role}</div>
      </div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500, color: highlight ? "var(--accent)" : "var(--ink)", whiteSpace: "nowrap" }}>
        {o.price}
      </div>
    </div>
  );
}
