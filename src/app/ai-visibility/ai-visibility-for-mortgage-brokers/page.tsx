import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: "AI Visibility for Mortgage Brokers | Hami Tahm",
  description:
    "Ensure your mortgage brokerage appears when homebuyers ask ChatGPT, Perplexity, or Google AI Overviews for mortgage guidance. AI visibility audit by Hami Tahm — $1,500 CAD flat.",
};

/** Real Canadian homebuyer queries — must match case study / dashboard figures. */
const MORTGAGE_RESEARCH_QUERIES = [
  { query: "how much mortgage can I afford", citations: "51" },
  { query: "covering closing costs", citations: "39" },
  { query: "Canada mortgage 30 year amortization", citations: "15" },
  { query: "best mortgage options for combined household income", citations: "13" },
  { query: "Canada mortgage qualification rules", citations: "9" },
] as const;

const MORTGAGE_TOP_PAGES = [
  { path: "mortgage-qualifier-calculator", citations: "231" },
  { path: "closing-cost-calculator", citations: "194" },
  { path: "mortgage-affordability-calculator", citations: "74" },
] as const;

const BROKER_CHECKS = [
  "Whether your brokerage is mentioned when homebuyers ask for mortgage brokers in your city",
  "Which specialties AI engines associate with your business — first-time buyers, self-employed, refinance, commercial, private lending",
  "Whether AI tools recommend you for the qualification and affordability questions homebuyers ask before reaching out",
  "Accuracy of your service area, contact details, and lender relationships in AI-generated answers",
  "How your reviews and reputation are summarized across platforms",
  "Which sources AI engines pull from when describing your brokerage — and which are missing or contradicting each other",
] as const;

const PLATFORMS = [
  "ChatGPT (OpenAI)",
  "Perplexity",
  "Google AI Overviews",
  "Claude (Anthropic)",
  "Gemini",
  "Bing Copilot",
] as const;

const DELIVERABLES = [
  "A written report covering each platform — what AI says about your brokerage, what it gets wrong, and where you're invisible",
  "A prioritized action plan ranked by impact and effort",
  `A ${WALKTHROUGH_MINUTES}-minute walkthrough call to review findings and next steps`,
  "14 days of follow-up questions after delivery",
] as const;

const PROOF_STATS = [
  { value: HOMECALC_PROOF.citations, label: "AI citations" },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "Mortgage", label: "Vertical" },
] as const;

const COMPARISON_ROWS = [
  [
    "What it targets",
    "Citations in AI-generated answers",
    "Rankings on Google search results",
    "Paid delivery of prospective leads",
  ],
  [
    "Who your client is when they arrive",
    "Researching, in the qualification phase",
    "Searching, mixed intent",
    "Already deciding, often price-comparing across multiple brokers",
  ],
  [
    "Your control",
    "Full — it's your content and entity strategy",
    "Partial — you and the agency share it",
    "None — the platform controls the relationship",
  ],
  [
    "Pricing model",
    "$1,500 CAD audit, flat (one-time)",
    "Monthly retainer",
    "Per-lead cost",
  ],
  [
    "Proof available",
    "Public, named case study in your vertical (HomeCalc.ca)",
    "Varies",
    "Varies",
  ],
] as const;

const PERSONAS = [
  {
    label: "Independent mortgage brokers",
    desc: "Solo brokers who want their name in AI answers about Canadian mortgage qualification, not just buried in directory aggregators.",
  },
  {
    label: "Mortgage brokerage firms",
    desc: "Multi-broker offices where AI visibility is a brand-level asset and brokerage consistency across platforms is a marketing risk.",
  },
  {
    label: "Real estate agents with mortgage referral relationships",
    desc: "Agents whose referral pipeline depends on being associated with credible brokerage partners in AI answers.",
  },
  {
    label: "Brokers outside major cities",
    desc: "Practices in smaller markets where AI engines often default to brokerages in nearby larger cities, leaving local brokers missing from local-market answers.",
  },
] as const;

