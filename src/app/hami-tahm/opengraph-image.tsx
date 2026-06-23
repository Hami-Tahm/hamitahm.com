import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

export const runtime = "edge";
export const alt = "Hami Tahm — Canadian AI Visibility Consultant";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    badge: "ABOUT",
    title: "Hami Tahm",
    subtitle: `Canadian AI visibility consultant. Built HomeCalc.ca to ${HOMECALC_PROOF.citations} AI citations in ${HOMECALC_PROOF.timeframe}.`,
  });
}
