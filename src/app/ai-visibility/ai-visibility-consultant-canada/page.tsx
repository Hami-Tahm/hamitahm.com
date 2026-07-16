import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";
const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";

const FAQ_ITEMS = [
  {
    q: "How do I get my business mentioned in AI answers?",
    a: "Start with an audit of how AI engines currently describe and cite your business, then close the gaps it surfaces — website content, profiles, third-party mentions, and structured data. That is the path from invisible to mentioned in ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    q: "Do you work with B2B companies?",
    a: "Yes. Most engagements are B2B Canadian businesses — professional services, SaaS, healthcare practices, multi-location operators. The audit format is built for organizations where buyers research via AI before any sales conversation.",
  },
  {
    q: "Is Perplexity included in the audit?",
    a: "Yes. Perplexity is one of the six platforms covered in every audit. As one of the fastest-growing AI search engines for B2B research, Perplexity-specific visibility is part of every action plan I deliver.",
  },
  {
    q: "What makes this affordable compared to agencies?",
    a: "Agency retainers for similar services typically run $2,000–$5,000 per month. This is a $1,500 one-time audit. No retainer, no team overhead, no account manager — you work directly with the consultant who runs the audit.",
  },
  {
    q: "How is an AI visibility consultant different from an SEO agency?",
    a: "An SEO agency optimizes how you rank on Google search results. An AI visibility consultant focuses on how AI platforms describe, cite, and recommend you when users ask questions. You can rank #1 on Google and still be missing from the answer ChatGPT gives a buyer in your category.",
  },
  {
    q: "Do you serve businesses outside Toronto?",
    a: "Yes. I'm Toronto-based, but I serve Canadian businesses nationwide. US and UK clients accepted when the fit is clear — reach out before booking.",
  },
  {
    q: "How quickly can I see results?",
    a: `HomeCalc.ca started seeing AI citations climb within 48 hours of implementing the audit's recommendations, with the ${HOMECALC_CLAIMS.fullLiftVisible}. Timelines vary by business size, existing content, and which gaps the audit identifies first.`,
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id":
        "https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/#service",
      name: "Hami Tahm — AI Visibility Consultant",
      url: "https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/",
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
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "City", name: "Toronto" },
      ],
      serviceType: "AI Visibility Consulting",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Visibility Consulting Services",
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
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Visibility Consultant Canada",
          item: "https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/",
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
  title: "AI Visibility Consultant in Canada — Toronto",
  description:
    "AI visibility consultant in Canada. Hami Tahm offers a $1,500 flat-fee audit across ChatGPT, Perplexity, and Google AI Overviews. No agency, no retainer.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/",
  },
};

