import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Free AI Visibility Checker — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "FREE TOOL",
    title: "Free AI Visibility Checker",
    subtitle:
      "Does ChatGPT, Google AI Overview, or Gemini recommend you — or a competitor? A real analyst checks and emails your report, free.",
  });
}
