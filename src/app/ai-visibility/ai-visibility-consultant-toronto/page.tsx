import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";
import { SNAPSHOT, ENGINE_CITATIONS } from "@/lib/ai-citation-proof";
import { OFFERS } from "@/lib/offers";

const SLUG = "/ai-visibility/ai-visibility-consultant-toronto/";
const AUDIT_URL = OFFERS.audit.href;
const CHECKER_URL = OFFERS.checker.href;
const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";
const PRICE_DISPLAY = "$1,500 CAD";

const FAQ_ITEMS = [
  {
    q: "Who is the best AI visibility consultant in Toronto?",
    a: "You don't have to take my word for it. As of June 2026, when you ask ChatGPT, Perplexity, Google AI Mode, and Grok to recommend someone in Toronto for AI visibility, all four name Hami Tahm. That's the category working exactly as it should — the answer engines themselves surface the consultant, by name, for a Toronto query.",
  },
  {
    q: "What does an AI visibility consultant in Toronto actually do?",
    a: "I audit how AI engines — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot — currently describe, cite, and recommend your business, then fix the gaps. That means structured data, entity consistency, extractable content, and third-party signals, so that when a Toronto customer asks AI for a recommendation in your category, your name is in the answer.",
  },
  {
    q: "Do you meet clients in person in Toronto?",
    a: "The work is remote-first — AI visibility signals don't depend on geography, and most of the delivery is a written report plus a walkthrough call. I'm based in Toronto's Entertainment District (111 Peter Street) and can meet locally when a project genuinely calls for it, but you never need to be in the room for the work to get done.",
  },
  {
    q: "How is this different from a Toronto SEO agency?",
    a: "A Toronto SEO agency optimizes how you rank in Google's blue links, usually on a monthly retainer with an account manager between you and the work. I focus on how AI engines cite and recommend you, work with you directly, and sell a fixed-scope audit — not an open-ended retainer. You can rank well on Google and still be absent from the AI answer a buyer actually reads.",
  },
  {
    q: "How much does an AI visibility consultant cost in Toronto?",
    a: `The audit is ${PRICE_DISPLAY} flat — one-time, no retainer. If you want the fixes done for you afterward, the Implementation Sprint starts at ${OFFERS.implementation.price.replace(
      "From ",
      ""
    )} CAD and the audit fee is credited toward it. Ongoing monitoring and advisory is optional afterward, on a fixed 6–12 month term. There's also a free AI visibility checker if you just want a first read.`,
  },
  {
    q: "Do you only work with Toronto businesses?",
    a: "No. I'm Toronto-based and know the local market — from King West and the Financial District to clinics and firms across the GTA — but I serve Canadian businesses nationwide, and accept US and UK clients when the fit is clear.",
  },
  {
    q: "How fast can a Toronto business see results?",
    a: `It varies by your starting point, but AI visibility can move quickly. HomeCalc.ca, a Toronto-based site, went from near-zero to ${HOMECALC_CLAIMS.citationsInTimeframe} — ${HOMECALC_PROOF.sourceLong}. The audit tells you which changes come first and what to expect.`,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `https://hamitahm.com${SLUG}#service`,
      name: "Hami Tahm — AI Visibility Consultant in Toronto",
      url: `https://hamitahm.com${SLUG}`,
      image: `https://hamitahm.com${PORTRAIT_SRC}`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "111 Peter Street, 9th Floor, Suite 902",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2H1",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6469,
        longitude: -79.3924,
      },
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      areaServed: [
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Mississauga" },
        { "@type": "City", name: "Vaughan" },
        { "@type": "City", name: "Markham" },
        { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
        { "@type": "Country", name: "Canada" },
      ],
      serviceType: "AI Visibility Consulting",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Visibility Services",
        itemListElement: [
          {
            "@type": "Offer",
            price: "1500",
            priceCurrency: "CAD",
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility Audit",
              url: `https://hamitahm.com${AUDIT_URL}`,
            },
          },
          {
            "@type": "Offer",
            price: "4500",
            priceCurrency: "CAD",
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility Implementation Sprint",
              url: `https://hamitahm.com${OFFERS.implementation.href}`,
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://hamitahm.com${SLUG}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "AI Visibility", item: "https://hamitahm.com/ai-visibility/" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Visibility Consultant in Toronto",
          item: `https://hamitahm.com${SLUG}`,
        },
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

export const metadata: Metadata = {
  title: {
    absolute: "AI Visibility Consultant in Toronto — AEO & GEO | Hami Tahm",
  },
  description:
    "AI visibility consultant in Toronto. Get cited and recommended in ChatGPT, Perplexity, and Google AI Overviews. $1,500 flat-fee audit by Hami Tahm — the consultant AI engines already name for Toronto.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

export default function AIVisibilityConsultantToronto() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="wrap" style={{ paddingTop: 24 }}>
        <RevealSection>
          <nav
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--faint)",
              display: "flex",
              gap: 8,
            }}
          >
            <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <span>Consultant in Toronto</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Hero ── */}
      <header style={{ padding: "34px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 1,
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              AI Visibility Consultant &middot; Toronto
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "16ch",
              }}
            >
              AI visibility consultant in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Toronto.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "56ch",
                lineHeight: 1.65,
              }}
            >
              When a customer asks ChatGPT, Perplexity, or Google&rsquo;s AI for a
              recommendation in your category, you want your business to be the name
              it gives. I&rsquo;m Hami Tahm, a Toronto-based AI visibility consultant
              &mdash; I find where AI engines miss, misrepresent, or ignore your
              business, and fix it, so you get cited and recommended across{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                answer engine optimization (AEO)
              </b>{" "}
              and{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                generative engine optimization (GEO)
              </b>
              .
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                marginTop: 38,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link href={AUDIT_URL} className="btn btn-primary">
                Book Your AI Visibility Audit &mdash; {PRICE_DISPLAY}{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link href={CHECKER_URL} className="btn btn-ghost">
                Run the free checker first
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Proof: AI engines already recommend Hami for Toronto ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="Proof, from the AI engines themselves" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                maxWidth: "20ch",
              }}
            >
              Ask AI who does this in Toronto. It already says my name.
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "60ch",
                lineHeight: 1.65,
              }}
            >
              The clearest test of an AI visibility consultant is the category
              itself. Prompted with{" "}
              <span style={{ fontStyle: "italic", color: "var(--ink)" }}>
                &ldquo;{SNAPSHOT.prompt}&rdquo;
              </span>{" "}
              &mdash; {SNAPSHOT.engineCount} major engines returned Hami Tahm by
              name, as of {SNAPSHOT.displayDate}.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {ENGINE_CITATIONS.map(({ engine, quote }) => (
                <div
                  key={engine}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    padding: "20px 22px",
                    background: "var(--panel)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: 12,
                    }}
                  >
                    {engine}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.14}>
            <Link
              href={SNAPSHOT.caseStudyPath}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 24,
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              See the full snapshot, with screenshots <span>&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Why AI visibility matters for a Toronto business ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="Why it matters for a Toronto business" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              Toronto buyers are asking AI before they ask Google.
            </h2>
            <p
              style={{
                marginTop: 22,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              &ldquo;Best dental clinic near me,&rdquo; &ldquo;a good mortgage broker
              in Toronto,&rdquo; &ldquo;an accountant for my startup downtown&rdquo;
              &mdash; a growing share of these high-intent local questions now end
              inside ChatGPT, Perplexity, Gemini, and Google&rsquo;s AI Overviews,
              which name a few businesses and link to almost nothing else.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                If a competitor is named and you aren&rsquo;t, the customer never
                learns you exist.
              </b>
            </p>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Ranking on Google&rsquo;s blue links no longer guarantees you&rsquo;re
              in that answer. Getting there is a different discipline &mdash; entity
              clarity, structured data, extractable content, and consistent signals
              across the web &mdash; and it&rsquo;s the whole of what I do.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── The ladder / services ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="How to work with me" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid">
              <Link href={CHECKER_URL} className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 10,
                  }}
                >
                  Free &middot; Step 0
                </div>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  {OFFERS.checker.name}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  A no-cost first read on whether AI engines can see your business.
                </p>
                <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                  Run the checker &rarr;
                </span>
              </Link>

              <Link href={AUDIT_URL} className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {OFFERS.audit.price} &middot; Step 1
                </div>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  {OFFERS.audit.name}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  {OFFERS.audit.role} Flat fee, one-time, delivered in 7 business days.
                </p>
                <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                  Book the audit &rarr;
                </span>
              </Link>

              <Link href={OFFERS.implementation.href} className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {OFFERS.implementation.price} &middot; Step 2
                </div>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  {OFFERS.implementation.name}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  {OFFERS.implementation.role} The audit fee is credited toward it.
                </p>
                <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                  See the Sprint &rarr;
                </span>
              </Link>

              <Link href={OFFERS.monitor.href} className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 10,
                  }}
                >
                  {OFFERS.monitor.price} &middot; Optional
                </div>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  {OFFERS.monitor.name}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  {OFFERS.monitor.role} A fixed {OFFERS.monitor.duration} term, only
                  after the sprint &mdash; never required to start.
                </p>
                <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                  Talk about monitoring &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Who I work with in Toronto ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Toronto businesses I work with" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid">
              <Link href="/ai-visibility/ai-visibility-for-dental-clinics/" className="inc">
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  Dental &amp; health clinics
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  When a patient asks AI for a dentist near them, your clinic should be
                  in the answer.
                </p>
              </Link>
              <Link href="/ai-visibility/ai-visibility-for-mortgage-brokers/" className="inc">
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  Mortgage brokers
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  Toronto homebuyers now ask AI mortgage questions before they call
                  anyone.
                </p>
              </Link>
              <div className="inc">
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  Professional services
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  Law, accounting, and consulting firms whose buyers vet expertise
                  through AI first.
                </p>
              </div>
              <div className="inc">
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 600 }}>
                  SaaS &amp; startups
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>
                  Toronto tech companies whose category is increasingly compared inside
                  AI answers.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── HomeCalc proof ── */}
      <section style={{ padding: "60px 0" }}>
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
              <p style={{ color: "var(--ink)", lineHeight: 1.7, margin: 0, fontSize: "clamp(16px, 1.9vw, 18px)" }}>
                I proved the method on my own products before offering it. HomeCalc.ca,
                a Toronto-based calculator site under three months old, went from
                near-zero to {HOMECALC_CLAIMS.citationsInTimeframe}, across{" "}
                {HOMECALC_PROOF.pagesCited} pages &mdash; {HOMECALC_PROOF.sourceLong}.{" "}
                <Link href={HOMECALC_PROOF.caseStudyPath} style={{ color: "var(--accent)", fontWeight: 500 }}>
                  Read the case study &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Local panel ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <div className="local-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.2vw, 34px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.015em",
                  maxWidth: "24ch",
                  position: "relative",
                }}
              >
                Based in Toronto&rsquo;s Entertainment District. Serving the GTA and all of Canada.
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "56ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                My office is at 111 Peter Street in downtown Toronto, but the work is
                remote-first &mdash; I serve businesses across Toronto, Mississauga,
                Vaughan, Markham, and the wider GTA, and Canada-wide. Over a decade in
                the Canadian search market means I understand local intent, bilingual
                search nuance, and the YMYL scrutiny that governs finance, health, and
                real-estate queries here.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="05" text="Questions" />
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

      {/* ── Related ── */}
      <section style={{ padding: "0 0 40px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                fontFamily: "var(--mono)",
                fontSize: 13,
              }}
            >
              <Link href="/ai-visibility/ai-visibility-consultant-canada/" style={{ color: "var(--accent)" }}>
                AI visibility consultant, Canada-wide &rarr;
              </Link>
              <Link href="/seo-expert-toronto/" style={{ color: "var(--accent)" }}>
                SEO expert in Toronto &rarr;
              </Link>
              <Link href="/hami-tahm/" style={{ color: "var(--accent)" }}>
                About Hami Tahm &rarr;
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "20px 0 80px" }}>
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
                Get your Toronto business into the AI answer.
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
                Six platforms reviewed, a written report, a prioritized action plan,
                and a walkthrough call. {PRICE_DISPLAY} flat &mdash; no retainer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                Or email{" "}
                <a href="mailto:hami@hamitahm.com" style={{ color: "var(--ink)" }}>
                  hami@hamitahm.com
                </a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── helper ── */
function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 34,
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