const FAQ_ITEMS: {
  q: string;
  a: string;
  auditLink?: boolean;
}[] = [
  {
    q: "Do Canadian homebuyers really use AI for mortgage research?",
    a: 'Yes. HomeCalc.ca, a Canadian mortgage calculator site, received over 1,100 AI citations in 30 days — across queries like "how much mortgage can I afford," "covering closing costs," and "Canada mortgage qualification rules." These are real questions Canadian homebuyers asked AI tools in May 2026. AI tools answered them. Brokerages who weren\'t cited weren\'t in the answer.',
  },
  {
    q: "How is this different from my current SEO?",
    a: "Mortgage SEO improves how your website ranks in Google's classic search results. AI visibility covers how AI platforms describe and recommend your brokerage when a homebuyer asks. You can rank #1 on Google and still be missing from the answer ChatGPT gives a homebuyer asking about qualification.",
  },
  {
    q: "Is this better than buying leads from Ratehub or LowestRates?",
    a: "It's different work. Lead gen platforms put you in front of clients who have already decided to compare brokers — usually on price. AI visibility puts your brokerage in the answer the client receives during research, before they decide what kind of broker they want. Most brokerages benefit from both, but the conversations coming from AI visibility tend to arrive less price-anchored.",
  },
  {
    q: "How quickly can I see results?",
    a: "HomeCalc.ca started seeing AI citations climb within 48 hours of implementing the audit's recommendations, with the full 1,100-citation lift visible in 30 days. Timelines vary by brokerage size, existing content footprint, and which gaps the audit identifies first.",
  },
  {
    q: "What exactly do I receive?",
    a: `A written report covering each AI platform, a prioritized action plan, a ${WALKTHROUGH_MINUTES}-minute walkthrough call, and 14 days of follow-up questions.`,
  },
  {
    q: "What does this cost?",
    a: `$1,500 CAD, flat. One-time payment, no retainer. See the full audit page for what's included.`,
    auditLink: true,
  },
  {
    q: "Do you work with independent brokers or only large brokerages?",
    a: "Both. Independent brokers often see the largest wins because AI engines tend to default to recognized brokerage brand names. The audit identifies exactly where an independent broker's name should appear and currently doesn't.",
  },
];

const RELATED_LINKS = [
  { label: "The full AI visibility audit", href: AUDIT_URL },
  {
    label: "HomeCalc case study — 1,100 AI citations in 30 days",
    href: CASE_STUDY_URL,
  },
  { label: "What is AI visibility?", href: "/ai-visibility/" },
  {
    label: "AI visibility for dental clinics",
    href: "/ai-visibility/ai-visibility-for-dental-clinics/",
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
          name: "AI Visibility for Mortgage Brokers",
          item: "https://hamitahm.com/ai-visibility/ai-visibility-for-mortgage-brokers/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Visibility Audit for Mortgage Brokers",
      serviceType: "AI Visibility Consulting",
      areaServed: "Canada",
      provider: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
        sameAs: "https://hamitahm.com/hami-tahm/",
      },
      url: "https://hamitahm.com/ai-visibility/ai-visibility-for-mortgage-brokers/",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ q, a, auditLink }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: auditLink
            ? `${PRICE_DISPLAY}, flat. One-time payment, no retainer. See the full audit page for what's included.`
            : a,
        },
      })),
    },
  ],
};

