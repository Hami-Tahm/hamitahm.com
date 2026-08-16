"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/**
 * The engine list, ordered: live first, then the rest of the paid-audit six, then
 * engines outside the audit scope.
 *
 * ⚠️ Google AI Mode was removed 2026-08-11. Not because it is the same thing as AI
 * Overviews — Google states they may use different models and return different links,
 * and every tracking vendor lists them separately — but because it is not one of the
 * six platforms AUDIT_PLATFORMS commits to, so offering it here promised a scope the
 * paid product doesn't cover. If AI Mode is ever added to the audit, add it back.
 *
 * Keep this list a subset of AUDIT_PLATFORMS plus clearly-extra engines. A free
 * checker that covers surfaces the audit doesn't is a support ticket waiting to
 * happen.
 *
 * `tier` replaced the old `active` flag on 2026-08-11. The inactive engines used to
 * say "· soon", which promises a free upgrade that isn't coming — the other three
 * platforms are part of the paid audit, not a roadmap item. Saying so is both true
 * and better positioning: the disabled buttons now show what $1,500 adds instead of
 * implying the free tier will eventually cover everything.
 *
 * Grok and Meta AI are labelled "on request" rather than "in the audit" on purpose.
 * AUDIT_PLATFORMS is six, and the word "six" is hardcoded in 15 places across the
 * site. Saying "in the audit" here without changing all of that would promise a
 * scope the audit pages contradict on the very next click — the exact class of bug
 * this file's other comments exist to prevent.
 *
 * If the audit ever moves to eight platforms: change AUDIT_PLATFORMS, then use
 * AUDIT_PLATFORM_COUNT_WORD everywhere instead of the literal "six", then flip these
 * two to tier "audit".
 */
const AUDIT_URL = "/ai-visibility/ai-visibility-audit/";

/**
 * COUNTRY IS A FIXED LIST, NOT FREE TEXT (2026-08-15).
 *
 * It was already required, but as an open input with "Canada" as the placeholder.
 * That produced unusable values — "USA", "us", "United States of America", blank
 * variants — for a field that is not decoration: every one of these engines returns
 * different answers depending on where the search runs from, so the country decides
 * how the check is actually performed. A typo silently produces a wrong report.
 *
 * Canada only. That matches the rest of the site — `areaServed` in layout.tsx and
 * the "Canadian businesses" line repeated across ~25 places — so the form no longer
 * accepts a market the site does not claim to serve.
 *
 * ⚠️ TWO OUTCOMES, NOT ONE. Do not "simplify" this back to a single path.
 *
 * Somewhere-else submissions are ACCEPTED, not blocked. They are a waitlist: the
 * visitor is told plainly that the service isn't available for their market yet and
 * that they'll hear when it is. A blocked form loses that person silently; an
 * accepted one turns an unservable lead into a record of demand, which is the only
 * evidence that would ever justify opening a second market.
 *
 * Which is why the free-text country box appears when they pick it. A waitlist you
 * can't segment by market is not a waitlist — without the actual country there is no
 * way to know who to write to when a market opens, and the promise becomes empty.
 *
 * `scope` in the payload is what the Apps Script webhook branches on to decide WHICH
 * confirmation email to send. If you rename these two values, change the webhook in
 * the same sitting or half the senders get the wrong email.
 */
const COUNTRIES = ["Canada"] as const;
const COUNTRY_OTHER = "Other";
type Scope = "canada" | "waitlist";

type Tier = "free" | "audit" | "request";

const ENGINES: readonly { id: string; label: string; tier: Tier }[] = [
  { id: "chatgpt", label: "ChatGPT", tier: "free" },
  { id: "ai-overview", label: "Google AI Overview", tier: "free" },
  { id: "gemini", label: "Gemini", tier: "free" },
  { id: "perplexity", label: "Perplexity", tier: "audit" },
  { id: "claude", label: "Claude", tier: "audit" },
  { id: "copilot", label: "Microsoft Copilot", tier: "audit" },
  { id: "grok", label: "Grok", tier: "request" },
  { id: "meta-ai", label: "Meta AI", tier: "request" },
];

