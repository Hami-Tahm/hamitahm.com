import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { OFFERS } from "@/lib/offers";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";
import { getAuditPricing } from "@/lib/currency";

/*
 * ⚠️ THIS PAGE SOLD DONE-FOR-YOU WORK UNTIL 2026-08-16. IT NO LONGER DOES.
 *
 * It used to be the "Implementation Sprint": "I make the changes myself." That
 * tier no longer exists. Hami does not take execution work: it carries unbounded
 * scope, ties revenue to his own hours, and is the single thing that stops this
 * practice from serving ten clients a month. See the note in lib/offers.ts.
 *
 * The product is now the plan itself: recommendations, a prioritized action list
 * and a roadmap, written so the developer who already maintains the site can ship
 * it without asking a question. Anyone with a website already has that person.
 *
 * ⚠️ THE URL DELIBERATELY STILL SAYS /implementation/. It has inbound links and
 * crawl history; renaming the slug would trade a real asset for a tidier one. The
 * word is also not wrong; it is the client's implementation, specified here.
 *
 * ⚠️ NEVER reintroduce "done-for-you", "I implement", "I make the changes" or
 * "have me do it for you" on this page. Someone paying $4,500 on that wording is
 * entitled to execution, and they will not get it.
 */
const SLUG = "/ai-visibility/implementation/";
const CONTACT_URL = "/contact/";

export const metadata: Metadata = {
  title: {
    absolute: "AI Visibility Action Plan: Recommendations & Roadmap | Toronto",
  },
  description:
    "After the audit: prioritized recommendations, a page-level action plan and a roadmap your team can ship, grounded in your own Search Console and Bing data. From $4,500 CAD.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

function buildFaqItems(priceDisplay: string) {
  return [
  {
    q: "What is the AI Visibility Action Plan?",
    a: "It is the step after the audit. The audit tells you where AI engines cite you and where they don't; the Action Plan tells you what to change about it: page by page, in priority order, with the reasoning and the acceptance criteria written down. It is built so the developer or agency who already maintains your site can ship it without coming back to me with questions.",
  },
  {
    q: "Do you make the changes yourself?",
    a: "No, and that is deliberate rather than a limitation. I don't take execution work. Anyone who has a website already has someone who edits it, and that person will always be faster inside your codebase and your deploy process than an outside consultant would be. What is usually missing is not hands: it is knowing exactly what to change and in what order. That is what you are buying here.",
  },
  {
    q: "How is this different from the audit?",
    a: "The audit is the diagnosis: thirty prompts across six AI platforms, where you appear, where competitors appear instead, and the content gaps between you. The Action Plan is the prescription: the specific changes, ordered by expected impact, written as work your team can pick up. Most people start with the audit, and its fee is credited toward the plan.",
  },
  {
    q: "What does the Action Plan include?",
    a: "Prioritized recommendations tied to the audit's findings; page-level specifics rather than general advice; a roadmap that sequences the work over the coming weeks; and a walkthrough call with whoever will be doing the work. Typical areas: content structure and answer blocks, entity and profile consistency, structured data, rendering, internal linking and crawler configuration. Exact scope is set from your audit, in writing, before we start.",
  },
  {
    q: "Why do you need Search Console and Bing Webmaster Tools access?",
    a: "So the plan is prioritized on your real data instead of my assumptions. Read-only access shows which queries already bring you impressions, which pages Google and Bing actually consider relevant, and where you are close enough to move. Without it I would be ordering the work by guesswork. If you don't have these set up, I'll send you documentation so your team can create them; read-only access is enough.",
  },
  {
    q: "How much does it cost and how long does it take?",
    a: `From $4,500 CAD, fixed scope, and the ${priceDisplay} audit fee is credited toward it. Most run up to 30 days. Larger or multi-language scopes are quoted from the audit. It is a one-time, fixed-scope engagement; optional monitoring and advisory is available afterward, but it's never required.`,
  },
  {
    q: "Do you guarantee I'll get cited by AI?",
    a: "No, and anyone who guarantees a specific AI result is either mistaken or selling you something. AI engines aren't under anyone's control, and I don't control your deployment either. What I commit to is that the plan is specific enough to act on and grounded in what the audit actually measured. See the disclaimer for the honest version.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes, and it's the arrangement this fits best. If you're a web or marketing agency, your team already has the implementers: what you may not have in-house is the AI visibility measurement and the plan. The audit and Action Plan can be delivered as a white-label supplier arrangement. Email me.",
  },
  ] as const;
}

const STEPS = [
  {
    n: "01",
    title: "Start with the audit",
    body: "Every plan is built from a completed AI Visibility Audit, so the work is ordered from evidence rather than opinion. If you've already had the audit, we go straight to scoping.",
  },
  {
    n: "02",
    title: "Your own data comes in",
    body: "I take read-only access to your Search Console and Bing Webmaster Tools, and send documentation for your team to create them if they don't exist yet. This is what lets the plan be prioritized on the queries and pages you already have traction on, instead of on assumptions.",
  },
  {
    n: "03",
    title: "The plan is written",
    body: "Prioritized recommendations, page by page, each with what to change, why it matters for AI citation, and how to tell it worked. Written to be handed to a developer, not to be interpreted.",
  },
  {
    n: "04",
    title: "Roadmap and walkthrough",
    body: "The work sequenced over the coming weeks, plus a call with whoever is going to do it, so the people implementing hear the reasoning directly rather than reading it second-hand.",
  },
];

function buildStructuredData(faqItems: ReturnType<typeof buildFaqItems>) {
  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Visibility Action Plan",
      serviceType: "AI visibility recommendations, action plan and roadmap",
      areaServed: { "@type": "Country", name: "Canada" },
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: `https://hamitahm.com${SLUG}`,
      description:
        "Prioritized recommendations, a page-level action plan and a roadmap based on the AI Visibility Audit and on the client's own Search Console and Bing Webmaster Tools data. Built for the client's own team to implement. Fixed scope, from $4,500 CAD.",
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
        { "@type": "ListItem", position: 3, name: "Action Plan", item: `https://hamitahm.com${SLUG}` },
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
  };
}

