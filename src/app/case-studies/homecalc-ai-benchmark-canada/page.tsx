import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import {
  BENCHMARK,
  BRAND_TABLE,
  DOMAIN_COVERAGE,
  ENGINE_CARDS,
  TOP_URLS,
} from "@/lib/homecalc-benchmark-2026-10";

const PILOT_URL = "/for-agencies/";
const PAGE_URL = "https://hamitahm.com/case-studies/homecalc-ai-benchmark-canada/";
const H1 = "The Most-Cited Non-Government Source in a 50-Question Canadian Mortgage AI Benchmark";

// Search snippet (<=158 chars).
const META_DESCRIPTION =
  "In a 50-question Canadian mortgage benchmark on 4 AI engines, my site HomeCalc.ca was cited more than Ratehub, WOWA and banks. Only government ranked higher.";

export const metadata: Metadata = {
  title: "HomeCalc: Canadian Mortgage AI Benchmark",
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
        { "@type": "ListItem", position: 3, name: "HomeCalc AI Benchmark", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: H1,
      description: META_DESCRIPTION,
      datePublished: BENCHMARK.publishedISO,
      dateModified: BENCHMARK.publishedISO,
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      publisher: { "@id": "https://hamitahm.com/#organization" },
      about: { "@type": "WebSite", name: "HomeCalc.ca", url: "https://homecalc.ca/" },
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
  { value: "#1", label: "non-government domain cited across 4 AI engines in this benchmark (26% of prompts; canada.ca 31%)" },
  { value: BENCHMARK.bingTotal, label: `Microsoft Copilot citations, Bing 3-month view read ${BENCHMARK.bingReadOn}` },
  // Restored from 935d383 at Hami's instruction (2026-10-23); Hami confirms the claim.
  { value: "6.5×", label: "from 164 to 1,065 Copilot citations a day" },
  { value: String(BENCHMARK.bingAvgPagesPerDay), label: "different HomeCalc pages cited by Copilot on an average day (same Bing view)" },
  { value: "#2", label: "brand on Copilot and Perplexity in this benchmark, behind only CMHC" },
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

function CellView({ c }: { c: { v: string; r: number } | null }) {
  if (!c) return <td style={{ color: "var(--faint)", textAlign: "center" }}>–</td>;
  return (
    <td style={{ textAlign: "center", fontWeight: 600 }}>
      {c.v}
      <div style={{ fontSize: 11, fontWeight: 400, color: "var(--faint)" }}>#{c.r}</div>
    </td>
  );
}

export default function HomecalcAiBenchmarkPage() {
  const maxPct = DOMAIN_COVERAGE[0].pct;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <nav style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", display: "flex", gap: 8 }}>
          <Link href="/ai-visibility/" style={{ color: "var(--faint)" }}>AI Visibility</Link>
          <span>/</span>
          <Link href="/case-studies/" style={{ color: "var(--faint)" }}>Case Study</Link>
          <span>/</span>
          <span>HomeCalc AI Benchmark</span>
        </nav>
      </div>

      <header style={{ padding: "30px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 14 }}>
              AI visibility case study · HomeCalc.ca · October 2026
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.06, letterSpacing: "-.03em", maxWidth: "22ch" }}>
              {H1}
            </h1>
          </RevealSection>
          <RevealSection delay={0.06}>
            <p style={{ marginTop: 24, fontSize: "clamp(17px, 2vw, 19.5px)", color: "var(--muted)", maxWidth: "62ch", lineHeight: 1.65 }}>
              HomeCalc.ca is my own site, launched in 2026. In a {BENCHMARK.promptCount}-question
              Canadian mortgage and home-buying benchmark run on four AI engines from{" "}
              {BENCHMARK.otterlyWindowShort}, it was cited in more prompts than Ratehub, WOWA, nesto,
              Scotiabank, RBC and NerdWallet. Only federal government sources were cited more. No ad spend.
            </p>
            <p style={{ ...noteStyle, marginTop: 12 }}>
              I wrote the prompt set, and many prompts ask for calculators or tools, the category HomeCalc
              competes in. Read these results as a dated benchmark, not a ranking of all AI answers in
              Canada. Where it wins and where it does not are both below.
            </p>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="cs-stat-strip" style={{ marginTop: 32, gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="proof-card">
                  <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 500, color: "var(--accent)", letterSpacing: "-.02em", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 10, lineHeight: 1.45 }}>{label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </header>

      <Section>
        <h2 style={h2Style}>{BENCHMARK.bingTotal} Copilot Citations in Three Months</h2>
        <p style={ledeStyle}>First-party data from Bing Webmaster Tools, AI Performance (Microsoft Copilot and partners), 3-month view read on {BENCHMARK.bingReadOn}.</p>
        <p style={bodyStyle}>
          Over that window Copilot cited homecalc.ca {BENCHMARK.bingTotalLong} times, with a single day above{" "}
          {BENCHMARK.bingPeakDayFloor} on the console chart. On an average day it cited{" "}
          {BENCHMARK.bingAvgPagesPerDay} different HomeCalc pages, so the citations are spread across the site rather than
          concentrated on one article. This figure covers Microsoft Copilot only; it says nothing about ChatGPT, Perplexity
          or Google.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>Only Government Domains Were Cited More</h2>
        <p style={ledeStyle}>Otterly.AI domain coverage: share of the {BENCHMARK.promptCount} prompts in which each domain was cited, all four engines combined ({BENCHMARK.otterlyWindowShort}).</p>
        <div style={{ maxWidth: 720 }}>
          {DOMAIN_COVERAGE.map((d) => (
            <div key={d.domain} style={{ display: "grid", gridTemplateColumns: "160px 1fr 48px", gap: 10, alignItems: "center", margin: "8px 0", fontSize: 14.5 }}>
              <span style={{ fontWeight: "us" in d ? 700 : 400, color: "us" in d ? "var(--accent)" : "var(--ink)" }}>
                {d.domain}{"gov" in d ? " (gov)" : ""}
              </span>
              <div style={{ background: "var(--line)", borderRadius: 6, height: 14, overflow: "hidden" }}>
                <div style={{ width: `${(d.pct / maxPct) * 100}%`, height: "100%", borderRadius: 6, background: "gov" in d ? "var(--faint)" : "var(--accent)" }} />
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{d.pct}%</span>
            </div>
          ))}
        </div>
        <p style={noteStyle}>
          Grey bars are federal government sources. Among everyone else in this benchmark, homecalc.ca
          is first, ahead of Ratehub, WOWA, nesto, Scotiabank, NerdWallet and RBC.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>Strong on Two Engines. Weak on Two.</h2>
        <p style={ledeStyle}>Each AI engine builds its own picture of the market. HomeCalc&rsquo;s position, engine by engine.</p>
        <div className="cs-stat-strip">
          {ENGINE_CARDS.map((c) => (
            <div key={c.engine} className="proof-card">
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", textTransform: "uppercase", letterSpacing: ".04em" }}>{c.engine}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 40, fontWeight: 500, color: c.good ? "var(--accent)" : "#b91c1c", marginTop: 8, lineHeight: 1 }}>{c.big}</div>
              <div style={{ fontSize: 14, color: "var(--ink)", marginTop: 8 }}>{c.line1}</div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 6 }}>{c.line2}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 style={h2Style}>Ratehub, WOWA and the Big Banks, Ranked</h2>
        <p style={ledeStyle}>Brand coverage: the share of AI answers that mention each brand. {BENCHMARK.promptCount} Canadian prompts, 4 engines, {BENCHMARK.otterlyWindowShort}.</p>
        <div style={{ overflowX: "auto" }}>
          <table className="cs-data-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th style={{ textAlign: "center" }}>All engines</th>
                <th style={{ textAlign: "center" }}>Copilot</th>
                <th style={{ textAlign: "center" }}>Perplexity</th>
                <th style={{ textAlign: "center" }}>ChatGPT</th>
                <th style={{ textAlign: "center" }}>Google AIO</th>
              </tr>
            </thead>
            <tbody>
              {BRAND_TABLE.map((b) => (
                <tr key={b.brand} style={b.us ? { background: "var(--accent-soft)" } : undefined}>
                  <td style={{ fontWeight: b.us ? 700 : 500, color: b.us ? "var(--accent)" : "var(--ink)" }}>
                    {b.brand}{b.gov ? <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--faint)", marginLeft: 6 }}>GOV</span> : null}
                  </td>
                  <CellView c={b.all} />
                  <CellView c={b.copilot} />
                  <CellView c={b.perplexity} />
                  <CellView c={b.chatgpt} />
                  <CellView c={b.google} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={noteStyle}>
          &ldquo;–&rdquo; = outside that engine&rsquo;s top 10. HomeCalc on Google AI Overviews: 3%, outside
          the top 10. CMHC is a federal Crown corporation, not a commercial competitor.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>The Pages Doing the Heavy Lifting</h2>
        <p style={ledeStyle}>{BENCHMARK.homecalcCitations} citations of homecalc.ca across {BENCHMARK.homecalcUrls} different URLs in one week. The top 10:</p>
        <table className="cs-data-table" style={{ maxWidth: 760 }}>
          <thead>
            <tr><th>Page</th><th style={{ textAlign: "right" }}>Citations</th></tr>
          </thead>
          <tbody>
            {TOP_URLS.map((u) => (
              <tr key={u.path}>
                <td>
                  {u.label}
                  <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)" }}>homecalc.ca{u.path}</div>
                </td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>{u.cited}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={noteStyle}>Calculators and B2B pages lead: AI engines cite the tool that answers the question, then the page that explains it.</p>
      </Section>

      <Section>
        <h2 style={h2Style}>Two Different Tools, the Same Split</h2>
        <p style={bodyStyle}>
          On October 13 I ran a separate test with a different method
          through the engines&rsquo; own APIs: 10 broker and realtor questions, 15 runs each, 300
          answers. Perplexity cited homecalc.ca in <strong>63%</strong> of its answers. OpenAI&rsquo;s
          search-enabled model cited it in <strong>0 of 150</strong>. A week of tracking on{" "}
          {BENCHMARK.promptCount} prompts in Otterly shows the same split: strong on Perplexity and Copilot,
          nearly absent on ChatGPT. Both prompt sets were written by me.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>Where HomeCalc Is Still Invisible</h2>
        <ul style={{ ...bodyStyle, paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Google AI Overviews:</strong> 3% brand coverage, outside the top 10; named in only 2
            of {BENCHMARK.promptCount} prompts. My working explanation, not a tested finding: AI Overviews
            appear to favour sites that already rank well in Google, where Ratehub and WOWA are long established.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>ChatGPT:</strong> #8 at 3.1%, and 0 of 150 in the unbranded API test. 16 of its 28
            HomeCalc citations come from a single prompt.
          </li>
          <li>
            <strong>Everyday consumer questions:</strong> HomeCalc is strongest on tool and B2B prompts
            (white-label, embeddable, API). Renewal and penalty questions are still uncovered.
          </li>
        </ul>
        <p style={{ ...bodyStyle, marginTop: 18, paddingLeft: 16, borderLeft: "3px solid var(--accent)" }}>
          What I am testing next: off-page signals such as earned media from original data, expert
          mentions and directory presence. Whether they move ChatGPT and Google is an open question; I
          will publish the result either way.
        </p>
      </Section>

      <Section>
        <div className="cta-box">
          <h2 style={{ ...h2Style, position: "relative" }}>Run This Benchmark for an Agency Client</h2>
          <p style={{ color: "var(--muted)", maxWidth: "60ch", margin: "12px auto 0", position: "relative", lineHeight: 1.65 }}>
            White-label AI visibility audits for agencies, delivered under your brand across six AI platforms. Start with
            one client you already have; the scope is set with you for that client. Starting at US$1,500 for US clients / CA$2,000 for Canadian clients; final scope and price confirmed per client. It is a dated
            snapshot and opportunity map, not a guarantee of citations, traffic or revenue.
          </p>
          <Link href={PILOT_URL} className="btn btn-primary" style={{ marginTop: 28, position: "relative" }}>
            White-Label Audits for Agencies <span className="arr">&rarr;</span>
          </Link>
        </div>
      </Section>

      <Section>
        <h2 style={{ ...h2Style, fontSize: "clamp(22px, 2.6vw, 28px)" }}>How This Was Measured</h2>
        <ul style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7, paddingLeft: 20, maxWidth: "72ch" }}>
          <li><strong>Disclosure:</strong> HomeCalc.ca is Hami Tahm&rsquo;s own site (an owned property, not a client). He wrote both prompt sets.</li>
          <li>
            <strong>Otterly.AI brand report:</strong> {BENCHMARK.promptCount} tracked prompts, country Canada,{" "}
            {BENCHMARK.otterlyWindow}. Engines: ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot.{" "}
            {BENCHMARK.promptLevelCitations} citations in the prompt-level data. Each prompt appears to run
            once per engine per day.
          </li>
          <li>
            <strong>Bing Webmaster Tools, AI Performance:</strong> first-party Microsoft Copilot citation data
            for homecalc.ca, 3-month view read on {BENCHMARK.bingReadOn} ({BENCHMARK.bingTotal} total citations,{" "}
            {BENCHMARK.bingAvgPagesPerDay} average cited pages per day). Copilot only. This window differs from the Otterly
            window; the two are never combined.
          </li>
          <li>
            <strong>API test, October 13, 2026:</strong> Perplexity Agent API and OpenAI Responses API with web
            search, 300 answers. These are APIs, not the consumer apps.
          </li>
          <li>Brand coverage = share of AI answers that mention the brand. Domain coverage = Otterly&rsquo;s share of prompts in which the domain is cited.</li>
          <li>Results describe this benchmark, not all AI traffic in Canada. CMHC, FCAC and canada.ca are federal government sources. Figures as measured. They show association, not proof that any single change caused them, and are no guarantee of similar results.</li>
        </ul>
        <p style={noteStyle}>
          Earlier chapter: <Link href="/case-studies/homecalc-ai-visibility/" style={{ color: "var(--accent)" }}>how HomeCalc went from near-zero to its first AI citations</Link>.
        </p>
      </Section>
    </>
  );
}
