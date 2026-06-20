import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RevealSection } from "@/components/Reveal";
import { buildBlogSchema } from "@/lib/blog-schema";
import { HOMECALC_CLAIMS } from "@/lib/homecalc-proof";

const SLUG = "faq-schema-accordion-bug";
const ARTICLE_TITLE =
  "The Silent SEO Bug Hiding in Your React FAQ Accordion";
const ARTICLE_DESCRIPTION =
  "If your React site uses SSG/SSR with a collapsible FAQ accordion and FAQPage schema, Google may be penalizing you right now. Here's the bug, the proof, and the one-line fix.";
const DATE_PUBLISHED = "2026-06-18";
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const DEFINITION_URL = "/blog/what-is-ai-visibility/";
const AIO_URL = "/blog/how-to-appear-in-google-ai-overviews/";
const TOOLS_URL = "/blog/best-ai-visibility-tools/";

const FAQ_ITEMS = [
  {
    q: "Does this bug affect Next.js sites specifically?",
    a: "It affects any React framework that does SSG or SSR — Next.js, Remix, Gatsby, Astro with React islands. The issue is that the accordion component removes children from the DOM when collapsed, and the server render captures that collapsed state. Next.js is the most common framework where this appears because of its SSG/SSR defaults.",
  },
  {
    q: "How do I know if my FAQ accordion has this bug?",
    a: "Run curl on your live URL and search for one of your FAQ answer texts in the HTML output. If the answer only appears inside a <script type=\"application/ld+json\"> tag and not in the visible HTML body, your accordion is stripping the content. Two commands: curl your page, then grep for a unique phrase from one of your FAQ answers.",
  },
  {
    q: "Will Google penalize me for mismatched schema and visible content?",
    a: "Google's structured data guidelines require that schema content matches what's visible on the page. When FAQPage schema contains answers that aren't in the rendered HTML, Google treats this as a structured data policy violation. The result is rich result removal and ranking demotion — not a manual action, but an algorithmic one that's harder to detect.",
  },
  {
    q: "How long does recovery take after fixing this bug?",
    a: "Based on our data from HomeCalc.ca, recovery begins within 3–5 days of deploying the fix. Full recovery to pre-regression levels took approximately 7–10 days. Our 7-day impressions went from 486 to 2,330 after the fix — a 4.8× increase that exceeded the pre-bug baseline.",
  },
  {
    q: "Does this affect AI visibility too, or just traditional SEO?",
    a: "Both. AI systems like ChatGPT, Perplexity, and Google's AI Overviews rely on crawlable, structured content to generate citations. If your FAQ answers aren't in the DOM, AI crawlers can't extract them either. The schema says you have answers, but the page doesn't deliver them — so AI systems skip your content entirely.",
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

export default function FaqSchemaAccordionBugPost() {
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
            <span>FAQ Schema Accordion Bug</span>
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
              The silent SEO bug hiding in your{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                React FAQ accordion.
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
              Your UX looks fine. Your build passes. But Google is demoting you
              because your FAQ answers aren&rsquo;t in the DOM.
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
              <Image
                src="/images/hami-tahm/hami-tahm-portrait.png"
                alt="Hami Tahm"
                width={38}
                height={38}
                style={{
                  borderRadius: "50%",
                  border: "1px solid var(--line-strong)",
                  objectFit: "cover",
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
                  June 18, 2026 &middot; 9 min read
                </div>
              </div>
            </div>
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
                If your React site uses SSG/SSR with a collapsible accordion for
                FAQs and you have FAQPage JSON-LD schema, Google sees answers in
                your schema that don&rsquo;t exist in your HTML. That&rsquo;s a
                structured data violation. The fix is one line. We caught it on{" "}
                <Link href={CASE_STUDY_URL} style={linkStyle}>
                  HomeCalc.ca
                </Link>{" "}
                — impressions went from 486 to 2,330 in 7 days after the fix.
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
                I found this bug on my own product (HomeCalc.ca) before any
                tool flagged it. The AI Visibility Audit I run for clients
                catches structural mismatches like this one &mdash; the kind no
                dashboard alerts you to &mdash; and ships a prioritized 7-day
                fix plan.{" "}
                <Link
                  href={AUDIT_URL}
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  See the AI Visibility Audit &rarr;
                </Link>
              </p>
            </div>
          </RevealSection>

          {/* ── Section 01: The bug ── */}
          <RevealSection>
            <SectionLabel number="01" text="The bug" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This bug sits at the intersection of three things that are
              individually correct but catastrophic together: a React accordion
              component, server-side rendering, and FAQPage structured data.
            </p>
            <p style={{ marginBottom: 26 }}>
              Here&rsquo;s the chain of events:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>1. You add an FAQ section</strong> with
              a collapsible accordion — Radix UI, Headless UI, Shadcn, or any
              component that toggles visibility. Users click a question, the
              answer expands. Standard UX pattern.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                2. The accordion&rsquo;s default behavior
              </strong>{" "}
              is to remove children from the DOM when collapsed. When{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                state=&quot;closed&quot;
              </code>
              , the answer text isn&rsquo;t hidden — it&rsquo;s gone. The DOM
              node is empty. This is how most React accordion libraries work by
              default, because it&rsquo;s more performant than keeping
              off-screen content mounted.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>3. SSG/SSR captures the closed state.</strong>{" "}
              When Next.js (or Gatsby, Remix, Astro) pre-renders the page, it
              runs the component with its default state — which is closed. The
              generated HTML contains the question text and an empty answer
              container:
            </p>
            <code style={codeStyle}>
              {`<div data-state="closed" hidden="">
  <!-- no answer text here -->
</div>`}
            </code>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                4. But your JSON-LD says the answers exist.
              </strong>{" "}
              Your FAQPage schema — sitting in a{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<script type=\"application/ld+json\">"}
              </code>{" "}
              tag — correctly contains every question and every answer. Because
              the schema is generated from a data array, not from the DOM, it
              doesn&rsquo;t know the accordion ate the content.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>5. Google sees a mismatch.</strong>{" "}
              Google&rsquo;s structured data guidelines are explicit: the content
              in your schema must match the content visible on the page.
              Googlebot renders the page, finds FAQPage schema with 5 answers,
              but the HTML body contains 5 questions and 0 answers. This is a
              structured data policy violation.
            </p>
            <p style={{ marginBottom: 26 }}>
              The result: rich result removal, ranking demotion, and a drop in
              impressions that looks like an algorithm update — but is actually
              your own code.
            </p>
          </RevealSection>

          {/* ── Section 02: Why it's invisible ── */}
          <RevealSection>
            <SectionLabel number="02" text="Why it's invisible" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              This bug is dangerous because every signal says everything is fine:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>The UX is perfect.</strong> Users click
              a question, the answer expands. JavaScript hydrates and the
              accordion works exactly as designed. No user will ever report this
              as a bug.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>The build passes.</strong> No TypeScript
              errors, no lint failures, no broken tests. The component is
              functioning correctly by its own definition — the default state is
              closed, and closed means unmounted.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>
                Google&rsquo;s Rich Results Test may still pass.
              </strong>{" "}
              The test validates schema syntax, not content parity. Your FAQPage
              schema is syntactically valid. The violation is semantic — the
              content it describes isn&rsquo;t in the DOM.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>The traffic drop looks algorithmic.</strong>{" "}
              When impressions fall 50–75% over a week, the first instinct is
              &ldquo;Google algorithm update.&rdquo; You check industry forums.
              Other people are complaining too. You assume it&rsquo;s external.
              Months pass.
            </p>
            <p style={{ marginBottom: 26 }}>
              The only way to catch this is to inspect the raw HTML your server
              generates — not the JavaScript-hydrated page in your browser, but
              the actual HTML that Googlebot receives on first request.
            </p>
          </RevealSection>

          {/* ── Section 03: How to test ── */}
          <RevealSection>
            <SectionLabel number="03" text="How to test your site (2 commands)" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              Open a terminal. Replace the URL with any page on your site that
              has an FAQ accordion and FAQPage schema.
            </p>

            <h3 style={h3Style}>Step 1: Grab the server-rendered HTML</h3>
            <code style={codeStyle}>
              {`curl -s https://your-domain.com/page-with-faq > page.html`}
            </code>

            <h3 style={h3Style}>Step 2: Search for an FAQ answer</h3>
            <p style={{ marginBottom: 14 }}>
              Pick a unique phrase from one of your FAQ answers — something
              specific enough to not appear elsewhere on the page.
            </p>
            <code style={codeStyle}>
              {`# On Mac/Linux:
grep "your unique answer phrase" page.html

# On Windows PowerShell:
Select-String "your unique answer phrase" page.html`}
            </code>

            <h3 style={h3Style}>Reading the result</h3>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>If the answer appears only inside</strong>{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<script type=\"application/ld+json\">"}
              </code>{" "}
              — you have the bug. The schema contains answers that aren&rsquo;t
              in the visible HTML. Google sees a mismatch.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>If the answer appears outside</strong>{" "}
              the script tag too (in a{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<p>"}
              </code>{" "}
              or{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<div>"}
              </code>{" "}
              in the page body) — you&rsquo;re clean. Your accordion is
              rendering content in the DOM regardless of collapsed state.
            </p>
          </RevealSection>

          {/* ── Section 04: The fix ── */}
          <RevealSection>
            <SectionLabel number="04" text="The one-line fix" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              The principle: keep FAQ answer content in the DOM at all times. Use
              CSS to hide it visually when collapsed — not JavaScript to unmount
              it.
            </p>

            <h3 style={h3Style}>Radix UI Accordion</h3>
            <p style={{ marginBottom: 14 }}>
              Add{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                forceMount
              </code>{" "}
              to the Content component and use a CSS class to hide it when
              closed:
            </p>
            <code style={codeStyle}>
              {`<AccordionPrimitive.Content
  forceMount
  className="data-[state=closed]:hidden"
>
  {children}
</AccordionPrimitive.Content>`}
            </code>
            <p style={{ marginBottom: 26 }}>
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                forceMount
              </code>{" "}
              keeps the content in the DOM regardless of accordion state. The
              Tailwind class{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                data-[state=closed]:hidden
              </code>{" "}
              applies{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                display: none
              </code>{" "}
              visually. The user sees the same collapse/expand UX. Google sees
              the full content.
            </p>

            <h3 style={h3Style}>Headless UI Disclosure</h3>
            <code style={codeStyle}>
              {`<Disclosure.Panel static>
  {/* answer content */}
</Disclosure.Panel>`}
            </code>
            <p style={{ marginBottom: 26 }}>
              The{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                static
              </code>{" "}
              prop keeps the panel mounted in the DOM at all times.
            </p>

            <h3 style={h3Style}>Custom collapsible component</h3>
            <p style={{ marginBottom: 26 }}>
              If you built your own accordion: make sure children render into the
              DOM even when the accordion is closed. Use{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                display: none
              </code>{" "}
              or{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                visibility: hidden
              </code>{" "}
              via CSS — never conditionally unmount the content.
            </p>

            <h3 style={h3Style}>Alternative: skip the accordion entirely</h3>
            <p style={{ marginBottom: 26 }}>
              The safest approach is to render FAQ content as plain visible HTML
              — no accordion at all. This is what we do on{" "}
              <Link href="/" style={linkStyle}>
                hamitahm.com
              </Link>
              : every FAQ section renders as static{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<h3>"}
              </code>{" "}
              +{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                {"<p>"}
              </code>{" "}
              pairs. No accordion, no risk. The content is always in the DOM,
              always crawlable, always matching the schema.
            </p>
          </RevealSection>

          {/* ── Section 05: Real data ── */}
          <RevealSection>
            <SectionLabel number="05" text="What happened when we fixed it" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              We discovered this bug on{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                HomeCalc.ca
              </Link>{" "}
              — a Canadian mortgage calculator that scaled from{" "}
              {HOMECALC_CLAIMS.zeroToCitations}. The site uses Next.js with SSG
              and had FAQ sections on multiple calculator pages.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>Before the fix:</strong> 7-day
              impressions had dropped to 486. Average position was degrading.
              FAQ-heavy calculator pages were hit hardest. Rich Results for
              FAQPage had disappeared from Search Console.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>The fix:</strong> One prop change —{" "}
              <code style={{ fontFamily: "var(--mono)", fontSize: "0.9em" }}>
                forceMount
              </code>{" "}
              on the Radix Accordion Content component — plus a CSS class to
              maintain the visual collapse behavior.
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>After the fix:</strong> 7-day
              impressions went from 486 to 2,330 — a 4.8&times; increase.
              Recovery started within 3 days. By day 7, impressions exceeded the
              pre-regression peak. Rich Results returned in Search Console.
            </p>

            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 12,
                padding: "24px 28px",
                margin: "28px 0 36px",
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
                Recovery timeline
              </div>
              <div style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.75, color: "var(--ink)" }}>
                <strong style={labelStyle}>Day 1–3:</strong> Google re-crawls
                pages with fix deployed. New HTML with FAQ answers in DOM gets
                indexed.
                <br />
                <strong style={labelStyle}>Day 4–7:</strong> Impressions begin
                ramping. Rich Results return in Search Console validation.
                <br />
                <strong style={labelStyle}>Day 7–10:</strong> Full recovery. In
                our case, impressions surpassed the pre-bug baseline.
              </div>
            </div>
          </RevealSection>

          {/* ── Section 06: Who's affected ── */}
          <RevealSection>
            <SectionLabel number="06" text="Who's affected" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={{ marginBottom: 26 }}>
              You&rsquo;re at risk if all three of these are true:
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>1.</strong> Your site uses SSG or SSR
              (Next.js, Gatsby, Remix, Astro, Nuxt, SvelteKit — any framework
              that pre-renders HTML on the server).
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>2.</strong> You have FAQ sections using
              a collapsible accordion or disclosure component (Radix UI, Headless
              UI, Shadcn/ui, Chakra UI, MUI Accordion, or any custom
              implementation that unmounts children when collapsed).
            </p>
            <p style={{ marginBottom: 26 }}>
              <strong style={labelStyle}>3.</strong> You have FAQPage JSON-LD
              schema on those same pages.
            </p>
            <p style={{ marginBottom: 26 }}>
              If only two of three are true, you&rsquo;re likely fine. A static
              site with an accordion but no FAQPage schema has no mismatch to
              trigger. A site with FAQPage schema but no accordion renders the
              answers in the DOM. An SPA with an accordion has different
              rendering behavior — Googlebot runs JavaScript on SPAs and may see
              the expanded content (though SPAs have their own{" "}
              <Link href={AIO_URL} style={linkStyle}>
                AI visibility challenges
              </Link>
              ).
            </p>
            <p style={{ marginBottom: 26 }}>
              The lethal combination is SSG/SSR + collapsible accordion +
              FAQPage schema. And it&rsquo;s extremely common in modern React
              marketing sites, SaaS landing pages, and tool pages.
            </p>
          </RevealSection>

          {/* ── Inline CTA ── */}
          <RevealSection>
            <InlineAuditCTA />
          </RevealSection>

          {/* ── Section 07: FAQ ── */}
          <RevealSection>
            <SectionLabel number="07" text="Frequently asked questions" />
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
              For more on how AI systems discover and cite your content, see the{" "}
              <Link href={HUB_URL} style={linkStyle}>
                AI visibility
              </Link>{" "}
              hub. For the full HomeCalc story, read the{" "}
              <Link href={CASE_STUDY_URL} style={linkStyle}>
                case study
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
                href={CASE_STUDY_URL}
                title="HomeCalc AI Visibility Case Study"
                tag="Case Study"
              />
              <KeepReadingLink
                href={AIO_URL}
                title="How to Appear in Google AI Overviews"
                tag="AI Overviews"
              />
              <KeepReadingLink
                href={TOOLS_URL}
                title="Best AI Visibility Tools"
                tag="Tools"
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
                Your FAQ section should make you visible — not invisible.
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
                Cross-platform citation analysis, structured data review,
                technical audit, and a prioritized action plan. $1,500 CAD flat.
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
        Not sure what else your site is hiding from Google?
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
        The AI Visibility Audit checks structured data parity, cross-platform
        citation coverage, competitor gaps, and 40+ other technical signals.
        Bugs like this one are caught in every audit.
      </p>
      <Link href={AUDIT_URL} className="btn btn-primary">
        Book an AI Visibility Audit <span className="arr">&rarr;</span>
      </Link>
    </div>
  );
}

function KeepReadingLink({
  href,
  title,
  tag,
}: {
  href: string;
  title: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
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
        {title}
      </span>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11.5px",
          color: "var(--faint)",
          whiteSpace: "nowrap",
        }}
      >
        {tag}
      </span>
    </Link>
  );
}
