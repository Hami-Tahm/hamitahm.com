# hamitahm.com

The personal site and AI Visibility consultancy of [Hami Tahm](https://hamitahm.com/hami-tahm/), based in Toronto, Canada.

Live: **<https://hamitahm.com>**

---

## What this is

[hamitahm.com](https://hamitahm.com/) is a small, productized AI visibility consultancy. Most of the consulting world still calls this "SEO," but search is moving — people increasingly ask **ChatGPT, Perplexity, Bing Copilot, Claude, and Google AI Overviews** instead of opening a 10-blue-link results page. AI visibility is the work of making sure your business is the one those engines cite, name, and recommend.

This site is the consultancy. It's also the public lab where I document what's actually working in 2026 — including the technical SEO bugs and rendering decisions that move the needle.

## The cluster

- [`/ai-visibility/`](https://hamitahm.com/ai-visibility/) — hub
- [`/ai-visibility/ai-visibility-audit/`](https://hamitahm.com/ai-visibility/ai-visibility-audit/) — **$1,500 CAD flat-fee audit** (the single entry point)
- [`/ai-visibility/ai-visibility-consultant-canada/`](https://hamitahm.com/ai-visibility/ai-visibility-consultant-canada/)
- [`/ai-visibility/answer-engine-optimization-consultant-canada/`](https://hamitahm.com/ai-visibility/answer-engine-optimization-consultant-canada/)
- [`/ai-visibility/generative-engine-optimization-consultant-canada/`](https://hamitahm.com/ai-visibility/generative-engine-optimization-consultant-canada/)
- [`/ai-visibility/ai-visibility-for-dental-clinics/`](https://hamitahm.com/ai-visibility/ai-visibility-for-dental-clinics/) — vertical
- [`/ai-visibility/ai-visibility-for-mortgage-brokers/`](https://hamitahm.com/ai-visibility/ai-visibility-for-mortgage-brokers/) — vertical
- [`/case-studies/homecalc-ai-visibility/`](https://hamitahm.com/case-studies/homecalc-ai-visibility/) — public case study (named client, real numbers)

## Proof (live and verifiable)

The audit methodology was first proved on [HomeCalc.ca](https://homecalc.ca/), a Canadian financial-calculator platform under three months old at the time:

- **3,100+ AI citations in 60 days** across the Microsoft Copilot ecosystem
- **20+ pages cited**, peaking at 250+ citations per day
- **88% citation share** on key Canadian financial queries (e.g. `mortgage affordability calculator`)
- A YMYL category — financial — which is the hardest category to gain authority in, on the youngest possible domain

Full data, top pages, and grounding queries are in the [case study](https://hamitahm.com/case-studies/homecalc-ai-visibility/).

## Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Vercel** — SSG/SSR + Edge runtime
- Per-route **dynamic Open Graph images** via [`next/og`](https://nextjs.org/docs/app/api-reference/functions/image-response) and a shared Satori template (see `src/lib/og-image.tsx`)
- Site-wide structured data — `Person`, `Organization`, `WebSite`, `Article`, `ProfessionalService`, `FAQPage`, `BreadcrumbList` — declared in `src/app/layout.tsx` and referenced via canonical `@id`
- **IndexNow** wired through `/api/indexnow` to ping Bing, Yandex, Naver, Seznam, and Copilot on each deploy
- **GTM** as the single tag control plane (GA4 fires through GTM, no standalone gtag)

A few patterns worth flagging:

- HomeCalc proof metrics live in **one place** — `src/lib/homecalc-proof.ts` — and propagate to every page that mentions them. Update the numbers there, every claim across the site updates.
- A shared `<AuthorByline />` component (`src/components/AuthorByline.tsx`) is used on every blog and writing post so the Article schema, visible byline, and `/hami-tahm/` entity link stay aligned.
- `robots.ts` and `sitemap.ts` are written as code, not static files, so they stay in sync with the cluster.

## Local development

```bash
git clone https://github.com/Hami-Tahm/hamitahm.com.git
cd hamitahm.com
cp .env.example .env.local   # fill in INDEXNOW_KEY + INDEXNOW_SECRET
npm install
npm run dev
```

Open <http://localhost:3000>.

## Adjacent projects

- [HomeCalc.ca](https://homecalc.ca/) — Canadian real-estate calculators (the AI visibility lab)
- [Houmse.com](https://houmse.com/) — Toronto cleaning marketplace
- [dimaht.com](https://dimaht.com/) — 391-post Persian archive (9+ years of business and product writing)

## Contact

- Email: **TahmHami@gmail.com**
- LinkedIn: [linkedin.com/in/hamitahm](https://www.linkedin.com/in/hamitahm)
- X: [@hamitahm](https://x.com/hamitahm)
- Crunchbase: [hami-tahm](https://www.crunchbase.com/person/hami-tahm)

If you're researching AI visibility, the [blog](https://hamitahm.com/blog/) is the public version of the lab notebook. If you want the framework applied to your business, [book the audit](https://hamitahm.com/ai-visibility/ai-visibility-audit/).
