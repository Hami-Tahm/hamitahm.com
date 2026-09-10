# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## 5. Structured Data: Google's Denials Are Not Evidence of Absence

**Standing rule from Hami. Do not relitigate it.**

Google has a long record of saying a signal is not used, and later conceding —
or being shown in testimony and leaked documentation — that it is. Their public
statements are a floor on what they admit, not a ceiling on what they use. And
Google is now only one consumer of this markup: ChatGPT, Gemini, Perplexity,
Copilot and Claude parse the same JSON-LD and publish nothing at all about how
they weight it.

So the test for keeping a piece of markup is **not** "does Google say it counts?"
The test is:

> Is it TRUE, and does having it cost us anything?

If it is true and free, **it stays.** Deprecated rich result, no rich result,
Google saying flat out that it is ignored — none of that is a reason to delete
it. FAQPage, HowTo, `geo`, `priceRange`, `sameAs`, `areaServed`: all of it stays.
The downside of keeping a correct statement that turns out to be unused is zero.
The downside of deleting one that turns out to be used is a ranking or citation
we never find out we lost.

**What DOES justify removing or changing markup — the only three reasons:**

1. **It is false or misleading.** A `geo` point for an address the public cannot
   reach. An `aggregateRating` with no real reviews behind it. Untrue markup is a
   manual-action risk and a trust risk. This one is non-negotiable.
2. **It creates a real conflict.** Three service pages each declaring their own
   `ProfessionalService` entity fragmented the identity graph — that removal was
   correct, and the fix was consolidating to one entity in `layout.tsx`, not
   deleting the concept.
3. **It carries maintenance cost that will rot.** Markup nobody will update as
   the facts change.

"Google deprecated the rich result" is not on that list.

### The line between markup and copy

This rule governs **what we emit**. It does not govern **what we publish as a
claim.**

- In JSON-LD: keep FAQPage, keep HowTo, keep everything true and free.
- In visible copy: never tell a reader that FAQPage schema earns AI citations,
  or that HowTo markup makes content parseable by an LLM. Nobody has shown that,
  and this site's entire position is that it does not repeat unverified industry
  claims. Say what is documented; hedge honestly on the rest.

Emitting the markup is cheap insurance. Selling it as a mechanism is a claim we
cannot support. Both statements are true at once, and the corrections made on
2026-08-11 were to the copy — not a reason to strip the markup.

---

## 6. Content Images Are Always Clickable to Zoom

**Standing rule from Hami, added 2026-08-31. Applies to the whole site, not just one page.**

Every genuine content image, a chart, screenshot, or diagram that's part of an
article's argument (usually sitting inside a `<figure>`, often with a caption),
must use `<ZoomableImage>` from `src/components/ZoomableImage.tsx` instead of a
bare `next/image` `<Image>`. It's a drop-in replacement with an identical props
API; clicking the rendered image opens it full-size in a lightbox overlay
(click outside, or press Escape, to close).

**Do NOT apply this to:** icons, logos, favicons, or avatar/portrait photos
(e.g. an author byline headshot). Those stay plain `<Image>`.

When adding any new content image to any page, import `ZoomableImage` from the
start rather than `Image` from `next/image`. This is not a one-off request for
a single post, it is a default for all future work on this site.

---

## 7. R&D Logging: EXPERIMENTS.md

**Standing practice from Hami, added 2026-09-10. Adopted from HomeCalc.ca.**

**The file itself now lives in the `citation-engine` repository, not here.** It moved on
2026-09-10, when that repository was created, exactly as its own closing note said it would. There
is nothing to write in this repo.

`EXPERIMENTS.md` is the R&D evidence file: project scope, a scored backlog of candidate
experiments, standing decisions and rejected directions, and a dated log. It exists to support
SR&ED and IRAP, so what goes in it is governed by CRA's test, not by how interesting the work was.

**Why this matters here:** work done in *this* repo is explicitly ineligible, and that is the whole
reason the two repositories are separate. If you are working on hamitahm.com, you are not doing
R&D. The rules below are kept so nobody has to go and find out the hard way.

- **Almost nothing done in this repo is eligible.** Pages, copy, blog posts, SEO, structured data,
  CTA and pricing work are listed as explicitly ineligible. The eligible project is the separate
  measurement engine defined in Section 1, which has not started yet.
- **Do not add a log entry unless there was a genuine technological uncertainty**, meaning a
  limitation that standard practice could not resolve, plus a hypothesis, an experiment, and a
  result with numbers and a commit reference. Difficulty is not uncertainty. Routine debugging is
  not eligible.
- **An empty log is the correct outcome** when no eligible work happened. Padding it is actively
  harmful: it signals the claim was not filtered, which invites scrutiny of everything else.
- **Never write an entry from memory after the fact.** Same-day or not at all.
- **Nothing gets built straight off the backlog.** One-page proposal, review with Hami, agreed
  scope, then build. See the required gate in Section 2.

If you are working in this repo and think something you did belongs in the log, say so and ask
rather than adding it. The default answer is that it does not.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
