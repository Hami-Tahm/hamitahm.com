import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

export const metadata: Metadata = {
  title: "Best AI Visibility Tools (2025) — Complete Guide",
  description:
    "Compare the best AI visibility tools: Peec AI, AirOps, Profound, and more. What they do, what they cost, and when you need more than a dashboard.",
};

export default function BestAIVisibilityToolsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: blogSchemaJson({
            slug: "best-ai-visibility-tools",
            title: "Best AI Visibility Tools (2026) — Complete Guide",
            description: "Compare the best AI visibility tools: Peec AI, AirOps, Profound, Limy, Ubersuggest, and more. What they do, what they cost, and when you need more than a dashboard.",
            datePublished: "2026-05-20",
          }),
        }}
      />
      {/* ── Breadcrumb ── */}
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
            <Link href="/ai-visibility/" style={{ color: "var(--muted)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>
              Blog
            </Link>
            <span>/</span>
            <span>Best AI Visibility Tools</span>
          </nav>
        </RevealSection>
      </div>

      {/* ── Header ── */}
      <header style={{ padding: "24px 0 26px" }}>
        <div className="wrap">
          <RevealSection>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11.5px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 16,
              }}
            >
              Tools &amp; Comparisons
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-.025em",
              }}
            >
              Best{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                AI visibility tools
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 21,
                color: "var(--muted)",
                marginTop: 18,
                lineHeight: 1.5,
              }}
            >
              The best tools for tracking how your brand appears in ChatGPT,
              Perplexity, and Google AI Overviews &mdash; what they do, what
              they cost, and where they fall short.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 26,
                paddingTop: 22,
                borderTop: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid var(--line-strong)",
                  background: "linear-gradient(145deg,#e8dfce,#fff)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Hami Tahm</div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    marginTop: 1,
                  }}
                >
                  Updated 2026 &middot; 9 min read
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </header>

      {/* ── Article ── */}
      <article>
        <div
          className="wrap"
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            lineHeight: 1.72,
            color: "#2a2824",
            maxWidth: 740,
          }}
        >
          {/* ── TL;DR ── */}
          <RevealSection>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "6px 0 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                In short
              </div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 16,
                  color: "var(--ink)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                The best AI visibility tools track how your brand appears in AI
                search. The top options are Peec AI, AirOps, Profound, Limy,
                and Ubersuggest. But tools show dashboards &mdash; most
                businesses also need interpretation and execution.
              </p>
            </div>
          </RevealSection>

          {/* ── 01 — Why AI visibility tools matter now ── */}
          <RevealSection>
            <SectionLabel number="01" text="Why AI visibility tools matter now" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              More people are getting answers from AI instead of clicking
              through search results. ChatGPT, Perplexity, and Google AI
              Overviews name a handful of brands in every answer &mdash; and
              leave out everyone else. If you don&rsquo;t know whether
              you&rsquo;re being mentioned, you can&rsquo;t fix it.
            </p>

            <p style={{ marginBottom: 26 }}>
              That&rsquo;s where AI visibility tools come in. They monitor
              which brands AI models mention for relevant queries, how often
              you appear, and how your visibility changes over time.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Think of them as the Google Search Console equivalent for AI
                search.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              The category is young &mdash; most of these tools launched in
              2024 or early 2025. None of them is perfect. But having some
              visibility into how AI sees your brand is better than guessing.
            </p>
          </RevealSection>

          {/* ── 02 — What to look for ── */}
          <RevealSection>
            <SectionLabel number="02" text="What to look for" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Not all AI visibility tools are created equal. When evaluating
              them, focus on three dimensions:
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Coverage
            </h3>
            <p style={{ marginBottom: 26 }}>
              Which AI platforms does the tool track? Some only cover ChatGPT.
              Others include Perplexity, Google AI Overviews, Claude, or
              Gemini. The more platforms covered, the more complete your
              picture.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Accuracy
            </h3>
            <p style={{ marginBottom: 26 }}>
              AI answers change based on context, location, and phrasing. A
              good tool queries AI models repeatedly across variations and
              reports confidence levels rather than single snapshots.
            </p>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Actionability
            </h3>
            <p style={{ marginBottom: 26 }}>
              Dashboards are useful, but what do you do with the data? The best
              tools don&rsquo;t just show you scores &mdash; they suggest why
              you&rsquo;re not appearing and what to change.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                Most tools fall short here.
              </strong>
            </p>
          </RevealSection>

          {/* ── 03 — The tools ── */}
          <RevealSection>
            <SectionLabel number="03" text="The tools" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {/* Peec AI */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Peec AI
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              ~223K/mo traffic &middot; AI search analytics for marketing teams
            </p>
            <p style={{ marginBottom: 16 }}>
              Peec focuses on making AI search analytics simple and accessible
              for marketing teams. It tracks how brands appear across ChatGPT,
              Perplexity, and other AI platforms, presenting the data in clean
              dashboards that non-technical marketers can actually use.
            </p>
            <ul style={{ margin: "0 0 12px 22px" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Best for:
                </strong>{" "}
                Marketing teams that want a straightforward AI search dashboard
                without a steep learning curve.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Strength:
                </strong>{" "}
                Clean UX and fast onboarding. You can see your AI visibility
                picture within minutes.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Limitation:
                </strong>{" "}
                Analytics-focused &mdash; shows the &ldquo;what&rdquo; but
                doesn&rsquo;t guide the &ldquo;how to fix it.&rdquo;
              </li>
            </ul>

            {/* AirOps */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              AirOps
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              ~199K/mo traffic &middot; AI search visibility + content
              execution platform
            </p>
            <p style={{ marginBottom: 16 }}>
              AirOps bridges the gap between visibility tracking and content
              execution. Beyond monitoring your AI search presence, it provides
              content workflows and automation tools designed to improve your
              visibility over time.
            </p>
            <ul style={{ margin: "0 0 12px 22px" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Best for:
                </strong>{" "}
                Teams that want tracking and content execution in one platform.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Strength:
                </strong>{" "}
                Combines monitoring with action &mdash; content workflows help
                you actually improve what you measure.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Limitation:
                </strong>{" "}
                The content execution side adds complexity. Not ideal if you
                just want a simple tracking dashboard.
              </li>
            </ul>

            {/* Profound */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Profound
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              ~586K/mo traffic &middot; Enterprise AI visibility platform
            </p>
            <p style={{ marginBottom: 16 }}>
              Profound is the enterprise-grade option. It offers deep AI
              visibility analytics with broad platform coverage, competitive
              benchmarking, and detailed reporting designed for large
              organizations with multiple brands or product lines.
            </p>
            <ul style={{ margin: "0 0 12px 22px" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Best for:
                </strong>{" "}
                Enterprise teams managing visibility across multiple brands,
                markets, or product categories.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Strength:
                </strong>{" "}
                Depth and breadth of tracking. Competitive intelligence across
                AI platforms is strong.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Limitation:
                </strong>{" "}
                Enterprise pricing and complexity. Likely overkill for a small
                or mid-size business.
              </li>
            </ul>

            {/* Limy */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Limy
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              ~27K/mo traffic &middot; From $149/mo &middot; AI search
              visibility + revenue attribution
            </p>
            <p style={{ marginBottom: 16 }}>
              Limy differentiates itself by connecting AI visibility to revenue.
              Beyond tracking mentions, it attributes actual business outcomes
              to AI search presence, showing which AI-driven citations lead to
              traffic and conversions.
            </p>
            <ul style={{ margin: "0 0 12px 22px" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Best for:
                </strong>{" "}
                Performance-focused teams that need to tie AI visibility to
                revenue and ROI.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Strength:
                </strong>{" "}
                Revenue attribution sets it apart. You can see the business
                impact, not just the visibility score.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Limitation:
                </strong>{" "}
                Smaller platform &mdash; less established than competitors.
                Revenue attribution depends on your analytics setup.
              </li>
            </ul>

            {/* Ubersuggest */}
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: 23,
                letterSpacing: "-.01em",
                margin: "34px 0 12px",
                color: "var(--ink)",
              }}
            >
              Ubersuggest (Neil Patel)
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--faint)",
                marginBottom: 14,
              }}
            >
              ~1.2M/mo traffic &middot; Free/entry-level AI visibility checker
            </p>
            <p style={{ marginBottom: 16 }}>
              Ubersuggest added AI visibility features to its existing SEO
              toolkit. It&rsquo;s the most accessible entry point &mdash; you
              can check basic AI visibility metrics for free or at a low cost
              as part of the broader Ubersuggest suite.
            </p>
            <ul style={{ margin: "0 0 12px 22px" }}>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Best for:
                </strong>{" "}
                Businesses already using Ubersuggest for SEO who want a quick
                AI visibility check without adopting a new tool.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Strength:
                </strong>{" "}
                Free tier available. Familiar interface if you already use
                Ubersuggest. Massive user base means active development.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Limitation:
                </strong>{" "}
                AI visibility is a bolt-on to an SEO tool, not the core focus.
                Depth and accuracy trail dedicated platforms.
              </li>
            </ul>
          </RevealSection>

          {/* ── 04 — Tools vs audit ── */}
          <RevealSection>
            <SectionLabel
              number="04"
              text="Tools vs audit: when you need more than a dashboard"
            />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Every tool on this list shows you data. None of them tells you
              exactly why you&rsquo;re invisible or ships the fixes for you.{" "}
              <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                A dashboard tells you the score. An audit tells you the play.
              </strong>
            </p>

            <p style={{ marginBottom: 26 }}>
              If your AI visibility is already decent and you need ongoing
              monitoring, a tool makes sense. But if you&rsquo;re not showing
              up at all &mdash; or you don&rsquo;t know why &mdash; you need
              someone to diagnose the problem and build a plan. That&rsquo;s
              what an{" "}
              <Link
                href="/blog/ai-visibility-tools-vs-audit/"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationThickness: 1,
                }}
              >
                AI visibility audit
              </Link>{" "}
              does.
            </p>

            <blockquote
              style={{
                borderLeft: "2px solid var(--accent)",
                padding: "6px 0 6px 24px",
                margin: "30px 0",
                fontStyle: "italic",
                color: "var(--muted)",
              }}
            >
              Tools monitor. Audits diagnose. You usually need both &mdash; but
              if you can only start with one, start with the audit.
            </blockquote>
          </RevealSection>

          {/* ── Inline CTA ── */}
          <RevealSection>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 14,
                padding: "30px 32px",
                margin: "42px 0",
                boxShadow:
                  "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-.01em",
                }}
              >
                Want someone to interpret the data and ship the fixes?
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "14.5px",
                  color: "var(--muted)",
                  margin: "8px 0 18px",
                  lineHeight: 1.55,
                }}
              >
                An AI Visibility Audit goes beyond dashboards &mdash;
                diagnosis, prioritized fixes, and an execution plan.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
              >
                Get an AI Visibility Audit <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>

          {/* ── 05 — How to choose ── */}
          <RevealSection>
            <SectionLabel number="05" text="How to choose" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The right tool depends on where you are:
            </p>

            <ul style={{ margin: "0 0 26px 22px" }}>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Just curious?
                </strong>{" "}
                Start with Ubersuggest&rsquo;s free tier. It gives you a basic
                read without any commitment.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Marketing team wanting ongoing tracking?
                </strong>{" "}
                Peec AI or Limy. Clean dashboards, reasonable price points,
                focused on what marketers need.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Need tracking + content execution?
                </strong>{" "}
                AirOps. It bridges monitoring and action.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Enterprise with multiple brands?
                </strong>{" "}
                Profound. Built for the complexity large organizations deal
                with.
              </li>
              <li style={{ marginBottom: 11 }}>
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Want revenue attribution?
                </strong>{" "}
                Limy. It connects visibility to business outcomes.
              </li>
            </ul>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--line)",
                margin: "42px 0",
              }}
            />

            <p style={{ marginBottom: 26 }}>
              Most businesses need both &mdash; a tool for ongoing tracking and
              an expert for diagnosis and execution. The tool shows you the
              dashboard. The expert tells you what it means and what to do
              about it.
            </p>
          </RevealSection>
        </div>

        {/* ── Keep reading ── */}
        <div className="wrap" style={{ maxWidth: 740 }}>
          <RevealSection>
            <div
              style={{
                padding: "44px 0 30px",
                borderTop: "1px solid var(--line)",
                marginTop: 44,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 22,
                }}
              >
                Keep reading
              </div>

              <Link
                href="/blog/ai-visibility-tools-vs-audit/"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 20,
                  padding: "15px 0",
                  borderBottom: "1px solid var(--line)",
                  transition: "padding-left .2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  AI Visibility Tools vs Audit
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Strategy
                </span>
              </Link>

              <Link
                href="/blog/what-is-ai-visibility/"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 20,
                  padding: "15px 0",
                  borderBottom: "1px solid var(--line)",
                  transition: "padding-left .2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 19,
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  What Is AI Visibility?
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--faint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Basics
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </article>

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
                Let&rsquo;s see if you&rsquo;re showing up.
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
                Start with a free AI Visibility Snapshot &mdash; I&rsquo;ll show
                you exactly how your brand appears (or doesn&rsquo;t) inside
                ChatGPT, Perplexity, and Google AI&nbsp;Overviews.
              </p>
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Get your free snapshot <span className="arr">&rarr;</span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

/* ── Local helper ── */

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 34,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number} &mdash; {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}
