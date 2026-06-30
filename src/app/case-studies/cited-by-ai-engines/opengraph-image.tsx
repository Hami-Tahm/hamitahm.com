import { renderOgImage } from "@/lib/og-image";
import { SNAPSHOT } from "@/lib/ai-citation-proof";

export const runtime = "edge";
export const alt = "AI engines already recommend Hami Tahm — Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "CASE STUDY · CITED BY AI",
    title: "AI Engines Already Recommend Hami Tahm",
    subtitle: `Ask ChatGPT, Perplexity, Google AI Mode, or Grok who does AI visibility in Toronto — they name Hami Tahm. Snapshot, ${SNAPSHOT.displayDate}.`,
  });
}
