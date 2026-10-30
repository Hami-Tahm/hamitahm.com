"use client";

import { useRef, useState } from "react";
import { readFirstTouch } from "@/lib/attribution";
import { buildLeadEvent, LEAD_PENDING_KEY } from "@/lib/lead-event";

/**
 * Qualified-lead form on /contact/ (Google Ads pilot, 2026-10-30).
 *
 * Same shape and styling as AgencyPartnerForm. Consumer email addresses are accepted
 * on purpose: qualification happens from company + website + message, not the domain.
 *
 * The conversion is NOT recorded here. Only after the server confirms delivery
 * ({ ok: true, lead: true }) does this store a pending, PII-free event and load
 * /contact/thanks/, where the event is pushed once (see src/lib/lead-event.ts).
 */

type Status = "idle" | "sending" | "error" | "invalid";

const FORM_NAME = "contact_qualified_lead";
const LEAD_TYPE = "ai_visibility_contact";

export default function ContactLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const busy = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Guard against double clicks before React re-renders the disabled button.
    if (busy.current) return;
    busy.current = true;
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    const firstTouch = readFirstTouch();
    const pagePath = window.location.pathname;

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      website: String(data.get("website") || ""),
      need: String(data.get("need") || ""),
      fax: String(data.get("fax") || ""), // honeypot
      page_path: pagePath,
      campaign: firstTouch ?? {},
    };

    try {
      const res = await fetch("/api/contact-lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const out = (await res.json().catch(() => null)) as { ok?: boolean; lead?: boolean } | null;

      if (res.status === 400) {
        busy.current = false;
        setStatus("invalid");
        return;
      }
      if (!res.ok || !out || out.ok !== true) throw new Error(String(res.status));

      if (out.lead === true) {
        try {
          const ev = buildLeadEvent(
            { form_name: FORM_NAME, lead_type: LEAD_TYPE, page_path: pagePath },
            firstTouch,
          );
          window.sessionStorage.setItem(LEAD_PENDING_KEY, JSON.stringify(ev));
        } catch {
          /* storage unavailable: the lead is still delivered, only the event is lost */
        }
      }
      // Full page load (not router.push) so every tag sees the thanks page.
      window.location.assign("/contact/thanks/");
    } catch {
      busy.current = false;
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left", position: "relative" }} noValidate={false}>
      <div style={{ display: "grid", gap: 14 }}>
        <Field name="name" label="Your name" required autoComplete="name" maxLength={500} />
        <Field name="email" label="Email" type="email" required autoComplete="email" maxLength={500} />
        <Field name="company" label="Company" required autoComplete="organization" maxLength={500} />
        <Field
          name="website"
          label="Website"
          required
          placeholder="yourcompany.com"
          autoComplete="url"
          maxLength={500}
        />
        <label style={labelStyle}>
          <span style={labelTextStyle}>What do you need help with?</span>
          <textarea
            name="need"
            rows={3}
            required
            minLength={10}
            maxLength={2000}
            placeholder="For example: we are not showing up when buyers ask ChatGPT about our category."
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          />
        </label>

        {/* Honeypot: off-screen, out of tab order and the accessibility tree. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <label>
            Fax
            <input type="text" name="fax" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={sending}
        aria-busy={sending}
        style={{ marginTop: 22, opacity: sending ? 0.6 : 1 }}
      >
        {sending ? "Sending..." : "Send"} {!sending && <span className="arr">&rarr;</span>}
      </button>

      {status === "invalid" && (
        <p role="alert" style={{ marginTop: 14, fontSize: 14, color: "var(--ink)" }}>
          Please fill in every field with a valid email, and a sentence or two about what you
          need.
        </p>
      )}
      {status === "error" && (
        <p role="alert" style={{ marginTop: 14, fontSize: 14, color: "var(--ink)" }}>
          That did not send. Email{" "}
          <a href="mailto:hami@hamitahm.com" style={{ textDecoration: "underline" }}>
            hami@hamitahm.com
          </a>{" "}
          directly and it will reach me.
        </p>
      )}

      <p style={{ marginTop: 16, fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
        By sending this you agree that I can use these details to reply to you. They go to me,
        not to a sales team, are never shared, and are deleted on request:{" "}
        <a href="/privacy/" style={{ textDecoration: "underline" }}>
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

/* ── bits (same styles as AgencyPartnerForm) ─────────────────────────── */

const labelStyle: React.CSSProperties = { display: "grid", gap: 6 };

const labelTextStyle: React.CSSProperties = {
  fontSize: 13,
  letterSpacing: ".04em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 13px",
  fontSize: 16,
  color: "var(--ink)",
  background: "var(--panel)",
  border: "1px solid var(--line)",
  borderRadius: 6,
};

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label style={labelStyle}>
      <span style={labelTextStyle}>{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        style={inputStyle}
      />
    </label>
  );
}
