import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS, HOMECALC_HEADLINE_STAT } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500";

export const metadata: Metadata = {
  title: "AI Visibility for Canadian SaaS Companies",
  description:
    "Ensure your SaaS product appears when buyers ask ChatGPT, Perplexity, or Google AI Overviews for alternatives, comparisons, and recommendations. Audit by Hami Tahm, $1,500 flat.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/ai-visibility-for-saas-companies/",
  },
};

const SAAS_RESEARCH_PROMPTS = [
  "What's the best [category] software for a small team in Canada?",
  "[Competitor] alternatives",
  "Compare [Your Product] vs [Competitor]",
  "Does [Your Product] integrate with [tool]?",
  "Is [Your Product] worth it for a startup?",
] as const;

const SAAS_CHECKS = [
  "Whether your product is named at all when buyers ask AI for tools in your category, or for alternatives to a named competitor",
  "Whether AI engines describe your pricing, plans, and feature set accurately, or are working from a stale or incomplete source",
  "Whether your integration and API partner pages are being pulled into AI answers about compatibility",
  "How review-site data (G2, Capterra, TrustRadius) is being summarized and whether it's pulling the right version of your product",
  "Whether your documentation is structured in a way AI engines can actually parse and cite",
  "Which competitors are being recommended in comparison queries your product should win",
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
  "A written report covering each platform: what AI says about your product, what it gets wrong, and where you're invisible",
  "A prioritized action plan ranked by impact and effort",
  `A ${WALKTHROUGH_MINUTES}-minute walkthrough call to review findings and next steps`,
  "14 days of follow-up questions after delivery",
] as const;

const PROOF_STATS = [
  { value: HOMECALC_HEADLINE_STAT.value, label: HOMECALC_HEADLINE_STAT.label },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "Competitive", label: "Category" },
] as const;

const COMPARISON_ROWS = [
  [
    "What it checks",
    "How AI platforms describe and recommend your product in buyer queries",
    "How your site and docs rank on Google search results",
    "Your rating, reviews, and category placement on G2 or Capterra",
  ],
  [
    "Platforms covered",
    "Google AI Overviews, ChatGPT, Gemini, Claude, Bing Copilot, Perplexity",
    "Google search",
    "The review site itself",
  ],
  [
    "Who controls the result",
    "Multiple data sources AI engines pull from: your site, docs, reviews, third-party mentions",
    "Your website, backlinks, and technical SEO",
    "Customer reviews and the platform's own ranking algorithm",
  ],
  [
    "Buyer outcome",
    "Whether your product is named when a buyer asks AI for options",
    "Whether your site ranks in classic search results",
    "Whether your product appears in a review-site shortlist",
  ],
  [
    "Relationship to existing marketing",
    "Additional layer, runs alongside your SEO and review-site programs",
    "Keep investing, strong SEO and docs feed AI citation signals",
    "Keep collecting reviews, review volume and recency feed AI trust signals",
  ],
  [
    "Pricing model",
    "$1,500, flat (one-time)",
    "Monthly retainer",
    "Free to claim, paid tiers for placement",
  ],
] as const;

const PERSONAS = [
  {
    label: "Early-stage and seed SaaS",
    desc: "Products with real traction but no brand recognition yet, competing against established names in every AI comparison query.",
  },
  {
    label: "PLG and self-serve products",
    desc: "Products where the buyer researches and decides alone, often entirely inside an AI conversation, before a sales rep ever gets involved.",
  },
  {
    label: "Vertical and niche B2B SaaS",
    desc: "Category leaders in a narrow niche who should be the default AI answer for their specific use case, but aren't yet.",
  },
  {
    label: "Developer tools and API companies",
    desc: "Products where documentation quality and integration accuracy directly determine whether AI engines recommend or skip you in technical comparisons.",
  },
] as const;

