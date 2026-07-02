import { NextResponse } from "next/server";

/**
 * POST /api/checker
 *
 * Receives an AI Visibility Checker submission, validates it, and forwards it
 * to the Google Apps Script webhook (env CHECKER_SHEET_WEBHOOK), which appends
 * a row to the leads Sheet AND emails TahmHami@gmail.com.
 *
 * The webhook URL lives in .env.local / Vercel env only — never in the repo.
 */
export async function POST(req: Request) {
  const webhook = process.env.CHECKER_SHEET_WEBHOOK;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: "CHECKER_SHEET_WEBHOOK not configured" },
      { status: 500 },
    );
  }

  let body: {
    engines?: string[];
    domain?: string;
    keywords?: string[];
    country?: string;
    email?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const domain = (body.domain || "").trim();
  const email = (body.email || "").trim();
  const country = (body.country || "").trim();
  const engines = Array.isArray(body.engines) ? body.engines : [];
  const keywords = Array.isArray(body.keywords)
    ? body.keywords.map((k) => String(k).trim()).filter(Boolean)
    : [];

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!domain || !country || keywords.length === 0 || engines.length === 0 || !emailOk) {
    return NextResponse.json({ ok: false, error: "missing required fields" }, { status: 400 });
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    domain,
    email,
    country,
    engines,
    keywords,
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
  } catch {
    return NextResponse.json({ ok: false, error: "delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