export default function AIVisibilityConsultantCanada() {
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
            <span>Consultant in Canada</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Header ── */}
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
              AI Visibility Consultant
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
                maxWidth: "15ch",
              }}
            >
              Your AI visibility consultant in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Canada.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "54ch",
                lineHeight: 1.65,
              }}
            >
              Hami Tahm is an AI visibility consultant based in Toronto, Canada
              &mdash; helping businesses identify and fix where they&rsquo;re
              missing, misrepresented, or invisible in AI-powered search platforms
              like ChatGPT, Perplexity, and Google AI&nbsp;Overviews. Unlike
              agency-led services, every audit and strategy is built and
              delivered by Hami personally.
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
                Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="btn btn-ghost"
              >
                See proof
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Intro ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              When buyers ask AI for a recommendation, you want to be{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                the name it says.
              </em>
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Search is splitting in two. Traditional results still matter, but a
              growing share of high-intent queries now end inside ChatGPT,
              Perplexity, Gemini, and Google&rsquo;s AI&nbsp;Overviews &mdash;
              where the answer engine names a handful of brands and links to
              nothing else.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                If your competitors are named and you aren&rsquo;t, the customer
                never even knows you exist.
              </b>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── HomeCalc proof ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              Proof &mdash; HomeCalc.ca, Toronto
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="cs-stat-strip" style={{ marginTop: 28 }}>
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  {HOMECALC_PROOF.citations}
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
                  AI citations
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
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div style={{ maxWidth: 740, marginTop: 28 }}>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                HomeCalc.ca &mdash; a Toronto-based Canadian financial calculator
                site &mdash; went from near-zero AI citations to over{" "}
                {HOMECALC_PROOF.citations} across {HOMECALC_PROOF.pagesCited}{" "}
                pages in {HOMECALC_PROOF.timeframe} after an AI visibility audit.
                The domain was under three months old. This count is{" "}
                {HOMECALC_PROOF.sourceLong}.
              </p>
              <blockquote
                style={{
                  margin: "22px 0",
                  paddingLeft: 20,
                  borderLeft: "3px solid var(--accent)",
                  fontStyle: "italic",
                  color: "var(--muted)",
                  fontSize: 17,
                  lineHeight: 1.6,
                }}
              >
                I identified a specific technical change that produced this lift.
                The methodology is part of what you receive in the audit.
              </blockquote>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                Each audit is conducted personally by{" "}
                <Link
                  href="/hami-tahm/"
                  style={{ color: "var(--accent)", fontWeight: 500 }}
                >
                  Hami Tahm
                </Link>
                , AI visibility consultant based in Toronto.
              </p>
              <Link
                href={HOMECALC_PROOF.caseStudyPath}
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
                Read the full case study <span>&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <div className="problem-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.2vw, 34px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.015em",
                  position: "relative",
                }}
              >
                Pricing &mdash; $1,500 Flat Fee
              </h2>
              <p
                style={{
                  marginTop: 28,
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(40px, 5.5vw, 56px)",
                  fontWeight: 500,
                  color: "var(--accent)",
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                {PRICE_DISPLAY}. Flat fee. One-time.
              </p>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 17,
                  color: "var(--muted)",
                  maxWidth: "58ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                Most AI visibility agency retainers in Canada run
                $2,000&ndash;$5,000 per month. This is a $1,500 one-time audit by
                a named consultant, with a public case study and transparent
                methodology.
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 28,
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: 14,
                    }}
                  >
                    What&rsquo;s included
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      fontSize: 15,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <li>
                      Full audit across six AI platforms (ChatGPT, Perplexity,
                      Google AI Overviews, Claude, Gemini, Bing Copilot)
                    </li>
                    <li>Prioritized action plan ranked by impact</li>
                    <li>{WALKTHROUGH_MINUTES}-minute walkthrough call</li>
                    <li>14 days of follow-up questions</li>
                  </ul>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--faint)",
                      marginBottom: 14,
                    }}
                  >
                    What it isn&rsquo;t
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      fontSize: 15,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <li>Not a retainer</li>
                    <li>Not a subscription</li>
                    <li>Not gated by a sales call</li>
                  </ul>
                </div>
              </div>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 32, position: "relative" }}
              >
                Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── B2B ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              B2B AI Visibility Consulting
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              I work primarily with B2B Canadian businesses where buyers research
              via AI before any conversation. The five categories that produce the
              strongest engagements:
            </p>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid" style={{ marginTop: 28 }}>
              <div className="inc">
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Professional services
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Consulting, legal, accounting firms whose prospects evaluate
                  expertise via AI tools.
                </p>
              </div>
              <div className="inc">
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  SaaS and tech companies
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Products whose buyers research options through AI-generated
                  comparisons.
                </p>
              </div>
              <Link
                href="/ai-visibility/ai-visibility-for-dental-clinics/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Dental clinics
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  When patients ask ChatGPT for a dentist, is your clinic in the
                  answer?
                </p>
              </Link>
              <Link
                href="/ai-visibility/ai-visibility-for-mortgage-brokers/"
                className="inc"
              >
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Mortgage brokers
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Canadian homebuyers asking AI mortgage questions before calling
                  a broker.
                </p>
              </Link>
              <div className="inc">
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Multi-location businesses
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Where AI engine consistency across the web is a brand-level
                  risk, not just a marketing one.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── AI platforms ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              AI Platforms Covered
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Every audit covers the six AI platforms that matter for Canadian
              businesses today:
            </p>
            <ul
              style={{
                marginTop: 22,
                paddingLeft: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.55,
              }}
            >
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  ChatGPT
                </strong>{" "}
                (OpenAI)
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Perplexity
                </strong>{" "}
                &mdash; one of the fastest-growing AI search platforms,
                increasingly used by B2B buyers researching options
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Google AI Overviews
                </strong>
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Claude
                </strong>{" "}
                (Anthropic)
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Gemini
                </strong>
              </li>
              <li>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Bing Copilot
                </strong>
              </li>
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* ── Why not an agency ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              Why Not an Agency?
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Most AI visibility services in Canada are agencies. You sign a
              retainer, meet an account manager, and your strategy is built by a
              team. Typical pricing runs $2,000&ndash;$5,000 per month, ongoing.
              That&rsquo;s a different product than what I offer.
            </p>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Working with me means:
            </p>
            <ul
              style={{
                marginTop: 16,
                paddingLeft: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontSize: 16,
                color: "var(--muted)",
                lineHeight: 1.55,
              }}
            >
              <li>
                The same person runs the audit, writes the report, and delivers
                the walkthrough call
              </li>
              <li>
                $1,500 flat fee, one-time &mdash; no retainer, no ongoing
                commitment
              </li>
              <li>
                Public, named case study (HomeCalc.ca) &mdash; verifiable proof
              </li>
              <li>
                Transparent methodology &mdash; documented and delivered to you,
                not held internally
              </li>
            </ul>
            <p
              style={{
                marginTop: 22,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              If you want a team and a $30,000+/year retainer, hire an agency. If
              you want one consultant who has done this work, runs your audit
              personally, and hands you a plan you can execute or hand to a team
              &mdash; book the audit.
            </p>
            <Link
              href={AUDIT_URL}
              className="btn btn-primary"
              style={{ marginTop: 28 }}
            >
              Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
              <span className="arr">&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── 01 — Why work with an operator, not an agency ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="Why work with an operator, not an agency" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="vs">
              {/* Agency card */}
              <div className="vs-card">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 20,
                  }}
                >
                  A typical agency
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <VsItem marker="&mdash;" color="var(--faint)" text="Strategy by one team, work handed to juniors" />
                  <VsItem marker="&mdash;" color="var(--faint)" text="Open-ended retainers with vague deliverables" />
                  <VsItem marker="&mdash;" color="var(--faint)" text='Recycled SEO playbooks, lightly relabelled "AI"' />
                  <VsItem marker="&mdash;" color="var(--faint)" text="You're one account among many" />
                </ul>
              </div>

              {/* Me card */}
              <div className="vs-card me">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  Working with me
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <VsItem marker="&#10003;" color="var(--accent)" text="The person who diagnoses also does the work" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="Fixed-scope, productized engagements" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="Methods I test live on my own products first" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="A small number of clients, real attention" />
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — How it works ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <RevealSection>
            <SectionLabel number="02" text="How it works" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              <EngagementStep
                n="1"
                title="Book and pay."
                body={`${PRICE_DISPLAY} flat. One invoice, one payment, no retainer.`}
              />
              <EngagementStep
                n="2"
                title="The audit runs."
                body="I review your business across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot."
              />
              <EngagementStep
                n="3"
                title="You receive the report."
                body={`Written report plus a ${WALKTHROUGH_MINUTES}-minute walkthrough call within ${TURNAROUND} of payment.`}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — What you get ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="What you get" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="deliv">
              <DelivRow text="AI visibility audit across ChatGPT, Perplexity, Gemini, and Google AI Overviews" />
              <DelivRow text="Answer-engine optimization (AEO) of your key pages" />
              <DelivRow text="Generative engine optimization (GEO) strategy" />
              <DelivRow text="Entity SEO and structured-data schema markup" />
              <DelivRow text="Content engineered for AI citation and retrieval" />
              <DelivRow text="Third-party authority building to reinforce brand signals" />
              <DelivRow text="Competitor citation and gap analysis" />
              <DelivRow text={`${WALKTHROUGH_MINUTES}-minute walkthrough call and 14 days of follow-up questions`} />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Local Canada panel ── */}
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
                  maxWidth: "22ch",
                  position: "relative",
                }}
              >
                Based in Toronto. Built for Canadian businesses.
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "54ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                Over a decade of SEO and digital marketing in the Canadian market.
                I built HomeCalc.ca to #1 in its city for competitive real-estate
                queries &mdash; and proved the same AI-visibility system works on
                my own products before offering it to clients. I understand
                Canadian local intent, bilingual search nuances, and the YMYL
                scrutiny that governs finance, health, and real-estate verticals
                here.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Questions (FAQ) ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="04" text="Questions" />
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

      {/* ── Final CTA ── */}
      <section style={{ padding: "60px 0 80px" }}>
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
                Book your AI visibility audit.
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
                Six platforms reviewed, written report, action plan, and
                walkthrough call. {PRICE_DISPLAY} flat &mdash; no retainer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── Local helper components ── */

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

function VsItem({
  marker,
  color,
  text,
}: {
  marker: string;
  color: string;
  text: string;
}) {
  return (
    <li style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 14,
          color,
          flexShrink: 0,
        }}
        dangerouslySetInnerHTML={{ __html: marker }}
      />
      <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
        {text}
      </span>
    </li>
  );
}

function DelivRow({ text }: { text: string }) {
  return (
    <div className="d-row">
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 13,
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        &rarr;
      </span>
      <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
        {text}
      </span>
    </div>
  );
}

function EngagementStep({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="pstep">
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: 30,
          color: "var(--accent)",
          fontWeight: 400,
        }}
      >
        {n}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "-.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "var(--muted)",
            marginTop: 8,
            lineHeight: 1.6,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
