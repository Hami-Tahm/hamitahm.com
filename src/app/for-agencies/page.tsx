import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AUDIT_PLATFORMS, AUDIT_PLATFORM_COUNT_WORD, BOOKING_URL } from "@/lib/offers";

/**
 * /for-agencies/: the white-label entry point.
 *
 * WHY THIS PAGE EXISTS (2026-09-13). Agencies whose clients are asking "why does
 * a competitor show up in ChatGPT and we don't" have three options: build the
 * capability, buy a dashboard, or have someone deliver it behind their brand.
 * The third is a real market and this site had no page for it, so outreach had
 * nowhere to land and AI answers had nothing to cite for "white label AEO".
 *
 * TONE RULE, deliberate: this page does not attack a named competitor. The one
 * genuine differentiator here (a sample built on real sites, including a result
 * that is unflattering) is stated as our own fact. It is stronger asserted than
 * it would be as a comparison, and it stays true regardless of what anyone else
 * changes on their site next week.
 *
 * ⚠️ NO PRICES. Consistent with the 2026-09-08 decision. Wholesale rates are
 * quoted per scope on a call. Do not add a number here without asking Hami.
 */

const SLUG = "/for-agencies/";
const TURNAROUND = "7 business days";

export const metadata: Metadata = {
  title: "White-Label AI Visibility Audits for Agencies",
  description:
    "Add AI visibility to your agency without hiring for it. Audits across six AI platforms, delivered under your brand, by one senior consultant in Toronto. Your client relationship stays yours.",
  alternates: { canonical: `https://hamitahm.com${SLUG}` },
};

const FAQ_ITEMS = [
  {
    q: "Will you ever contact my clients?",
    a: "No. You own the relationship from first conversation to invoice. I take the brief from you, deliver to you, and you present it. I do not email, call, market to, or connect with your clients on any channel. If a client wants to speak to the analyst, that happens with you on the call.",
  },
  {
    q: "Whose brand is on the report?",
    a: "Yours. The deliverable carries your logo, your colours and your contact details. My name does not appear in it. The one thing I ask is that the methodology section stays intact, because it is what makes the findings checkable if your client's developer questions them.",
  },
  {
    q: "Who actually does the work?",
    a: "I do. There is no junior team and nothing is passed down, which is the reason to use a specialist rather than adding a service line you have to staff. It is also the honest limit of this arrangement: capacity is finite, so lead time matters more here than it would with an agency.",
  },
  {
    q: "How long does an audit take?",
    a: `About ${TURNAROUND}, depending on the size of the site and how many prompts the market needs. You get a delivery date when the brief is agreed, before you promise anything to your client.`,
  },
  {
    q: "What does it cost me?",
    a: "Wholesale is quoted per client, because scope genuinely varies with site size, market and how many competitors you want benchmarked. You set your own retail price and keep the margin. There is no published rate card and no required markup.",
  },
  {
    q: "Is there a minimum or a contract?",
    a: "No minimum and no contract. Send one client or several. The sensible way to start is a single audit on an account you already hold, so you can see the deliverable before you sell it to anyone.",
  },
  {
    q: "What if my client's developer disputes a finding?",
    a: "Then they should be able to check it, and they can. Every finding in the report carries the prompt, the engine, the country the answer was recorded from and the date. If something cannot be reproduced, tell me and I re-run it and correct the record rather than defending it.",
  },
  {
    q: "Can you implement the fixes as well?",
    a: "No, and that is deliberate rather than a gap. The action plan is written so your team, or your client's developer, can execute it without interpreting it. Implementation work has unbounded scope, and taking it on is what stops a specialist being available when you need one.",
  },
];

