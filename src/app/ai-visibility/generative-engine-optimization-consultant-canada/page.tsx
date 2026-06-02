import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) Consultant in Canada",
  description:
    "Optimize your brand for AI-generated search results. GEO consultant helping Canadian businesses appear in Google AI Overviews, Gemini, and generative search.",
};

export default function GEOConsultantCanada() {
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
            <span>GEO Consultant</span>
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
              Generative Engine Optimization Consultant
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
              Generative engine optimization consultant in{" "}
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
              I help Canadian businesses appear in Google AI&nbsp;Overviews,
              Gemini, and every generative search surface that&rsquo;s
              replacing the ten blue links.{" "}
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

      {/* ── 01 — What is GEO ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="01" text="What is generative engine optimization" />
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
              GEO is the practice of optimizing your brand for AI-generated
              search results.
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
              Google AI&nbsp;Overviews, Gemini, and SGE are replacing
              traditional results with synthesized answers that cite a small
              number of sources. GEO ensures your business is among them. It
              targets the generative layer that sits on top of traditional
              search &mdash; the AI-written summary that users read{" "}
              <em style={{ fontStyle: "italic" }}>instead of</em> clicking
              through to your&nbsp;site.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — Generative search surfaces ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="The surfaces that matter" />
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
              Where generative search is already replacing links.
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
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Google AI&nbsp;Overviews
              </b>{" "}
              now appear on a growing share of queries, summarizing answers
              and citing two or three sources above the organic results.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>Gemini</b>{" "}
              handles conversational follow-ups directly inside Google. And
              third-party engines like{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Perplexity and ChatGPT
              </b>{" "}
              are pulling search share from Google entirely. If your content
              isn&rsquo;t structured for these surfaces, you&rsquo;re losing
              visibility every&nbsp;month.{" "}
              <Link
                href="/blog/how-to-appear-in-google-ai-overviews/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                How to appear in Google AI&nbsp;Overviews.
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
              <DelivRow text="Generative search audit across Google AI Overviews, Gemini, Perplexity, and ChatGPT" />
              <DelivRow text="Content restructuring for AI snippet extraction and citation" />
              <DelivRow text="Entity SEO — structured data, knowledge-graph signals, and brand disambiguation" />
              <DelivRow text="Schema markup tuned for generative retrieval pipelines" />
              <DelivRow text="Authority building — earning the third-party signals generative engines trust" />
              <DelivRow text="Competitor gap analysis — who AI cites instead of you and why" />
              <DelivRow text="Ongoing monitoring as generative surfaces evolve" />
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
              GEO is most valuable for businesses that already invest in SEO
              and content but are watching their click-through rates erode as
              Google&rsquo;s AI&nbsp;Overviews answer queries directly.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Real estate, healthcare, financial services, legal, SaaS, and
                professional services
              </b>{" "}
              are the verticals I work with most. If your organic traffic is
              trending down while your rankings stay flat, generative search
              is likely the reason.
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
                    I test your brand across Google AI&nbsp;Overviews,
                    Perplexity, ChatGPT, and Gemini and show you exactly where
                    you appear &mdash; cited, missing, or misrepresented.
                    Delivered within 48&nbsp;hours.
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
                    GEO Audit
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    Deep diagnosis of how generative search handles your brand
                    &mdash; AI&nbsp;Overview trigger analysis, entity mapping,
                    content extractability review, schema audit, and competitor
                    citation analysis. You get a prioritized action plan.
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
                    I execute the highest-impact fixes myself &mdash; content
                    restructuring, schema markup, entity reinforcement, and
                    authority building &mdash; in a focused 4&ndash;6 week
                    sprint.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── How GEO relates to AEO ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div className="local-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.2vw, 34px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.015em",
                  maxWidth: "24ch",
                  position: "relative",
                }}
              >
                GEO and AEO are two sides of the same coin.
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
                AEO targets answer engines like ChatGPT and Perplexity. GEO
                targets generative search surfaces like Google
                AI&nbsp;Overviews and Gemini. A comprehensive AI visibility
                strategy covers both &mdash; and that&rsquo;s exactly what I
                deliver. The methods overlap, but the surfaces, signals, and
                measurement are distinct enough that they require separate
                attention.{" "}
                <Link
                  href="/blog/aeo-vs-geo-vs-seo/"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  AEO vs GEO vs SEO &mdash; full comparison.
                </Link>
              </p>
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
                  What is generative engine optimization?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  GEO is the practice of optimizing your content and brand
                  signals so generative search engines &mdash; Google
                  AI&nbsp;Overviews, Gemini, SGE &mdash; cite your business
                  in their AI-generated summaries. It focuses on the
                  synthesized answers that appear above traditional organic
                  results.
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
                  Will GEO replace my existing SEO?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  No &mdash; GEO builds on top of SEO. Strong technical SEO,
                  authority, and structured data are prerequisites. But GEO
                  adds a layer of optimization specifically for how generative
                  models select, extract, and cite sources. You need both.
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
                  How do I know if Google AI Overviews are affecting my
                  traffic?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  The clearest sign is declining click-through rates on
                  queries where your rankings haven&rsquo;t dropped. If your
                  impressions are stable but clicks are falling, AI Overviews
                  are likely answering the query before users reach your
                  listing. The free snapshot will confirm this.{" "}
                  <Link
                    href="/blog/how-to-appear-in-google-ai-overviews/"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    Learn how to appear in AI&nbsp;Overviews.
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
                  The free snapshot costs nothing. The full audit is a
                  fixed-fee engagement. Implementation sprints are scoped and
                  priced per project, not by the hour, so you know the cost
                  before we start. Reach out for exact pricing &mdash; it
                  depends on your vertical and scope.
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
                Let&rsquo;s see how generative search handles your&nbsp;brand.
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
                show you exactly where your brand appears (or doesn&rsquo;t)
                in Google AI&nbsp;Overviews, Gemini, ChatGPT, and Perplexity.
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
