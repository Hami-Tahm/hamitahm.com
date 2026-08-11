import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS, HOMECALC_HEADLINE_STAT } from "@/lib/homecalc-proof";

/**
 * ── WHY THIS PAGE READS MORE CAUTIOUSLY THAN MOST GEO PAGES (2026-08-11) ──
 *
 * The previous version made mechanism claims with nothing behind them: that GEO
 * "determines" whether models cite you, that ChatGPT "favors brand recognition",
 * that Perplexity "favors citation density", that missing entity data is "the most
 * common reason" engines skip a brand. None of that is established anywhere.
 *
 * The two papers below are the actual literature. The 2026 survey reviewed 45
 * studies and concluded, in its own words, that "no reviewed technique shows a
 * stable, longitudinal, cross-platform causal effect on organic discoverability or
 * downstream behavior" — and, worth noting for anyone selling this work, that
 * "citation-oriented rewrites can impair retrieval". Confident mechanism claims on
 * this page were not just unsupported; some of them describe tactics the evidence
 * says can backfire.
 *
 * RULE: on this page, describe what is measured and what is uncertain. Selling a
 * developing practice honestly is a stronger position than pretending it is solved
 * — every competitor's page pretends.
 */
const GEO_PAPER_URL = "https://arxiv.org/abs/2311.09735";
const GEO_SURVEY_URL = "https://arxiv.org/abs/2607.14035";
const GOOGLE_AI_GUIDE_URL =
  "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const AEO_URL =
  "/ai-visibility/answer-engine-optimization-consultant-canada/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const TURNAROUND = "7 business days";

const SRC_LINK = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
} as const;

/**
 * Separating these stages is the single most useful thing on this page. Almost every
 * GEO pitch collapses them into one "visibility score", which hides the fact that
 * the last row — the only one that pays for anything — is never reported by any AI
 * platform.
 */
const MEASUREMENT_STAGES = [
  {
    stage: "Discoverability",
    metric:
      "Indexed URLs, crawlability, whether each engine's fetcher can reach the page at all.",
  },
  {
    stage: "Mentions",
    metric: "How often the brand or entity is named in an answer, with or without a link.",
  },
  {
    stage: "Citations",
    metric:
      "Which specific URLs are cited, and how often. Only Bing Webmaster Tools reports this directly; Google reports impressions only.",
  },
  {
    stage: "Prominence",
    metric: "Where in the answer you appear, and how much of it is yours versus a competitor's.",
  },
  {
    stage: "Business outcome",
    metric:
      "Referral traffic, qualified enquiries, closed work. No AI platform reports this; it comes from your own analytics. It is also the only row that pays for anything.",
  },
] as const;
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: {
    absolute:
      "Generative Engine Optimization Consultant Canada | Hami Tahm",
  },
  description:
    "Canadian GEO consultant helping businesses measure and improve how they are retrieved, mentioned and cited across Google AI, Copilot, ChatGPT, Perplexity, Gemini and Claude. Flat-fee audit, $1,500 CAD. No placement guaranteed.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/",
  },
};

const CONSULTANT_WORK = [
  {
    title: "Entity signal building",
    body: "Making it unambiguous who you are, what you sell and where — consistent organization details, authoritative profiles, structured information on your own site, and independently verifiable references. Inconsistent entity information is one of several reasons a brand goes missing from answers; the audit tells you whether it is yours. Wikidata only comes into it where an entity genuinely meets the notability bar.",
  },
  {
    title: "Citation authority development",
    body: "Earning coverage on sources you do not control. A claim only you make is weaker evidence than one others repeat, and independent references improve corroboration, discovery and credibility. Treat that as sound reasoning rather than a measured weighting — no engine publishes how it scores third-party sources.",
  },
  {
    title: "Content structure for generative AI",
    body: "Restructuring how your core content is organized so generative AI systems can synthesize it into responses. This is different from formatting for extraction — GEO content structure focuses on clear claims, source attribution, and contextual completeness so an AI model can build an answer around your information rather than around a competitor's.",
  },
  {
    title: "Platform-specific strategy",
    body: "Platforms differ in when they search at all, what they retrieve from, how fresh their sources are, how they present citations, and how much their answers vary between runs. So I test each one separately rather than assuming a tactic transfers. You will see confident claims elsewhere about what each engine \'favours\' — those are folklore, not findings. My recommendations come from repeated, dated observations on your own domain.",
  },
] as const;

const PROOF_STATS = [
  { value: HOMECALC_HEADLINE_STAT.value, label: HOMECALC_HEADLINE_STAT.label },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  // "Domain authority: None" was removed 2026-08-11. Domain Authority is a
  // third-party vendor score, not a Google metric, so "none" was asserting a
  // number that has no official existence. Replaced with something first-party.
  { value: "Owned", label: "Property type" },
] as const;

