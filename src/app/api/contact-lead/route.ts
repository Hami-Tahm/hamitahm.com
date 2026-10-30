import { NextResponse } from "next/server";

/**
 * POST /api/contact-lead
 *
 * The qualified-lead form on /contact/ (Google Ads pilot, 2026-10-30). Validates the
 * lead and forwards it to the SAME Apps Script webhook the /for-agencies/ form already
 * uses (env AGENCY_SHEET_WEBHOOK), which appends a row to the Leads sheet and emails
 * hami@hamitahm.com. Reusing it means no new secret, provider or script: the delivery
 * path is one that is already live. The lead type and campaign fields travel inside
 * `message`, because the deployed script only maps name/agency/website/email/message.
 *
 * The webhook URL is server-only (Vercel env), never sent to the browser.
 *
 * Response contract the client relies on:
 *   200 { ok: true, lead: true }  -> delivered; the client may record a conversion
 *   200 { ok: true }              -> honeypot hit; looks fine to a bot, NOT a lead
 *   400 / 500 / 502 { ok: false } -> not delivered; the client shows an error
 */

const MAX = 500;
const MAX_MESSAGE = 2000;

const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "landing_path",
] as const;

/** Sheet formula-injection defence, same as /api/agency-partner and /api/checker. */
function clean(v: unknown, max = MAX): string {
  const t = String(v ?? "").trim().slice(0, max);
  return /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
}

export async function POST(req: Request) {
  const webhook = process.env.AGENCY_SHEET_WEBHOOK;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  // Honeypot: hidden field people never fill. Answer like a success, but never as a lead.
  if (String(body.fax ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const company = clean(body.company);
  const website = clean(body.website);
  const email = String(body.email ?? "").trim().slice(0, MAX);
  const need = clean(body.need, MAX_MESSAGE);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!emailOk) errors.push("email");
  if (!company) errors.push("company");
  if (!website) errors.push("website");
  if (need.length < 10) errors.push("need");
  if (errors.length) {
    return NextResponse.json({ ok: false, error: "invalid", fields: errors }, { status: 400 });
  }

  const campaignIn = (body.campaign ?? {}) as Record<string, unknown>;
  const campaignLines = CAMPAIGN_KEYS.map((k) => `${k}: ${clean(campaignIn[k], 150) || "(none)"}`);
  const pagePath = clean(body.page_path, 150) || "/contact/";

  const payload = {
    submittedAt: new Date().toISOString(),
    formType: "contact-lead",
    name,
    agency: company,
    website,
    email,
    message: [
      need,
      "",
      "---",
      "Lead type: qualified contact lead (hamitahm.com contact form)",
      `Form page: ${pagePath}`,
      ...campaignLines,
    ].join("\n"),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    // Apps Script answers 200 even when the script throws; only { ok: true } counts.
    const out = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!out || out.ok !== true) throw new Error("webhook reported failure");
  } catch {
    return NextResponse.json({ ok: false, error: "delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, lead: true });
}
