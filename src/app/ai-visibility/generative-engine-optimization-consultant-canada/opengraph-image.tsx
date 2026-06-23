import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Generative Engine Optimization Consultant — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "GEO · CONSULTANT",
    title: "Generative Engine Optimization",
    subtitle:
      "Build the entity signals AI models use to recognize, describe, and recommend your brand.",
  });
}
