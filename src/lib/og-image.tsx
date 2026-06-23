import { ImageResponse } from "next/og";

/**
 * Shared template for per-route Open Graph images.
 *
 * Each route folder creates an `opengraph-image.tsx` that calls
 * `renderOgImage({ ... })`. Next.js routes that file to
 * `/<path>/opengraph-image` and uses it for the page's og:image.
 *
 * Design: warm cream background, teal accent, serif headline, mono strip.
 * Implementation is deliberately defensive for Satori (the renderer used
 * by next/og): every flex child has display:flex, all sizes are plain
 * numbers (no negative values), no conditional `null` children.
 */

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export type OgConfig = {
  /** Top-right chip — short context label. */
  badge?: string;
  /** Big serif headline. Keep ≤ 60 chars for a single line of impact. */
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
};

const BG = "#f4f1ea";
const INK = "#1a1817";
const MUTED = "#5a5448";
const ACCENT = "#0f6e78";
const FAINT = "#998d76";

export function renderOgImage(cfg: OgConfig) {
  const badge = cfg.badge ?? "AI VISIBILITY";
  const subtitle = cfg.subtitle ?? "";

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
          paddingTop: 72,
          paddingBottom: 72,
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {/* Top strip — branded chip + section badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 22,
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: ACCENT,
                display: "flex",
                marginRight: 14,
              }}
            />
            <div style={{ display: "flex" }}>hamitahm.com</div>
          </div>
          <div style={{ display: "flex", color: FAINT }}>{badge}</div>
        </div>

        {/* Headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 76,
              lineHeight: 1.06,
              color: INK,
              fontWeight: 500,
            }}
          >
            {cfg.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: MUTED,
              marginTop: subtitle ? 28 : 0,
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom strip — author + location */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "monospace",
            fontSize: 18,
            color: FAINT,
          }}
        >
          <div style={{ display: "flex" }}>HAMI TAHM · AI VISIBILITY CONSULTANT</div>
          <div style={{ display: "flex" }}>TORONTO · CANADA</div>
        </div>
      </div>
    ),
    { width: OG_WIDTH, height: OG_HEIGHT },
  );
}