const COMPARISON_ROWS = [
  [
    "Who builds the strategy",
    "Hami Tahm, personally",
    "Account manager and team",
    "No one — software shows data only",
  ],
  // ⚠️ This table used to assert that agencies "rarely publish proof", use a
  // "templated approach", and that software companies have "no case studies".
  // I have no basis for any of that, and a page arguing for careful claims cannot
  // make careless ones about competitors. Each column now states a real trade-off,
  // including mine.
  [
    "Best suited to",
    "Direct access to one senior person, fixed scope",
    "Multi-discipline execution and larger programmes",
    "Repeated monitoring and trend analysis",
  ],
  [
    "Deliverable",
    "Written audit, action plan, implementation support",
    "Ongoing programme of work",
    "Dashboard and alerts",
  ],
  [
    "Usual limitation",
    "Limited delivery capacity — one person",
    "Higher cost and more handoffs",
    "Still needs someone to interpret and act on it",
  ],
  [
    "Proof on this site",
    "Public owned-property case study + published dataset",
    "Varies by firm",
    "Varies by vendor",
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

/*
 * The two "Coming summer 2026" placeholder cards were deleted on 2026-08-11.
 * It was already August. A promise with a date that has passed is worse than an
 * empty space — it tells a buyer the page is unmaintained, on a page whose entire
 * argument is that this practitioner is careful with claims.
 *
 * Do not re-add placeholders. Add a case study when there is one.
 */

const FAQ_ITEMS: {
  q: string;
  a?: string;
  aeoLink?: boolean;
}[] = [
  {
    q: "What is the difference between GEO and SEO?",
    a: "They overlap heavily. Google states that its AI features run on its core Search ranking systems and that optimizing for AI Overviews and AI Mode is still SEO, with no special markup required — so on Google's surfaces, SEO foundations are the work. What generative visibility adds is the engines that do not use Google's index at all, and an outcome that is a spectrum rather than a position: you can be retrieved, mentioned, cited, paraphrased without attribution, or omitted. Nobody has shown that either discipline 'rewards' a specific fixed factor.",
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
    a: `On HomeCalc.ca — a site I own — appearances began climbing within 48 hours of the changes, with the ${HOMECALC_CLAIMS.fullLiftVisible}. That is one property, and one observation is not a timeline you should plan around. There is no published service level for this: Google's own documentation says recrawling alone can take days to months and that indexing is never guaranteed. What you can control is measuring on a fixed schedule so you can tell movement from noise.`,
  },
  {
    q: "What do I receive when working with a GEO consultant?",
    a: "A written audit covering each AI model, an entity signal gap analysis, a prioritized GEO action plan, platform-specific recommendations, and direct support during implementation. The audit is the entry point.",
  },
  {
    q: "How much does this cost?",
    a: `The starting point is a ${PRICE_DISPLAY} AI visibility audit — flat fee, one-time. From there you can implement the plan yourself, or have me implement it for you as a fixed-scope Implementation Sprint (the audit fee is credited toward it). Optional monthly monitoring is available afterward, on a fixed 6–12 month term — never required to get started.`,
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
      "@id":
        "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/#service",
      name: "Generative Engine Optimization Consulting",
      serviceType: "GEO Consulting",
      description:
        "Consultant-led generative engine optimization for Canadian businesses: measuring and improving how a brand is retrieved, mentioned and cited in AI-generated answers across Google AI features, Microsoft Copilot, ChatGPT, Perplexity, Gemini and Claude. Starts with a fixed-fee audit.",
      areaServed: { "@type": "Country", name: "Canada" },
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: "https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/",
      offers: {
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
              ? "They are overlapping industry labels rather than two standardised disciplines, and no body defines the boundary. In practice AEO emphasises making a page's content extractable as a direct answer, and GEO emphasises whether your brand is represented and cited at all. The underlying work — crawlable content, genuine usefulness, consistent entity information, credible outside references — is largely shared."
              : "Usually you need one of them more than the other, and which one is a question for the audit rather than the sales page. The candidates are technical discovery, content usefulness, answer extraction, entity consistency and external authority — and for most businesses the gap sits in one or two of those, not all five."
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
              Generative Engine Optimization (GEO) Consultant in Canada
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
              I help Canadian businesses measure and improve how their pages and
              brand are retrieved, mentioned and cited in AI-generated answers &mdash;
              across Google&rsquo;s AI features, Microsoft Copilot, ChatGPT,
              Perplexity, Gemini and Claude. The work combines technical SEO, original
              evidence, consistent entity information and credible third-party
              references. Every engagement starts with a measured baseline, so you
              can tell whether anything actually changed &mdash; and no one, including
              me, can guarantee placement in an AI answer.
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
                Generative engine optimization is a developing practice focused on
                improving the likelihood that a source is discovered, retrieved, used,
                mentioned or cited in AI-generated answers. It is not a single ranking
                system. Visibility depends on whether the engine searches at all, what
                it crawls and indexes, what it retrieves, the wording and context of
                the query, the platform, the location, the date, and how much the
                answer varies between runs.{" "}
                <a
                  href={GEO_SURVEY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={SRC_LINK}
                >
                  A 2026 survey of 45 studies
                </a>{" "}
                describes it as a stochastic, partially observable pipeline. In
                practice that means the work is about improving odds across a chain of
                steps, and measuring whether the odds moved.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--faint)",
                  lineHeight: 1.7,
                  marginTop: 16,
                  position: "relative",
                }}
              >
                The term comes from{" "}
                <a
                  href={GEO_PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={SRC_LINK}
                >
                  a 2023 paper
                </a>{" "}
                reporting visibility gains of up to 40% &mdash; a figure you will see
                quoted often, and usually without its condition. It applies to content
                already present in the model&rsquo;s context, so it says nothing about
                getting found in the first place. The same 2026 survey also found that
                rewriting purely to win citations can hurt retrieval, which is why I
                start by measuring rather than rewriting.
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
                Less than the labels imply, and the honest version is worth stating
                because it is unusual to see on a page like this. Google says its AI
                features are{" "}
                <a
                  href={GOOGLE_AI_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={SRC_LINK}
                >
                  rooted in its core Search ranking systems
                </a>
                , that optimizing for them is &ldquo;still SEO,&rdquo; and that no
                special markup is required. So on Google&rsquo;s surfaces, SEO
                foundations are the work.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 32,
                }}
              >
                What generative visibility adds on top: it applies to engines that do
                not use Google&rsquo;s index at all, and the outcome is not a position
                but a spectrum. You can be retrieved, mentioned, cited, paraphrased
                without attribution, or left out entirely. Those are five different
                situations with five different fixes, and treating them as one is the
                most common reason this work gets misdiagnosed.
              </p>

              <h3
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                GEO vs AEO — overlapping labels, different emphasis
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
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Owned-property case study.
                </strong>{" "}
                HomeCalc.ca is a Canadian personal-finance calculator site that I own
                &mdash; not a client engagement, which is why the raw data can be
                published in full. Over {HOMECALC_PROOF.timeframe} it recorded{" "}
                {HOMECALC_PROOF.combinedAppearances} measured AI appearances across two
                publisher reports: {HOMECALC_PROOF.citations} Copilot citations in Bing
                Webmaster Tools and {HOMECALC_PROOF.googleImpressions} impressions in
                Google&rsquo;s Generative AI features report. That is measurable growth
                on those two surfaces. It does not establish equivalent results on
                engines that report nothing, and appearances are not customers.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc launched with no backlink portfolio, no years of indexed
                content and no brand recognition. That is what makes the numbers worth
                showing &mdash; they were not inherited from an established domain. A
                specific technical change produced them, and identifying that change on
                your site is what the audit is for.
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

        </div>
      </section>

      {/* ── 4b — How GEO visibility is measured ── */}
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
              How GEO visibility is measured
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "60ch",
                lineHeight: 1.65,
              }}
            >
              &ldquo;Visibility&rdquo; is five different things, and reporting them
              as one number hides which one actually moved. Separating them is what
              makes a result checkable.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div
              style={{
                marginTop: 30,
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
                padding: "22px 20px",
                fontFamily: "var(--sans)",
                overflowX: "auto",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.8fr 2fr",
                  gap: 16,
                  minWidth: 520,
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span>Stage</span>
                <span>What gets measured</span>
              </div>
              {MEASUREMENT_STAGES.map((row) => (
                <div
                  key={row.stage}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.8fr 2fr",
                    gap: 16,
                    minWidth: 520,
                    padding: "13px 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                    {row.stage}
                  </span>
                  <span style={{ color: "var(--muted)" }}>{row.metric}</span>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 24,
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              One prompt is not a measurement. AI answers vary by engine, wording,
              location, date and run, so what I report comes from repeated prompts,
              query variants, dated captures, and first-party console data wherever a
              console exists. The{" "}
              <Link href="/methodology/" style={SRC_LINK}>
                methodology
              </Link>{" "}
              and the{" "}
              <Link href="/research/" style={SRC_LINK}>
                underlying dataset
              </Link>{" "}
              are both public, so you can check how the figures on this page were
              produced before you buy anything.
            </p>
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

