# Agency partner form: webhook setup

The form on `/for-agencies/` posts to `/api/agency-partner`, which forwards to a Google
Apps Script webhook. Until `AGENCY_SHEET_WEBHOOK` exists in Vercel the route returns 500
and the form cannot submit, on purpose: failing at the server is better than accepting a
lead and silently dropping it.

This is the same mechanism the AI visibility checker already uses. It gets its own
script and its own sheet rather than sharing the checker's, because the checker's script
replies with one of two templated confirmation emails about a report, and a partnership
enquiry is neither of those.

## 1. Create the sheet

New Google Sheet, name it something like `Agency Partner Leads`. First row as headers:

```
submittedAt | name | agency | website | email | message
```

## 2. Add the script

Extensions → Apps Script, delete what is there, paste this, and set `NOTIFY_TO`:

```javascript
/**
 * Receives an agency partnership enquiry from hamitahm.com/api/agency-partner.
 * Appends a row and emails a notification.
 */
const NOTIFY_TO = "hami@hamitahm.com";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    sheet.appendRow([
      d.submittedAt || new Date().toISOString(),
      d.name || "",
      d.agency || "",
      d.website || "",
      d.email || "",
      d.message || "",
    ]);

    // Plain text, not HTML: this is a notification to one person, and an HTML body
    // would render anything the sender typed into the message field.
    MailApp.sendEmail({
      to: NOTIFY_TO,
      subject: "Agency partner enquiry: " + (d.agency || "unknown agency"),
      body: [
        "Name:    " + (d.name || ""),
        "Agency:  " + (d.agency || ""),
        "Website: " + (d.website || ""),
        "Email:   " + (d.email || ""),
        "",
        "Message:",
        d.message || "(none)",
        "",
        "Submitted: " + (d.submittedAt || ""),
      ].join("\n"),
    });

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // Return a non-2xx so the API route reports "delivery failed" to the visitor and
    // they are told to email instead, rather than seeing a success page for a lead
    // that never arrived.
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy it

Deploy → New deployment → type **Web app**.

- Execute as: **Me**
- Who has access: **Anyone**

"Anyone" is required because the caller is the Vercel server, which has no Google
account. The URL is the only credential, so it belongs in Vercel's environment settings
and never in this repository. The endpoint accepts only the fields above and the API
route validates and length-caps everything before forwarding, so the exposure is that
someone who obtains the URL could append junk rows.

Copy the `/exec` URL it gives you.

## 4. Set the environment variable

Vercel → the project → Settings → Environment Variables:

```
AGENCY_SHEET_WEBHOOK = https://script.google.com/macros/s/.../exec
```

Set it for Production, Preview and Development, then redeploy. Environment variables are
read at build time, so an existing deployment will not pick it up on its own.

## 5. Confirm it works end to end

Submit the real form on `/for-agencies/` with your own details. Three things must all
happen, and checking only the first is how a broken form goes unnoticed for a month:

1. the browser lands on `/for-agencies/thanks/`
2. a row appears in the sheet
3. the notification email arrives

Then delete the test row, so the first real lead is the first row.
