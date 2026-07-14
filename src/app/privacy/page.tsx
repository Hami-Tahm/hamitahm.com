import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, H2 } from "@/components/LegalPage";
import { LEGAL, DATA_COLLECTED, THIRD_PARTIES } from "@/lib/legal";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Hami Tahm" },
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
      intro="This site collects very little, and this page says exactly what, why, and who else can see it. No dark patterns, no selling your data, no advertising trackers."
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
        would rather I didn&rsquo;t, say so and I&rsquo;ll stop &mdash; or just ask me to
        delete everything (see below).
      </p>

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
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{t.name}</strong>{" "}
            &mdash; {t.role}
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
        <li>There are no advertising or retargeting pixels on this site.</li>
        <li>Your submitted domain and keywords are never published.</li>
        <li>No automated decisions are made about you.</li>
      </ul>

      <H2>How long it is kept</H2>
      <p>
        Checker submissions are kept for as long as they are useful for following up with
        you &mdash; and deleted on request, immediately. Analytics data is retained
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
        This site uses Google Analytics via Google Tag Manager, which sets cookies to
        measure usage. It does not use advertising cookies. You can block cookies in your
        browser and the site will still work normally.
      </p>

      <H2>Changes</H2>
      <p>
        If what this site does with data changes, this page changes with it. The
        &ldquo;last updated&rdquo; date at the top is the honest date of the last
        substantive review.
      </p>

      <H2>Contact</H2>
      <p>
        {LEGAL.operator} &mdash; {LEGAL.location}
        <br />
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>
      </p>
    </LegalPage>
  );
}
