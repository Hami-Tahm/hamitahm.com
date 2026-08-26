import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { OFFERS, AUDIT_PLATFORM_COUNT_WORD } from "@/lib/offers";

const SLUG = "ai-visibility-audit-checklist";
const ARTICLE_TITLE = "The AI Visibility Audit Checklist: 23 Things to Check";
const ARTICLE_DESCRIPTION =
  "A free, 23-point checklist covering crawlability, entity and schema, content answerability, citation tracking, and competitor benchmarking — everything a professional AI visibility audit checks, laid out so you can run it yourself first.";
const DATE_PUBLISHED = "2026-08-26";
const HUB_URL = "/ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const HOW_TO_CHECK_URL = "/blog/how-to-check-ai-visibility/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";
const SPA_TO_SSG_URL = "/blog/spa-to-ssg-ai-visibility/";
const FAQ_BUG_URL = "/blog/faq-schema-accordion-bug/";
const PLATFORM_URL = "/blog/which-ai-platform-matters-most/";
const SAMPLE_REPORT_URL = "/ai-visibility/sample-report/";

const FAQ_ITEMS = [
  {
    q: "Can I do an AI visibility audit myself?",
    a: "Yes, up to a point. This checklist covers the same categories a paid audit covers — crawlability, entity and schema, content, citations, and competitors. What you can't easily replicate yourself is scale: running the same 30 prompts across six platforms repeatedly to separate a real pattern from ordinary AI response variance, and a prioritized fix list ranked by expected impact rather than a raw list of problems.",
  },
  {
    q: "How long does a DIY AI visibility audit take?",
    a: "Budget half a day for a first pass if you go through all five categories properly — most of the time goes into manually checking ChatGPT, Perplexity, and Google AI Overviews for your core queries and comparing what you find to competitors. The technical and schema sections are faster if you already have Search Console access.",
  },
  {
    q: "What's the difference between this checklist and a professional AI visibility audit?",
    a: "This checklist tells you where to look. A professional audit does the looking at scale — cross-platform citation tracking across all six major engines, accuracy review of what AI systems say about you, competitor gap analysis, and a written, prioritized action plan. Think of the checklist as the diagnostic questions; the audit as the answers, fully worked.",
  },
  {
    q: "How often should I re-run this checklist?",
    a: "Quarterly is reasonable for most businesses. AI platforms retrain and change retrieval behavior on their own schedule, not yours, so a check that was accurate in January can be stale by April. If you've just shipped a site migration, a schema change, or new content targeting a buyer question, re-check those specific items immediately rather than waiting for the quarter.",
  },
  {
    q: "Do I need to check all six AI platforms?",
    a: "Not necessarily all six with equal effort. Which platform matters most depends on where your buyers actually go — see which AI platform matters most for your industry. But checking none of them, or only the one you personally use, is the most common gap this checklist is built to catch.",
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

const h3Style = {
  fontFamily: "var(--serif)",
  fontWeight: 600,
  fontSize: 23,
  letterSpacing: "-.01em",
  margin: "34px 0 12px",
  color: "var(--ink)",
} as const;

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

type ChecklistItem = { label: string; detail: string };

const CATEGORY_1: ChecklistItem[] = [
  {
    label: "Pages return real HTML to a bot, not an empty div",
    detail:
      "Single-page apps that render everything client-side often serve an empty shell to crawlers that don't execute JavaScript — one of the most common and most invisible gaps on this list.",
  },
  {
    label: "robots.txt doesn't block AI crawlers",
    detail:
      "Check for GPTBot, PerplexityBot, ClaudeBot, Google-Extended, and Amazonbot specifically — a blanket disallow rule written years ago for a different reason can silently exclude all of them.",
  },
  {
    label: "sitemap.xml is current and actually submitted",
    detail:
      "A sitemap that lists pages no longer live, or omits new ones, tells crawlers the wrong story about what exists.",
  },
  {
    label: "Core pages load fast enough not to time out",
    detail:
      "AI crawlers abandon slow pages the same way any bot does — Core Web Vitals aren't just a Google ranking input here.",
  },
  {
    label: "FAQ and collapsible content is server-rendered",
    detail:
      "A common React pattern hides FAQ answers behind client-side accordion state, which means the answer text never reaches the initial HTML — quietly costing FAQ rich-result eligibility along with it.",
  },
];

const CATEGORY_2: ChecklistItem[] = [
  {
    label: "One canonical entity, not duplicated per page",
    detail:
      "Person and Organization schema should be declared once and referenced by @id everywhere else — duplicating the same entity across pages confuses rather than reinforces it.",
  },
  {
    label: "sameAs links point to your real authoritative profiles",
    detail:
      "LinkedIn, Crunchbase, industry directories — these are what let an AI system corroborate that the entity on your site and the entity elsewhere are the same one.",
  },
  {
    label: "Name, address, and phone number match everywhere",
    detail:
      "Inconsistent NAP data across your site, Google Business Profile, and directory listings is a classic signal that quietly undermines entity confidence.",
  },
  {
    label: "FAQPage schema exists on genuine FAQ content",
    detail:
      "Only mark up content that's actually structured as question-and-answer — retrofitting FAQ schema onto prose that isn't really answering discrete questions doesn't hold up.",
  },
  {
    label: "Article schema has accurate datePublished and dateModified",
    detail:
      "A dateModified that never changes, on a page that clearly has changed, is a freshness signal working against you instead of for you.",
  },
];

const CATEGORY_3: ChecklistItem[] = [
  {
    label: "Each core page answers its target question in the first few sentences",
    detail:
      "AI systems extract and summarize — a direct answer up front gets pulled cleanly; one buried three paragraphs into scene-setting often doesn't.",
  },
  {
    label: "High-intent buyer questions each have a real page or section",
    detail:
      "If a buyer's actual question doesn't map to any specific content you own, an AI system has nothing of yours to cite when someone asks it.",
  },
  {
    label: "Pricing and scope are stated in plain text",
    detail:
      "\"Contact us for pricing\" gives an AI system nothing concrete to relay. A stated number, even a range, is something that can actually be quoted back to a buyer.",
  },
  {
    label: "Claims are backed by a specific number, not a vague superlative",
    detail:
      "\"21,700 citations analyzed\" is citable. \"Extensive experience\" is not — specificity is what separates a fact an AI system will repeat from a claim it will quietly ignore.",
  },
  {
    label: "Anything time-sensitive shows a visible last-updated date",
    detail:
      "A visible re-verification date lets both readers and AI systems judge how current a claim likely is, rather than treating a five-year-old page as equally fresh.",
  },
];

const CATEGORY_4: ChecklistItem[] = [
  {
    label: "Core buyer questions run in ChatGPT, Perplexity, Google AI Overviews, and Gemini within the last 30 days",
    detail:
      "There are seven free and freemium ways to do this yourself, covered separately below.",
  },
  {
    label: "A log of prompt coverage and share of voice over time, not a single check",
    detail:
      "One check tells you today's answer. A repeated log on a fixed schedule is what tells you whether you're gaining or losing ground.",
  },
  {
    label: "When you are mentioned, the description is factually accurate",
    detail:
      "Being cited isn't automatically good — no automated tool can verify this for you, which is exactly why it has to be read by a person.",
  },
  {
    label: "You know which specific pages get cited, not just that the domain does",
    detail:
      "Domain-level visibility hides the real story. Some pages do all the work; most contribute nothing, and you can't fix what you can't locate.",
  },
];

const CATEGORY_5: ChecklistItem[] = [
  {
    label: "You know which competitor gets named instead of you",
    detail:
      "On every core query where you don't appear, someone usually does. That name is the single most useful data point a free check can hand you.",
  },
  {
    label: "You've compared your entity and schema signals against theirs",
    detail:
      "If a competitor with weaker content still gets cited more often, the gap is frequently structural — schema, entity consistency, crawlability — not prose quality.",
  },
  {
    label: "You know which AI platform actually matters for your buyer journey",
    detail:
      "Not all six platforms carry equal weight for every business — check which one matters most before spreading equal effort across all of them.",
  },
  {
    label: "There's a written, prioritized fix list ranked by expected impact",
    detail:
      "A list of problems isn't a plan. Ranking them by what's likely to move the needle first is the difference between a checklist and a strategy.",
  },
];

export default function AIVisibilityAuditChecklistPost() {
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
            <span>AI Visibility Audit Checklist</span>
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
              The AI visibility audit checklist &mdash;{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                23 things to check before you pay anyone.
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
              Crawlability, entity and schema, content answerability, citation
              tracking, and competitor benchmarking &mdash; everything a
              professional audit checks, laid out so you can run it yourself
              first.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="August 26, 2026" readTime="11 min read" />
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
                Five categories, 23 checks: technical crawlability, entity and
                structured data, content answerability, citation tracking, and
                competitor benchmarking. Run all five before paying anyone to
                do it for you.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              A professional{" "}
              <Link href={OFFERS.audit.href} style={linkStyle}>
                AI visibility audit
              </Link>{" "}
              checks the same things this checklist walks through &mdash; it
              just does it across all {AUDIT_PLATFORM_COUNT_WORD} major AI
              platforms, at scale, with a written fix list at the end. Before
              you pay anyone for that, it&rsquo;s worth running the checklist
              yourself first. Most businesses find real gaps without spending
              a dollar. For background on what any of this actually means,
              start with{" "}
              <Link href={DEFINITION_URL} style={linkStyle}>
                what is AI visibility
              </Link>
              .
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="Crawlability & technical foundation" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              None of the rest matters if an AI crawler can&rsquo;t actually
              read your pages.
            </p>
            <ChecklistGroup items={CATEGORY_1} startAt={1} />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Entity & structured data" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              This is how an AI system decides you&rsquo;re a real, coherent
              entity worth citing &mdash; rather than a page it doesn&rsquo;t
              yet trust enough to attribute a claim to.
            </p>
            <ChecklistGroup items={CATEGORY_2} startAt={6} />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="Content answerability" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              Technically crawlable content that never actually answers a
              question directly still won&rsquo;t get pulled into a
              generated answer.
            </p>
            <ChecklistGroup items={CATEGORY_3} startAt={11} />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="Citation & mention tracking" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              You can&rsquo;t fix what you haven&rsquo;t checked. This is the
              step most businesses skip entirely.
            </p>
            <ChecklistGroup items={CATEGORY_4} startAt={16} />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Competitor benchmarking" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 20 }}>
              AI visibility isn&rsquo;t measured in isolation &mdash; it&rsquo;s
              measured against whoever gets named when you don&rsquo;t.
            </p>
            <ChecklistGroup items={CATEGORY_5} startAt={20} />
          </RevealSection>

          <RevealSection>
            <p style={{ margin: "8px 0 26px" }}>
              If you worked through all five sections and came out with a
              short list of gaps rather than a clean sheet, that&rsquo;s the
              normal outcome &mdash; running the same raw material at 30
              prompts across six engines is exactly what a{" "}
              <Link href={SAMPLE_REPORT_URL} style={linkStyle}>
                full sample report
              </Link>{" "}
              looks like done at scale, with the analysis already worked out.
              For ongoing tracking software instead of a one-time audit, see{" "}
              <Link href={TOOLS_URL} style={linkStyle}>
                the best AI visibility tools
              </Link>
              . And before you split effort evenly across all six platforms,
              worth checking{" "}
              <Link href={PLATFORM_URL} style={linkStyle}>
                which AI platform actually matters most
              </Link>{" "}
              for businesses like yours.
            </p>
          </RevealSection>

          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="Frequently asked questions" />
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
              strategy framework, see the hub. To run the technical checks
              yourself with tools instead of manual queries, see{" "}
              <Link href={HOW_TO_CHECK_URL} style={linkStyle}>
                how to check AI visibility
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
                Hami Tahm is an AI visibility consultant based in Toronto.
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
              This article is educational and also describes a service I sell.
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
                href={HOW_TO_CHECK_URL}
                title="How to Check AI Visibility: 7 Free Methods"
                tag="Basics"
              />
              <KeepReadingLink
                href={SPA_TO_SSG_URL}
                title="Your SPA Is Invisible to AI"
                tag="Technical SEO"
              />
              <KeepReadingLink
                href={FAQ_BUG_URL}
                title="The Silent SEO Bug in Your React FAQ Accordion"
                tag="Technical SEO"
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
                Ran the checklist and found gaps?
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
                gap mapping, and a prioritized action plan. {OFFERS.audit.price}{" "}
                {OFFERS.audit.priceNote}.
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

function ChecklistGroup({
  items,
  startAt,
}: {
  items: ChecklistItem[];
  startAt: number;
}) {
  return (
    <div style={{ marginBottom: 26 }}>
      {items.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            gap: 14,
            padding: "14px 0",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--accent)",
              flexShrink: 0,
              width: 24,
            }}
          >
            {String(startAt + i).padStart(2, "0")}
          </span>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 16,
              lineHeight: 1.55,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            <strong style={labelStyle}>{item.label}.</strong>{" "}
            <span style={{ color: "var(--muted)" }}>{item.detail}</span>
          </p>
        </div>
      ))}
    </div>
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
        Rather have this run for you?
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
        The audit covers all {AUDIT_PLATFORM_COUNT_WORD} major platforms —
        with platform-specific citation analysis, accuracy review, competitor
        gap mapping, and a prioritized action plan.
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
