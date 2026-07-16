import { STUDY, HOMECALC_PAGES, HOMECALC_QUERIES } from "@/lib/citation-study";

/**
 * GET /blog/ai-citation-study/dataset.csv
 *
 * ── WHY (GEO) ──
 * Original data gets cited when it is genuinely re-usable. Publishing the underlying
 * numbers as a plain CSV — not just a styled table — lets a journalist, an SEO blogger,
 * or an AI answer engine take the data, verify it, and reference the source. It turns a
 * "look how well I did" page into a "here is a dataset you can cite" page. Same numbers
 * as the article, from the same single source of truth (citation-study.ts), so the CSV
 * can never drift from what the page claims.
 *
 * Every value is Bing Webmaster → AI Performance, window Apr 19 – Jul 8 2026.
 */
export function GET() {
  const rows: string[] = [];

  rows.push(`# AI Citation Study — HomeCalc.ca — top cited pages & queries (selected sample)`);
  rows.push(`# This is a selected sample (top pages + top queries), not the full per-page export.`);
  rows.push(`# Full export available on request: hami@hamitahm.com`);
  rows.push(`# Source: ${STUDY.source}`);
  rows.push(`# Window: ${STUDY.windowStart} to ${STUDY.windowEnd}`);
  rows.push(`# Pulled: ${STUDY.pulledOn}`);
  rows.push(`# Published by Hami Tahm — https://hamitahm.com/blog/ai-citation-study/`);
  rows.push(`# Free to cite with attribution.`);
  rows.push("");

  rows.push(`section,label,type,citations,citation_share`);
  for (const p of HOMECALC_PAGES) {
    rows.push(`most_cited_pages,"${p.label}",${p.type},${p.citations},`);
  }
  for (const q of HOMECALC_QUERIES) {
    rows.push(`top_queries,"${q.query}",,${q.citations},${q.share}`);
  }

  const csv = rows.join("\n") + "\n";

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="homecalc-ai-citation-study.csv"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
