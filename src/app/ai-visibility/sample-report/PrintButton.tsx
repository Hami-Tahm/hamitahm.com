"use client";

/**
 * "Save as PDF" for the sample report.
 *
 * ⚠️ THIS IS DELIBERATELY NOT A LINK TO A STATIC PDF IN /public.
 * A hand-built PDF would drift from offers.ts the first time a price changed, and a
 * stale document with a download button pointed at it is worse than no download at
 * all, on a page whose whole argument is that the numbers are current and sourced.
 * Printing the live page means the buyer's PDF can never disagree with the site.
 *
 * The print styles that make the output readable (hiding nav, chrome and CTAs, and
 * keeping tables from splitting across pages) live in the @media print block in
 * globals.css. If you add a screen-only element to the report page, give it
 * className="no-print".
 */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      style={{
        display: "inline-block",
        padding: "13px 22px",
        border: "1px solid var(--line-strong)",
        background: "transparent",
        borderRadius: 4,
        fontSize: 15,
        fontWeight: 600,
        fontFamily: "var(--sans)",
        color: "var(--ink)",
        cursor: "pointer",
      }}
    >
      Save as PDF
    </button>
  );
}
