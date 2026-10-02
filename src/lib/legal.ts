/**
 * Single source of truth for the legal pages (/privacy, /terms, /disclaimer).
 *
 * WHY THESE PAGES EXIST:
 * The AI Visibility Checker at /ai-visibility/ai-visibility-checker/ collects an
 * email address, a domain, keywords and a country, and forwards them to a Google
 * Apps Script webhook which appends a row to a Google Sheet and emails Hami.
 * That is personal information, collected from (mostly) Canadian users, by a
 * Canadian business. It was live with no privacy policy and no notice at the point
 * of collection.
 *
 * These pages describe what the site ACTUALLY does. If the data flow changes
 * (a new form, a new analytics tool, a new third party), update this file.
 * A privacy policy that doesn't match reality is worse than none.
 */

export const LEGAL = {
  /** Business identity used across all three legal pages. */
  operator: "Hami Tahm",
  location: "Toronto, Ontario, Canada",
  email: "hami@hamitahm.com",
  site: "hamitahm.com",

  /** Last substantive review of the legal pages. */
  effectiveDate: "2026-10-02",
  displayDate: "October 2, 2026",
} as const;

/**
 * Advertising measurement disclosure.
 *
 * ⚠️ ADDED 2026-10-02, THE SAME DAY THE MICROSOFT UET TAG WENT LIVE. Before this edit
 * the privacy page said, in three places, that the site used no advertising trackers,
 * no retargeting pixels and no advertising cookies. From the moment UET was published
 * in GTM that was false, on a legal page. Any future change to what fires on the site
 * has to land here in the same change, not after.
 *
 * Microsoft's advertiser requirements for UET and remarketing in paid search: say that
 * individual visitor tracking and sharing with third parties for advertising is taking
 * place, say that Microsoft collects or receives personal data to provide Microsoft
 * Advertising with a link to the Microsoft Privacy Statement, and tell people how to
 * opt out of interest-based advertising. All three are on the page.
 */
export const ADVERTISING = {
  microsoftPrivacyStatement: "https://www.microsoft.com/en-us/privacy/privacystatement",
  microsoftAdSettings: "https://account.microsoft.com/privacy/ad-settings",
  googlePrivacyPolicy: "https://policies.google.com/privacy",
  googleAdSettings: "https://myadcenter.google.com/",
  /** Digital Advertising Alliance of Canada: the Canadian industry opt-out. */
  daacOptOut: "https://youradchoices.ca/",
  /** Network Advertising Initiative opt-out, named in Microsoft's own requirements. */
  naiOptOut: "https://optout.networkadvertising.org/",
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
    what: "Agency partnership enquiries",
    fields:
      "Your name, agency name, agency website (optional), work email address, and anything you choose to write in the message field.",
    why: "To reply to your enquiry about white-label work. Nothing else.",
    where:
      "Submitted through the form on /for-agencies/, then stored in a private Google Sheet and emailed to Hami Tahm. Your agency is never named to anyone else.",
  },
  {
    what: "Analytics",
    fields:
      "Standard web analytics: pages viewed, approximate location (country/region), device type, referring site, and anonymised usage events.",
    why: "To understand which pages are useful and which are not.",
    where: "Google Analytics 4, loaded via Google Tag Manager.",
  },
  {
    /*
     * Its own entry, not folded into Analytics: advertising measurement is a different
     * purpose (it can be used to show you ads elsewhere), and PIPEDA requires the
     * purpose to be identified rather than implied.
     */
    what: "Advertising measurement and remarketing",
    fields:
      "Pages you visit on this site and whether you submit a form, linked to a cookie identifier and, if you arrived from a Microsoft ad, the click identifier in the link.",
    why: "To measure whether ads lead to real enquiries, and to build lists of past visitors that ads on Microsoft's network can be shown to later.",
    where:
      "Microsoft Advertising, through its Universal Event Tracking (UET) tag. Google Analytics also groups visitors into audience lists; these are not currently shared with any advertising platform, and this page will be updated before that changes.",
  },
  {
    /*
     * ⚠️ ADDED 2026-08-16 WITH THE CLARITY TAG, IN THE SAME COMMIT. Session replay
     * is a materially different kind of processing from page analytics: it records
     * the interaction itself, so it gets its own entry rather than being folded
     * into the Analytics one above. Under PIPEDA the purpose has to be identified;
     * "we use analytics" does not cover recording someone's session.
     *
     * If the masking settings in Clarity are ever loosened, this text stops being
     * true. Re-read it before touching them.
     */
    what: "Session replay and heatmaps",
    fields:
      "How you moved through a page: scrolling, clicks, and which parts of a page get attention, plus device type and approximate location. Text you type into forms is masked and not recorded.",
    why: "To see where pages confuse people, which is hard to learn from page-view counts alone.",
    where:
      "Microsoft Clarity. It records interactions with this website only: never your screen, other tabs, or anything outside this site.",
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
    name: "Microsoft Clarity",
    role: "Heatmaps and session replay: how people scroll and click through pages. Recordings are of page interactions, not your screen or camera, and Clarity masks text input by default.",
  },
  {
    name: "Microsoft Advertising",
    role: "Advertising measurement and remarketing through the Universal Event Tracking (UET) tag. Microsoft collects or receives personal data from visitors to provide Microsoft Advertising, as described in the Microsoft Privacy Statement linked below.",
  },
  {
    name: "Google (Sheets & Apps Script)",
    role: "Stores AI Visibility Checker submissions and agency partnership enquiries in private spreadsheets and delivers the email notifications.",
  },
  {
    name: "Vercel",
    role: "Hosting and delivery of this website.",
  },
] as const;
