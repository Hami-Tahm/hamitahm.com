import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility Audit — $1,500 CAD flat — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "AUDIT · $1,500 CAD",
    title: "AI Visibility Audit",
    subtitle:
      "7-day diagnosis of where AI engines mention you — and the prioritized fix plan.",
  });
}
