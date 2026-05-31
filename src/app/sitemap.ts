import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hamitahm.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/hami-tahm/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/writing/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/the-10000-hour-rule/`, lastModified: now, priority: 0.6 },
    { url: `${base}/the-longevity-economy-6-high-growth-sectors/`, lastModified: now, priority: 0.6 },
    { url: `${base}/wine-profile/`, lastModified: now, priority: 0.5 },
    { url: `${base}/how-many-diets-exist-in-the-world/`, lastModified: now, priority: 0.5 },
    { url: `${base}/reit/`, lastModified: now, priority: 0.5 },
    { url: `${base}/investment-types/`, lastModified: now, priority: 0.5 },
    { url: `${base}/invest-amid-inflation-in-canada/`, lastModified: now, priority: 0.5 },
    { url: `${base}/sleep-quality-101/`, lastModified: now, priority: 0.5 },
    { url: `${base}/fitness-pyramid/`, lastModified: now, priority: 0.5 },
    { url: `${base}/happiness-and-satisfaction-in-2024/`, lastModified: now, priority: 0.5 },
    { url: `${base}/seo-expert-toronto/`, lastModified: now, priority: 0.6 },
    { url: `${base}/orthodontic-seo-marketing-case-study/`, lastModified: now, priority: 0.6 },
    { url: `${base}/ai-visibility/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ai-visibility/ai-visibility-consultant-canada/`, lastModified: now, priority: 0.9 },
    { url: `${base}/ai-visibility/ai-visibility-audit/`, lastModified: now, priority: 0.9 },
    { url: `${base}/ai-visibility/answer-engine-optimization-consultant-canada/`, lastModified: now, priority: 0.8 },
    { url: `${base}/ai-visibility/generative-engine-optimization-consultant-canada/`, lastModified: now, priority: 0.8 },
    { url: `${base}/ai-visibility/ai-visibility-for-dental-clinics/`, lastModified: now, priority: 0.7 },
    { url: `${base}/ai-visibility/ai-visibility-for-mortgage-brokers/`, lastModified: now, priority: 0.7 },
    { url: `${base}/case-studies/homecalc-ai-visibility/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/what-is-ai-visibility/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/how-to-check-ai-visibility/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/how-to-get-mentioned-by-chatgpt/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/how-to-get-cited-by-perplexity/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/how-to-appear-in-google-ai-overviews/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/aeo-vs-geo-vs-seo/`, lastModified: now, priority: 0.7 },
    { url: `${base}/blog/what-is-answer-engine-optimization/`, lastModified: now, priority: 0.7 },
  ];
}
