import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Real Founder Dilemma (Not About Shares)",
  description: "The Real Founder Dilemma (Not About Shares) — by Hami Tahm",
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
          <span>The Real Founder Dilemma (Not About Shares)</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Mindset &amp; Growth
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          The Real Founder Dilemma (Not About Shares)
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Jul 16, 2025 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p data-start="177" data-end="370">When people talk about the “founder dilemma,” they often mean choosing between keeping more shares or raising money. But I think there’s another, deeper dilemma—choosing who joins your journey.</p>
<p data-start="372" data-end="672">If you want to build a unicorn startup, you’ve already chosen a hard path. It’s not just about business. It’s about mental strength, long-term focus, and surviving the ups and downs. You may feel tired, frustrated, or even alone. And after years of trying, it’s still possible that you won’t succeed.</p>
<p data-start="674" data-end="1027">Yesterday, I spoke with a technical co-founder who had worked on her startup for 9 years. It didn’t succeed, and now she is looking for a job. This kind of story is not rare. In fact, it’s almost <em data-start="870" data-end="883">unavoidable</em> when you play this high-risk game. Joining the startup world means accepting both the chance of big success—and the possibility of 10x failure.</p>
<p data-start="1029" data-end="1319">This is why the people you choose in the early stages are so important. Your co-founders and your first teammates are not just workers—they’re your partners in the fight. A great co-founder can push you forward during your worst days. But a wrong co-founder can hold the whole company back.</p>
<p data-start="1321" data-end="1588">Some people are amazing at certain things but not helpful in other areas. Some people were valuable yesterday, but maybe they are not the right fit today. Recognizing this is one of the hardest decisions in a founder’s life. You must constantly update your view—fast.</p>
<p data-start="1590" data-end="1692">The real founder dilemma is about choosing the right people, at the right time, for the right mission.</p>` } }
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
