import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Visibility Audit for Mortgage Brokers",
  description:
    "Is your mortgage brokerage showing up when clients ask AI for recommendations? Get a free AI Visibility Snapshot for your mortgage business.",
};

export default function AIVisibilityMortgageBrokers() {
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
            <span>Mortgage Brokers</span>
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
              AI Visibility for Mortgage Brokers
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
                maxWidth: "20ch",
              }}
            >
              When clients ask AI for a mortgage broker, is your name{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                the one it gives?
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
              More homebuyers are asking ChatGPT, Perplexity, and Google
              AI&nbsp;Overviews for mortgage advice before they ever call a
              broker. If your brokerage isn&rsquo;t showing up in those AI
              answers, you&rsquo;re invisible to a growing share of high-intent
              clients.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                We help mortgage brokers across Canada get found, recommended,
                and cited by&nbsp;AI.
              </b>
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
                Get a Free AI Visibility Snapshot{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                className="btn btn-ghost"
              >
                See how it works
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 01 — The Problem ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="01" text="The problem" />
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
              Your clients are changing how they find a mortgage broker.
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
              The old path was a Google search and a referral from a realtor.
              That still matters &mdash; but a growing number of homebuyers
              are now asking AI questions like &ldquo;best mortgage broker in
              Mississauga&rdquo; or &ldquo;how much can I afford on a $90K
              salary?&rdquo; and AI is naming specific brokerages in the
              answer.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                If your competitors are named and you aren&rsquo;t, the client
                never sees your brokerage.
              </b>{" "}
              They don&rsquo;t scroll past your listing &mdash; your name
              never enters the conversation at all.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 — What We Audit ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="What we audit" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              <AuditCard
                title="AI Citations"
                body="Is your brokerage named when clients ask AI about mortgage services in your area? We test across ChatGPT, Perplexity, Gemini, and Google AI Overviews."
              />
              <AuditCard
                title="Entity Clarity"
                body="Does AI know your brokerage name, service area, specialties, and what makes you different from the broker down the street?"
              />
              <AuditCard
                title="Content Retrievability"
                body="Can AI engines extract useful, cite-worthy answers from your website content — or is it locked in PDFs, rate tables, and JavaScript calculators?"
              />
              <AuditCard
                title="Competitor Gap"
                body="Which brokerages does AI recommend instead of yours — and why? We identify the specific signals driving their visibility."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 03 — How It Works ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="How it works" />
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
                    I check how your brokerage appears across ChatGPT,
                    Perplexity, Gemini, and Google AI&nbsp;Overviews &mdash;
                    cited, missing, or misrepresented. 48-hour turnaround.
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
                    Full Audit + Action Plan
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    Deep diagnosis: prompt testing with mortgage-specific
                    queries, entity mapping, schema review, and competitor
                    citation analysis. You get a prioritized action plan you
                    can act on immediately.
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
                    Implementation
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      marginTop: 8,
                      lineHeight: 1.6,
                    }}
                  >
                    I execute the fixes myself &mdash; AEO content, schema
                    markup, entity signals, and authority building &mdash; in
                    a focused 4&ndash;6 week sprint.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 04 — Common AI Queries ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel
              number="04"
              text="Queries your clients are asking AI"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <QueryItem text={`"Best mortgage broker in [city]"`} />
              <QueryItem text={`"How much mortgage can I afford on $100K salary?"`} />
              <QueryItem text={`"Fixed vs variable rate mortgage Canada 2025"`} />
              <QueryItem text={`"First-time home buyer programs in Ontario"`} />
              <QueryItem text={`"Mortgage broker vs bank — which is better?"`} />
              <QueryItem text={`"How to get approved with bad credit in Canada"`} />
              <QueryItem text={`"Best mortgage rates in [city] right now"`} />
              <QueryItem text={`"Should I break my mortgage to refinance?"`} />
            </div>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 30,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                If your brokerage isn&rsquo;t being cited for queries like
                these, you&rsquo;re leaving clients on the table.
              </b>
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 05 — Proof ── */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="05" text="Proof, not promises" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="local-panel">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.2vw, 34px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.015em",
                  maxWidth: "26ch",
                  position: "relative",
                }}
              >
                I built a mortgage product to prove this works.
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
                I built HomeCalc.ca &mdash; a Canadian mortgage and
                real-estate calculator &mdash; to be cited{" "}
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  1,100+ times
                </b>{" "}
                by AI search engines. The same methods apply to mortgage
                brokerages: structured content, entity clarity, and the
                technical foundation that AI trusts. I test on my own products
                before I touch yours.
              </p>
              <Link
                href="/case-studies/homecalc-ai-visibility/"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--accent)",
                }}
              >
                Read the HomeCalc case study &rarr;
              </Link>
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
                  No. Traditional SEO gets you ranked on a results page. AI
                  visibility gets you{" "}
                  <em style={{ fontStyle: "italic" }}>named in the answer</em>.
                  When a client asks ChatGPT &ldquo;best mortgage broker in
                  Brampton,&rdquo; the AI doesn&rsquo;t return ten blue links
                  &mdash; it names two or three brokerages. The signals that
                  drive those mentions are different from traditional SEO.
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
                  How much does this cost?
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
                  before we start. Reach out for exact pricing.
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
                  Do I need to change my website?
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  Usually, yes &mdash; but not a redesign. Most mortgage
                  broker websites have the right information buried in the
                  wrong format. We restructure your existing content so AI can
                  extract and cite it, add schema markup, and strengthen entity
                  signals. The changes are invisible to your clients but make a
                  material difference to how AI engines read your site.
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
                  Broader visibility gains typically take 4&ndash;8 weeks as
                  AI models re-index and retrain. The snapshot and audit will
                  give you a clear baseline to measure against.
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
                Find out if clients can find your brokerage in
                AI&nbsp;search.
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
                Request a free AI Visibility Snapshot &mdash; I&rsquo;ll show
                you exactly how your brokerage appears (or doesn&rsquo;t) when
                clients ask AI for mortgage recommendations in
                your&nbsp;area.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get Your Free Snapshot <span className="arr">&rarr;</span>
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

function AuditCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: "28px 26px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 19,
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
          marginTop: 10,
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
    </div>
  );
}

function QueryItem({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "baseline",
        padding: "13px 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
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
      <span
        style={{
          fontSize: 16,
          color: "var(--ink)",
          lineHeight: 1.5,
          fontFamily: "var(--sans)",
        }}
      >
        {text}
      </span>
    </div>
  );
}
