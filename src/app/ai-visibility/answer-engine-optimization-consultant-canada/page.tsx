import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const GEO_URL = "/ai-visibility/generative-engine-optimization-consultant-canada/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: {
    absolute:
      "Answer Engine Optimization (AEO) Consultant — Canada",
  },
  description:
    "AEO helps Canadian businesses get cited by ChatGPT, Perplexity, and Google AI Overviews. Consultant-led by Hami Tahm — starts with a $1,500 audit.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
  },
};

const CONSULTANT_WORK = [
  {
    title: "Content structure audit",
    body: "Reviewing how your existing pages are structured — heading hierarchy, schema, answer formatting, internal linking — to identify which pages are extractable by AI engines and which are not. The output is a prioritized list of structural fixes ranked by how much extraction lift each will produce.",
  },
  {
    title: "Answer-format optimization",
    body: "Rewriting and restructuring critical pages so AI engines can extract clear, standalone answers to the questions your customers ask. This is page-level work — title, opening paragraph, subheadings, FAQ sections — done with extractability as the primary design constraint.",
  },
  {
    title: "Platform-specific strategy",
    body: "Different AI engines weight different signals. Google AI Overviews favors structured data and authority signals. ChatGPT favors clear definitions and answerable paragraphs. Perplexity favors source diversity and citation density. Strategy is built per platform, not as one-size-fits-all.",
  },
] as const;

const PROOF_STATS = [
  { value: HOMECALC_PROOF.citations, label: "AI citations" },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "YMYL", label: "Category" },
] as const;

const COMPARISON_ROWS = [
  [
    "Who does the work",
    "Hami Tahm, personally",
    "Account manager and junior team",
    "Algorithm, no human review",
  ],
  [
    "Methodology transparency",
    "Documented and delivered to you",
    "Held internally, rarely shared",
    "Generic dashboard rules",
  ],
  [
    "Content customization",
    "Built per page for your business",
    "Templated across clients",
    "None — same recommendations for everyone",
  ],
  [
    "Pricing model",
    "Starts with $1,500 CAD audit, no retainer",
    "Monthly retainer",
    "Monthly subscription",
  ],
  [
    "Proof available",
    "Public, named case study (HomeCalc.ca)",
    "Rarely public",
    "None",
  ],
] as const;

const PROCESS_STEPS = [
  {
    title: "Discover",
    body: "Baseline where your content is cited — and where AI engines skip it entirely — across the platforms that matter to your buyers.",
  },
  {
    title: "Audit",
    body: "Prioritized gaps ranked by citation and extraction impact, delivered as a written plan you can act on immediately.",
  },
  {
    title: "Implement",
    body: "Your team executes the changes; I review, adjust priorities, and keep the work aligned to outcomes.",
  },
  {
    title: "Measure",
    body: "Track citation lift over time and refine what works — so improvements compound instead of stalling.",
  },
] as const;

const PERSONAS = [
  {
    label: "High-ticket service businesses",
    desc: "Dental, mortgage, legal, and financial advisory firms — highest ROI from AI citations because each new client is worth more.",
  },
  {
    label: "B2B SaaS",
    desc: "Products with research-heavy buyer journeys where comparison and evaluation queries dominate AI search.",
  },
  {
    label: "Local services in competitive categories",
    desc: "Businesses where \"best [service] near me\" is now an AI query — not just a Google map search.",
  },
  {
    label: "In-house marketing teams",
    desc: "CMOs and marketing leads at established companies — you have a team that can execute; you need outside expertise to identify the highest-leverage AI moves first.",
  },
] as const;

const PLACEHOLDER_CASE_STUDIES = [
  {
    label: "First AEO consulting case study",
    note: "Coming summer 2026",
  },
  {
    label: "High-ticket service client",
    note: "Case study coming summer 2026",
  },
] as const;

const FAQ_ITEMS: {
  q: string;
  a?: string;
  geoLink?: boolean;
}[] = [
  {
    q: "What is the difference between AEO and SEO?",
    a: "SEO optimizes how your page ranks among search results — users click through to read it. AEO optimizes how AI engines extract content directly from your page and use it to generate an answer — users often never visit your site. The two share some signals but reward different content structures.",
  },
  {
    q: "What is the difference between AEO and GEO?",
    geoLink: true,
  },
  {
    q: "How long does AEO take to show results?",
    a: `HomeCalc.ca saw citations climb within 48 hours of implementing the audit's recommendations, with the ${HOMECALC_CLAIMS.fullLiftVisible}. Timelines vary by site, page count, and existing authority — but structural changes tend to produce measurable shifts within weeks, not months.`,
  },
  {
    q: "Do I need AEO if I already rank on Google?",
    a: "Often, yes. Most businesses ranking #1 on Google are still missing from AI-generated answers. AI engines pull from many more sources than Google search results and weight different signals. Strong SEO is helpful but not sufficient on its own.",
  },
  {
    q: "What does an AEO consultant actually deliver?",
    a: "A written audit covering each AI platform, a prioritized list of structural changes ranked by impact, page-level rewrites where needed, platform-specific recommendations, and direct support during implementation. The audit is the entry point.",
  },
  {
    q: "How much does this cost?",
    a: `The starting point is a ${PRICE_DISPLAY} AI visibility audit — flat fee, one-time. Most engagements begin and end with the audit; clients implement internally. Ongoing consulting is scoped per project after the audit completes.`,
  },
  {
    q: "Can I do AEO myself with tools?",
    a: "Tools tell you where you're cited. They don't tell you why you're not cited elsewhere or what specific changes to make. If you have the technical and content skills to interpret tool data and design the fix, DIY is viable. If you want one person who has done this before to identify what to change first, hire a consultant.",
  },
];

