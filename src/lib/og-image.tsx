import { ImageResponse } from "next/og";

/**
 * Shared template for per-route Open Graph images.
 *
 * Each route folder that wants its own OG image creates an
 * `opengraph-image.tsx` file that calls `renderOgImage({ ... })`.
 * Next.js routes that file to `/<path>/opengraph-image` and registers it
 * as the page's `og:image` automatically.
 *
 * Design language matches the site: warm cream background (#f4f1ea),
 * teal accent (#0f6e78), serif headline, monospace metadata strip.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

export type OgConfig = {
  /** Top-left chip — short context label (e.g. "Case Study", "Audit"). */
  badge?: string;
  /** Big serif headline — keep ≤ 60 chars for a single line of impact. */
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  /** Bottom-left identifier. Override only for non-Hami contexts. */
  footerLeft?: string;
  /** Bottom-right location/tag. */
  footerRight?: string;
};

const BG = "#f4f1ea";
const INK = "#1a1817";
const MUTED = "#5a5448";
const ACCENT = "#0f6e78";
const FAINT = "#998d76";

export function renderOgImage(cfg: OgConfig): ImageResponse {
  const {
    badge = "AI VISIBILITY",
    title,
    subtitle,
    footerLeft = "HAMI TAHM · AI VISIBILITY CONSULTANT",
    footerRight = "TORONTO · CANADA",
  } = cfg;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Soft accent glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(15,110,120,0.10)",
            display: "flex",
          }}
        />

        {/* Top strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: ACCENT,
                display: "flex",
              }}
            />
            <div style={{ display: "flex" }}>hamitahm.com</div>
          </div>
          <div style={{ color: FAINT, display: "flex" }}>{badge}</div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 76,
              lineHeight: 1.06,
              letterSpacing: -1.2,
              color: INK,
              fontWeight: 500,
              display: "flex",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: MUTED,
                marginTop: 28,
                maxWidth: 940,
                display: "flex",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 1.5,
            color: FAINT,
          }}
        >
          <div style={{ display: "flex" }}>{footerLeft}</div>
          <div style={{ display: "flex" }}>{footerRight}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
