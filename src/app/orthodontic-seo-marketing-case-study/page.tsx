import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const DENTAL_URL = "/ai-visibility/ai-visibility-for-dental-clinics/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const ABOUT_URL = "/hami-tahm/";

export const metadata: Metadata = {
  title: "Top 10 to #1 — A 7-Year Dental SEO Case Study",
  description:
    "How a single orthodontic practice went from page-one obscurity to #1 in the city through 7+ years of honest SEO, brand building, and conversion work. By Hami Tahm.",
  alternates: {
    canonical: "https://hamitahm.com/orthodontic-seo-marketing-case-study/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://hamitahm.com/orthodontic-seo-marketing-case-study/#article",
      headline: "Top 10 to #1 — A 7-Year Dental SEO Case Study",
      description:
        "How a single orthodontic practice went from page-one obscurity to #1 in the city through 7+ years of honest SEO, brand building, and conversion work.",
      url: "https://hamitahm.com/orthodontic-seo-marketing-case-study/",
      datePublished: "2026-02-15",
      dateModified: "2026-06-09",
      inLanguage: "en-CA",
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      publisher: { "@id": "https://hamitahm.com/#organization" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://hamitahm.com/orthodontic-seo-marketing-case-study/",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://hamitahm.com/orthodontic-seo-marketing-case-study/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: "https://hamitahm.com/orthodontic-seo-marketing-case-study/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Orthodontic SEO Case Study",
          item: "https://hamitahm.com/orthodontic-seo-marketing-case-study/",
        },
      ],
    },
  ],
};

const STATS = [
  { value: "7.5", label: "Years" },
  { value: "Top 10 → #1", label: "City ranking arc" },
  { value: "3", label: "Clinics scaled" },
  { value: "1", label: "Client, deep partnership" },
] as const;

