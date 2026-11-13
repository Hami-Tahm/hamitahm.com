/**
 * CIT-06 (2026-11-13): accessible comparison table for the vendor comparison
 * articles. A real <table> with a <caption>, column headers (scope="col") and a
 * row header (scope="row") per row, so screen readers announce "Scrunch, Cheapest
 * published plan: ..." instead of reading a CSS grid as loose text. Styled to
 * match the grid layout it replaces; scrolls horizontally on narrow screens.
 */
export default function ComparisonTable({
  caption,
  columns,
  rows,
  minWidth = 560,
  rowHeader = "Criterion",
}: {
  caption: string;
  /** Header for the row-label column; visually hidden, read by screen readers. */
  rowHeader?: string;
  columns: readonly string[];
  rows: readonly { label: string; values: readonly string[] }[];
  minWidth?: number;
}) {
  const cell: React.CSSProperties = {
    padding: "14px 6px",
    borderBottom: "1px solid var(--line)",
    verticalAlign: "top",
    textAlign: "left",
  };
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={caption}
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line-strong)",
        borderRadius: 10,
        padding: "24px 16px",
        margin: "0 0 26px",
        fontFamily: "var(--sans)",
        fontSize: 13,
        overflowX: "auto",
      }}
    >
      <table style={{ width: "100%", minWidth, borderCollapse: "collapse", lineHeight: 1.5 }}>
        <caption
          style={{
            captionSide: "top",
            textAlign: "left",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--faint)",
            paddingBottom: 10,
          }}
        >
          {caption}
        </caption>
        <thead>
          <tr>
            <th scope="col" style={{ ...cell, paddingTop: 0, width: "28%" }}>
              <span
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                  whiteSpace: "nowrap",
                }}
              >
                {rowHeader}
              </span>
            </th>
            {columns.map((c) => (
              <th
                key={c}
                scope="col"
                style={{
                  ...cell,
                  paddingTop: 0,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" style={{ ...cell, color: "var(--ink)", fontWeight: 600 }}>
                {row.label}
              </th>
              {row.values.map((v, i) => (
                <td key={i} style={{ ...cell, color: "var(--muted)" }}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
