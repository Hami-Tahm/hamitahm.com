import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { EngineRotator } from "@/components/EngineRotator";
import { latestWritingPosts } from "@/lib/writing-posts";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

export const metadata: Metadata = {
  // Trimmed to ~150 chars (was ~207 and would truncate in the SERP). Leads with the
  // exact query: "AI Visibility Consultant in Canada", then the engines.
  description:
    "AI Visibility Consultant in Canada. I help businesses get cited in Google AI Overviews, ChatGPT, Gemini, and Claude. Flat-fee audits, no retainer.",
  alternates: {
    canonical: "https://hamitahm.com/",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header style={{ padding: "108px 0 86px" }}>
        <div className="wrap">
          <RevealSection>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(40px, 6.4vw, 76px)",
                lineHeight: 1.02,
                letterSpacing: "-.032em",
              }}
            >
              Get <EngineRotator /> to{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                recommend you
              </em>{" "}
              to your customers.
            </h1>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 22,
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--muted)",
                maxWidth: "50ch",
                lineHeight: 1.6,
              }}
            >
              AI is eating search traffic. If your business isn&rsquo;t
              showing up in AI answers, you&rsquo;re losing customers you
              never see leave.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              {/* Single, consistent CTA across the page (2026-09-08): the free
                  checker is the low-commitment entry point everything else on
                  this page points back to. No competing second action. */}
              <Link
                href="/ai-visibility/ai-visibility-checker/"
                className="btn btn-primary"
              >
                Get free AI visibility check <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* WHO I AM (moved down from hero 2026-08-30) */}
      <section id="who" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="01" text="Who I am" />
          </RevealSection>
          <RevealSection delay={0.04}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }} />
              AI Visibility Consultant &middot; Toronto, Canada
            </div>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "56ch",
                lineHeight: 1.65,
              }}
            >
              I&rsquo;m Hami Tahm. I help businesses get cited and
              recommended when buyers ask AI engines instead of Google.
            </p>
            {/* Stat moved after the identity statement so it reads as proof
                of the claim above, not a number interrupting it (2026-09-08). */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(36px, 4.6vw, 52px)", letterSpacing: "-.01em", color: "var(--ink)" }}>
                {HOMECALC_PROOF.combinedAppearances}
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".06em", color: "var(--muted)", textTransform: "uppercase" }}>
                AI appearances, in just {HOMECALC_PROOF.timeframe}, on my own product
              </span>
            </div>
            <Link
              href="/blog/hamitahm-ai-visibility-benchmark/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 18,
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              Also: this site was the most-cited domain in a 39-prompt
              competitive AI visibility benchmark <span>&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* AI VISIBILITY */}
      <section id="ai" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="02" text="What problem do I solve" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 38px)", lineHeight: 1.12, letterSpacing: "-.01em", maxWidth: "20ch", marginBottom: 30 }}>
              Most businesses are invisible the moment people stop Googling and start asking AI.
            </h2>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="problem-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              <ProblemCard
                title="Visibility"
                text="Buyers ask ChatGPT, Perplexity, and Google's AI Overviews instead of Googling. If you're not in the answer, you don't exist to them."
              />
              <ProblemCard
                title="Authority"
                text="AI engines cite sources they trust. If they can't verify who you are, they won't recommend you over a competitor."
              />
              <ProblemCard
                title="Competitor gaps"
                text="Rivals are already showing up in the answers you're missing, using the same system I built and proved on my own products."
              />
            </div>
            <Link
              href="/ai-visibility/ai-visibility-checker/"
              className="btn btn-primary"
              style={{ marginTop: 36 }}
            >
              Get free AI visibility check <span className="arr">&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="03" text="Currently building" />
          </RevealSection>
          <RevealSection delay={0.06}>
            <div>
              <WorkItem href="https://homecalc.ca" external live="LIVE" dates="2026 → now" title="HomeCalc.ca" desc="A suite of real-estate calculators for Ontario buyers and investors, built solo, ranking, and earning AI citations." cta="homecalc.ca ↗" />
              <WorkItem href="/ai-visibility" live="NEW" dates="2026 → now" title="AI Visibility Practice" desc="Productized AEO / GEO work that gets Canadian businesses found across AI search engines." cta="Learn more ↗" />
              <WorkItem href="/hami-tahm" dates="2014 → now" title="A decade of ventures" desc="Marketplaces, service platforms, diet & health apps, and marketing tools across two markets. Some scaled, some sunset; all sharpened the system." cta="The full story ↗" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection>
            <SectionLabel number="04" text="Writing" />
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
              <SectionLabel number="05" text="About" />
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-.02em" }}>
                I build, test, and ship in public,{" "}
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

function ProblemCard({ title, text }: { title: string; text: string }) {
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
          fontSize: 12,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em", color: "var(--faint)", textTransform: "uppercase", marginBottom: 34, display: "flex", alignItems: "center", gap: 14 }}>
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
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
    <div className="work-item-row" style={{ padding: "26px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
        {live && (
          <>
            <span style={{ color: "var(--accent)" }}>● {live}</span>
            <br />
          </>
        )}
        {dates}
      </div>
      <div className="wi-body">
        <div style={{ fontFamily: "var(--serif)", fontSize: 23, fontWeight: 500, letterSpacing: "-.01em" }}>
          {title}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "46ch" }}>{desc}</div>
      </div>
      <div className="wi-cta" style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)" }}>
        {cta}
      </div>
    </div>
  );
}

function WorkItem({ href, external, live, dates, title, desc, cta }: { href: string; external?: boolean; live?: string; dates: string; title: string; desc: string; cta: string }) {
  const Tag = external ? "a" : Link;
  const extraProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
  return (
    <Tag href={href} {...extraProps} className="work-item-row" style={{ padding: "26px 0", borderTop: "1px solid var(--line)", transition: "padding-left .25s" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
        {live && <><span style={{ color: "var(--accent)" }}>● {live}</span><br /></>}{dates}
      </div>
      <div className="wi-body">
        <div style={{ fontFamily: "var(--serif)", fontSize: 23, fontWeight: 500, letterSpacing: "-.01em" }}>{title}</div>
        <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "46ch" }}>{desc}</div>
      </div>
      <div className="wi-cta" style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)" }}>{cta}</div>
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