export default async function ImplementationPage() {
  const { priceWithCurrency } = await getAuditPricing();
  const FAQ_ITEMS = buildFaqItems(priceWithCurrency);
  const structuredData = buildStructuredData(FAQ_ITEMS);

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
              AI Visibility Action Plan &middot; Toronto, Canada
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
              Knowing what&rsquo;s wrong is half of it.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                This is the other half.
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
              The audit measures where you stand. This is where that becomes a list
              your team can actually ship: content structure, entity
              consistency,{" "}
              <Link href="/blog/spa-to-ssg-ai-visibility/" style={{ color: "var(--accent)", fontWeight: 500 }}>
                rendering
              </Link>
              , structured data, crawler config, page by page, in priority
              order, and prioritized against your own Search Console and Bing data
              rather than my assumptions. It&rsquo;s the same sequence I ran on my own
              site to earn {HOMECALC_CLAIMS.appearancesInTimeframe}.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Link href={CONTACT_URL} className="btn btn-primary">
                Talk about your plan <span className="arr">&rarr;</span>
              </Link>
              <Link href={OFFERS.audit.href} className="btn btn-ghost">
                Or start with the {priceWithCurrency} audit
              </Link>
            </div>
            <p style={{ marginTop: 16, fontFamily: "var(--mono)", fontSize: 13, color: "var(--faint)" }}>
              {OFFERS.actionPlan.priceWithCurrency}{" "}&middot; fixed scope &middot; audit fee credited &middot; one-time
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
              <LadderRow o={{ ...OFFERS.audit, price: priceWithCurrency }} step="Step 1" />
              <LadderRow o={OFFERS.actionPlan} step="Step 2" highlight />
              <LadderRow o={OFFERS.monitor} step="Step 3 (optional)" />
            </div>
            <p style={{ marginTop: 18, fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: "62ch" }}>
              Most people start at the checker or the audit. You reach step 2 when you
              want the findings turned into work your team can pick up, and the
              audit fee comes off the price when you do. Monitoring afterward is
              optional and term-limited, never required to get started.{" "}
              <Link href="/pricing/" style={{ color: "var(--accent)", fontWeight: 500 }}>
                See full pricing &rarr;
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* WHAT'S INCLUDED / STEPS */}
      <section style={{ padding: "56px 0" }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <RevealSection>
            <SectionLabel number="02" text="How it runs" />
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
                sequence on my own product, HomeCalc.ca (where I was also the one
                implementing it), and took it from near-zero to{" "}
                {HOMECALC_CLAIMS.appearancesInTimeframe}:{" "}
                {HOMECALC_PROOF.combinedSourceLong}. The{" "}
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
                Ready to know what to change?
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 16, position: "relative", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>
                Tell me about your site. If you haven&rsquo;t had the audit yet,
                we&rsquo;ll start there, and its fee comes off this.
              </p>
              <Link href={CONTACT_URL} className="btn btn-primary" style={{ marginTop: 34, position: "relative" }}>
                Talk about your plan <span className="arr">&rarr;</span>
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
      {number}: {text}
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