const RELATED_LINKS = [
  {
    label: "What is answer engine optimization?",
    href: "/blog/what-is-answer-engine-optimization/",
  },
  {
    label: "AEO vs GEO vs SEO — the differences explained",
    href: "/blog/aeo-vs-geo-vs-seo/",
  },
  {
    label: "Generative engine optimization consulting",
    href: GEO_URL,
  },
  { label: "HomeCalc case study", href: CASE_STUDY_URL },
  { label: "What is AI visibility?", href: "/ai-visibility/" },
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
          name: "Answer Engine Optimization Consultant Canada",
          item: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Answer Engine Optimization Consulting",
      serviceType: "AEO Consulting",
      areaServed: "Canada",
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ q, a, geoLink }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: geoLink
            ? "AEO addresses how AI engines extract answers from your existing content. GEO addresses how AI engines generate responses about your brand from across the web. AEO is page-level optimization; GEO is entity-level positioning. Most businesses need both, but each is a distinct discipline."
            : a!,
        },
      })),
    },
  ],
};

export default function AEOConsultantCanada() {
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
            <span>AEO Consultant</span>
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
                fontSize: "clamp(36px, 5.2vw, 58px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "24ch",
              }}
            >
              Answer Engine Optimization: Get Found When Customers Ask AI
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
              Answer engine optimization (AEO) is the practice of structuring your
              content so AI-powered platforms — ChatGPT, Perplexity, and Google AI
              Overviews — can extract it as a direct answer to user questions. Hami
              Tahm works with Canadian businesses as an answer engine optimization
              consultant to identify where their content is being ignored by AI
              engines and build a strategy to fix it.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                color: "var(--faint)",
                maxWidth: "52ch",
                lineHeight: 1.55,
              }}
            >
              Also offer{" "}
              <Link href={GEO_URL} style={{ color: "var(--accent)" }}>
                GEO consulting &rarr;
              </Link>
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 32 }}>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Start With an AI Visibility Audit{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 2 — What Is AEO ── */}
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
              What Is Answer Engine Optimization?
            </h2>
            <div className="local-panel" style={{ maxWidth: 740 }}>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                Answer engine optimization is what determines whether AI platforms
                summarize your content — or skip it entirely. SEO optimizes for
                ranking. AEO optimizes for citation. The page that wins on Google
                isn&rsquo;t always the page AI engines quote when a user asks a
                question.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div style={{ maxWidth: 740, marginTop: 36 }}>
              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                AEO vs SEO — the key difference
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                SEO optimizes how your page ranks among a list of search results
                — the user still clicks through to read it. AEO optimizes how AI
                engines pull from your page directly, summarize what they find, and
                present it as an answer. The user often never visits your site. Both
                matter, but they reward different things: SEO rewards relevance and
                authority signals; AEO rewards structure, clarity, and
                extractability.
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "var(--faint)",
                  marginBottom: 32,
                }}
              >
                For the full comparison:{" "}
                <Link href="/blog/aeo-vs-geo-vs-seo/" style={{ color: "var(--accent)" }}>
                  AEO vs GEO vs SEO &rarr;
                </Link>
              </p>

              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                AEO vs GEO — why they&rsquo;re separate disciplines
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                AEO and GEO are related but distinct. AEO addresses how AI engines
                extract answers from your existing content — structure, format,
                clarity. GEO addresses how AI engines generate responses about your
                brand from across the web — entity signals, source diversity,
                citation density. AEO is about being extractable; GEO is about being
                represented. Most businesses need both, but each is a separate
                practice.
              </p>
              <p style={{ fontSize: 14, fontStyle: "italic", color: "var(--faint)" }}>
                If your goal is specifically GEO:{" "}
                <Link href={GEO_URL} style={{ color: "var(--accent)" }}>
                  See GEO consulting &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — What an AEO Consultant Does ── */}
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
                marginBottom: 16,
              }}
            >
              What an AEO Consultant Does
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              Three areas of work, each delivered as concrete output you can hand
              to a developer or content team.
            </p>
          </RevealSection>
          <RevealSection delay={0.06}>
            <div className="inc-grid">
              {CONSULTANT_WORK.map(({ title, body }) => (
                <div key={title} className="inc">
                  <h3
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.55,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 4 — Proof ── */}
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
              Results — Proof of Methodology
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
                HomeCalc.ca, a Canadian personal finance calculator site under
                three months old, went from near-zero AI citations to over{" "}
                {HOMECALC_PROOF.citations} across {HOMECALC_PROOF.pagesCited}{" "}
                pages in {HOMECALC_PROOF.timeframe}. The lift covered ChatGPT,
                Perplexity, and Google AI Overviews — the same three platforms AEO
                targets.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc operates in YMYL —{" "}
                <em style={{ fontStyle: "italic" }}>Your Money or Your Life</em>{" "}
                — Google&rsquo;s strictest content category. AI engines are more
                cautious about citing YMYL content than almost anything else. The
                methodology cleared that bar on a brand-new domain with no
                traditional authority.
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
                Each engagement is led personally by{" "}
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
            <div className="proof-grid" style={{ marginTop: 24 }}>
              {PLACEHOLDER_CASE_STUDIES.map(({ label, note }) => (
                <PlaceholderCard key={label} label={label} note={note} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — Comparison ── */}
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
              AEO Consultant vs AEO Agency vs DIY AEO Tools
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "48ch",
                lineHeight: 1.65,
              }}
            >
              Three ways to approach AEO. Here&rsquo;s the trade-off.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <ComparisonTable
              columns={[
                "AEO Consultant (Hami Tahm)",
                "AEO Agency",
                "DIY AEO Tools",
              ]}
              rows={COMPARISON_ROWS}
            />
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              Tools are useful for monitoring. Agencies are useful at scale. A
              consultant is useful when you want one person who has done this
              before to look at your specific situation and tell you what to change
              first.
            </p>
            <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
              For tool comparisons:{" "}
              <Link
                href="/blog/best-ai-visibility-tools/"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Best AI visibility tools &rarr;
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 6 — How I Work ── */}
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
              How I Work With Clients
            </h2>
          </RevealSection>
          <RevealSection delay={0.06}>
            <div style={{ marginTop: 32 }}>
              {PROCESS_STEPS.map(({ title, body }, i) => (
                <ProcessStep key={title} n={String(i + 1)} title={title} body={body} />
              ))}
            </div>
            <p
              style={{
                marginTop: 28,
                fontFamily: "var(--serif)",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.5,
                paddingTop: 24,
                borderTop: "1px solid var(--line)",
              }}
            >
              Start with the audit. Everything else follows from what it reveals.
            </p>
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
              {FAQ_ITEMS.map(({ q, a, geoLink }) => (
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
                    {geoLink ? (
                      <>
                        AEO addresses how AI engines extract answers from your
                        existing content. GEO addresses how AI engines generate
                        responses about your brand from across the web. AEO is
                        page-level optimization; GEO is entity-level positioning.
                        Most businesses need both, but each is a distinct
                        discipline. For GEO specifically, see{" "}
                        <Link href={GEO_URL} style={{ color: "var(--accent)" }}>
                          GEO consulting
                        </Link>
                        .
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

      {/* ── 9 — Related Service: GEO ── */}
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
                marginBottom: 20,
              }}
            >
              Related Service — GEO Consulting
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              If your goal is specifically how generative AI engines describe and
              synthesize your brand across the web — not how they extract answers
              from your specific pages — that&rsquo;s a separate practice.
              Generative engine optimization (GEO) addresses entity signals,
              source diversity across third-party sites, and how AI engines compose
              responses about you when they generate from scratch rather than
              extract.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              Most businesses need both AEO and GEO over time. The right starting
              point depends on what&rsquo;s most broken first.
            </p>
            <Link
              href={GEO_URL}
              style={{
                fontSize: 16,
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              Generative Engine Optimization Consulting in Canada &rarr;
            </Link>
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
                Work With Me
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
                Ready to find out how your content performs in AI search?
              </p>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                Start with a {PRICE_DISPLAY} AI visibility audit. Report and
                walkthrough call within {TURNAROUND}.
              </p>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  color: "var(--muted)",
                  maxWidth: "52ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Most AEO engagements start with the AI Visibility Audit (
                {PRICE_DISPLAY}, {TURNAROUND}). After the audit, we scope ongoing
                work based on what we find.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 24, position: "relative" }}
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

function PlaceholderCard({ label, note }: { label: string; note: string }) {
  return (
    <div className="proof-card" style={{ borderStyle: "dashed", opacity: 0.9 }}>
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
      <div
        style={{
          marginTop: 10,
          fontFamily: "var(--sans)",
          fontSize: 15,
          fontWeight: 600,
          color: "var(--ink)",
        }}
      >
        {label}
      </div>
      <p
        style={{
          marginTop: 8,
          fontFamily: "var(--sans)",
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.5,
        }}
      >
        {note}
      </p>
    </div>
  );
}