function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://hamitahm.com${SLUG}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
          { "@type": "ListItem", position: 2, name: "For Agencies", item: `https://hamitahm.com${SLUG}` },
        ],
      },
      {
        "@type": "Service",
        name: "White-Label AI Visibility Audits for Agencies",
        serviceType: "White-label AI visibility and answer engine optimization",
        areaServed: ["Canada", "United States"],
        provider: { "@id": "https://hamitahm.com/#hami-tahm" },
        audience: { "@type": "Audience", audienceType: "Marketing and SEO agencies" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

export default function ForAgencies() {
  const structuredData = buildStructuredData();

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
            <Link href="/" style={{ color: "var(--faint)" }}>
              Home
            </Link>
            <span>/</span>
            <span>For Agencies</span>
          </nav>
        </RevealSection>
      </div>

      {/* Hero */}
      <header style={{ padding: "34px 0 50px" }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
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
                style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }}
              />
              White-label &middot; Toronto, Canada
            </div>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 60px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "20ch",
              }}
            >
              Your clients are asking about AI search. Answer them without hiring for it.
            </h1>
          </RevealSection>

          <RevealSection delay={0.08}>
            <p
              style={{
                marginTop: 26,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
              }}
            >
              I run AI visibility audits across {AUDIT_PLATFORM_COUNT_WORD} AI platforms and deliver
              them under your brand. You keep the client, the relationship and the margin. I stay
              behind the scenes and never appear in front of them.
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 32, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
              <Link href={BOOKING_URL} className="btn btn-primary">
                Talk about a partnership <span className="arr">&rarr;</span>
              </Link>
              <Link
                href="/ai-visibility/sample-report/"
                style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--faint)" }}
              >
                Or read a real sample report first &rarr;
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* What you can sell */}
      <section style={{ padding: "50px 0" }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <RevealSection>
            <SectionLabel number="01" text="What you can sell" />
            <h2 style={h2Style}>One diagnostic, then a reason to report every month.</h2>
            <p style={{ ...proseStyle, marginTop: 20 }}>
              The audit is the benchmark. What makes it a service line rather than a one-off is
              what follows it: a plan your team can bill against, and optional monitoring that
              gives you something real to put in front of the client each month.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginTop: 34,
              }}
            >
              <OfferCard
                step="Step 1"
                title="AI Visibility Audit"
                body={`Where the client stands across ${AUDIT_PLATFORM_COUNT_WORD} platforms, which competitors get recommended instead, and what to change first. One-time, about ${TURNAROUND}.`}
              />
              <OfferCard
                step="Step 2 (optional)"
                title="Action Plan"
                body="The findings turned into page-level work: content structure, entities, structured data, rendering. Written for your team to execute, not to interpret."
              />
              <OfferCard
                step="Step 3 (optional)"
                title="Monitoring"
                body="The same prompt panel re-measured on a fixed term, so month-to-month movement is reported against a baseline rather than guessed at."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* How it runs */}
      <section style={{ padding: "50px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="02" text="How it runs behind the scenes" />
            <h2 style={h2Style}>You stay in front. I stay behind.</h2>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div style={{ marginTop: 30 }}>
              <Step
                n="1"
                title="You brief me."
                body="Client URL, their market, the competitors you want benchmarked, and anything you already know. Your intake, your process. I never speak to the client to get it."
              />
              <Step
                n="2"
                title="I run the audit."
                body={`Every prompt tested across ${AUDIT_PLATFORM_COUNT_WORD} platforms: ${AUDIT_PLATFORMS.join(", ")}. Recorded with the engine, the country and the date attached to each result.`}
              />
              <Step
                n="3"
                title="You get it under your brand."
                body="Your logo, your colours, your contact details. My name is not in the deliverable. You get the underlying data too, so you can answer questions without coming back to me."
              />
              <Step
                n="4"
                title="You present it and sell what comes next."
                body="You own the meeting and the follow-on work. If a technical question comes up, message me and I will help you prepare the answer."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why this one */}
      <section style={{ padding: "50px 0" }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <RevealSection>
            <SectionLabel number="03" text="Why this one" />
            <h2 style={h2Style}>Three things you can check before you commit.</h2>
            <p style={{ ...proseStyle, marginTop: 20 }}>
              You are putting your brand on someone else&rsquo;s work. These are the parts you can
              verify yourself rather than take on trust.
            </p>
          </RevealSection>

          <RevealSection delay={0.08}>
            <div style={{ marginTop: 32 }}>
              <Reason
                title="The sample is real, including the part that looks bad."
                body={
                  <>
                    Most sample reports in this category are built on a fictional business with
                    illustrative numbers. Mine is built on sites I own, with published console data,
                    and it includes an unflattering result: a site that earned thousands of AI
                    citations while the page it actually sells earned twelve. A sample that only
                    shows wins tells you nothing about what happens when the answer is
                    unflattering.{" "}
                    <Link href="/ai-visibility/sample-report/" style={linkStyle}>
                      Read the full sample
                    </Link>
                    .
                  </>
                }
              />
              <Reason
                title="The method is published, so your client's developer can check it."
                body={
                  <>
                    How the measurement works is written down rather than described as proprietary
                    magic. That matters when you are the one in the room defending the numbers.{" "}
                    <Link href="/methodology/" style={linkStyle}>
                      Methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/research/" style={linkStyle}>
                      published research
                    </Link>
                    .
                  </>
                }
              />
              <Reason
                title="One consultant, which is a limit as much as a feature."
                body="Nothing is passed to junior staff, and the person who ran the audit is the person you can ask about it. The trade is capacity: this works for agencies who can give a week of notice, and it does not work for same-day volume."
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "50px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <SectionLabel number="04" text="What agencies ask" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <div style={{ marginTop: 10 }}>
              {FAQ_ITEMS.map(({ q, a }) => (
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
                  <p style={{ marginTop: 10, fontSize: 15, color: "var(--muted)", lineHeight: 1.65 }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "30px 0 80px" }}>
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
                Start with one client you already have.
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
                One audit on an existing account, so you see the deliverable before you sell it to
                anyone. No minimum, no contract.
              </p>
              <Link href={BOOKING_URL} className="btn btn-primary" style={{ marginTop: 30, position: "relative" }}>
                Talk about a partnership <span className="arr">&rarr;</span>
              </Link>
              <p style={{ marginTop: 20, fontSize: 14, color: "var(--muted)", position: "relative" }}>
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

/* ── bits ─────────────────────────────────────────────────────────────── */

const h2Style: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontWeight: 500,
  fontSize: "clamp(26px, 3.6vw, 38px)",
  lineHeight: 1.12,
  letterSpacing: "-.015em",
};

const proseStyle: React.CSSProperties = {
  fontSize: "clamp(16px, 1.9vw, 18px)",
  color: "var(--muted)",
  maxWidth: "58ch",
  lineHeight: 1.65,
};

const linkStyle: React.CSSProperties = { color: "var(--accent)", fontWeight: 500 };

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
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

function OfferCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "22px 22px",
        background: "var(--panel)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        {step}
      </div>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 20,
          fontWeight: 500,
          marginTop: 6,
          letterSpacing: "-.01em",
        }}
      >
        {title}
      </h3>
      <p style={{ marginTop: 10, fontSize: 14.5, color: "var(--muted)", lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="pstep">
      <div style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--accent)", fontWeight: 400 }}>
        {n}
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 600, letterSpacing: "-.01em" }}>
          {title}
        </h3>
        <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 8, lineHeight: 1.6 }}>{body}</p>
      </div>
    </div>
  );
}

function Reason({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div style={{ padding: "22px 0", borderTop: "1px solid var(--line)" }}>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>
        {title}
      </h3>
      <p style={{ marginTop: 10, fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65, maxWidth: "62ch" }}>
        {body}
      </p>
    </div>
  );
}
