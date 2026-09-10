# EXPERIMENTS.md

R&D log for the HamiTahm technology project. Companion to the daily hours sheet.

**Started:** 10 September 2026
**Practice adopted from:** HomeCalc.ca (running since 9 September 2026)

---

## How to use this file

Read this before writing in it.

1. **Scope first.** Section 1 defines what the R&D project is. If the work you are about to log
   does not sit inside that scope, it does not belong in the log.
2. **Nothing gets built straight off the backlog.** Section 2 has a required gate: one-page
   proposal, review with Hami, agreed scope, then build. Whether the work will be logged as R&D is
   decided at the scope-agreement step, not discovered afterwards.
3. **Log the same day.** Reconstructed entries are the weakest form of evidence and are close to
   worthless.
4. **An empty log is a valid outcome.** Consulting and client delivery do not produce SR&ED no
   matter how technical they are. Padding this file is actively harmful: it tells a reviewer the
   claim was not filtered, which invites scrutiny of everything else in it. Short and honest beats
   long and inflated.

The bar being cleared, in CRA's terms: was there a limitation in existing knowledge or technology
that a competent professional could not resolve using standard practice, and was systematic
experimentation carried out to overcome it? Uncertainty, hypothesis, experiment, conclusion, all
four visible, all recorded while the work happened. Difficulty is not uncertainty. Complexity is
not uncertainty. Routine debugging is not eligible.

---

## 1. Project scope

### Project name

**Cross-Model Citation Measurement and Attribution Engine**

Named separately from the commercial product on purpose. The commercial product is the HamiTahm AI
Visibility platform (checker, audit, dashboard, distribution). The R&D project is the narrower
measurement problem underneath it. Keeping them separate stops the claim sprawling to cover
everything the company does.

### Business objective

Produce a measurement system that can tell a business, defensibly, whether it is cited and
represented in AI-generated answers, whether that changed, and whether a change was caused by work
done rather than by model drift. Today this is answered manually, per client, by a human running
prompts and reading answers. The objective is to make it reproducible and continuous.

### Core technological uncertainties

These are the reasons this is a research problem and not a build task. Each is written as what is
*not known*, not as what is hard.

1. **Sampling under non-determinism.** The same prompt to the same engine returns materially
   different answers across runs. There is no established method for how many samples, under what
   configuration, are needed before a difference between two measurements can be attributed to a
   real change rather than to model variance. Standard practice (run it once, screenshot it) does
   not resolve this.

2. **Citation extraction across heterogeneous, undocumented, changing outputs.** Engines expose
   sources inconsistently: some link, some name without linking, some paraphrase a source without
   attributing it, and the formats change without notice. There is no published, stable schema to
   normalize against.

3. **Mention versus citation versus influence.** A brand named in prose, a domain listed as a
   source, and a source that demonstrably shaped an answer are three different things that the
   existing tooling conflates. Whether they can be reliably separated from engine output alone is
   an open question.

4. **Cross-engine comparability.** Engines use different retrieval architectures and different
   answer formats. Whether a single figure can be constructed that is meaningfully comparable
   across them, rather than merely averaged, is not known.

5. **Change attribution against a moving baseline.** After a site change, visibility may move
   because of the change, or because the model was retrained or its index refreshed. The time
   series is confounded by an uncontrollable variable. Isolating the effect is the central
   uncertainty of the whole product.

6. **Prompt-space sampling.** Selecting a prompt set that represents the real distribution of buyer
   queries for a given business, without exhaustive enumeration and without the selection itself
   biasing the result.

### Hypotheses under test

Stated so they can be falsified. Each maps to a backlog item.

- H1: A bounded sample size exists per engine, determinable empirically, beyond which additional
  runs do not change the measured result outside a stated tolerance.
- H2: A normalization layer independent of any single engine's output format can extract citations
  with a measurable and stated accuracy across engines.
- H3: Mention, citation and influence can be separated using signals present in the answer text and
  source list alone, without privileged access to the engine.
- H4: Model drift can be estimated using an unchanged control set of domains measured in parallel,
  making it subtractable from an observed change.

