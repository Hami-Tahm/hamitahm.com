import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import CheckerForm from "./CheckerForm";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const SAMPLE_REPORT_URL = "/ai-visibility/sample-report/";
const HUB_URL = "/ai-visibility/";
const SITE = "https://hamitahm.com";
const URL = `${SITE}/ai-visibility/ai-visibility-checker/`;

export const metadata: Metadata = {
  // "Checker" (not "Check") on purpose: ~1,035 impressions/month of "free ai
  // visibility checker" / "ai visibility checker" intent were landing on a blog post
  // instead of this tool. The title now targets the exact query the tool answers.
  // Kept under 48 chars: the root layout appends " | Hami Tahm" (12), and anything
  // over ~60 rendered chars gets truncated in Google. Leads with the exact query
  // ("free ai visibility checker") that drives most of this page's impressions.
  title: "Free AI Visibility Checker: Test Your Brand",
  description:
    "See whether ChatGPT, Google AI Overview, and Gemini recommend your business or a competitor. A real analyst checks your keywords and emails your report, free.",
  alternates: { canonical: URL },
};

const FAQ_ITEMS = [
  {
    q: "Is this an automated tool or a human report?",
    a: "A human report. Automated checkers give you a score; we give you a real analyst's read of what ChatGPT, Google AI Overview, and Gemini say about your business, which competitor is winning your keywords, and what to fix. That is why it arrives within one business day, not in 30 seconds.",
  },
  {
    q: "What is an AI visibility checker?",
    a: "An AI visibility checker shows how your brand appears when people ask AI engines (ChatGPT, Google AI Overview, Gemini) about your category. Enter your domain and your keywords, and you get a report on whether these engines mention, cite or recommend you, and whether they named someone else instead. Naming which competitors were chosen over you, and why, is part of the paid audit.",
  },
  {
    q: "Is this AI visibility checker free?",
    a: "Yes, and there's no card and no trial. Submit your domain and keywords and you receive a detailed report by email at no cost. The free check runs for Canada and the United States; these engines answer differently depending on the country the search runs from, so a report from the wrong market would be misleading. If you're somewhere else you can still join the list and I'll tell you if it opens. If you then want a full audit with a prioritized action plan, that's the $1,500 AI Visibility Audit.",
  },
  {
    q: "Which AI engines does it check?",
    a: "The free check covers ChatGPT, Google AI Overview and Gemini. Perplexity, Claude and Microsoft Copilot are part of the paid AI Visibility Audit, which covers all six. Grok and Meta AI aren't in either, but can be added on request.",
  },
  {
    q: "How long until I get my report?",
    a: "Within one business day. A real analyst runs your searches by hand, so it isn't instant, but you get a considered read of each engine and keyword you selected for your country, not an automated score.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#page`,
      url: URL,
      name: "Free AI Visibility Checker",
      description:
        "Check how your brand appears in ChatGPT, Google AI Overview, and Gemini for your keywords.",
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "AI Visibility", item: `${SITE}/ai-visibility/` },
        { "@type": "ListItem", position: 3, name: "AI Visibility Checker", item: URL },
      ],
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

export default function AiVisibilityCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
          <Link href={HUB_URL} style={{ color: "var(--faint)" }}>AI Visibility</Link>
          <span>/</span>
          <span>Checker</span>
        </nav>
      </div>

      {/* Hero */}
      <header style={{ padding: "30px 0 24px" }}>
        <div className="wrap">
          <RevealSection>
            {/* Eyebrow carries the exact query term ("AI Visibility Checker") that this
                page is built to rank for; the H1 keeps the emotional hook. */}
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Free AI Visibility Checker
            </div>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.2vw, 56px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                maxWidth: "18ch",
              }}
            >
              {/*
                Was "See if AI recommends your business, or a competitor". Changed
                2026-08-30 per feedback to lead with the exact free-tool action instead
                of the outcome. Deliberately says "check", not "audit": this page is the
                free checker, the $1,500 AI Visibility Audit is a different product, and
                the site is careful everywhere else not to blur the two.
              */}
              Get your free AI visibility check
            </h1>
          </RevealSection>
        </div>
      </header>

      {/* Form */}
      <section style={{ padding: "6px 0 40px" }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <RevealSection delay={0.08}>
            <div style={{ marginBottom: 22 }}>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 8,
                }}
              >
                Not an automated score. A real analyst.
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, maxWidth: "60ch" }}>
                Most AI checkers give you a number in 30 seconds. This one is
                different. A person runs your searches by hand, reads what each
                engine actually says about you, and shows you exactly where a
                competitor is being recommended instead. That is why it takes a
                day, and why it is worth it.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <CheckerForm />
          </RevealSection>
        </div>
      </section>

      {/* What you get */}
      <section style={{ padding: "20px 0 40px" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.15,
                letterSpacing: "-.015em",
                marginBottom: 18,
              }}
            >
              What your report covers
            </h2>
            <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "var(--muted)", lineHeight: 1.7 }}>
              {/*
                Was "(if you name your competitors) which of you the engines actually
                recommend": stale since the competitor fields were removed from this
                form 2026-08-30. Corrected so this paragraph only promises what the
                free check actually delivers.
              */}
              For each engine and keyword you select, the report shows whether AI
              mentions your brand, what it says about you, and whether it named a
              competitor instead. Every answer is recorded with the date and the
              country it came from, so you can tell a real pattern from a one-off
              result. It&rsquo;s a smaller version of the same method behind the
              full{" "}
              <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                AI Visibility Audit
              </Link>
              {" "}(see a{" "}
              <Link href={SAMPLE_REPORT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                real sample of that report
              </Link>
              ), so this free check is the fastest way to see where you stand.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "10px 0 70px" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.15,
                letterSpacing: "-.015em",
                marginBottom: 20,
              }}
            >
              AI visibility checker: FAQ
            </h2>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div key={q} className="faq-item" style={{ borderTop: "1px solid var(--line)", padding: "18px 0" }}>
                <h3 style={{ fontFamily: "var(--sans)", fontSize: 16.5, fontWeight: 600, marginBottom: 8 }}>{q}</h3>
                <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65 }}>{a}</p>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>
    </>
  );
}
