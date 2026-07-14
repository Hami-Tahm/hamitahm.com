import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, H2 } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service — Hami Tahm" },
  description:
    "The terms for using hamitahm.com, the free AI Visibility Check, and paid consulting engagements.",
  alternates: { canonical: "https://hamitahm.com/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Plain terms for a one-person consultancy. Short, because there isn't much to hide behind."
    >
      <p>
        By using {LEGAL.site} you agree to these terms. If you don&rsquo;t, please
        don&rsquo;t use the site.
      </p>

      <H2>Who you are dealing with</H2>
      <p>
        This site and the consulting services offered on it are operated by{" "}
        {LEGAL.operator}, an independent consultant based in {LEGAL.location}. There is no
        agency behind this. When you hire me, you get me.
      </p>

      <H2>The free AI Visibility Check</H2>
      <p>
        The{" "}
        <Link
          href="/ai-visibility/ai-visibility-checker/"
          style={{ color: "var(--accent)" }}
        >
          free check
        </Link>{" "}
        is offered as a courtesy, as-is, with no warranty and no service level. I aim to
        return it within one business day, but that is an intention, not a commitment. I
        may decline any submission, and I may stop offering it at any time.
      </p>
      <p>
        By submitting the form you confirm that the domain you enter is one you own or are
        authorised to act for.
      </p>

      <H2>Paid engagements</H2>
      <p>
        Paid work &mdash; including the AI Visibility Audit &mdash; is governed by the
        specific scope, price and terms agreed in writing with you before any work starts.
        Those written terms take precedence over anything on this page or elsewhere on
        this site.
      </p>
      <p>
        Prices shown on this site are indicative and may change. A price is only binding
        once I have confirmed it to you in writing for your specific engagement.
      </p>

      <H2>No guarantee of outcomes</H2>
      <p>
        I do not guarantee any ranking, citation, mention, traffic level, lead volume or
        revenue outcome. See the{" "}
        <Link href="/disclaimer/" style={{ color: "var(--accent)" }}>
          Disclaimer
        </Link>{" "}
        for the detail &mdash; it is worth reading properly, because it is the honest
        version.
      </p>

      <H2>Your responsibilities</H2>
      <ul>
        <li>
          You are responsible for the accuracy of anything you tell me, and for your own
          legal, regulatory and advertising compliance.
        </li>
        <li>
          You are responsible for changes made to your own website, whether or not I
          recommended them.
        </li>
        <li>
          Don&rsquo;t use this site to break the law, scrape it at volume, or attempt to
          disrupt it.
        </li>
      </ul>

      <H2>Intellectual property</H2>
      <p>
        The content of this site &mdash; writing, case studies, data and the methods
        described &mdash; belongs to {LEGAL.operator}. You are welcome to quote and link
        to it with attribution. You may not republish it wholesale or present it as your
        own.
      </p>
      <p>
        Deliverables from a paid engagement belong to you once the engagement is paid for,
        unless we agree otherwise in writing. The underlying methodology remains mine.
      </p>

      <H2>Limitation of liability</H2>
      <p>
        To the fullest extent permitted by law, my total liability arising out of the
        website or any engagement is limited to the amount you actually paid me for that
        engagement. I am not liable for indirect or consequential losses, including lost
        profits, lost revenue or lost business opportunity.
      </p>
      <p>Nothing in these terms limits liability that cannot lawfully be limited.</p>

      <H2>Privacy</H2>
      <p>
        How your information is handled is set out in the{" "}
        <Link href="/privacy/" style={{ color: "var(--accent)" }}>
          Privacy Policy
        </Link>
        .
      </p>

      <H2>Governing law</H2>
      <p>
        These terms are governed by the laws of the Province of Ontario and the federal
        laws of Canada that apply there. Any dispute goes to the courts of Ontario.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>
      </p>
    </LegalPage>
  );
}
