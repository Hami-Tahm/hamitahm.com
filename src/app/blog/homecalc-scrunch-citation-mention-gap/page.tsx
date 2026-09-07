import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";
import { AuthorByline } from "@/components/AuthorByline";
import { buildBlogSchema } from "@/lib/blog-schema";
import { SCRUNCH_HOMECALC } from "@/lib/scrunch-homecalc";

const SLUG = "homecalc-scrunch-citation-mention-gap";

/**
 * Third HomeCalc dataset on this site, deliberately kept separate from the
 * other two. See the header comment in src/lib/scrunch-homecalc.ts for the
 * full provenance rule: never average or merge this with homecalc-proof.ts
 * (Bing Webmaster Tools) or citation-study.ts (the published Zenodo dataset).
 * This post is explicit throughout about which numbers come from Scrunch.
 */
const ARTICLE_TITLE = "HomeCalc Is Most-Cited, Yet Rarely Mentioned by AI";
const ARTICLE_DESCRIPTION =
  "HomeCalc.ca's own Scrunch data: cited more than any competitor, but named less often than Ratehub or WOWA, with zero AI-referred traffic in 90 days.";
const DATE_PUBLISHED = "2026-09-07";
const READ_DATE_HUMAN = "September 7, 2026";

const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";
const HUB_URL = "/ai-visibility/";
const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const METHODOLOGY_URL = "/methodology/";

const D = SCRUNCH_HOMECALC;

