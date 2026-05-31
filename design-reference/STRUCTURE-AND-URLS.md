# hamitahm.com — Site Structure, URLs & Internal Linking

This is the single reference for building the site. Two things in one place:
1. **URL map** — the exact address of every page.
2. **Internal linking map** — which page links to which (this is what builds the SEO "silo").

Key principle: the silo is built by INTERNAL LINKS, not by nested URLs.
Case study and Blog live at ROOT-level URLs but are linked *from* the AI Visibility
pillar — so conceptually they're children, but their URLs are short.

---

## 1. URL MAP

### Root / identity
| Page | URL |
|---|---|
| Homepage | `/` |
| About (entity hub) | `/hami-tahm/` |
| Writing (index only) | `/writing/` |
| Contact | `/contact/` |

### Personal posts — FLAT root URLs (keep existing slugs, no redirect)
| Page | URL |
|---|---|
| The 10,000-Hour Rule | `/the-10000-hour-rule/` |
| The Longevity Economy | `/the-longevity-economy-6-high-growth-sectors/` |
| Wine Taste Profile | `/wine-profile/` |
| How Many Diets Exist | `/how-many-diets-exist-in-the-world/` |
| REITs | `/reit/` |
| Investment Types | `/investment-types/` |
| Invest Amid Inflation | `/invest-amid-inflation-in-canada/` |
| Sleep Quality 101 | `/sleep-quality-101/` |
| Fitness Pyramid | `/fitness-pyramid/` |
| Happiness & Satisfaction | `/happiness-and-satisfaction-in-2024/` |
| What I'm Actually Good At | `/what-im-actually-good-at/` (verify real slug) |
| (proof, not in Writing menu) SEO Expert Toronto | `/seo-expert-toronto/` |
| (proof, not in Writing menu) Orthodontic SEO Case | `/orthodontic-seo-marketing-case-study/` |

### AI Visibility silo — MONEY pages
| Page | URL |
|---|---|
| Pillar / hub | `/ai-visibility/` |
| Cornerstone service | `/ai-visibility/ai-visibility-consultant-canada/` |
| Audit / lead magnet | `/ai-visibility/ai-visibility-audit/` |
| AEO service | `/ai-visibility/answer-engine-optimization-consultant-canada/` |
| GEO service | `/ai-visibility/generative-engine-optimization-consultant-canada/` |
| Vertical: dental clinics | `/ai-visibility/ai-visibility-for-dental-clinics/` |
| Vertical: mortgage brokers | `/ai-visibility/ai-visibility-for-mortgage-brokers/` |

### Proof
| Page | URL |
|---|---|
| HomeCalc case study | `/case-studies/homecalc-ai-visibility/` |

### Blog — informational AI content
| Page | URL |
|---|---|
| Blog index | `/blog/` |
| What Is AI Visibility | `/blog/what-is-ai-visibility/` |
| How to Check AI Visibility | `/blog/how-to-check-ai-visibility/` |
| How to Get Mentioned by ChatGPT | `/blog/how-to-get-mentioned-by-chatgpt/` |
| How to Get Cited by Perplexity | `/blog/how-to-get-cited-by-perplexity/` |
| How to Appear in Google AI Overviews | `/blog/how-to-appear-in-google-ai-overviews/` |
| AEO vs GEO vs SEO | `/blog/aeo-vs-geo-vs-seo/` |
| What Is Answer Engine Optimization | `/blog/what-is-answer-engine-optimization/` |

---

## 2. INTERNAL LINKING MAP (the silo)

This mirrors your hand-drawn diagram. Arrows = "links to".

```
                          Hami Tahm (/)
                                |
        ┌───────────────┬───────┴────────┬───────────────────────────┐
        |               |                |                           |
   /hami-tahm/      /writing/        /contact/             /ai-visibility/  (PILLAR ⑤)
    (About ①)      (Writing ②)      (Contact ③)                   |
        |               |                                          |
        |          links to flat                                   |
        |          personal posts ④                                |
        |          (/the-10000-hour-rule/, etc.)                   |
        |                                                          |
        └── CTA ───────────────────────────────────────────►  pillar
                                                                   |
                    ┌──────────────────────┬───────────────────────┼─────────────────┐
                    |                       |                       |                 |
        /ai-visibility/...  (services ⑥)   /case-studies/      /blog/  (Blog ⑧)   FAQ/verticals
        consultant-canada (cornerstone)    homecalc-ai-        index             dental, mortgage
        audit, aeo, geo                    visibility ⑦           |
                    |                                              |
                    └──── all link back to pillar + audit    /blog/... (posts ⑨)
                                                                   |
                                                          each post links to:
                                                          pillar + audit + 2 sibling posts
```

