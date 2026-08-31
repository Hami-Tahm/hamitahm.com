import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CONSULTANT_URL = "/ai-visibility/ai-visibility-consultant-canada/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const ABOUT_URL = "/hami-tahm/";

export const metadata: Metadata = {
  title: "SEO Expert in Toronto: SEO + AI Search",
  description:
    "SEO expert in Toronto who covers both Google SEO and the new AI-search layer (Google AI Overviews, ChatGPT, Perplexity). Consultant-led, not an agency. By Hami Tahm.",
  alternates: {
    canonical: "https://hamitahm.com/seo-expert-toronto/",
  },
};

/*
 * ⚠️ THIS PAGE TARGETS THE SEO KEYWORD BUT SELLS THE AI VISIBILITY AUDIT.
 * That is deliberate and it is why the page survives: plenty of buyers who need
 * AEO have never heard the word, and "SEO expert Toronto" is how they search.
 *
 * What is NOT allowed here, corrected 2026-08-20: promising SEO delivery. This page
 * answered "Do you do link building?" with "Yes", described technical SEO work as
 * scoped per project, and declared serviceType "SEO Consulting" in its schema. None
 * of that is true: the ladder is Audit -> Action Plan -> optional Monitoring, and no
 * tier includes execution. It also contradicted llms.txt, which states plainly that
 * this is not an SEO agency and that no tier changes the client's site.
 *
 * So: describe SEO accurately, say what the practice measures and plans, and never
 * offer to perform the work. Same rule that retired the Implementation Sprint.
 */
const FAQ_ITEMS = [
  {
    q: "What does an SEO expert in Toronto actually do in 2026?",
    a: "Two jobs now, not one. The first is the classic job: keyword research, on-page optimization, technical fixes, content strategy and link building, so your site ranks on Google. The second is new: getting your business cited and recommended inside Google AI Overviews, ChatGPT, Claude and Bing Copilot. Anyone doing only the first is solving half the problem in 2026. To be clear about my own role: I work on the second job. I measure where AI engines cite you and write the plan for changing it; I don't take on the delivery work in either column.",
  },
  {
    q: "How much does an SEO expert cost in Toronto?",
    a: "For the market generally: $100–$250 an hour for experienced freelancers, monthly retainers of $1,500–$5,000 for small businesses and $5,000–$15,000 for mid-market, and project audits from $1,500–$5,000. Those are what other people charge, not what I sell. What I sell is one thing: the AI Visibility Audit at $1,500 CAD flat, one-time, no retainer, delivered in 7 business days, with an optional action plan afterward.",
  },
  {
    q: "How long does SEO take to produce results in Toronto?",
    a: "Traditional Google SEO: 4–9 months for a competitive local market like Toronto. AI search visibility is faster: I've seen citations begin within 48 hours of the right technical change (documented in the HomeCalc case study). The fastest wins are usually in AI search; the most durable wins are in classic SEO. You want both.",
  },
  {
    q: "Should I hire an agency or a freelance SEO expert in Toronto?",
    a: "Depends on what you need delivered and how complex your stack is. Agencies bring breadth (content team, link builders, technical SEO) but you usually work with an account manager, not the person doing the work. A consultant gives you direct access to the person making the calls, faster decisions, no overhead. For an audit or strategic project, a consultant is almost always the right call. For ongoing execution (someone actually shipping the changes month after month) you want an agency or an in-house developer, and that is genuinely not what I do.",
  },
  {
    q: "Can any SEO expert guarantee first-page rankings on Google?",
    a: "No. Anyone who guarantees rankings is either misleading you or planning to use tactics that will eventually get your site penalized. Google's ranking algorithm is opaque and changes constantly. What a good SEO expert can guarantee is a clear methodology, transparent reporting, and progress against the right metrics.",
  },
  {
    q: "What's the difference between SEO and AI search visibility?",
    a: "SEO is about ranking your page so users click through. AI search visibility is about being the source an AI engine pulls from and names directly in its answer. They share some signals (authority, content quality, structured data) but reward different things. SEO rewards rankings. AI search rewards extractability and entity recognition. In 2026, both matter, and most Toronto businesses are only doing the first.",
  },
  {
    q: "Do you do link building?",
    a: "No. I don't sell link building or outreach, and I'd be wary of anyone in this category who does: durable links come from being genuinely useful, not from being bought. What the audit does cover is where third-party sources already mention you, because those citations are part of what AI engines read when deciding whether to name you. If the plan says you need more of them, it says which kinds and why. Earning them is your team's work or your agency's, not mine.",
  },
  {
    q: "Do you work with businesses outside Toronto?",
    a: "Canada. My office is at 111 Peter Street, Toronto (visits by appointment), but the work is remote-first. The technical foundations of search and AI visibility travel: they work the same whether you're in Toronto, Calgary or Austin. Local visibility is a different matter, though: it depends on location context, consistent business details across directories, reviews and local references, all specific to where you actually operate.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://hamitahm.com/seo-expert-toronto/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Expert in Toronto",
          item: "https://hamitahm.com/seo-expert-toronto/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://hamitahm.com/seo-expert-toronto/#service",
      // Renamed 2026-08-20. It said "SEO Consulting" with serviceType "SEO Consulting",
      // declaring a service this practice does not sell. The page may target the SEO
      // query; the schema has to state what is actually for sale.
      name: "AI Visibility Audit: Toronto",
      url: "https://hamitahm.com/seo-expert-toronto/",
      serviceType: "AI visibility, AEO and GEO consulting",
      provider: { "@id": "https://hamitahm.com/#hami-tahm" },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "City", name: "Toronto" },
      ],
      // Street address removed 2026-08-11, see the note in
      // src/app/ai-visibility/page.tsx. areaServed carries the geography honestly.
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

