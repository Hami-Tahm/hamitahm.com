import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Visibility Consultant in Canada",
  description:
    "Your AI visibility consultant in Canada. I help Canadian businesses get found, recommended, and cited by ChatGPT, Perplexity, and Google AI Overviews.",
};

export default function AIVisibilityConsultantCanada() {
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
            <span>Consultant in Canada</span>
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
              AI Visibility Consultant
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
                maxWidth: "15ch",
              }}
            >
              Your AI visibility consultant in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Canada.
              </em>
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
              I help Canadian businesses get found, recommended, and cited by
              ChatGPT, Perplexity, and Google AI&nbsp;Overviews.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                One operator, not an agency
              </b>{" "}
              &mdash; the same person who builds the strategy ships the work.
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
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get an AI Visibility Audit{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="btn btn-ghost"
              >
                See proof
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Intro ── */}
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
              }}
            >
              When buyers ask AI for a recommendation, you want to be{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                the name it says.
              </em>
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Search is splitting in two. Traditional results still matter, but a
              growing share of high-intent queries now end inside ChatGPT,
              Perplexity, Gemini, and Google&rsquo;s AI&nbsp;Overviews &mdash;
              where the answer engine names a handful of brands and links to
              nothing else.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                If your competitors are named and you aren&rsquo;t, the customer
                never even knows you exist.
              </b>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 01 — Why work with an operator, not an agency ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="Why work with an operator, not an agency" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="vs">
              {/* Agency card */}
              <div className="vs-card">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 20,
                  }}
                >
                  A typical agency
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <VsItem marker="&mdash;" color="var(--faint)" text="Strategy by one team, work handed to juniors" />
                  <VsItem marker="&mdash;" color="var(--faint)" text="Open-ended retainers with vague deliverables" />
                  <VsItem marker="&mdash;" color="var(--faint)" text='Recycled SEO playbooks, lightly relabelled "AI"' />
                  <VsItem marker="&mdash;" color="var(--faint)" text="You're one account among many" />
                </ul>
              </div>

              {/* Me card */}
              <div className="vs-card me">
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  Working with me
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  <VsItem marker="&#10003;" color="var(--accent)" text="The person who diagnoses also does the work" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="Fixed-scope, productized engagements" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="Methods I test live on my own products first" />
                  <VsItem marker="&#10003;" color="var(--accent)" text="A small number of clients, real attention" />
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — How an engagement works ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="How an engagement works" />
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
                    I run your brand through ChatGPT, Perplexity, and Google
                    AI&nbsp;Overviews and show you exactly where you stand &mdash;
                    cited, missing, or misrepresented. Takes five minutes to
                    request, delivered within 48&nbsp;hours.
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
                    Audit
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
                    immediately.
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
                    I execute the highest-impact fixes myself &mdash; AEO
                    rewrites, schema markup, entity reinforcement, and
                    third-party authority building &mdash; in a focused 4&ndash;6
                    week sprint.
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

      {/* ── 03 — What you get ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="What you get" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="deliv">
              <DelivRow text="AI visibility audit across ChatGPT, Perplexity, Gemini, and Google AI Overviews" />
              <DelivRow text="Answer-engine optimization (AEO) of your key pages" />
              <DelivRow text="Generative engine optimization (GEO) strategy" />
              <DelivRow text="Entity SEO and structured-data schema markup" />
              <DelivRow text="Content engineered for AI citation and retrieval" />
              <DelivRow text="Third-party authority building to reinforce brand signals" />
              <DelivRow text="Competitor citation and gap analysis" />
              <DelivRow text="Ongoing tracking and reporting (monthly plan)" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Local Canada panel ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <div className="local-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.2vw, 34px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.015em",
                  maxWidth: "22ch",
                  position: "relative",
                }}
              >
                Based in Toronto. Built for Canadian businesses.
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "54ch",
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                Over a decade of SEO and digital marketing in the Canadian market.
                I built HomeCalc.ca to #1 in its city for competitive real-estate
                queries &mdash; and proved the same AI-visibility system works on
                my own products before offering it to clients. I understand
                Canadian local intent, bilingual search nuances, and the YMYL
                scrutiny that governs finance, health, and real-estate verticals
                here.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Questions (FAQ) ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="04" text="Questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  What does an AI visibility consultant actually do?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  I make sure your business appears when people ask AI tools like
                  ChatGPT, Perplexity, and Google AI&nbsp;Overviews questions
                  your customers are asking. That means auditing how models
                  currently represent you, optimizing your content and structured
                  data so models can retrieve and cite it, and building the
                  third-party authority signals that reinforce your brand across
                  the training and retrieval pipelines.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  How much does it cost?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  The free snapshot costs nothing. The full audit is a fixed-fee
                  engagement. Implementation sprints are scoped and priced per
                  project, not by the hour, so you know the cost before we start.
                  Monthly plans are a flat retainer. Reach out for exact pricing
                  &mdash; it depends on your vertical and the scope of work.
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  Is this just SEO with a new name?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  No. Traditional SEO optimizes for links on a results page. AI
                  visibility optimizes for being named, recommended, and cited
                  inside an AI-generated answer &mdash; a fundamentally different
                  surface with different ranking signals. There is overlap in
                  foundations like structured data and authority, but the strategy,
                  tooling, and measurement are distinct.{" "}
                  <Link
                    href="/blog/aeo-vs-geo-vs-seo/"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                  >
                    Here&rsquo;s how AEO, GEO and SEO differ.
                  </Link>
                </p>
              </div>

              <div className="faq-item">
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  What kinds of businesses do you work with?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  Primarily Canadian companies in verticals where trust and
                  expertise matter &mdash; real estate, legal, healthcare,
                  financial services, and B2B SaaS. If your customers are
                  searching for answers and comparing options through AI tools,
                  there is likely a fit.
                </p>
              </div>
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
                Let&rsquo;s see if you&rsquo;re showing up.
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
                Start with a free AI Visibility Snapshot &mdash; I&rsquo;ll show
                you exactly how your brand appears (or doesn&rsquo;t) inside
                ChatGPT, Perplexity, and Google AI&nbsp;Overviews.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get your free snapshot <span className="arr">&rarr;</span>
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

function VsItem({
  marker,
  color,
  text,
}: {
  marker: string;
  color: string;
  text: string;
}) {
  return (
    <li style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 14,
          color,
          flexShrink: 0,
        }}
        dangerouslySetInnerHTML={{ __html: marker }}
      />
      <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
        {text}
      </span>
    </li>
  );
}

function DelivRow({ text }: { text: string }) {
  return (
    <div className="d-row">
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 13,
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        &rarr;
      </span>
      <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
        {text}
      </span>
    </div>
  );
}
