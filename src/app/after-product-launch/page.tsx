import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Entrepreneurial Journey with Up-Diet.com",
  description: "My Entrepreneurial Journey with Up-Diet.com — by Hami Tahm",
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
          <span>My Entrepreneurial Journey with Up-Diet.com</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Unicorn Building
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          My Entrepreneurial Journey with Up-Diet.com
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Sep 16, 2025 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>These days I am very busy. We officially launched <strong>Up-Diet.com</strong>, and now my main focus is on marketing.</p><p>For the <strong>B2C side</strong>, I decided to work directly with individuals who already have their DNA or gut microbiome test results. They can use our platform to turn those results into practical and personalized meal plans.</p><p>On the <strong>B2B side</strong>, we provide an <strong>API meal plan service</strong> to gut microbiome companies. I discovered their pain point: they struggle with
<ol>
 	<li><strong>High CAC</strong></li>
 	<li><strong>Low LTV</strong></li>
 	<li><strong>Weak engagement/retention</strong></li>
</ol>
Our solution helps them keep their customers more active and loyal.</p><p>I also want to <strong>partner with nutritionists</strong>. The idea is simple:
They can recommend our service to their clients, and we share the earnings. Later, I plan to build a <strong>marketplace</strong> where nutritionists and biohackers in the longevity space can connect with users.</p><p>Right now, I am <strong>team building in marketing</strong>. I never give up, but I stay flexible with pivots when needed. I set a sales target for myself last Monday that will last for two weeks. Now it’s Tuesday, and I still don’t have any sales. That’s a bummer—but I will keep working on it.</p><p>For me, <strong>entrepreneurship is not just work; it’s a lifestyle.</strong> And this lifestyle fits me well.</p><p>Recently, I applied to two incubators: <strong>Johnson & Johnson</strong> and <strong>MaRS</strong>. Both rejected me. Johnson & Johnson said my product was not in their path, and MaRS said I didn’t have enough traction. Still, I’m happy because three other companies replied to me, and two of them want to set up meetings now.</p><p>This is only the beginning.</p><p>P.S.: I want to reach <strong>10,000 US dollars</strong>. This is my first goal for this year.</p>` } }
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
