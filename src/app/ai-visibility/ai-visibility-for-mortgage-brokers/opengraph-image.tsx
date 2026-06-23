import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility for Mortgage Brokers — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "VERTICAL · MORTGAGE",
    title: "AI Visibility for Mortgage Brokers",
    subtitle:
      "Be the broker AI engines cite when Canadian buyers research their mortgage options.",
  });
}