### Eligible work

- Designing and running variance and sampling experiments (H1)
- The citation normalization layer and its accuracy testing (H2)
- Mention/citation/influence separation logic and its validation (H3)
- Control-set methodology for drift estimation and change attribution (H4)
- Prompt-space sampling methodology
- Failed attempts at any of the above, which are the strongest evidence in the file

### Ineligible work

Listed explicitly so it is never accidentally claimed.

- All client audit delivery and consulting, however technical
- hamitahm.com itself: pages, copy, blog posts, SEO, structured data, CTA and pricing work
- Standard application engineering: auth, billing, CRUD, deployment, CI
- Dashboard and charting built with established libraries and patterns
- Routine debugging and dependency upgrades
- Integrating a documented third-party API in the documented way
- Competitor and market research

### Deliverables a reviewer would be shown

- This file, with dated entries and referenced commits
- The daily hours sheet, showing the split between project work and everything else
- Test and benchmark files named in log entries
- Commit history

---

## 2. Backlog

Candidate experiments, prioritized. Scored 1 to 5 on each axis.

**SR&ED**: genuine technological uncertainty, or well-understood engineering in a new domain?
**IRAP**: technical innovation, commercialization potential, Canadian economic benefit.
**Product**: does it make the product materially better now?
**Market**: would a customer pay for it? Does it build a moat?

**Claim?**: `Yes` / `Partial` / `Build only` / `Blocked` / `Later`

Listing something here is not R&D. It becomes a log entry only once attempted and producing a
result.

### Required gate

Nothing gets built straight off this list. Applies to everyone, including whoever wrote the item.

1. One-page proposal: what it is, why now, what specifically is uncertain, how we would test whether
   it worked, what done looks like, rough size. If it cannot fit on one page it is not understood
   well enough to start.
2. Review with Hami. Discuss, argue, cut. Most items change shape here. That is the purpose of the
   step.
3. Agree scope explicitly: in, out, what counts as success. Also decide here whether it will be
   logged as R&D.
4. Then build.

Backlog items are written as directions, not specifications. The same item can be strong product
and zero SR&ED, or genuinely novel, depending entirely on how it is cut.

### Wave 0: foundation

Nothing in this wave is claimable. It exists so the experiments in Wave 1 have somewhere to run.

| # | Item | SR&ED | IRAP | Product | Market | Claim? |
|---|---|---|---|---|---|---|
| 0.1 | Prompt runner: execute a prompt set against each engine on a schedule, store raw responses verbatim | 1 | 2 | 5 | 3 | Build only |
| 0.2 | Result store: immutable historical snapshots, so any past measurement can be re-read unchanged | 1 | 2 | 5 | 3 | Build only |
| 0.3 | Minimal dashboard: current state per client, per engine | 1 | 2 | 5 | 4 | Build only |
| 0.4 | Client and prompt-set management | 1 | 1 | 4 | 2 | Build only |

If any of these hits a wall that standard practice cannot resolve, that specific failure becomes a
log entry. The feature as a whole still does not.

### Wave 1: measurement validity

This is where the actual research is. Depends on Wave 0.

| # | Item | SR&ED | IRAP | Product | Market | Claim? |
|---|---|---|---|---|---|---|
| 1.1 | Variance characterization: establish sample size per engine for a stated tolerance (H1) | 5 | 4 | 4 | 4 | Yes |
| 1.2 | Citation normalization layer across engine output formats, with measured accuracy (H2) | 4 | 4 | 5 | 4 | Yes |
| 1.3 | Mention vs citation vs influence separation (H3) | 4 | 4 | 4 | 5 | Yes |
| 1.4 | Cross-engine comparability index, or a documented finding that one is not defensible | 4 | 3 | 3 | 4 | Partial |
| 1.5 | Divergence between engine APIs and their consumer surfaces: how far apart are the answers a customer actually sees and the ones we can measure | 5 | 4 | 5 | 5 | Yes |

1.1 comes first. Until sample size is settled, every other number the system produces is
unfalsifiable, and every later experiment inherits the same doubt.

