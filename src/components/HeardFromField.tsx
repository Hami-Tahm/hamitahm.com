"use client";

import { useState } from "react";
import { HEARD_FROM_OPTIONS } from "@/lib/heard-from";

/**
 * Optional "How did you hear about me?" select. Uncontrolled: the form reads it with
 * FormData as `heard_from` (and `heard_from_other` when "Other" is picked), so it
 * drops into any form without new state. Styles are passed in to match each form.
 */
export function HeardFromField({
  id = "heard-from",
  labelStyle,
  labelTextStyle,
  inputStyle,
}: {
  id?: string;
  labelStyle?: React.CSSProperties;
  labelTextStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}) {
  const [choice, setChoice] = useState("");
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <label style={labelStyle} htmlFor={id}>
        <span style={labelTextStyle}>How did you hear about me? (optional)</span>
        <select
          id={id}
          name="heard_from"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
          style={{ ...inputStyle, appearance: "auto", cursor: "pointer" }}
        >
          <option value="">Select one</option>
          {HEARD_FROM_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      {choice === "Other" && (
        <label style={labelStyle} htmlFor={`${id}-other`}>
          <span style={labelTextStyle}>Where did you hear about me?</span>
          <input
            id={`${id}-other`}
            type="text"
            name="heard_from_other"
            maxLength={120}
            placeholder="For example: a friend, LinkedIn, a podcast"
            style={inputStyle}
          />
        </label>
      )}
    </div>
  );
}
