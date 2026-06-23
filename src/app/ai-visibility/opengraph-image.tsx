import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "HUB",
    title: "AI Visibility",
    subtitle:
      "Search is moving to ChatGPT, Perplexity, and Google AI Overviews. Show up where buyers ask.",
  });
}
