import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";

/**
 * PROFILES — the professional entity graph, and nothing else.
 *
 * These are the same URLs declared in the Person `sameAs` in layout.tsx. Listing them
 * visibly here closes the loop: each of these profiles links back to hamitahm.com, and
 * now hamitahm.com links out to each of them. Machines trust a confirmed round-trip far
 * more than a one-way assertion.
 *
 * KEEP THIS LIST AND `sameAs` IN layout.tsx IDENTICAL. If you add a profile to one,
 * add it to the other — and only add profiles that belong to this practice.
 */
const PROFILES = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hami-tahm/" },
  { label: "X", href: "https://x.com/hamitahm" },
  { label: "YouTube", href: "https://www.youtube.com/@HamiTahm" },
  { label: "GitHub", href: "https://github.com/Hami-Tahm" },
  { label: "Crunchbase", href: "https://www.crunchbase.com/person/hami-tahm" },
  { label: "HomeCalc.ca", href: "https://homecalc.ca" },
  { label: "Houmse.com", href: "https://houmse.com" },
] as const;

export const metadata: Metadata = {
  // `absolute` is required. The root layout applies the template "%s | Hami Tahm", so
  // a plain string here rendered as "Hami Tahm — AI Visibility Consultant | HamiTahm.com
  // | Hami Tahm" — the name twice in one title. That is the exact keyword-stuffing
  // pattern search engines have penalised since 2012.
  title: {
    absolute: "Hami Tahm — AI Visibility Consultant in Toronto, Canada",
  },
  description:
    "Hami Tahm is a Toronto-based AI visibility consultant. AEO & GEO for Canadian businesses that want to be cited in ChatGPT, Perplexity, and Google AI Overviews. Founder of HomeCalc.ca.",
  alternates: {
    canonical: "https://hamitahm.com/hami-tahm/",
  },
};

