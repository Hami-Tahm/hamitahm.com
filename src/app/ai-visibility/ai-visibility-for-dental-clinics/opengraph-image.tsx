import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility for Dental Clinics — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "VERTICAL · DENTAL",
    title: "AI Visibility for Dental Clinics",
    subtitle:
      "Get your clinic named when patients ask ChatGPT, Perplexity, or Google AI for a dentist.",
  });
}
