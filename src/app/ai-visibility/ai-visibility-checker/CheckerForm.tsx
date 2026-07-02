"use client";

import { useState } from "react";

const ENGINES = [
  { id: "chatgpt", label: "ChatGPT", active: true },
  { id: "ai-overview", label: "Google AI Overview", active: true },
  { id: "gemini", label: "Gemini", active: true },
  { id: "ai-mode", label: "Google AI Mode", active: false },
  { id: "perplexity", label: "Perplexity", active: false },
  { id: "claude", label: "Claude", active: false },
  { id: "grok", label: "Grok", active: false },
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
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  function toggle(id: string) {
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
          country: country.trim(),
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
    } catch {
      setStatus("error");
      setErr("Something went wrong. Please try again, or email TahmHami@gmail.com.");
    }
  }

  if (status === "done") {
    return (
      <div
        className="proof-card"
        style={{ textAlign: "center", padding: "40px 32px" }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 500,
            color: "var(--accent)",
            marginBottom: 12,
          }}
        >
          You&rsquo;re all set.
        </div>
        <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, maxWidth: "46ch", margin: "0 auto" }}>
          Your AI visibility report is on its way. A real analyst checks every
          engine and keyword you chose and sends back a precise, personalized
          breakdown — in your inbox within one business day.
        </p>
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
    <form onSubmit={submit} className="proof-card" style={{ padding: "32px 30px" }}>
      {/* Engines */}
      <div style={{ marginBottom: 24 }}>
        <span style={labelStyle}>Which AI engines should we check?</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {ENGINES.map((eng) => {
            const on = engines.includes(eng.id);
            return (
              <button
                key={eng.id}
                type="button"
                disabled={!eng.active}
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
        <label style={labelStyle}>Keywords to check (up to 3)</label>
        <div style={{ display: "grid", gap: 10 }}>
          <input style={inputStyle} placeholder="Keyword 1 (required)" value={kw1} onChange={(e) => setKw1(e.target.value)} />
          <input style={inputStyle} placeholder="Keyword 2 (optional)" value={kw2} onChange={(e) => setKw2(e.target.value)} />
          <input style={inputStyle} placeholder="Keyword 3 (optional)" value={kw3} onChange={(e) => setKw3(e.target.value)} />
        </div>
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
        <p style={{ color: "#b3261e", fontSize: 13.5, marginBottom: 14 }}>{err}</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
        style={{ width: "100%", justifyContent: "center", opacity: status === "submitting" ? 0.7 : 1 }}
      >
        {status === "submitting" ? "Sending…" : "Get my AI visibility report →"}
      </button>
      <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>
        Free. A real analyst sends your report within one business day. We never share your details.
      </p>
    </form>
  );
}
