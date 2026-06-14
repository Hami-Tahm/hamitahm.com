import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Visibility Blog & Guides",
  description:
    "Practical guides on how AI search works, how to get cited by ChatGPT, Perplexity, and Google AI Overviews, and what Canadian businesses need to do about it.",
};

const posts = [
  {
    href: "/blog/what-is-ai-visibility/",
    cat: "Basics",
    title: "What Is AI Visibility (and Why It Matters Now)",
    excerpt:
      "The shift from links to answers, and why being cited by AI is the new being found.",
  },
  {
    href: "/blog/aeo-vs-geo-vs-seo/",
    cat: "AEO / GEO / SEO",
    title: "AEO vs GEO vs SEO — What's the Difference?",
    excerpt:
      "Three acronyms, one goal — being found. Here’s how they differ and where to focus.",
  },
  {
    href: "/blog/how-to-get-mentioned-by-chatgpt/",
    cat: "ChatGPT & Perplexity",
    title: "How to Get Your Business Mentioned by ChatGPT",
    excerpt:
      "What actually influences whether an assistant names and recommends you.",
  },
  {
    href: "/blog/how-to-appear-in-google-ai-overviews/",
    cat: "Google AI Overviews",
    title: "How to Appear in Google AI Overviews",
    excerpt:
      "Why AI Overviews cite sources that don’t rank on page one — and how to be one.",
  },
  {
    href: "/blog/how-to-get-cited-by-perplexity/",
    cat: "ChatGPT & Perplexity",
    title: "How to Get Cited by Perplexity AI",
    excerpt:
      "Perplexity shows its sources — here’s how to become one of them.",
  },
  {
    href: "/blog/how-to-check-ai-visibility/",
    cat: "Basics",
    title: "How to Check Your AI Visibility",
    excerpt:
      "A simple way to see whether ChatGPT, Perplexity, and Google AI mention your business today.",
  },
  {
    href: "/blog/what-is-answer-engine-optimization/",
    cat: "AEO / GEO / SEO",
    title: "What Is Answer Engine Optimization (AEO)?",
    excerpt:
      "Optimizing to be the answer, not just a result — the core idea behind AEO.",
  },
  {
    href: "/blog/best-ai-visibility-tools/",
    cat: "Tools & Comparisons",
    title: "Best AI Visibility Tools in 2026: Ranked by an Independent Consultant",
    excerpt:
      "The tools that track AI search visibility — ranked, tested, and reviewed by an independent consultant who doesn't sell them.",
  },
  {
    href: "/blog/ai-visibility-tools-vs-audit/",
    cat: "Strategy",
    title: "AI Visibility Tools vs AI Visibility Audit — Which Do You Need?",
    excerpt:
      "Tools show dashboards. Audits show what to fix. When you need a tool, an audit, or both.",
  },
  {
    href: "/blog/peec-vs-profound-vs-airops/",
    cat: "Tools & Comparisons",
    title: "Peec AI vs Profound vs AirOps — AI Visibility Tools Compared",
    excerpt:
      "Detailed comparison of the three leading AI visibility platforms — features, pricing, and fit.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://hamitahm.com/blog/#blog",
      url: "https://hamitahm.com/blog/",
      name: "AI Visibility Blog",
      description:
        "Practical guides on how AI search works, how to get cited by ChatGPT, Perplexity, and Google AI Overviews, and what Canadian businesses need to do about it.",
      inLanguage: "en-CA",
      publisher: { "@id": "https://hamitahm.com/#organization" },
      author: { "@id": "https://hamitahm.com/#hami-tahm" },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://hamitahm.com${p.href}`,
        description: p.excerpt,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hamitahm.com/blog/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hamitahm.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://hamitahm.com/blog/" },
      ],
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ── BREADCRUMB ── */}
      <div className="wrap">
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--faint)",
            padding: "24px 0 0",
          }}
        >
          <Link
            href="/ai-visibility/"
            style={{ color: "var(--muted)", transition: "color .2s" }}
          >
            AI Visibility
          </Link>{" "}
          / Blog
        </div>
      </div>

      {/* ── HEADER ── */}
      <header style={{ padding: "30px 0 30px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                letterSpacing: ".18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 1,
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              AI Visibility Blog
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(38px,5.4vw,58px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
              }}
            >
              Understanding AI visibility &mdash; guides, frameworks, and
              analysis.
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                marginTop: 20,
                fontSize: 18,
                color: "var(--muted)",
                maxWidth: "58ch",
                lineHeight: 1.6,
              }}
            >
              Practical guides on how AI search works, how to get cited by
              ChatGPT, Perplexity, and Google AI Overviews, and what Canadian
              businesses need to do about it.
            </p>
          </RevealSection>
        </div>
      </header>

      {/* ── FEATURED POST ── */}
      <div className="wrap">
        <RevealSection delay={0.18}>
          <Link
            href="/blog/what-is-ai-visibility/"
            style={{
              marginTop: 14,
              background: "var(--panel)",
              border: "1px solid var(--line-strong)",
              borderRadius: 16,
              padding: 40,
              boxShadow:
                "0 1px 2px rgba(24,23,21,.04),0 14px 44px -24px rgba(24,23,21,.18)",
              position: "relative",
              overflow: "hidden",
              display: "block",
              transition: "transform .2s",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-40%",
                right: "-6%",
                width: 320,
                height: 320,
                background:
                  "radial-gradient(circle,rgba(15,110,120,.10),transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                position: "relative",
              }}
            >
              Start here &middot; Guide
            </span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(26px,3.6vw,36px)",
                fontWeight: 600,
                letterSpacing: "-.02em",
                margin: "14px 0 12px",
                lineHeight: 1.12,
                position: "relative",
                maxWidth: "20ch",
              }}
            >
              What Is AI Visibility (and Why It Matters Now)
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "16.5px",
                maxWidth: "60ch",
                position: "relative",
                lineHeight: 1.55,
              }}
            >
              The shift from search results to AI answers, explained &mdash;
              what &ldquo;AI visibility&rdquo; actually means, why it&rsquo;s
              different from SEO, and what it means for your business.
            </p>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--accent)",
                marginTop: 18,
                display: "inline-block",
                position: "relative",
              }}
            >
              Read the guide &rarr;
            </span>
          </Link>
        </RevealSection>
      </div>

      {/* ── POST LIST ── */}
      <div className="wrap">
        <RevealSection delay={0.24}>
          <div style={{ padding: "40px 0 30px" }}>
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderBottom: "1px solid var(--line)",
                  transition: "padding-left .25s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {post.cat}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 24,
                      fontWeight: 500,
                      letterSpacing: "-.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {post.title}
                  </span>
                  <span
                    style={{
                      fontSize: "14.5px",
                      color: "var(--muted)",
                      maxWidth: "64ch",
                      lineHeight: 1.55,
                    }}
                  >
                    {post.excerpt}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Guide
                </span>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>

      {/* ── CTA STRIP ── */}
      <div className="wrap" style={{ paddingBottom: 80 }}>
        <RevealSection delay={0.06}>
          <div
            style={{
              marginTop: 30,
              background: "var(--panel)",
              border: "1px solid var(--line-strong)",
              borderRadius: 14,
              padding: "34px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              boxShadow:
                "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 24,
                  fontWeight: 500,
                  letterSpacing: "-.01em",
                }}
              >
                Want to know where your business stands?
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "14.5px",
                  marginTop: 5,
                }}
              >
                Book a $1,500 AI Visibility Audit &mdash; full diagnosis of
                where AI engines mention you, delivered in 7&nbsp;days.
              </p>
            </div>
            <Link
              href="/ai-visibility/ai-visibility-audit/"
              className="btn btn-primary"
            >
              Book Your AI Visibility Audit <span className="arr">&rarr;</span>
            </Link>
          </div>
        </RevealSection>
      </div>
    </>
  );
}
