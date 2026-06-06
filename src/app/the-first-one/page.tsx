import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Courage to Start",
  description: "The Courage to Start — by Hami Tahm",
  alternates: {
    canonical: "https://hamitahm.com/the-first-one/",
  },
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
          <span>The Courage to Start</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Mindset &amp; Growth
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          The Courage to Start
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Nov 13, 2024 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>No post is harder than the first post, and no work is tougher than the first one.</p><p>There is no alternative on the path to success; there is only one way—success.</p><p>I’ve decided that my first post will specifically focus on wisdom in English, to honor the act of starting.
<ol>
 	<li>Actions speak louder than words.</li>
 	<li>The journey of a thousand miles begins with a single step.</li>
 	<li>Fortune favors the bold.</li>
 	<li>The best way to get something done is to begin.</li>
 	<li>Feel the fear and do it anyway.</li>
 	<li>Don’t let the perfect be the enemy of the good.</li>
 	<li>Well begun is half done.</li>
</ol></p>` } }
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
