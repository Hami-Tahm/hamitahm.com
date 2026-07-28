/**
 * Single source of truth for the published-research hub (/research/).
 *
 * ── WHY THIS PAGE EXISTS ──
 * The citation dataset used to live only inside a blog post. A journalist, a
 * researcher, or an AI engine looking for "the source" had to read an essay to
 * find it. /research/ is the citable front door: DOI, mirror, raw files,
 * methodology, and limitations in one place, marked up as a Dataset.
 *
 * ⚠️ HONESTY CONTROLS — the whole point of this page is that it can be checked.
 *   - `doi` and `zenodoUrl` stay null until the record is ACTUALLY published on
 *     Zenodo. The page hides the "Cite this dataset" block while they are null.
 *     Never put a placeholder DOI here — a fake identifier is worse than none.
 *   - Same for `githubUrl`: null until the repo is public.
 *   - Figures are NOT duplicated here. They are imported from citation-study.ts
 *     and homecalc-proof.ts so this page can never contradict the study.
 */

export const RESEARCH = {
  title: "AI Citation Study: Two Sites, One Owner, Three Months",
  author: "Hami Tahm",
  version: "1.0",
  /** Fill in after the Zenodo record is published. Format: "10.5281/zenodo.XXXXXXX" */
  doi: null as string | null,
  /** The Zenodo record page. Fill in with the DOI. */
  zenodoUrl: null as string | null,
  /** Public GitHub mirror of the same files. Fill in once the repo exists. */
  githubUrl: null as string | null,
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  /** Where the raw CSV lives today — served from this site, always available. */
  csvPath: "/blog/ai-citation-study/dataset.csv",
  writeUpPath: "/blog/ai-citation-study/",
  methodologyPath: "/methodology/",
  caseStudyPath: "/case-studies/homecalc-ai-visibility/",
  contactEmail: "hami@hamitahm.com",
} as const;

/** The files in the published package, described for the download table. */
export const RESEARCH_FILES = [
  {
    name: "01_site_summary.csv",
    what: "Site-level totals, pages earning citations, growth-curve shape, for both sites.",
  },
  {
    name: "02_homecalc_most_cited_pages.csv",
    what: "The six most-cited pages on HomeCalc.ca, typed as Tool or Guide.",
  },
  {
    name: "03_homecalc_top_queries.csv",
    what: "Top grounding queries with citation counts and citation share.",
  },
  {
    name: "04_hamitahm_most_cited_pages.csv",
    what: "The six most-cited pages on HamiTahm.com — including the ones that embarrass me.",
  },
  {
    name: "05_commercial_reality.csv",
    what: "Citations vs. actual clicks and leads for the single most-cited page.",
  },
  {
    name: "METHODOLOGY.md",
    what: "Source console, window, pull date, what a citation is, how rounding is handled.",
  },
  {
    name: "LIMITATIONS.md",
    what: "Six stated limits, including n=2 and single-engine coverage.",
  },
  {
    name: "DATA_DICTIONARY.md",
    what: "Column-by-column definitions for every CSV.",
  },
] as const;

/**
 * The limits, restated on the page itself rather than buried in a download.
 * Kept short here; the full text lives in LIMITATIONS.md in the package.
 */
export const RESEARCH_LIMITS = [
  {
    head: "n = 2 sites, one owner, one market",
    body: "A strong signal, not a law. Two data points cannot support general claims about how AI citation works — only about what happened to these two sites, in Canada, in this window.",
  },
  {
    head: "One engine, not all of them",
    body: "This measures Microsoft Copilot and its partners, because that is the only engine that reports citations back to publishers. ChatGPT, Perplexity, Gemini and Google AI Overviews expose no equivalent data. Behaviour there may differ.",
  },
  {
    head: "Same-owner control is a confound",
    body: "Both sites share an owner, so there were no competing stakeholders and no legacy debt on the newer one. A business without that control should expect a slower, messier curve.",
  },
  {
    head: "Outcomes are published; the method is not",
    body: "The dataset shows what got cited, how much, and how fast. It does not explain how the pages were built to earn it — that is the paid work, and saying so plainly is more honest than pretending the dataset is a full recipe.",
  },
  {
    head: "Citations are not customers",
    body: "The most-cited page in the entire study produced zero leads over the same three-month window. That file is included on purpose.",
  },
  {
    head: "A selected sample, not a full export",
    body: "The tables show the leaders, not every page or query that received a citation. The complete per-page export is available on request.",
  },
  {
    head: "Bing's own numbers are aggregated, not raw",
    body: "Grounding queries are Bing's own aggregated groupings of prompt activity, not verbatim user prompts, and Bing itself describes AI Performance as sampled, aggregated reporting rather than a complete log. This dataset publishes those figures faithfully — it does not and cannot de-aggregate them.",
  },
] as const;
