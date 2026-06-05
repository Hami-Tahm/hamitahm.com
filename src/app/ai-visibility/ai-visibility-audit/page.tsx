import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const BOOKING_URL = "/contact/";
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: "AI Visibility Audit | $1,500 CAD Flat",
  description:
    "Structured AI visibility audit across ChatGPT, Perplexity, Google AI Overviews, and more. $1,500 CAD flat. Written report, prioritized action plan, and walkthrough call by Hami Tahm.",
};

const FAQ_ITEMS = [
  {
    q: "What is an AI visibility audit?",
    a: "An AI visibility audit is a structured review of how your business appears across AI platforms — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot. The output is a written report and a prioritized action plan.",
  },
  {
    q: "How is this different from a traditional SEO audit?",
    a: "A traditional SEO audit focuses on how Google ranks your pages. An AI visibility audit focuses on how AI engines describe, cite, and recommend your business when users ask questions about your category. The two overlap but optimize for different surfaces.",
  },
  {
    q: "How long does the audit take?",
    a: `You receive the written report and a walkthrough call within ${TURNAROUND} of payment.`,
  },
  {
    q: "Which AI platforms are included?",
    a: "ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot.",
  },
  {
    q: "Is there a free AI visibility audit?",
    a: `No. Free tools give you a generic score from an algorithm. This audit is run personally and produces a custom action plan for your business. The flat fee is ${PRICE_DISPLAY}.`,
  },
  {
    q: "What happens after I receive the report?",
    a: "You have 14 days of follow-up access — questions, clarifications, prioritization help. After that, you can implement on your own or with your existing team.",
  },
  {
    q: "Do you work with businesses outside Canada?",
    a: "I work primarily with Canadian businesses but accept clients from the US and UK when the fit is clear. Reach out before booking.",
  },
] as const;

const COMPARISON_ROWS = [
  ["Who runs it", "Hami Tahm, personally", "Account manager and junior team", "Algorithm, no human review"],
  [
    "Methodology transparency",
    "Documented and delivered to you",
    "Held internally, rarely shared",
    "Generic dashboard rules",
  ],
  [
    "Deliverable customization",
    "Built for your business",
    "Templated across clients",
    "Same output for everyone",
  ],
  ["Pricing", "$1,500 CAD, flat", "Retainer or quote on request", "Monthly subscription"],
  [
    "Case study access",
    "Public, named client (HomeCalc.ca)",
    "Rarely public",
    "None",
  ],
] as const;

const VERTICALS = [
  {
    label: "Dental clinics",
    desc: "Winning patient queries in ChatGPT and Google AI Overviews.",
    href: "/ai-visibility/ai-visibility-for-dental-clinics/",
  },
  {
    label: "Mortgage brokers",
    desc: "Appearing in mortgage and lender comparison queries.",
    href: "/ai-visibility/ai-visibility-for-mortgage-brokers/",
  },
  {
    label: "Canadian SMBs",
    desc: "Established businesses that rank in Google but stay invisible in AI.",
    href: "/ai-visibility/ai-visibility-consultant-canada/",
  },
  {
    label: "B2B services",
    desc: "Consulting and service firms whose buyers now research via AI.",
    href: "/ai-visibility/ai-visibility-consultant-canada/",
  },
] as const;

