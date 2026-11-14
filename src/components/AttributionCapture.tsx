"use client";

import { useEffect } from "react";
import { captureFirstTouch, captureTouches } from "@/lib/attribution";

/**
 * Mounted once in the root layout. Records the legacy first-touch UTM/gclid record
 * (used by qualified_lead_submit) and the v2 first/last/session touches that every
 * lead form now sends (see LEAD ATTRIBUTION v2 in src/lib/attribution.ts).
 */
export function AttributionCapture() {
  useEffect(() => {
    captureFirstTouch();
    captureTouches();
  }, []);
  return null;
}
