import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From Top 10 to #1: How I Built a Dental Empire Through Honest SEO and Strategy",
  description: "From Top 10 to #1: How I Built a Dental Empire Through Honest SEO and Strategy — by Hami Tahm",
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
          <span>From Top 10 to #1: How I Built a Dental Empire Through Honest SEO and Strategy</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Marketing
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          From Top 10 to #1: How I Built a Dental Empire Through Honest SEO and Strategy
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Feb 15, 2026 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p data-path-to-node="5">Eight years ago, I was just a specialist sharing my SEO journey on a personal blog. I wasn’t looking for clients; I was looking for results. Then, a message landed in my inbox that changed everything.</p>
<p data-path-to-node="6">A prominent orthodontist asked: <b data-path-to-node="6" data-index-in-node="32">“Can you rank my website on the first page?”</b></p>
<p data-path-to-node="7">I was honest. I told him I had never done a project for anyone else before. But he trusted my transparency. That "curiosity" turned into a <b data-path-to-node="7" data-index-in-node="139">7.5-year partnership</b> that redefined his practice.</p></p><p><h3 data-path-to-node="8">The "Failing" Start That Led to a Masterstroke</h3>
<p data-path-to-node="9">For the first six months, I struggled. I couldn't get his keywords to page one. Yet, instead of firing me, he offered me a second website. Why?</p></p><p><blockquote data-path-to-node="10">
<p data-path-to-node="10,0"><i data-path-to-node="10,0" data-index-in-node="0">“You are totally different from every agency I’ve worked with,”</i> he told me. <i data-path-to-node="10,0" data-index-in-node="76">“It’s in the way you explain strategy and marketing.”</i></p>
</blockquote>
<p data-path-to-node="11">I made a bold move. I told him: <b data-path-to-node="11" data-index-in-node="32">"Stop running multiple weak websites. It’s not strategically smart."</b> We redirected everything into one powerhouse domain. I chose authority over vanity.</p></p><p><h3 data-path-to-node="12">Beyond the Search Bar: Building a Brand</h3>
<p data-path-to-node="13">SEO was just the beginning. I realized that for doctors, <b data-path-to-node="13" data-index-in-node="57">Brand Awareness</b> is the real currency. We didn't just want clicks; we wanted "Top-of-Mind" status. We implemented:</p></p><p><ul data-path-to-node="14">
 	<li>
<p data-path-to-node="14,0,0"><b data-path-to-node="14,0,0" data-index-in-node="0">Retargeting Funnels:</b> Ensuring every visitor stayed connected to his brand.</p>
</li>
 	<li>
<p data-path-to-node="14,1,0"><b data-path-to-node="14,1,0" data-index-in-node="0">Data-Driven Dashboards:</b> Tracking brand growth and awareness in real-time.</p>
</li>
 	<li>
<p data-path-to-node="14,2,0"><b data-path-to-node="14,2,0" data-index-in-node="0">Google Ads & Lead Gen:</b> Scaling patient acquisition once the foundation was solid.</p>
</li>
 	<li>
<p data-path-to-node="14,3,0"><b data-path-to-node="14,3,0" data-index-in-node="0">CRO (Conversion Rate Optimization):</b> Tracking how many clicks actually turned into patients across his three clinics.</p>
</li>
</ul>
<h3 data-path-to-node="15">The Result?</h3>
<p data-path-to-node="16">When we started, he was one of the top 10 orthodontists in the city. By year seven, through relentless optimization and a "brand-first" mentality, <b data-path-to-node="16" data-index-in-node="147">he became #1.</b></p></p><p><h2 data-path-to-node="18">Why I’m Sharing This Now</h2>
<p data-path-to-node="19">This was my first and only client project. I don't believe in handling dozens of accounts with cookie-cutter templates. I believe in <b data-path-to-node="19" data-index-in-node="133">deep-dive growth.</b></p>
<p data-path-to-node="20">I am now bringing this same philosophy—transparency, strategic redirection, and long-term branding—to the <b data-path-to-node="20" data-index-in-node="106">North American market.</b></p>
<p data-path-to-node="21">If you are a dentist or orthodontist in <b data-path-to-node="21" data-index-in-node="40">Canada or the US</b> who is tired of "unreliable agencies" and wants a partner who cares more about your ROI than just a monthly fee, let’s talk. I don't just rank keywords; I build market leaders.</p>` } }
        />

        {/* Author box */}
        <div style={ { marginTop: 60, padding: "24px 0", borderTop: "1px solid var(--line)", display: "flex", gap: 16, alignItems: "center" } }>
          <div>
            <div style={ { fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500 } }>Hami Tahm</div>
            <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" } }>Tech Founder &middot; Toronto</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .post-content {
          font-family: var(--serif);
          font-size: 18px;
          line-height: 1.75;
          color: var(--ink);
        }
        .post-content p {
          margin-bottom: 1.4em;
        }
        .post-content h2 {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 500;
          margin: 2em 0 0.8em;
          letter-spacing: -.01em;
        }
        .post-content h3 {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 500;
          margin: 1.8em 0 0.6em;
        }
        .post-content a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .post-content ul, .post-content ol {
          margin: 1em 0;
          padding-left: 1.5em;
        }
        .post-content li {
          margin-bottom: 0.5em;
        }
        .post-content blockquote {
          border-left: 3px solid var(--accent);
          padding-left: 20px;
          margin: 1.5em 0;
          color: var(--muted);
          font-style: italic;
        }
        .post-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5em 0;
        }
        .post-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          font-family: var(--sans);
          font-size: 15px;
        }
        .post-content th, .post-content td {
          border: 1px solid var(--line-strong);
          padding: 10px 14px;
          text-align: left;
        }
        .post-content th {
          background: var(--accent-soft);
          font-weight: 600;
        }
      `}</style>
    </article>
  );
}
