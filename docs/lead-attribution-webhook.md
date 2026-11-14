# Lead attribution: what the forms now send, and the one Apps Script change needed

Added 2026-11-14 after the Whizlabs checker lead arrived with no source (it was organic
Google; only a Clarity recording showed that).

## What every form sends now

`/api/checker`, `/api/contact-lead` and `/api/agency-partner` all receive an
`attribution` object from the browser and forward it to their webhook as:

- `attribution_text`: a readable block, e.g.

  ```
  First touch: google / cpc | campaign=ai_visibility_audit_pilot | keyword=answer engine optimization | gclid=Cj0... | referrer=www.google.com/ | landing=/ai-visibility/answer-engine-optimization-consultant-canada/ | at=2026-11-14T13:10:02Z
  Last touch: google / organic | referrer=www.google.com/ | landing=/ | at=...
  This visit: google / organic | referrer=www.google.com/ | landing=/ | at=...
  ```

- flat columns, one set per touch (`ft_` first touch, `lt_` last touch, `st_` this visit):
  `source, medium, campaign, term, content, gclid, gbraid, wbraid, msclkid, referrer, landing_page, at`
  e.g. `ft_source`, `ft_medium`, `ft_gclid`, `lt_source`, `st_landing_page` ...
- checker only: `form_page` (the page the form was submitted on).

Definitions (see `src/lib/attribution.ts`):

- **First touch**: first visit in this browser, kept 90 days, never overwritten.
- **Last touch**: most recent NON-direct visit (a direct return does not erase "came from
  Google Ads last week"), 90 days.
- **This visit**: how the current visit started, direct included.
- Source/medium: `utm_*` first; a `gclid`/`gbraid`/`wbraid` means google / cpc; `msclkid`
  means bing / cpc; otherwise the referrer host is classified as organic search,
  ai-assistant (ChatGPT, Perplexity, Gemini, Copilot, Claude ...), social or referral;
  otherwise (direct) / (none).
- Keyword (`term`) exists only for paid clicks (the Ads campaign sets `utm_term={keyword}`).
  Google does not pass organic search terms to websites; those are in Search Console.
- No PII: parameters, hostnames, paths and timestamps only. Referrer query strings are
  dropped. All values are length-capped and formula-escaped before reaching the sheet.

## Contact form and agency form: works with no script change

Both scripts already store and email the `message` field, and the routes append the
attribution block to `message`. Nothing to do.

## Checker: the Apps Script needs two lines

The checker webhook (`CHECKER_SHEET_WEBHOOK`, writes to the "AI Checker Leads" sheet and
sends "New AI Visibility Checker lead: <domain>") only uses the fields it knows. Until it
is updated, the attribution arrives at the script but is not shown or stored.

In that script's `doPost(e)` (where `d = JSON.parse(e.postData.contents)`):

1. **Email**: add to the notification body, after the existing lines:

   ```javascript
   "",
   "Form page: " + (d.form_page || ""),
   "Where this lead came from:",
   d.attribution_text || "(not recorded)",
   ```

2. **Sheet** (optional but recommended): append these to the existing `appendRow([...])`
   array, after the current last column, and add matching headers in row 1:

   ```javascript
   d.form_page || "",
   d.st_source || "", d.st_medium || "", d.st_campaign || "", d.st_term || "",
   d.st_gclid || "", d.st_referrer || "", d.st_landing_page || "",
   d.ft_source || "", d.ft_medium || "", d.ft_campaign || "", d.ft_term || "",
   d.ft_gclid || "", d.ft_referrer || "", d.ft_landing_page || "", d.ft_at || "",
   d.lt_source || "", d.lt_medium || "", d.lt_campaign || "", d.lt_term || "",
   d.lt_gclid || "", d.lt_referrer || "", d.lt_landing_page || "", d.lt_at || "",
   ```

   Headers: `form_page | st_source | st_medium | st_campaign | st_term | st_gclid |
   st_referrer | st_landing_page | ft_source | ft_medium | ft_campaign | ft_term |
   ft_gclid | ft_referrer | ft_landing_page | ft_at | lt_source | lt_medium |
   lt_campaign | lt_term | lt_gclid | lt_referrer | lt_landing_page | lt_at`

3. **Deploy**: Deploy → Manage deployments → edit the EXISTING web-app deployment →
   Version: New version → Deploy. Editing the existing deployment keeps the same URL, so
   `CHECKER_SHEET_WEBHOOK` in Vercel does not change. Creating a NEW deployment would give
   a new URL and break the form until the env var is updated.

Where the script lives (found 2026-11-14): Apps Script project "HamiTahm - AI Checker
Webhook (LIVE, do not delete)" (renamed from "Untitled project" on 2026-11-14),
owner dimaht@gmail.com, id `1eXhk7RmdouUrBsZz4HKlr5g6BWpkuaJMH1xpddKfN6ujEnc9xBjbmJ0u`,
bound to the Drive file "AI Visibility Database" (it writes to "AI Checker Leads" by
SHEET_ID). Both the project and its container had been in Drive trash since 2026-08-16
while still serving; they were restored on 2026-11-14.

**Status: DONE 2026-11-14.** Steps 1 and 2 applied (email block + 24 columns from column
I, headers written automatically on the first new lead), deployed as Version 6 on the
SAME deployment (`AKfycbxdBX...9IDu6TDZiKJw`), so `CHECKER_SHEET_WEBHOOK` is unchanged.
Until the site code with attribution is deployed, new rows simply get empty attribution
columns and the email says "(not recorded)".
