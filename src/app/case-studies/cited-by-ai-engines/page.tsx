import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { ENGINE_CITATIONS, HAMITAHM_CITATIONS, SNAPSHOT } from "@/lib/ai-citation-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const TURNAROUND = "7 business days";

export const metadata: Metadata = {
  title: "AI Engines Already Recommend Hami Tahm — Case Study",
  description:
    "Ask ChatGPT, Perplexity, Google AI Mode, or Grok who does AI visibility in Toronto and they recommend Hami Tahm. A dated snapshot of the exact outcome the AI Visibility Audit is built to produce.",
  alternates: {
    canonical: "https://hamitahm.com/case-studies/cited-by-ai-engines/",
  },
};

const HERO_STATS = [
  { value: String(SNAPSHOT.engineCount), label: "AI engines recommending" },
  { value: "1", label: "Consultant named" },
  { value: SNAPSHOT.displayDate, label: "Snapshot" },
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
          name: "Case Studies",
          item: "https://hamitahm.com/case-studies/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Engines Recommend Hami Tahm",
          item: "https://hamitahm.com/case-studies/cited-by-ai-engines/",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "AI Engines Already Recommend Hami Tahm",
      datePublished: SNAPSHOT.isoDate,
      dateModified: SNAPSHOT.isoDate,
      author: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
      },
      publisher: {
        "@type": "Person",
        name: "Hami Tahm",
        url: "https://hamitahm.com/hami-tahm/",
      },
    },
  ],
};

export default function CitedByAiEnginesCaseStudy() {
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
            <Link href="/case-studies/" style={{ color: "var(--faint)" }}>
              Case Study
            </Link>
            <span>/</span>
            <span>Cited by AI Engines</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── 1 — Hero ── */}
      <header style={{ padding: "30px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.2vw, 58px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "20ch",
              }}
            >
              Ask AI Who Does AI Visibility in Toronto. It Recommends Hami Tahm.
            </h1>
          </RevealSection>

          <RevealSection delay={0.04}>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--faint)",
              }}
            >
              Snapshot captured {SNAPSHOT.displayDate} by{" "}
              <Link href="/hami-tahm/" style={{ color: "var(--accent)" }}>
                Hami Tahm
              </Link>
              . AI answers change over time — this is a dated record, not a
              permanent ranking.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 19.5px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              Getting recommended by AI engines is the exact outcome an AI
              visibility audit is built to produce. So here is the most direct
              proof I can offer: when buyers ask ChatGPT, Perplexity, Google AI
              Mode, and Grok to name someone in Toronto or Canada for AI
              visibility, they name me — by name, with my site cited.
            </p>
          </RevealSection>

          <RevealSection delay={0.12}>
            <div className="cs-stat-strip" style={{ marginTop: 32 }}>
              {HERO_STATS.map(({ value, label }) => (
                <StatBox key={label} value={value} label={label} large />
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={0.16}>
            <div style={{ marginTop: 36 }}>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Book Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 2 — The prompt ── */}
      <section style={{ padding: "46px 0" }}>
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
              The Prompt
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              Every screenshot below answers the same buyer-intent question, run
              across four different AI engines on the same day:
            </p>
            <blockquote
              style={{
                margin: "0 0 8px",
                paddingLeft: 20,
                borderLeft: "3px solid var(--accent)",
                fontFamily: "var(--serif)",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              &ldquo;{SNAPSHOT.prompt}&rdquo;
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — Engine by engine ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 12,
              }}
            >
              What Each Engine Said
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                maxWidth: "62ch",
                marginBottom: 8,
              }}
            >
              Quotes below are the Hami Tahm portion of each answer, verbatim.
              Each engine also surfaced other firms; those are described
              generically and cropped out, because the point here is the named
              recommendation, not a ranking.
            </p>
          </RevealSection>

          {ENGINE_CITATIONS.map((c, i) => (
            <RevealSection key={c.engine} delay={0.06 + i * 0.04}>
              <article
                style={{
                  marginTop: 28,
                  paddingTop: 28,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: ".04em",
                    marginBottom: 14,
                  }}
                >
                  {c.engine} · {SNAPSHOT.displayDate}
                </div>
                <blockquote
                  style={{
                    margin: 0,
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                    fontStyle: "italic",
                    color: "var(--ink)",
                    lineHeight: 1.55,
                    maxWidth: "62ch",
                  }}
                >
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <figure style={{ margin: "24px 0 0" }}>
                  <Image
                    src={c.image}
                    alt={c.alt}
                    width={1024}
                    height={420}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 12,
                      border: "1px solid var(--line-strong)",
                    }}
                  />
                  <figcaption
                    style={{
                      marginTop: 12,
                      fontSize: 13,
                      color: "var(--faint)",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.engine}, captured {SNAPSHOT.displayDate}. Cropped to the
                    Hami Tahm recommendation.
                  </figcaption>
                </figure>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── 4 — Why this matters ── */}
      <section style={{ padding: "46px 0" }}>
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
              Why This Matters
            </h2>
            <div
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                Buyers increasingly ask an AI engine for a shortlist before they
                ask Google. When the engine returns one name, that name gets the
                first conversation — and often the only one. Being the recommended
                answer is the whole game.
              </p>
              <p style={{ marginBottom: 20 }}>
                And it isn&rsquo;t only recommendation: hamitahm.com itself has
                earned{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                  {HAMITAHM_CITATIONS.total} AI citations in{" "}
                  {HAMITAHM_CITATIONS.timeframe}
                </strong>{" "}
                (Microsoft Copilot). The practice runs on the same AI visibility
                it sells.
              </p>
              <p style={{ marginBottom: 20 }}>
                This is the same result the audit produces for clients, applied
                to my own practice. HomeCalc.ca shows it on a YMYL financial site;
                this page shows it on the AI-visibility category itself. If the
                method earns the recommendation in my own market, it can earn it
                in yours.
              </p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  paddingTop: 20,
                  borderTop: "1px solid var(--line)",
                }}
              >
                One caveat, stated plainly: AI answers shift. This is a dated
                snapshot, not a guarantee of placement on any given day. That
                volatility is exactly why AI visibility is ongoing work, not a
                one-time setting.
              </p>
            </div>
            <p style={{ marginTop: 24, fontSize: 15 }}>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                Read the HomeCalc.ca case study &rarr;
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — CTA ── */}
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
                Get Your Brand Recommended by AI
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
                The audit finds why AI engines do or don&rsquo;t cite you — and
                what to change first.
              </p>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                $1,500 CAD flat. Report and walkthrough call within {TURNAROUND}.
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

function StatBox({
  value,
  label,
  large,
}: {
  value: string;
  label: string;
  large?: boolean;
}) {
  return (
    <div className="proof-card">
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: large ? "clamp(32px, 4vw, 44px)" : 36,
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
