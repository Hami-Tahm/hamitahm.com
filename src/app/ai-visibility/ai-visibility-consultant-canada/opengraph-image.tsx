import { renderOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility Consultant in Canada — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "CONSULTANT · CANADA",
    title: "AI Visibility Consultant in Canada",
    subtitle:
      "Consultant-led AI visibility for Canadian businesses. Productized, not an open-ended retainer.",
  });
}
