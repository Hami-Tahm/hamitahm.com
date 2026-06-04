# /hami-tahm/ Update Spec

**URL:** `/hami-tahm/`
**Page type:** Entity hub (About page)
**Scope:** UPDATE only — three additions, nothing removed, nothing rewritten.

---

## 1. Quick layout review

**Critical constraint:** **Execution Snapshot section must not be touched.** No reordering, no rewording, no styling changes, no items added or removed. The HomeCalc.ca / HamiTahm.com / Houmse.com / Preconhub / Dimah / Up-Diet timeline is doing real expertise + experience work — leave it exactly as it is.

**The three additions, in order:**

1. **Photo** in hero/bio area (the most important E-E-A-T signal — Person schema is incomplete without it)
2. **Person + ProfilePage JSON-LD schema** in `<head>`
3. **CTA block** between the bio and the Execution Snapshot section

**Plus three minor checks:** title, meta description, first paragraph after H1.

**Photo recommendation:** Use **Photo 2** (the closer portrait — tightest crop, sharpest focus, eyes-on-camera, neutral confident expression). It works for both the hero placement and the schema `image` field. Photo 1 and Photo 3 are also strong, but Photo 2 is the most efficient choice for an entity page because Google's Knowledge Panel construction favors portrait crops over wider environmental shots.

---

## 2. Final spec by element

### A. Photo — PRIMARY ADDITION

- **Choose:** Photo 2 (the closer portrait).
- **Where:** Hero area, near H1. If the existing layout has the H1 left-aligned with whitespace on the right, place the photo right of the H1 + first paragraph. If H1 is centered, place the photo above the H1 as a contained square or rounded square.
- **Recommended treatment:**
  - Export at minimum **800×800px** for Person schema use, **1200×1200px or larger** preferred so Google can scale down without artifacts.
  - Format: WebP with JPEG fallback.
  - Crop: keep the shoulders visible — don't tight-crop to just the face. Google's Knowledge Panel prefers head-and-shoulders portraits.
  - Loading: `loading="eager"` on this image — it's above the fold and is a key entity signal, do not lazy-load it.
- **Alt text (exact):**

  > `Hami Tahm, AI visibility consultant, Toronto, Canada`

- **Filename recommendation (for the asset itself):** `hami-tahm-portrait.webp` or `hami-tahm-ai-visibility-consultant.webp`. Filenames are a minor entity signal — use the name verbatim.

---

### B. First paragraph after H1 — CHECK + UPDATE IF MISSING

- **Required check:** does the existing first paragraph contain *all three* of: "Hami Tahm," "AI visibility consultant," and "Canada" (or "Canadian")?
  - **If yes** — do nothing.
  - **If no** — replace or add the following paragraph directly after the H1:

    > Hami Tahm is a Canadian AI visibility consultant and founder — building tools and practices that help businesses appear in AI-powered search. Based in Toronto, Hami runs HamiTahm.com as his AI visibility practice and HomeCalc.ca as a live case study in AI citation growth.

- **Why:** AI engines extract entity claims from the first paragraph of an About page. This paragraph anchors *who*, *what*, and *where* in one block, plus names two verifiable properties (HamiTahm.com, HomeCalc.ca) so the entity is checkable.

---

### C. CTA block — ADD between bio and Execution Snapshot

- **Required:** insert this block after the bio/intro section and *before* the Execution Snapshot section. Do not interrupt or modify Execution Snapshot.
- **Copy:**

  > **Working on AI visibility for your business?**
  >
  > → [Book an AI visibility audit](/ai-visibility/ai-visibility-audit/)
  > → [Explore AI visibility services](/ai-visibility/ai-visibility-consultant-canada/)

- **Layout note:** Visual treatment should be a clean callout or text block — not a hero-style high-contrast button section. This page is an entity hub, not a money page. The CTA exists, but it doesn't compete with the bio or the Execution Snapshot for attention.

---

### D. Person + ProfilePage + BreadcrumbList schema