1.5 was added on 2026-09-10 as a direct consequence of the API-versus-consumer-surface decision on
item 1.1. It is scored high on every axis and it is the honest counterweight to that decision: we
measure the API because it is stable and permitted, and we owe ourselves a measurement of how far
that sits from what a customer sees. Google AI Overviews has no API at all, which means the surface
Canadian SMB clients arguably care about most is outside item 1.1 entirely. That is a stated
limitation, not an oversight.

### Wave 2: attribution

Depends on Wave 1 and on having historical data, so it cannot start early no matter how interesting
it is.

| # | Item | SR&ED | IRAP | Product | Market | Claim? |
|---|---|---|---|---|---|---|
| 2.1 | Control-set drift estimation: separate model drift from client-caused change (H4) | 5 | 5 | 5 | 5 | Yes |
| 2.2 | Prompt-space sampling methodology | 4 | 3 | 4 | 3 | Yes |
| 2.3 | Recommendation generation from measured gaps | 3 | 4 | 5 | 5 | Partial |
| 2.4 | Audit trail and exportable reports | 1 | 3 | 3 | 4 | Build only |

2.1 is the highest-value item in this file. It is also the one most likely to fail, and a
documented failure is a good outcome for the claim even if it is a bad outcome for the product.

### Wave 3: distribution and second application

Not started. Listed so sequencing is explicit, not because it is close.

| # | Item | SR&ED | IRAP | Product | Market | Claim? |
|---|---|---|---|---|---|---|
| 3.1 | Measuring whether a distribution action changed citation outcomes | 4 | 4 | 4 | 5 | Later |
| 3.2 | Official-source integrity checks: is the authoritative source present, current, correctly attributed | 3 | 5 | 2 | 4 | Later |

3.2 is the public-sector extension discussed in September 2026. It is deliberately in Wave 3 and
deliberately not being built toward. See Section 3.

---

## 3. Decisions and rejected directions

Standing decisions and directions considered and rejected, with reasoning and dates.

This section exists because roughly one strategic proposal a week arrives, from an advisor, an AI,
or an article about a new funding program, and without written reasoning each one restarts the same
argument from zero.

**The rule: revisit a decision when an underlying fact changes, not when a new proposal simply
sounds exciting.**

### Screening test for any new direction

Applied before adoption, not after.

1. Does it run on the existing platform, or replace it?
2. Does the data it needs exist and is it obtainable today?
3. Does it reach its buyer through distribution we already have?
4. Is there real technological uncertainty, or is it known engineering in a new domain?
5. **Would it still be worth building if no grant program existed for it?**

Question 5 is the one that does the work. A direction that only makes sense because money is
currently flowing toward it produces a grant-funded product nobody buys.

### Standing decisions

| Date | Decision | Reasoning |
|---|---|---|
| 2026-09-08 | Pricing is call-gated; no dollar figure published anywhere on the site | Zero direct signups against a published flat fee. Two independent advisors reached the same conclusion. Reversal is cheap if lead volume does not improve. |
| 2026-09-08 | October price-increase notice dropped | No genuine urgency signal in the market. Manufactured FOMO against a category buyers have not adopted yet costs trust. |
| 2026-09-10 | Commercial market is the validation and revenue engine. Government is a second customer segment, never the primary one | Public-sector cycles are long and procurement-gated. The speed advantage of a solo operator disappears there. |
| 2026-09-10 | Dual-use framing is adopted as narrative discipline only, never as an input to architecture | Knowing where the second application sits costs nothing and prevents inventing a story later. Building for a hypothetical second customer today is how months disappear. |
| 2026-09-10 | Wave 1 item 1.1 (variance and sample size) precedes all other measurement work | Every number the system produces is unfalsifiable until sampling is settled. This is also the strongest single SR&ED candidate in the file. |
| 2026-09-10 | B2G priority order: AI transparency consultation response, then AI Source List, then ISC, then IRAP | Ordered by cost and reversibility, cheapest and fastest first. |
| 2026-09-10 | Measurement runs against engine APIs, not consumer surfaces, for item 1.1 | Stable, permitted, reproducible. The variance question is about run-to-run variability of a fixed configuration, which is answerable on the API. The gap between API and consumer surface is real and becomes its own experiment (item 1.5) rather than being assumed away. |
| 2026-09-10 | First two engines: Perplexity Sonar and OpenAI with the web search tool | Perplexity returns citations natively and is the cleanest citation surface. OpenAI is the engine clients ask about most. They differ architecturally, which is what makes the cross-engine comparison worth anything. |
| 2026-09-10 | Any n we find is per-configuration, not universal | Model, engine and prompt type are all fixed inputs to the experiment. The result must always be reported with the configuration it was measured under, or it is a misleading number. |
| 2026-09-10 | The measurement engine gets its own repository, separate from this one | This repo is the marketing site. Mixing a measurement engine into it would confuse the eligible and ineligible work that Section 1 deliberately separates. |
| 2026-09-10 | Budget ceiling of $50 for item 1.1 | Measured, not assumed: roughly $6.50 per full pass across both engines at September 2026 API rates, and the experiment needs four to six passes. |

