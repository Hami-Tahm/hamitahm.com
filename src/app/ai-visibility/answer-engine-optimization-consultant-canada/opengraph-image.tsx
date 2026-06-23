import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Answer Engine Optimization Consultant — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "AEO · CONSULTANT",
    title: "Answer Engine Optimization",
    subtitle:
      "Structure your pages so AI engines extract you as the answer — not just rank you.",
  });
}
