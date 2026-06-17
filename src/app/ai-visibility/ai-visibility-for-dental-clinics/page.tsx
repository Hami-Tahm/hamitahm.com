import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CASE_STUDY_URL = HOMECALC_PROOF.caseStudyPath;
const WALKTHROUGH_MINUTES = 60;
const TURNAROUND = "7 business days";
const PRICE_DISPLAY = "$1,500 CAD";

export const metadata: Metadata = {
  title: "AI Visibility for Dental Clinics",
  description:
    "Ensure your dental clinic appears when patients ask ChatGPT, Perplexity, or Google AI Overviews. Audit by Hami Tahm — $1,500 CAD flat.",
  alternates: {
    canonical: "https://hamitahm.com/ai-visibility/ai-visibility-for-dental-clinics/",
  },
};

const DENTAL_CHECKS = [
  "Whether your clinic is mentioned when patients ask for dentists in your city",
  "Which procedures AI engines associate with your practice — implants, Invisalign, pediatric, cosmetic, emergency, sedation",
  "Accuracy of your address, hours, phone number, and accepted insurance in AI-generated answers",
  "How patient reviews are summarized and represented across platforms",
  "Whether competitors are being recommended in queries your clinic should own",
  "Which sources AI engines pull from when describing your clinic — and which ones are missing, outdated, or contradicting each other",
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
  "A written report covering each platform — what AI says about your clinic, what it gets wrong, and where you're invisible",
  "A prioritized action plan ranked by impact and effort",
  `A ${WALKTHROUGH_MINUTES}-minute walkthrough call to review findings and next steps`,
  "14 days of follow-up questions after delivery",
] as const;

const PROOF_STATS = [
  { value: HOMECALC_PROOF.citations, label: "AI citations" },
  { value: HOMECALC_PROOF.timeframe, label: "Time to lift" },
  { value: "< 3 months", label: "Domain age" },
  { value: "YMYL", label: "Category" },
] as const;

const COMPARISON_ROWS = [
  [
    "What it checks",
    "How AI platforms describe your clinic in patient queries",
    "How your site ranks on Google search results",
    "Your profile in Google's local map pack",
  ],
  [
    "Platforms covered",
    "ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Bing Copilot",
    "Google search",
    "Google Maps + local pack",
  ],
  [
    "Who controls the result",
    "Multiple data sources AI engines pull from",
    "Your website and backlinks",
    "You, directly",
  ],
  [
    "Patient outcome",
    "Whether your clinic appears in AI-generated answers",
    "Whether your clinic ranks in classic search results",
    "Whether your clinic appears in the map pack",
  ],
  [
    "Relationship to SEO & GMB",
    "Additional layer — audit runs alongside your existing SEO and GMB work",
    "Keep investing — strong SEO feeds AI citation signals",
    "Keep optimizing — GMB data feeds AI local answers",
  ],
  [
    "Pricing model",
    "$1,500 CAD, flat (one-time)",
    "Monthly retainer",
    "Free (Google product)",
  ],
] as const;

const PERSONAS = [
  {
    label: "Specialty practices",
    desc: "Implant clinics, Invisalign providers, cosmetic, pediatric, and other specialty practices competing on high-value AI queries. Specialty work has the highest ROI from AI visibility because each new patient is worth more.",
  },
  {
    label: "Solo practice owners",
    desc: "Independent dentists at one location with local reputation built but unclear standing in AI search.",
  },
  {
    label: "Multi-location dental groups",
    desc: "2+ clinics where AI responses vary by location, hours, services, or pricing — inconsistency erodes trust before a patient ever calls.",
  },
  {
    label: "Dental marketing agencies",
    desc: "Agencies serving dental clients who want to add AI visibility to existing SEO/GMB retainers without building the audit capability in-house.",
  },
] as const;

