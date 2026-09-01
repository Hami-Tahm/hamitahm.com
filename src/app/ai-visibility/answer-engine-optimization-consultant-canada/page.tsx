import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS, HOMECALC_HEADLINE_STAT } from "@/lib/homecalc-proof";

/**
 * ── CLAIM RULE FOR THIS PAGE (2026-08-11) ──
 *
 * Google's own AI-features documentation states that the same SEO fundamentals
 * apply to AI Overviews and AI Mode, and that no special markup is required. Any
 * sentence here claiming a specific engine "favours" a specific signal has to be
 * traceable to a vendor document or a dated test on a real domain. Several were
 * traceable to neither and have been removed.
 *
 * On the combined HomeCalc figure: summing Copilot citations and Google impressions
 * under the superset label "AI appearances" is defensible ONLY while the components
 * stay visible next to it. See the rule in src/lib/homecalc-proof.ts. Never label
 * the total "citations", and never imply it covers engines that report nothing.
 */
const GOOGLE_AI_FEATURES_URL =
  "https://developers.google.com/search/docs/appearance/ai-features";

const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const GEO_URL = "/ai-visibility/generative-engine-optimization-consultant-canada/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500";

export const metadata: Metadata = {
  title: {
    absolute:
      "Answer Engine Optimization Consultant Canada | AEO Services",
  },
  description:
    "Canada-based AEO consultant helping businesses make their content easier for Google AI Overviews, ChatGPT, Copilot and Perplexity to understand and cite. $1,500 audit, delivered in 7 business days.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
  },
};

const CONSULTANT_WORK = [
  {
    title: "Content structure audit",
    body: "Reviewing how your existing pages are structured (heading hierarchy, schema, answer formatting, internal linking) to identify which pages are extractable by AI engines and which are not. The output is a prioritized list of structural fixes ranked by how much extraction lift each will produce.",
  },
  {
    title: "Answer-format optimization",
    body: "Rewriting and restructuring critical pages so AI engines can extract clear, standalone answers to the questions your customers ask. This is page-level work (title, opening paragraph, subheadings, FAQ sections) done with extractability as the primary design constraint.",
  },
  {
    title: "Platform-specific strategy",
    body: "Engines differ in what they retrieve from, how they present sources and how much their answers vary between runs, so I test each one separately rather than assuming a fix transfers. What I do not do is tell you what each engine \'favours\': those claims circulate widely and trace back to no vendor document. Google says plainly that no special structured data is needed for its AI features. Recommendations here come from dated, repeated observations on your own pages.",
  },
] as const;

const PROOF_STATS = [
  { value: HOMECALC_HEADLINE_STAT.value, label: HOMECALC_HEADLINE_STAT.label },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "YMYL", label: "Category" },
] as const;

// ⚠️ This table used to characterise agencies as "account manager and junior team"
// with methodology "held internally, rarely shared", and tools as having "no proof".
// I have no basis for any of that. A page arguing that claims should be checkable
// cannot make unchecked ones about competitors. Each option now carries a genuine
// strength and a genuine limitation, mine included.
const COMPARISON_ROWS = [
  [
    "Main strength",
    "Direct access to one senior person; plan built for your pages",
    "Larger team; multi-discipline execution",
    "Continuous monitoring and fast data",
  ],
  [
    "Usual limitation",
    "Limited delivery capacity (one person)",
    "Usually a retainer, and more handoffs",
    "Needs someone in-house to interpret and act",
  ],
  [
    "Best suited to",
    "Teams wanting senior guidance on what to fix first",
    "Large or multi-market programmes",
    "Teams that already have SEO or content capability",
  ],
  [
    "Pricing model",
    "Starts with $1,500 audit, no retainer",
    "Monthly retainer",
    "Monthly subscription",
  ],
  [
    "Proof on this site",
    "Public owned-property case study + published dataset",
    "Varies by firm",
    "Varies by vendor",
  ],
] as const;

const PROCESS_STEPS = [
  {
    title: "Discover",
    body: "Baseline where your content is cited (and where AI engines skip it entirely) across the platforms that matter to your buyers.",
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
    body: "Track citation lift over time and refine what works, so improvements compound instead of stalling.",
  },
] as const;

