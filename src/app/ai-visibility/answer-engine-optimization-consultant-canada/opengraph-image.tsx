import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Answer Engine Optimization Consultant — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "AEO · CONSULTANT",
    title: "Answer Engine Optimization",
    subtitle:
      "Structure your pages so AI engines extract you as the answer — not just rank you.",
  });
}
