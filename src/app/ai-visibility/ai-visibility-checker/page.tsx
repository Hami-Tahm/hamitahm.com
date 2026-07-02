import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import CheckerForm from "./CheckerForm";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const SITE = "https://hamitahm.com";
const URL = `${SITE}/ai-visibility/ai-visibility-checker/`;

export const metadata: Metadata = {
  title: "Free AI Visibility Check: Does ChatGPT Recommend You?",
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
    a: "An AI visibility checker shows how your brand appears when people ask AI engines — ChatGPT, Google AI Overview, Gemini — about your category. Enter your domain and keywords, and you get a report on whether these engines mention, cite, or recommend you, and where you're missing.",
  },
  {
    q: "Is this AI visibility checker free?",
    a: "Yes. Submit your domain, keywords, and country and you receive a detailed report by email at no cost. If you then want a full audit with a prioritized action plan, that's the $1,500 CAD AI Visibility Audit.",
  },
  {
    q: "Which AI engines does it check?",
    a: "Right now: ChatGPT, Google AI Overview, and Gemini. Google AI Mode, Perplexity, Claude, and Grok are being added — you'll see them in the selector marked as coming soon.",
  },
  {
    q: "How long until I get my report?",
    a: "Within one business day. A real analyst runs your searches by hand, so it isn't instant — but you get a considered read of each engine and keyword you selected for your country, not an automated score.",
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
              See if AI recommends your business, or a competitor
            </h1>
          </RevealSection>
          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 18,
                fontSize: "clamp(17px, 2vw, 19.5px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.6,
              }}
            >
              Pick the AI engines, add your domain and keywords, and a real
              analyst checks how ChatGPT, Google AI Overview, and Gemini answer
              for you. Personalized report in your inbox, free, within one
              business day.
            </p>
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
              For each engine and keyword you select, the report shows whether AI
              mentions your brand, what it says about you, and where a competitor
              is being named instead. It&rsquo;s the same lens behind the full{" "}
              <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                AI Visibility Audit
              </Link>
              {" "}— this free check is the fastest way to see where you stand.
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
              AI visibility checker — FAQ
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
