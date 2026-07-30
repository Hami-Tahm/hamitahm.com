import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { ShortAnswer } from "@/components/ShortAnswer";
import { RevealSection } from "@/components/Reveal";
import { blogSchemaJson } from "@/lib/blog-schema";

const SLUG = "which-ai-platform-matters-most";
const ARTICLE_TITLE = "Which AI Platform Actually Matters Most Right Now?";
const ARTICLE_DESCRIPTION =
  "Google AI Overviews, ChatGPT, Gemini, Claude, Copilot, Perplexity — ranked by real traffic share, not assumptions. And why this changed my own site.";
const DATE_PUBLISHED = "2026-07-30";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";

export const metadata: Metadata = {
  title: { absolute: "Which AI Platform Matters Most? (2026 Traffic Data)" },
  description: ARTICLE_DESCRIPTION,
  alternates: { canonical: `https://hamitahm.com/blog/${SLUG}/` },
};

const schemaJson = blogSchemaJson({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
  cluster: "ai-visibility",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <article style={{ padding: "72px 0" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <RevealSection>
            <div style={mono}>
              <Link href="/" style={{ color: "var(--accent)" }}>
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog/" style={{ color: "var(--accent)" }}>
                Blog
              </Link>{" "}
              / Strategy
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(34px, 5.4vw, 54px)",
                lineHeight: 1.06,
                letterSpacing: "-.03em",
                marginTop: 26,
              }}
            >
              Which AI platform actually matters most right now?
            </h1>

            <p
              style={{
                marginTop: 24,
                fontSize: 20,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              I keep seeing businesses treat &ldquo;ChatGPT, Perplexity,
              Gemini, Claude&rdquo; as one undifferentiated blob to optimize
              for. It isn&rsquo;t. The traffic behind those names is wildly
              uneven, it moved fast in the last year, and it should decide
              where you spend your limited AEO effort first.
            </p>

            <AuthorByline date="July 30, 2026" readTime="6 min read" />
          </RevealSection>

          <RevealSection delay={0.08}>
            <div className="prose" style={{ marginTop: 44 }}>
              <ShortAnswer>
                By real traffic, in order: Google AI Overviews first (folded
                into Google Search itself, so it reaches the widest audience
                by far), then ChatGPT (still the dominant standalone
                assistant), then Gemini (rising fast on Google&rsquo;s own
                distribution), then Claude (smaller, growing fastest), then
                Copilot and Perplexity, roughly tied, well behind the rest.
                That order should set your priority — not equal effort across
                six logos.
              </ShortAnswer>

              <Callout>
                <strong style={{ color: "var(--ink)" }}>
                  Where this comes from.
                </strong>{" "}
                The headline figures — AI Overviews now appearing in{" "}
                <a
                  href="https://www.similarweb.com/corp/reports/2026-generative-ai-landscape/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  Similarweb&rsquo;s 2026 Generative AI Landscape Report
                </a>
                , &ldquo;the market is fragmenting&rdquo; as ChatGPT&rsquo;s
                share declines while Gemini and Claude gain ground — are
                Similarweb&rsquo;s own stated findings, not a third-party
                paraphrase. The more granular per-platform percentages in the
                table below are as summarized by outlets reporting on that
                same Similarweb dataset in June–July 2026 (Wallaroo Media,
                ppc.land, FourWeekMBA, CommandLinux), since Similarweb&rsquo;s
                full breakdown sits behind a downloadable report I have not
                filled out a form to access. I did not run this measurement
                myself — unlike the{" "}
                <Link href="/blog/ai-citation-study/" style={{ color: "var(--accent)" }}>
                  first-party citation study
                </Link>{" "}
                elsewhere on this site, this is third-party data, and
                I&rsquo;m stating that plainly rather than presenting it as
                something I measured.
              </Callout>

              <H2>The order, with numbers</H2>
              <p>
                As of May–June 2026, across the AI platforms this site audits
                for clients:
              </p>

              <Table
                head={["Platform", "Share / traffic", "Trend"]}
                rows={[
                  [
                    "Google AI Overviews",
                    ">40% of US Google searches (Similarweb)",
                    "sharply up year-over-year",
                  ],
                  [
                    "ChatGPT",
                    "53.9% of global AI-chatbot web visits",
                    "down from ~76% a year earlier",
                  ],
                  [
                    "Gemini",
                    "27.9% share, 2.9B monthly visits",
                    "up ~450% YoY, from 527.7M",
                  ],
                  [
                    "Claude",
                    "9.2% share, ~953M monthly visits",
                    "up ~855% YoY, from ~2.2% share",
                  ],
                  [
                    "Copilot / Perplexity",
                    "well under 10% each",
                    "roughly flat, long tail",
                  ],
                ]}
              />

              <p>
                Two things jump out. First,{" "}
                <strong style={{ color: "var(--ink)" }}>
                  Google AI Overviews is not a fringe feature
                </strong>{" "}
                — it&rsquo;s embedded in the search box nearly half of your
                buyers already use, which puts its real reach above every
                standalone assistant combined. Second,{" "}
                <strong style={{ color: "var(--ink)" }}>
                  ChatGPT&rsquo;s dominance is shrinking in real time.
                </strong>{" "}
                A year ago it was three-quarters of all chatbot traffic. Now
                it&rsquo;s just over half, with Gemini and Claude eating the
                difference.
              </p>

              <H2>Same data, as a picture</H2>
              <p>
                Search infrastructure still dwarfs every standalone AI
                assistant combined — this is why AI Overviews can&rsquo;t be
                treated as optional:
              </p>
              <BarList
                items={[
                  { label: "Google Search", value: 73_000_000_000, display: "73B/mo" },
                  {
                    label: "Google AI Overviews",
                    tag: "estimated reach*",
                    value: 36_000_000_000,
                    display: "~36B/mo*",
                  },
                  { label: "Bing Search", value: 3_300_000_000, display: "3.3B/mo" },
                ]}
                max={73_000_000_000}
              />
              <p style={{ marginTop: -6 }}>
                And among the standalone assistants people actually download
                or visit directly:
              </p>
              <BarList
                items={[
                  { label: "ChatGPT", value: 5_400_000_000, display: "5.4B/mo" },
                  { label: "Gemini", value: 2_900_000_000, display: "2.9B/mo" },
                  { label: "Claude", value: 947_000_000, display: "947M/mo" },
                  { label: "DeepSeek", value: 373_000_000, display: "373M/mo" },
                  { label: "Grok", value: 212_000_000, display: "212M/mo" },
                  { label: "Copilot", value: 119_000_000, display: "119M/mo" },
                  { label: "Perplexity", value: 116_000_000, display: "116M/mo" },
                ]}
                max={5_400_000_000}
              />
              <p
                style={{
                  fontSize: 13,
                  color: "var(--faint)",
                  marginTop: -8,
                }}
              >
                *AI Overviews has no standalone visit count since it&rsquo;s
                embedded in Search — the 36B figure is an estimated reach
                (Google Search visits × estimated share of searches
                triggering an AI Overview), illustrative of scale, not a
                measured Similarweb metric. Everything else is measured
                monthly web visits, worldwide, per Similarweb-tracked data as
                reported in June–July 2026 coverage of its 2026 report.
              </p>

              <H2>The Google AI Overviews number is contested — say so</H2>
              <p>
                &ldquo;Over 40%&rdquo; is Similarweb&rsquo;s own headline
                figure from its 2026 report, not a third-party estimate of
                Similarweb&rsquo;s data. It is still not the only number out
                there. Adthena measured AI Overviews appearing in roughly 18%
                of US searches in June 2026, and an independent academic
                study put the activation rate at about 13.7%. Similarweb,
                Adthena, and academic researchers are measuring different
                things in different ways, and none of them publish a fully
                transparent methodology.
              </p>
              <p>
                What all three agree on: the share is large, growing, and
                already reshapes how often a business gets seen without a
                click. What they don&rsquo;t agree on is the exact number, so
                I&rsquo;m giving you the range rather than picking whichever
                figure sounds most impressive.
              </p>

              <H2>What this means for where you spend effort</H2>
              <p>
                This isn&rsquo;t an argument to ignore Claude, Copilot, or
                Perplexity — a citation on any of them is still worth having.
                It&rsquo;s an argument against{" "}
                <em>equal</em> effort across all six. If your content,
                structured data, and third-party signals aren&rsquo;t at
                least solid on Google AI Overviews and ChatGPT before you
                worry about Perplexity, you are optimizing for the tail before
                the head.
              </p>
              <p>
                Practically, that means: fix your schema and extractable
                content for how Google&rsquo;s AI systems read your site
                first. Confirm ChatGPT can find and cite you second. Then
                work down the list — Gemini and Claude are worth real
                attention given how fast they&rsquo;re growing, and Copilot
                and Perplexity last, not because they&rsquo;re worthless, but
                because the volume behind them is still comparatively small.
              </p>

              <H2>What I changed on my own site because of this</H2>
              <p>
                I&rsquo;d had the six platforms I audit listed as
                &ldquo;ChatGPT, Perplexity, Google AI Overviews, Claude,
                Gemini, Copilot&rdquo; across dozens of FAQ answers, titles,
                and meta descriptions on this site — an order that put
                Perplexity ahead of Google AI Overviews and Claude ahead of
                Gemini, both backwards from the actual traffic. That&rsquo;s
                the same mistake I&rsquo;m describing above, just made by me,
                on my own site, before I looked at the numbers carefully.
              </p>
              <p>
                I reordered every instance to lead with Google AI Overviews,
                then ChatGPT, then Gemini, Claude, and the rest — same
                platforms, same claims, just honest about which ones carry
                the volume. Small fix, but it&rsquo;s the same principle this
                whole site is built on: say what the numbers actually show,
                including when that means admitting your own content had it
                backwards.
              </p>

              <H2>What this doesn&rsquo;t tell you</H2>
              <ul>
                <li>
                  <strong>Aggregate traffic isn&rsquo;t your traffic.</strong>{" "}
                  ChatGPT being 53.9% of chatbot visits doesn&rsquo;t mean
                  53.9% of your potential customers ask ChatGPT about your
                  category specifically. Check your own citation data per
                  platform before assuming the global ranking applies to you.
                </li>
                <li>
                  <strong>This is a snapshot, not a law.</strong> The
                  ChatGPT-to-Gemini shift happened inside twelve months. A
                  ranking this volatile will likely look different again by
                  next year.
                </li>
                <li>
                  <strong>Geography matters.</strong> The AI Overviews figure
                  is specifically a US measurement; Canadian and other-market
                  behavior may differ.
                </li>
              </ul>

              <Callout>
                <p style={{ margin: 0 }}>
                  Questions about the method behind any of these figures, or
                  want the sources listed individually?{" "}
                  <a
                    href="mailto:hami@hamitahm.com"
                    style={{ color: "var(--accent)" }}
                  >
                    hami@hamitahm.com
                  </a>
                  .
                </p>
              </Callout>
            </div>
          </RevealSection>

          <RevealSection delay={0.14}>
            <div className="cta-box" style={{ marginTop: 60 }}>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  fontWeight: 500,
                  position: "relative",
                }}
              >
                Want to know where you actually stand, platform by platform?
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: 14,
                  position: "relative",
                  maxWidth: "52ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                The audit checks Google AI Overviews, ChatGPT, Gemini,
                Claude, Copilot, and Perplexity individually — not a single
                blended score.
              </p>
              <Link
                href={CHECKER_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Run the free AI visibility check <span className="arr">&rarr;</span>
              </Link>
              <div style={{ marginTop: 16, position: "relative" }}>
                <Link href={AUDIT_URL} style={{ color: "var(--muted)", fontSize: 14 }}>
                  Or book the $1,500 audit &rarr;
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </article>
    </>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

const mono: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 12,
  color: "var(--faint)",
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--serif)",
        fontSize: 27,
        fontWeight: 500,
        letterSpacing: "-.015em",
        marginTop: 52,
        marginBottom: 16,
        color: "var(--ink)",
        lineHeight: 1.25,
      }}
    >
      {children}
    </h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderLeft: "2px solid var(--accent)",
        background: "var(--accent-soft)",
        borderRadius: 4,
        padding: "22px 24px",
        margin: "30px 0",
        fontSize: 15.5,
        lineHeight: 1.65,
      }}
    >
      {children}
    </div>
  );
}

function Table({
  head,
  rows,
}: {
  head: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div style={{ overflowX: "auto", margin: "26px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "10px 12px 10px 0",
                  borderBottom: "1px solid var(--line-strong)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  fontWeight: 400,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td
                  key={j}
                  style={{
                    padding: "12px 12px 12px 0",
                    borderBottom: "1px solid var(--line)",
                    color: j === 0 ? "var(--ink)" : "var(--muted)",
                  }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarList({
  items,
  max,
}: {
  items: readonly {
    label: string;
    tag?: string;
    value: number;
    display: string;
  }[];
  max: number;
}) {
  return (
    <div style={{ margin: "22px 0 30px" }}>
      {items.map((it) => {
        const pct = Math.max(1.5, (it.value / max) * 100);
        return (
          <div key={it.label} style={{ marginBottom: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 14.5, color: "var(--ink)" }}>
                {it.label}
                {it.tag && (
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      color: "var(--faint)",
                      marginLeft: 8,
                    }}
                  >
                    {it.tag}
                  </span>
                )}
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {it.display}
              </span>
            </div>
            <div
              style={{
                height: 6,
                background: "var(--line)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: "var(--accent)",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
