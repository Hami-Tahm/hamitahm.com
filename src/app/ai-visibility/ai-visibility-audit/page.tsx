import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Visibility Audit for Canadian Businesses",
  description:
    "See how your business appears in ChatGPT, Perplexity, and Google AI Overviews. Get a free AI Visibility Snapshot with a prioritized action plan to improve your citations and trust signals.",
};

export default function AIVisibilityAudit() {
  return (
    <>
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

      {/* ── Header ── */}
      <header style={{ padding: "34px 0 50px" }}>
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
              AI Visibility Audit
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "18ch",
              }}
            >
              See how your business appears in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI&nbsp;search
              </em>{" "}
              &mdash; then fix&nbsp;it.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "54ch",
                lineHeight: 1.65,
              }}
            >
              I check how your brand appears in ChatGPT, Perplexity,
              Google&nbsp;AI&nbsp;Overviews, and Gemini &mdash; then show you
              what&rsquo;s working, what&rsquo;s missing, and give you a{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                prioritized action plan
              </b>{" "}
              to get cited, recommended, and trusted by the AI engines your
              customers are already using.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                marginTop: 38,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                href="/contact/"
                className="btn btn-primary"
              >
                Request Your Free Snapshot{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="btn btn-ghost"
              >
                See a real example
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — What We Check ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="What we check" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="proof-grid">
              <CheckCard
                label="AI Citations"
                description="How often AI names your brand when users ask about your industry — and whether it links back to your site or just mentions a competitor."
              />
              <CheckCard
                label="Entity Clarity"
                description="Whether AI understands what your business is, what it does, and where it operates — or if it confuses you with someone else entirely."
              />
              <CheckCard
                label="Content Retrievability"
                description="Can AI engines find and extract your key content? We test whether your pages are structured so models can pull answers, not just crawl them."
              />
              <CheckCard
                label="Competitor Gap"
                description="Who AI recommends instead of you — and why. We map the brands that currently own the prompts your customers are asking."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — How It Works ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="How it works" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              <div className="pstep">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 30,
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  01
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
                    Free Snapshot
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    Five minutes to request, delivered within 48&nbsp;hours. I
                    run your brand through ChatGPT, Perplexity, Gemini, and
                    Google AI&nbsp;Overviews and show you exactly where you
                    stand &mdash; cited, missing, or misrepresented. No cost, no
                    obligation.
                  </p>
                </div>
              </div>

              <div className="pstep">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 30,
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  02
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
                    Full Audit
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    A deep diagnosis across all major AI engines &mdash; prompt
                    testing, entity mapping, schema review, competitor citation
                    analysis, and a prioritized action plan you can act on
                    immediately. You&rsquo;ll know exactly what to fix and in
                    what order.
                  </p>
                </div>
              </div>

              <div className="pstep">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 30,
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  03
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
                    Implementation Sprint
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    I execute the highest-impact fixes myself in a focused
                    4&ndash;6 week sprint &mdash; AEO rewrites, schema markup,
                    entity reinforcement, and authority building. The same person
                    who diagnosed the problem ships the solution.
                  </p>
                </div>
              </div>

              <div className="pstep">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 30,
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}
                >
                  04
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
                    Monthly System{" "}
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--faint)",
                        fontWeight: 400,
                      }}
                    >
                      (optional)
                    </span>
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    Ongoing monitoring, new prompt tracking, content updates, and
                    fresh authority signals &mdash; so you stay visible as AI
                    models retrain and competitors adapt.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — Who This Is For ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="03" text="Who this is for" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Dental clinics, mortgage brokers, real estate teams, legal firms,
              financial services, and B2B SaaS companies &mdash; any Canadian
              business where{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                trust matters and customers are asking AI for recommendations.
              </b>{" "}
              If a potential client types a question into ChatGPT before they
              ever open Google, you need to be the name that comes back.
            </p>
          </RevealSection>

          <RevealSection delay={0.12}>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <VerticalTag text="Dental Clinics" href="/ai-visibility/ai-visibility-for-dental-clinics/" />
              <VerticalTag text="Mortgage Brokers" />
              <VerticalTag text="Real Estate" />
              <VerticalTag text="Legal" />
              <VerticalTag text="Financial Services" />
              <VerticalTag text="B2B SaaS" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <blockquote
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.35,
                letterSpacing: "-.015em",
                color: "var(--ink)",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: 28,
                margin: 0,
              }}
            >
              &ldquo;Most AI visibility tools show you a dashboard. I show you
              what to fix &mdash; then help you ship&nbsp;it.&rdquo;
            </blockquote>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Proof ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Proof" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="proof-card">
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Case Study
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-.01em",
                }}
              >
                HomeCalc &mdash; from invisible to 1,100+ AI&nbsp;citations
              </h3>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  maxWidth: "58ch",
                }}
              >
                I built HomeCalc.ca and used the same AI visibility system I now
                offer to clients. The result: over 1,100 citations across
                ChatGPT and Perplexity, a 100/100 Core Web Vitals score, and
                top rankings for competitive real-estate queries in its target
                market. This is the system, proven on a live&nbsp;product.
              </p>
              <div style={{ marginTop: 20, display: "flex", gap: 24 }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 28,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    1.1K+
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 2,
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
                    100/100
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 2,
                    }}
                  >
                    Core Web Vitals
                  </div>
                </div>
              </div>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 22,
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                Read the full case study <span>&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
                Ready to see where you stand?
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
                Start with a free AI Visibility Snapshot &mdash; I&rsquo;ll
                check how your brand appears across ChatGPT, Perplexity, Gemini,
                and Google AI&nbsp;Overviews and send you a clear report within
                48&nbsp;hours.
              </p>
              <Link
                href="/contact/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Request Your Free Snapshot{" "}
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── Local helper components ── */

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 34,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

function CheckCard({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="inc">
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--accent)",
        }}
      >
        &#10003;
      </div>
      <h3
        style={{
          fontFamily: "var(--sans)",
          fontSize: 16,
          fontWeight: 600,
          marginTop: 10,
          lineHeight: 1.3,
        }}
      >
        {label}
      </h3>
      <p
        style={{
          fontSize: "13.5px",
          color: "var(--muted)",
          marginTop: 8,
          lineHeight: 1.55,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function VerticalTag({
  text,
  href,
}: {
  text: string;
  href?: string;
}) {
  const style: React.CSSProperties = {
    fontFamily: "var(--mono)",
    fontSize: 13,
    color: href ? "var(--accent)" : "var(--muted)",
    border: "1px solid var(--line-strong)",
    borderRadius: 999,
    padding: "8px 16px",
    transition: "all .2s",
  };

  if (href) {
    return (
      <Link href={href} style={style}>
        {text}
      </Link>
    );
  }

  return <span style={style}>{text}</span>;
}