type Status = "idle" | "submitting" | "done" | "error";

export default function CheckerForm() {
  const [engines, setEngines] = useState<string[]>([
    "chatgpt",
    "ai-overview",
    "gemini",
  ]);
  const [domain, setDomain] = useState("");
  const [kw1, setKw1] = useState("");
  const [kw2, setKw2] = useState("");
  const [kw3, setKw3] = useState("");
  /*
   * COMPETITORS ARE SHOWN BUT LOCKED (2026-08-11).
   *
   * Naming who the engines recommend instead of you is the most persuasive line in
   * any report, and it was being produced by hand, free, on every submission. So it
   * is audit-only now.
   *
   * Deliberately still VISIBLE rather than deleted: a disabled field labelled "in the
   * audit" tells a visitor what they are not getting, which is worth more than a gap
   * they never notice. Deleting it removed the pitch along with the work.
   *
   * The API and Apps Script still accept a `competitors` array, so the sheet's
   * columns are unaffected; it arrives empty from this form.
   */
  const [country, setCountry] = useState("");
  /** Only used when `country === COUNTRY_OTHER`. See the waitlist note above. */
  const [otherCountry, setOtherCountry] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  /**
   * Fires once, on the visitor's first interaction with the form. The gap between
   * `checker_start` and `ai_checker_submit` is the form's abandonment rate — the
   * single most useful number for improving this step of the funnel, and one that
   * submit-only tracking cannot show.
   */
  const isWaitlist = country === COUNTRY_OTHER;

  const startedRef = useRef(false);
  function markStarted() {
    if (startedRef.current) return;
    startedRef.current = true;
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "checker_start" });
  }

  function toggle(id: string) {
    markStarted();
    setEngines((cur) =>
      cur.includes(id) ? cur.filter((e) => e !== id) : [...cur, id],
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!domain.trim() || !kw1.trim() || !country.trim() || !email.trim()) {
      setErr("Please fill in your domain, at least one keyword, country, and email.");
      return;
    }
    if (isWaitlist && !otherCountry.trim()) {
      setErr("Please tell me which country, so I can let you know when it opens.");
      return;
    }
    if (engines.length === 0) {
      setErr("Select at least one AI engine to check.");
      return;
    }
    // The country that actually gets recorded. For a waitlist entry that is the
    // market they typed, never the literal string "Other" — an unsegmentable
    // waitlist can't be acted on, which would make the promise in the email empty.
    const resolvedCountry = isWaitlist ? otherCountry.trim() : country.trim();
    const scope: Scope = isWaitlist ? "waitlist" : "canada";
    setStatus("submitting");
    try {
      const res = await fetch("/api/checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          engines,
          domain: domain.trim(),
          keywords: [kw1, kw2, kw3].map((k) => k.trim()).filter(Boolean),
          // Kept in the payload for the sheet's column layout; the free form no
          // longer collects competitors. See the note above.
          competitors: [] as string[],
          country: resolvedCountry,
          // Tells the webhook which confirmation email to send. See the note above.
          scope,
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error("bad status");
      if (typeof window !== "undefined") {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "ai_checker_submit",
          engines,
          country: resolvedCountry,
          // Keep these separable in GA4 — a waitlist signup is demand for a market
          // that doesn't exist yet, not a delivered report. Counting them as one
          // number would overstate the funnel.
          scope,
        });
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setErr("Something went wrong. Please try again, or email hami@hamitahm.com.");
    }
  }

  /*
   * WAITLIST CONFIRMATION — deliberately promises nothing on a clock.
   *
   * The Canada screen below commits to a report within one business day. Reusing it
   * here would be the worst possible outcome: someone waits a day for a report that
   * is never coming. So this screen says the service isn't available, thanks them,
   * and states the only thing that is actually true — that they'll hear if it opens.
   *
   * "if" and not "when". There is no dated plan to open another market, and a
   * confirmation screen is not the place to invent one.
   */
  if (status === "done" && isWaitlist) {
    return (
      <div className="proof-card" style={{ padding: "40px 32px" }}>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 500,
            color: "var(--accent)",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Thank you — you&rsquo;re on the list.
        </div>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" }}>
          I&rsquo;m sorry — the free check doesn&rsquo;t cover{" "}
          <strong style={{ color: "var(--ink)" }}>{otherCountry.trim()}</strong> yet.
          These engines answer differently depending on the country the search runs
          from, and I only run this for Canada right now. Sending you a report from
          the wrong market would tell you the wrong thing, so I&rsquo;d rather say so.
        </p>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" }}>
          Your details are saved. If I open{" "}
          <strong style={{ color: "var(--ink)" }}>{otherCountry.trim()}</strong>,
          you&rsquo;ll be among the first to hear — and a confirmation of this is on
          its way to your inbox now.
        </p>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          In the meantime the writing below applies anywhere: how these engines pick
          who to cite doesn&rsquo;t change at the border.{" "}
          <Link href="/blog/" style={{ color: "var(--accent)", fontWeight: 600 }}>
            Read the guides →
          </Link>
        </p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="proof-card" style={{ padding: "40px 32px" }}>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 500,
            color: "var(--accent)",
            marginBottom: 26,
            textAlign: "center",
          }}
        >
          You&rsquo;re all set.
        </div>

        {/*
          Two steps, not one paragraph. Since the auto-confirmation went live, two
          separate things happen on two different clocks — an email that is already
          in their inbox, and a report that takes a day. Blurring those into one
          block is what makes people think the report itself is late.
        */}
        <Step
          marker="1"
          when="Just now"
          title="A confirmation email is already in your inbox"
          body="It lists the exact domain, keywords, country and engines you asked me to check — so you can make sure I got it right. Reply to it if you want to change a keyword before I start."
        />
        <Step
          marker="2"
          when="Within one business day"
          title="Your report arrives"
          body="I run each search by hand, record the date and country every answer came from, and send you exactly what came back — including which businesses the engines were recommending instead of you."
        />

        {/*
          Deliverability note, deliberately the loudest element on this screen.
          Both messages are cold mail to an address someone just typed into a form —
          the exact profile Gmail and Outlook route to Promotions or Spam. Saying this
          while they are still on the page, still expecting it, is the cheapest way to
          stop a delivered report from being recorded as a non-response.
        */}
        <div
          style={{
            marginTop: 26,
            padding: "18px 20px",
            border: "1px solid var(--accent)",
            borderRadius: 10,
            background: "var(--accent-soft)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.5,
            }}
          >
            Don&rsquo;t see the confirmation email? Check your spam or promotions
            folder.
          </p>
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 14.5,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            Both emails come from{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
              hami@hamitahm.com
            </strong>
            . Add it to your contacts now and the report won&rsquo;t get filtered
            tomorrow.
          </p>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 15,
    fontFamily: "var(--sans)",
    color: "var(--ink)",
    background: "var(--bg, #fff)",
    border: "1px solid var(--line-strong)",
    borderRadius: 10,
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--sans)",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ink)",
    marginBottom: 7,
  };

  return (
    <form
      onSubmit={submit}
      // onChange bubbles from every input inside the form, so one handler covers
      // them all; the engine buttons call markStarted() directly since they aren't inputs.
      onChange={markStarted}
      className="proof-card"
      style={{ padding: "32px 30px" }}
    >
      {/* Engines */}
      <div style={{ marginBottom: 24 }}>
        <span id="cw-engines-label" style={labelStyle}>Which AI engines should we check?</span>
        <div role="group" aria-labelledby="cw-engines-label" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {ENGINES.map((eng) => {
            const on = engines.includes(eng.id);
            const free = eng.tier === "free";
            return (
              <button
                key={eng.id}
                type="button"
                disabled={!free}
                aria-pressed={on}
                title={
                  eng.tier === "audit"
                    ? "Included in the $1,500 AI Visibility Audit"
                    : eng.tier === "request"
                      ? "Available on request — email me before booking"
                      : undefined
                }
                onClick={() => free && toggle(eng.id)}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13.5,
                  fontWeight: 500,
                  padding: "9px 15px",
                  borderRadius: 999,
                  cursor: free ? "pointer" : "not-allowed",
                  border: on
                    ? "1px solid var(--accent)"
                    : "1px solid var(--line-strong)",
                  background: on ? "var(--accent)" : "transparent",
                  color: on ? "#fff" : free ? "var(--ink)" : "var(--faint)",
                  opacity: free ? 1 : 0.6,
                  transition: "all .15s",
                }}
              >
                {eng.label}
                {eng.tier === "audit" && (
                  <span style={{ fontSize: 10, marginInlineStart: 6, opacity: 0.85 }}>
                    &middot; in the audit
                  </span>
                )}
                {eng.tier === "request" && (
                  <span style={{ fontSize: 10, marginInlineStart: 6, opacity: 0.85 }}>
                    &middot; on request
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p
          style={{
            fontSize: 12.5,
            color: "var(--faint)",
            marginTop: 10,
            lineHeight: 1.5,
          }}
        >
          The free check covers the three above. Perplexity, Claude and Microsoft
          Copilot are part of the{" "}
          <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
            $1,500 AI Visibility Audit
          </Link>{" "}
          {/*
            Deliberately does NOT state prompt counts or how many times each is run.
            That is the method, and the method is the product — same rule as the one
            in citation-study.ts: publish the outcome, never the mechanism.
          */}
          &mdash; six platforms, a full prompt set, and competitor comparison. Grok
          and Meta AI can be added on request.
        </p>
      </div>

      {/* Domain */}
      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle} htmlFor="cw-domain">Your domain</label>
        <input
          id="cw-domain"
          style={inputStyle}
          placeholder="yourbrand.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>

      {/* Keywords */}
      <div style={{ marginBottom: 18 }}>
        <span style={labelStyle}>Keywords to check (up to 3)</span>
        <div style={{ display: "grid", gap: 10 }}>
          <input style={inputStyle} aria-label="Keyword 1 (required)" placeholder="Keyword 1 (required)" value={kw1} onChange={(e) => setKw1(e.target.value)} />
          <input style={inputStyle} aria-label="Keyword 2 (optional)" placeholder="Keyword 2 (optional)" value={kw2} onChange={(e) => setKw2(e.target.value)} />
          <input style={inputStyle} aria-label="Keyword 3 (optional)" placeholder="Keyword 3 (optional)" value={kw3} onChange={(e) => setKw3(e.target.value)} />
        </div>
      </div>


      {/* Competitors — visible, locked, and labelled as a paid feature */}
      <div style={{ marginBottom: 18 }}>
        <span style={labelStyle}>
          Competitors to compare against{" "}
          <span style={{ fontWeight: 400, color: "var(--accent)" }}>
            &middot; in the audit
          </span>
        </span>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
          {["Competitor 1", "Competitor 2"].map((ph) => (
            <input
              key={ph}
              style={{
                ...inputStyle,
                cursor: "not-allowed",
                background: "var(--panel)",
                color: "var(--faint)",
              }}
              aria-label={`${ph} — available in the paid audit`}
              placeholder={ph}
              value=""
              readOnly
              disabled
              onChange={() => {}}
            />
          ))}
        </div>
        <p
          style={{
            fontSize: 12.5,
            color: "var(--faint)",
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          The free check tells you whether the engines named someone else. The{" "}
          <Link href={AUDIT_URL} style={{ color: "var(--accent)", fontWeight: 500 }}>
            audit
          </Link>{" "}
          tells you who, on which questions, and why they were chosen over you.
        </p>
      </div>

      {/* Country + Email */}
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "1fr 1fr", marginBottom: 22 }}>
        <div>
          <label style={labelStyle} htmlFor="cw-country">Main market</label>
          <select
            id="cw-country"
            style={{ ...inputStyle, appearance: "auto", cursor: "pointer" }}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a country…</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value={COUNTRY_OTHER}>Somewhere else</option>
          </select>
        </div>
        <div>
          <label style={labelStyle} htmlFor="cw-email">Email (for your report)</label>
          <input id="cw-email" type="email" style={inputStyle} placeholder="you@yourbrand.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      {/*
        The out-of-scope path. Tells them BEFORE they submit that no report is
        coming, so the button they press matches what they get. Saying it here rather
        than only in the email is what keeps this from feeling like a bait.
      */}
      {isWaitlist && (
        <div
          style={{
            marginBottom: 18,
            padding: "16px 18px",
            border: "1px solid var(--accent)",
            borderRadius: 10,
            background: "var(--accent-soft)",
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 14.5, color: "var(--ink)", lineHeight: 1.6 }}>
            The free check currently runs for <strong>Canada</strong> only — these
            engines answer differently depending on where the search runs from. I
            won&rsquo;t send you a report from the wrong market, but I&rsquo;ll add
            you to the list and tell you if yours opens.
          </p>
          <label style={labelStyle} htmlFor="cw-other-country">
            Which country?
          </label>
          <input
            id="cw-other-country"
            style={inputStyle}
            placeholder="e.g. Australia"
            value={otherCountry}
            onChange={(e) => setOtherCountry(e.target.value)}
          />
        </div>
      )}

      {err && (
        <p role="alert" style={{ color: "#b3261e", fontSize: 13.5, marginBottom: 14 }}>{err}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
        style={{ width: "100%", justifyContent: "center", opacity: status === "submitting" ? 0.7 : 1 }}
      >
        {status === "submitting"
          ? "Sending…"
          : isWaitlist
            ? "Add me to the list →"
            : "Get my AI visibility report →"}
      </button>
      {/*
        NOTICE AT THE POINT OF COLLECTION.

        This form takes an email address, a domain and keywords from (mostly) Canadian
        users, on behalf of a Canadian business. It was live with no privacy notice of
        any kind. Under PIPEDA the purpose has to be identified and consent obtained at
        the point of collection — which is here, not buried on another page.

        Say what we take, what we do with it, and how to make it go away. In plain words.
      */}
      <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>
        {isWaitlist
          ? "Free. No report is sent for markets outside Canada — you're joining the list."
          : "Free. A real analyst sends your report within one business day."}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "var(--faint)",
          marginTop: 10,
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        {/*
          ⚠️ THE WAITLIST WORDING IS A CASL REQUIREMENT, NOT A STYLE CHOICE.
          The Canada path asks consent for a report plus ONE follow-up — a bounded,
          near-term exchange. A waitlist message is a commercial electronic message
          sent at an unknown future date, which is exactly what CASL requires express
          consent for, and "send you this report" plainly does not cover it. So the
          notice has to name that future message at the point of collection, and the
          unsubscribe route has to be stated. Don't collapse these back into one line.
        */}
        {isWaitlist
          ? "By submitting, you agree that I can email you if the free check opens for your country, and confirm that now. No report is sent in the meantime. Unsubscribe any time by replying — your details are stored privately, never sold, never published, and deleted the moment you ask. "
          : "By submitting, you agree that I can use your email to send you this report and follow up once. Your details are stored privately, never sold, never published, and deleted the moment you ask. "}
        <Link href="/privacy/" style={{ color: "var(--muted)", textDecoration: "underline" }}>
          Privacy
        </Link>
        {" · "}
        <Link href="/disclaimer/" style={{ color: "var(--muted)", textDecoration: "underline" }}>
          What this check is and isn&rsquo;t
        </Link>
      </p>
    </form>
  );
}

/**
 * One numbered step on the post-submit screen.
 *
 * The `when` label carries the weight here: the whole point of splitting this into
 * steps is that the two things happen on different clocks, and the reader needs to
 * see that at a glance rather than infer it from a paragraph.
 */
function Step({
  marker,
  when,
  title,
  body,
}: {
  marker: string;
  when: string;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        padding: "16px 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        {marker}
      </span>
      <div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 5,
          }}
        >
          {when}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.4,
            marginBottom: 5,
          }}
        >
          {title}
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 14.5,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