const FAQ_ITEMS: {
  q: string;
  a: string;
  auditLink?: boolean;
}[] = [
  {
    q: "How do I get my SaaS product recommended by ChatGPT?",
    a: "Be the clearest, most consistent answer to the questions buyers ask AI: \"best [category] tool,\" \"[competitor] alternatives,\" \"does [your product] do [feature].\" That means accurate, structured product and pricing information across your site, docs, and review profiles. The audit shows exactly which of these are keeping your product out of AI answers.",
  },
  {
    q: "Do B2B buyers actually use AI tools to research software?",
    a: "Yes, and the share is growing fast. ChatGPT, Perplexity, and Google AI Overviews now answer \"best tool for X\" and \"alternatives to Y\" queries directly, naming a short list of products. Buyers increasingly shortlist from that answer before ever opening a comparison site or requesting a demo.",
  },
  {
    q: "Is this the same as SaaS SEO or review-site optimization?",
    a: "No. SaaS SEO improves how your website and blog rank in Google's classic search results. Review-site optimization (G2, Capterra) improves your standing on those specific platforms. AI visibility is an additional layer on top: it covers how AI platforms themselves describe and recommend your product when a buyer asks. You can rank well on Google and G2 and still be missing from the answer ChatGPT gives that same buyer.",
  },
  {
    q: "We already have good G2 reviews. Why aren't we showing up in AI answers?",
    a: "Reviews are one signal AI engines use, but not the only one. AI platforms pull from your website, documentation, integration pages, and any third-party mention they can index. If any of those sources are outdated, thin, or contradict each other, the AI often skips your product even with strong reviews.",
  },
  {
    q: "How quickly can I see results?",
    a: `HomeCalc.ca started seeing AI appearances climb within 48 hours of implementing the audit's recommendations, with the ${HOMECALC_CLAIMS.fullLiftVisible}. Timelines vary by product and existing content footprint, but the audit identifies which changes produce results fastest.`,
  },
  {
    q: "How much does the audit cost?",
    a: `$1,500, flat. One-time payment, no retainer. See the full audit page for what's included.`,
    auditLink: true,
  },
  {
    q: "What do I receive at the end?",
    a: `A written report covering each AI platform, a prioritized action plan, a ${WALKTHROUGH_MINUTES}-minute walkthrough call, and 14 days of follow-up questions.`,
  },
  {
    q: "Do you work with pre-revenue or seed-stage startups?",
    a: "Yes. Early-stage products often see the largest wins, because AI engines default to whichever names already have volume and history when no clear leader exists yet in a category. The audit identifies exactly where a newer product can win a comparison query outright.",
  },
];

