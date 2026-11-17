import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

/*
 * Anonymized CLIENT case study (added 2026-11-17, Hami's instruction).
 *
 * Paying client; the client asked that neither the business nor the website be
 * named. Hami asked for a fully generic description: "a nutrition and diet
 * website" only. Do not add the name, domain, language, country or any detail
 * that would identify it.
 *
 * SOURCE: the client's Google Search Console, Performance -> Generative AI features
 * (Beta), Search type Web (text), 3-month view, read 2026-11-17 (console "last
 * update: 3 hours ago"). Every number comes from that one chart:
 *   - Total impressions: 23K (Aug 16 to Nov 15, 2026)
 *   - Nov 15, 2026: 492 impressions (tooltip value, exact)
 *   - Mid-August daily level: about 120 (read off the chart, approximate)
 * Impressions only: no clicks, CTR, position or queries. No traffic, lead or revenue
 * claims without a new, sourced figure.
 *
 * Engagement as stated by Hami: full audit, action plan and implementation, covering
 * technical work, content, AEO and GEO. The page names those workstreams only.
 *
 * Chart image: add the cropped screenshot as
 * public/images/case-studies/nutrition-gsc-ai-features.png and render it like the
 * home services case study (ZoomableImage + figcaption) once the file exists.
 */

const SLUG = "nutrition-site-google-ai-features";
const PAGE_URL = `https://hamitahm.com/case-studies/${SLUG}/`;
const H1 = "A Nutrition Website Roughly Quadrupled Its Daily Google AI Impressions in Three Months";
const PUBLISHED = "2026-11-17";

// Search snippet (<=158 chars).
const META_DESCRIPTION =
  "Client case study: a nutrition and diet site went from about 120 to 492 daily Google AI impressions in three months after a full audit and implementation.";

export const metadata: Metadata = {
  title: "Nutrition Site: Google AI Impressions Up About 4×",
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://hamitahm.com/case-studies/" },
        { "@type": "ListItem", position: 3, name: "Nutrition Site: Google AI Impressions", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: H1,
      description: META_DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      publisher: { "@id": "https://hamitahm.com/#organization" },
    },
  ],
};

const h2Style = {
  fontFamily: "var(--serif)",
  fontWeight: 500,
  fontSize: "clamp(27px, 3.6vw, 40px)",
  lineHeight: 1.12,
  letterSpacing: "-.015em",
  marginBottom: 12,
} as const;
const ledeStyle = { fontSize: 16, color: "var(--muted)", lineHeight: 1.65, maxWidth: "64ch", marginBottom: 22 } as const;
const bodyStyle = { fontSize: "clamp(16px, 1.9vw, 18px)", color: "var(--ink)", lineHeight: 1.72, maxWidth: "66ch" } as const;
const noteStyle = { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginTop: 14, lineHeight: 1.6 } as const;

const HERO_STATS = [
  { value: "~4×", label: "daily impressions in Google's AI features, mid-August to mid-November 2026" },
  { value: "492", label: "impressions on Nov 15, 2026, up from about 120 a day in mid-August" },
  { value: "23K", label: "impressions in Google's AI features, Aug 16 to Nov 15, 2026" },
];

const PHASES = [
  {
    step: "1",
    title: "Audit",
    body:
      "Where the site stood in AI answers for the questions its readers ask, which competitors and sources were cited instead, and what on the site was holding it back.",
  },
  {
    step: "2",
    title: "Action plan",
    body:
      "A prioritized list of fixes, ordered by expected impact and effort, so the most valuable changes shipped first.",
  },
  {
    step: "3",
    title: "Implementation",
    body:
      "The plan was carried out, not just handed over: technical fixes, content, AEO and GEO work, delivered and checked on the live site.",
  },
];

const WORKSTREAMS = [
  {
    title: "Technical",
    body:
      "Making sure the pages that should be read are crawlable, fast to parse and clearly described, with structured data that matches what is on the page.",
  },
  {
    title: "Content",
    body:
      "Pages built or reworked so each one answers a specific nutrition question clearly and completely, in the order a reader needs it.",
  },
  {
    title: "AEO",
    body:
      "Answer-first structure: the direct answer at the top of the page, followed by the detail, so an AI system can lift a correct answer and credit the source.",
  },
  {
    title: "GEO",
    body:
      "Strengthening the signals generative engines use to decide which sources to trust and blend into longer answers, on the site and beyond it.",
  },
];

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ padding: "46px 0", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <RevealSection>{children}</RevealSection>
      </div>
    </section>
  );
}

export default function NutritionSiteGoogleAiFeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
          <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>AI Visibility</Link>
          <span>/</span>
          <Link href="/case-studies/" style={{ color: "var(--faint)" }}>Case Study</Link>
          <span>/</span>
          <span>Nutrition Site</span>
        </nav>
      </div>

      <header style={{ padding: "30px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 14 }}>
              Client case study · Nutrition and diet · August to November 2026
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.06, letterSpacing: "-.03em", maxWidth: "22ch" }}>
              {H1}
            </h1>
          </RevealSection>
          <RevealSection delay={0.06}>
            <p style={{ marginTop: 24, fontSize: "clamp(17px, 2vw, 19.5px)", color: "var(--muted)", maxWidth: "62ch", lineHeight: 1.65 }}>
              A nutrition and diet website hired me for the full engagement: audit, action plan and
              implementation. Over three months, its impressions in Google&rsquo;s AI features went
              from about 120 a day to 492 on November 15. The client asked that neither the business
              nor the website be named, so this page leaves out anything that would identify them.
            </p>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="cs-stat-strip" style={{ marginTop: 32, gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="proof-card">
                  <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 500, color: "var(--accent)", letterSpacing: "-.02em", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 10, lineHeight: 1.45 }}>{label}</div>
                </div>
              ))}
            </div>
            <p style={noteStyle}>
              Source: the client&rsquo;s Google Search Console, Generative AI features report (Beta), web
              search, 3-month view, read November 17, 2026.
            </p>
          </RevealSection>
        </div>
      </header>

      <Section>
        <h2 style={h2Style}>What the Number Measures</h2>
        <p style={bodyStyle}>
          Google Search Console&rsquo;s Generative AI features report counts how often a site appeared in
          Google&rsquo;s AI surfaces, such as AI Overviews and AI Mode. For this site the count was about
          120 a day in mid-August. It more than doubled by mid-September, held between about 200 and 320
          a day through October, then climbed again in November to 492 on November 15.
        </p>
        <p style={{ ...bodyStyle, marginTop: 16 }}>
          Nutrition is a category where people ask detailed questions and AI answers are cautious about
          which sources they draw on. Being one of those sources is the starting point for being trusted
          and chosen.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>The Engagement: Audit, Plan, Implementation</h2>
        <p style={ledeStyle}>Unlike an audit-only project, this one ran end to end.</p>
        <div className="cs-stat-strip" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
          {PHASES.map((p) => (
            <div key={p.title} className="proof-card">
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)" }}>STEP {p.step}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, color: "var(--ink)", lineHeight: 1.2, marginTop: 6 }}>{p.title}</div>
              <div style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>{p.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 style={h2Style}>What Was Worked On</h2>
        <p style={ledeStyle}>Four workstreams, delivered over the same three months.</p>
        <div className="cs-stat-strip" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {WORKSTREAMS.map((w) => (
            <div key={w.title} className="proof-card">
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 500, color: "var(--ink)", lineHeight: 1.2 }}>{w.title}</div>
              <div style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 10, lineHeight: 1.55 }}>{w.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 style={h2Style}>What This Does Not Show</h2>
        <ul style={{ ...bodyStyle, paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Clicks or revenue.</strong> The report counts impressions only, with no clicks,
            click-through rate or queries, so this page makes no traffic or revenue claim.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Which surface.</strong> AI Overviews and AI Mode are reported together.
          </li>
          <li>
            <strong>Proof of cause.</strong> Google kept expanding its AI features during these months,
            which lifts many sites at once. There was no control site, so read this as a measured result,
            not proof that each change caused it.
          </li>
        </ul>
      </Section>

      <Section>
        <div className="cta-box">
          <h2 style={{ ...h2Style, position: "relative" }}>Find Out Where Your Site Stands</h2>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "12px auto 0", position: "relative", lineHeight: 1.65 }}>
            The free check shows how ChatGPT, Gemini and Google answer the questions your customers ask.
            The full audit adds the reasons and a prioritized plan. Scoped to your business, confirmed on
            a free call.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <Link href="/ai-visibility/ai-visibility-checker/" className="btn btn-primary">
              Run the free AI visibility check <span className="arr">&rarr;</span>
            </Link>
            <Link href="/ai-visibility/ai-visibility-audit/" className="btn btn-ghost">
              See the AI Visibility Audit
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <h2 style={{ ...h2Style, fontSize: "clamp(22px, 2.6vw, 28px)" }}>How This Was Measured</h2>
        <ul style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7, paddingLeft: 20, maxWidth: "72ch" }}>
          <li><strong>Client:</strong> a nutrition and diet website. Business and site names withheld at the client&rsquo;s request.</li>
          <li>
            <strong>Source:</strong> Google Search Console, Performance, Generative AI features (Beta),
            search type Web (text), 3-month view covering August 16 to November 15, 2026, read November
            17, 2026.
          </li>
          <li>
            <strong>Figures:</strong> 23K total impressions and 492 on November 15 are the
            console&rsquo;s own values. The mid-August level (about 120 a day) and the October range
            are read from the chart and are approximate.
          </li>
          <li>Impressions only. Figures as measured; they show association, not proof that any single change caused them, and are no guarantee of similar results.</li>
        </ul>
        <p style={noteStyle}>
          More results: <Link href="/case-studies/" style={{ color: "var(--accent)" }}>all case studies</Link>.
        </p>
      </Section>
    </>
  );
}
