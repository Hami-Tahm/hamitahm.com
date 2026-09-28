"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * The partnership enquiry form on /for-agencies/.
 *
 * WHY A FORM RATHER THAN A CALENDAR (2026-09-28). The page previously ended in a link
 * to /contact/ and a mailto. Neither can be measured: a mailto click leaves the browser
 * for a mail client that may not be configured, so it is not evidence anyone wrote
 * anything, and an ads account optimising on it is optimising on noise.
 *
 * A booking widget was the other candidate and was rejected for the audience rather
 * than for the tech. An agency owner weighing a subcontractor wants to ask what
 * wholesale costs before giving up a calendar slot, and the page deliberately publishes
 * no rate card, so a cold calendar asks for commitment at exactly the moment the open
 * question is loudest.
 *
 * On success the browser goes to /for-agencies/thanks/, a URL reached no other way.
 * That page load is the conversion. A page view is a far steadier signal than a click
 * handler: it survives the user's network being slow, it cannot fire twice from one
 * submission, and it is verifiable by visiting the URL.
 */

type Status = "idle" | "sending" | "error";

export default function AgencyPartnerForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      agency: String(data.get("agency") || ""),
      website: String(data.get("website") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
      // honeypot: hidden from people, filled in by naive bots
      company: String(data.get("company") || ""),
    };

    try {
      const res = await fetch("/api/agency-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));

      /*
       * GTM is loaded with `lazyOnload`, so `dataLayer` may not exist yet. Initialising
       * it ourselves means the event queues and is picked up when the container loads,
       * rather than throwing and losing the record of a submission that did happen.
       *
       * This event is a convenience for GA4 segmentation. It is NOT what the Microsoft
       * Ads conversion fires on: that is the thanks-page URL, because a conversion that
       * depends on a script running correctly on the client is a conversion that
       * quietly under-reports and gives nobody a reason to look.
       */
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "agency_partner_submit" });

      router.push("/for-agencies/thanks/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 30, textAlign: "left", position: "relative" }}>
      <div style={{ display: "grid", gap: 14 }}>
        <Field name="name" label="Your name" required autoComplete="name" />
        <Field name="agency" label="Agency" required autoComplete="organization" />
        <Field
          name="website"
          label="Agency website"
          placeholder="youragency.com"
          autoComplete="url"
        />
        <Field name="email" label="Work email" type="email" required autoComplete="email" />

        <label style={labelStyle}>
          <span style={labelTextStyle}>
            Anything you want to ask first <span style={optionalStyle}>optional</span>
          </span>
          <textarea
            name="message"
            rows={3}
            placeholder="Wholesale range, a client you have in mind, turnaround for a specific account."
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          />
        </label>

        {/*
          Honeypot. Hidden with inline styles rather than `display: none`, which some
          bots specifically skip, and taken out of the tab order and the accessibility
          tree so nobody using a keyboard or a screen reader ever lands on it.
        */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
        style={{ marginTop: 22, opacity: status === "sending" ? 0.6 : 1 }}
      >
        {status === "sending" ? "Sending..." : "Talk about a partnership"}{" "}
        {status !== "sending" && <span className="arr">&rarr;</span>}
      </button>

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
        Goes to me, not to a sales team. No newsletter, and your agency is never named to
        anyone else.
      </p>
    </form>
  );
}

/* ── bits ─────────────────────────────────────────────────────────────── */

const labelStyle: React.CSSProperties = { display: "grid", gap: 6 };

const labelTextStyle: React.CSSProperties = {
  fontSize: 13,
  letterSpacing: ".04em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const optionalStyle: React.CSSProperties = {
  textTransform: "none",
  letterSpacing: 0,
  opacity: 0.7,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 13px",
  fontSize: 15,
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
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label style={labelStyle}>
      <span style={labelTextStyle}>
        {label} {!required && <span style={optionalStyle}>optional</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={inputStyle}
      />
    </label>
  );
}
