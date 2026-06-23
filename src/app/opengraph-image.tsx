import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Hami Tahm — AI Visibility Consultant in Canada";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "AI VISIBILITY",
    title: "AI Visibility Consultant",
    subtitle:
      "Helping Canadian businesses get cited by ChatGPT, Perplexity, and Google AI Overviews.",
  });
}