### Link rules (do this when building each page)

**Homepage (`/`)**
- → `/ai-visibility/ai-visibility-audit/` (primary CTA)
- → `/hami-tahm/`, `/writing/`, flat posts, `/ai-visibility/`

**About (`/hami-tahm/`)**
- → `/ai-visibility/ai-visibility-audit/` (CTA box)
- → homecalc.ca, houmse.com, hamitahm.com (external venture links)

**Writing (`/writing/`)**
- → all flat personal posts (`/the-10000-hour-rule/` etc.)
- does NOT link to `/seo-expert-toronto/` or `/orthodontic-seo-marketing-case-study/`

**Flat personal post (e.g. `/the-10000-hour-rule/`)**
- → `/writing/` (back link)
- → `/hami-tahm/` (author box)
- → 2–3 sibling personal posts ("keep reading")

**AI Visibility pillar (`/ai-visibility/`)** — the HUB, links to everything in the silo:
- → consultant-canada, audit, aeo, geo (services)
- → dental-clinics, mortgage-brokers (verticals)
- → `/case-studies/homecalc-ai-visibility/`
- → `/orthodontic-seo-marketing-case-study/` (proof)
- → all `/blog/...` guides
- → `/ai-visibility/ai-visibility-audit/` (primary CTA, repeated)

**Cornerstone (`/ai-visibility/ai-visibility-consultant-canada/`)**
- breadcrumb → `/ai-visibility/`
- → `/ai-visibility/ai-visibility-audit/` (CTA)
- → `/case-studies/homecalc-ai-visibility/` (proof)
- → `/blog/aeo-vs-geo-vs-seo/` (supporting)

**Other service pages (audit, aeo, geo, dental, mortgage)**
- breadcrumb → `/ai-visibility/`
- → cornerstone + audit
- → relevant case study / blog post

**Case study (`/case-studies/homecalc-ai-visibility/`)**
- breadcrumb → `/ai-visibility/`
- → `/ai-visibility/ai-visibility-audit/` (CTA)
- → homecalc.ca (external)

**Blog index (`/blog/`)**
- breadcrumb → `/ai-visibility/`
- → all `/blog/...` posts
- → `/ai-visibility/ai-visibility-audit/` (CTA strip)

**Blog post (e.g. `/blog/what-is-ai-visibility/`)**
- breadcrumb → `/ai-visibility/` → `/blog/`
- → `/ai-visibility/ai-visibility-audit/` (inline CTA, mid-article)
- → 2–3 sibling blog posts + cornerstone or a service page
- TL;DR box at top (for AI extraction)

---

## 3. NAV & FOOTER (consistent across all pages)

**Header nav:** Hami Tahm (→ `/`) · Writing (→ `/writing/`) · About (→ `/hami-tahm/`)
· **AI Visibility / Get an Audit** (→ `/ai-visibility/` on root pages, or
`/ai-visibility/ai-visibility-audit/` on commercial pages — teal pill button)

**Footer:** brand · AI Visibility / About / Writing / Contact links · copyright line.

---

## 4. QUICK CHECKLIST WHEN BUILDING A PAGE

- [ ] Correct URL (see map above), trailing slash consistent
- [ ] All content in raw HTML (SSR/SSG) — works with JS off
- [ ] Unique `<title>` + meta description
- [ ] JSON-LD: Person (/ and /hami-tahm/), ProfessionalService (services),
      FAQPage (pillar/consultant), Article (posts), Article/CreativeWork (case study)
- [ ] One `<h1>`, semantic h2/h3
- [ ] Internal links per the map above
- [ ] Breadcrumb on silo pages
- [ ] Primary CTA → `/ai-visibility/ai-visibility-audit/`
- [ ] Design tokens: cream `#F6F1E8`, teal `#0F6E78`, Newsreader/Hanken/JetBrains Mono
```

