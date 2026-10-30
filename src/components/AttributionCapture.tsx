"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/attribution";

/** Mounted once in the root layout: records first-touch UTM/gclid on landing. */
export function AttributionCapture() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
