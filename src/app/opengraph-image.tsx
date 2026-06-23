import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Hami Tahm — AI Visibility Consultant in Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "AI VISIBILITY",
    title: "AI Visibility Consultant",
    subtitle:
      "Helping Canadian businesses get cited by ChatGPT, Perplexity, and Google AI Overviews.",
  });
}
