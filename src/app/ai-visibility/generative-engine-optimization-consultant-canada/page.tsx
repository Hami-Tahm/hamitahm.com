import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const AEO_URL =
  "/ai-visibility/answer-engine-optimization-consultant-canada/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: "Generative Engine Optimization Consultant in Canada | Hami Tahm",
  description:
    "Generative engine optimization (GEO) helps Canadian businesses get recognized and cited by ChatGPT, Perplexity, and Google Gemini. Consultant-led GEO by Hami Tahm — starts with a $1,500 CAD audit.",
};

const CONSULTANT_WORK = [
  {
    title: "Entity signal building",
    body: "Establishing your business as a clearly identified entity across the web — Wikidata, third-party directories, structured data, consistent naming across sources. AI models build their understanding of who you are from these signals. Inconsistent or missing entity data is the most common reason AI engines skip a brand even when its content is strong.",
  },
  {
    title: "Citation authority development",
    body: "Building the source diversity that causes AI models to treat your brand as trustworthy. This means earning mentions across high-trust third-party sites — not just publishing on your own domain. AI engines weight citations from sources outside your control more heavily than what you say about yourself.",
  },
  {
    title: "Content structure for generative AI",
    body: "Restructuring how your core content is organized so generative AI systems can synthesize it into responses. This is different from formatting for extraction — GEO content structure focuses on clear claims, source attribution, and contextual completeness so an AI model can build an answer around your information rather than around a competitor's.",
  },
  {
    title: "Platform-specific strategy",
    body: "ChatGPT, Perplexity, Gemini, and Claude each compose responses differently. ChatGPT favors brand recognition and clear positioning. Perplexity favors source citation density. Gemini weights Google's broader entity graph. Claude favors content depth and source attribution. Strategy is built per platform — not as one campaign.",
  },
] as const;

const PROOF_STATS = [
  { value: HOMECALC_PROOF.citations, label: "AI citations" },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "None", label: "Domain authority" },
] as const;

const COMPARISON_ROWS = [
  [
    "Who builds the strategy",
    "Hami Tahm, personally",
    "Account manager and team",
    "No one — software shows data only",
  ],
  [
    "Methodology",
    "Custom entity and citation strategy",
    "Templated approach across clients",
    "Automated tracking, no strategy",
  ],
  [
    "Deliverable",
    "GEO action plan + implementation support",
    "Periodic report",
    "Dashboard and alerts",
  ],
  [
    "Proof available",
    "Public, named case study (HomeCalc.ca)",
    "Rarely public",
    "Customer metrics, no case studies",
  ],
  [
    "Pricing model",
    "Starts with $1,500 CAD audit, no retainer",
    "Monthly retainer",
    "Monthly subscription",
  ],
] as const;

const PROCESS_STEPS = [
  {
    title: "AI visibility audit",
    body: "Where AI models recognize you, where they don't, and which entity signals are missing or inconsistent.",
  },
  {
    title: "Entity gap analysis",
    body: "What AI engines currently believe about your brand — and where the gaps in their understanding are largest.",
  },
  {
    title: "GEO strategy",
    body: "A prioritized plan to build the right entity signals, citation authority, and content structure for your specific business.",
  },
  {
    title: "Implementation and citation monitoring",
    body: "Your team executes the plan; I monitor citation lift across platforms and adjust.",
  },
] as const;

const PERSONAS = [
  {
    label: "Businesses missing from AI answers",
    desc: "Companies that rank on Google but never appear when AI models generate responses about your category.",
  },
  {
    label: "B2B services and professional firms",
    desc: "Consulting, agency, healthcare, and financial firms whose buyers research via AI before any conversation.",
  },
  {
    label: "Multi-location businesses",
    desc: "Brands where entity consistency across the web is a brand risk, not just a marketing one.",
  },
  {
    label: "In-house marketing teams",
    desc: "CMOs and marketing leads at established companies — you have a team that can execute; you need outside expertise to identify the highest-leverage AI moves first.",
  },
] as const;

