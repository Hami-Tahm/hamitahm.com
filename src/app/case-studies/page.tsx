import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";
import { SNAPSHOT } from "@/lib/ai-citation-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";

export const metadata: Metadata = {
  title: "AI Visibility Case Studies",
  description: `Real results from AI visibility work: how a brand-new Canadian site earned ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}, and how ChatGPT, Perplexity, Google AI Mode, and Grok came to recommend Hami Tahm by name.`,
  alternates: { canonical: "https://hamitahm.com/case-studies/" },
};

type CaseStudy = {
  href: string;
  tag: string;
  title: string;
  excerpt: string;
  stats: readonly { value: string; label: string }[];
};

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    href: "/case-studies/homecalc-ai-visibility/",
    tag: "Named client · YMYL finance",
    title: `How a brand-new Canadian site earned ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}`,
    excerpt:
      "HomeCalc.ca launched into real estate and mortgage — a market dominated by banks and finance — and became a default AI source without ad budget or domain authority.",
    stats: [
      { value: HOMECALC_PROOF.citations, label: "AI citations" },
      { value: HOMECALC_PROOF.timeframe, label: "Timeframe" },
      { value: HOMECALC_PROOF.topCitationShare, label: "Peak citation share" },
    ],
  },
  {
    href: "/case-studies/cited-by-ai-engines/",
    tag: "Proof on the category itself",
    title: "AI Engines Already Recommend Hami Tahm",
    excerpt:
      "Ask ChatGPT, Perplexity, Google AI Mode, or Grok who does AI visibility in Toronto, and they recommend Hami Tahm by name — a dated snapshot of the exact outcome the audit produces.",
    stats: [
      { value: String(SNAPSHOT.engineCount), label: "AI engines" },
      { value: "1", label: "Consultant named" },
      { value: SNAPSHOT.displayDate, label: "Snapshot" },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://hamitahm.com/case-studies/#page",
      url: "https://hamitahm.com/case-studies/",
      name: "AI Visibility Case Studies",
      description:
        "Real, documented results from AI visibility work for Canadian businesses.",
      inLanguage: "en-CA",
      publisher: { "@id": "https://hamitahm.com/#organization" },
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: CASE_STUDIES.map((cs, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: cs.title,
          url: `https://hamitahm.com${cs.href}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hamitahm.com/case-studies/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: "https://hamitahm.com/case-studies/",
        },
      ],
    },
  ],
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── BREADCRUMB ── */}
      <div className="wrap">
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--faint)",
            padding: "24px 0 0",
          }}
        >
          <Link href="/ai-visibility/" style={{ color: "var(--muted)" }}>
            AI Visibility
          </Link>{" "}
          / Case Studies
        </div>
      </div>

      {/* ── HEADER ── */}
      <header style={{ padding: "30px 0 30px" }}>
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
              Case Studies
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px,5.4vw,58px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
              }}
            >
              AI visibility, proven &mdash; not promised.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 20,
                fontSize: 18,
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.6,
              }}
            >
              Documented results from AI visibility work &mdash; a named client
              that went from near-zero to a default AI source, and proof on the
              AI-visibility category itself.
            </p>
          </RevealSection>
        </div>
      </header>

      {/* ── CASE STUDY CARDS ── */}
      <div className="wrap">
        {CASE_STUDIES.map((cs, i) => (
          <RevealSection key={cs.href} delay={0.18 + i * 0.06}>
            <Link
              href={cs.href}
              style={{
                marginTop: 14,
                marginBottom: 6,
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 16,
                padding: 40,
                boxShadow:
                  "0 1px 2px rgba(24,23,21,.04),0 14px 44px -24px rgba(24,23,21,.18)",
                position: "relative",
                overflow: "hidden",
                display: "block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-40%",
                  right: "-6%",
                  width: 320,
                  height: 320,
                  background:
                    "radial-gradient(circle,rgba(15,110,120,.10),transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  position: "relative",
                }}
              >
                {cs.tag}
              </span>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(24px,3.4vw,34px)",
                  fontWeight: 600,
                  letterSpacing: "-.02em",
                  margin: "14px 0 12px",
                  lineHeight: 1.12,
                  position: "relative",
                  maxWidth: "24ch",
                }}
              >
                {cs.title}
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "16.5px",
                  maxWidth: "62ch",
                  position: "relative",
                  lineHeight: 1.55,
                }}
              >
                {cs.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 32,
                  marginTop: 24,
                  position: "relative",
                }}
              >
                {cs.stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 26,
                        fontWeight: 500,
                        color: "var(--accent)",
                        letterSpacing: "-.02em",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--faint)",
                        marginTop: 6,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--accent)",
                  marginTop: 24,
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Read the case study &rarr;
              </span>
            </Link>
          </RevealSection>
        ))}
      </div>

      {/* ── CTA STRIP ── */}
      <div className="wrap" style={{ paddingBottom: 80 }}>
        <RevealSection delay={0.12}>
          <div
            style={{
              marginTop: 30,
              background: "var(--panel)",
              border: "1px solid var(--line-strong)",
              borderRadius: 14,
              padding: "34px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              boxShadow:
                "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 24,
                  fontWeight: 500,
                  letterSpacing: "-.01em",
                }}
              >
                Want results like these for your business?
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "14.5px", marginTop: 5 }}>
                Book a $1,500 AI Visibility Audit &mdash; full diagnosis of where
                AI engines mention you, delivered in 7&nbsp;days.
              </p>
            </div>
            <Link href={AUDIT_URL} className="btn btn-primary">
              Book Your AI Visibility Audit <span className="arr">&rarr;</span>
            </Link>
          </div>
        </RevealSection>
      </div>
    </>
  );
}
