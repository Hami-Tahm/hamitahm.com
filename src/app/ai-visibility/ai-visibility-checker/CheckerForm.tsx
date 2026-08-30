"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/**
 * COUNTRY IS A FIXED LIST, NOT FREE TEXT (2026-08-20).
 *
 * It was already required, but as an open input with "Canada" as the placeholder.
 * That produced unusable values: "USA", "us", "United States of America", blank
 * variants, for a field that is not decoration: every one of these engines returns
 * different answers depending on where the search runs from, so the country decides
 * how the check is actually performed. A typo silently produces a wrong report.
 *
 * Canada and the United States, both markets the check is actually run for.
 *
 * ⚠️ ADDING A MARKET IS A MULTI-PLACE CHANGE, and the copy is what gets forgotten.
 * Add the country to COUNTRIES below, then fix every sentence that names the served
 * markets: the notice beside the country box, the waitlist confirmation screen, the
 * line under the submit button, the "Is this free?" answer on the page around this
 * form, and public/llms.txt. A form that accepts a country while the copy still says
 * it doesn't is the exact contradiction this file's other comments exist to stop.
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
 * can't segment by market is not a waitlist: without the actual country there is no
 * way to know who to write to when a market opens, and the promise becomes empty.
 *
 * `scope` in the payload is what the Apps Script webhook branches on to decide WHICH
 * confirmation email to send. See the note on the Scope type below for what is and
 * isn't safe to rename.
 */
const COUNTRIES = ["Canada", "United States"] as const;
const COUNTRY_OTHER = "Other";
/*
 * Renamed from "canada" on 2026-08-20, when the United States was added. A value
 * named after one country stops being true the moment a second one is served, and
 * this string is what the Apps Script webhook branches on.
 *
 * ⚠️ THE WEBHOOK ONLY TESTS FOR "waitlist": everything else falls through to the
 * report email, so renaming this side needs no Apps Script change. The API route
 * allow-lists the value though, and that DOES have to match. See api/checker.
 */
type Scope = "served" | "waitlist";

/**
 * ENGINES: free-tier only (2026-08-30).
 *
 * Used to also list Perplexity, Claude, Microsoft Copilot ("in the audit") and Grok,
 * Meta AI ("on request") as disabled buttons, to show what the paid $1,500 AI
 * Visibility Audit adds. Removed per CRO feedback: showing locked, paid-only options
 * inside a free tool reads as an upsell interruption rather than a feature list, and
 * the audit itself already explains its six-platform scope. If that pitch needs to
 * come back, it belongs on the page copy around this form, not as disabled buttons
 * inside it.
 */
const ENGINES: readonly { id: string; label: string }[] = [
  { id: "chatgpt", label: "ChatGPT" },
  { id: "ai-overview", label: "Google AI Overview" },
  { id: "gemini", label: "Gemini" },
];

type Status = "idle" | "submitting" | "done" | "error";

