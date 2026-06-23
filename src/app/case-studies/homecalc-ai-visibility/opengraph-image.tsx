import { renderOgImage } from "@/lib/og-image";
import { HOMECALC_PROOF } from "@/lib/homecalc-proof";

export const runtime = "edge";
export const alt = "HomeCalc.ca AI Visibility Case Study — Hami Tahm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    badge: "CASE STUDY · HOMECALC",
    title: `${HOMECALC_PROOF.citations} AI Citations in ${HOMECALC_PROOF.timeframe}`,
    subtitle: `How HomeCalc.ca went from near-zero to ${HOMECALC_PROOF.citations} citations on a YMYL site ${HOMECALC_PROOF.domainAge}.`,
  });
}
