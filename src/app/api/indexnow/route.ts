import { NextResponse } from "next/server";
import {
  submitToIndexNow,
  getAllPrimaryUrls,
  INDEXNOW_HOST,
  INDEXNOW_KEY,
} from "@/lib/indexnow";

/**
 * POST /api/indexnow
 *
 * Submit URLs to IndexNow (Bing, Yandex, Naver, Seznam, Copilot).
 *
 * Auth: requires header `x-indexnow-secret` matching env `INDEXNOW_SECRET`.
 *       If the env var isn't set, the route refuses to run — prevents anyone
 *       from triggering submissions on a misconfigured deploy.
 *
 * Body (all optional):
 *   { "urls": ["https://hamitahm.com/some-path/", ...] }
 *   { "all": true }   // submit all primary URLs (full cluster + blog)
 *
 * Default behavior with no body: submits all primary URLs.
 */
export async function POST(req: Request) {
  const expected = process.env.INDEXNOW_SECRET;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_SECRET not configured on server" },
      { status: 500 },
    );
  }

  const provided = req.headers.get("x-indexnow-secret");
  if (provided !== expected) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  let body: { urls?: string[]; all?: boolean } = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const urls =
    body.all || !body.urls || body.urls.length === 0
      ? getAllPrimaryUrls()
      : body.urls;

  const result = await submitToIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

/**
 * GET /api/indexnow
 *
 * Health check — confirms key + host are wired up. Does NOT submit anything.
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    host: INDEXNOW_HOST,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    note: "POST with x-indexnow-secret header to submit URLs.",
  });
}
