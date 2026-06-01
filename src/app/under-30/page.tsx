import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to be under 30 (Bioage)",
  description: "How to be under 30 (Bioage) — by Hami Tahm",
};

export default function Post() {
  return (
    <article style={ { padding: "80px 0" } }>
      <div className="wrap" style={ { maxWidth: 720 } }>
        {/* Breadcrumb */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 40, display: "flex", gap: 8 } }>
          <Link href="/" style={ { color: "var(--accent)" } }>Home</Link>
          <span>/</span>
          <Link href="/writing" style={ { color: "var(--accent)" } }>Writing</Link>
          <span>/</span>
          <span>How to be under 30 (Bioage)</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Longevity &amp; Health
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          How to be under 30 (Bioage)
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Mar 02, 2026 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<h1>20 Minutes. 3 Times a Week. Full-Body Strength for Busy Founders.</h1>
If you work mostly at a desk and your calendar looks like a war zone, you don’t need a complicated gym routine.
You need <strong>high-leverage movements</strong> that hit the biggest muscle groups, raise metabolism, and protect your posture — in just 20 minutes.</p><p>This is the exact minimalist structure I recommend for high-performing entrepreneurs who want energy, focus, and long-term metabolic health.</p><p><hr /></p><p><h2>The Structure (Simple & Ruthless)</h2>
<ul>
 	<li>5 exercises</li>
 	<li>40 seconds work / 20 seconds rest</li>
 	<li>3 rounds</li>
 	<li>Total time: ~20 minutes</li>
</ul>
No fluff. Just compound movements.</p><p><hr /></p><p><h2>1) Squats — The Foundation</h2>
<img src="https://www.realsimple.com/thmb/8n1R3DyNvVKSAGn8Lzif7zRB8Jg%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/squat-infographic-d23c1dafcaef4c688ee7d6f828c8dd1b.png" alt="Image" /></p><p><img src="https://www.blenderbottle.com/cdn/shop/articles/how-to-air-squat-with-bobby-maximus-proper-squat-form-413179.jpg?v=1689708881&width=2048" alt="Image" /></p><p><img src="https://www.bodybasicsboise.com/images/blogs/squatting/james_squatting_side.jpg" alt="Image" /></p><p><img src="https://ijspt.scholasticahq.com/article/124998-the-quality-of-functional-movements-and-the-back-squat-in-amateur-and-professional-bodybuilders/attachment/250360.jpeg" alt="Image" /></p><p><strong>What it trains:</strong> Quads, glutes, core
<strong>Why it matters:</strong> Large muscle activation = higher metabolic response</p><p>Squats are your base layer. They stimulate the biggest muscles in your body and support hormonal health and fat loss.</p><p><strong>Upgrade:</strong> Hold dumbbells
<strong>Scale down:</strong> Half squats</p><p><hr /></p><p><h2>2) Push-Ups — Upper Body Strength Without Equipment</h2>
<img src="https://images.openai.com/static-rsc-3/e9PxbdvBOV7mEzLzjHFryfuRY3e83Ano23entwL86UkLHXoSXyNyiSubXsGHLSErl_bZWeeejHoBX5xJ9SyX2SC-VY44NGXHq_nm9i70Z7o?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/oCKs2sMavh4z3jxZzPZkkrsODoDfQpaYsrm4OYpa2Iuv4gNhH5V-SRgZZdlwrXHk4Pj6sWcETEIbc8bslrnAVf3s5uYcMXRXOG1mK3A0Rqc?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://static.bodyspec.com/tr/79/74/7974592a390496d4?f=jpg&h=690&w=1536" alt="Image" /></p><p><img src="https://www.trxtraining.com/cdn/shop/articles/Instability-training-benefits-upper-body-core-featured-image.png?v=1767326750" alt="Image" /></p><p><strong>What it trains:</strong> Chest, shoulders, triceps, core
<strong>Why it matters:</strong> Builds functional pressing strength and shoulder stability</p><p>Push-ups improve posture and upper-body endurance — critical if you’re spending hours at a laptop.</p><p><strong>Upgrade:</strong> Elevate feet
<strong>Scale down:</strong> Knees on floor</p><p><hr /></p><p><h2>3) Bent-Over Rows — Fix the Founder Posture</h2>
<img src="https://images.openai.com/static-rsc-3/lvYIxe0kgqYf54H8T4fftPAJxUpsKsqxPC9gOPcVDKr8_1rQI5if-nsZZnLnj5MPRfz6rWxbNJJP1_25yjhH-Q8d9aPdapawLtQ-L-_x0iM?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/iJ-nW19h0Kbb1wp-oRUipCHml51kQ0kyAU-iedYreY1zr2r9V1LtkcnjEmBPpeREUvLoR0WrGb_4croIu6KnQcY3yNA87oOnMhP08e_spiE?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://www.soletreadmills.com/cdn/shop/articles/A_man_doing_a_barbell_bent_over_row..png?v=1751312161&width=2048" alt="Image" /></p><p><img src="https://hips.hearstapps.com/hmg-prod/images/betina-bent-over-row-1572455207.jpg?crop=0.667xw%3A1.00xh%3B0.0931xw%2C0&resize=640%3A%2A" alt="Image" /></p><p><strong>What it trains:</strong> Upper back, lats, biceps
<strong>Why it matters:</strong> Counteracts rounded shoulders and screen posture</p><p>Most desk professionals are push-dominant and weak in the back. Rows restore balance and protect your spine.</p><p><strong>No dumbbells?</strong> Use resistance bands.</p><p><hr /></p><p><h2>4) Plank — Core Integrity</h2>
<img src="https://media.self.com/photos/615378c1150f8742ac896749/master/w_1600%2Cc_limit/Forearm%2520Plank%2520-%2520Delise_001.jpg" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/wTJLU_iDm01AgH3N5er7ETn_U81OgYv3Ywrhq33Dg8Wt3I-Tvitq2lfGNWvUpS3PHkyujDZZrToZKSuluetX_R5uq0Z6ddFwGnxmfJFqHfk?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://media.phillyvoice.com/media/images/051312_Plank_Core_Workouts.2e16d0ba.fill-735x490.jpg" alt="Image" /></p><p><img src="https://media.cnn.com/api/v1/images/stellar/prod/ds-0426-20241212163206913.jpg?q=w_1110%2Cc_fill" alt="Image" /></p><p><strong>What it trains:</strong> Deep core, lower back stabilizers
<strong>Why it matters:</strong> Core stability equals better lifting, better posture, fewer injuries</p><p>Planks teach your body to resist movement — which is what real-world strength is about.</p><p><strong>Upgrade:</strong> Lift one leg
<strong>Scale down:</strong> Shorten the time</p><p><hr /></p><p><h2>5) Lunges — Strength + Balance</h2>
<img src="https://images.openai.com/static-rsc-3/hprieTNtXTFl49jphdWuXfpHRdcxzud2jj9mUxOYjJ0ssjhfHRLmYJZPefaWCfbla3ILuZiIyOahXZsP4dACG3oNIFRgR4so7W3Ri_vW7G0?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://hips.hearstapps.com/hmg-prod/images/muscular-man-training-his-legs-doing-lunges-with-royalty-free-image-1677586874.jpg?crop=1xw%3A0.84355xh%3Bcenter%2Ctop&resize=1200%3A%2A" alt="Image" /></p><p><img src="https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-06-27-at-10-14-46-am-1561645202.jpg?crop=0.750524109014675xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A" alt="Image" /></p><p><img src="https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto%2Cc_limit%2Cw_3840%2Cq_90/https%3A//images.ctfassets.net/6ilvqec50fal/6ECvblywgDhiygiHRBUZmM/0c99d77e0869b85b8e029f09047e2bbc/Reverse-lunge-Jess-Sims.png" alt="Image" /></p><p><strong>What it trains:</strong> Glutes, quads, balance system
<strong>Why it matters:</strong> Single-leg work improves symmetry and joint health</p><p>Lunges build real-world strength and athletic coordination.</p><p><strong>Upgrade:</strong> Add dumbbells
<strong>Scale down:</strong> Static lunges</p><p><hr /></p><p><h1>Why This Works</h1>
For high-output professionals:
<ul>
 	<li>Improves insulin sensitivity</li>
 	<li>Supports fat loss</li>
 	<li>Boosts energy and cognitive performance</li>
 	<li>Protects joints and spine</li>
 	<li>Minimal time investment</li>
</ul>
Three sessions per week is enough to maintain and even build strength if intensity is consistent.</p><p><hr /></p><p><h1>Weekly Template</h1>
<ul>
 	<li>Monday</li>
 	<li>Wednesday</li>
 	<li>Friday</li>
</ul>
Or any non-consecutive days.</p><p>Consistency beats complexity.</p><p> ` } }
        />

        {/* Author box */}
        <div style={ { marginTop: 60, padding: "24px 0", borderTop: "1px solid var(--line)", display: "flex", gap: 16, alignItems: "center" } }>
          <div>
            <div style={ { fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500 } }>Hami Tahm</div>
            <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" } }>Tech Founder &middot; Toronto</div>
          </div>
        </div>
      </div>
    </article>
  );
}