export default function AIVisibilityMortgageBrokers() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            <span>Mortgage Brokers</span>
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
              AI Visibility for Mortgage Brokers
            </h1>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              AI visibility for mortgage brokers is the practice of ensuring your
              brokerage appears — accurately and credibly — when homebuyers ask AI
              tools like ChatGPT, Perplexity, or Google AI Overviews for mortgage
              guidance. Hami Tahm audits mortgage brokerages across these platforms
              to identify where your business is missing from AI-generated answers,
              and delivers a prioritized action plan to fix it.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 24,
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 2.4vw, 24px)",
                fontWeight: 500,
                color: "var(--ink)",
                maxWidth: "48ch",
                lineHeight: 1.4,
              }}
            >
              Your clients are asking ChatGPT mortgage questions. Your brokerage
              probably isn&rsquo;t in the answer.
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 32 }}>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 2 — How Homebuyers Research ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              How Homebuyers Research Mortgages in 2025
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 24,
              }}
            >
              Before a Canadian homebuyer calls a broker, they research. That
              research used to happen on Google, Ratehub, and bank websites. A
              growing share now happens inside AI tools.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 16,
              }}
            >
              In May 2026, these are real queries Canadian homebuyers typed into AI
              tools — and the citations each query produced on HomeCalc.ca, a
              Canadian mortgage calculator site:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {MORTGAGE_RESEARCH_QUERIES.map(({ query, citations }) => (
                <li
                  key={query}
                  style={{
                    fontSize: "clamp(17px, 2vw, 19px)",
                    color: "var(--muted)",
                    lineHeight: 1.55,
                  }}
                >
                  <em style={{ fontStyle: "italic", color: "var(--ink)" }}>
                    {query}
                  </em>
                  {" — "}
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                    {citations} citations
                  </strong>
                </li>
              ))}
            </ul>
            <p
              className="dental-scenario-turn"
              style={{
                fontSize: "clamp(18px, 2.1vw, 21px)",
                color: "var(--muted)",
                lineHeight: 1.78,
              }}
            >
              These are not generic searches. These are the questions your clients
              ask before calling a broker. AI tools answered them. HomeCalc was
              cited. Your brokerage almost certainly wasn&rsquo;t.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — Definition ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <div className="local-panel" style={{ maxWidth: 740 }}>
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
                What AI Visibility Means for Your Brokerage
              </h2>
              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  marginTop: 24,
                  position: "relative",
                }}
              >
                What is AI visibility for mortgage brokers?
              </h3>
              <p
                style={{
                  marginTop: 16,
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                AI visibility for mortgage brokers refers to how your brokerage
                appears when Canadians ask AI tools mortgage questions — whether
                you&rsquo;re cited as a resource, recommended as a professional, or
                missing from the conversation entirely. Unlike Google SEO, AI
                visibility determines your presence in the research phase — before
                the client ever searches for a broker by name.
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                By the time a homebuyer is typing{" "}
                <em style={{ fontStyle: "italic" }}>
                  &ldquo;mortgage broker near me&rdquo;
                </em>{" "}
                into Google, they&rsquo;ve often already absorbed AI-generated
                guidance about qualification, closing costs, and what to look for in
                a broker. AI visibility is what happens upstream of that search.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 4 — Audit Scope ── */}
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
              What the Audit Covers for Mortgage Brokers
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="deliv" style={{ marginTop: 36 }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  What we check for your brokerage
                </h3>
                <BulletList items={BROKER_CHECKS} />
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
                  AI platforms covered
                </h3>
                <BulletList items={PLATFORMS} />
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: 28,
                    marginBottom: 16,
                  }}
                >
                  What you receive
                </h3>
                <BulletList items={DELIVERABLES} />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — Proof ── */}
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
                marginBottom: 24,
              }}
            >
              A Mortgage Calculator Site. 1,100 AI Citations. 30 Days.
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="cs-stat-strip" style={{ marginBottom: 28 }}>
              {PROOF_STATS.map(({ value, label }) => (
                <StatBox key={label} value={value} label={label} />
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div style={{ maxWidth: 740 }}>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                HomeCalc.ca is a Canadian financial calculator platform — mortgage
                qualifiers, closing-cost estimators, affordability tools. Under
                three months old at the time of the audit. After an AI visibility
                audit by Hami Tahm, HomeCalc went from near-zero AI citations to over{" "}
                {HOMECALC_PROOF.citations} across {HOMECALC_PROOF.pagesCited} pages
                in {HOMECALC_PROOF.timeframe}.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                The top pages getting cited are the same tools your clients are using
                to figure out what they can afford before they call you:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {MORTGAGE_TOP_PAGES.map(({ path, citations }) => (
                  <li
                    key={path}
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                      {path}
                    </strong>
                    {" — "}
                    {citations} citations
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                These pages are being cited because real homebuyers are asking real
                questions. HomeCalc is in the AI conversation. Most brokerages
                aren&rsquo;t.
              </p>
              <blockquote
                style={{
                  margin: "0 0 24px",
                  paddingLeft: 20,
                  borderLeft: "3px solid var(--accent)",
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(17px, 2vw, 19px)",
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;I identified a specific technical change that produced this
                lift. The methodology is part of what you receive in the
                audit.&rdquo;
              </blockquote>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 20,
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
                href={CASE_STUDY_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                Read the full HomeCalc case study <span>&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 24 }}>
              <PlaceholderCard note="Mortgage brokerage — case study publishing summer 2026" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 6 — Comparison ── */}
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
              AI Visibility vs Mortgage SEO vs Lead Generation Platforms
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              Mortgage brokers usually choose between three marketing investments.
              Here&rsquo;s how AI visibility compares.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <ComparisonTable
              columns={[
                "AI Visibility Audit",
                "Mortgage SEO Agency",
                "Lead Gen Platform (Ratehub, LowestRates)",
              ]}
              rows={COMPARISON_ROWS}
            />
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              Lead gen platforms put your name in front of clients who are already
              shopping. AI visibility puts your brokerage in the answer the client
              receives during research — when they&rsquo;re still deciding what kind
              of broker they need.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 7 — How It Works ── */}
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
              How It Works
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
                body="I review your brokerage across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot."
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

      {/* ── 8 — Who This Is For ── */}
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
              {PERSONAS.map(({ label, desc }) => (
                <div key={label} className="vert">
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 600,
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
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 9 — FAQ ── */}
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
              {FAQ_ITEMS.map(({ q, a, auditLink }) => (
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
                    {auditLink ? (
                      <>
                        {PRICE_DISPLAY}, flat. One-time payment, no retainer.
                        See the{" "}
                        <Link href={AUDIT_URL} style={{ color: "var(--accent)" }}>
                          full audit page
                        </Link>{" "}
                        for what&rsquo;s included.
                      </>
                    ) : (
                      a
                    )}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 10 — Related Reading ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.14,
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

      {/* ── 11 — Final CTA ── */}
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
                Book Your Mortgage Broker AI Visibility Audit
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
                Ready to find out if homebuyers can find your brokerage in AI search?
              </p>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                {PRICE_DISPLAY} flat. Report and walkthrough call within{" "}
                {TURNAROUND}.
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

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item} className="d-row">
          <span style={{ color: "var(--accent)", flexShrink: 0 }}>&rarr;</span>
          <span style={{ color: "var(--muted)", fontSize: 15 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="proof-card">
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(28px, 3.5vw, 36px)",
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "-.02em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 14,
          color: "var(--muted)",
          marginTop: 10,
          lineHeight: 1.45,
        }}
      >
        {label}
      </div>
    </div>
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

function ComparisonTable({
  columns,
  rows,
}: {
  columns: readonly [string, string, string];
  rows: readonly (readonly [string, string, string, string])[];
}) {
  return (
    <>
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
              <th style={{ padding: "12px 12px 12px 0", width: "18%" }} />
              {columns.map((col) => (
                <th
                  key={col}
                  style={{
                    textAlign: "left",
                    padding: 12,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b, c]) => (
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
                {[a, b, c].map((cell, i) => (
                  <td
                    key={i}
                    style={{
                      padding: 14,
                      color: "var(--muted)",
                      verticalAlign: "top",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="audit-comparison-mobile" style={{ marginTop: 32 }}>
        {columns.map((title, colIndex) => (
          <div key={title} className="proof-card" style={{ marginBottom: 14 }}>
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
            {rows.map(([label, a, b, c]) => {
              const value = [a, b, c][colIndex];
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
    </>
  );
}

function PlaceholderCard({ note }: { note: string }) {
  return (
    <div
      className="proof-card dental-coming-soon-card"
      style={{ borderStyle: "dashed", maxWidth: 420 }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
        }}
      >
        Coming soon
      </div>
      <p
        style={{
          marginTop: 10,
          fontFamily: "var(--sans)",
          fontSize: 15,
          fontWeight: 600,
          color: "var(--ink)",
          lineHeight: 1.5,
        }}
      >
        {note}
      </p>
    </div>
  );
}