const RELATED_LINKS = [
  { label: "The full AI visibility audit", href: AUDIT_URL },
  {
    label: HOMECALC_CLAIMS.caseStudyCardLabel,
    href: CASE_STUDY_URL,
  },
  { label: "What is AI visibility?", href: "/ai-visibility/" },
  {
    label: "AI visibility consultant in Canada",
    href: "/ai-visibility/ai-visibility-consultant-canada/",
  },
  {
    label: "AEO vs GEO vs SEO",
    href: "/blog/aeo-vs-geo-vs-seo/",
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
          name: "AI Visibility for SaaS Companies",
          item: "https://hamitahm.com/ai-visibility/ai-visibility-for-saas-companies/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Visibility Audit for SaaS Companies",
      serviceType: "AI Visibility Consulting for SaaS Companies",
      areaServed: "Canada",
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      url: "https://hamitahm.com/ai-visibility/ai-visibility-for-saas-companies/",
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

export default function AIVisibilitySaaSCompanies() {
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
            <span>SaaS Companies</span>
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
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "24ch",
              }}
            >
              AI Visibility for Canadian SaaS Companies
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
              AI visibility for SaaS companies is the practice of ensuring your
              product appears, accurately and consistently, when buyers ask AI
              tools like ChatGPT, Perplexity, Google AI Overviews, or Claude for
              software recommendations, comparisons, or alternatives. Hami Tahm
              audits SaaS products across these platforms to identify where
              you're missing, misrepresented, or invisible in AI-generated
              answers, and delivers a prioritized action plan to fix it.
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
                maxWidth: "44ch",
                lineHeight: 1.4,
              }}
            >
              A buyer asked ChatGPT for the best tool in your category. Was
              your product in the answer?
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

      {/* Section 2: How Buyers Research Software */}
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
              How B2B Buyers Research Software in 2026
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 24,
              }}
            >
              Five years ago, a buyer evaluating software opened Google,
              scanned a "best tools for X" listicle, checked G2, and built a
              shortlist by hand. That flow still exists. A growing share of
              buyers now skip most of it.
            </p>
            <p
              className="dental-scenario-turn"
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.78,
                marginBottom: 24,
              }}
            >
              A buyer opens ChatGPT or Perplexity and asks a version of:{" "}
              <em style={{ fontStyle: "italic", color: "var(--ink)" }}>
                &ldquo;What&rsquo;s the best [category] tool for a team our
                size?&rdquo;
              </em>{" "}
              The AI answers with a paragraph that names two or three
              products. The buyer requests a demo from one of them. They never
              opened G2, never read a comparison blog post, never saw your
              homepage.
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
              {SAAS_RESEARCH_PROMPTS.map((prompt) => (
                <li
                  key={prompt}
                  style={{
                    fontSize: "clamp(16px, 1.9vw, 18px)",
                    color: "var(--muted)",
                    lineHeight: 1.55,
                  }}
                >
                  <em style={{ fontStyle: "italic", color: "var(--ink)" }}>
                    &ldquo;{prompt}&rdquo;
                  </em>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              The same pattern plays out on Google AI Overviews, Gemini, and
              Bing Copilot. Each one generates an answer to a buyer&rsquo;s
              question, and each one decides which products to mention. If
              your product isn&rsquo;t in those answers, you don&rsquo;t get
              the demo request, regardless of how well you rank on traditional
              Google search or G2.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Section 3: Definition */}
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
                What AI Visibility Means for Your Product
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
                What is AI visibility for SaaS companies?
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
                AI visibility for SaaS companies is what an AI engine says
                about your product when a buyer asks. It covers three things:
                whether you&rsquo;re named at all in category and alternative
                queries, whether your pricing and feature set are described
                accurately, and whether comparisons against named competitors
                favor you or overlook you entirely.
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
                AI platforms build these answers by pulling from your website,
                your documentation, integration and API partner pages, review
                sites, and any comparison article or forum thread they can
                index. If any of those sources are missing, outdated, or
                inconsistent, the AI either skips your product or describes it
                incorrectly. The buyer sees the result, not the source.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 4: Audit Scope */}
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
              What the Audit Covers for SaaS Companies
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
                  What we check for your product
                </h3>
                <BulletList items={SAAS_CHECKS} />
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

      {/* Section 5: Proof */}
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
              Proof: Results From a Real AI Visibility Audit
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
                HomeCalc.ca is a Canadian personal finance calculator site,{" "}
                {HOMECALC_PROOF.domainAge}. After an AI visibility audit by
                Hami Tahm, the site went from near-zero AI appearances to{" "}
                {HOMECALC_PROOF.combinedAppearances} in{" "}
                {HOMECALC_PROOF.timeframe}, {HOMECALC_PROOF.combinedSourceLong}
                .
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc competes against dozens of similar calculator sites
                for the exact same head queries, the same problem a SaaS
                product faces when a buyer asks AI to name "the best tool for
                X" out of a crowded category. AI engines chose specific pages
                to cite. The audit identified why, and what to change to be
                chosen instead.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--ink)",
                  fontWeight: 500,
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                If this worked in a crowded, competitive calculator category,
                the same logic applies to a crowded SaaS category.
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
                &ldquo;I identified a specific technical change that produced
                this lift. The methodology is part of what you receive in the
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
              <PlaceholderCard note="First SaaS client case study, coming soon" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Section 6: Comparison */}
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
              Is This Different From SaaS SEO or Review-Site Optimization?
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
              Most SaaS companies already invest in content SEO, a G2 or
              Capterra profile, or a comparison-page strategy. An AI
              visibility audit is not a replacement for any of those, it is an
              additional layer on top of the work you already do. Strong SEO
              and an active review-site profile feed AI signals; the audit
              shows what&rsquo;s still missing from AI-generated answers.
              Here&rsquo;s how the three compare.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <ComparisonTable
              columns={[
                "AI Visibility Audit",
                "SaaS SEO / Content",
                "Review-Site Profile",
              ]}
              rows={COMPARISON_ROWS}
            />
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              A strong G2 profile and a well-ranked comparison page both help
              your AI visibility, but neither guarantees it on their own. AI
              engines pull from many more sources, and inconsistencies across
              those sources are the most common reason a product stays
              invisible in AI answers. Keep your SEO and review programs
              running; add the audit to close the AI gap.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Section 7: How It Works */}
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
                body="I review your product across Google AI Overviews, ChatGPT, Gemini, Claude, Bing Copilot, and Perplexity."
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

      {/* Section 8: Who This Is For */}
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

      {/* Section 9: FAQ */}
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
                Book Your SaaS AI Visibility Audit
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
                Ready to find out if buyers can find your product in AI
                search?
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
