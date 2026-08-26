import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS } from "@/lib/offers";

const SLUG = "ai-visibility-consultant-vs-agency-vs-tool";
const ARTICLE_TITLE = "AI Visibility Consultant vs Agency vs Tool";
const ARTICLE_DESCRIPTION =
  "Three ways to get AI visibility work done — software you run yourself, an agency retainer, or an independent consultant. What each is actually built for, what each costs, and how to know which one fits your situation.";
const DATE_PUBLISHED = "2026-08-26";
const HUB_URL = "/ai-visibility/";
const CONSULTANT_CANADA_URL = "/ai-visibility/ai-visibility-consultant-canada/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const TOOLS_VS_AUDIT_URL = "/blog/ai-visibility-tools-vs-audit/";
const IMPLEMENTATION_URL = "/ai-visibility/implementation/";
const CHECKLIST_URL = "/blog/ai-visibility-audit-checklist/";
const COMPARISON_URL = "/blog/peec-vs-profound-vs-airops/";

const COMPARISON_ROWS = [
  {
    label: "What it actually is",
    tool: "Self-serve software you run and read yourself",
    agency: "A team, an account manager, and a monthly retainer",
    consultant: "One named person, hired for a specific diagnosis",
  },
  {
    label: "Typical cost",
    tool: "$50–500/month, ongoing",
    agency: "$2,000–5,000/month, ongoing",
    consultant: `${OFFERS.audit.price} ${OFFERS.audit.priceNote}`,
  },
  {
    label: "What you get",
    tool: "Dashboards and citation data",
    agency: "Strategy, content, and execution across channels",
    consultant: "Diagnosis, competitor gaps, and a prioritized fix list",
  },
  {
    label: "Who does the analysis",
    tool: "You do, from the data it shows you",
    agency: "Whoever on the team is staffed to your account",
    consultant: "The consultant, directly, with no handoff",
  },
  {
    label: "Who ships the fixes",
    tool: "You, or whoever runs your site",
    agency: "The agency's own team, as part of the retainer",
    consultant: "Your existing developer — the plan is built for handoff",
  },
  {
    label: "Best for",
    tool: "Teams who already know what to fix and just want tracking",
    agency: "Businesses that want one team handling many channels at once",
    consultant: "Businesses that want a clear diagnosis without a retainer",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "What's the difference between an AI visibility consultant and an agency?",
    a: "Scale and structure, mostly. An agency staffs a team against your account, bills a monthly retainer typically in the $2,000–$5,000 range, and coordinates strategy, content, and execution across whatever channels are in scope. An independent consultant is one named person doing the analysis directly, usually for a flat one-time fee, without a retainer or a rotating account team.",
  },
  {
    q: "Is a tool enough, or do I need to hire someone?",
    a: "Depends on whether you already know what to fix. A tool is enough if you have the in-house expertise to read the data and act on it — it's tracking, not strategy. If you don't yet know why you're invisible on the queries that matter, or what to prioritize, a tool gives you more dashboards without answering that question. See tools vs audit for that comparison in more depth.",
  },
  {
    q: "Why not just hire an agency for AI visibility?",
    a: "Sometimes you should — if you need several channels coordinated by one team and have the budget for an ongoing retainer. The tradeoff is cost and structure: a typical retainer runs $2,000–5,000 a month, ongoing, and your account may be staffed by whoever the agency assigns rather than the person who understands your business best. If what you actually need is a one-time diagnosis, that's a lot of ongoing cost for a question that doesn't need to be asked every month.",
  },
  {
    q: "Can an independent consultant really replace an agency?",
    a: "For a full-service, many-channel retainer — no, and that's not the pitch. For a specific, bounded question — where are AI engines citing us, where aren't they, and what should we fix first — one consultant who does the work personally, with no account-manager layer, covers exactly that without the retainer commitment. Larger, ongoing execution across many channels is genuinely an agency's strength.",
  },
  {
    q: "How much does each option cost?",
    a: "AI visibility tools typically run $50–500 per month. Agency retainers for comparable strategic work typically run $2,000–5,000 per month, ongoing. A one-time AI visibility audit from an independent consultant is a flat fee — $1,500 CAD here, covering all major AI platforms with no retainer required to start.",
  },
] as const;

