import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { latestWritingPosts } from "@/lib/writing-posts";

const BUILDING_SINCE = 2014;
const buildingYears = new Date().getFullYear() - BUILDING_SINCE;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header style={{ padding: "108px 0 86px" }}>
        <div className="wrap">
          <RevealSection>
            <div style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 30, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }} />
              AI Visibility Consultant &middot; Toronto, Canada
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(40px, 6.4vw, 76px)",
                lineHeight: 1.12,
                letterSpacing: "-.032em",
                maxWidth: "16ch",
              }}
            >
              <span style={{ display: "block" }}>Build fast.</span>
              <span style={{ display: "block" }}>Test hard.</span>
              <span style={{ display: "block" }}>Kill what doesn&rsquo;t work.</span>
              <span style={{ display: "block" }}>
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  Double down
                </em>{" "}
                on what does.
              </span>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 30,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "54ch",
                lineHeight: 1.65,
              }}
            >
              I&rsquo;m Hami Tahm &mdash; a serial founder who has spent over a decade launching, testing, and scaling digital products across two markets.{" "}
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                Right now I&rsquo;m building{" "}
                <a
                  href="https://homecalc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  HomeCalc.ca
                </a>
                ,{" "}
                <a
                  href="https://houmse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  Houmse.com
                </a>
              </b>{" "}
              and helping Canadian businesses get found inside ChatGPT, Perplexity, and Google AI&nbsp;Overviews.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 42, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
              <Link href="/ai-visibility/" className="btn btn-ghost">
                Explore AI visibility services
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* STATS */}
      <div className="wrap">
        <RevealSection>
          <div className="stats-grid stats-grid-centered stats-grid-3">
            <Stat value={String(buildingYears)} unit="yrs" label="Building since 2014" />
            <Stat value="~14" label="Ventures launched" />
            <Stat value="1" accent="×" label="Goal: a unicorn" />
          </div>
        </RevealSection>
      </div>

      {/* AI VISIBILITY */}
      <section id="ai" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="What I'm focused on" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <div className="panel">
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 38px)", lineHeight: 1.12, letterSpacing: "-.01em", maxWidth: "18ch", position: "relative" }}>
                Most businesses are invisible the moment people stop Googling and start asking AI.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18, maxWidth: "52ch", position: "relative" }}>
                Search is moving to answer engines. I help Canadian clinics, real-estate brands, and SaaS companies show up when buyers ask ChatGPT, Perplexity, and Google&rsquo;s AI&nbsp;Overviews &mdash; using the same system I built and proved on my own products.
              </p>
              <div
                className="ladder"
                style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <Step n="01" title="Audit" desc="Full AI visibility diagnosis" />
                <Step n="02" title="Report" desc="Prioritized action plan" />
                <Step n="03" title="Walkthrough" desc="60-min review call" />
              </div>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 36, position: "relative" }}
              >
                Get Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="Currently building" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <div>
              <WorkItem href="https://homecalc.ca" external live="LIVE" dates="2026 → now" title="HomeCalc.ca" desc="A suite of real-estate calculators for Ontario buyers and investors — built solo, ranking, and earning AI citations." cta="homecalc.ca ↗" />
              <WorkItem href="/ai-visibility" live="NEW" dates="2026 → now" title="AI Visibility Practice" desc="Productized AEO / GEO work that gets Canadian businesses found across AI search engines." cta="Learn more ↗" />
              <WorkItem href="/hami-tahm" dates="2014 → now" title="A decade of ventures" desc="Marketplaces, service platforms, diet & health apps, and marketing tools across two markets. Some scaled, some sunset — all sharpened the system." cta="The full story ↗" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Writing" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <div>
              {latestWritingPosts.map((post) => (
                <PostLink
                  key={post.slug}
                  href={post.slug}
                  cat={post.cat}
                  title={post.title}
                  date={post.date}
                />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 0" }}>
        <div className="wrap about-grid">
          <RevealSection>
            <div>
              <SectionLabel number="04" text="About" />
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-.02em" }}>
                I build, test, and ship in public &mdash;{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>with speed and real-world validation.</em>
              </h2>
              <p style={{ marginTop: 22, fontSize: 16, color: "var(--muted)", maxWidth: "54ch", lineHeight: 1.65 }}>
                Across roughly fourteen ventures, the method never changed. The bet now is on AI-era search and a product worth scaling.
              </p>
            </div>
          </RevealSection>
          <RevealSection delay={0.06}>
            <div>
              <Principle n="01" bold="Build fast." text="Ship the smallest real version, this week." />
              <Principle n="02" bold="Test aggressively." text="Let the market, not the plan, decide." />
              <Principle n="03" bold="Kill what doesn't work." text="No sunk-cost loyalty." />
              <Principle n="04" bold="Double down on what does." text="Concentrate every resource on the winner." />
            </div>
          </RevealSection>
        </div>
      </section>

    </>
  );
}

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em", color: "var(--faint)", textTransform: "uppercase", marginBottom: 34, display: "flex", alignItems: "center", gap: 14 }}>
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

function Stat({
  value,
  unit,
  accent,
  label,
}: {
  value: string;
  unit?: string;
  accent?: string;
  label: string;
}) {
  return (
    <div className="stat-cell">
      <div style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 500, letterSpacing: "-.01em" }}>
        {value}
        {unit && <span style={{ color: "var(--faint)" }}> {unit}</span>}
        {accent && <span style={{ color: "var(--accent)" }}>{accent}</span>}
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: "11.5px", letterSpacing: ".08em", color: "var(--muted)", textTransform: "uppercase", marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

function WorkItemStatic({
  live,
  dates,
  title,
  desc,
  cta,
}: {
  live?: string;
  dates: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr auto",
        gap: 28,
        alignItems: "baseline",
        padding: "26px 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
        {live && (
          <>
            <span style={{ color: "var(--accent)" }}>● {live}</span>
            <br />
          </>
        )}
        {dates}
      </div>
      <div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 23, fontWeight: 500, letterSpacing: "-.01em" }}>
          {title}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "46ch" }}>{desc}</div>
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>
        {cta}
      </div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={{ background: "var(--bg)", border: "1px solid var(--line-strong)", borderRadius: 10, padding: "16px 14px" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: ".04em" }}>{n}</div>
      <div style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 600, marginTop: 8, lineHeight: 1.3, color: "var(--ink)" }}>{title}</div>
      <div style={{ fontFamily: "var(--mono)", fontSize: "10.5px", color: "var(--faint)", marginTop: 6, letterSpacing: ".02em" }}>{desc}</div>
    </div>
  );
}

