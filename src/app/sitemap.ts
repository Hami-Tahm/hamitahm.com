import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hamitahm.com";
  const now = new Date();

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
    { path: "/ai-visibility/ai-visibility-audit/", priority: 0.95 },
    { path: "/ai-visibility/implementation/", priority: 0.9 },
    { path: "/ai-visibility/ai-visibility-checker/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ai-visibility/ai-visibility-consultant-canada/", priority: 0.9 },
    { path: "/ai-visibility/ai-visibility-consultant-toronto/", priority: 0.9 },
    { path: "/ai-visibility/answer-engine-optimization-consultant-canada/", priority: 0.85 },
    { path: "/ai-visibility/generative-engine-optimization-consultant-canada/", priority: 0.85 },
    { path: "/ai-visibility/ai-visibility-for-dental-clinics/", priority: 0.8 },
    { path: "/ai-visibility/ai-visibility-for-mortgage-brokers/", priority: 0.8 },

    // ── Case studies ─────────────────────────────────────────────────────
    { path: "/case-studies/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies/homecalc-ai-visibility/", priority: 0.8 },
    { path: "/case-studies/cited-by-ai-engines/", priority: 0.8 },

    // ── Person + brand pages ─────────────────────────────────────────────
    { path: "/hami-tahm/", priority: 0.85, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.5, changeFrequency: "monthly" },

    // ── AI Visibility blog ───────────────────────────────────────────────
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
    // /the-10000-hour-rule/ stays: it earns ~6,500 AI citations (93% of the domain)
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
  const today = now.toISOString().slice(0, 10); // YYYY-MM-DD, no fake precision

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    priority,
    ...(changeFrequency
      ? { changeFrequency, lastModified: today }
      : {}),
  }));
}