const FAQ_ITEMS = [
  {
    q: "Is this the same HomeCalc data as your other case study?",
    a: "No, and that's deliberate. The existing HomeCalc case study and the citation-study dataset come from Bing Webmaster Tools and a separately published prompt panel. This post is a third, independent instrument: Scrunch's own tracking tool, running its own prompt set against ChatGPT, Perplexity, Google AI Overviews and Microsoft Copilot over a much shorter window (early September 2026). All three measure the same site and generally point the same direction, but the numbers are not interchangeable and should never be added together.",
  },
  {
    q: "What's the difference between a citation and a mention in this data?",
    a: "A citation means HomeCalc's own domain appears as a linked source in the AI's answer. A mention means the AI's written text actually names \"HomeCalc\" as a brand. Scrunch tracks these separately, and the gap between them is the finding this post is built around: HomeCalc's pages get used as sources without the brand being named in the same breath, while several competitor pages on the identical topic get both.",
  },
  {
    q: "Does a perfect technical audit score mean nothing was wrong?",
    a: "It means the technical layer Scrunch checks (page structure, accessibility, crawlability) wasn't the problem here. All 24 tracked HomeCalc pages scored 100/Excellent, and 22 of those 24 still had zero citations in the tracked window. A page can be technically flawless and still not be the one an AI engine chooses to pull from or name; that's a content and entity-signal question, not a markup one.",
  },
  {
    q: "Why would a citation not come with a brand mention?",
    a: "Nobody outside the model providers knows the exact mechanism, and this post doesn't claim to. What's checkable is the pattern: on the land-transfer-tax topic, HomeCalc's own calculator page gets cited but never named in the same answer, while WOWA's and Ratehub's equivalent pages get cited and named together every time in this dataset. That's consistent with an entity-clarity gap (the page doing the math without stating clearly enough whose tool it is) rather than a ranking problem, but it's a hypothesis worth testing, not a proven cause.",
  },
  {
    q: "If citations aren't producing clicks, what's the point of tracking them?",
    a: "Citations are a leading indicator, not the outcome itself. In this dataset, HomeCalc had zero AI-referred sessions in Google Analytics over 90 days despite real citation and mention activity. That doesn't make the citation data worthless: it tells you the site is present in the answers but not yet winning the click, which is a different, and arguably harder, problem than not being present at all.",
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
  alternates: { canonical: `https://hamitahm.com/blog/${SLUG}/` },
};

const pStyle: React.CSSProperties = {
  marginBottom: 24,
  fontSize: "clamp(17px, 2vw, 19px)",
  color: "var(--muted)",
  lineHeight: 1.7,
};
const bStyle: React.CSSProperties = { color: "var(--ink)", fontWeight: 500 };
const linkStyle: React.CSSProperties = {
  color: "var(--accent)",
  fontWeight: 500,
};

export default function HomeCalcScrunchPost() {
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
            <span>HomeCalc on Scrunch</span>
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
              Original research &middot; HomeCalc.ca
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.6vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                maxWidth: "18ch",
              }}
            >
              Most-cited domain in its category.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Still loses the mention.
              </em>
            </h1>
          </RevealSection>

          <RevealSection delay={0.12}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 20,
                color: "var(--muted)",
                marginTop: 18,
                lineHeight: 1.5,
                maxWidth: "56ch",
              }}
            >
              What HomeCalc.ca's own Scrunch dashboard shows: top citation
              share, a real gap in brand mentions against two named
              competitors, and zero AI-referred site visits so far.
            </p>
          </RevealSection>

          <RevealSection delay={0.18}>
            <AuthorByline date="September 7, 2026" readTime="10 min read" />
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
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Per Scrunch&rsquo;s own tracking (read {READ_DATE_HUMAN}),
                homecalc.ca is the single most-cited domain among its
                tracked competitors: {D.explorerCitations.topDomainsCited[0].citations}{" "}
                citations against {D.explorerCitations.topDomainsCited[1].citations}{" "}
                for the next domain. But on{" "}
                <strong>mentions</strong> (the AI actually naming
                &ldquo;HomeCalc&rdquo; in the answer), it trails Ratehub and
                WOWA. And despite real citation and mention activity, HomeCalc
                has recorded zero AI-referred sessions on Google Analytics
                over the last 90 days. Three honest, separately-sourced
                findings, not one tidy story.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.05}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: 10,
                padding: "20px 22px",
                margin: "0 0 36px",
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
                <strong>Disclosure.</strong> HomeCalc.ca is a site I own; it is
                the source of the case study linked throughout this site. I
                have no commercial relationship with Scrunch: this is not a
                sponsored review, and I paid for the account like any other
                customer. Every number below was read directly from the live
                dashboard on {READ_DATE_HUMAN} and is labeled with which view
                it came from, because two views on the same dashboard showed
                slightly different response totals for the same period (see
                the note in the methodology section).
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              HomeCalc.ca already has two other measurement instruments on
              this site: a live Bing Webmaster Tools citation count, and a
              published, DOI-registered dataset from a manually-run prompt
              panel. This is a third and separate one. Scrunch runs its own
              prompt set against {D.engines.join(", ")} on a schedule and
              tracks HomeCalc against five named competitors. The numbers here
              don&rsquo;t replace the other two; they add a different lens,
              and they are kept clearly labeled so nothing gets blended.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="01" text="What was measured" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              Scrunch tracked{" "}
              <strong style={bStyle}>{D.promptVariants} prompt variants</strong>{" "}
              (from {D.seedPrompts} seed prompts, against a {D.promptVariantsCap}-variant
              plan cap) across four engines: {D.engines.join(", ")}. Five
              named competitors are configured for comparison:{" "}
              {D.competitorsConfigured.join(", ")}.
            </p>
            <p style={pStyle}>
              Two different views inside the same dashboard, read the same
              day, showed different response totals for what looked like the
              same window: the Home dashboard reported{" "}
              <strong style={bStyle}>{D.home.totalResponses} total responses</strong>{" "}
              ({D.home.window}), while the Explorer &gt; Citations view
              reported <strong style={bStyle}>{D.explorerCitations.totalResponses} total responses</strong>{" "}
              for {D.explorerCitations.window}. The headline rates (mention
              rate, citation rate, sentiment) match across both; only the
              underlying counts differ by the exact window each view
              defaulted to. Both are cited below, labeled by which view they
              came from, rather than picked to make one number look bigger.
            </p>
            <p style={pStyle}>
              Headline numbers, per the Home dashboard: a{" "}
              <strong style={bStyle}>mentions rate of {D.home.mentionsRate}</strong>,
              a <strong style={bStyle}>citations rate of {D.home.citationsRate}</strong>,
              and a <strong style={bStyle}>sentiment average of {D.home.sentimentAverage}</strong>{" "}
              (100% of scored responses came back positive). On position, when
              HomeCalc appeared, {D.home.position.top.pct} of the time it held
              a top position and {D.home.position.middle.pct} a middle one.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="02" text="Top of the citation table, not the mention table" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              On raw citation count, per the Explorer &gt; Citations view (
              {D.explorerCitations.window}), homecalc.ca leads every tracked
              domain:
            </p>
            <SimpleTable
              headers={["Domain", "Citations"]}
              rows={D.explorerCitations.topDomainsCited.map((d) => [
                d.domain,
                String(d.citations),
              ])}
            />
            <p style={pStyle}>
              But per the Home dashboard&rsquo;s Top Brands table (
              {D.home.window}), on <strong style={bStyle}>mentions rate</strong>,
              HomeCalc trails two of the same competitors:
            </p>
            <SimpleTable
              headers={["Brand", "Mentions rate"]}
              rows={D.home.topBrandsByMentionRate.map((b) => [b.brand, b.rate])}
            />
            <p style={pStyle}>
              Same tool, same rough window, two different leaderboards. The
              domain-level table above counts every response where a HomeCalc
              URL was used as a source. The mentions table counts only
              responses where the AI&rsquo;s own text names the brand. HomeCalc
              wins the first and loses the second to Ratehub and WOWA.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="03" text="The land-transfer-tax page: cited, never named" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              The clearest single example sits on one topic. Scrunch&rsquo;s
              Citation Mention Rate column shows, for the same broad query set,
              how often a domain&rsquo;s citation comes with that brand
              actually named in the answer:
            </p>
            <SimpleTable
              headers={["Domain", "Citations rate", "Named when cited?"]}
              rows={D.explorerCitations.citationVsMentionRate.map((r) => [
                r.domain,
                r.citationsRate,
                r.domain === "homecalc.ca"
                  ? `${r.homecalcMentionRate} (HomeCalc)`
                  : `${r.competitorMentionRate} (${r.domain.split(".")[0]})`,
              ])}
            />
            <p style={pStyle}>
              Narrowed to land transfer tax specifically, the same pattern
              holds at the page level:
            </p>
            <SimpleTable
              headers={["Page", "Citations", "Named when cited?"]}
              rows={D.explorerCitations.landTransferTaxComparison.map((r) => [
                r.url,
                String(r.citationsCount),
                "homecalcMentionRate" in r
                  ? `${r.homecalcMentionRate} (HomeCalc)`
                  : `${r.competitorMentionRate} (competitor)`,
              ])}
            />
            <p style={pStyle}>
              WOWA&rsquo;s and Ratehub&rsquo;s land-transfer-tax calculator
              pages get cited and named together, every time, in this
              dataset. HomeCalc&rsquo;s equivalent page gets cited and never
              named in the same breath. Nobody outside the model providers
              can say exactly why with certainty; the pattern is consistent
              with an entity-clarity gap on that specific page (the
              calculator doing the math without stating clearly enough whose
              tool it is) rather than a ranking or technical problem, given
              what shows up in the audit next.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="04" text="A clean technical audit, and 22 of 24 pages with zero citations" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              Scrunch&rsquo;s Site Maps tool crawled{" "}
              {D.siteAudit.pagesTracked} HomeCalc pages (of a{" "}
              {D.siteAudit.planCrawlLimit}-page plan limit), last crawl{" "}
              {D.siteAudit.lastCrawl}. Every single one scored{" "}
              <strong style={bStyle}>100, &ldquo;Excellent&rdquo;</strong> on
              Scrunch&rsquo;s own page-quality audit. That rules out the
              technical layer as the explanation for what comes next: only{" "}
              <strong style={bStyle}>
                {D.siteAudit.pagesWithAnyCitations} of the {D.siteAudit.pagesTracked}
              </strong>{" "}
              tracked pages had any citations at all in this window, the
              homepage ({D.siteAudit.pagesCitedDetail[0].citations}) and the
              house-flip tax calculator ({D.siteAudit.pagesCitedDetail[1].citations}).
              The other {D.siteAudit.pagesTracked - D.siteAudit.pagesWithAnyCitations}{" "}
              pages, including well-optimized guides on rent-vs-buy, capital
              gains tax and mortgage qualification, scored perfectly on
              structure and still had zero recorded citations.
            </p>
            <p style={pStyle}>
              The lesson isn&rsquo;t that the audit tool is wrong; it&rsquo;s
              that a perfect technical score is necessary and nowhere near
              sufficient. AI engines are pulling almost exclusively from
              HomeCalc&rsquo;s calculator tools, not its blog content, even
              though the blog content passes every structural check Scrunch
              runs.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="05" text="Citations without clicks" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              Scrunch&rsquo;s AI Referrals tab reads directly from a connected
              Google Analytics property (integration status:{" "}
              <strong style={bStyle}>{D.aiReferrals.integrationStatus}</strong>,
              confirmed, not a missing-integration false zero). Over the{" "}
              {D.aiReferrals.window}: <strong style={bStyle}>
                {D.aiReferrals.sessions} sessions, {D.aiReferrals.views} views
              </strong>{" "}
              originating from an AI platform.
            </p>
            <p style={pStyle}>
              That sits next to real citation and mention activity above.
              Being used as a source, and even being named as a brand, is not
              the same as someone clicking through and landing on the site.
              This is the gap between AI visibility and AI-referred traffic,
              and right now for HomeCalc it&rsquo;s a real gap, not a
              rounding error.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="06" text="A caution about the tool itself" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <p style={pStyle}>
              Scrunch&rsquo;s Configure section auto-suggests sub-brands it
              detects in response text, with a confidence score.{" "}
              {D.suggestedSubBrandsPending} suggestions were pending review at
              read time. Cross-checking two of them against the Citations
              domain table turned up a real problem:
            </p>
            <SimpleTable
              headers={["Suggested as", "Confidence", "Actually is"]}
              rows={D.likelyMisattributedSuggestions.map((s) => [
                s.suggested,
                s.confidence,
                `${s.actualDomain} (${s.actualCitations} independent citations)`,
              ])}
            />
            <p style={pStyle}>
              &ldquo;Maple Syrup Money&rdquo; and &ldquo;CanCalc&rdquo; are
              real, independent domains competing for the same prompts, not
              HomeCalc sub-brands. Accepting either suggestion would have
              folded a competitor&rsquo;s citations into HomeCalc&rsquo;s own
              numbers. Neither was accepted. The broader point: an
              AI-detection feature inside an AI-tracking tool is still worth
              checking by hand before you trust it, the same discipline this
              site applies to every number it publishes about itself.
            </p>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="07" text="What this isn't claiming" />
          </RevealSection>

          <RevealSection delay={0.06}>
            <ul
              style={{
                paddingLeft: 22,
                marginBottom: 26,
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              <li>Not a claim that HomeCalc outranks Ratehub or WOWA overall: it leads on citation share and trails on mention share, in the same dataset.</li>
              <li>Not proof of why the land-transfer-tax page gets cited without being named: that's a pattern worth testing against, not an established cause.</li>
              <li>Not evidence Scrunch is inaccurate: the misattributed suggestions were caught precisely because Scrunch surfaced them for review rather than auto-applying them.</li>
              <li>Not merged with the Bing Webmaster Tools citation count or the published Zenodo dataset elsewhere on this site: three different instruments, three different numbers, on purpose.</li>
            </ul>
          </RevealSection>

          <RevealSection>
            <SectionLabel number="08" text="Frequently asked questions" />
          </RevealSection>

          <RevealSection delay={0.06}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <div className="faq-item" key={q}>
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
          </RevealSection>

          <RevealSection delay={0.08}>
            <div
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
                padding: "24px 26px",
                margin: "40px 0 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 15.5,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                This kind of citation-vs-mention gap, and the technical
                audit-vs-content gap next to it, is exactly what an{" "}
                <Link href={AUDIT_URL} style={linkStyle}>
                  AI visibility audit
                </Link>{" "}
                is built to find on your own site, across six platforms, not
                just the four Scrunch tracks here. See the full{" "}
                <Link href={CASE_STUDY_URL} style={linkStyle}>
                  HomeCalc case study
                </Link>{" "}
                or the site&rsquo;s{" "}
                <Link href={METHODOLOGY_URL} style={linkStyle}>
                  measurement methodology
                </Link>{" "}
                for how these numbers are kept honest.
              </p>
            </div>
          </RevealSection>
        </div>
      </article>
    </>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <h2
      style={{
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: ".14em",
        color: "var(--faint)",
        textTransform: "uppercase",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      {number}: {text}
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </h2>
  );
}

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div
      style={{
        overflowX: "auto",
        margin: "0 0 26px",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--sans)",
          fontSize: 14.5,
          minWidth: 480,
        }}
      >
        <thead>
          <tr style={{ background: "var(--panel)" }}>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  borderBottom: "1px solid var(--line-strong)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: i > 0 ? "1px solid var(--line)" : undefined }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "12px 16px",
                    color: j === 0 ? "var(--ink)" : "var(--muted)",
                    fontWeight: j === 0 ? 500 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
