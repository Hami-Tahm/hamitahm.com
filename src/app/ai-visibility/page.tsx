import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { ShortAnswer } from "@/components/ShortAnswer";
import { HOMECALC_PROOF, HOMECALC_CLAIMS, HOMECALC_HEADLINE_STAT } from "@/lib/homecalc-proof";
import { COMMERCIAL_REALITY } from "@/lib/citation-study";
import { OFFERS } from "@/lib/offers";

const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";

/**
 * The Resources section used to be an empty promise ending in "New posts ship in
 * Sprint S4": an internal sprint label, shown to buyers, on a page selling
 * transparency. These four are the pages that actually back the claims made above.
 */
const RESOURCES = [
  {
    href: "/research/",
    tag: "Data",
    title: "AI Citation Study",
    blurb:
      "The original dataset behind the numbers on this page: raw CSVs, methodology, stated limitations, published under a DOI.",
  },
  {
    href: "/case-studies/homecalc-ai-visibility/",
    tag: "Case study",
    title: "HomeCalc.ca AI Visibility",
    blurb:
      "What a new domain earned across Copilot and Google's AI surfaces in three months, with the console screenshots.",
  },
  {
    href: "/blog/how-to-check-ai-visibility/",
    tag: "Guide",
    title: "How to Check AI Visibility",
    blurb:
      "Seven free and freemium ways to see where you stand, including the one commonly recommended tool that doesn't do this at all.",
  },
  {
    href: "/methodology/",
    tag: "Method",
    title: "Methodology",
    blurb:
      "How every figure on this site is measured, which console it came from, and what it is explicitly not claiming.",
  },
  {
    href: "/case-studies/",
    tag: "Results",
    title: "All case studies",
    blurb:
      "Every published result in one place: what changed, over what window, and which console reported it.",
  },
] as const;