const blogGraph = buildBlogSchema({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
})["@graph"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...blogGraph,
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

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
};

const linkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
  textDecorationThickness: 1,
} as const;

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

export default function ConsultantVsAgencyVsToolPost() {
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
            <Link href={HUB_URL} style={{ color: "var(--muted)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>
              Blog
            </Link>
            <span>/</span>
            <span>Consultant vs Agency vs Tool</span>
          </nav>
        </RevealSection>
      </div>

      <header style={{ padding: "24px 0 26px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11.5px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              Strategy
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-.025em",
              }}
            >
              AI visibility consultant vs agency vs tool &mdash;{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                which one actually fits what you need?
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 21,
                color: "var(--muted)",
                marginTop: 18,
                lineHeight: 1.5,
              }}
            >
              Software you run yourself, a team on retainer, or one person
              hired for a specific diagnosis — three genuinely different
              ways to get this work done, not three tiers of the same thing.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="August 26, 2026" readTime="9 min read" />
          </RevealSection>
        </div>
      </header>

      <article>
        <div
          className="wrap"
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            lineHeight: 1.72,
            color: "#2a2824",
            maxWidth: 740,
          }}
        >
          <RevealSection>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "6px 0 36px",
              }}
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
                In short
              </div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 16,
                  color: "var(--ink)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                A tool is right if you already know what to fix and just want
                tracking. An agency is right if you want one team coordinating
                several channels on an ongoing retainer. A consultant is right
                if you want a specific diagnosis and a fix list, without
                signing up for either of the other two.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              These get talked about as if they're competing options for the
              same job. They aren't, quite — they solve different parts of
              the problem, at different scales, for different budgets. Below
              is what each is actually built to do, what it costs, and which
              one fits a given situation.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What each one is actually built to do" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div
              style={{
                overflowX: "auto",
                margin: "0 0 26px",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--sans)",
                  fontSize: 14.5,
                }}
              >
                <thead>
                  <tr style={{ background: "var(--panel)" }}>
                    {["", "Tool", "Agency", "Consultant"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "10px 12px",
                          borderBottom: "1px solid var(--line-strong)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label}>
                      <td
                        style={{
                          padding: "10px 12px",
                          borderBottom: "1px solid var(--line)",
                          fontWeight: 600,
                          color: "var(--ink)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.label}
                      </td>
                      <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                        {row.tool}
                      </td>
                      <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                        {row.agency}
                      </td>
                      <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                        {row.consultant}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginBottom: 26 }}>
              For a deeper look at the tool-vs-audit half of this specifically,
              see{" "}
              <Link href={TOOLS_VS_AUDIT_URL} style={linkStyle}>
                AI visibility tools vs audit
              </Link>
              . For a comparison of specific tools by name, see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the best AI visibility tools
              </Link>{" "}
              or{" "}
              <Link href={COMPARISON_URL} style={linkStyle}>
                Profound vs AirOps vs Peec
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="The honest tradeoff in each" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>A tool</strong> is the cheapest option
              and the only one that gives you ongoing, self-serve data. Its
              limit isn't the data — it's that a dashboard doesn't tell you
              why a number is what it is, or what to do about it. That
              analysis is on you.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>An agency</strong> is built for
              breadth: one team coordinating strategy, content, and execution
              across several channels at once, which is genuinely valuable
              when that's what you need. The tradeoff is cost and structure —
              a typical retainer runs $2,000–5,000 a month, ongoing, and the
              person actually doing the analysis on your account may not be
              the person you spoke to when you signed. See{" "}
              <Link href={CONSULTANT_CANADA_URL} style={linkStyle}>
                why an operator instead of an agency
              </Link>{" "}
              for the fuller version of this argument.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>An independent consultant</strong> is
              built for a bounded question — where are you cited, where
              aren't you, and what should you fix first — done by one named
              person, usually for a flat fee, with no retainer required to
              start. The honest limit: a consultant working this way
              generally isn't the one implementing the fixes. The output is a
              plan{" "}
              <Link href={IMPLEMENTATION_URL} style={linkStyle}>
                built for your own developer to ship
              </Link>
              , not a promise of done-for-you execution — which is a feature
              for some businesses and a gap for others, depending on whether
              you already have someone who can act on it.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Which one fits your situation" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>You already know what's wrong
                and just want to track progress</strong> — a tool.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>You need one team running
                strategy, content, and execution across several channels at
                once</strong> — an agency.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>You want a clear answer to "where
                are we invisible and why," without signing an ongoing
                retainer</strong> — a consultant.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={labelStyle}>You're not sure yet</strong> — run
                through the{" "}
                <Link href={CHECKLIST_URL} style={linkStyle}>
                  free audit checklist
                </Link>{" "}
                first. What it turns up usually makes the choice obvious.
              </li>
            </ul>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ marginBottom: 36 }}>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 21,
                      fontWeight: 600,
                      letterSpacing: "-.01em",
                      color: "var(--ink)",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              For the full{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              strategy framework, see the hub. For the specific case against
              an agency retainer, see{" "}
              <Link href={CONSULTANT_CANADA_URL} style={linkStyle}>
                AI visibility & AI search optimization in Canada
              </Link>
              .
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <em>
                Hami Tahm is an independent AI visibility consultant based in
                Toronto.
              </em>
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 14,
                color: "var(--faint)",
                lineHeight: 1.65,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px solid var(--line)",
              }}
            >
              <strong style={{ color: "var(--muted)", fontWeight: 600 }}>
                Disclosure:
              </strong>{" "}
              This article is educational and also describes a service I
              sell. Agency and tool pricing ranges above are typical
              published-market figures, not quotes from any specific vendor.
            </p>
          </RevealSection>
        </div>

        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <div
              style={{
                padding: "44px 0 30px",
                borderTop: "1px solid var(--line)",
                marginTop: 44,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 22,
                }}
              >
                Keep reading
              </div>

              <KeepReadingLink
                href={TOOLS_VS_AUDIT_URL}
                title="AI Visibility Tools vs Audit"
                tag="Strategy"
              />
              <KeepReadingLink
                href={CHECKLIST_URL}
                title="The AI Visibility Audit Checklist"
                tag="Strategy"
              />
              <KeepReadingLink
                href={CONSULTANT_CANADA_URL}
                title="AI Visibility & AI Search Optimization in Canada"
                tag="Service"
              />
            </div>
          </RevealSection>
        </div>
      </article>

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
                One consultant. One diagnosis. No retainer.
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
                Cross-platform citation analysis, accuracy review, competitor
                gap mapping, and a prioritized action plan.{" "}
                {OFFERS.audit.price} {OFFERS.audit.priceNote}.
              </p>
              <Link
                href={OFFERS.checker.href}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI Visibility Check{" "}
                <span className="arr">&rarr;</span>
              </Link>
              <Link
                href={OFFERS.audit.href}
                className="btn btn-ghost"
                style={{ marginTop: 14, marginLeft: 12, position: "relative" }}
              >
                Or book the {OFFERS.audit.price} audit
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
    <h2
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 400,
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
    </h2>
  );
}

function InlineAuditCTA() {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 14,
        padding: "30px 32px",
        margin: "42px 0",
        boxShadow:
          "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-.01em",
        }}
      >
        Want the consultant option?
      </h3>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: "14.5px",
          color: "var(--muted)",
          margin: "8px 0 18px",
          lineHeight: 1.55,
        }}
      >
        One consultant, all six major platforms, a flat fee, no retainer to
        get started.
      </p>
      <Link href={OFFERS.audit.href} className="btn btn-primary">
        Book an AI Visibility Audit <span className="arr">&rarr;</span>
      </Link>
    </div>
  );
}

function KeepReadingLink({
  href,
  title,
  tag,
}: {
  href: string;
  title: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 20,
        padding: "15px 0",
        borderBottom: "1px solid var(--line)",
        transition: "padding-left .2s",
      }}
    >
      <span
        style={{
          fontFamily: "var(--serif)",
          fontSize: 19,
          fontWeight: 500,
          color: "var(--ink)",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11.5px",
          color: "var(--faint)",
          whiteSpace: "nowrap",
        }}
      >
        {tag}
      </span>
    </Link>
  );
}
