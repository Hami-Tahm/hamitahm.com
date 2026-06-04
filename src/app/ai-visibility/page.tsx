import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Visibility Consultant in Canada",
  description:
    "Get found when your customers ask AI. I help Canadian businesses show up in ChatGPT, Perplexity, and Google AI Overviews. Toronto-based AI visibility consultant.",
};

export default function AIVisibilityPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <header style={{ padding: "80px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 30,
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
              AI Visibility &middot; Canada
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(40px,6vw,68px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "16ch",
              }}
            >
              Get found when your customers{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                ask&nbsp;AI
              </em>
              , not just when they Google.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 30,
                fontSize: 20,
                color: "var(--muted)",
                maxWidth: "54ch",
                lineHeight: 1.65,
              }}
            >
              I&rsquo;m Hami Tahm, a Toronto-based founder and AI visibility
              consultant. I help Canadian businesses show up in{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                ChatGPT, Perplexity, Google AI Overviews, and AI search
              </b>{" "}
              &mdash; using the same system I built and proved on my own
              products.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                marginTop: 42,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                href="/ai-visibility/ai-visibility-audit"
                className="btn btn-primary"
              >
                Get a Free AI Visibility Snapshot{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <a href="#how" className="btn btn-ghost">
                How it works
              </a>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── PROBLEM ── */}
      <section style={{ padding: "54px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="problem-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px,3.8vw,42px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.01em",
                  position: "relative",
                }}
              >
                Search is moving from links to{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  answers.
                </em>
              </h2>

              <p
                style={{
                  fontSize: 18,
                  color: "var(--muted)",
                  marginTop: 16,
                  maxWidth: "60ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                When a homebuyer asks ChatGPT &ldquo;best mortgage broker in
                Toronto,&rdquo; it doesn&rsquo;t show ten blue links &mdash; it
                names three. When a patient asks Perplexity &ldquo;top dental
                clinic near me,&rdquo; it cites two or three sources and moves
                on. Google&rsquo;s AI Overviews now answer the query before the
                user ever scrolls.{" "}
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  If you&rsquo;re not one of the names, you&rsquo;re invisible.
                </b>
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 40,
                  marginTop: 34,
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    ~30%
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginTop: 4,
                      maxWidth: "26ch",
                    }}
                  >
                    of sources cited in AI Overviews don&rsquo;t rank on page
                    one of organic results
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 38,
                      fontWeight: 500,
                      color: "var(--accent)",
                    }}
                  >
                    New
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginTop: 4,
                      maxWidth: "26ch",
                    }}
                  >
                    surface, new rules &mdash; and a real opening for businesses
                    that move early
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 01 — WHAT AI VISIBILITY WORK COVERS ── */}
      <section id="how" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="What AI visibility work covers" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="inc-grid">
              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  AEO
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
                  Answer Engine Optimization
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Structure your content so AI models pull it as the direct
                  answer &mdash; not a footnote.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  GEO
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
                  Generative Engine Optimization
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Optimize for the models themselves &mdash; citations,
                  authority signals, and structured data that LLMs trust.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  ChatGPT
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
                  ChatGPT &amp; Perplexity Visibility
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Get named, cited, and recommended when users ask conversational
                  AI about your category.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  AIO
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
                  Google AI Overviews
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Appear in the AI-generated summary box that now sits above
                  traditional search results.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  Entity
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
                  Entity SEO &amp; Schema
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Build a clear knowledge-graph identity so AI models know
                  exactly who you are and what you do.
                </p>
              </div>

              <div className="inc">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                  }}
                >
                  Auth
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
                  Authority Building
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Earn the mentions, backlinks, and third-party signals that make
                  AI models treat you as a trusted source.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — PRODUCTIZED PATH ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel
              number="02"
              text="A productized path, not an open-ended retainer"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="ladder">
              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 01
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Snapshot
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 8,
                  }}
                >
                  Free
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  A quick read on whether AI search engines mention you today
                  &mdash; delivered in 48&nbsp;hours, no&nbsp;cost, no
                  obligation.
                </p>
              </div>

              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 02
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Audit
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                >
                  $750 &ndash; $2,500
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Full diagnosis of your AI footprint: where you appear, where
                  competitors appear, and the exact gaps to close.
                </p>
              </div>

              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 03
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Sprint
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                >
                  $3,000 &ndash; $8,000
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  A focused implementation block &mdash; schema, content
                  restructuring, entity work, and authority signals shipped in
                  4&ndash;6&nbsp;weeks.
                </p>
              </div>

              <div className="tier">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  Step 04
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginTop: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Monthly System
                </h3>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                >
                  $2,000 &ndash; $6,000/mo
                </div>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                  }}
                >
                  Ongoing monitoring, content expansion, and competitive
                  tracking to keep you visible as AI models retrain and
                  competitors catch on.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — PROOF ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Proof, not promises" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="proof-grid">
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="proof-card"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Case Study
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-.01em",
                  }}
                >
                  HomeCalc.ca &mdash; Built for AI Visibility from Day One
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                    maxWidth: "44ch",
                  }}
                >
                  How I structured a new real-estate calculator site to earn
                  citations in ChatGPT and Google AI Overviews within the first
                  months of launch.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 16,
                  }}
                >
                  Read the case study &rarr;
                </div>
              </Link>

              <Link
                href="/orthodontic-seo-marketing-case-study/"
                className="proof-card"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Track Record
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: "-.01em",
                  }}
                >
                  7.5 Years of SEO Results for a Healthcare Brand
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 10,
                    lineHeight: 1.55,
                    maxWidth: "44ch",
                  }}
                >
                  A long-running engagement that grew organic traffic and
                  patient leads &mdash; the foundation my AI visibility system
                  is built on.
                </p>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--accent)",
                    marginTop: 16,
                  }}
                >
                  See the SEO case &rarr;
                </div>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — WHO I WORK WITH ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Who I work with" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="verts">
              <Link
                href="/ai-visibility/ai-visibility-for-dental-clinics/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Clinics &amp; Healthcare
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Dental, orthodontic, and medical practices that need patients
                  to find them through AI-powered search.
                </p>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-for-mortgage-brokers/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Real Estate &amp; Mortgage
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Brokers, agents, and real-estate services competing for the
                  queries homebuyers ask AI first.
                </p>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-consultant-canada/"
                className="vert"
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  Vertical
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  SaaS &amp; Startups
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    marginTop: 8,
                    lineHeight: 1.55,
                  }}
                >
                  Software companies and early-stage products that want to be
                  the name AI recommends in their category.
                </p>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 05 — EXPLORE ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="05" text="Explore" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="explore-grid">
              <Link
                href="/ai-visibility/ai-visibility-consultant-canada/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    AI Visibility Consultant in Canada
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Service
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/ai-visibility/ai-visibility-audit"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    AI Visibility Audit
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Service
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/ai-visibility/answer-engine-optimization"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    Answer Engine Optimization (AEO)
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Service
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/ai-visibility/generative-engine-optimization-consultant-canada/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    Generative Engine Optimization (GEO)
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Service
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/blog/what-is-ai-visibility/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    What is AI visibility?
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Guide
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/blog/how-to-get-mentioned-by-chatgpt/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    How to get mentioned by ChatGPT
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Guide
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/blog/how-to-appear-in-google-ai-overviews/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    How to appear in Google AI Overviews
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Guide
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>

              <Link
                href="/blog/aeo-vs-geo-vs-seo/"
                className="ex-row"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    AEO vs GEO vs SEO explained
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      color: "var(--faint)",
                      marginTop: 3,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Guide
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13,
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 06 — FAQ ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="06" text="Questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  What is AI visibility?
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: 10,
                    maxWidth: "68ch",
                  }}
                >
                  AI visibility is the practice of making your business show up
                  when people use AI-powered search tools like ChatGPT,
                  Perplexity, and Google AI Overviews. Instead of optimizing for
                  ten blue links, you optimize for the short list of names the AI
                  actually recommends.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  How is this different from regular SEO?
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: 10,
                    maxWidth: "68ch",
                  }}
                >
                  Traditional SEO gets you ranked in a list. AI visibility gets
                  you named in an answer. The tactics overlap &mdash; content
                  quality, authority, and structured data all matter &mdash; but
                  the signals AI models prioritize (entity clarity, citation
                  patterns, concise direct answers) are different from what moves
                  a page from position 7 to position 3.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  Do you only work with Canadian businesses?
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: 10,
                    maxWidth: "68ch",
                  }}
                >
                  Most of my clients are in Canada &mdash; especially Toronto
                  and the GTA &mdash; but the system works for any
                  English-language market. If your customers are asking AI for
                  recommendations in your category, I can help.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  How do we start?
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: 10,
                    maxWidth: "68ch",
                  }}
                >
                  Request a free AI Visibility Snapshot. I&rsquo;ll check
                  whether ChatGPT, Perplexity, and Google AI Overviews mention
                  your business today and send you a short report within
                  48&nbsp;hours. No cost, no commitment &mdash; just a clear
                  picture of where you stand.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 21,
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  How long until I see results?
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: 10,
                    maxWidth: "68ch",
                  }}
                >
                  Some changes &mdash; like schema markup and structured-data
                  fixes &mdash; can show up in AI Overviews within weeks.
                  Broader citation gains in ChatGPT and Perplexity typically
                  build over 2&ndash;4 months as models retrain and your
                  authority signals compound. This is early-mover territory:
                  the sooner you start, the harder it is for competitors to
                  catch&nbsp;up.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="final-cta">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px,4vw,40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                See where you stand in AI search &mdash; free.
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 16,
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "relative",
                  marginBottom: 30,
                  lineHeight: 1.6,
                }}
              >
                A quick snapshot of whether ChatGPT, Perplexity, and Google AI
                Overviews mention your business &mdash; delivered in 48 hours,
                no cost, no obligation.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit"
                className="btn btn-primary"
                style={{ position: "relative" }}
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
