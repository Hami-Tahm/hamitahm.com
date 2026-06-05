import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

const PORTRAIT_SRC = "/images/hami-tahm/hami-tahm-portrait.png";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CONSULTANT_URL = "/ai-visibility/ai-visibility-consultant-canada/";

export const metadata: Metadata = {
  title: "Hami Tahm — AI Visibility Consultant | HamiTahm.com",
  description:
    "Hami Tahm — Canadian AI visibility consultant. Builder of HomeCalc.ca and Houmse.com. Helping businesses appear in ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: {
    canonical: "https://hamitahm.com/hami-tahm/",
  },
};

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
      "@type": "Person",
      "@id": "https://hamitahm.com/#hami-tahm",
      name: "Hami Tahm",
      jobTitle: "AI Visibility Consultant",
      url: "https://hamitahm.com/hami-tahm/",
      image: `https://hamitahm.com${PORTRAIT_SRC}`,
      description:
        "Hami Tahm is a Canadian AI visibility consultant and founder of HomeCalc.ca and HamiTahm.com.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "111 Peter Street, 9th Floor, Suite 902",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2H1",
        addressCountry: "CA",
      },
      knowsAbout: [
        "AI Visibility",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization",
        "SEO",
        "Real estate technology",
        "Canadian mortgage market",
      ],
      sameAs: [
        "https://www.linkedin.com/in/hamitahm",
        "https://x.com/hamitahm",
        "https://homecalc.ca",
        "https://houmse.com",
      ],
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
            <Stat value="100" unit="hrs/wk" label="Deep work" />
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
            <div className="prose">
              <p className="big">
                Hami Tahm is a Canadian AI visibility consultant who built HomeCalc.ca from zero to 1,100 AI citations in 30 days while the domain was under three months old.
              </p>
              <p>
                I&rsquo;m Hami Tahm, a tech entrepreneur focused on building and testing scalable digital products across multiple industries.
              </p>
              <p>
                Over the past decade, I&rsquo;ve launched and operated ventures across marketplaces, marketing, and AI-driven platforms &mdash; with a focus on speed, iteration, and real-world validation.
              </p>
              <p>
                I don&rsquo;t chase ideas &mdash; I validate them. I&rsquo;ve learned that most ideas fail not because they&rsquo;re bad, but because they&rsquo;re not tested fast enough or killed early enough.
              </p>
              <p>
                Now, I&rsquo;m focused on identifying one breakout opportunity &mdash; a product that can scale globally and become a category leader.
              </p>
              <p>I&rsquo;m especially interested in:</p>
              <p>
                <b>AI-driven products &middot; Platforms with strong distribution loops &middot; Businesses that can scale beyond geography</b>
              </p>
              <p>If you&rsquo;re building something ambitious or thinking globally, let&rsquo;s connect.</p>
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
                <li>
                  <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                    Book an AI visibility audit &rarr;
                  </Link>
                </li>
                <li>
                  <Link href={CONSULTANT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
                    Explore AI visibility services &rarr;
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

      {/* CTA */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap">
          <RevealSection delay={0.06}>
            <div className="cta-box">
              <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 500, position: "relative" }}>
                Want to be found in AI search?
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 16, position: "relative", maxWidth: "54ch", marginLeft: "auto", marginRight: "auto" }}>
                I help Canadian businesses show up in ChatGPT, Perplexity, and Google AI&nbsp;Overviews &mdash; using the same system I proved on my own products.
              </p>
              <Link href={AUDIT_URL} className="btn btn-primary" style={{ marginTop: 36, position: "relative" }}>
                Get Your AI Visibility Audit <span className="arr">&rarr;</span>
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
