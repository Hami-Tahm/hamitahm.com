import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "HomeCalc.ca AI Visibility Case Study",
  description:
    "How I built HomeCalc.ca to be found and cited by ChatGPT, Perplexity, and Google AI Overviews from day one. 1.1K+ AI citations, 100/100 Core Web Vitals.",
};

export default function HomeCalcCaseStudy() {
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
            <span>Case Study</span>
            <span>/</span>
            <span>HomeCalc.ca</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Header ── */}
      <header style={{ padding: "30px 0 44px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 22,
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
              Case Study
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.2vw, 58px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "18ch",
              }}
            >
              How I built HomeCalc.ca to be found in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI&nbsp;search
              </em>{" "}
              from day one.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 19.5px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.62,
              }}
            >
              HomeCalc.ca is my own product &mdash; a suite of real-estate
              calculators for Ontario.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                I treat it as the live lab where I test every AI visibility
                method before recommending it to a client.
              </b>{" "}
              Here&rsquo;s exactly what I did, and why.
            </p>
          </RevealSection>

          {/* ── Meta strip ── */}
          <RevealSection delay={0.18}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 30,
                marginTop: 34,
                paddingTop: 24,
                paddingBottom: 24,
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <MetaItem
                label="Project"
                value={
                  <a
                    href="https://homecalc.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)" }}
                  >
                    HomeCalc.ca&nbsp;&uarr;
                  </a>
                }
              />
              <MetaItem label="Role" value="Solo founder &amp; builder" />
              <MetaItem label="Market" value="Ontario real estate" />
              <MetaItem
                label="Stack"
                value="Vite&nbsp;&middot;&nbsp;React&nbsp;&middot;&nbsp;Supabase"
              />
              <MetaItem label="Launched" value="March 2025" />
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — The starting point ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="The starting point" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ maxWidth: 740 }}>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(17px, 2vw, 20px)",
                  lineHeight: 1.72,
                  color: "#2a2824",
                  marginBottom: 24,
                }}
              >
                Most websites are built for humans first and search engines
                second &mdash; and almost never with AI answer engines in mind.
                I wanted to do the opposite: build a real, useful product and
                treat{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  being citable by AI
                </b>{" "}
                as a first-class design constraint from the very first commit.
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(17px, 2vw, 20px)",
                  lineHeight: 1.72,
                  color: "#2a2824",
                }}
              >
                HomeCalc.ca is a set of 11+ calculators &mdash; house flipping,
                house hacking, mortgage affordability, and more &mdash; aimed at
                Ontario buyers, investors, and the mortgage brokers who serve
                them. It&rsquo;s a perfect testbed because it&rsquo;s{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  YMYL content
                </b>{" "}
                (your-money-your-life), which AI systems treat cautiously and
                only cite when they trust the source.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — What I did ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="What I did" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{ display: "flex", flexDirection: "column" }}
            >
              <ApproachItem number="01" title="Structured every answer for extraction">
                Each calculator and guide answers a specific question in a
                clean, self-contained way an AI can lift and cite &mdash; clear
                headings, direct definitions, and no burying the answer.
              </ApproachItem>
              <ApproachItem number="02" title="Full structured data (schema)">
                JSON-LD across the site &mdash; organization, calculator, FAQ,
                and article schemas &mdash; so machines understand exactly what
                each page is and who&rsquo;s behind it.
              </ApproachItem>
              <ApproachItem number="03" title="Entity clarity &amp; authority">
                Consistent entity signals tying the site to a real, credible
                author and brand &mdash; the trust layer AI search weighs
                heavily for financial content.
              </ApproachItem>
              <ApproachItem number="04" title="Technical foundation that crawlers love">
                Pre-rendered, fast pages with a clean sitemap, robots, and
                near-perfect Core Web Vitals &mdash; so both Google and AI
                crawlers get complete HTML instantly.
              </ApproachItem>
              <ApproachItem number="05" title="Question-first content architecture" isLast>
                Content mapped to the exact questions people ask AI about
                Ontario real estate &mdash; the queries most likely to trigger
                an AI answer.
              </ApproachItem>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 3.2vw, 32px)",
                lineHeight: 1.36,
                color: "var(--ink)",
                fontWeight: 500,
                letterSpacing: "-.015em",
                maxWidth: "22ch",
                margin: "10px 0",
              }}
            >
              The goal was simple: when someone asks AI about Ontario
              real-estate math,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                HomeCalc should be the source it reaches&nbsp;for.
              </em>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — Results ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Results" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
              }}
            >
              <ResultCard number="1.1K+" label="AI citations tracked across ChatGPT, Perplexity, and Google AI Overviews" />
              <ResultCard number="11+" label="Calculators, each built as a citable, standalone answer" />
              <ResultCard number="100/100" label="Core Web Vitals, SEO &amp; Best Practices scores" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Why this matters for you ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Why this matters for you" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ maxWidth: 740 }}>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(17px, 2vw, 20px)",
                  lineHeight: 1.72,
                  color: "#2a2824",
                  marginBottom: 24,
                }}
              >
                HomeCalc isn&rsquo;t a client I&rsquo;m describing from the
                outside &mdash; it&rsquo;s a product I own, where I control
                every variable and can prove what actually moves AI visibility.{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Everything I do for clients, I&rsquo;ve already
                  pressure-tested here first.
                </b>
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(17px, 2vw, 20px)",
                  lineHeight: 1.72,
                  color: "#2a2824",
                }}
              >
                If you run a clinic, a real-estate or mortgage business, or a
                SaaS product in Canada, the same playbook applies: build (or
                fix) your site so AI answer engines can find, trust, and cite
                you &mdash; before your competitors figure it out.
              </p>
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
                Want this for your business?
              </h2>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 17,
                  color: "var(--muted)",
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Start with a free AI Visibility Snapshot. I&rsquo;ll show you
                where you stand and what it would take to become the source AI
                reaches&nbsp;for.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get a Free AI Visibility Snapshot{" "}
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
        marginBottom: 24,
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

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: ".07em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 15,
          fontWeight: 500,
          color: "var(--ink)",
          marginTop: 5,
        }}
        dangerouslySetInnerHTML={
          typeof value === "string" ? { __html: value } : undefined
        }
      >
        {typeof value === "string" ? undefined : value}
      </div>
    </div>
  );
}

function ApproachItem({
  number,
  title,
  children,
  isLast,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "54px 1fr",
        gap: 22,
        padding: "22px 0",
        borderTop: "1px solid var(--line)",
        borderBottom: isLast ? "1px solid var(--line)" : undefined,
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: 26,
          fontWeight: 500,
          color: "var(--accent)",
        }}
      >
        {number}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "-.01em",
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          style={{
            fontSize: 15,
            color: "var(--muted)",
            marginTop: 6,
            lineHeight: 1.55,
            maxWidth: "62ch",
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function ResultCard({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        background: "var(--panel, #FFFFFF)",
        border: "1px solid var(--line-strong)",
        borderRadius: 12,
        padding: 28,
        boxShadow:
          "0 1px 2px rgba(24,23,21,.04), 0 12px 40px -26px rgba(24,23,21,.16)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: 40,
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "-.02em",
          lineHeight: 1,
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 14,
          color: "var(--muted)",
          marginTop: 10,
          lineHeight: 1.45,
        }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}