const PLACEHOLDER_CASE_STUDIES = [
  {
    label: "First GEO consulting case study",
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
  aeoLink?: boolean;
}[] = [
  {
    q: "What is the difference between GEO and SEO?",
    a: "SEO improves where your page ranks among search results — the user still chooses what to click. GEO improves whether AI models reference your brand at all when they generate an answer. SEO rewards relevance and backlinks; GEO rewards entity recognition and citation density across reputable sources.",
  },
  {
    q: "What is the difference between GEO and AEO?",
    aeoLink: true,
  },
  {
    q: "What is generative AI visibility software — and do I need a consultant instead?",
    a: "Generative AI visibility software (Peec, Profound, AirOps, and similar tools) tracks where and how AI engines mention your brand. They give you data. A GEO consultant interprets the data, identifies the entity gaps software can't see, and builds the strategy to close them. Most businesses benefit from both — software for ongoing monitoring, a consultant for strategy.",
  },
  {
    q: "How quickly can I see GEO results?",
    a: "HomeCalc.ca saw AI citations begin climbing within 48 hours of implementing the audit's recommendations, with the full 1,100-citation lift visible in 30 days. Timelines vary by existing entity signal strength, source diversity, and how much rebuilding is required.",
  },
  {
    q: "What do I receive when working with a GEO consultant?",
    a: "A written audit covering each AI model, an entity signal gap analysis, a prioritized GEO action plan, platform-specific recommendations, and direct support during implementation. The audit is the entry point.",
  },
  {
    q: "How much does this cost?",
    a: `The starting point is a ${PRICE_DISPLAY} AI visibility audit — flat fee, one-time. Most engagements begin and end with the audit; clients implement internally. Ongoing consulting is scoped per project after the audit completes.`,
  },
  {
    q: "Do I need both AEO and GEO?",
    aeoLink: true,
  },
];

const RELATED_LINKS = [
  {
    label: "AEO vs GEO vs SEO — the differences explained",
    href: "/blog/aeo-vs-geo-vs-seo/",
  },
  {
    label: "Peec vs Profound vs AirOps — generative AI visibility software compared",
    href: "/blog/peec-vs-profound-vs-airops/",
  },
  {
    label: "Answer engine optimization consulting",
    href: AEO_URL,
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
          name: "Generative Engine Optimization Consultant Canada",
          item: "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Generative Engine Optimization Consulting",
      serviceType: "GEO Consulting",
      areaServed: "Canada",
      provider: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
        sameAs: "https://hamitahm.com/hami-tahm/",
      },
      url: "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ q, a, aeoLink }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: aeoLink
            ? q === "What is the difference between GEO and AEO?"
              ? "GEO addresses whether AI models trust and recognize your brand enough to cite it — entity-level work. AEO addresses how your existing content is formatted so AI engines can extract a direct answer from it — page-level work. GEO is about being represented; AEO is about being extractable. Most businesses need both."
              : "Often, yes. AEO and GEO solve different problems — extraction vs recognition — and most businesses have gaps in both. The audit reveals which gap is bigger for your specific situation."
            : a!,
        },
      })),
    },
  ],
};