export default function CheckerForm() {
  // Not pre-selected by default (2026-08-30, per feedback): the visitor picks which
  // engines they want checked rather than starting from all three already on.
  const [engines, setEngines] = useState<string[]>([]);
  const [domain, setDomain] = useState("");
  const [kw1, setKw1] = useState("");
  const [kw2, setKw2] = useState("");
  const [kw3, setKw3] = useState("");
  const [country, setCountry] = useState("");
  /** Only used when `country === COUNTRY_OTHER`. See the waitlist note above. */
  const [otherCountry, setOtherCountry] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  /**
   * TWO-STEP FLOW (2026-08-30, per CRO feedback).
   *
   * ⚠️ EMAIL ALWAYS GOES LAST, NOT FIRST. First version of this put email in step
   * one, reasoning "capture the lead before they can bail." That's backwards for an
   * interactive tool: step one should be the engaging, low-friction part (pick
   * engines, type your domain and keywords) so the visitor is already invested by
   * the time step two asks for their email to see the result. Corrected same day.
   *
   * Still a single <form> with a single submit at the end; nothing is sent to the
   * server until the real submit, so this is a front-end sequencing change only, not
   * a separate partial-lead capture.
   */
  const [showRest, setShowRest] = useState(false);

  /**
   * Fires once, on the visitor's first interaction with the form. The gap between
   * `checker_start` and `ai_checker_submit` is the form's abandonment rate: the
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

  function continueToRest() {
    markStarted();
    if (!country.trim() || !domain.trim() || !kw1.trim()) {
      setErr("Please select your market, add your domain, and enter at least one keyword.");
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
    setErr("");
    setShowRest(true);
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
    // market they typed, never the literal string "Other": an unsegmentable
    // waitlist can't be acted on, which would make the promise in the email empty.
    const resolvedCountry = isWaitlist ? otherCountry.trim() : country.trim();
    const scope: Scope = isWaitlist ? "waitlist" : "served";
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
          // Keep these separable in GA4: a waitlist signup is demand for a market
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
   * WAITLIST CONFIRMATION: deliberately promises nothing on a clock.
   *
   * The served-market screen below commits to a report within one business day. Reusing it
   * here would be the worst possible outcome: someone waits a day for a report that
   * is never coming. So this screen says the service isn't available, thanks them,
   * and states the only thing that is actually true: that they'll hear if it opens.
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
          Thank you, you&rsquo;re on the list.
        </div>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" }}>
          I&rsquo;m sorry, the free check doesn&rsquo;t cover{" "}
          <strong style={{ color: "var(--ink)" }}>{otherCountry.trim()}</strong> yet.
          These engines answer differently depending on the country the search runs
          from, and I run this for Canada and the United States right now. Sending you a report from
          the wrong market would tell you the wrong thing, so I&rsquo;d rather say so.
        </p>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 14px" }}>
          Your details are saved. If I open{" "}
          <strong style={{ color: "var(--ink)" }}>{otherCountry.trim()}</strong>,
          you&rsquo;ll be among the first to hear, and a confirmation of this is on
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
          separate things happen on two different clocks: an email that is already
          in their inbox, and a report that takes a day. Blurring those into one
          block is what makes people think the report itself is late.
        */}
        <Step
          marker="1"
          when="Just now"
          title="A confirmation email is already in your inbox"
          body="It lists the exact domain, keywords, country and engines you asked me to check, so you can make sure I got it right. Reply to it if you want to change a keyword before I start."
        />
        <Step
          marker="2"
          when="Within one business day"
          title="Your report arrives"
          body="I run each search by hand, record the date and country every answer came from, and send you exactly what came back, including which businesses the engines were recommending instead of you."
        />

        {/*
          Deliverability note, deliberately the loudest element on this screen.
          Both messages are cold mail to an address someone just typed into a form:
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
      {!showRest ? (
        <>
          {/* Step 1: the engaging part (pick engines, type your domain and
              keywords). Email always goes last, in step 2. See the showRest note
              above for why. */}
          <div style={{ marginBottom: 18 }}>
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

          {/*
            The out-of-scope path. Tells them BEFORE they continue that no report is
            coming on the usual clock, so the button they press matches what they get.
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
                The free check currently runs for <strong>Canada and the United
                States</strong>; these
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

          {/* Engines */}
          <div style={{ marginBottom: 24 }}>
            <span id="cw-engines-label" style={labelStyle}>Which AI engines should we check?</span>
            <div role="group" aria-labelledby="cw-engines-label" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {ENGINES.map((eng) => {
                const on = engines.includes(eng.id);
                return (
                  <button
                    key={eng.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(eng.id)}
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 13.5,
                      fontWeight: 500,
                      padding: "9px 15px",
                      borderRadius: 999,
                      cursor: "pointer",
                      border: on
                        ? "1px solid var(--accent)"
                        : "1px solid var(--line-strong)",
                      background: on ? "var(--accent)" : "transparent",
                      color: on ? "#fff" : "var(--ink)",
                      transition: "all .15s",
                    }}
                  >
                    {eng.label}
                  </button>
                );
              })}
            </div>
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

          {err && (
            <p role="alert" style={{ color: "#b3261e", fontSize: 13.5, marginBottom: 14 }}>{err}</p>
          )}

          <button
            type="button"
            className="btn btn-primary"
            onClick={continueToRest}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Continue →
          </button>
        </>
      ) : (
        <>
          {/* Confirmed market + check config from step 1, editable via "Change". */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              padding: "10px 14px",
              background: "var(--panel)",
              borderRadius: 10,
              fontSize: 13.5,
            }}
          >
            <span style={{ color: "var(--muted)" }}>
              {domain || "your domain"} &middot; {engines.length} engine{engines.length === 1 ? "" : "s"} &middot;{" "}
              {(isWaitlist ? otherCountry.trim() : country) || "your market"}
            </span>
            <button
              type="button"
              onClick={() => setShowRest(false)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent)",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 13,
                padding: 0,
              }}
            >
              Change
            </button>
          </div>

          {/* Email: always the last thing asked, right before the real submit. */}
          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle} htmlFor="cw-email">Email (for your report)</label>
            <input id="cw-email" type="email" style={inputStyle} placeholder="you@yourbrand.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/*
            NOTICE AT THE POINT OF COLLECTION.

            This form takes an email address, a domain and keywords from (mostly) Canadian
            users, on behalf of a Canadian business. It was live with no privacy notice of
            any kind. Under PIPEDA the purpose has to be identified and consent obtained at
            the point of collection, which is here, right under the email field, not
            buried somewhere else on the page.

            ⚠️ THE WAITLIST WORDING IS A CASL REQUIREMENT, NOT A STYLE CHOICE.
            The served-market path asks consent for a report plus ONE follow-up: a bounded,
            near-term exchange. A waitlist message is a commercial electronic message
            sent at an unknown future date, which is exactly what CASL requires express
            consent for, and "send you this report" plainly does not cover it. So the
            notice has to name that future message at the point of collection, and the
            unsubscribe route has to be stated. Don't collapse these back into one line.
          */}
          <p
            style={{
              fontSize: 12,
              color: "var(--faint)",
              marginBottom: 18,
              lineHeight: 1.6,
            }}
          >
            {isWaitlist
              ? "By submitting, you agree that I can email you if the free check opens for your country, and confirm that now. No report is sent in the meantime. Unsubscribe any time by replying; your details are stored privately, never sold, never published, and deleted the moment you ask. "
              : "By submitting, you agree that I can use your email to send you this report and follow up once. Your details are stored privately, never sold, never published, and deleted the moment you ask. "}
            <Link href="/privacy/" style={{ color: "var(--muted)", textDecoration: "underline" }}>
              Privacy
            </Link>
            {" · "}
            <Link href="/disclaimer/" style={{ color: "var(--muted)", textDecoration: "underline" }}>
              What this check is and isn&rsquo;t
            </Link>
          </p>

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
          <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>
            {isWaitlist
              ? "Free. No report is sent for markets outside Canada and the US, you're joining the list."
              : "Free. A real analyst sends your report within one business day."}
          </p>
        </>
      )}
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
