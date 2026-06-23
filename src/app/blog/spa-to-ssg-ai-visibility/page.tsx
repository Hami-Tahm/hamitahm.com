import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const SLUG = "spa-to-ssg-ai-visibility";
const ARTICLE_TITLE =
  "Your SPA Is Invisible to AI: 10× Citations in 48 Hours";
const ARTICLE_DESCRIPTION =
  "Single Page Apps serve an empty <div> to AI crawlers. We migrated HomeCalc.ca from SPA to SSG and watched Bing Copilot citations jump from 20/day to 200/day in two days. Here's exactly what we changed and why it matters.";
const DATE_PUBLISHED = "2026-06-23";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const AIO_URL = "/blog/how-to-appear-in-google-ai-overviews/";
const CHATGPT_URL = "/blog/how-to-get-mentioned-by-chatgpt/";
const PERPLEXITY_URL = "/blog/how-to-get-cited-by-perplexity/";
const FAQ_BUG_URL = "/blog/faq-schema-accordion-bug/";

const FAQ_ITEMS = [
  {
    q: "Can AI crawlers render JavaScript like Google does?",
    a: "No. Google has a full rendering pipeline (Googlebot + WRS) that executes JavaScript, though with delays. AI crawlers — Bing/Copilot, ChatGPT's browse mode, Perplexity — have limited or no JS execution. They rely on the raw HTML your server returns. If that HTML is an empty <div id=\"root\"></div>, they see nothing.",
  },
  {
    q: "What's the difference between SSG and SSR for AI visibility?",
    a: "Both produce full HTML on first request, so both solve the empty-body problem. SSG (Static Site Generation) pre-builds HTML at build time — fastest response, best for pages that don't change per-request. SSR (Server-Side Rendering) generates HTML on each request — better for personalized or real-time content. For AI visibility, either works. The critical thing is that the HTML contains your content before any JavaScript runs.",
  },
  {
    q: "Does this affect Google rankings too, or just AI citations?",
    a: "Google can render JavaScript, so SPAs aren't invisible to Google the way they are to AI crawlers. However, Google's rendering queue introduces delays — your content may take days or weeks to be fully indexed. SSG/SSR pages are indexed faster and more reliably. For AI Overviews specifically, Google pulls from its rendered index, so the delay matters less — but the speed advantage of SSG/SSR still helps with freshness signals.",
  },
  {
    q: "How long does the SPA to SSG migration take?",
    a: "For a React + Vite project, we used vite-react-ssg and the migration took under a day. For Next.js, SSG is the default — you may already have it. For Create React App, you'll need to migrate to Next.js, Remix, or add a prerendering step. The actual code changes are small; the complexity is in routing and data fetching patterns.",
  },
  {
    q: "Should I use SSG for every new project from now on?",
    a: "Yes. Our rule after this discovery: Day 0 of any new venture, ship SSG or SSR. Never plain SPA. The cost is a few hours of setup. The downside of not doing it is 3–6 months of invisible content before you realize AI crawlers can't see your site. That's months of lost citations you can never recover.",
  },
] as const;

const blogGraph = buildBlogSchema({
  slug: SLUG,
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  datePublished: DATE_PUBLISHED,
})["@graph"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...blogGraph,
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

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  alternates: {
    canonical: `https://hamitahm.com/blog/${SLUG}/`,
  },
};

const linkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
  textDecorationThickness: 1,
} as const;

const h3Style = {
  fontFamily: "var(--serif)",
  fontWeight: 600,
  fontSize: 23,
  letterSpacing: "-.01em",
  margin: "34px 0 12px",
  color: "var(--ink)",
} as const;

const labelStyle = {
  fontWeight: 600,
  color: "var(--ink)",
} as const;

const codeStyle = {
  fontFamily: "var(--mono)",
  fontSize: "14.5px",
  background: "var(--panel)",
  border: "1px solid var(--line)",
  borderRadius: 8,
  padding: "16px 20px",
  display: "block",
  overflowX: "auto" as const,
  lineHeight: 1.65,
  margin: "20px 0 28px",
  whiteSpace: "pre" as const,
  color: "var(--ink)",
} as const;

