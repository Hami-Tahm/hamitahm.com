# Homepage Update Spec

**URL:** `/`
**Page type:** Brand homepage (navigational)
**Scope:** UPDATE only — three changes. Not a rewrite.

---

## 1. Quick layout review

I do not have the current homepage in front of me, so this spec is written as a checklist: *if X is missing, add Y; if X is already present, do nothing.* Hami or the developer should compare each item against the live page and apply only what's actually missing.

**The three changes (in order):**

1. Hero CTA destination + label
2. Person + Organization schema JSON-LD (if missing)
3. Hero subheading — confirm "AI visibility consultant" appears (if missing)

Plus two minor checks: title tag and meta description.

**What not to touch:** existing H1, existing sections, existing navigation, existing footer, existing visual layout. R5 says this is a 30-minute update — keep it that way.

---

## 2. Final copy by element

### A. Hero CTA — PRIMARY CHANGE

- **Current state:** Unknown destination.
- **Required:** Two links in the hero, in this order of prominence.

  **Primary button (large, high-contrast):**

  > `Get Your AI Visibility Audit`
  > → links to `/ai-visibility/ai-visibility-audit/`

  **Secondary link (plain text or low-contrast button, beneath or beside the primary):**

  > `Explore AI visibility services`
  > → links to `/ai-visibility/`

- **Layout note:** If the current hero has a single CTA, replace it with these two. If the current hero has two CTAs already, replace destinations and labels only — do not restructure visual layout.

---

### B. Hero subheading

- **Current state:** Unknown.
- **Required check:** Does the existing subheading (or any line above the fold) name Hami as an AI visibility consultant?
  - **If yes** — do nothing. Skip this change.
  - **If no** — add a single line under the current H1 or existing subheading:

    > AI visibility consulting for Canadian businesses.

- **Layout note:** One line, no more. If the existing hero already says something like "I help businesses get found by ChatGPT" or similar, that satisfies the requirement — don't stack a second line on top of it.

---

### C. Title tag

- **Current state:** Unknown.
- **Required check:** Does the title include "AI Visibility Consultant"?
  - **If yes** — do nothing.
  - **If no** — update to one of:

    > `Hami Tahm | AI Visibility Consultant`

    or

    > `Hami Tahm — AI Visibility Consultant in Canada`

  Both are under 60 characters. The second variant adds the location signal — recommended unless current title is doing other branding work.

---

### D. Meta description

- **Current state:** Unknown — likely generic if not previously updated.
- **Required if missing or generic:**

  > Hami Tahm — AI visibility consultant in Canada. Helping businesses appear in ChatGPT, Perplexity, and Google AI Overviews.

  Under 160 characters. Direct, navigational, on-brand.

---

### E. Person + Organization + WebSite schema — TECHNICAL CHANGE