const HUB_FAQ = [
  {
    q: "How do I get my business to show up in ChatGPT?",
    a: "Audit first, then fix the gaps. AI engines cite businesses with clear, consistent, well-structured information across the web. The audit shows what ChatGPT and the other platforms are missing about you, and what to change so you appear in their answers.",
  },
  {
    q: "How do I get recommended by AI?",
    a: "Being recommended means engines can tell what you do, for whom, and where, and find that description agreeing with itself across your site, your profiles, and third-party sources. There is no markup that buys this; Google says plainly that no special schema is required for generative AI search. The audit shows which of those signals are missing, wrong, or contradicting each other.",
  },
  {
    q: "What is the difference between AI visibility and SEO?",
    a: "They overlap more than the labels suggest. Google states that its AI features are rooted in its core Search ranking systems and that no special optimization is required for AI Overviews or AI Mode, so on Google's surfaces, this is largely SEO. Three things stay separate: the engines that don't use Google's index (ChatGPT, Claude, Perplexity) and have their own crawlers and rules; whether what an answer says about you is accurate, which no ranking system addresses; and measurement, since most engines report nothing back to you.",
  },
  {
    q: "Which AI platforms should my business be visible in?",
    a: "The six that drive most AI-generated answers today are Google AI Overviews, ChatGPT, Gemini, Claude, Bing Copilot, and Perplexity. Different platforms weight different signals; strategy is built per platform.",
  },
  {
    q: "How do I check my AI visibility?",
    a: "Start with an AI visibility audit. It reviews how your business appears across all six platforms and identifies what's missing, misrepresented, or invisible.",
  },
  {
    q: "How much does AI visibility consulting cost?",
    a: "Engagements start with a $1,500 CAD AI visibility audit: flat fee, one-time, no retainer to get started. If you want the findings turned into a prioritized action plan and roadmap for your team to ship, that starts at $4,500 (the audit fee is credited toward it); the final number scales with your traffic volume, industry, and site size. I don't take execution work; your developer or agency implements it. Optional monitoring and advisory is available afterward on a fixed 6–12 month term; never required.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    /*
     * ⚠️ WHY THIS IS `Service` AND NOT `ProfessionalService` (changed 2026-08-11).
     *
     * Three pages each declared their own `ProfessionalService` with a street address
     * and, on the Toronto page, geo coordinates. Two problems with that:
     *
     * 1. Three separate LocalBusiness nodes with three @ids describe one practice as
     *    three businesses, which is the opposite of the entity clarity this site sells.
     *    That is the real bug and it is independent of any address question.
     * 2. A LocalBusiness subtype also duplicates the address, which lives in exactly
     *    one place. UPDATED 2026-08-16: that place is now the #organization node in
     *    layout.tsx, not the Person; the address moved so it could sit with the geo
     *    coordinates, which are not valid on a Person.
     *
     * ⚠️ layout.tsx NOW DECLARES `ProfessionalService` ON #organization, so this
     * heading looks contradictory at a glance. It is not, and the distinction is the
     * whole point: the business is declared ONCE, in the file that owns the graph.
     * The bug was never the type; it was three PAGES each minting their own business
     * entity with its own @id. That must not come back. Pages describe services;
     * layout.tsx describes the business.
     *
     * `Service` with `provider` pointing at the single Person node says the true
     * thing: one practitioner, several services, serving an area. `priceRange` went
     * with it, and now lives on #organization where it is valid. A GBP listing is
     * still deliberately not pursued: see the note in layout.tsx.
     */
    {
      "@type": "Service",
      "@id": "https://hamitahm.com/ai-visibility/#service",
      name: "Hami Tahm AI Visibility Consulting",
      url: "https://hamitahm.com/ai-visibility/",
      image: `https://hamitahm.com${PORTRAIT_SRC}`,
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "City", name: "Toronto" },
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
              url: "https://hamitahm.com/ai-visibility/ai-visibility-audit/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Answer Engine Optimization Consulting",
              url: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization Consulting",
              url: "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility for Dental Clinics",
              url: "https://hamitahm.com/ai-visibility/ai-visibility-for-dental-clinics/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility for Mortgage Brokers",
              url: "https://hamitahm.com/ai-visibility/ai-visibility-for-mortgage-brokers/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility for SaaS Companies",
              url: "https://hamitahm.com/ai-visibility/ai-visibility-for-saas-companies/",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Visibility for Healthcare Clinics",
              url: "https://hamitahm.com/ai-visibility/ai-visibility-for-healthcare-clinics/",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hamitahm.com/ai-visibility/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hamitahm.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Visibility",
          item: "https://hamitahm.com/ai-visibility/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: HUB_FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Visibility Consulting in Canada",
  description:
    "AI visibility consulting in Canada: from ChatGPT citations to Google AI Overviews. Hami Tahm, Toronto-based consultant with a public case study. Not an agency.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/",
  },
};

