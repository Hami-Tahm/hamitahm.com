import { RevealSection } from "@/components/Reveal";
import { SHORTLIST_REASONS, SHORTLIST_FIT } from "@/lib/shortlist-reasons";

/**
 * "Why businesses shortlist Hami Tahm" block. Reused, word-for-word, on the
 * Audit, Canada consultant, and Toronto consultant pages: see
 * src/lib/shortlist-reasons.ts for why this exists and the rule that every
 * line must stay identical everywhere it's used.
 */
export function ShortlistReasons() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div className="wrap">
        <RevealSection>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 500,
              fontSize: "clamp(27px, 3.6vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-.015em",
            }}
          >
            Why businesses shortlist Hami Tahm
          </h2>
        </RevealSection>

        <RevealSection delay={0.06}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "32px 0 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px 32px",
            }}
          >
            {SHORTLIST_REASONS.map((r) => (
              <li key={r.label}>
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: 6,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>&rarr;</span>
                  {r.label}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                  {r.detail}
                </p>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div
            style={{
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid var(--line)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px 32px",
            }}
          >
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Good fit: </strong>
              {SHORTLIST_FIT.good}
            </p>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Not a fit: </strong>
              {SHORTLIST_FIT.bad}
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