function WorkItem({ href, external, live, dates, title, desc, cta }: { href: string; external?: boolean; live?: string; dates: string; title: string; desc: string; cta: string }) {
  const Tag = external ? "a" : Link;
  const extraProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
  return (
    <Tag href={href} {...extraProps} style={{ display: "grid", gridTemplateColumns: "140px 1fr auto", gap: 28, alignItems: "baseline", padding: "26px 0", borderTop: "1px solid var(--line)", transition: "padding-left .25s" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
        {live && <><span style={{ color: "var(--accent)" }}>● {live}</span><br /></>}{dates}
      </div>
      <div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 23, fontWeight: 500, letterSpacing: "-.01em" }}>{title}</div>
        <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "46ch" }}>{desc}</div>
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>{cta}</div>
    </Tag>
  );
}

function PostLink({ href, cat, title, date }: { href: string; cat: string; title: string; date: string }) {
  return (
    <Link href={href} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, padding: "20px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)" }}>{cat}</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>{title}</span>
      </div>
      <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", whiteSpace: "nowrap" }}>{date}</span>
    </Link>
  );
}

function Principle({ n, bold, text }: { n: string; bold: string; text: string }) {
  return (
    <div style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid var(--line)", alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>{n}</span>
      <div><b style={{ fontWeight: 500 }}>{bold}</b>{" "}<span style={{ color: "var(--muted)", fontSize: "14.5px" }}>{text}</span></div>
    </div>
  );
}