export default function AIVisibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── HEADER ── */}
      <header style={{ padding: "80px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 30,
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
              AI Visibility &middot; Canada
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(40px,6vw,68px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "16ch",
              }}
            >
              Get found when buyers ask{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI
              </em>
              , not just Google.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 30,
                fontSize: 20,
                color: "var(--muted)",
                maxWidth: "54ch",
                lineHeight: 1.65,
              }}
            >
              When customers ask AI for a business like yours, is it
              recommending you or your competitor? Find out, then fix it.
            </p>
          </RevealSection>

          {/*
            EXTRACTABILITY FIX (2026-07-27): this replaced a plain paragraph.

            An incognito Google search for "who does AI visibility in Toronto" was
            returning a snippet for this page stitched from three unrelated places:
            the intro sentence, the fragment "are agencies." lifted mid-sentence out of
            the "Why a Consultant, Not an Agency" section far below, and the venture
            list. The result read as broken text, and it is the only thing a buyer
            sees in the results.

            The cause is that no single block on the page answered "what is this and
            who runs it" completely, so the engine assembled one itself. A labelled,
            self-contained answer near the top gives it something clean to lift whole.
            This is the same extractability principle the audit sells.
          */}
          <RevealSection delay={0.16}>
            <div
              style={{
                marginTop: 34,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                href="/ai-visibility/ai-visibility-checker/"
                className="btn btn-primary"
              >
                Check my AI visibility for free{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link href={AUDIT_URL} className="btn btn-ghost">
                See the $1,500 CAD audit
              </Link>
            </div>
          </RevealSection>

          {/*
            MICRO-PROOF (2026-08-11). Deliberately says "a site I own".

            HomeCalc.ca is my own property, not a client engagement, and a proof line
            that lets a buyer assume otherwise is the kind of thing that only ever
            gets found out later. The number is also a sum of two different metrics,
            so the components are named rather than collapsed into "citations".
          */}
          <RevealSection delay={0.18}>
            <p
              style={{
                marginTop: 20,
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                color: "var(--faint)",
                lineHeight: 1.7,
                maxWidth: "62ch",
              }}
            >
              {HOMECALC_HEADLINE_STAT.value}{" "}measured AI appearances in{" "}
              {HOMECALC_PROOF.timeframe}{" "}on a site I own: Copilot citations
              plus Google generative-AI impressions &middot;{" "}
              <Link href="/methodology/" style={{ color: "var(--accent)" }}>
                public methodology
              </Link>{" "}
              &middot; no retainer to start
            </p>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div style={{ maxWidth: "62ch", marginTop: 34 }}>
              <ShortAnswer>
                AI visibility is how accurately and consistently your business appears
                when people ask Google AI Overviews, ChatGPT, Gemini, Claude, or Copilot to recommend a product or service. Hami Tahm is a
                Toronto-based AI visibility consultant who audits how those engines
                describe, cite and recommend Canadian businesses, then fixes
                the gaps.
              </ShortAnswer>
            </div>
          </RevealSection>

        </div>
      </header>

      {/* ── PROBLEM ── */}
      <section style={{ padding: "54px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="problem-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px,3.8vw,42px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.01em",
                  position: "relative",
                }}
              >
                Search is moving from links to{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  answers.
                </em>
              </h2>

              <p
                style={{
                  fontSize: 18,
                  color: "var(--muted)",
                  marginTop: 16,
                  maxWidth: "60ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                When a homebuyer asks ChatGPT &ldquo;best mortgage broker in
                Toronto,&rdquo; it doesn&rsquo;t show ten blue links; it
                names three. When a patient asks Perplexity &ldquo;top dental
                clinic near me,&rdquo; it cites two or three sources and moves
                on. Google&rsquo;s AI Overviews now answer the query before the
                user ever scrolls.{" "}
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  If you&rsquo;re not one of the names, you&rsquo;re invisible.
                </b>
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 40,
                  marginTop: 34,
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                {/*
                  The "~30% of AI Overview sources don't rank on page one" stat that
                  used to sit here had no source anywhere in this repo. On a site whose
                  entire pitch is that its numbers can be checked, an unattributed
                  third-party statistic is the worst possible thing to lead with.
                  Replaced with two figures from my own published dataset.
                */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    {COMMERCIAL_REALITY.aiCitations}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginTop: 4,
                      maxWidth: "26ch",
                    }}
                  >
                    AI citations earned by one page of mine in a quarter
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    {COMMERCIAL_REALITY.googleClicksPerQuarter}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginTop: 4,
                      maxWidth: "26ch",
                    }}
                  >
                    Google clicks that same page earned (why citations get
                    measured separately)
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── SERVICES DIRECTORY ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(28px,3.8vw,42px)",
                lineHeight: 1.12,
                letterSpacing: "-.01em",
              }}
            >
              AI Visibility Services
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid" style={{ marginTop: 34 }}>
              <Link href={AUDIT_URL} className="inc">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility Audit
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Structured review across six AI platforms. Report, action
                  plan, walkthrough call. $1,500 CAD flat.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  Book an AI Visibility Audit &rarr;
                </div>
              </Link>

              <Link href={OFFERS.actionPlan.href} className="inc">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility Action Plan
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  What to change and in what order, written for your team to
                  ship. {OFFERS.actionPlan.priceWithCurrency}, fixed scope:
                  audit fee credited.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  See the Action Plan &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-consultant-canada/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility Consultant in Canada
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Consultant-led AI visibility practice for Canadian
                  businesses. One person, public case study, transparent pricing.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  AI Visibility Consultant Canada &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-consultant-toronto/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility Consultant in Toronto
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  The local cornerstone: AEO and GEO for Toronto and GTA
                  businesses. The consultant AI engines already name for Toronto.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  AI Visibility Consultant Toronto &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/answer-engine-optimization-consultant-canada/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Answer Engine Optimization Consultant
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Structuring your content so AI engines can extract it as a
                  direct answer.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  AEO Consulting &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/generative-engine-optimization-consultant-canada/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Generative Engine Optimization Consultant
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Making your brand legible to generative engines:
                  consistent entity information and credible third-party sources.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  GEO Consulting &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-saas-companies/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility for SaaS Companies
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  When a buyer asks ChatGPT for the best tool in your
                  category, is your product in the answer?
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  SaaS AI Visibility &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-dental-clinics/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility for Dental Clinics
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  When a patient asks ChatGPT for a dentist, is your clinic in
                  the answer?
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  Dental Clinic AI Visibility &rarr;
                </div>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-mortgage-brokers/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  AI Visibility for Mortgage Brokers
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Canadian homebuyers are asking AI mortgage questions.
                  Brokerages who aren&rsquo;t cited don&rsquo;t get the call.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    marginTop: 14,
                  }}
                >
                  Mortgage Broker AI Visibility &rarr;
                </div>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── HOMECALC PROOF ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(28px,3.8vw,42px)",
                lineHeight: 1.12,
                letterSpacing: "-.01em",
              }}
            >
              Proof: HomeCalc.ca, a site I own
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="cs-stat-strip" style={{ marginTop: 34 }}>
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  {HOMECALC_HEADLINE_STAT.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 6,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  {HOMECALC_HEADLINE_STAT.label}
                </div>
              </div>
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  {HOMECALC_PROOF.timeframe}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 6,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  Time to lift
                </div>
              </div>
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  &lt;3 mo
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 6,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  Domain age
                </div>
              </div>
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  Toronto
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginTop: 6,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  Based
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 28,
                fontSize: 18,
                color: "var(--muted)",
                maxWidth: "68ch",
                lineHeight: 1.65,
              }}
            >
              HomeCalc.ca is a Toronto-based Canadian financial calculator site.
              I own it: this is an owned-property case study, not a client
              engagement, which is why the raw data can be published in full. It went
              from near-zero to{" "}
              {HOMECALC_CLAIMS.appearancesInTimeframe},{" "}
              {HOMECALC_PROOF.combinedSourceLong}.
              The domain was {HOMECALC_PROOF.domainAge}.
            </p>
            <blockquote
              style={{
                marginTop: 22,
                paddingLeft: 20,
                borderLeft: "3px solid var(--accent)",
                fontStyle: "italic",
                color: "var(--muted)",
                fontSize: 17,
                lineHeight: 1.6,
                maxWidth: "62ch",
              }}
            >
              I identified a specific technical change that produced this lift.
              The methodology is part of what you receive in the audit.
            </blockquote>
            <Link
              href={HOMECALC_PROOF.caseStudyPath}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 22,
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              Read the full case study <span>&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── CONSULTANT WEDGE ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(28px,3.8vw,42px)",
                lineHeight: 1.12,
                letterSpacing: "-.01em",
              }}
            >
              Why a Consultant, Not an Agency
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="hero-grid" style={{ marginTop: 34 }}>
              <div>
                <p
                  style={{
                    fontSize: 18,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    maxWidth: "58ch",
                  }}
                >
                  Most AI visibility providers in Canada are agencies. You sign
                  a retainer, meet an account manager, and your strategy is built
                  by a team you may never speak to. That&rsquo;s a different
                  product.
                </p>
                <p
                  style={{
                    fontSize: 18,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    maxWidth: "58ch",
                    marginTop: 18,
                  }}
                >
                  Working with an individual consultant means the same person
                  who reviews your data writes your action plan, runs the
                  walkthrough call, and is reachable for follow-up questions. No
                  handoffs, no retainer, public case study, public pricing.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 96,
                    height: 120,
                    borderRadius: 10,
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <Image
                    src={PORTRAIT_SRC}
                    alt="Hami Tahm, AI visibility consultant, Toronto"
                    width={96}
                    height={120}
                    sizes="96px"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    Hami Tahm
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.55,
                    }}
                  >
                    AI Visibility Consultant. Based in Toronto. Builder of
                    HamiTahm.com, HomeCalc.ca, and Houmse.com.
                  </p>
                  <Link
                    href="/hami-tahm/"
                    style={{
                      display: "inline-block",
                      marginTop: 14,
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--accent)",
                    }}
                  >
                    About Hami Tahm &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 01: What AI Visibility Work Covers */}
      <section id="how" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="What AI visibility work covers" />
          </RevealSection>

          <RevealSection delay={0.04}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
                marginBottom: 30,
              }}
            >
              What AI visibility work covers
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid">
              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  AEO
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  Answer Engine Optimization
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Structure your content so AI models pull it as the direct
                  answer, not a footnote.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  GEO
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  Generative Engine Optimization
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Improve how retrieval-enabled AI systems discover,
                  understand and cite your pages: crawlable content,
                  original evidence, and consistent entity information.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  ChatGPT
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  ChatGPT &amp; Perplexity Visibility
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Get named, cited, and recommended when users ask conversational
                  AI about your category.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  AIO
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  Google AI Overviews
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Appear in the AI-generated summary box that now sits above
                  traditional search results.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  Entity
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  Entity SEO &amp; Schema
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  State who you are, what you sell and where, consistently
                  enough that a machine doesn&rsquo;t have to guess.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  Auth
                </div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.3,
                  }}
                >
                  Authority Building
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Get the facts about you right on the third-party sources
                  engines actually read. Earned, not manufactured.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 02: Productized Path */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel
              number="02"
              text="A productized path, not an open-ended retainer"
            />
          </RevealSection>

          <RevealSection delay={0.04}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
                marginBottom: 30,
              }}
            >
              A productized path, not an open-ended retainer
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="ladder ladder-3">
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 01
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Audit
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 8,
                  }}
                >
                  $1,500 CAD &middot; flat
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Full diagnosis of your AI footprint: where you appear, where
                  competitors appear, and the exact gaps to close,
                  delivered in 7&nbsp;days.
                </p>
              </div>

              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 02
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Sprint
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 8,
                  }}
                >
                  {OFFERS.actionPlan.priceWithCurrency}
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Recommendations, a page-level action plan and a roadmap
                  (content structure, entity work, structured data and
                  authority signals) prioritized against your own Search
                  Console and Bing data and delivered in{" "}
                  {OFFERS.actionPlan.duration.toLowerCase()}. Your team ships it;
                  the audit fee is credited toward it.{" "}
                  <Link
                    href={OFFERS.actionPlan.href}
                    style={{ color: "var(--accent)", fontWeight: 500 }}
                  >
                    Details &rarr;
                  </Link>
                </p>
              </div>

              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 03
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Monitoring &amp; Advisory
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 8,
                  }}
                >
                  {OFFERS.monitor.priceWithCurrency}{" "}&middot; optional
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Optional after the action plan, on{" "}
                  {OFFERS.monitor.durationPhrase}, never required to start.{" "}
                  <Link href="/pricing/" style={{ color: "var(--accent)", fontWeight: 500 }}>
                    Every step, priced &rarr;
                  </Link>
                  I monitor your citations, track competitors, and keep you
                  visible as AI models retrain.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 03: Proof */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Proof, not promises" />
          </RevealSection>

          <RevealSection delay={0.04}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
                marginBottom: 30,
              }}
            >
              Proof, not promises
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="proof-grid">
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="proof-card"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Case Study
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-.01em",
                  }}
                >
                  HomeCalc.ca: Built for AI Visibility from Day One
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                    maxWidth: "44ch",
                  }}
                >
                  How I structured a new real-estate calculator site to earn
                  citations in ChatGPT and Google AI Overviews within the first
                  months of launch.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 16,
                  }}
                >
                  Read the case study &rarr;
                </div>
              </Link>

              <Link
                href="/case-studies/cited-by-ai-engines/"
                className="proof-card"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Case Study
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-.01em",
                  }}
                >
                  AI Engines Already Name Me
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                    maxWidth: "44ch",
                  }}
                >
                  Two independent, dated checks four weeks apart: ChatGPT,
                  Perplexity, Google AI Mode, and Grok all name me when asked
                  who does AI visibility in Toronto. Not a ranking claim, a
                  repeated pattern.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 16,
                  }}
                >
                  See the snapshot &rarr;
                </div>
              </Link>

              <Link
                href="/orthodontic-seo-marketing-case-study/"
                className="proof-card"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Track Record
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-.01em",
                  }}
                >
                  7.5 Years of SEO Results for a Healthcare Brand
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                    maxWidth: "44ch",
                  }}
                >
                  A long-running engagement that grew organic traffic and
                  patient leads, the foundation my AI visibility system
                  is built on.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 16,
                  }}
                >
                  See the SEO case &rarr;
                </div>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 04: Who I Work With */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Who I work with" />
          </RevealSection>

          <RevealSection delay={0.04}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
                marginBottom: 30,
              }}
            >
              Who I work with
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="verts">
              <Link
                href="/ai-visibility/ai-visibility-for-healthcare-clinics/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Clinics &amp; Healthcare
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Dental, physiotherapy, medical, and multi-location practices
                  that need patients to find them through AI-powered search.
                </p>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-saas-companies/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  SaaS Companies
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Products whose buyers ask AI for comparisons and
                  alternatives before ever requesting a demo.
                </p>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-mortgage-brokers/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Real Estate &amp; Mortgage
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Brokers, agents, and real-estate services competing for the
                  queries homebuyers ask AI first.
                </p>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-consultant-canada/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  SaaS &amp; Startups
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Software companies and early-stage products that want to be
                  the name AI recommends in their category.
                </p>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 05: Resources */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="05" text="Resources" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
              }}
            >
              AI Visibility Resources
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: "var(--muted)",
                maxWidth: "56ch",
                lineHeight: 1.65,
              }}
            >
              The original data, the method behind it, and the free way to check
              yourself. All of it is public; none of it is gated.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="inc-grid" style={{ marginTop: 30 }}>
              {RESOURCES.map((r) => (
                <Link key={r.href} href={r.href} className="inc">
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: 10,
                    }}
                  >
                    {r.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 19,
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.55,
                    }}
                  >
                    {r.blurb}
                  </p>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 06: FAQ */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="06" text="Questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.2,
                letterSpacing: "-.01em",
                marginTop: -8,
                marginBottom: 8,
              }}
            >
              Frequently Asked Questions
            </h2>
            <div>
              {HUB_FAQ.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 21,
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: 16,
                      lineHeight: 1.6,
                      marginTop: 10,
                      maxWidth: "68ch",
                    }}
                  >
                    {a}
                    {q === "How do I check my AI visibility?" && (
                      <>
                        {" "}
                        <Link
                          href={AUDIT_URL}
                          style={{ color: "var(--accent)", fontWeight: 500 }}
                        >
                          Book an AI visibility audit for $1,500 CAD
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="final-cta">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px,4vw,40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                Start with a structured AI visibility audit.
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 16,
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "relative",
                  marginBottom: 30,
                  lineHeight: 1.6,
                }}
              >
                Six platforms reviewed, written report, action plan, and
                walkthrough call. $1,500 CAD flat, no retainer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ position: "relative" }}
              >
                Book Your AI Visibility Audit for $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

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
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
