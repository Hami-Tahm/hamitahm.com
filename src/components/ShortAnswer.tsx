/**
 * A "Short answer" block for the top of answer-style articles.
 *
 * ── WHY THIS EXISTS (AEO) ──
 * Answer engines lift a concise, self-contained, direct answer far more readily than
 * they lift a paragraph that eases into the point. Putting a labelled, ≤ ~50-word,
 * plain-language answer at the very top of a page — before any preamble — gives ChatGPT,
 * Perplexity, Google AI Overviews and Copilot something clean to quote.
 *
 * It renders visibly (good for humans skimming) AND is plain text in the DOM (good for
 * extraction). Keep the answer genuinely short and genuinely answer the H1's question —
 * a "short answer" that rambles or dodges is worse than none.
 */
export function ShortAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div
      // data attribute is a low-cost, machine-legible hint about what this block is.
      data-short-answer
      style={{
        border: "1px solid var(--line)",
        borderLeft: "3px solid var(--accent)",
        background: "var(--accent-soft)",
        borderRadius: 4,
        padding: "18px 22px",
        margin: "28px 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 8,
        }}
      >
        In short
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 17,
          lineHeight: 1.6,
          color: "var(--ink)",
          fontWeight: 450,
        }}
      >
        {children}
      </p>
    </div>
  );
}
