import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Answer Engine Optimization (AEO) Consultant in Canada",
  description:
    "Get your business cited by ChatGPT, Perplexity, and AI answer engines. AEO consultant helping Canadian businesses optimize content for AI-generated answers.",
};

export default function AEOConsultantCanada() {
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
            <span>AEO Consultant</span>
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
              Answer Engine Optimization Consultant
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
              Answer engine optimization consultant in{" "}
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
              I help Canadian businesses get cited, recommended, and referenced
              by ChatGPT, Perplexity, and every AI tool that answers questions
              on your customers&rsquo; behalf.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                One operator, not an agency
              </b>{" "}
              &mdash; the same person who audits your visibility ships the
              fixes.
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

      {/* ── 01 — What is AEO ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="01" text="What is answer engine optimization" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              AEO is the practice of making your content the answer AI gives.
            </h2>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              When someone asks ChatGPT, Perplexity, or Google AI&nbsp;Overviews
              a question, the model doesn&rsquo;t return a list of links &mdash;
              it returns an answer. That answer cites a handful of sources and
              names a handful of brands. Answer engine optimization is the
              discipline of making sure your business is one of them.{" "}
              <Link
                href="/blog/what-is-answer-engine-optimization/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Read my full guide to AEO.
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — How AEO differs from SEO ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="How AEO differs from SEO" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
              }}
            >
              SEO earns a spot on the page. AEO earns a spot{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                in the answer.
              </em>
            </h2>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              Traditional SEO optimizes for ten blue links. AEO optimizes for
              the single synthesized response an AI model delivers &mdash; where
              only two or three brands get named. The ranking signals overlap
              (authority, structure, relevance) but the surfaces, formats, and
              tactics are different. You can rank #1 on Google and still be
              completely absent from ChatGPT&rsquo;s answer.{" "}
              <Link
                href="/blog/aeo-vs-geo-vs-seo/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Here&rsquo;s how AEO, GEO, and SEO differ.
              </Link>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — What I do ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="What I do" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="deliv">
              <DelivRow text="AI citation audit across ChatGPT, Perplexity, Gemini, and Google AI Overviews" />
              <DelivRow text="Content restructuring — turning pages into cite-worthy, extractable answers" />
              <DelivRow text="Entity clarity — making sure AI knows your name, what you do, and why you're different" />
              <DelivRow text="Schema markup and structured data for answer-engine retrieval" />
              <DelivRow text="Citation building — earning third-party mentions that reinforce your brand signal" />
              <DelivRow text="Competitor citation gap analysis" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Who it's for ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="04" text="Who this is for" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              AEO is highest-impact for businesses where trust and expertise
              drive the buying decision &mdash; and where AI is already
              fielding the questions your customers ask.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Real estate, legal, healthcare, financial services, SaaS, and
                professional services
              </b>{" "}
              are the verticals I work with most. If your customers are
              comparing options through AI before ever visiting your website,
              there is a fit.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 05 — Process ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="05" text="The process" />
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
                    AI&nbsp;Overviews and show you exactly where you stand
                    &mdash; cited, missing, or misrepresented. Takes five
                    minutes to request, delivered within 48&nbsp;hours.
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
                    AEO Audit
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    A deep diagnosis of how answer engines handle your brand
                    &mdash; prompt testing, entity mapping, content
                    extractability review, schema audit, and competitor citation
                    analysis. You get a prioritized action plan you can act on
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
                    content rewrites, schema markup, entity reinforcement, and
                    third-party authority building &mdash; in a focused
                    4&ndash;6 week sprint.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 06 — FAQ ── */}
      <section style={{ padding: "60px 0" }}>
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
                    fontSize: 19,
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                  }}
                >
                  What is answer engine optimization?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  AEO is the practice of structuring your content and brand
                  signals so AI-powered answer engines &mdash; ChatGPT,
                  Perplexity, Google AI&nbsp;Overviews &mdash; cite your
                  business when users ask questions your customers are asking.
                  It goes beyond traditional SEO by focusing on retrievability,
                  entity clarity, and structured data that models can extract
                  and reference.{" "}
                  <Link
                    href="/blog/what-is-answer-engine-optimization/"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    Full breakdown here.
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
                  How is AEO different from GEO?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  AEO focuses on answer engines &mdash; tools like ChatGPT and
                  Perplexity that synthesize a direct response. GEO (generative
                  engine optimization) focuses on generative search surfaces
                  like Google AI&nbsp;Overviews and Gemini. In practice, a
                  strong AI visibility strategy covers both. The methods overlap
                  but the surfaces and signals differ.{" "}
                  <Link
                    href="/blog/aeo-vs-geo-vs-seo/"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    AEO vs GEO vs SEO explained.
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
                  How long before I see results?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  Some changes &mdash; like schema markup and entity
                  clarification &mdash; can affect AI responses within weeks.
                  Broader citation gains typically take 4&ndash;8 weeks as
                  models re-index and retrain. The snapshot gives you a clear
                  baseline to measure against.
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
                  project, not by the hour, so you know the cost before we
                  start. Reach out for exact pricing &mdash; it depends on your
                  vertical and the scope of work.
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
                Let&rsquo;s see if AI is citing your business.
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
                show you exactly how answer engines handle your brand today,
                and what it takes to get cited.
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
