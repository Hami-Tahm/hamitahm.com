import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, H2 } from "@/components/LegalPage";
import { LEGAL, DATA_COLLECTED, THIRD_PARTIES, ADVERTISING } from "@/lib/legal";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy: Hami Tahm" },
  description:
    "What personal information hamitahm.com collects, why, who it is shared with, and how to have it deleted.",
  alternates: { canonical: "https://hamitahm.com/privacy/" },
  // Legal pages are for people, not for search. Keeping thin boilerplate out of
  // the index protects the topical focus of the rest of the site.
  robots: { index: false, follow: true },
};

const CHECKER_URL = "/ai-visibility/ai-visibility-checker/";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This site collects very little, and this page says exactly what, why, and who else can see it. No dark patterns, and your data is never sold. It does use one advertising tag, from Microsoft, described below with how to opt out."
    >
      <p>
        {LEGAL.site} is operated by {LEGAL.operator}, an independent consultant based in{" "}
        {LEGAL.location}. Because this is a Canadian business handling personal
        information in the course of commercial activity, it is subject to Canada&rsquo;s{" "}
        <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>,
        and to provincial privacy law where that applies.
      </p>

      <H2>What is collected, and why</H2>
      {DATA_COLLECTED.map((d) => (
        <div key={d.what} style={{ marginBottom: 26 }}>
          <p style={{ marginBottom: 6 }}>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{d.what}</strong>
          </p>
          <p style={{ marginBottom: 4 }}>{d.fields}</p>
          <p style={{ marginBottom: 4, color: "var(--muted)" }}>
            <em>Why:</em> {d.why}
          </p>
          <p style={{ color: "var(--muted)" }}>
            <em>Where it goes:</em> {d.where}
          </p>
        </div>
      ))}

      <H2>The AI Visibility Checker, specifically</H2>
      <p>
        When you submit the{" "}
        <Link href={CHECKER_URL} style={{ color: "var(--accent)" }}>
          free AI Visibility Check
        </Link>
        , you are giving me your email address so that I can send you a result. That is
        the whole purpose, and it is the only thing I use it for by default.
      </p>
      <p>
        Your submission is stored in a private Google Sheet and emailed to me. It is not
        published, not sold, and not shared with anyone else. Your domain and keywords
        are not disclosed to other people or used as public examples without your
        explicit permission.
      </p>
      <p>
        I may reply to you personally about your result, and I may follow up once. If you
        would rather I didn&rsquo;t, say so and I&rsquo;ll stop, or just ask me to
        delete everything (see below).
      </p>

      <H2>The agency partnership form</H2>
      <p>
        If you run an agency and use the form on{" "}
        <Link href="/for-agencies/" style={{ color: "var(--accent)" }}>
          the agencies page
        </Link>
        , what you enter is stored in a private Google Sheet and emailed to me so I can
        reply. It is not added to a mailing list, and your agency is never named to anyone
        else, including other agencies I work with.
      </p>

      <H2>Advertising measurement</H2>
      <p>
        This site uses Microsoft Advertising&rsquo;s Universal Event Tracking (UET) tag.
        It records which pages you visit here and whether you submit a form, linked to a
        cookie identifier. That means individual visitor activity on this site is tracked
        and shared with a third party, Microsoft, for advertising and marketing purposes:
        to measure whether ads lead to real enquiries, and to show ads on Microsoft&rsquo;s
        network to people who have visited before.
      </p>
      <p>
        Microsoft collects or receives personal data from visitors to provide Microsoft
        Advertising. How Microsoft handles it is set out in the{" "}
        <a href={ADVERTISING.microsoftPrivacyStatement} style={{ color: "var(--accent)" }}>
          Microsoft Privacy Statement
        </a>
        .
      </p>
      <p>
        Google Analytics also groups visitors into audience lists, for example people who
        viewed the agencies page. Those lists are not currently shared with any advertising
        platform. If that changes, this page will say so first.
      </p>

      <H2>Opting out of interest-based advertising</H2>
      <ul>
        <li style={{ marginBottom: 8 }}>
          Microsoft:{" "}
          <a href={ADVERTISING.microsoftAdSettings} style={{ color: "var(--accent)" }}>
            turn off personalised ads in your Microsoft account
          </a>
          .
        </li>
        <li style={{ marginBottom: 8 }}>
          Google:{" "}
          <a href={ADVERTISING.googleAdSettings} style={{ color: "var(--accent)" }}>
            My Ad Center
          </a>
          , and the{" "}
          <a href={ADVERTISING.googlePrivacyPolicy} style={{ color: "var(--accent)" }}>
            Google Privacy Policy
          </a>
          .
        </li>
        <li style={{ marginBottom: 8 }}>
          Industry-wide opt-outs covering many ad networks at once:{" "}
          <a href={ADVERTISING.daacOptOut} style={{ color: "var(--accent)" }}>
            Digital Advertising Alliance of Canada (YourAdChoices)
          </a>{" "}
          and the{" "}
          <a href={ADVERTISING.naiOptOut} style={{ color: "var(--accent)" }}>
            Network Advertising Initiative
          </a>
          .
        </li>
        <li>
          Or block third-party cookies in your browser. The site works the same either way.
        </li>
      </ul>

      <H2>Consent</H2>
      <p>
        Submitting the checker form is your consent for me to use the information you
        entered to run the check and reply to you. You can withdraw that consent at any
        time by emailing{" "}
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>
        . Withdrawing consent means I delete your data and stop contacting you.
      </p>

      <H2>Who else can see it</H2>
      <p>
        Only the service providers below, and only because they operate the infrastructure
        this site runs on. None of them are given your data to use for their own marketing.
      </p>
      <ul>
        {THIRD_PARTIES.map((t) => (
          <li key={t.name} style={{ marginBottom: 8 }}>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{t.name}</strong>:{" "}
            {t.role}
          </li>
        ))}
      </ul>
      <p>
        Some of these providers process and store data outside Canada, including in the
        United States. That means your information may be subject to the laws of those
        countries.
      </p>

      <H2>What is NOT done</H2>
      <ul>
        <li>Your personal information is never sold or rented.</li>
        <li>
          The form contents you submit (your email, domain, keywords, message) are never
          passed to an advertising platform.
        </li>
        <li>Your submitted domain and keywords are never published.</li>
        <li>No automated decisions are made about you.</li>
      </ul>

      <H2>How long it is kept</H2>
      <p>
        Checker submissions are kept for as long as they are useful for following up with
        you, and deleted on request, immediately. Analytics data is retained
        according to Google Analytics&rsquo; standard retention settings.
      </p>

      <H2>Your rights</H2>
      <p>
        Under PIPEDA you can ask me what personal information I hold about you, ask for a
        copy of it, ask me to correct it, and ask me to delete it. Email{" "}
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>{" "}
        and I will action it. There is no form and no fee.
      </p>
      <p>
        If you are unhappy with how I have handled your information, you can complain to
        the Office of the Privacy Commissioner of Canada.
      </p>

      <H2>Cookies</H2>
      <p>
        This site uses Google Analytics via Google Tag Manager, and Microsoft Clarity
        for heatmaps and session replay. Both set cookies to measure usage. It also uses
        Microsoft&rsquo;s UET tag, which sets an advertising cookie, as described under
        Advertising measurement above. You can block cookies in your browser and the site
        will still work normally.
      </p>

      <H2>Changes</H2>
      <p>
        If what this site does with data changes, this page changes with it. The
        &ldquo;last updated&rdquo; date at the top is the honest date of the last
        substantive review.
      </p>

      <H2>Contact</H2>
      <p>
        {LEGAL.operator}, {LEGAL.location}
        <br />
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>
      </p>
    </LegalPage>
  );
}
