import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";

const HUB_FAQ = [
  {
    q: "What is the difference between AI visibility and SEO?",
    a: "SEO improves how your page ranks in classic search results. AI visibility covers how AI platforms describe, cite, and recommend your business when users ask questions. You can rank #1 on Google and still be invisible in ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    q: "Which AI platforms should my business be visible in?",
    a: "The six that drive most AI-generated answers today are ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot. Different platforms weight different signals — strategy is built per platform.",
  },
  {
    q: "How do I check my AI visibility?",
    a: "Start with an AI visibility audit. It reviews how your business appears across all six platforms and identifies what's missing, misrepresented, or invisible.",
  },
  {
    q: "How much does AI visibility consulting cost?",
    a: "Engagements start with a $1,500 CAD AI visibility audit — flat fee, one-time. Ongoing consulting is scoped per project after the audit. No retainer.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://hamitahm.com/ai-visibility/#service",
      name: "Hami Tahm AI Visibility Consulting",
      url: "https://hamitahm.com/ai-visibility/",
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
    "AI visibility consulting in Canada — from ChatGPT citations to Google AI Overviews. Hami Tahm, Toronto-based consultant with a public case study. Not an agency.",
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
              Get found when your customers{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                ask&nbsp;AI
              </em>
              , not just when they Google.
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
              AI visibility is the practice of ensuring your business appears
              &mdash; accurately and consistently &mdash; when people use AI
              tools like ChatGPT, Perplexity, and Google AI Overviews to find
              products, services, and answers. Hami Tahm is a Toronto-based AI
              visibility consultant helping Canadian businesses build and
              measure their presence across AI-powered search.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                marginTop: 42,
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
              <a href="#how" className="btn btn-ghost">
                How it works
              </a>
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
                Toronto,&rdquo; it doesn&rsquo;t show ten blue links &mdash; it
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
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    ~30%
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
                    of sources cited in AI Overviews don&rsquo;t rank on page
                    one of organic results
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
                    New
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
                    surface, new rules &mdash; and a real opening for businesses
                    that move early
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
                  Building the entity signals and citation authority that cause
                  AI models to recognize and cite your brand.
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
              Proof &mdash; HomeCalc.ca Case Study
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
              HomeCalc.ca &mdash; a Toronto-based Canadian financial calculator
              site &mdash; went from near-zero AI citations to over{" "}
              {HOMECALC_PROOF.citations} across {HOMECALC_PROOF.pagesCited}{" "}
              pages in {HOMECALC_PROOF.timeframe}. The work covered ChatGPT,
              Perplexity, and Google AI Overviews. The domain was{" "}
              {HOMECALC_PROOF.domainAge} at the time.
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

      {/* ── 01 — WHAT AI VISIBILITY WORK COVERS ── */}
      <section id="how" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="What AI visibility work covers" />
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
                  answer &mdash; not a footnote.
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
                  Optimize for the models themselves &mdash; citations,
                  authority signals, and structured data that LLMs trust.
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
                  Build a clear knowledge-graph identity so AI models know
                  exactly who you are and what you do.
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
                  Earn the mentions, backlinks, and third-party signals that make
                  AI models treat you as a trusted source.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — PRODUCTIZED PATH ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel
              number="02"
              text="A productized path, not an open-ended retainer"
            />
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
                  competitors appear, and the exact gaps to close &mdash;
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
                    marginTop: 8,
                  }}
                >
                  from $5,000
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  A focused implementation block &mdash; schema, content
                  restructuring, entity work, and authority signals shipped in
                  4&ndash;6&nbsp;weeks.
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
                  Monthly System
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                >
                  from $2,500/mo
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Ongoing monitoring, content expansion, and competitive
                  tracking to keep you visible as AI models retrain and
                  competitors catch on.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — PROOF ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Proof, not promises" />
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
                  HomeCalc.ca &mdash; Built for AI Visibility from Day One
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
                  patient leads &mdash; the foundation my AI visibility system
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

      {/* ── 04 — WHO I WORK WITH ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Who I work with" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="verts">
              <Link
                href="/ai-visibility/ai-visibility-for-dental-clinics/"
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
                  Dental, orthodontic, and medical practices that need patients
                  to find them through AI-powered search.
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

      {/* ── 05 — RESOURCES ── */}
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
                maxWidth: "52ch",
                lineHeight: 1.65,
              }}
            >
              Deep guides, comparisons, and analysis. New posts ship in Sprint
              S4.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 06 — FAQ ── */}
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
                          Book an AI visibility audit &mdash; $1,500 CAD
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
                walkthrough call. $1,500 CAD flat &mdash; no retainer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ position: "relative" }}
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
