"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const ENGINES = [
  { id: "chatgpt", label: "ChatGPT", active: true },
  { id: "ai-overview", label: "Google AI Overview", active: true },
  { id: "gemini", label: "Gemini", active: true },
  { id: "ai-mode", label: "Google AI Mode", active: false },
  { id: "perplexity", label: "Perplexity", active: false },
  { id: "claude", label: "Claude", active: false },
  { id: "grok", label: "Grok", active: false },
  { id: "meta-ai", label: "Meta AI", active: false },
] as const;

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
  // Competitors are what turn a vague "you're not very visible" report into the one
  // sentence that actually sells: "for this query the engines named THEM, not you."
  // Optional on purpose — requiring them adds friction, and a competitor can also be
  // discovered from the category query alone.
  const [comp1, setComp1] = useState("");
  const [comp2, setComp2] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  /**
   * Fires once, on the visitor's first interaction with the form. The gap between
   * `checker_start` and `ai_checker_submit` is the form's abandonment rate — the
   * single most useful number for improving this step of the funnel, and one that
   * submit-only tracking cannot show.
   */
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
    if (engines.length === 0) {
      setErr("Select at least one AI engine to check.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          engines,
          domain: domain.trim(),
          keywords: [kw1, kw2, kw3].map((k) => k.trim()).filter(Boolean),
          competitors: [comp1, comp2].map((c) => c.trim()).filter(Boolean),
          country: country.trim(),
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error("bad status");
      if (typeof window !== "undefined") {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "ai_checker_submit", engines, country });
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setErr("Something went wrong. Please try again, or email hami@hamitahm.com.");
    }
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
          body="It lists the exact domain, keywords, country and engines you asked me to check — so you can make sure I got it right. Reply to it if you want to add a keyword or a competitor before I start."
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
            return (
              <button
                key={eng.id}
                type="button"
                disabled={!eng.active}
                aria-pressed={on}
                onClick={() => eng.active && toggle(eng.id)}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13.5,
                  fontWeight: 500,
                  padding: "9px 15px",
                  borderRadius: 999,
                  cursor: eng.active ? "pointer" : "not-allowed",
                  border: on
                    ? "1px solid var(--accent)"
                    : "1px solid var(--line-strong)",
                  background: on ? "var(--accent)" : "transparent",
                  color: on
                    ? "#fff"
                    : eng.active
                      ? "var(--ink)"
                      : "var(--faint)",
                  opacity: eng.active ? 1 : 0.55,
                  transition: "all .15s",
                }}
              >
                {eng.label}
                {!eng.active && (
                  <span style={{ fontSize: 10, marginInlineStart: 6, opacity: 0.8 }}>
                    · soon
                  </span>
                )}
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

      {/* Competitors — the field that makes the report specific rather than generic */}
      <div style={{ marginBottom: 18 }}>
        <span style={labelStyle}>
          Competitors to compare against{" "}
          <span style={{ fontWeight: 400, color: "var(--faint)" }}>
            (optional, but this is what makes the report useful)
          </span>
        </span>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
          <input
            style={inputStyle}
            aria-label="Competitor 1 (optional)"
            placeholder="Competitor 1"
            value={comp1}
            onChange={(e) => setComp1(e.target.value)}
          />
          <input
            style={inputStyle}
            aria-label="Competitor 2 (optional)"
            placeholder="Competitor 2"
            value={comp2}
            onChange={(e) => setComp2(e.target.value)}
          />
        </div>
        <p
          style={{
            fontSize: 12.5,
            color: "var(--faint)",
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          Name them and I&rsquo;ll show you which of you the AI engines actually
          recommend &mdash; on the same question, at the same time.
        </p>
      </div>

      {/* Country + Email */}
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "1fr 1fr", marginBottom: 22 }}>
        <div>
          <label style={labelStyle} htmlFor="cw-country">Main country</label>
          <input id="cw-country" style={inputStyle} placeholder="Canada" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="cw-email">Email (for your report)</label>
          <input id="cw-email" type="email" style={inputStyle} placeholder="you@yourbrand.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      {err && (
        <p role="alert" style={{ color: "#b3261e", fontSize: 13.5, marginBottom: 14 }}>{err}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
        style={{ width: "100%", justifyContent: "center", opacity: status === "submitting" ? 0.7 : 1 }}
      >
        {status === "submitting" ? "Sending…" : "Get my AI visibility report →"}
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
        Free. A real analyst sends your report within one business day.
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
        By submitting, you agree that I can use your email to send you this report and
        follow up once. Your details are stored privately, never sold, never published,
        and deleted the moment you ask.{" "}
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