const PERSONAS = [
  {
    label: "High-ticket service businesses",
    desc: "Dental, mortgage, legal, and financial advisory firms: highest ROI from AI citations because each new client is worth more.",
  },
  {
    label: "B2B SaaS",
    desc: "Products with research-heavy buyer journeys where comparison and evaluation queries dominate AI search.",
  },
  {
    label: "Local services in competitive categories",
    desc: "Businesses where \"best [service] near me\" is now an AI query, not just a Google map search.",
  },
  {
    label: "In-house marketing teams",
    desc: "CMOs and marketing leads at established companies: you have a team that can execute; you need outside expertise to identify the highest-leverage AI moves first.",
  },
] as const;

/*
 * Two "Coming summer 2026" placeholder cards were deleted on 2026-08-11; it was
 * already August. A promise whose date has passed reads as an abandoned page.
 * Add a case study when there is one; do not re-add placeholders.
 */

const FAQ_ITEMS: {
  q: string;
  a?: string;
  geoLink?: boolean;
}[] = [
  {
    q: "What is the difference between AEO and SEO?",
    a: "Less than the labels suggest. Google states that its AI features run on its core Search ranking systems, that optimizing for AI Overviews and AI Mode is still SEO, and that no special markup is required, so on Google's surfaces the foundations are the same work. AEO is a useful label for one emphasis within that: writing and structuring a page so a machine can lift a clean, correct answer from it. It is a difference of emphasis, not a separate discipline with its own ranking system.",
  },
  {
    q: "What is the difference between AEO and GEO?",
    geoLink: true,
  },
  {
    q: "How long does AEO take to show results?",
    a: `On HomeCalc.ca (a site I own), appearances began climbing within 48 hours of the changes, with the ${HOMECALC_CLAIMS.fullLiftVisible}. That is one property and no control group, so treat it as an encouraging data point rather than a timeline to plan around. There is no published service level for this: Google's documentation says recrawling alone can take days to months and that indexing is never guaranteed. What is controllable is measuring on a fixed schedule so you can tell movement from noise.`,
  },
  {
    q: "Do I need AEO if I already rank on Google?",
    a: "Ranking well on Google is a genuine advantage on Google's own AI surfaces, since they draw on the same ranking systems. Where it stops helping is everywhere else: ChatGPT, Claude and Perplexity retrieve through their own crawlers and indexes, so a strong Google position tells you nothing about them. The other thing ranking cannot tell you is whether what an answer says about you is accurate: a position is never wrong about you, a generated sentence can be.",
  },
  {
    q: "What does an AEO consultant actually deliver?",
    a: "A written audit covering each AI platform, a prioritized list of structural changes ranked by impact, page-level rewrites where needed, platform-specific recommendations, and direct support during implementation. The audit is the entry point.",
  },
  {
    q: "How much does this cost?",
    a: `The starting point is a ${PRICE_DISPLAY} AI visibility audit: flat fee, one-time. From there you can act on the findings yourself, or have me turn them into a fixed-scope Action Plan and roadmap for your team to ship (the audit fee is credited toward it). Optional monthly monitoring is available afterward, on a fixed 6–12 month term, never required to get started.`,
  },
  {
    q: "Do you guarantee AI citations?",
    a: "No, and no consultant can. Citations and rankings are decided by systems nobody outside those companies controls, and Google's own documentation says indexing and serving are never guaranteed. What I commit to is a diagnosis you can check, a prioritized plan, and a measured baseline so you can tell whether anything moved. Treat any guarantee of AI placement as a reason to walk away.",
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
    label: "AEO vs GEO vs SEO: the differences explained",
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
      "@id":
        "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/#service",
      name: "Answer Engine Optimization Consulting",
      serviceType: "AEO Consulting",
      description:
        "Consultant-led answer engine optimization for Canadian businesses: structuring pages so Google AI Overviews, ChatGPT, Copilot and Perplexity can extract and cite them accurately. Starts with a fixed-fee audit delivered in 7 business days.",
      areaServed: { "@type": "Country", name: "Canada" },
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: "https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/",
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

      {/* Section 1: Hero */}
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
              Answer Engine Optimization Consultant for Canadian Businesses
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
              I help Canadian service businesses and B2B teams make their content
              easier for Google AI Overviews, ChatGPT, Perplexity and Copilot to
              understand, cite and recommend. Engagements start with a{" "}
              {PRICE_DISPLAY} audit delivered in {TURNAROUND}, including a written
              roadmap and a walkthrough call.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                color: "var(--faint)",
                maxWidth: "56ch",
                lineHeight: 1.7,
              }}
            >
              Toronto-based &middot; serving businesses across Canada &middot;{" "}
              {PRICE_DISPLAY} flat &middot; no retainer to start
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link href={CHECKER_URL} className="btn btn-ghost">
                Run the free AI visibility check
              </Link>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Book the {PRICE_DISPLAY} AEO audit{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* Section 2: What Is AEO */}
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
                Answer engine optimization is the practice of making web content
                easier for search and AI systems to understand, retrieve and present
                as a direct answer. It builds on technical SEO, genuinely useful
                content and authority signals; it does not replace them.
                Google states that the same SEO fundamentals apply to its AI
                Overviews and AI Mode, and that{" "}
                <a
                  href={GOOGLE_AI_FEATURES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  no special markup is required
                </a>
                . What AEO adds is attention to a specific question SEO never had to
                ask: can a machine lift a clean, correct answer off this page without
                a human reading around it?
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
                AEO vs SEO: the key difference
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                SEO and AEO optimize for different outcomes, and reward different
                things:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "16px 0 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 500 }}>SEO</b>{" "}
                    optimizes how your page ranks among a list of search results;
                    the user still clicks through to read it. Rewards relevance
                    and authority signals.
                  </span>
                </li>
                <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 500 }}>AEO</b>{" "}
                    optimizes how AI engines pull from your page directly,
                    summarize what they find, and present it as an answer; the
                    user often never visits your site. Rewards structure,
                    clarity, and extractability.
                  </span>
                </li>
              </ul>
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
                AEO vs GEO: why they&rsquo;re separate disciplines
              </h3>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                AEO and GEO are related but distinct:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "16px 0 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 500 }}>AEO</b>{" "}
                    addresses how AI engines extract answers from your existing
                    content: structure, format, clarity.
                  </span>
                </li>
                <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 500 }}>GEO</b>{" "}
                    addresses how AI engines generate responses about your brand
                    from across the web: entity signals, source diversity,
                    citation density.
                  </span>
                </li>
              </ul>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                AEO is about being extractable; GEO is about being represented.
                Most businesses need both, but each is a separate practice.
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

      {/* Section 3: What an AEO Consultant Does */}
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

      {/* Section 4: Proof */}
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
              Results: Proof of Methodology
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
                HomeCalc.ca is a Canadian personal-finance calculator site that I own,
                not a client engagement, which is why the underlying data can
                be published in full. Under three months old, it went from near-zero
                to {HOMECALC_CLAIMS.appearancesInTimeframe}:{" "}
                {HOMECALC_PROOF.combinedSourceLong}.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--faint)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                Read that number carefully, because it is two different things added
                together: {HOMECALC_PROOF.citations} Copilot citations and{" "}
                {HOMECALC_PROOF.googleImpressions} Google generative-AI impressions.
                A citation and an impression are not the same event, the two are not
                deduplicated against each other, and the total covers Microsoft and
                Google only; ChatGPT, Gemini, Claude and Perplexity publish
                nothing, so no figure here speaks for them. The lift{" "}
                <em>followed</em> a specific technical change; with one property and
                no control, that is a sequence rather than a proven cause.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc operates in YMYL{" "}
                (<em style={{ fontStyle: "italic" }}>Your Money or Your Life</em>),
                Google&rsquo;s strictest content category. AI engines are more
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

        </div>
      </section>

      {/* Section 5: Comparison */}
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

      {/* Section 6: How I Work */}
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

      {/* Section 7: Who This Is For */}
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

      {/* Section 8: FAQ */}
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

      {/* Section 9: Related Service: GEO */}
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
              Related Service: GEO Consulting
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
              synthesize your brand across the web, not how they extract answers
              from your specific pages; that&rsquo;s a separate practice.
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

      {/* Section 10: Related Reading */}
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

      {/* Section 11: Final CTA */}
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