export default function GEOConsultantCanada() {
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
            <span>GEO Consultant</span>
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
              Generative Engine Optimization Consultant in Canada
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
              Generative engine optimization (GEO) is the practice of building the
              authority, entity signals, and content structure that cause AI models
              — ChatGPT, Perplexity, and Google Gemini — to recognize, trust, and
              cite your business in their generated responses. As a generative
              engine optimization consultant, Hami Tahm works with Canadian
              businesses to identify why AI models are overlooking their brand and
              build a strategy to change that.
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
              <Link href={AEO_URL} style={{ color: "var(--accent)" }}>
                AEO consulting &rarr;
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

      {/* ── 2 — What Is GEO ── */}
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
              What Is Generative Engine Optimization?
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
                Generative engine optimization is what determines whether AI
                models cite your business as a source — or generate responses that
                leave you out entirely. GEO is about being recognized as authoritative
                across the web, not just being readable on a single page. AI models
                build their answers from what they trust; GEO is the work of becoming
                trusted.
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
                GEO vs SEO — what&rsquo;s different
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 32,
                }}
              >
                SEO improves where your page sits in a list of search results — the
                user still chooses what to click. GEO improves whether AI models
                reference your brand at all when they compose an answer — there&rsquo;s
                no list to rank on. Either you&rsquo;re cited, or you&rsquo;re not. SEO
                rewards relevance and backlinks; GEO rewards entity recognition,
                citation density across reputable sources, and clarity of what your
                business represents.
              </p>

              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                GEO vs AEO — two distinct disciplines
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                GEO and AEO solve different problems. AEO focuses on how your
                existing content is formatted so AI engines can extract a direct
                answer from it — page-level structural work. GEO focuses on whether
                AI models trust and recognize your brand enough to cite it at all —
                entity-level positioning across the web. AEO is about being
                extractable; GEO is about being represented. Most businesses need
                both, but each is a separate practice.
              </p>

              <div
                style={{
                  overflowX: "auto",
                  marginBottom: 20,
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                }}
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
                    <tr style={{ borderBottom: "1px solid var(--line-strong)" }}>
                      <th style={{ padding: 12, width: "20%" }} />
                      <th
                        style={{
                          padding: 12,
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                      >
                        AEO
                      </th>
                      <th
                        style={{
                          padding: 12,
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                      >
                        GEO
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--line)" }}>
                      <td
                        style={{
                          padding: 12,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        Optimizes
                      </td>
                      <td style={{ padding: 12, color: "var(--muted)" }}>
                        Page-level extraction
                      </td>
                      <td style={{ padding: 12, color: "var(--muted)" }}>
                        Entity-level recognition
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 12,
                          fontWeight: 600,
                          color: "var(--ink)",
                        }}
                      >
                        Focus
                      </td>
                      <td style={{ padding: 12, color: "var(--muted)" }}>
                        Format and structure of your content
                      </td>
                      <td style={{ padding: 12, color: "var(--muted)" }}>
                        Authority and trust signals across the web
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "var(--faint)",
                  marginBottom: 12,
                }}
              >
                If your goal is specifically AEO:{" "}
                <Link href={AEO_URL} style={{ color: "var(--accent)" }}>
                  See AEO consulting &rarr;
                </Link>
              </p>
              <p style={{ fontSize: 14, fontStyle: "italic", color: "var(--faint)" }}>
                For the full comparison:{" "}
                <Link
                  href="/blog/aeo-vs-geo-vs-seo/"
                  style={{ color: "var(--accent)" }}
                >
                  AEO vs GEO vs SEO &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — What a GEO Consultant Does ── */}
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
              What a GEO Consultant Does
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
              Four areas of work, each focused on making AI models recognize and
              cite your business.
            </p>
          </RevealSection>
          <RevealSection delay={0.06}>
            <div className="audit-verts-2x2">
              {CONSULTANT_WORK.map(({ title, body }) => (
                <div key={title} className="vert">
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
                GEO is about being cited. HomeCalc.ca, a Canadian personal finance
                calculator site under three months old, went from near-zero AI
                citations to over {HOMECALC_PROOF.citations} across{" "}
                {HOMECALC_PROOF.pagesCited} pages in {HOMECALC_PROOF.timeframe}.
                Citations appeared across ChatGPT, Perplexity, and Google AI
                Overviews — the same platforms GEO targets.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc launched with no traditional domain authority. No backlink
                portfolio. No years of indexed content. No brand recognition. The
                lift came from building the right authority signals — exactly the work
                GEO is built on.
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
              GEO Consultant vs GEO Agency vs Generative AI Visibility Software
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
              Three ways to approach GEO. Each solves a different part of the
              problem.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <ComparisonTable
              columns={[
                "GEO Consultant (Hami Tahm)",
                "GEO Agency",
                "Generative AI Visibility Software",
              ]}
              rows={COMPARISON_ROWS}
            />
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              Software is useful for monitoring your citation patterns over time.
              Agencies make sense at scale. A consultant makes sense when you want
              one person to look at why AI models aren&rsquo;t citing your business
              specifically — and build the entity strategy to change that.
            </p>
            <p style={{ marginTop: 12, fontSize: 15, color: "var(--muted)" }}>
              For software comparisons:{" "}
              <Link
                href="/blog/peec-vs-profound-vs-airops/"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Peec vs Profound vs AirOps &rarr;
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
              Start with the audit. The GEO strategy follows from what it reveals.
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
              {FAQ_ITEMS.map(({ q, a, aeoLink }) => (
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
                    {aeoLink && q === "What is the difference between GEO and AEO?" ? (
                      <>
                        GEO addresses whether AI models trust and recognize your
                        brand enough to cite it — entity-level work. AEO addresses
                        how your existing content is formatted so AI engines can
                        extract a direct answer from it — page-level work. GEO is
                        about being represented; AEO is about being extractable. Most
                        businesses need both. For AEO specifically, see{" "}
                        <Link href={AEO_URL} style={{ color: "var(--accent)" }}>
                          AEO consulting
                        </Link>
                        .
                      </>
                    ) : aeoLink ? (
                      <>
                        Often, yes. AEO and GEO solve different problems —
                        extraction vs recognition — and most businesses have gaps in
                        both. The audit reveals which gap is bigger for your specific
                        situation. If AEO is the dominant problem, the strategy
                        focuses there first. If it&rsquo;s GEO, the strategy focuses
                        there. See{" "}
                        <Link href={AEO_URL} style={{ color: "var(--accent)" }}>
                          AEO consulting
                        </Link>{" "}
                        for the AEO side.
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

      {/* ── 9 — Related Service: AEO ── */}
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
              Related Service — AEO Consulting
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              If your goal is specifically optimizing how your existing pages are
              structured so AI engines can extract clear answers from them — not the
              broader question of whether AI models recognize your brand across the
              web — that&rsquo;s a separate practice. Answer engine optimization (AEO)
              is page-level work; GEO is entity-level positioning.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              Most businesses end up needing both. The audit reveals which to start
              with.
            </p>
            <Link
              href={AEO_URL}
              style={{
                fontSize: 16,
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              Answer Engine Optimization Consulting in Canada &rarr;
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
                Ready to find out why AI models aren&rsquo;t citing your business?
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
                Most GEO engagements start with the AI Visibility Audit (
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
