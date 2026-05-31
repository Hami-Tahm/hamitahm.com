# hamitahm.com — design reference + page specs

This folder contains **static HTML design mockups** for the new hamitahm.com.
They are the *visual + content source of truth*. They are NOT the final
production site. You will rebuild these in a real framework (see "How to launch")
so the site is server-rendered and crawlable by AI engines.

---

## Locked design system (do not change)

- **Background:** `#F6F1E8` (warm cream)
- **Card / panel:** `#FFFFFF`
- **Primary text:** `#181715`
- **Muted text:** `#6F6A60`
- **Faint text / labels:** `#9A9384`
- **Border (subtle):** `rgba(24,23,21,.10)`
- **Border (strong):** `#DDD3C3`
- **Accent (teal):** `#0F6E78`
- **Accent dark (hover):** `#0B5F68`
- **Fonts:** Newsreader (headings + article body), Hanken Grotesk (UI/body), JetBrains Mono (labels/dates/nav)
- Teal is the ONLY accent. No second accent color. No purple/violet gradients, no glassmorphism.

---

## Pages in this folder → final routes

| File | Final route | Type |
|---|---|---|
| `pages/index.html` | `/` | Homepage |
| `pages/about--hami-tahm.html` | `/hami-tahm/` | About (entity hub) |
| `pages/writing.html` | `/writing/` | Writing index (listing only) |
| `pages/contact.html` | `/contact/` | Contact |
| `pages/post-template--the-10000-hour-rule.html` | `/the-10000-hour-rule/` | Personal post TEMPLATE (flat root URL) |
| `pages/ai-visibility--pillar.html` | `/ai-visibility/` | AI Visibility pillar/hub |
| `pages/ai-visibility--consultant-canada.html` | `/ai-visibility/ai-visibility-consultant-canada/` | Cornerstone service |
| `pages/case-study--homecalc.html` | `/case-studies/homecalc-ai-visibility/` | Case study |
| `pages/blog--index.html` | `/blog/` | Blog index (AI-visibility content) |
| `pages/blog-post-template--what-is-ai-visibility.html` | `/blog/what-is-ai-visibility/` | Blog post TEMPLATE |

Two files are TEMPLATES — reuse their layout for every other post:
- personal posts → flat root URLs (`/slug/`)
- AI-visibility posts → `/blog/slug/`

---

## Site architecture (final)

```
/                                         Homepage
/hami-tahm/                               About (Person schema entity hub)
/writing/                                 Personal writing index
/contact/

# personal posts — FLAT root URLs (migrate with SAME slug, see below)
/the-10000-hour-rule/
/the-longevity-economy-6-high-growth-sectors/
/wine-profile/
/how-many-diets-exist-in-the-world/
/reit/   /investment-types/   /sleep-quality-101/  ... etc

# AI visibility silo (money)
/ai-visibility/                           pillar
/ai-visibility/ai-visibility-consultant-canada/     cornerstone
/ai-visibility/ai-visibility-audit/
/ai-visibility/answer-engine-optimization-consultant-canada/
/ai-visibility/generative-engine-optimization-consultant-canada/
/ai-visibility/ai-visibility-for-dental-clinics/
/ai-visibility/ai-visibility-for-mortgage-brokers/

# proof
/case-studies/homecalc-ai-visibility/

# blog (informational AI content)
/blog/
/blog/what-is-ai-visibility/
/blog/how-to-check-ai-visibility/
/blog/how-to-get-mentioned-by-chatgpt/
/blog/how-to-get-cited-by-perplexity/
/blog/how-to-appear-in-google-ai-overviews/
/blog/aeo-vs-geo-vs-seo/
/blog/what-is-answer-engine-optimization/
```

The silo is built by INTERNAL LINKING (pillar ↔ services ↔ blog), not by nested URLs.

---

## CRITICAL — AI crawlability (the whole point)

This site sells AI visibility, so it MUST be visible to AI crawlers (ChatGPT,
Perplexity, Gemini, Google AI Overviews). These crawlers often do NOT run JS.

