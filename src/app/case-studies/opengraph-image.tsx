import { renderOgImage } from "@/lib/og-image";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

export const runtime = "edge";
export const alt = "AI Visibility Case Studies — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "CASE STUDIES",
    title: "AI Visibility, Proven — Not Promised",
    subtitle: `Documented results: a brand-new site to ${HOMECALC_PROOF.citations} AI citations, and AI engines that recommend Hami Tahm by name.`,
  });
}
