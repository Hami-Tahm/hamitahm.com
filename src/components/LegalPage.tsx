import Link from "next/link";
import { RevealSection } from "./Reveal";
import { LEGAL } from "@/lib/legal";

/**
 * Shared shell for /privacy, /terms and /disclaimer.
 *
 * These pages are `noindex` on purpose. They exist for users and for legal
 * compliance, not for search. Letting thin boilerplate pages into the index
 * dilutes the topical focus we spent real effort building.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <RevealSection>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12.5px",
              letterSpacing: ".18em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 26,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            Legal
          </div>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 500,
              fontSize: "clamp(34px, 5vw, 50px)",
              lineHeight: 1.08,
              letterSpacing: "-.03em",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              marginTop: 22,
              fontSize: 18,
              color: "var(--muted)",
              lineHeight: 1.65,
            }}
          >
            {intro}
          </p>

          <p
            style={{
              marginTop: 16,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--faint)",
            }}
          >
            Last updated {LEGAL.displayDate} · {LEGAL.operator} · {LEGAL.location}
          </p>
        </RevealSection>

        <RevealSection delay={0.08}>
          <div
            className="prose"
            style={{ marginTop: 46, borderTop: "1px solid var(--line)", paddingTop: 40 }}
          >
            {children}
          </div>
        </RevealSection>

        <RevealSection delay={0.14}>
          <div
            style={{
              marginTop: 50,
              paddingTop: 26,
              borderTop: "1px solid var(--line)",
              fontFamily: "var(--mono)",
              fontSize: 12.5,
              color: "var(--faint)",
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <Link href="/privacy/" style={{ color: "var(--muted)" }}>
              Privacy
            </Link>
            <Link href="/terms/" style={{ color: "var(--muted)" }}>
              Terms
            </Link>
            <Link href="/disclaimer/" style={{ color: "var(--muted)" }}>
              Disclaimer
            </Link>
            <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--muted)" }}>
              {LEGAL.email}
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--serif)",
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: "-.01em",
        marginTop: 40,
        marginBottom: 14,
        color: "var(--ink)",
      }}
    >
      {children}
    </h2>
  );
}
