import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness Pyramid (Beginner → Advanced)",
  description: "Fitness Pyramid (Beginner → Advanced) — by Hami Tahm",
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
          <span>Fitness Pyramid (Beginner → Advanced)</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Longevity &amp; Health
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          Fitness Pyramid (Beginner → Advanced)
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Feb 13, 2026 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <Image
          src="/images/writing/fitness-pyramid/5.jpg"
          alt="Fitness pyramid diagram showing beginner to advanced progression"
          width={93}
          height={93}
          style={{ width: "100%", height: "auto", borderRadius: 12, margin: "32px 0" }}
        />
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>At first, we break down the goal, like other startegy plan and goal setting
<h2 data-start="333" data-end="381">Layer 1 — “Frictionless Start” (7–10 min/day)</h2>
<p data-start="382" data-end="447"><strong data-start="382" data-end="391">Goal:</strong> Just wake your body up. Build the habit. Zero pressure.</p></p><p><ul data-start="449" data-end="544">
 	<li data-start="449" data-end="487">
<p data-start="451" data-end="487">7–10 min easy walking (even indoors)</p>
</li>
 	<li data-start="488" data-end="544">
<p data-start="490" data-end="544">2–3 min light stretching (neck, shoulders, hamstrings)</p>
</li>
</ul>
<p data-start="546" data-end="593"><strong data-start="546" data-end="566">Rule to move up:</strong><br data-start="566" data-end="569" />Do it 10 days out of 14.</p>
YouTube videos:</p><p>https://www.youtube.com/watch?v=GHb1xKvO3NY</p><p>She is top-notch in stretching and mobility on YouTube</p><p>https://www.youtube.com/watch?v=s-7lyvblFNI</p><p> </p><p>https://youtu.be/g_tea8ZNk5A?si=rhmNTCIh0Emrez5u</p><p>Just head and shoulder</p><p>https://youtu.be/t-1Z2ZYpmt0?si=SFH-b0RaijWFdE6s</p><p> </p><p>full-body stretching/mobility</p><p>https://youtu.be/L_xrDAtykMI?si=QJJIAT2SAKU0xAa2</p><p> </p><p>https://youtu.be/tnZ96Y2C28Y?si=iFPvIKgESPK8I9iE</p><p> </p><p>https://youtu.be/0FbUo7N_ULg?si=EZPUvAHtoemg8Q-I</p><p> </p><p>https://youtu.be/lPKRiU9u_Hc?si=SBOO4_P2ehUH1bV3</p><p> </p><p>https://youtu.be/R3WDe7byUXo?si=bzGB6UgCzKlQYQc5
<h2 data-start="600" data-end="656">Layer 2 — “Daily Movement” (20–30 min, 5–6 days/week)</h2>
<p data-start="657" data-end="710"><strong data-start="657" data-end="666">Goal:</strong> Basic cardiovascular fitness + consistency.</p></p><p><ul data-start="712" data-end="808">
 	<li data-start="712" data-end="740">
<p data-start="714" data-end="740">Brisk walking or treadmill</p>
</li>
 	<li data-start="741" data-end="808">
