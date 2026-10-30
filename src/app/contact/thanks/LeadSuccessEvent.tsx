"use client";

import { useEffect } from "react";
import { flushPendingLeadEvent } from "@/lib/lead-event";

/** Pushes qualified_lead_submit once, only if the form left a confirmed pending record. */
export default function LeadSuccessEvent() {
  useEffect(() => {
    flushPendingLeadEvent();
  }, []);
  return null;
}