export default function SEOExpertTorontoPage() {
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
            <span>SEO Expert in Toronto</span>
          </nav>
        </RevealSection>
      </div>

      {/* Hero */}
      <header style={{ padding: "34px 0 50px" }}>
        <div className="wrap">
          <RevealSection>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px, 5.6vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                maxWidth: "22ch",
              }}
            >
              SEO Expert in Toronto
            </h1>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p
              style={{
                marginTop: 28,
                fontSize: "clamp(17px, 2vw, 20px)",
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.65,
              }}
            >
              I&rsquo;m Hami Tahm, a Toronto-based consultant working on the newer
              half of search: whether your business gets cited inside ChatGPT,
              Perplexity and Google AI Overviews, and what to change when it
              doesn&rsquo;t. If you came here looking for classic SEO delivery, this
              page explains how the two differ and where each still matters.
              Consultant-led, no agency overhead, with a public case study you can
              verify.
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                color: "var(--ink)",
                fontWeight: 500,
                maxWidth: "52ch",
                lineHeight: 1.5,
              }}
            >
              Engagements start at $1,500 CAD for an AI Visibility Audit,
              see{" "}
              <Link href="/pricing/" style={{ color: "var(--accent)", fontWeight: 500 }}>what each step costs</Link>, or
              the{" "}
              <Link href="/ai-visibility/ai-visibility-consultant-toronto/" style={{ color: "var(--accent)", fontWeight: 500 }}>
                Toronto AI visibility practice
              </Link>{" "}
              if that&rsquo;s the side you need.
            </p>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href={AUDIT_URL} className="btn btn-primary">
                Get Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
              <Link href={CONSULTANT_URL} className="btn btn-ghost">
                Explore consulting services
              </Link>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* Section 1: Why SEO is two jobs now */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              SEO is two jobs in 2026
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              For two decades, &ldquo;SEO&rdquo; meant one thing: ranking on
              Google. You optimized a page, climbed the results, and hoped people
              clicked.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              That job still exists. But a second job has been added to it. A
              growing share of buyers, patients, and clients now ask AI tools
              directly: &ldquo;best mortgage broker in Toronto,&rdquo;
              &ldquo;dentist near me that does implants,&rdquo; &ldquo;real
              estate lawyer with good reviews.&rdquo; ChatGPT answers with a
              paragraph that names two or three businesses. The asker calls one
              of them. They never opened Google.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--ink)",
                fontWeight: 500,
                lineHeight: 1.72,
              }}
            >
              An SEO expert in Toronto in 2026 needs to cover both layers: the
              Google ranking layer and the AI citation layer. Most don&rsquo;t.
              That&rsquo;s the gap I work in.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Section 2: What to look for */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 28,
              }}
            >
              How to evaluate a Toronto SEO expert
            </h2>
          </RevealSection>

          {[
            {
              n: "01",
              title: "Ask for one named client and one real result",
              body:
                "Any SEO expert who can&rsquo;t name a single client and a measurable outcome from working with them is either too new or relying too heavily on stock case studies. You want a name and a number.",
            },
            {
              n: "02",
              title: "Look at what they&rsquo;ve built for themselves",
              body:
                "An SEO expert who hasn&rsquo;t made their own site rank, get cited, or earn traffic has a credibility problem. Their own brand is the most honest test of their methodology.",
            },
            {
              n: "03",
              title: "Ask if they cover AI search, not just Google",
              body:
                "In 2026, ranking on Google alone is no longer sufficient. Google AI Overviews, ChatGPT, Claude, and Bing Copilot collectively answer a meaningful share of search queries. An SEO expert who isn&rsquo;t auditing AI citations is missing half the picture.",
            },
            {
              n: "04",
              title: "Watch for transparency about pricing and methodology",
              body:
                "If you can&rsquo;t get a clear price and a clear description of what you&rsquo;re paying for before you sign, the engagement will be murky after you sign too. Good consultants put pricing and process on the page.",
            },
            {
              n: "05",
              title: "Avoid first-page rankings guarantees",
              body:
                "Anyone guaranteeing first-page rankings on Google is either misleading you or planning to use tactics that will eventually get your site penalized. The right guarantee is a clear methodology, transparent reporting, and progress against the right metrics.",
            },
          ].map(({ n, title, body }) => (
            <RevealSection key={n} delay={0.06}>
              <div
                style={{
                  padding: "26px 0",
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
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
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

      {/* Section 3: Proof */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              Proof: HomeCalc.ca
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 24,
              }}
            >
              HomeCalc.ca is a Canadian financial calculator site (under three
              months old at the time of the audit), in YMYL (Your Money or Your
              Life), one of Google&rsquo;s strictest content categories. After
              an AI visibility audit, the site went from {HOMECALC_CLAIMS.zeroToAppearances},{" "}
                {HOMECALC_PROOF.combinedSourceLong}.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink)",
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              On a domain that &ldquo;shouldn&rsquo;t have been able to rank for
              twelve to eighteen months,&rdquo; this is the kind of result the
              right SEO approach now produces.
            </p>
            <Link
              href={CASE_STUDY_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              Read the full HomeCalc case study <span>&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Section 4: How I work */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              How I work with Toronto businesses
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              Every engagement starts with the $1,500 AI Visibility Audit,
              covering both layers of search: how your business ranks on Google
              and how AI engines describe, cite, and recommend you. You get:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                "A written report",
                "A prioritized action plan",
                "A 60-minute walkthrough call",
                "14 days of follow-up",
                "Delivered in 7 business days",
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--mono)",
                      fontSize: 15,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(17px, 2vw, 19px)",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
              }}
            >
              Most engagements begin and end with the audit. You implement
              internally with the action plan, or your agency does. I
              don&rsquo;t take execution work:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {["No retainers", "No content production", "No technical delivery"].map(
                (item) => (
                  <li
                    key={item}
                    style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--mono)",
                        fontSize: 15,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      &rarr;
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(17px, 2vw, 19px)",
                        color: "var(--muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 24,
              }}
            >
              What can follow the audit is the action plan, and after that
              optional monitoring, only when it&rsquo;s the right next move
              rather than by default.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                fontStyle: "italic",
              }}
            >
              No retainer lock-in, no agency overhead, no junior team. Every
              audit is run personally.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Section 5: Who I am */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 24,
              }}
            >
              About Hami Tahm
            </h2>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 20,
              }}
            >
              I&rsquo;ve been building on the web for over a decade, across
              roughly fourteen ventures, including a 7-year run as the SEO
              expert behind a dental clinic network. I&rsquo;m based at 111 Peter
              Street in Toronto and serve clients across Canada, with selective US
              and UK work.
            </p>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 19px)",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: 24,
              }}
            >
              Current builds: HomeCalc.ca (Canadian personal-finance calculators)
              and Houmse.com (managed cleaning marketplace across the GTA). The
              AI visibility consultancy at HamiTahm.com is where I work directly
              with other businesses.
            </p>
            <Link
              href={ABOUT_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              More about Hami Tahm <span>&rarr;</span>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section style={{ padding: "60px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(27px, 3.6vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-.015em",
                marginBottom: 28,
              }}
            >
              Frequently Asked Questions
            </h2>
          </RevealSection>

          <RevealSection delay={0.06}>
            <div>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div key={q} className="faq-item">
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Final CTA */}
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
                Ready to see where you stand?
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
                call within 7 business days. No retainer, no agency layer.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get Your AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
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
                  href="mailto:hami@hamitahm.com"
                  style={{ color: "var(--ink)" }}
                >
                  hami@hamitahm.com
                </a>
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
