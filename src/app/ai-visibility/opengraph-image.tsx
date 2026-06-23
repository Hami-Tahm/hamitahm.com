import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "HUB",
    title: "AI Visibility",
    subtitle:
      "Search is moving to ChatGPT, Perplexity, and Google AI Overviews. Show up where buyers ask.",
  });
}
