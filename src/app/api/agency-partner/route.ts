import { NextResponse } from "next/server";

/**
 * POST /api/agency-partner
 *
 * Receives a white-label partnership enquiry from /for-agencies/, validates it, and
 * forwards it to a Google Apps Script webhook (env AGENCY_SHEET_WEBHOOK) which appends
 * a row to a sheet AND emails hami@hamitahm.com.
 *
 * WHY THIS DOES NOT REUSE CHECKER_SHEET_WEBHOOK, even though the mechanism is identical:
 * that webhook's Apps Script expects the checker payload and replies with one of two
 * templated confirmation emails ("your report is coming" / "your market isn't covered").
 * An agency partnership enquiry is neither, so reusing it would drop partner leads into
 * the checker leads sheet and send the enquirer a confirmation about a report nobody
 * ordered. A second webhook keeps a working live flow untouched, which is worth more
 * than the one env var it costs.
 *
 * ⚠️ Until AGENCY_SHEET_WEBHOOK is set in Vercel this route returns 500 and the form
 * cannot submit. That is deliberate: failing loudly at the server beats accepting a
 * lead and silently discarding it.
 */
export async function POST(req: Request) {
  const webhook = process.env.AGENCY_SHEET_WEBHOOK;
  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: "AGENCY_SHEET_WEBHOOK not configured" },
      { status: 500 },
    );
  }

  let body: {
    name?: string;
    agency?: string;
    website?: string;
    email?: string;
    message?: string;
    company?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  /*
   * Honeypot. The form renders a `company` field that is hidden from people and left
   * empty by them; most naive bots fill every input they find. Anything arriving with
   * it populated is answered with 200 rather than an error, because telling a bot
   * precisely which field caught it is how the next attempt gets past.
   */
  if ((body.company || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  /*
   * CSV / spreadsheet formula-injection defence, same as /api/checker.
   *
   * This payload is appended to a Google Sheet, where a value starting with = + - @
   * is read as a FORMULA when the cell is opened later: a known vector for running
   * actions or exfiltrating data out of the sheet. A leading single quote forces the
   * cell to plain text. The length cap stops one submission bloating the sheet.
   */
  const MAX = 500;
  const deFormula = (s: string) => {
    const t = s.slice(0, MAX);
    return /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
  };

  const name = deFormula((body.name || "").trim());
  const agency = deFormula((body.agency || "").trim());
  const website = deFormula((body.website || "").trim());
  const email = (body.email || "").trim().slice(0, MAX);
  const message = deFormula((body.message || "").trim());

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !agency || !emailOk) {
    return NextResponse.json({ ok: false, error: "missing required fields" }, { status: 400 });
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    formType: "agency-partner",
    name,
    agency,
    website,
    // validated by the strict regex above, so it cannot begin with a formula character
    email,
    message,
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
