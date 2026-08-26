import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hamitahm.com";

  type Entry = {
    path: string;
    priority: number;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  // Grouped by cluster + priority. Highest-priority commercial pages first.
  const entries: Entry[] = [
    // ── Root ─────────────────────────────────────────────────────────────
    { path: "/", priority: 1.0, changeFrequency: "weekly" },

    // ── AI Visibility cluster (hub + spokes) ─────────────────────────────
    { path: "/ai-visibility/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ai-visibility/ai-visibility-audit/", priority: 0.95, changeFrequency: "monthly" },
    // Pricing is a BOFU entry point in its own right ("AI visibility audit cost").
    { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
    // Methodology backs up the "transparent methodology" claim the money pages make,
    // and is the asset every off-site pitch links to.
    { path: "/methodology/", priority: 0.85, changeFrequency: "monthly" },
    // The citable front door for the original dataset — the asset every off-site
    // pitch, DOI record and journalist link is meant to point at.
    { path: "/research/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ai-visibility/implementation/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-visibility/ai-visibility-checker/", priority: 0.9, changeFrequency: "weekly" },
    // The sample report is a BOFU page in its own right: "what does an AI
    // visibility audit look like" is a real pre-purchase query, and this is the
    // only page on the site that answers it with the deliverable itself.
    { path: "/ai-visibility/sample-report/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-visibility/ai-visibility-consultant-canada/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-visibility/ai-visibility-consultant-toronto/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-visibility/answer-engine-optimization-consultant-canada/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ai-visibility/generative-engine-optimization-consultant-canada/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/ai-visibility/ai-visibility-for-dental-clinics/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ai-visibility/ai-visibility-for-mortgage-brokers/", priority: 0.8, changeFrequency: "monthly" },

    // ── Case studies ─────────────────────────────────────────────────────
    { path: "/case-studies/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies/homecalc-ai-visibility/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies/cited-by-ai-engines/", priority: 0.8, changeFrequency: "monthly" },

    // ── Person + brand pages ─────────────────────────────────────────────
    { path: "/hami-tahm/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.5, changeFrequency: "monthly" },
    // ── Trust / legal — DELISTED 2026-08-16 ──────────────────────────────
    // These three were added 2026-08-10 on the stated grounds that "all three are
    // indexable". They are not. /disclaimer/, /privacy/ and /terms/ each declare
    // `robots: { index: false, follow: true }`, and have for longer than the sitemap
    // entry existed. The entry was written from an assumption, not from the files.
    //
    // Ahrefs reports it as "Noindex page in sitemap" x3: the sitemap asks a crawler
    // to index a page the page itself refuses. Contradictory instructions cost trust
    // in every OTHER url in the file, which is the real damage.
    //
    // Resolved in favour of the pages, because their directive is the deliberate one.
    //
    // ⚠️ OPEN QUESTION on /disclaimer/ specifically. The deleted note argued it is
    // "real content, not boilerplate: it states exactly what the citation and
    // appearance figures are and are not, and the checker form links to it." That is
    // a good argument for making the PAGE indexable and relisting it here — not for
    // leaving the contradiction in place. If that call gets made, flip the page's
    // robots first, then restore the line below. Never the other way round.
    //   { path: "/disclaimer/", priority: 0.4, changeFrequency: "monthly" },

    // ── AI Visibility blog ───────────────────────────────────────────────
    // ⚠️ A NEW POST NEEDS TWO EDITS: the `posts` array in src/app/blog/page.tsx
    // (so it shows in the index) AND an entry here (so it is crawlable). The
    // platform-priority post below shipped on 2026-08-10 with only the first,
    // and was invisible to crawlers until this was noticed. Add both, or move the
    // blog list into a shared constant and generate this section from it.
    { path: "/blog/", priority: 0.75, changeFrequency: "weekly" },
    // Original research — the linkable asset. Highest blog priority on purpose:
    // this is the page the whole off-site strategy is built to earn links to.
    { path: "/blog/ai-citation-study/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog/what-is-ai-visibility/", priority: 0.7 },
    { path: "/blog/what-is-answer-engine-optimization/", priority: 0.65 },
    { path: "/blog/aeo-vs-geo-vs-seo/", priority: 0.7 },
    { path: "/blog/how-to-check-ai-visibility/", priority: 0.75 },
    { path: "/blog/how-to-get-mentioned-by-chatgpt/", priority: 0.65 },
    { path: "/blog/how-to-get-cited-by-perplexity/", priority: 0.6 },
    { path: "/blog/how-to-appear-in-google-ai-overviews/", priority: 0.65 },
    { path: "/blog/best-ai-visibility-tools/", priority: 0.85 },
    { path: "/blog/ai-visibility-tools-vs-audit/", priority: 0.7 },
    { path: "/blog/peec-vs-profound-vs-airops/", priority: 0.65 },
    { path: "/blog/faq-schema-accordion-bug/", priority: 0.75 },
    { path: "/blog/spa-to-ssg-ai-visibility/", priority: 0.75 },
    // Original cross-platform comparison (Copilot vs Google generative AI) — the
    // only place on the site that documents the two engines rewarding different pages.
    { path: "/blog/which-ai-platform-matters-most/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/ai-visibility-audit-checklist/", priority: 0.75, changeFrequency: "monthly" },
    { path: "/blog/ai-visibility-tool-accuracy/", priority: 0.7, changeFrequency: "monthly" },

    // ── Writing index — REMOVED 2026-07-14 ───────────────────────────────
    // Noindexed (see the page). It indexes the off-topic personal cluster, so it is
    // delisted here too. The on-topic keeper essays below remain listed individually.

    // ── Older SEO-targeted posts ─────────────────────────────────────────
    { path: "/seo-expert-toronto/", priority: 0.6 },
    { path: "/orthodontic-seo-marketing-case-study/", priority: 0.6 },
    // /real-estate-lawyer-in-toronto/ removed 2026-07-14 — noindexed (YMYL legal advice
    // by a non-lawyer; E-E-A-T liability, off-topic).
    { path: "/service-business-growth/", priority: 0.55 },

    // ── Long-form / evergreen — ON-TOPIC keepers only ────────────────────
    // /the-10000-hour-rule/ stays: it earns ~6,500 AI citations (~91% of the domain)
    // and is now linked from the homepage. It is the one legacy essay that is an asset.
    { path: "/the-10000-hour-rule/", priority: 0.6 },

    // ── REMOVED FROM SITEMAP + NOINDEXED, 2026-07-14 (decision D2) ────────
    // The health/lifestyle, finance and personal/mindset clusters were off-topic for
    // an AI-visibility consultancy and were diluting the site's topical focus — and
    // several carried broken WordPress-era image assets. They are now noindexed at the
    // page level and delisted here. Still reachable by direct link; just not advertised
    // to search engines or AI crawlers. Reversible: remove the `robots` block on the
    // page and re-add it here.
    // Delisted: the-longevity-economy, the-future-of-life-expectancy, the-real-founder-
    // dilemma, how-ai-is-reshaping-learning, pushing-boundaries, the-first-one,
    // 1-out-of-20, under-30, these-days, thriving, pov, after-product-launch,
    // how-much-wealth-should-you-aim-for, invest-amid-inflation-in-canada,
    // investment-types, etf-stock-mutualfund, reit, wine-profile,
    // how-many-diets-exist-in-the-world, sleep-quality-101, fitness-pyramid, exercise,
    // hydration, optimal-shower-hair-routine, happiness-and-satisfaction-in-2024.
  ];

  // lastmod — honesty fix (2026-07-14).
  // Previously EVERY entry emitted the same sub-second build timestamp
  // (…T14:30:00.259Z). Identical, precise-to-the-millisecond dates across a whole
  // site are an obvious tell that the value is generated, not real, and Google
  // discounts lastmod it doesn't trust.
  //
  // Rule now: only emit lastModified on pages that genuinely change on a schedule —
  // the ones that carry a `changeFrequency`. Static evergreen pages get NO lastmod,
  // which is perfectly valid and more trustworthy than a fabricated one. And we use a
  // date, not a millisecond timestamp.
  // ⚠️ SECOND FIX (2026-08-11). The rule above was still wrong in the way that
  // matters. It emitted TODAY'S DATE on every page with a changeFrequency, on every
  // deploy — so a CSS tweak re-dated forty pages as if their content had changed.
  // That is the same fabrication as the millisecond timestamp, just less obvious,
  // and it is exactly what makes Google stop trusting lastmod for a domain.
  //
  // lastmod now comes only from LAST_MODIFIED below: a real date, set by hand when
  // the content of that page actually changes. A page absent from that map emits no
  // lastmod at all, which is valid and honest.
  //
  // `priority` and `changeFrequency` are kept for other consumers (Bing/IndexNow),
  // but note Google ignores both — they are not worth arguing about.
  const LAST_MODIFIED: Record<string, string> = {
    "/ai-visibility/": "2026-08-11",
    "/ai-visibility/ai-visibility-consultant-toronto/": "2026-08-11",
    "/ai-visibility/answer-engine-optimization-consultant-canada/": "2026-08-11",
    "/ai-visibility/generative-engine-optimization-consultant-canada/": "2026-08-11",
    "/blog/peec-vs-profound-vs-airops/": "2026-08-24",
    "/blog/what-is-ai-visibility/": "2026-08-11",
    "/blog/best-ai-visibility-tools/": "2026-08-24",
    "/blog/how-to-check-ai-visibility/": "2026-08-26",
    "/blog/aeo-vs-geo-vs-seo/": "2026-08-26",
    "/blog/ai-visibility-audit-checklist/": "2026-08-26",
    "/blog/ai-visibility-tool-accuracy/": "2026-08-26",
    "/blog/what-is-answer-engine-optimization/": "2026-08-16",
    "/blog/which-ai-platform-matters-most/": "2026-08-10",
    "/case-studies/homecalc-ai-visibility/": "2026-08-10",
    "/research/": "2026-08-09",
    "/methodology/": "2026-08-09",
  };

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    priority,
    ...(changeFrequency ? { changeFrequency } : {}),
    ...(LAST_MODIFIED[path] ? { lastModified: LAST_MODIFIED[path] } : {}),
  }));
}
