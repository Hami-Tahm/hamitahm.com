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
    { path: "/ai-visibility/ai-visibility-consultant-canada/", priority: 0.9 },
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

    // ── Writing index ────────────────────────────────────────────────────
    { path: "/writing/", priority: 0.7, changeFrequency: "weekly" },

    // ── Older SEO-targeted posts ─────────────────────────────────────────
    { path: "/seo-expert-toronto/", priority: 0.6 },
    { path: "/orthodontic-seo-marketing-case-study/", priority: 0.6 },
    { path: "/real-estate-lawyer-in-toronto/", priority: 0.6 },
    { path: "/service-business-growth/", priority: 0.55 },

    // ── Long-form / evergreen posts ──────────────────────────────────────
    { path: "/the-10000-hour-rule/", priority: 0.6 },
    { path: "/the-longevity-economy-6-high-growth-sectors/", priority: 0.6 },
    { path: "/the-future-of-life-expectancy/", priority: 0.55 },
    { path: "/the-real-founder-dilemma/", priority: 0.55 },
    { path: "/how-ai-is-reshaping-learning/", priority: 0.55 },
    { path: "/pushing-boundaries/", priority: 0.5 },
    { path: "/the-first-one/", priority: 0.5 },
    { path: "/1-out-of-20/", priority: 0.5 },
    { path: "/under-30/", priority: 0.5 },
    { path: "/these-days/", priority: 0.5 },
    { path: "/thriving/", priority: 0.5 },
    { path: "/pov/", priority: 0.5 },
    { path: "/after-product-launch/", priority: 0.5 },
    { path: "/how-much-wealth-should-you-aim-for/", priority: 0.5 },

    // ── Finance / investing posts ────────────────────────────────────────
    { path: "/invest-amid-inflation-in-canada/", priority: 0.55 },
    { path: "/investment-types/", priority: 0.5 },
    { path: "/etf-stock-mutualfund/", priority: 0.5 },
    { path: "/reit/", priority: 0.5 },

    // ── Health / lifestyle posts ─────────────────────────────────────────
    { path: "/wine-profile/", priority: 0.5 },
    { path: "/how-many-diets-exist-in-the-world/", priority: 0.5 },
    { path: "/sleep-quality-101/", priority: 0.5 },
    { path: "/fitness-pyramid/", priority: 0.5 },
    { path: "/exercise/", priority: 0.5 },
    { path: "/hydration/", priority: 0.5 },
    { path: "/optimal-shower-hair-routine/", priority: 0.5 },
    { path: "/happiness-and-satisfaction-in-2024/", priority: 0.5 },

    // ── Older market-specific / archival ─────────────────────────────────
    { path: "/home-service-in-iran/", priority: 0.4 },
  ];

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    priority,
    ...(changeFrequency ? { changeFrequency } : {}),
  }));
}
