import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Generative Engine Optimization Consultant — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "GEO · CONSULTANT",
    title: "Generative Engine Optimization",
    subtitle:
      "Build the entity signals AI models use to recognize, describe, and recommend your brand.",
  });
}
