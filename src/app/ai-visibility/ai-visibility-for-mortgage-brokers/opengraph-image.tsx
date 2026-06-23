import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility for Mortgage Brokers — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "VERTICAL · MORTGAGE",
    title: "AI Visibility for Mortgage Brokers",
    subtitle:
      "Be the broker AI engines cite when Canadian buyers research their mortgage options.",
  });
}
