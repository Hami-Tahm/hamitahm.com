/**
 * qualified_lead_submit: the conversion event for the contact lead form.
 *
 * The form stores a PENDING record in sessionStorage only after the server confirms
 * delivery ({ ok: true, lead: true }) and then loads /contact/thanks/. The thanks page
 * pushes the event once and deletes the record, so:
 *   - a button click or a failed submit never produces the event,
 *   - a refresh or a direct visit to /contact/thanks/ does not either,
 *   - it fires on a full page where GTM has loaded, not during an unload.
 *
 * NO PII: the record and the event carry campaign fields and form metadata only.
 * Name, email, company, website and message never enter it.
 */

import { ATTRIBUTION_KEYS, type FirstTouch } from "./attribution";

export const LEAD_PENDING_KEY = "ht_lead_pending";
export const LEAD_EVENT = "qualified_lead_submit";

export type LeadEvent = {
  event: typeof LEAD_EVENT;
  form_name: string;
  lead_type: string;
  page_path: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  landing_path?: string;
};

/** Pure: builds the dataLayer payload from an allow-list only. Exported for tests. */
export function buildLeadEvent(
  meta: { form_name: string; lead_type: string; page_path: string },
  firstTouch: FirstTouch | null,
): LeadEvent {
  const ev: LeadEvent = {
    event: LEAD_EVENT,
    form_name: meta.form_name,
    lead_type: meta.lead_type,
    page_path: meta.page_path,
  };
  if (firstTouch) {
    for (const k of ATTRIBUTION_KEYS) {
      const v = firstTouch[k];
      if (v) ev[k] = v;
    }
    if (firstTouch.landing_path) ev.landing_path = firstTouch.landing_path;
  }
  return ev;
}

/** Called on /contact/thanks/. Pushes the pending event once, then clears it. */
export function flushPendingLeadEvent(): boolean {
  try {
    const raw = window.sessionStorage.getItem(LEAD_PENDING_KEY);
    if (!raw) return false;
    window.sessionStorage.removeItem(LEAD_PENDING_KEY);
    const ev = JSON.parse(raw) as LeadEvent;
    if (ev?.event !== LEAD_EVENT) return false;
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(ev as unknown as Record<string, unknown>);
    return true;
  } catch {
    return false;
  }
}