export default function SpaToSsgAiVisibilityPost() {
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
            <Link href={HUB_URL} style={{ color: "var(--muted)" }}>
              AI Visibility
            </Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: "var(--muted)" }}>
              Blog
            </Link>
            <span>/</span>
            <span>SPA to SSG Migration</span>
          </nav>
        </RevealSection>
      </div>

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
              Technical SEO
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
              Your SPA is invisible to AI —{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                here&rsquo;s the proof.
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
              One commit. 68 pages went from empty HTML to full content.
              Copilot citations jumped 10&times; in 48 hours.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="June 23, 2026" readTime="10 min read" />
          </RevealSection>
        </div>
      </header>

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
          {/* ── In short ── */}
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
                Single Page Apps serve{" "}
                <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                  {"<div id=\"root\"></div>"}
                </code>{" "}
                to AI crawlers. No content, no citations. We migrated{" "}
                <Link href={CASE_STUDY_URL} style={linkStyle}>
                  HomeCalc.ca
                </Link>{" "}
                from SPA to SSG in one commit and watched Bing Copilot citations
                jump from ~20/day to ~200/day within 48 hours.
              </p>
            </div>
          </RevealSection>

          {/* ── From the author bridge ── */}
          <RevealSection delay={0.04}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "20px 22px",
                margin: "0 0 40px",
                fontFamily: "var(--sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--ink)",
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
                From the author
              </div>
              <p style={{ margin: 0 }}>
                I found this on my own product (HomeCalc.ca) before any
                tool flagged it. The AI Visibility Audit I run for clients
                catches structural issues like this &mdash; the kind a
                dashboard will never tell you about &mdash; and ships a
                prioritized 7-day fix plan.{" "}
                <Link
                  href={AUDIT_URL}
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  See the AI Visibility Audit &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>

          {/* ── Section 01: What AI crawlers see ── */}
          <RevealSection>
            <SectionLabel number="01" text="What AI crawlers actually see" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              When a user visits your React SPA, their browser downloads a
              JavaScript bundle, executes it, and renders the page. They see
              your content, your calculators, your FAQ sections — everything
              works. But that&rsquo;s not what AI crawlers see.
            </p>
            <p style={{ marginBottom: 26 }}>
              AI crawlers — Bing&rsquo;s indexer (which feeds Copilot),
              Perplexity&rsquo;s crawler, ChatGPT&rsquo;s browse mode — request
              your URL and read the raw HTML response. They don&rsquo;t execute
              JavaScript. For a standard React SPA built with Create React App
              or Vite, the HTML they receive looks like this:
            </p>
            <code style={codeStyle}>
{`<!DOCTYPE html>
<html>
<head>
  <title>HomeCalc - Mortgage Calculator</title>
</head>
<body>
  <div id="root"></div>
  <script src="/assets/index-4a8f2b.js"></script>
</body>
</html>`}
            </code>
            <p style={{ marginBottom: 26 }}>
              That&rsquo;s it. An empty{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                div
              </code>
              . No headings, no paragraphs, no calculator results, no FAQ
              answers, no structured data in the body. Your 68 pages of
              content? Invisible. Your schema markup that JS injects? Never
              rendered.
            </p>
            <p style={{ marginBottom: 26 }}>
              Google is the exception — Googlebot has a full rendering pipeline
              (Web Rendering Service) that executes JavaScript. But even Google
              queues JS rendering, which means your content is indexed with a
              delay. Every other major AI crawler? They get the empty div and
              move on.
            </p>
          </RevealSection>

          {/* ── Section 02: HomeCalc before ── */}
          <RevealSection>
            <SectionLabel number="02" text="HomeCalc before: 68 invisible pages" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                HomeCalc.ca
              </Link>{" "}
              is a Canadian mortgage calculator site with 68 routes — land
              transfer tax calculators, mortgage payment tools, CMHC insurance
              calculators, and more. Each page has substantial content:
              calculations, explanations, FAQ sections, and structured data.
            </p>
            <p style={{ marginBottom: 26 }}>
              Before May 22, 2026, HomeCalc was a plain SPA built with React +
              Vite. The site worked perfectly in browsers. Users could calculate
              mortgage payments, compare scenarios, see results — everything
              rendered client-side after the JavaScript bundle loaded.
            </p>
            <p style={{ marginBottom: 26 }}>
              But Bing&rsquo;s crawler saw 68 pages of{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<div id=\"root\"></div>"}
              </code>
              . Copilot had almost nothing to cite. Perplexity had nothing to
              index. The site existed for humans and was invisible to machines.
            </p>
            <p style={{ marginBottom: 26 }}>
              The numbers told the story:
            </p>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "8px 0 32px",
              }}
            >
              <div style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.75, color: "var(--ink)" }}>
                <strong style={labelStyle}>Bing Copilot citations:</strong> 5–20 per day
                <br />
                <strong style={labelStyle}>Bing impressions:</strong> 0–10 per day baseline
                <br />
                <strong style={labelStyle}>Pages cited by AI:</strong> 4 out of 68
                <br />
                <strong style={labelStyle}>Content visible to crawlers:</strong> None (empty body)
              </div>
            </div>
          </RevealSection>

          {/* ── Section 03: The migration ── */}
          <RevealSection>
            <SectionLabel number="03" text="The one-commit migration" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              On May 22, 2026, we pushed commit{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                47c5c55
              </code>{" "}
              — a migration from plain Vite SPA to{" "}
              <strong style={labelStyle}>SSG (Static Site Generation)</strong>{" "}
              using{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                vite-react-ssg
              </code>
              .
            </p>
            <p style={{ marginBottom: 26 }}>
              What changed: instead of shipping an empty HTML shell with a JS
              bundle, the build process now pre-renders every route at build
              time. Each of the 68 pages gets its own complete HTML file — with
              headings, paragraphs, calculator descriptions, FAQ answers,
              structured data, everything — before a single line of JavaScript
              runs.
            </p>
            <p style={{ marginBottom: 26 }}>
              The user experience didn&rsquo;t change at all. React still
              hydrates and makes the page interactive. Calculators still work.
              But now the HTML that crawlers receive contains the full content.
            </p>

            <h3 style={h3Style}>What the HTML looks like after SSG</h3>
            <code style={codeStyle}>
{`<!DOCTYPE html>
<html>
<head>
  <title>Ontario Land Transfer Tax Calculator</title>
  <script type="application/ld+json">
    { "@type": "FAQPage", ... }
  </script>
</head>
<body>
  <div id="root">
    <h1>Ontario Land Transfer Tax Calculator</h1>
    <p>Calculate your land transfer tax for any
       Ontario property purchase...</p>
    <div class="calculator">...</div>
    <section class="faq">
      <h2>How is Ontario land transfer tax calculated?</h2>
      <p>Ontario land transfer tax uses a graduated
         rate structure based on the purchase price...</p>
    </section>
  </div>
  <script src="/assets/index-4a8f2b.js"></script>
</body>
</html>`}
            </code>
            <p style={{ marginBottom: 26 }}>
              Same page, same URL, same user experience. But now Bing, Copilot,
              Perplexity, and every other crawler sees the actual content on
              first request.
            </p>
          </RevealSection>

          {/* ── Section 04: The results ── */}
          <RevealSection>
            <SectionLabel number="04" text="48 hours later" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The commit shipped May 22 at 14:34 EDT. Bing re-crawled the site.
              The propagation lag from Bing&rsquo;s index to Copilot&rsquo;s
              citation engine was approximately 48–60 hours. By May 24, the
              numbers shifted:
            </p>

            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "8px 0 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 14,
                }}
              >
                Before vs. after SSG migration
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: "10px 24px",
                  fontFamily: "var(--sans)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--ink)",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--faint)", fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em" }}>Metric</div>
                <div style={{ fontWeight: 600, color: "var(--faint)", fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em" }}>Before</div>
                <div style={{ fontWeight: 600, color: "var(--faint)", fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em" }}>After</div>

                <div>Copilot citations/day</div>
                <div>5–20</div>
                <div style={{ fontWeight: 600, color: "var(--accent)" }}>50–200</div>

                <div>Bing impressions/day</div>
                <div>0–10</div>
                <div style={{ fontWeight: 600, color: "var(--accent)" }}>100–200+</div>

                <div>Pages cited by AI</div>
                <div>4</div>
                <div style={{ fontWeight: 600, color: "var(--accent)" }}>16+ (4&times;)</div>
              </div>
            </div>

            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>10&times; citation growth in 48 hours</strong>{" "}
              — not from new content, not from backlinks, not from any marketing
              effort. The same 68 pages, the same content, the same domain
              authority. The only difference: the HTML now contained the content
              instead of an empty div.
            </p>
            <p style={{ marginBottom: 26 }}>
              The number of distinct pages being cited by AI went from 4 to 16+
              — a 4&times; expansion of the &ldquo;citation surface area.&rdquo;
              Pages that had existed for months were suddenly discoverable
              because they were finally readable.
            </p>
          </RevealSection>

          {/* ── Section 05: Why this matters now ── */}
          <RevealSection>
            <SectionLabel number="05" text="Why this matters more than you think" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This isn&rsquo;t a theoretical risk. According to the 2026 State
              of JS survey, React + Vite is the most popular frontend stack for
              new projects. Vite&rsquo;s default React template produces a pure
              SPA. Create React App (still widely used in production) produces a
              pure SPA. If you followed the default setup path for either tool,
              your site is an SPA right now.
            </p>
            <p style={{ marginBottom: 26 }}>
              Next.js, Remix, and Gatsby default to SSR or SSG — but only if you
              use them. A significant portion of React sites in production are
              still plain SPAs, especially tools, calculators, dashboards, and
              internal products that were later made public.
            </p>
            <p style={{ marginBottom: 26 }}>
              The insidious part: everything works in your browser. Your users
              see the content. Your QA passes. Google eventually renders and
              indexes it (with delays). The only thing broken is AI visibility —
              and if you&rsquo;re not specifically measuring AI citations, you
              have no signal that 80% of AI crawlers can&rsquo;t see your site.
            </p>
            <p style={{ marginBottom: 26 }}>
              We wrote about a{" "}
              <Link href={FAQ_BUG_URL} style={linkStyle}>
                related bug where FAQ accordion components hide content from
                the DOM
              </Link>
              . That bug affects SSG/SSR sites — the accordion strips content
              after the server renders it. The SPA problem is worse: there&rsquo;s
              no content to strip because the server never rendered it in the
              first place.
            </p>
          </RevealSection>

          {/* ── Section 06: The principle ── */}
          <RevealSection>
            <SectionLabel number="06" text="The principle" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Both the SPA problem and the{" "}
              <Link href={FAQ_BUG_URL} style={linkStyle}>
                accordion bug
              </Link>{" "}
              are instances of the same principle:
            </p>
            <div
              style={{
                background: "var(--accent-soft)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "8px 0 32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Everything you want Google and AI to see must be in the HTML
                your server returns on first request — before any JavaScript
                executes.
              </p>
            </div>
            <p style={{ marginBottom: 26 }}>
              If the content depends on client-side rendering, it&rsquo;s
              invisible to most AI systems. If the content depends on user
              interaction (clicking an accordion), it&rsquo;s invisible at
              crawl time. If the content depends on API calls that happen
              after page load, it&rsquo;s invisible.
            </p>
            <p style={{ marginBottom: 26 }}>
              The fix is always the same: inline the content in the server-rendered HTML.
            </p>

            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "8px 0 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 14,
                }}
              >
                Same principle, different symptoms
              </div>
              <div style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.75, color: "var(--ink)" }}>
                <strong style={labelStyle}>SPA → SSG fix:</strong> Page body was
                empty. Inline the body in HTML.
                <br />
                <strong style={labelStyle}>Accordion forceMount fix:</strong> FAQ
                answers were empty. Inline the answers in HTML.
                <br />
                <strong style={labelStyle}>API-dependent content:</strong> Data
                loads after JS. Fetch at build time and inline in HTML.
              </div>
            </div>
          </RevealSection>

          {/* ── Section 07: How to migrate ── */}
          <RevealSection>
            <SectionLabel number="07" text="How to check and fix your site" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <h3 style={h3Style}>Step 1: Check what crawlers see</h3>
            <code style={codeStyle}>
{`curl -s https://your-domain.com/ > page.html`}
            </code>
            <p style={{ marginBottom: 26 }}>
              Open{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                page.html
              </code>{" "}
              in a text editor. If the{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<body>"}
              </code>{" "}
              contains only a root div and script tags — no headings, no
              paragraphs, no content — you have an SPA problem.
            </p>

            <h3 style={h3Style}>Step 2: Pick your migration path</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>React + Vite (our case):</strong> Use{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                vite-react-ssg
              </code>{" "}
              or{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                vite-plugin-ssr
              </code>
              . Minimal code changes — mostly configuration. Our migration was
              a single commit.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Create React App:</strong> Migrate to
              Next.js (SSG/SSR by default) or add{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                react-snap
              </code>{" "}
              for prerendering. Next.js migration is more work upfront but gives
              you the full SSG/SSR toolkit.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Next.js / Remix / Astro:</strong>{" "}
              You probably already have SSG or SSR. Verify by running the curl
              test above. If your pages render full HTML, you&rsquo;re fine.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Vue / Svelte / Angular:</strong> Same
              principle applies. Nuxt (Vue), SvelteKit (Svelte), and Angular
              Universal all provide SSG/SSR. The framework doesn&rsquo;t matter
              — what matters is that the HTML contains content before JS runs.
            </p>

            <h3 style={h3Style}>Step 3: Verify after deploy</h3>
            <p style={{ marginBottom: 26 }}>
              After deploying your SSG/SSR migration, run the curl test again.
              The HTML should now contain your actual page content. Submit the
              updated pages in Google Search Console and Bing Webmaster Tools
              for re-crawling. Expect AI citation improvements within 48–72
              hours as crawlers re-index the new HTML.
            </p>
          </RevealSection>

          {/* ── Inline CTA ── */}
          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          {/* ── Section 08: Day 0 rule ── */}
          <RevealSection>
            <SectionLabel number="08" text="The Day 0 rule" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              After this experience, we established a rule for every new
              venture:
            </p>
            <div
              style={{
                background: "var(--accent-soft)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "8px 0 32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Day 0 of any new project: ship SSG or SSR. Never plain SPA.
              </p>
            </div>
            <p style={{ marginBottom: 26 }}>
              The cost is a few hours of configuration at project start. The
              downside of skipping it is 3–6 months of invisible content before
              someone notices that AI crawlers can&rsquo;t read the site. By
              then, you&rsquo;ve lost months of potential citations —
              citations your competitors were accumulating while your pages
              served empty HTML.
            </p>
            <p style={{ marginBottom: 26 }}>
              If you&rsquo;re building a dental clinic site, a real estate tool,
              a SaaS landing page, a calculator, a directory — anything that
              should be found by AI — the first commit should set up SSG or SSR.
              Everything else can iterate. This can&rsquo;t.
            </p>
          </RevealSection>

          {/* ── Section 09: FAQ ── */}
          <RevealSection>
            <SectionLabel number="09" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <div style={{ marginBottom: 36 }}>
              {FAQ_ITEMS.map(({ q, a }) => (
                <div className="faq-item" key={q}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 21,
                      fontWeight: 600,
                      letterSpacing: "-.01em",
                      color: "var(--ink)",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 16,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* ── Closing ── */}
          <RevealSection>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: 12,
              }}
            >
              For the full HomeCalc story — from {HOMECALC_CLAIMS.zeroToCitations} — read the{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                case study
              </Link>
              . For the related accordion bug that hides FAQ content from the
              DOM, see{" "}
              <Link href={FAQ_BUG_URL} style={linkStyle}>
                The Silent SEO Bug Hiding in Your React FAQ Accordion
              </Link>
              .
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <em>
                Hami Tahm is an AI visibility consultant based in Toronto.
              </em>
            </p>
          </RevealSection>
        </div>

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

              <KeepReadingLink
                href={FAQ_BUG_URL}
                title="The Silent SEO Bug in React FAQ Accordions"
                tag="Technical SEO"
              />
              <KeepReadingLink
                href={CASE_STUDY_URL}
                title="HomeCalc AI Visibility Case Study"
                tag="Case Study"
              />
              <KeepReadingLink
                href={AIO_URL}
                title="How to Appear in Google AI Overviews"
                tag="AI Overviews"
              />
            </div>
          </RevealSection>
        </div>
      </article>

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
                Not sure what AI crawlers see on your site?
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
                The AI Visibility Audit checks rendering, structured data,
                citation coverage across ChatGPT, Perplexity, Copilot, and
                Google AI Overviews. $1,500 CAD flat.
              </p>
              <Link
                href={AUDIT_URL}
                className="btn btn-primary"
                style={{ marginTop: 30, position: "relative" }}
              >
                Book Your AI Visibility Audit &mdash; $1,500 CAD{" "}
                <span className="arr">&rarr;</span>
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

function InlineAuditCTA() {
  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 14,
        padding: "30px 32px",
        margin: "42px 0",
        boxShadow:
          "0 1px 2px rgba(24,23,21,.04),0 12px 40px -26px rgba(24,23,21,.16)",
 