const FAQ_ITEMS: {
  q: string;
  a: string;
  auditLink?: boolean;
}[] = [
  {
    q: "Do AI tools actually recommend dental clinics to patients?",
    a: 'Yes. ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot all answer questions like "best dentist for implants in [city]" or "which clinic should I go to for Invisalign near me" with named clinic recommendations. Patients who ask these questions often call the named clinic directly — without ever opening Google search.',
  },
  {
    q: "Is this the same as dental SEO?",
    a: "No. Dental SEO improves how your website ranks in Google's classic search results. AI visibility is an additional layer on top — it covers how AI platforms describe and recommend your clinic. Keep your SEO and GMB investments; the audit shows what's missing from the AI surface specifically. You can rank #1 on Google and still be missing from the answer ChatGPT gives a patient.",
  },
  {
    q: "My clinic has great Google reviews — why am I not showing up in AI?",
    a: "Reviews are one signal AI engines use, but they're not enough on their own. AI platforms pull from your website content, Google Business Profile, directory listings, third-party mentions, and structured data. If any of those sources are inconsistent, outdated, or missing critical information, AI engines often skip your clinic — even with strong reviews.",
  },
  {
    q: "How quickly can I see results?",
    a: `HomeCalc.ca started seeing citations climb within 48 hours of implementing the audit's recommendations, with the ${HOMECALC_CLAIMS.fullLiftVisible}. Timelines vary by clinic, but the audit identifies which changes produce results fastest.`,
  },
  {
    q: "How much does the audit cost?",
    a: `$1,500 CAD, flat. One-time payment, no retainer. See the full audit page for what's included.`,
    auditLink: true,
  },
  {
    q: "What do I receive at the end?",
    a: `A written report covering each AI platform, a prioritized action plan, a ${WALKTHROUGH_MINUTES}-minute walkthrough call, and 14 days of follow-up questions.`,
  },
  {
    q: "Do you work with clinics outside major cities?",
    a: "Yes. Clinics in smaller markets often see the largest AI visibility wins, because AI engines tend to default to clinics in nearby larger cities — leaving local practices missing from answers their own patients are asking.",
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
    label: "AI visibility for mortgage brokers",
    href: "/ai-visibility/ai-visibility-for-mortgage-brokers/",
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
          name: "AI Visibility for Dental Clinics",
          item: "https://hamitahm.com/ai-visibility/ai-visibility-for-dental-clinics/",
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Visibility Audit for Dental Clinics",
      serviceType: "AI Visibility Consulting for Dental Clinics",
      areaServed: "Canada",
      provider: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
        sameAs: "https://hamitahm.com/hami-tahm/",
      },
      url: "https://hamitahm.com/ai-visibility/ai-visibility-for-dental-clinics/",
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

export default function AIVisibilityDentalClinics() {
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
            <span>Dental Clinics</span>
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
              AI Visibility for Dental Clinics
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
              AI visibility for dental clinics is the practice of ensuring your
              clinic appears — accurately and consistently — when patients ask AI
              tools like ChatGPT, Perplexity, or Google AI Overviews for dentist
              recommendations. Hami Tahm audits dental clinics across these
              platforms to identify where your clinic is missing, misrepresented,
              or invisible in AI-generated answers, and delivers a prioritized
              action plan to fix it.
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
                maxWidth: "42ch",
                lineHeight: 1.4,
              }}
            >
              Your patient asked ChatGPT for a dentist. Were you in the answer?
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

      {/* ── 2 — How Patients Find Dentists ── */}
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
              How Patients Find Dentists in 2026
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 24,
              }}
            >
              Five years ago, a patient looking for a dentist opened Google,
              scanned the map pack, read a few reviews, and called the top
              result. That flow still exists. A growing share of patients now skip
              Google entirely.
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
              A patient opens ChatGPT and types:{" "}
              <em style={{ fontStyle: "italic", color: "var(--ink)" }}>
                &ldquo;dentist near me.&rdquo;
              </em>{" "}
              ChatGPT answers with a paragraph that names two or three clinics.
              The patient calls one of them. They never saw a map pack, never
              read a review page, never visited your website.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              The same pattern plays out on Perplexity, Google AI Overviews,
              Gemini, and Bing Copilot. Each one generates an answer to a
              patient&rsquo;s question, and each one decides which clinics to
              mention. If your clinic isn&rsquo;t in those answers, you
              don&rsquo;t get the call — regardless of how well you rank on
              traditional Google search.
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
                What AI Visibility Means for Your Practice
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
                What is AI visibility for dental clinics?
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
                AI visibility for dental clinics is what an AI engine says about
                your clinic when a patient asks. It covers three things: whether
                you&rsquo;re mentioned at all, what services and specialties
                you&rsquo;re associated with, and whether the practical details
                — location, hours, accepted insurance, procedure list — are
                accurate.
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
                your Google Business Profile, third-party directories, review
                sites, and any article or social mention they can index. If any
                of those sources are missing, outdated, or inconsistent, the AI
                either skips your clinic or describes it incorrectly. Patients
                see the result, not the source.
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
              What the Audit Covers for Dental Clinics
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
                  What we check for your clinic
                </h3>
                <BulletList items={DENTAL_CHECKS} />
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
              Proof — Results From a Real AI Visibility Audit
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
                HomeCalc.ca is a Canadian personal finance calculator site —{" "}
                {HOMECALC_PROOF.domainAge} at the time of the audit. After an AI
                visibility audit by Hami Tahm, the site went from near-zero AI
                citations to over {HOMECALC_PROOF.citations} across{" "}
                {HOMECALC_PROOF.pagesCited} pages in {HOMECALC_PROOF.timeframe},
                with citations appearing in ChatGPT, Perplexity, and Google AI
                Overviews.
              </p>
              <p
                style={{
                  fontSize: "clamp(17px, 2vw, 19px)",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                HomeCalc operates in financial services — one of Google&rsquo;s
                strictest YMYL categories{" "}
                <em style={{ fontStyle: "italic" }}>
                  (Your Money or Your Life)
                </em>
                . Dental is also a YMYL category — health. AI engines apply
                similar caution before citing both.
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
                If this worked on a 3-month-old YMYL finance site, it works
                faster on a multi-year dental clinic with real authority.
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
              <PlaceholderCard note="First dental client case study — coming summer 2026" />
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
              Is This Different From Dental SEO?
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
              Most dental clinics already invest in Google SEO, Google My Business
              optimization, or a dental marketing agency. An AI visibility audit
              is not a replacement for any of those — it is an additional layer
              on top of the work you already do. Strong SEO and a complete GMB
              profile feed AI signals; the audit shows what&rsquo;s still missing
              from AI-generated answers. Here&rsquo;s how the three compare.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <ComparisonTable
              columns={[
                "AI Visibility Audit",
                "Dental SEO Agency",
                "Google My Business",
              ]}
              rows={COMPARISON_ROWS}
            />
            <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
              Strong Google reviews and a complete GMB profile help your AI
              visibility — but they don&rsquo;t guarantee it on their own. AI
              engines pull from many more sources, and inconsistencies across
              those sources are the most common reason a clinic stays invisible
              in AI answers. Keep your SEO and GMB programs running; add the
              audit to close the AI gap.
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
                body="I review your clinic across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Bing Copilot."
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
                Book Your Dental Clinic AI Visibility Audit
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
                Ready to find out if patients can find your clinic in AI search?
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
