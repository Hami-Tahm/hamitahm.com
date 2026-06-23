import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "AI Visibility Consultant in Canada — Hami Tahm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "CONSULTANT · CANADA",
    title: "AI Visibility Consultant in Canada",
    subtitle:
      "Consultant-led AI visibility for Canadian businesses. Productized, not an open-ended retainer.",
  });
}
