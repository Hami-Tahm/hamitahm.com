import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, H2 } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { HOMECALC_PROOF, HOMECALC_CLAIMS } from "@/lib/homecalc-proof";
import { SNAPSHOT } from "@/lib/ai-citation-proof";

export const metadata: Metadata = {
  title: { absolute: "Disclaimer — Hami Tahm" },
  description:
    "What the results and case studies on this site do and do not mean. AI engine outputs change constantly; nothing here is a guarantee.",
  alternates: { canonical: "https://hamitahm.com/disclaimer/" },
  robots: { index: false, follow: true },
};

const CASE_STUDY_URL = "/case-studies/homecalc-ai-visibility/";
const ENGINES_URL = "/case-studies/cited-by-ai-engines/";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="This page exists because the honest version of AI visibility is less tidy than the marketing version — and I would rather you knew that before you paid me than after."
    >
      <H2>No guarantee of results</H2>
      <p>
        Nothing on this site is a promise that your business will be cited, recommended,
        or ranked by any AI engine or search engine. I do not control ChatGPT, Perplexity,
        Google, Gemini, Copilot or Grok, and neither does anyone else who sells this
        service. Anyone who guarantees you a result in an AI answer is either mistaken or
        lying.
      </p>

      <H2>AI answers change &mdash; constantly</H2>
      <p>
        AI-generated answers are not stable. The same prompt, asked twice, can return
        different sources, different names, and different wording. Answers vary by user,
        by location, by device, by whether you are logged in, and by model version. An
        engine that cites you today may not cite you next week, through no fault of yours
        or mine.
      </p>
      <p>
        Every result shown on this site is therefore a <strong>dated snapshot</strong>,
        not a permanent state. Where I show an AI answer that mentions me &mdash; see{" "}
        <Link href={ENGINES_URL} style={{ color: "var(--accent)" }}>
          AI Engines Already Recommend Hami Tahm
        </Link>{" "}
        &mdash; it is a capture from {SNAPSHOT.displayDate}. It is evidence that it
        happened. It is not a claim that it always happens, or that it happens for you.
      </p>

      <H2>About the HomeCalc numbers</H2>
      <p>
        The{" "}
        <Link href={CASE_STUDY_URL} style={{ color: "var(--accent)" }}>
          HomeCalc case study
        </Link>{" "}
        reports <strong>{HOMECALC_CLAIMS.citationsInTimeframe}</strong>. To be precise
        about what that figure is and is not:
      </p>
      <ul>
        <li>
          It is measured in <strong>Bing Webmaster Tools &rarr; AI Performance</strong>,
          which reports citations across Microsoft Copilot and its partners. It is not a
          measure of every AI engine.
        </li>
        <li>
          It is a citation count &mdash; how often pages were used as a source. It is{" "}
          <strong>not</strong> a revenue figure, a traffic figure, or a lead figure.
        </li>
        <li>
          HomeCalc.ca is <strong>my own product</strong>, not a client. I had complete
          control over it, no stakeholders, and no legacy constraints. Your business will
          not have those advantages, and results will differ.
        </li>
        <li>
          It happened in a specific market ({HOMECALC_PROOF.timeframe}, Canadian real
          estate calculators) at a specific moment. Nothing about that guarantees it
          repeats.
        </li>
      </ul>
      <p>
        I show it because it is real, verifiable, first-party data, and because almost
        nobody else in this field publishes any. Not because it is a forecast for you.
      </p>

      <H2>The free AI Visibility Check</H2>
      <p>
        The free check is a limited, manual review &mdash; a look at whether a small number
        of AI engines currently surface your business for a small number of queries. It is
        a starting point, not an audit, and not a complete picture of your AI visibility.
        It is offered as-is, with no service level and no warranty.
      </p>

      <H2>Not professional advice</H2>
      <p>
        Content on this site is general information about search and AI visibility. It is
        not legal, financial, medical, or other professional advice. Some pages discuss
        regulated industries &mdash; dental, mortgage, legal, real estate. Nothing here is
        advice about how to run a regulated business, and you remain responsible for your
        own compliance and advertising obligations.
      </p>

      <H2>Third-party names and screenshots</H2>
      <p>
        ChatGPT, Perplexity, Google, Gemini, Copilot, Grok and other names used on this
        site are the trademarks of their respective owners. I am not affiliated with,
        endorsed by, or partnered with any of them. Screenshots are shown for the purpose
        of illustration and commentary.
      </p>

      <H2>Errors</H2>
      <p>
        I try hard to be accurate, and I correct things when I get them wrong. If you find
        something on this site that is inaccurate or out of date, tell me at{" "}
        <a href={`mailto:${LEGAL.email}`} style={{ color: "var(--accent)" }}>
          {LEGAL.email}
        </a>{" "}
        and I will fix it.
      </p>
    </LegalPage>
  );
}
