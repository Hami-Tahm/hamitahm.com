import type { Metadata } from "next";
import Link from "next/link";
import { ZoomableImage } from "@/components/ZoomableImage";
import { RevealSection } from "@/components/Reveal";

/*
 * Anonymized CLIENT case study (added 2026-11-16, Hami's instruction).
 *
 * The client asked not to be named, so the site is described only as "a home
 * services website". Do not add the name, domain, city, screenshots with the
 * property visible, or any detail that would identify it.
 *
 * SOURCE: the client's Google Search Console, Performance on Search results ->
 * Generative AI features (Beta), Search type Web (text), 3-month view, read
 * 2026-11-16 (console "last update: 4 hours ago"). Every number below comes from
 * that one chart:
 *   - Total impressions: 156K (Aug 15 to Nov 14, 2026)
 *   - Nov 14, 2026: 2,596 impressions (tooltip value, exact)
 *   - Mid-August daily level: about 1,400 (read off the chart axis, approximate)
 * The report shows impressions only: no clicks, CTR, position or queries. Do not
 * add traffic, lead or revenue claims to this page without a new, sourced figure.
 *
 * Work Hami did for the client in the window (as stated by Hami): AEO/content
 * pages, technical/schema, off-site citations. The page names those workstreams
 * only; it does not invent specifics.
 */

const SLUG = "home-services-google-ai-features";
const PAGE_URL = `https://hamitahm.com/case-studies/${SLUG}/`;
const H1 = "A Home Services Website Reached 156,000 Google AI Impressions in Three Months";
const PUBLISHED = "2026-11-16";

// Search snippet (<=158 chars).
const META_DESCRIPTION =
  "Client case study: a home services site grew daily Google AI feature impressions from about 1,400 to 2,596 in three months. Source: Search Console.";

export const metadata: Metadata = {
  title: "Home Services Site: 156K Google AI Impressions",
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
        { "@type": "ListItem", position: 3, name: "Home Services: Google AI Impressions", item: PAGE_URL },
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

// Client's console screenshot, cropped by Hami; shows no site name, domain or account.
const CHART_SRC = "/images/case-studies/home-services-gsc-ai-features.png";
const CHART_ALT =
  "Google Search Console Generative AI features report for an anonymized home services client, web search, three months from August 15 to November 14, 2026: 156K total impressions, daily impressions rising from about 1,400 to 2,596 on November 14.";

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
  { value: "156K", label: "impressions in Google's AI features, Aug 15 to Nov 14, 2026" },
  { value: "2,596", label: "impressions on Nov 14, 2026, up from about 1,400 a day in mid-August" },
  { value: "~1.8×", label: "daily level, mid-August to mid-November" },
];

const WORKSTREAMS = [
  {
    title: "Answer-first pages",
    body:
      "Pages built or reworked so the direct answer to a customer's question comes first, followed by the details a buyer compares before choosing a provider.",
  },
  {
    title: "Technical and structured data",
    body:
      "Making sure the pages that should be read are crawlable and clearly described: structured data that matches what is on the page, clean internal links between related services, and nothing blocking the crawlers Google uses.",
  },
  {
    title: "Off-site corroboration",
    body:
      "Consistent business details and mentions on the third-party sources AI answers lean on for local services, so the site is not the only place saying what the business does.",
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

export default function HomeServicesGoogleAiFeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
          <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>AI Visibility</Link>
          <span>/</span>
          <Link href="/case-studies/" style={{ color: "var(--faint)" }}>Case Study</Link>
          <span>/</span>
          <span>Home Services</span>
        </nav>
      </div>

      <header style={{ padding: "30px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 14 }}>
              Client case study · Home services · August to November 2026
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.06, letterSpacing: "-.03em", maxWidth: "22ch" }}>
              {H1}
            </h1>
          </RevealSection>
          <RevealSection delay={0.06}>
            <p style={{ marginTop: 24, fontSize: "clamp(17px, 2vw, 19.5px)", color: "var(--muted)", maxWidth: "62ch", lineHeight: 1.65 }}>
              A home services business asked me to make it show up when people ask Google&rsquo;s AI
              about the services it sells. Over three months, its impressions in Google&rsquo;s AI
              features climbed from about 1,400 a day to 2,596 on November 14: 156,000 in total. The
              client asked not to be named, so this page leaves out the name and anything that would
              identify the site.
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
              search, 3-month view, read November 16, 2026.
            </p>
          </RevealSection>
        </div>
      </header>

      <Section>
        <h2 style={h2Style}>What the Number Measures</h2>
        <p style={bodyStyle}>
          Google Search Console now has a report called Generative AI features. It counts how often a
          site appeared in Google&rsquo;s AI surfaces, such as AI Overviews and AI Mode, as a source or
          link. For this site that count was about 1,400 a day in mid-August. It held there through
          September, started climbing in early October, and reached 2,596 on November 14.
        </p>
        <p style={{ ...bodyStyle, marginTop: 16 }}>
          For a home services business that matters because of where the question is asked. Someone who
          asks Google what a job involves, what it costs or who to call is often deciding now. If the AI
          answer draws on your page, you are part of that decision before anyone clicks a list of links.
        </p>
        <figure style={{ margin: "30px 0 0", maxWidth: 980 }}>
          <ZoomableImage
            src={CHART_SRC}
            alt={CHART_ALT}
            width={2282}
            height={1106}
            loading="lazy"
            style={{ width: "100%", height: "auto", borderRadius: 12, border: "1px solid var(--line-strong)" }}
          />
          <figcaption style={{ marginTop: 14, fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, maxWidth: "62ch" }}>
            The client&rsquo;s Google Search Console, Generative AI features report, web search,
            August 15 to November 14, 2026. Cropped so the site cannot be identified.
          </figcaption>
        </figure>
      </Section>

      <Section>
        <h2 style={h2Style}>What I Worked On</h2>
        <p style={ledeStyle}>Three workstreams ran over the same three months. The client&rsquo;s own team kept running the business; my job was the AI visibility work.</p>
        <div className="cs-stat-strip" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
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
            <strong>Clicks, calls or bookings.</strong> The report counts impressions only. It has no
            clicks, no click-through rate and no list of queries, so this page makes no traffic or
            revenue claim.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>Which surface.</strong> AI Overviews and AI Mode are reported together, so the split
            between them is unknown.
          </li>
          <li>
            <strong>Proof of cause.</strong> Google kept expanding its AI features during these months,
            which lifts many sites at once. The timing lines up with the work, but there was no control
            site, so read this as a measured result, not proof that each change caused it.
          </li>
        </ul>
      </Section>

      <Section>
        <div className="cta-box">
          <h2 style={{ ...h2Style, position: "relative" }}>Find Out Where Your Business Stands</h2>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "12px auto 0", position: "relative", lineHeight: 1.65 }}>
            The free check shows how ChatGPT, Gemini and Google answer the questions your customers ask
            about you. The full audit adds the reasons and a prioritized plan your team can ship. Scoped
            to your business, confirmed on a free call.
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
          <li><strong>Client:</strong> a home services business. Named and identifying details withheld at the client&rsquo;s request.</li>
          <li>
            <strong>Source:</strong> Google Search Console, Performance on Search results, Generative AI
            features (Beta), search type Web (text), 3-month view covering August 15 to November 14,
            2026, read November 16, 2026.
          </li>
          <li>
            <strong>Figures:</strong> 156K total impressions and 2,596 on November 14 are the
            console&rsquo;s own values. The mid-August level (about 1,400 a day) is read from the chart
            and is approximate.
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
