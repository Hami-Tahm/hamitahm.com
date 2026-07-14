/**
 * Single source of truth for the legal pages (/privacy, /terms, /disclaimer).
 *
 * ── WHY THESE PAGES EXIST ──
 * The AI Visibility Checker at /ai-visibility/ai-visibility-checker/ collects an
 * email address, a domain, keywords and a country, and forwards them to a Google
 * Apps Script webhook which appends a row to a Google Sheet and emails Hami.
 * That is personal information, collected from (mostly) Canadian users, by a
 * Canadian business. It was live with no privacy policy and no notice at the point
 * of collection.
 *
 * These pages describe what the site ACTUALLY does. If the data flow changes —
 * a new form, a new analytics tool, a new third party — update this file.
 * A privacy policy that doesn't match reality is worse than none.
 */

export const LEGAL = {
  /** Business identity used across all three legal pages. */
  operator: "Hami Tahm",
  location: "Toronto, Ontario, Canada",
  email: "hami@hamitahm.com",
  site: "hamitahm.com",

  /** Last substantive review of the legal pages. */
  effectiveDate: "2026-07-14",
  displayDate: "July 14, 2026",
} as const;

/**
 * Everything the site collects. Keep this exhaustive and honest.
 * Anything added to the site that touches user data must be added here.
 */
export const DATA_COLLECTED = [
  {
    what: "AI Visibility Checker submissions",
    fields:
      "Your email address, the website domain you want checked, up to three keywords, the country you want results for, and which AI engines you selected.",
    why: "To run the check you asked for and send the result back to you by email.",
    where:
      "Submitted through this site, then stored in a private Google Sheet and emailed to Hami Tahm. Nothing is published.",
  },
  {
    what: "Analytics",
    fields:
      "Standard web analytics — pages viewed, approximate location (country/region), device type, referring site, and anonymised usage events.",
    why: "To understand which pages are useful and which are not.",
    where:
      "Google Analytics 4, loaded via Google Tag Manager. This site does not use advertising or retargeting pixels.",
  },
  {
    what: "Server logs",
    fields:
      "Standard request logs kept by the hosting provider, which can include IP address and browser user-agent.",
    why: "Security, abuse prevention, and keeping the site running.",
    where: "Vercel, our hosting provider.",
  },
] as const;

/** Third parties that can process data. Name them; don't hide behind 'partners'. */
export const THIRD_PARTIES = [
  {
    name: "Google (Analytics & Tag Manager)",
    role: "Website analytics.",
  },
  {
    name: "Google (Sheets & Apps Script)",
    role: "Stores AI Visibility Checker submissions in a private spreadsheet and delivers the email notification.",
  },
  {
    name: "Vercel",
    role: "Hosting and delivery of this website.",
  },
] as const;