### Rejected directions

| Date | Direction | Why rejected |
|---|---|---|
| 2026-09-10 | Reposition HamiTahm as a government or defence product to improve grant eligibility | Fails screening question 5. Also abandons the only customer segment currently producing any signal. The dual-use note in the decisions table covers the legitimate version of this idea. |
| 2026-09-10 | Build multi-tenancy, audit logging and generalized data modelling now, in anticipation of an eventual public-sector buyer | Fails screening question 3 and is premature. Architecture is built for the customer who exists. |
| 2026-09-10 | Actively build toward Houmse as emergency field-service orchestration | The defensible asset in a services marketplace is the local supply network, not the dispatch logic. The claim that the underlying technology already exists is weakest here of the three ladders. Kept as a note, not a plan. |
| 2026-09-10 | Actively build toward HomeCalc as infrastructure resilience modelling | Financial decision calculators and resilience modelling are different data problems. Same treatment: a note, not a plan. |
| 2026-09-10 | Claim the hamitahm.com site work (rendering, structured data, SEO) as SR&ED | Established engineering applied in a specific domain. Real work, real product value, not technological uncertainty. Claiming it would weaken the credible parts of the claim. |

---

## 4. Log

Newest first. Same-day entries only.

**This section is currently empty, and that is the correct state.** The technology project defined
in Section 1 has not started. Work done in this repo to date is site, content and positioning work,
explicitly listed as ineligible in Section 1. The first entry belongs here when Wave 0 is standing
and Wave 1 item 1.1 has been attempted and produced a result.

### Template

```
### YYYY-MM-DD - <short title>

**Problem / uncertainty:**
What wasn't clear or reliable, and why the standard approach didn't just work.

**Hypothesis:**
What we thought would fix it, and why.

**Experiment:**
What was actually built or tried.

**Edge cases tested:**
- case 1
- case 2

**Result (v1):**
Pass/fail counts, what broke, what conflicted.

**Change made:**
What changed in response: architecture, precedence rules, data model.

**Result (v2):**
Pass/fail after the change.

**Evidence:**
- Commit(s): `<sha>` - <path>
- Test file(s) / benchmark: <path>
- Architecture note: <path or inline>
```

### Filling it

- **Failed attempts are the most valuable entries.** An experiment that did not work is direct
  evidence the outcome was uncertain. A log containing only successes reads as documentation
  written afterwards.
- **Numbers beat adjectives.** "34/40 scenarios passed, 6 conflicted" is evidence. "Significantly
  improved" is not.
- **Reference the commit.** The commit history is the primary evidence. This file is the narrative
  that makes it legible.

---

## Notes

- Anything touching corporate structure, CCPC status, expenditure eligibility, or how time is
  allocated between entities goes to a CPA. This file covers engineering practice only.
- Before serious spend on the technology project, consider CRA Pre-Claim Approval for a binding
  determination on eligibility up front rather than discovering the answer during an audit.
- When the technology project gets its own repository, this file moves with it. It lives here now
  because this is the only repository that exists.
