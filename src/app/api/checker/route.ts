import { NextResponse } from "next/server";

/**
 * POST /api/checker
 *
 * Receives an AI Visibility Checker submission, validates it, and forwards it
 * to the Google Apps Script webhook (env CHECKER_SHEET_WEBHOOK), which appends
 * a row to the leads Sheet AND emails hami@hamitahm.com.
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

  // ── CSV / spreadsheet formula-injection defence ──
  // This payload is appended to a Google Sheet. A value beginning with = + - @ (or a
  // couple of control chars) is interpreted by Sheets/Excel as a FORMULA when the cell
  // is later opened — a known injection vector that can exfiltrate data or run actions.
  // Neutralise it by prefixing a single quote, which forces the cell to plain text.
  // Also cap length so a giant payload can't be used to bloat the Sheet.
  const MAX = 300;
  const deFormula = (s: string) => {
    const t = s.slice(0, MAX);
    return /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
  };

  const domain = deFormula((body.domain || "").trim());
  const email = (body.email || "").trim().slice(0, MAX);
  const country = deFormula((body.country || "").trim());
  const engines = (Array.isArray(body.engines) ? body.engines : [])
    .slice(0, 10)
    .map((e) => deFormula(String(e).trim()));
  const keywords = (Array.isArray(body.keywords) ? body.keywords : [])
    .slice(0, 10)
    .map((k) => deFormula(String(k).trim()))
    .filter(Boolean);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!domain || !country || keywords.length === 0 || engines.length === 0 || !emailOk) {
    return NextResponse.json({ ok: false, error: "missing required fields" }, { status: 400 });
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    // email is validated by the strict regex above, so it can't start with a formula char
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
