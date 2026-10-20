import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import {
  BENCHMARK,
  BING_WEEKLY,
  BING_WEEK_LABELS,
  BRAND_TABLE,
  DOMAIN_COVERAGE,
  ENGINE_CARDS,
  TOP_URLS,
} from "@/lib/homecalc-benchmark-2026-10";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const PAGE_URL = "https://hamitahm.com/case-studies/homecalc-ai-benchmark-canada/";
const H1 = "Canada's Most-Cited Independent Source in AI Answers About Mortgages";

// Search snippet (<=158 chars).
const META_DESCRIPTION =
  "On 50 Canadian mortgage questions across 4 AI engines, HomeCalc.ca is cited more than Ratehub, WOWA and the banks. Only government sources rank higher.";

export const metadata: Metadata = {
  title: "Most-Cited Independent Mortgage Source in AI",
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
  { value: "#1", label: "independent domain cited across 4 AI engines; only canada.ca is cited more" },
  { value: BENCHMARK.bingTotal, label: "Microsoft Copilot citations in 3 months" },
  { value: "6.5×", label: `from ${BENCHMARK.bingLowWeek} to ${BENCHMARK.bingPeakWeek.toLocaleString("en-CA")} Copilot citations a day` },
  { value: "#1", label: "commercial brand on Copilot and Perplexity, second only to CMHC" },
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

function CopilotChart() {
  const W = 640, H = 260, x0 = 52, x1 = 620, yBase = 224, max = 1200;
  const xs = BING_WEEKLY.map((_, i) => x0 + (i * (x1 - x0)) / (BING_WEEKLY.length - 1));
  const y = (v: number) => yBase - (v * 210) / max;
  const pts = BING_WEEKLY.map((v, i) => `${xs[i].toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const lowI = BING_WEEKLY.indexOf(BENCHMARK.bingLowWeek);
  const peakI = BING_WEEKLY.indexOf(BENCHMARK.bingPeakWeek);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Weekly average Microsoft Copilot citations per day for homecalc.ca, rising from 164 in late July to 1,065 in late September 2026">
      {[0, 400, 800, 1200].map((v) => (
        <g key={v}>
          <line x1={x0} x2={x1} y1={y(v)} y2={y(v)} stroke="var(--line)" />
          <text x={x0 - 6} y={y(v) + 4} fontSize="11" textAnchor="end" fill="var(--faint)">{v.toLocaleString("en-CA")}</text>
        </g>
      ))}
      <path d={`M${x0},${yBase} L${pts.replace(/ /g, " L")} L${x1},${yBase} Z`} fill="var(--accent)" fillOpacity="0.12" />
      <polyline fill="none" stroke="var(--accent)" strokeWidth="3" points={pts} />
      {BING_WEEK_LABELS.map((l, i) => l ? (
        <text key={i} x={xs[i]} y={244} fontSize="10.5" textAnchor="middle" fill="var(--faint)">{l}</text>
      ) : null)}
      <text x={xs[lowI]} y={y(BENCHMARK.bingLowWeek) + 18} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">{BENCHMARK.bingLowWeek}/day</text>
      <text x={xs[peakI]} y={y(BENCHMARK.bingPeakWeek) - 9} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--accent)">{BENCHMARK.bingPeakWeek.toLocaleString("en-CA")}/day</text>
    </svg>
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
              Seven months after launch, HomeCalc.ca is cited by AI engines more often than Ratehub,
              WOWA, nesto and every big bank across {BENCHMARK.promptCount} Canadian mortgage and
              home-buying questions. Only the federal government is cited more. No ad spend.
            </p>
            <p style={{ ...noteStyle, marginTop: 12 }}>
              Measured on Microsoft Copilot, Perplexity, ChatGPT and Google AI Overviews. Where it is
              winning, where it is not, and why. HomeCalc is my own product.
            </p>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="cs-stat-strip" style={{ marginTop: 32 }}>
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
        <h2 style={h2Style}>From {BENCHMARK.bingLowWeek} to {BENCHMARK.bingPeakWeek.toLocaleString("en-CA")} AI Citations a Day</h2>
        <p style={ledeStyle}>Microsoft Copilot citations of homecalc.ca, weekly average per day (Bing Webmaster Tools, AI Performance).</p>
        <CopilotChart />
        <p style={{ ...bodyStyle, marginTop: 18 }}>
          In the week of July 27, Copilot cited HomeCalc about {BENCHMARK.bingLowWeek} times a day. By the
          week of September 28 it was {BENCHMARK.bingPeakWeek.toLocaleString("en-CA")}. Over the full quarter that adds up to{" "}
          {BENCHMARK.bingTotalLong} citations, with a single-day peak above {BENCHMARK.bingPeakDay}. On an average day
          Copilot cited {BENCHMARK.bingAvgPagesPerDay} different HomeCalc pages: a whole site being used, not one lucky article.
        </p>
        <p style={noteStyle}>The last point is a partial week.</p>
      </Section>

      <Section>
        <h2 style={h2Style}>Only the Federal Government Gets Cited More</h2>
        <p style={ledeStyle}>Share of the {BENCHMARK.promptCount} prompts in which each domain was cited, all four engines combined ({BENCHMARK.otterlyWindowShort}).</p>
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
          Grey bars are federal government sources. Among everyone else, homecalc.ca is first, ahead
          of Ratehub, WOWA, nesto, Scotiabank, NerdWallet and RBC.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>Two Engines Won. Two Still to Go.</h2>
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
        <h2 style={h2Style}>Two Independent Tests, One Verdict</h2>
        <p style={bodyStyle}>
          The Otterly results are not a one-tool artefact. On October 13 I ran a separate test
          through the engines&rsquo; own APIs: 10 broker and realtor questions, 15 runs each, 300
          answers. Perplexity cited homecalc.ca in <strong>63%</strong> of its answers. OpenAI&rsquo;s
          search-enabled model cited it in <strong>0 of 150</strong>. A week of tracking on{" "}
          {BENCHMARK.promptCount} prompts shows the same split: strong on Perplexity and Copilot,
          nearly absent on ChatGPT.
        </p>
      </Section>

      <Section>
        <h2 style={h2Style}>Where HomeCalc Is Still Invisible</h2>
        <ul style={{ ...bodyStyle, paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Google AI Overviews:</strong> 3% brand coverage, outside the top 10; named in only 2
            of {BENCHMARK.promptCount} prompts. AI Overviews lean on sites that already rank in Google,
            where Ratehub and WOWA have a decade of links.
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
          Next: off-page. Earned media from original data, expert mentions and directory presence.
          Engines that lean on the open web&rsquo;s link graph need links before they cite you.
        </p>
      </Section>

      <Section>
        <div className="cta-box">
          <h2 style={{ ...h2Style, position: "relative" }}>Could Your Brand Be Next?</h2>
          <p style={{ color: "var(--muted)", maxWidth: "58ch", margin: "12px auto 0", position: "relative", lineHeight: 1.65 }}>
            The same measurement works for any Canadian business whose buyers ask AI before they call:
            mortgage brokers, realtors and boards, lenders and fintechs. Every engagement starts with an
            AI visibility audit: where you stand on each engine, who is cited instead of you, and a fix
            list ranked by impact.
          </p>
          <Link href={AUDIT_URL} className="btn btn-primary" style={{ marginTop: 28, position: "relative" }}>
            Book Your AI Visibility Audit <span className="arr">&rarr;</span>
          </Link>
        </div>
      </Section>

      <Section>
        <h2 style={{ ...h2Style, fontSize: "clamp(22px, 2.6vw, 28px)" }}>How This Was Measured</h2>
        <ul style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7, paddingLeft: 20, maxWidth: "72ch" }}>
          <li><strong>Disclosure:</strong> HomeCalc is Hami Tahm&rsquo;s own product, and he chose the prompt set.</li>
          <li>
            <strong>Otterly.AI brand report:</strong> {BENCHMARK.promptCount} tracked prompts, country Canada,{" "}
            {BENCHMARK.otterlyWindow}. Engines: ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot.{" "}
            {BENCHMARK.promptLevelCitations} citations in the prompt-level data. Each prompt appears to run
            once per engine per day.
          </li>
          <li>
            <strong>Bing Webmaster Tools, AI Performance:</strong> first-party Microsoft Copilot citation data
            for homecalc.ca, 3-month view read on {BENCHMARK.bingReadOn} ({BENCHMARK.bingTotal} total citations,{" "}
            {BENCHMARK.bingAvgPagesPerDay} cited pages per day on average). The chart shows weekly averages.
          </li>
          <li>
            <strong>API test, October 13, 2026:</strong> Perplexity Agent API and OpenAI Responses API with web
            search, 300 answers. These are APIs, not the consumer apps.
          </li>
          <li>Brand coverage = share of AI answers that mention the brand. Domain coverage = share of prompts in which the domain is cited.</li>
          <li>Results describe this benchmark, not all AI traffic in Canada. CMHC, FCAC and canada.ca are federal government sources. Figures as measured; no guarantee of similar results.</li>
        </ul>
        <p style={noteStyle}>
          Earlier chapter: <Link href="/case-studies/homecalc-ai-visibility/" style={{ color: "var(--accent)" }}>how HomeCalc went from near-zero to its first AI citations</Link>.
        </p>
      </Section>
    </>
  );
}