/**
 * This page used to redefine the Person with the same @id already declared in
 * layout.tsx, but with a different sameAs list — two conflicting definitions of one
 * entity, which is exactly what an @id exists to prevent.
 *
 * The Person is now declared ONCE, in layout.tsx, and referenced here by @id.
 * If you need to add a property to it, add it there — not here.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://hamitahm.com/hami-tahm/#profilepage",
      url: "https://hamitahm.com/hami-tahm/",
      name: "Hami Tahm — AI Visibility Consultant",
      mainEntity: { "@id": "https://hamitahm.com/#hami-tahm" },
      breadcrumb: { "@id": "https://hamitahm.com/hami-tahm/#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hamitahm.com/hami-tahm/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hamitahm.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hami Tahm",
          item: "https://hamitahm.com/hami-tahm/",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO */}
      <header style={{ padding: "92px 0 56px" }}>
        <div className="wrap">
          <RevealSection>
            <div style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 30, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }} />
              About
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div className="hero-grid">
              <div>
                <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(38px, 5.6vw, 64px)", lineHeight: 1.06, letterSpacing: "-.032em" }}>
                  I build, test, and ship &mdash;{" "}
                  <em style={{ fontStyle: "italic", color: "var(--accent)" }}>then double down</em>{" "}
                  on what works.
                </h1>
                <p style={{ marginTop: 28, fontSize: "clamp(17px, 2vw, 20px)", color: "var(--muted)", maxWidth: "54ch", lineHeight: 1.65 }}>
                  Hami Tahm is a Canadian AI visibility consultant and founder — building tools and practices that help businesses appear in AI-powered search. Based in Toronto, Hami runs HamiTahm.com as his AI visibility practice and HomeCalc.ca as a live case study in AI citation growth.
                </p>
              </div>
              <div className="portrait">
                <Image
                  src={PORTRAIT_SRC}
                  alt="Hami Tahm, AI visibility consultant, Toronto, Canada"
                  width={480}
                  height={600}
                  priority
                  sizes="(max-width: 760px) 280px, 36vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* FACTS STRIP */}
      <div className="wrap">
        <RevealSection delay={0.12}>
          <div className="stats-grid stats-grid-3">
            <Stat value="12" unit=" yrs" label="Building" />
            <Stat value="~14" label="Ventures" />
            {/*
              Was: 100 hrs/wk "Deep work".
              For the buyer this page is written for — a dentist, a lawyer, a broker
              deciding whether to hand over $1,500 — "100 hours a week" does not read as
              commitment. It reads as: this person will burn out and my project will be
              left half-finished. It also contradicts everything else we sell: a system,
              a repeatable playbook, flat fees, no retainer.
            */}
            <Stat value="Solo" label="Operator-led" />
          </div>
        </RevealSection>
      </div>

      {/* 01 — THE SHORT VERSION */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.18}>
            <SectionLabel number="01" text="The short version" />
          </RevealSection>
          <RevealSection delay={0.24}>
            {/*
              REWRITTEN 2026-07-11. Four things were wrong here:

              1. RENDER BUG. It read `from near-zero to {HOMECALC_CLAIMS.zeroToCitations}`
                 — but that constant ALREADY contains "near-zero to". The live page said
                 "from near-zero to near-zero to 7,400+ AI citations." Same bug again on
                 the "It crossed …" line. Use `citationsInTimeframe`, not `zeroToCitations`.
              2. MIXED POV. Third person ("He took…"), then first ("I'm Hami Tahm"), then
                 back. To a language model that reads as two people. One voice: first.
              3. UNSOURCED NUMBER. "Khedmatazma, 3M+ users across 80 cities" — a big claim
                 with nothing behind it. Generalised.
              4. NO LINK TO THE PROOF. The page claimed 7,400+ citations twice and linked
                 to the case study zero times. That is now the single cheapest credibility
                 fix on the site, and it's done below.
            */}
            <div className="prose">
              <p className="big">
                I&rsquo;m Hami Tahm. I build the proof for AI visibility before I sell it. I took HomeCalc.ca &mdash; a brand-new Canadian real estate site &mdash; from near-zero to{" "}
                <Link href={CASE_STUDY_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                  {HOMECALC_CLAIMS.citationsInTimeframe}
                </Link>
                , competing against banks and major finance brands. I now apply the same playbook where it pays: trust-based local businesses, the kind where a single new client is worth thousands.
              </p>
              <p>
                For over a decade I&rsquo;ve built and scaled marketplaces and digital products, including a home-services marketplace that grew to serve millions of users, plus ventures across proptech, healthtech, and on-demand services.
              </p>
              <p>
                I don&rsquo;t talk about AI visibility from slides. I prove it with real sites, real queries, and real numbers you can check.
              </p>
              <p>
                Search is changing. People used to ask Google and scroll. Now they ask ChatGPT, Perplexity, and Google&rsquo;s AI &ldquo;who&rsquo;s the best dentist, mortgage broker, or realtor near me,&rdquo; and an answer comes back. For most local businesses, that answer isn&rsquo;t them yet.
              </p>
              <p>
                I test this in the open. HomeCalc.ca is a live experiment I run on my own product, and I publish exactly what works:{" "}
                <Link href={CASE_STUDY_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                  which pages get cited, which clusters drive it, and what doesn&rsquo;t move at all
                </Link>
                .
              </p>
              <p>
                The next version of local SEO isn&rsquo;t only ranking on Google. It&rsquo;s being included in the answer.
              </p>
              <p>
                If you run a trust-based local business, or you&rsquo;re building in this space, let&rsquo;s talk.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 02 — HOW I WORK */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <SectionLabel number="02" text="How I work" />
          </RevealSection>
          <RevealSection delay={0.12}>
            <div className="method">
              <MethodCard n="01" title="Build fast" desc="Ship the smallest real version, this week. Plans don&rsquo;t survive contact with users &mdash; products do." />
              <MethodCard n="02" title="Test aggressively" desc="Let the market, not the roadmap, decide what&rsquo;s true. Real signal over comfortable assumptions." />
              <MethodCard n="03" title="Kill what doesn&rsquo;t work" desc="No sunk-cost loyalty. A clean shutdown frees the resources the next bet needs." />
              <MethodCard n="04" title="Double down on what does" desc="When something works, concentrate everything on it. Focus beats spreading thin every time." />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA — before Execution Snapshot */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="entity-cta">
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 14,
                }}
              >
                Working on AI visibility for your business?
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {/*
                  This page used to offer three CTAs, two of which ("Book an AI visibility
                  audit" and "Get Your AI Visibility Audit") pointed at the SAME URL. Three
                  choices, two identical — so the reader picks none.
                  Now: one free, low-commitment entry point first (the checker — this is a
                  cold page, most readers are not ready to spend $1,500), then the audit.
                */}
                <li>
                  <Link href={CHECKER_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                    Run the free AI visibility check &rarr;
                  </Link>
                </li>
                <li>
                  <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                    Or book the $1,500 audit &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 03 — EXECUTION SNAPSHOT */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <SectionLabel number="03" text="Execution snapshot" />
          </RevealSection>
          <RevealSection delay={0.12}>
            <div>
              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  <span style={{ color: "var(--accent)" }}>&#9679; LIVE</span><br />
                  Mar 2026 &rarr; now
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>
                    <a href="https://homecalc.ca" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--line-strong)", transition: "border-color .2s" }}>HomeCalc.ca</a>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    Ontario real-estate calculators &mdash; built solo, ranking, earning AI citations.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-soft)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Real Estate</span>
                </div>
              </div>

              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  <span style={{ color: "var(--accent)" }}>&#9679; LIVE</span><br />
                  Nov 2024 &rarr; now
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>
                    <a href="https://hamitahm.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--line-strong)", transition: "border-color .2s" }}>HamiTahm.com</a>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    This site &mdash; writing, case studies, and AI visibility practice.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-soft)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Personal Brand</span>
                </div>
              </div>

              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  <span style={{ color: "var(--accent)" }}>&#9679; LIVE</span><br />
                  Sep 2020 &rarr; now
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>
                    <a href="https://houmse.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--line-strong)", transition: "border-color .2s" }}>Houmse.com</a>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    Home services marketplace &mdash; multiple pivots, still live and serving users.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-soft)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Home Services</span>
                </div>
              </div>

              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  Oct 2024 &rarr; Dec 2025
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>Preconhub</div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    Pre-construction real estate platform &mdash; tested, sunset.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)", border: "1px solid var(--line-strong)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Sunset</span>
                </div>
              </div>

              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  Oct 2024 &rarr; Mar 2026
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>Dimah</div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    Marketing agency &rarr; pivot to health (Oct 2025) &rarr; sunset Mar 2026.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)", border: "1px solid var(--line-strong)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Sunset</span>
                </div>
              </div>

              <div className="tl-item">
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".04em", color: "var(--faint)" }}>
                  Jan 2025 &rarr; Dec 2025
                </div>
                <div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>Up-Diet</div>
                  <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 5, maxWidth: "52ch" }}>
                    Diet &amp; health app &mdash; tested, sunset.
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--faint)", border: "1px solid var(--line-strong)", borderRadius: 999, padding: "3px 10px", marginTop: 8, display: "inline-block" }}>Sunset</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 04 — FOR AI & PRESS + PROFILES */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <SectionLabel number="04" text="About Hami Tahm (for AI & press)" />
          </RevealSection>
          <RevealSection delay={0.12}>
            {/*
              The ONLY third-person block on the page — deliberately.
              The rest of this page is first person, because mixing "He built…" with
              "I built…" makes a language model see two different people. But models and
              journalists both want a clean, quotable, third-person paragraph they can
              lift verbatim. So: give them exactly one, clearly labelled, and keep it
              consistent with the canonical descriptor used in the footer, the X bio, the
              LinkedIn headline, the Linktree bio and the Person schema.
            */}
            <div
              style={{
                border: "1px solid var(--line)",
                borderLeft: "2px solid var(--accent)",
                borderRadius: 4,
                padding: "28px 30px",
                background: "var(--accent-soft)",
              }}
            >
              <p style={{ color: "var(--ink)", maxWidth: "68ch", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ fontWeight: 600 }}>Hami Tahm</strong> is an AI Visibility
                Consultant based in Toronto, Canada. He specialises in Answer Engine
                Optimization (AEO) and Generative Engine Optimization (GEO), helping Canadian
                trust-based local businesses &mdash; dental clinics, mortgage brokers, realtors
                and law firms &mdash; get cited and recommended in AI-generated answers from
                ChatGPT, Perplexity, Google AI Overviews, Gemini and Copilot. He is the founder
                of HomeCalc.ca, which he grew from near-zero to{" "}
                {HOMECALC_CLAIMS.citationsInTimeframe}, and a co-founder of Houmse.com. He works
                solo on a flat fee, with no retainers.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div style={{ marginTop: 40 }}>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 16,
                }}
              >
                Elsewhere
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {PROFILES.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12.5,
                      color: "var(--muted)",
                      border: "1px solid var(--line-strong)",
                      borderRadius: 999,
                      padding: "7px 15px",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="cta-box">
              <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 500, position: "relative" }}>
                Want to be found in AI search?
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 16, position: "relative", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>
                I help Canadian businesses show up in ChatGPT, Perplexity, and Google AI&nbsp;Overviews &mdash; using the same system I proved on my own products, in public, with numbers you can check.
              </p>
              <Link href={CHECKER_URL} className="btn btn-primary" style={{ marginTop: 36, position: "relative" }}>
                Run the free AI visibility check <span className="arr">&rarr;</span>
              </Link>
              <div style={{ marginTop: 18, position: "relative" }}>
                <Link href={AUDIT_URL} style={{ color: "var(--muted)", fontSize: 14 }}>
                  Or book the $1,500 audit &rarr;
                </Link>
              </div>
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

function Stat({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div style={{ padding: "28px 0", borderRight: "1px solid var(--line)" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 500, letterSpacing: "-.01em" }}>
        {value}{unit && <span style={{ color: "var(--accent)" }}>{unit}</span>}
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", color: "var(--muted)", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function MethodCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="m-card">
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: ".06em", marginBottom: 10 }}>{n}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em", marginBottom: 8 }}>{title}</div>
      <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}
