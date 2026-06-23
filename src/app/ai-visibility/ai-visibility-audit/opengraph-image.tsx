import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility Audit — $1,500 CAD flat — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "AUDIT · $1,500 CAD",
    title: "AI Visibility Audit",
    subtitle:
      "7-day diagnosis of where AI engines mention you — and the prioritized fix plan.",
  });
}
