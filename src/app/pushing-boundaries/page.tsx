import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pushing Boundaries",
  description: "Pushing Boundaries — by Hami Tahm",
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
          <span>Pushing Boundaries</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Mindset &amp; Growth
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          Pushing Boundaries
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Nov 20, 2024 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>These days, I’m searching for ideas for a new venture. Recently, I realized that real estate is a great industry to enter. Now, I’ve decided to run five businesses simultaneously:</p><p>1. <strong>Listing Website:</strong> A site that lists real estate properties and generates leads for realtors.
2. <strong>Preconstruction Projects:</strong> A platform specifically for preconstruction projects, generating leads for realtors.
3. <strong>Marketing Agency:</strong> A marketing agency focused solely on real estate professionals, including realtors, real estate lawyers, brokerages, and more. to do PPC, SEO with <a href="https://hamitahm.com/seo-expert-toronto/">SEO experts in Toronto</a>, social media marketing, and ...
4. <strong>Mortgage Comparison:</strong> A site that compares mortgage options and provides insights to users.
5. <strong>Insurance Comparison:</strong> A platform that compares insurance options, particularly home insurance.</p><p>These days, I’m working on these projects and staying extremely busy. Many advise me to focus on just one of these ventures, but I enjoy this challenge. At 35, I want to push myself and start all five ventures simultaneously. This challenge excites and motivates me, and I’m determined to succeed.</p><p>I need to learn a lot in these five paths, expand my network, improve my English, and develop many other skills. This is the most challenging work I have ever undertaken—it’s truly pushing me to the limits of my abilities. However, we all know that growth happens when we challenge ourselves. I plan to write about my journey and experiences along the way.
<div id="gtx-trans" style="position: absolute; left: 194px; top: -6px;">
<div class="gtx-trans-icon"></div>
</div></p>` } }
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