const RELATED_LINKS = [
  { label: "What is AI visibility?", href: "/ai-visibility/" },
  {
    label: "Inside the HomeCalc audit (case study)",
    href: "/case-studies/homecalc-ai-visibility/",
  },
  { label: "About Hami Tahm", href: "/hami-tahm/" },
  {
    label: "AI visibility tools vs. an audit",
    href: "/blog/ai-visibility-tools-vs-audit/",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Visibility",
          item: "https://hamitahm.com/ai-visibility/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Visibility Audit",
          item: "https://hamitahm.com/ai-visibility/ai-visibility-audit/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Visibility Audit",
      serviceType: "AI Visibility Consulting",
      areaServed: "Canada",
      provider: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
      },
      offers: {
        "@type": "Offer",
        price: 1500,
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Person", name: "Hami Tahm" },
      },
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

export default function AIVisibilityAudit() {
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
            <span>AI Visibility Audit</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── 1 — Hero ── */}
      <header style={{ padding: "34px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "22ch",
              }}
            >
              AI Visibility Audit
            </h1>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
              }}
            >
              An AI visibility audit is a structured review of how your business
              appears across AI platforms like ChatGPT, Perplexity, and Google AI
              Overviews. Hami Tahm conducts each audit personally — identifying
              where your business is missing, misrepresented, or invisible in
              AI-generated answers — and delivers a prioritized action plan you
              can act on the same week.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                color: "var(--ink)",
                fontWeight: 500,
                maxWidth: "48ch",
                lineHeight: 1.5,
              }}
            >
              $1,500 CAD flat. One consultant. Public case study included.
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 32 }}>
              <Link href={BOOKING_URL} className="btn btn-primary">
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 2 — What's Included ── */}
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
              What&rsquo;s Included in Your Audit
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
              }}
            >
              Every AI visibility audit covers the platforms your customers
              actually use to find businesses like yours — and ends with a report
              you can hand to a developer or act on yourself.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div className="deliv" style={{ marginTop: 40 }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  AI platforms covered
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {[
                    "ChatGPT (OpenAI)",
                    "Perplexity",
                    "Google AI Overviews",
                    "Claude (Anthropic)",
                    "Gemini",
                    "Bing Copilot",
                  ].map((platform) => (
                    <li key={platform} className="d-row">
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                        &rarr;
                      </span>
                      <span style={{ color: "var(--muted)", fontSize: 15 }}>
                        {platform}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  What you receive
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {[
                    "A written report covering each platform — where you appear, where you don't, and what AI engines say about you",
                    "A prioritized action plan ranked by impact and effort",
                    `A ${WALKTHROUGH_MINUTES}-minute walkthrough call to review findings and next steps`,
                    "14 days of follow-up questions after delivery",
                  ].map((item) => (
                    <li key={item} className="d-row">
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                        &rarr;
                      </span>
                      <span style={{ color: "var(--muted)", fontSize: 15 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — Proof: HomeCalc ── */}
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
              Real Results — HomeCalc.ca
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="audit-proof-layout" style={{ marginTop: 32 }}>
              <div className="proof-card">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--faint)",
                    marginBottom: 12,
                  }}
                >
                  Before → After
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 28,
                        fontWeight: 500,
                        color: "var(--muted)",
                      }}
                    >
                      Near-zero
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--faint)",
                        marginTop: 4,
                      }}
                    >
                      AI citations
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 28,
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
                        color: "var(--faint)",
                        marginTop: 4,
                      }}
                    >
                      in {HOMECALC_PROOF.timeframe}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "clamp(17px, 2vw, 19px)",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  HomeCalc.ca, a Canadian financial calculator site{" "}
                  {HOMECALC_PROOF.domainAge}, went from near-zero AI citations
                  to {HOMECALC_PROOF.citations} in {HOMECALC_PROOF.timeframe} —
                  with {HOMECALC_PROOF.pagesCited} pages cited across ChatGPT,
                  Perplexity, and Google AI Overviews.
                </p>
                <p
                  style={{
                    marginTop: 20,
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
                  , AI visibility consultant based in Canada.
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
            </div>
          </RevealSection>

          <RevealSection delay={0.12}>
            <div className="proof-grid" style={{ marginTop: 20 }}>
              <PlaceholderProofCard
                title="Dental clinic"
                note="Case study publishing summer 2026"
              />
              <PlaceholderProofCard
                title="Mortgage broker"
                note="Case study publishing summer 2026"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 4 — Comparison ── */}
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
              Consultant-Led vs Agency vs DIY Tool
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "52ch",
                lineHeight: 1.65,
              }}
            >
              Three ways to audit your AI visibility. Here&rsquo;s how they
              actually compare.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div
              className="audit-comparison-desktop"
              style={{ overflowX: "auto", marginTop: 36 }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--line-strong)" }}>
                    <th style={{ padding: "12px 12px 12px 0", width: "22%" }} />
                    <th
                      style={{
                        textAlign: "left",
                        padding: 12,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      Hami Tahm (Consultant)
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: 12,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      Agency{" "}
                      <span style={{ fontWeight: 400, color: "var(--faint)" }}>
                        (e.g. Level Agency, AI Search Engineers)
                      </span>
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0 12px 12px",
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      DIY Tool{" "}
                      <span style={{ fontWeight: 400, color: "var(--faint)" }}>
                        (e.g. LLMClicks.ai)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([label, consultant, agency, tool]) => (
                    <tr key={label} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td
                        style={{
                          padding: "14px 12px 14px 0",
                          fontWeight: 600,
                          color: "var(--ink)",
                          verticalAlign: "top",
                        }}
                      >
                        {label}
                      </td>
                      <td
                        style={{
                          padding: 14,
                          color: "var(--muted)",
                          verticalAlign: "top",
                        }}
                      >
                        {consultant}
                      </td>
                      <td
                        style={{
                          padding: 14,
                          color: "var(--muted)",
                          verticalAlign: "top",
                        }}
                      >
                        {agency}
                      </td>
                      <td
                        style={{
                          padding: "14px 0 14px 12px",
                          color: "var(--muted)",
                          verticalAlign: "top",
                        }}
                      >
                        {tool}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="audit-comparison-mobile" style={{ marginTop: 32 }}>
              {(
                [
                  ["Hami Tahm (Consultant)", 1],
                  ["Agency (e.g. Level Agency, AI Search Engineers)", 2],
                  ["DIY Tool (e.g. LLMClicks.ai)", 3],
                ] as const
              ).map(([title, col]) => (
                <div
                  key={title}
                  className="proof-card"
                  style={{ marginBottom: 14 }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {title}
                  </h3>
                  {COMPARISON_ROWS.map(([label, c, a, t]) => {
                    const value = col === 1 ? c : col === 2 ? a : t;
                    return (
                      <div
                        key={label}
                        style={{
                          padding: "12px 0",
                          borderTop: "1px solid var(--line)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            fontFamily: "var(--mono)",
                            color: "var(--faint)",
                            marginBottom: 4,
                          }}
                        >
                          {label}
                        </div>
                        <div style={{ fontSize: 14, color: "var(--muted)" }}>
                          {value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              Want the longer breakdown?{" "}
              <Link
                href="/blog/ai-visibility-tools-vs-audit/"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                AI visibility tools vs. an audit &rarr;
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — How the Audit Works ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
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
              How the Audit Works
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ marginTop: 32 }}>
              <ProcessStep
                n="1"
                title="Book and pay."
                body={`${PRICE_DISPLAY} flat. One invoice, one payment, no retainer.`}
              />
              <ProcessStep
                n="2"
                title="The audit runs."
                body="I review your business across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot."
              />
              <ProcessStep
                n="3"
                title="You receive the report."
                body={`Written report plus a ${WALKTHROUGH_MINUTES}-minute walkthrough call within ${TURNAROUND} of payment.`}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 6 — Pricing ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <div
              className="problem-panel"
              style={{
                maxWidth: 560,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(27px, 3.6vw, 36px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.015em",
                  position: "relative",
                }}
              >
                Pricing
              </h2>
              <p
                style={{
                  marginTop: 24,
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 500,
                  color: "var(--accent)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.1,
                  position: "relative",
                }}
              >
                $1,500 CAD. Flat fee. One-time.
              </p>

              <div
                style={{
                  marginTop: 32,
                  textAlign: "left",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  What&rsquo;s included:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Full audit across six AI platforms",
                    "Written report with prioritized action plan",
                    `${WALKTHROUGH_MINUTES}-minute walkthrough call`,
                    "14 days of follow-up questions",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15,
                        color: "var(--muted)",
                        padding: "6px 0",
                        lineHeight: 1.5,
                      }}
                    >
                      &mdash; {item}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    marginTop: 24,
                    marginBottom: 12,
                  }}
                >
                  What it isn&rsquo;t:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Not a retainer",
                    "Not a subscription",
                    "Not gated by a sales call",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15,
                        color: "var(--muted)",
                        padding: "6px 0",
                        lineHeight: 1.5,
                      }}
                    >
                      &mdash; {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={BOOKING_URL}
                className="btn btn-primary"
                style={{ marginTop: 36, position: "relative" }}
              >
                Book Your Audit — $1,500 CAD <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 7 — Who This Is For ── */}
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
                marginBottom: 28,
              }}
            >
              Who This Is For
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="audit-verts-2x2">
              {VERTICALS.map(({ label, desc, href }) => (
                <Link key={label} href={href} className="vert">
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {label}
                  </div>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 14,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 14,
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--accent)",
                    }}
                  >
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 8 — FAQ ── */}
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
                marginBottom: 28,
              }}
            >
              Frequently Asked Questions
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div key={q} className="faq-item">
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

      {/* ── 9 — Related Reading ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.14,
                letterSpacing: "-.015em",
                marginBottom: 20,
              }}
            >
              Related Reading
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {RELATED_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontSize: 16,
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealSection>
        </div>
      </section>

      {/* ── 10 — Final CTA ── */}
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
                Book Your Audit
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
                $1,500 CAD. Flat fee. Report and walkthrough call within{" "}
                {TURNAROUND}.
              </p>
              <Link
                href={BOOKING_URL}
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
                <a href="mailto:TahmHami@gmail.com" style={{ color: "var(--ink)" }}>
                  TahmHami@gmail.com
                </a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

    </>
  );
}

function ProcessStep({
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

function PlaceholderProofCard({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <div
      className="proof-card"
      style={{
        opacity: 0.85,
        borderStyle: "dashed",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--faint)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
        }}
      >
        Placeholder
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 15,
          fontWeight: 600,
          marginTop: 8,
        }}
      >
        {title}
      </div>
      <p
        style={{
          marginTop: 8,
          fontSize: 13,
          color: "var(--faint)",
        }}
      >
        {note}
      </p>
    </div>
  );
}