- **Current state:** Unknown. If no JSON-LD is currently emitted on the homepage, this is the highest-impact change in the whole update.
- **Required:** Add the following JSON-LD inside a single `<script type="application/ld+json">` block in `<head>` (or wherever existing schema is rendered).

  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hamitahm.com/#hami-tahm",
        "name": "Hami Tahm",
        "url": "https://hamitahm.com/",
        "jobTitle": "AI Visibility Consultant",
        "worksFor": {
          "@id": "https://hamitahm.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CA"
        },
        "knowsAbout": [
          "AI Visibility",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "AI Search Optimization"
        ],
        "sameAs": [
          "PLACEHOLDER — LinkedIn profile URL",
          "PLACEHOLDER — X/Twitter profile URL",
          "PLACEHOLDER — any other verified profile"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://hamitahm.com/#organization",
        "name": "HamiTahm.com",
        "url": "https://hamitahm.com/",
        "founder": {
          "@id": "https://hamitahm.com/#hami-tahm"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hamitahm.com/#website",
        "name": "Hami Tahm",
        "url": "https://hamitahm.com/",
        "publisher": {
          "@id": "https://hamitahm.com/#organization"
        }
      }
    ]
  }
  ```

- **`sameAs` placeholders:** replace with actual verified profile URLs before deploy. If a profile doesn't exist or shouldn't be linked, remove that line — do not leave the placeholder string in production.
- **`WebSite` `potentialAction`:** the brief notes adding `SearchAction` only if site search exists. The block above omits it. If `hamitahm.com` has site search, add this inside the `WebSite` object:

  ```json
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://hamitahm.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
  ```

  Replace the URL template with the actual search URL pattern.

- **If existing JSON-LD is already on the page:** do not delete it. Either merge the new objects into the existing `@graph` array, or emit this new block as a second `<script type="application/ld+json">` — both approaches are valid for Google.

---

## 3. SEO/AEO/GEO checks

**Keyword targeting** — None on this page. Homepage handles brand search (`hamitahm`, `hami tahm`) which is navigational and depends on entity establishment, not on-page optimization. No primary keyword, no supporting keyword targeting. Confirmed.

**Cannibalization** — None. Homepage must not use `ai visibility audit` as its H1 or title. Per the brief, the title update uses "AI Visibility Consultant" (the role) not "AI Visibility Audit" (the service page's territory). This keeps the audit page's transactional intent uncontested.

**Entity establishment (GEO)** — The Person + Organization schema is the highest-leverage piece of this update. AI engines and Google use root-domain `Person` JSON-LD as the canonical entity record for "Hami Tahm." Adding it (or making sure it's complete) strengthens every other page's entity references.

**AEO** — Not applicable. This page is not an extraction target. The brief's only AEO-relevant ask is that "Hami Tahm" + "AI visibility consultant" + "Canada" appear in the same sentence somewhere on the page for entity establishment — the meta description and the hero subheading update both satisfy this in different places.

**Internal links** — Adding two outbound links from the hero. Existing links to `/hami-tahm/`, `/writing/`, `/contact/`, and any other current internal links stay as they are. Do not remove or restructure existing nav.

**Technical SEO** — No CWV impact expected. The schema block adds a few hundred bytes inside `<head>`; the CTA changes are link URL swaps. No image, font, or script additions.

---

## 4. Final recommendation

**Ready to implement:** Yes.

**The three changes, prioritized:**

1. **Hero CTA** — replace destination with `/ai-visibility/ai-visibility-audit/`, label as `Get Your AI Visibility Audit`. Add secondary link to `/ai-visibility/` labeled `Explore AI visibility services`. *5 minutes.*

2. **Person + Organization + WebSite schema** — paste the JSON-LD block above into `<head>`. Replace `sameAs` placeholders with real profile URLs. *15 minutes.*

3. **Hero subheading + title + meta** — check each. If "AI visibility consultant" is already in the subheading, do nothing. If missing, add the one-line subheading. Update title to include "AI Visibility Consultant" if it's currently brand-only. Update meta description if it's currently generic. *10 minutes.*

**Total: ~30 minutes of developer time.** Per R5.

**What not to do:**
- Do not rewrite any existing copy.
- Do not add a FAQ, pricing block, comparison table, case study excerpt, services list, or any new section.
- Do not change the visual layout, navigation, or footer.
- Do not change the H1 unless it currently competes with the audit page (e.g. unlikely, but if H1 is literally "AI Visibility Audit," flag it — that should not be the homepage H1).

**QA after deploy:**
- Validate the JSON-LD block with Google Rich Results Test.
- Confirm the `Person` entity passes Google's entity check (`name`, `jobTitle`, `url`, `sameAs` all populated).
- Click both hero CTAs and confirm correct destinations.
- View source on the page and confirm the title, meta description, and subheading reflect the updates.
- Re-fetch in Google Search Console (`URL Inspection → Test Live URL`) so Google picks up the schema update faster than its normal recrawl cycle.

**Sequencing note:** the brief sets this as P1 / Sprint S3, after S1 (audit + case study) and S2 (verticals + AEO + GEO) pages are live. Do not deploy this update *before* `/ai-visibility/ai-visibility-audit/` and `/ai-visibility/` are live — both hero CTAs will 404 otherwise.
