import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility Audit, Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "AI VISIBILITY AUDIT",
    title: "AI Visibility Audit",
    subtitle:
      "7-day diagnosis of where AI engines mention you, and the prioritized fix plan.",
  });
}