- **Required:** add the following JSON-LD inside `<script type="application/ld+json">` in `<head>`.
- **Before deploy:** replace the four `PLACEHOLDER` strings with real URLs or remove the lines.

  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://hamitahm.com/hami-tahm/#profilepage",
        "url": "https://hamitahm.com/hami-tahm/",
        "name": "Hami Tahm — AI Visibility Consultant",
        "mainEntity": {
          "@id": "https://hamitahm.com/hami-tahm/#hami-tahm"
        },
        "breadcrumb": {
          "@id": "https://hamitahm.com/hami-tahm/#breadcrumb"
        }
      },
      {
        "@type": "Person",
        "@id": "https://hamitahm.com/hami-tahm/#hami-tahm",
        "name": "Hami Tahm",
        "jobTitle": "AI Visibility Consultant",
        "url": "https://hamitahm.com/hami-tahm/",
        "image": "https://hamitahm.com/PLACEHOLDER-hami-tahm-portrait.webp",
        "description": "Hami Tahm is a Canadian AI visibility consultant and founder of HomeCalc.ca and HamiTahm.com.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressCountry": "CA"
        },
        "knowsAbout": [
          "AI Visibility",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "AI Search Optimization",
          "SEO",
          "Real estate technology",
          "Canadian mortgage market"
        ],
        "sameAs": [
          "PLACEHOLDER — LinkedIn profile URL",
          "PLACEHOLDER — X/Twitter profile URL",
          "https://homecalc.ca",
          "https://houmse.com"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hamitahm.com/hami-tahm/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hamitahm.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hami Tahm",
            "item": "https://hamitahm.com/hami-tahm/"
          }
        ]
      }
    ]
  }
  ```

- **`image` field:** must match the live URL of the portrait you upload. Schema is incomplete without it — fill this before deploy.
- **`sameAs` array:** the more verified profiles named here, the stronger the entity triangle. LinkedIn is the highest-value entry. HomeCalc.ca and Houmse.com are already listed because they're properties Hami owns — that's a valid `sameAs` signal too. Remove any line whose URL doesn't exist.
- **Why ProfilePage:** Google added explicit `ProfilePage` support in 2023 for About / author pages. Using it tells Google "this URL is the canonical profile of this person" — exactly the entity hub role this page is supposed to play.

---

### E. Title tag — CHECK + UPDATE IF MISSING

- **Required check:** does the title include "AI Visibility Consultant"?
  - **If yes** — do nothing.
  - **If no** — update to:

    > `Hami Tahm — AI Visibility Consultant | HamiTahm.com`

  Under 60 characters.

---

### F. Meta description — CHECK + UPDATE IF GENERIC

- **Required if missing or generic:**

  > Hami Tahm is a Canadian AI visibility consultant — builder of HomeCalc.ca, HamiTahm.com, and Houmse.com. Helping businesses appear in ChatGPT, Perplexity, and Google AI Overviews.

  Under 160 characters. Names the three live properties from Execution Snapshot — those are verifiable claims that strengthen entity trust.

---

### G. External link audit — QUICK CHECK

- Any external link on this page (LinkedIn, X/Twitter, Crunchbase, GitHub, etc.) that identifies Hami by name should have:
  - `rel="me"` — explicit entity verification signal, helps Google and Mastodon-style verification.
  - `rel="noopener"` — security baseline.
- If links to LinkedIn/Twitter exist already, add `rel="me"` if it's not there. Do not remove existing links.

---

## 3. SEO/AEO/GEO checks

**Keyword targeting** — None. The page handles brand search (`hami tahm`, `hami tahm consultant`, `about hami tahm`) which is navigational and depends on entity strength, not on-page optimization.

**AEO** — Minimal. The single quotable claim worth landing somewhere on the page (likely the first paragraph or the bio) is:

> *"Hami Tahm is a Canadian AI visibility consultant who built HomeCalc.ca from zero to 1,100 AI citations in 30 days while the domain was under three months old."*

If this exact sentence (or close variant) isn't already on the page, slot it into the bio. It contains name, title, location, and a verifiable proof claim — everything an AI engine needs to answer *"who is Hami Tahm?"*

**GEO / entity establishment** — This is the work the update is doing.

- Person + ProfilePage schema → canonical entity record.
- Portrait photo → Google Knowledge Panel image source + E-E-A-T signal.
- `sameAs` to LinkedIn, HomeCalc.ca, Houmse.com → entity triangle across multiple verifiable surfaces.
- Existing Execution Snapshot (untouched) → experience and longevity signals (Houmse.com since Sept 2020 is the strongest single longevity claim on the page).

**Cannibalization** — Zero. This page targets no keyword that any other page targets.

**Internal links added** — Two from the CTA block (audit page + consultant page). No existing internal links should be removed.

---

## 4. Final recommendation

**Ready to implement:** Yes.

**Order of operations (estimated time):**

1. **Upload photo.** Use Photo 2. Export at 1200×1200px WebP minimum. Save filename as `hami-tahm-portrait.webp` or similar. Place near H1. Apply the exact alt text. *15 minutes.*
2. **Paste JSON-LD schema block** into `<head>`. Replace placeholders (image URL, LinkedIn, X/Twitter). Remove any `sameAs` line whose URL doesn't exist. *20 minutes.*
3. **Add CTA block** after bio, before Execution Snapshot. Two links, plain callout, no fancy styling. *10 minutes.*
4. **Check first paragraph, title, meta description.** Apply each only if missing the required entity claims. *15 minutes.*
5. **Audit external profile links** for `rel="me"`. Add where missing. *5 minutes.*

**Total: ~65 minutes of developer time.** Slightly over the brief's 2-hour ceiling because of the photo export step, well under the redesign-level work R5 forbids.

**What not to do — locked:**
- Do not touch the Execution Snapshot section. Every cell, badge, date stamp, and description stays exactly as shown in the screenshot.
- Do not add a FAQ, testimonials block, comparison table, pricing card, services grid, or social proof carousel. Entity pages stay clean — every extra section dilutes the entity signal.
- Do not change the H1.
- Do not remove or restructure existing nav, footer, or layout.

**QA after deploy:**
- Validate JSON-LD with Google Rich Results Test — the block above should pass cleanly with no errors and `Person` + `ProfilePage` + `BreadcrumbList` all detected.
- Confirm the portrait image loads and `image` URL in schema resolves (no 404).
- Click both CTAs and confirm correct destinations (`/ai-visibility/ai-visibility-audit/` and `/ai-visibility/ai-visibility-consultant-canada/`). The second destination only exists if the AEO consultant page is live — sequencing matters.
- Fetch in Google Search Console (`URL Inspection → Test Live URL`) so Google picks up the schema update faster than its normal recrawl cycle.
- After 1-2 weeks, check whether a Hami Tahm Knowledge Panel begins forming in Google search for the brand query — that's the entity-establishment work paying off.

**Sequencing note:** the secondary CTA link goes to `/ai-visibility/ai-visibility-consultant-canada/` — that's the AEO consultant page from Sprint S2. Do not deploy this update *before* the AEO consultant page is live, or that link will 404. The primary CTA to `/ai-visibility/ai-visibility-audit/` is Sprint S1 and should already be live by then.