export default function OrthodonticSEOCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="wrap" style={{ paddingTop: 24 }}>
        <RevealSection>
          <nav
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--faint)",
              display: "flex",
              gap: 8,
            }}
          >
            <Link href="/" style={{ color: "var(--faint)" }}>
              Home
            </Link>
            <span>/</span>
            <span>Case Study</span>
            <span>/</span>
            <span>Orthodontic SEO</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Hero ── */}
      <header style={{ padding: "34px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11.5px",
                letterSpacing: ".12em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Case Study &middot; Dental SEO
            </div>
          </RevealSection>

          <RevealSection delay={0.04}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(36px, 5.4vw, 60px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "22ch",
              }}
            >
              Top 10 to #1 — a 7-year orthodontic SEO case study.
            </h1>
          </RevealSection>

          <RevealSection delay={0.08}>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--faint)",
              }}
            >
              Case study by{" "}
              <Link href={ABOUT_URL} style={{ color: "var(--accent)" }}>
                Hami Tahm
              </Link>{" "}
              &mdash; February 2026.
            </p>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "62ch",
                lineHeight: 1.65,
              }}
            >
              How one orthodontic practice went from page-one obscurity to #1
              in its city &mdash; through 7+ years of patient SEO, brand
              building, conversion work, and a single contrarian decision that
              changed everything.
            </p>
          </RevealSection>

          <RevealSection delay={0.16}>
            <div className="cs-stat-strip" style={{ marginTop: 32 }}>
              {STATS.map(({ value, label }) => (
                <div key={label} className="proof-card">
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(26px, 3.6vw, 38px)",
                      fontWeight: 500,
                      color: "var(--accent)",
                      letterSpacing: "-.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 14,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.45,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── 1 — The Inbox Message ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              The message that started it
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              Years before I called myself an AI Visibility Consultant, I was a
              technical SEO specialist writing on a personal blog. Not chasing
              clients. Just publishing what I was learning.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              One message in the inbox changed that. A prominent orthodontist
              wrote:{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--ink)",
                }}
              >
                &ldquo;Can you rank my website on the first page?&rdquo;
              </em>
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              I was honest with him. I&rsquo;d never run an SEO project for
              another business before &mdash; only for myself. He hired me
              anyway. That decision turned into a 7.5-year partnership and
              became the foundation of every methodology I&rsquo;ve used since.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 2 — The Failing Start ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              Six months of failing &mdash; and the turning point
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              The first six months were brutal. I couldn&rsquo;t get his target
              keywords onto page one. By every conventional measure, the
              engagement was failing.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 28,
              }}
            >
              Instead of firing me, he offered me a second website. When I
              asked why, his answer is one I&rsquo;ve never forgotten:
            </p>
            <blockquote
              style={{
                margin: "0 0 28px",
                paddingLeft: 22,
                borderLeft: "3px solid var(--accent)",
                fontFamily: "var(--serif)",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontStyle: "italic",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              &ldquo;You are totally different from every agency I&rsquo;ve
              worked with. It&rsquo;s in the way you explain strategy and
              marketing.&rdquo;
            </blockquote>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              I made a contrarian call. I told him to{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                stop running multiple weak websites
              </strong>{" "}
              &mdash; it was diluting his authority across the same audience.
              We consolidated everything into a single domain. One brand. One
              authority signal. One target for every link, citation, and
              ranking signal we&rsquo;d build over the next seven years.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--ink)",
                fontWeight: 500,
                lineHeight: 1.72,
              }}
            >
              That call &mdash; choosing concentration over fragmentation
              &mdash; was the single highest-leverage decision of the entire
              engagement.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 3 — Beyond SEO ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              Beyond rankings &mdash; building a brand the city remembered
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 24,
              }}
            >
              SEO got us in the door. But for a medical professional, search
              traffic isn&rsquo;t the destination &mdash; brand recall is.
              Patients who remember your name when they need treatment are
              worth more than patients who happen to click. So we built around
              that.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              Four pillars on top of the SEO foundation:
            </p>
          </RevealSection>

          {[
            {
              n: "01",
              title: "Retargeting funnels",
              body:
                "Every site visitor stayed in the brand orbit &mdash; display ads, follow-up touches, gentle reminders. The first visit was almost never the conversion. The fifth often was.",
            },
            {
              n: "02",
              title: "Data dashboards",
              body:
                "We tracked brand awareness, branded-search lift, and impression share in real time. Without measurement, the brand work would have looked like vanity. With it, we could prove the compounding effect month over month.",
            },
            {
              n: "03",
              title: "Google Ads + lead generation",
              body:
                "Once the SEO foundation was solid, we layered paid acquisition on top &mdash; for new procedures and new locations specifically, not as a substitute for organic. Paid funded the experiments. Organic carried the durable wins.",
            },
            {
              n: "04",
              title: "CRO across three clinic locations",
              body:
                "We tracked how many website visitors actually became scheduled patients, broken down per clinic. Different cities, different demographics, different conversion patterns &mdash; each location got its own funnel optimization, not a one-size-fits-all template.",
            },
          ].map(({ n, title, body }) => (
            <RevealSection key={n} delay={0.06}>
              <div
                style={{
                  padding: "24px 0",
                  borderTop: "1px solid var(--line)",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 20,
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 14,
                    color: "var(--accent)",
                    letterSpacing: ".05em",
                  }}
                >
                  {n}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 21,
                      fontWeight: 600,
                      letterSpacing: "-.01em",
                      marginBottom: 8,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15.5,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── 4 — Result ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              The result &mdash; #1 in the city
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 24,
              }}
            >
              When we started, the practice was somewhere in the top 10
              orthodontists in the city. By year seven, through relentless
              optimization and a brand-first mentality,{" "}
              <strong
                style={{
                  color: "var(--ink)",
                  fontWeight: 600,
                }}
              >
                he became the #1 orthodontist in his market
              </strong>{" "}
              &mdash; both on search and in the categories patients used to
              describe top providers.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              Three clinics. One unified brand. Seven years of compounding
              authority. None of it was a single tactic. It was the discipline
              of running one playbook, with one operator, against one set of
              clear KPIs, for long enough that the market noticed.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── 5 — Why I'm Sharing This ── */}
      <section style={{ padding: "46px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 38px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              Why this matters now
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              This was my deepest single-client engagement. Seven years, one
              practice, one consolidated brand. I don&rsquo;t run a roster of
              dozens of accounts with cookie-cutter templates. I never have.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              The principles that won &mdash; concentration over fragmentation,
              brand recall over click counts, transparency about what&rsquo;s
              working and what isn&rsquo;t, measurement instead of vanity
              &mdash; are exactly the principles I now apply to{" "}
              <Link
                href="/ai-visibility/"
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                AI visibility work
              </Link>
              .
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              AI search is a younger surface than Google, but the discipline is
              the same: choose one operator, build one strategy, measure honestly,
              and let it compound. The proof is on{" "}
              <Link
                href={CASE_STUDY_URL}
                style={{ color: "var(--accent)", fontWeight: 500 }}
              >
                HomeCalc.ca &mdash; {HOMECALC_CLAIMS.citationsInTimeframe}
              </Link>{" "}
              on a YMYL site under three months old.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--ink)",
                fontWeight: 500,
                lineHeight: 1.72,
              }}
            >
              If you&rsquo;re a dental practice, an orthodontist, or any
              high-ticket professional service in Canada or the US tired of
              agencies that promise rankings and disappear &mdash; the
              methodology is the same. I just apply it now to a market that
              also includes ChatGPT, Perplexity, and Google AI Overviews.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="wrap">
          <RevealSection>
            <div className="final-cta">
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  lineHeight: 1.12,
                  letterSpacing: "-.02em",
                  position: "relative",
                }}
              >
                Bring the same discipline to your practice
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  color: "var(--muted)",
                  maxWidth: "48ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Start with a $1,500 AI Visibility Audit. Report and walkthrough
                call within 7 business days. Consultant-led &mdash; no agency
                layer.
              </p>
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <Link href={AUDIT_URL} className="btn btn-primary">
                  Get Your AI Visibility Audit{" "}
                  <span className="arr">&rarr;</span>
                </Link>
                <Link href={DENTAL_URL} className="btn btn-ghost">
                  For dental clinics &rarr;
                </Link>
              </div>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "var(--muted)",
                  position: "relative",
                }}
              >
                Or email{" "}
                <a
                  href="mailto:TahmHami@gmail.com"
                  style={{ color: "var(--ink)" }}
                >
                  TahmHami@gmail.com
                </a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