<p data-start="743" data-end="808">Light sweat, slightly elevated breathing (but you can still talk) - <strong>20 min in Zone 2 </strong></p>
</li>
</ul>
<p data-start="810" data-end="859">Increase steps gradually (+1,000 every 1–2 weeks)</p>
<p data-start="861" data-end="903"><strong data-start="861" data-end="881">Rule to move up:</strong><br data-start="881" data-end="884" />3 consistent weeks.</p></p><p><h2>Layer 3 — Mobility + Core (10–15 min, 4–6 days/week)</h2>
<strong>Goal:</strong> Prevent injuries and improve posture, stability, and movement quality.
These exercises activate the <strong>core, hips, and shoulders</strong>, which are essential before moving to heavier strength training.</p><p><hr /></p><p><h3>1. Plank (20–40 seconds)</h3>
<img src="https://images.openai.com/static-rsc-3/kYW_oO61OI6SyCBekFWfNxTtnV9dHVoA7MrI-6RNJmU7PPaFkOEgxZfrXCzXXzsUKohmEoeNY-IKIKnngTRhfvOAvCeJrIo3jKOt9ww5cFk?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://blog.nasm.org/hubfs/how-to-perform-standard-plank.jpg" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/STdAnDw9Uka5ju4XjWHk3fxAQMWjMOj9VHxWQSNefMaohGdwBtE_5ZlC1Zd1mBhY_eK4KmPAVPaFlWmrO-Fnr04Ba30Yjm_lRvACD0Ub3yY?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/k0Tk5UU_JrtrEzGp83HjD5YaMLpqUXJca-_Zq78rEdjOZwE2pSOcLLCbEOmDdIg8K392i4SDrMMgdkFQr5fbOEQjdFYT3GVqdo0hy_B6Qg8?purpose=fullsize&v=1" alt="Image" /></p><p><strong>How to do it</strong>
<ul>
 	<li>Place elbows under shoulders.</li>
 	<li>Keep body in a straight line (head → heels).</li>
 	<li>Engage core and glutes.</li>
 	<li>Do not let hips sag.</li>
</ul>
<strong>Why it matters</strong>
<ul>
 	<li>Strengthens the entire core</li>
 	<li>Protects the lower back</li>
 	<li>Improves stability for lifting and running</li>
</ul></p><p><hr /></p><p><h3>2. Glute Bridge (12–15 reps)</h3>
<img src="https://images.openai.com/static-rsc-3/pDHV2odWxRRLeysP84dZ8tvH4FcZtM7lp86BBPyy94wIofglvGWrmIy5CtzxEYMlk6J7Vo3PoPYQWKyYkcnd5rQcN7tFU_p56AtBZ36R6v4?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://www.verywellfit.com/thmb/Cxy1sCbRKwA1rqS1w36bCPlbx2w%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/BasicBridgeExcercise_annotated-e564888866a746b8bbe02c9a9acbf3e5.jpg" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/0lSJTgpJBPym6Q_nQK5lw-zSzJM4tGt69wH1rXMlV8i2BNJouTN4_sfM01CjbV-ahcnhIo5p8ekSX2wQAcMSWUbYQnjH99V9LYuFbD9elVI?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://www.realsimple.com/thmb/9b9-hhqma8BHUN_MA0nxrrdC6vI%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/HipBridge-4fadd027f2a54d27868049c0f46f8429.png" alt="Image" /></p><p><strong>How to do it</strong>
<ul>
 	<li>Lie on your back with knees bent.</li>
 	<li>Feet flat on the floor.</li>
 	<li>Lift hips until body forms a straight line from shoulders to knees.</li>
 	<li>Squeeze glutes at the top.</li>
</ul>
<strong>Why it matters</strong>
<ul>
 	<li>Activates glutes</li>
 	<li>Reduces lower-back stress</li>
 	<li>Improves hip strength</li>
</ul></p><p><hr /></p><p><h3>3. Dead Bug (8–10 reps per side)</h3>
<img src="https://images.openai.com/static-rsc-3/DYSEnO0gXR9842FN4KwoVX-rQ7gGOqvLbC6JXeUP7G3j9KNVXzM_riSqX7ZaSjNAiFaXc2HhNmrC0jIa1W3VGr7KRFKwt6EBPR6D_2Lu6wY?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/udP4Y-VVeFkrhNMr8EL6ScBSd1_ULvcDFdcLaDakzFhxQ7hucuBkg-sONcNt_nyydsM-ATtTfAfTxj1iY7af8fYLmner0hvViCLHpsUKO6k?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/WiyHyPRAb3Rbc0LwDECEBp2bwcG34cEkJ8YzjuAOFEozYQ8G8vk7WcndlpGr57ScmSqp4GwuEo7Q1gPuqAU8oArCJHl7hZZF6hBANo0oqms?purpose=fullsize&v=1" alt="Image" /></p><p><img src="https://images.openai.com/static-rsc-3/KISmGZ2OpFe1koW0Q06qmuJRbeyiT3bX1E9lKMV5J3o8Sz4df_dr_AWUjAbJsdAIkzjH0D2lA8nu4VFwtOzCjhMLrJItlP-F3_6UuTqGg08?purpose=fullsize&v=1" alt="Image" /></p><p><strong>How to do it</strong>
<ul>
 	<li>Lie on your back.</li>
 	<li>Arms and knees up (90° angle).</li>
 	<li>Slowly extend opposite arm and leg.</li>
 	<li>Keep lower back pressed into the floor.</li>