Requirements for the production build:
- **Server-side rendered or pre-rendered HTML** — every word of content must be in
  the raw HTML response, with JS disabled. (The mockups use a little JS for filter
  chips and scroll-reveal; in production, content must exist in HTML and JS only
  enhances it.)
- Unique `<title>` + meta description per page (already written into each mockup).
- **JSON-LD structured data** (NOT yet in the mockups — add in build):
  - `/` and `/hami-tahm/`: `Person` schema (name "Hami Tahm", alternateName
    "Hamid Tahmasbi", jobTitle "Tech Founder / AI Visibility Consultant",
    url, sameAs [X, LinkedIn], address Toronto/Ontario/CA, knowsAbout [...]).
  - service pages: `ProfessionalService`.
  - pages with FAQs (pillar, consultant): `FAQPage`.
  - posts: `Article` (+ `Person` author).
  - case study: `Article` / `CreativeWork`.
- `sitemap.xml` + `robots.txt` (allow Googlebot, Bingbot, GPTBot, PerplexityBot,
  ClaudeBot/anthropic, Google-Extended as desired).
- Clean URLs, trailing-slash behavior consistent (see migration note).
- Semantic HTML, one `<h1>` per page, real `<a href>` links, alt text on images.

---

## CRITICAL — migration from the current WordPress site

The current hamitahm.com (WordPress) already has search traffic. Do NOT lose it.

1. **Keep existing post slugs EXACTLY.** Highest priority — these have impressions:
   - `/the-10000-hour-rule/` (by far the biggest — keep untouched)
   - `/seo-expert-toronto/`
   - `/the-longevity-economy-6-high-growth-sectors/`
   - `/orthodontic-seo-marketing-case-study/`
   - `/how-many-diets-exist-in-the-world/`
   - plus all other existing posts.
2. **Trailing slash:** WordPress uses `/slug/` (with slash). Match that in the new
   build, OR set up redirects for the no-slash version. Pick ONE canonical form.
3. **`seo-expert-toronto` and `orthodontic-seo-marketing-case-study`** stay at their
   flat root URLs (don't lose rankings) but are NOT listed in the Writing menu —
   instead they're linked from the AI-visibility consultant page as proof.
4. Before cutover: export the full list of live WordPress URLs, map each to its new
   route, and 301 anything whose URL actually changes. URLs that stay identical need
   no redirect.
5. Re-submit `sitemap.xml` in Google Search Console after launch.

---

## How to launch (Cursor + Vercel)

These mockups are plain HTML. For production you want a framework with SSR/SSG.
Recommended: **Next.js** (App Router) on Vercel — best SSR + SEO story.

1. Create a Next.js app, push to GitHub, connect to Vercel.
2. In Cursor, feed it these mockups one page at a time as the visual spec:
   "Rebuild this HTML as a Next.js page at route X. Keep the exact design system,
    fonts, colors, and content. Make it server-rendered. Add the JSON-LD listed in
    README." 
3. Build shared components first from `index.html`: Nav, Footer, Button, SectionLabel,
   Card. Reuse across pages.
4. Add `app/sitemap.ts` and `app/robots.ts`.
5. Point hamitahm.com DNS at Vercel only AFTER you've recreated the high-traffic
   posts at their existing slugs (especially /the-10000-hour-rule/).

> Note: the mockups embed all CSS inline per file for portability. In the real build,
> move the design tokens into one place (CSS variables / Tailwind config) so you set
> the palette once.

---

## Content still needed from you (placeholders to fill)

- **Real portrait photo** on the About page (currently a placeholder box).
- **Real email / LinkedIn / X URLs** on Contact (currently hi@hamitahm.com etc).
- **Case study metric** — the `[ ___ ]` box on the HomeCalc case study. Put a REAL,
  honest number (AI citations, indexed pages, query coverage, or early traffic).
  Never invent results.
- **Real post dates, excerpts, and the actual slug** for "What I'm Actually Good At"
  in the Writing list (verify against WordPress).
- Pricing on the pillar + consultant pages — keep, adjust, or remove as you decide.
- Write the remaining service pages (audit, AEO, GEO, dental, mortgage) and blog
  posts using the two template files as the pattern.
