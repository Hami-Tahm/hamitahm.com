import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "These days ...",
  description: "These days ... — by Hami Tahm",
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
          <span>These days ...</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Blog
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          These days ...
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Nov 19, 2025 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>These days I feel like I’m living in two timelines. Part of me is still that 27-year-old in Iran, and yet today I’m 36. I’ve always believed that under 30 is the time to build, and after 30 is the time to manage. I’m still not sure what the focus should be after 40.</p><p>Right now, everything feels tough. Competing in North America means going up against the whole world—it's exciting, but it’s also hard. I’m just trying to stay in the game and keep moving forward. That’s what matters.</p><p>I’m pushing on sales, growing my network, and at the same time managing two businesses in Iran across a completely different time zone.</p><p>No pain, no gain.</p>` } }
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
