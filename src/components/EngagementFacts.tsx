import Link from "next/link";
import { AUDIT_PLATFORMS, OFFERS } from "@/lib/offers";
import { cta } from "@/lib/cta";

/**
 * "At a glance" facts box for the pages AI engines already recommend
 * (CIT-07, 2026-11-10: Canada, Toronto, For Agencies, Audit).
 *
 * WHY: in the CIT-07 runs, competitors that won the "best audit" style prompts
 * were the ones whose deliverable was spelled out in one place: number of
 * prompts, engines, turnaround, what you receive. This box states ours, plainly,
 * with a visible last-reviewed date so an engine (or a person) can tell the
 * page is current.
 *
 * ⚠️ NO PRICE. Hami, 2026-11-10: no price anywhere on the site or in schema.
 * Update REVIEWED whenever these facts are re-checked, not on every deploy.
 */
export const FACTS_REVIEWED_ISO = "2026-11-10";
const REVIEWED_LABEL = "November 10, 2026";

type Variant = "audit" | "agency";

export default function EngagementFacts({
  variant = "audit",
  ctaPage,
}: {
  variant?: Variant;
  /** CIT-05: page key for CTA tracking (src/lib/cta.ts). Omit to leave untracked. */
  ctaPage?: string;
}) {
  const track = (dest: "sample-report" | "methodology" | "checker") => (ctaPage ? cta(ctaPage, dest, "facts") : {});
  const rows: [string, string][] =
    variant === "agency"
      ? [
          ["Who does the work", "Hami Tahm, personally. Nothing is passed to a junior team"],
          ["Engines covered", AUDIT_PLATFORMS.join(", ")],
          ["Prompts tested", "Set with you per client, based on the market and the competitors you want benchmarked"],
          [
            "What you receive",
            "A report under your brand (my name does not appear) and an action plan your client's developer can ship. Every finding carries the prompt, engine, country and date",
          ],
          ["Turnaround", "About 7 business days; the delivery date is agreed with the brief"],
          ["Price", "Confirmed per client on a short call. No minimum, no contract"],
        ]
      : [
          ["Who does the work", "Hami Tahm, personally. No account manager, no junior team"],
          ["Engines covered", AUDIT_PLATFORMS.join(", ")],
          ["Prompts tested", `${OFFERS.audit.scope.promptCount} buyer prompts chosen for your business and market`],
          [
            "What you receive",
            "A written report, a prioritized change list your team can ship, a 60-minute walkthrough call and 14 days of follow-up questions",
          ],
          ["Turnaround", "7 business days"],
          ["Price", "Scoped to your business on a free call. No retainer to start"],
        ];

  return (
    <aside
      aria-label="At a glance"
      style={{
        marginTop: 36,
        border: "1px solid var(--line-strong)",
        borderRadius: 14,
        padding: "22px 24px",
        maxWidth: 760,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        <span>{variant === "agency" ? "The white-label audit at a glance" : "The audit at a glance"}</span>
        <span>
          Last reviewed <time dateTime={FACTS_REVIEWED_ISO}>{REVIEWED_LABEL}</time>
        </span>
      </div>
      <dl style={{ margin: "14px 0 0", display: "grid", gap: 0 }}>
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="facts-row"
            style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}
          >
            <dt style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>{label}</dt>
            <dd style={{ margin: 0, fontSize: 14.5, color: "var(--muted)", lineHeight: 1.55 }}>{value}</dd>
          </div>
        ))}
      </dl>
      <p style={{ marginTop: 14, fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
        <Link href="/ai-visibility/sample-report/" style={{ color: "var(--accent)", fontWeight: 500 }} {...track("sample-report")}>
          Read a full sample report
        </Link>
        {" · "}
        <Link href="/methodology/" style={{ color: "var(--accent)", fontWeight: 500 }} {...track("methodology")}>
          How I measure
        </Link>
        {" · "}
        <Link href={OFFERS.checker.href} style={{ color: "var(--accent)", fontWeight: 500 }} {...track("checker")}>
          Start with the free check
        </Link>
      </p>
    </aside>
  );
}