</ul>
<strong>Why it matters</strong>
<ul>
 	<li>Builds deep core stability</li>
 	<li>Improves coordination</li>
 	<li>Protects the spine</li>
</ul></p><p><hr /></p><p><h3>4. Hip Hinge Drill</h3>
<img src="https://images.squarespace-cdn.com/content/v1/5f5e8592d2b0854b18af6975/14230e82-0f83-406e-b3c5-02ffe626917f/Hip%2Bhinge%2Bwith%2Bdowel.jpg" alt="Image" /></p><p><img src="https://cdn.shopify.com/s/files/1/2009/9771/files/hip_hinge_technique.jpg?v=1607347806" alt="Image" /></p><p><img src="https://cdn.shopify.com/s/files/1/0252/3155/6686/files/Bodyweight_Hip_Hinge.jpg?v=1750167985" alt="Image" /></p><p><img src="https://i.pinimg.com/736x/54/83/3f/54833fd1d80faed59460d97ecd92c03a.jpg" alt="Image" /></p><p><strong>How to do it</strong>
<ul>
 	<li>Stand tall with feet shoulder-width apart.</li>
 	<li>Push hips backward (not down).</li>
 	<li>Keep back neutral.</li>
 	<li>Slight bend in knees.</li>
</ul>
<strong>Why it matters</strong>
<ul>
 	<li>Teaches the correct <strong>deadlift pattern</strong></li>
 	<li>Protects the lower back</li>
 	<li>Improves movement mechanics</li>
</ul></p><p><hr /></p><p><h3>5. Shoulder Mobility</h3>
<img src="https://images.ctfassets.net/hjcv6wdwxsdz/5zBKHMyTzmBnlBojchMIjh/19785464501e7cbddddf42ee99e7fc74/wall-slides-claudia-rest.png?w=1200" alt="Image" /></p><p><img src="https://s3.amazonaws.com/prod.skimble/assets/2538434/image_iphone.jpg" alt="Image" /></p><p><img src="https://images.ctfassets.net/hjcv6wdwxsdz/60YANQWKLYNOw0nYtd8AvO/89838694c0a13c2cb06fce392c94861c/woman-doing-wall-angels.png" alt="Image" /></p><p><img src="https://app-media.fitbod.me/v2/517/images/landscape/0_960x540.jpg" alt="Image" /></p><p><strong>How to do it</strong>
<ul>
 	<li>Stand with back against a wall.</li>
 	<li>Raise arms slowly overhead while keeping back flat.</li>
 	<li>Move slowly and controlled.</li>
</ul>
<strong>Why it matters</strong>
<ul>
 	<li>Improves shoulder range of motion</li>
 	<li>Reduces neck and upper-back tension</li>
 	<li>Helps posture (especially for desk work)</li>
</ul></p><p><hr /></p><p><h2>Simple Daily Routine (10–15 minutes)</h2>
<ol>
 	<li>Plank — 30 sec</li>
 	<li>Glute bridge — 12 reps</li>
 	<li>Dead bug — 10 reps each side</li>
 	<li>Hip hinge drill — 10 reps</li>
 	<li>Shoulder mobility — 10 reps</li>
</ol>
Repeat <strong>2 rounds</strong>.</p><p><hr /></p><p><h2>Rule to Move to the Next Layer</h2>
You can progress when:
<ul>
 	<li>No pain during exercises</li>
 	<li>Good form and control</li>
 	<li>Core feels stable</li>
</ul>
Then you can safely move to <strong>Layer 4 (Strength training)</strong>.</p>` } }
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
