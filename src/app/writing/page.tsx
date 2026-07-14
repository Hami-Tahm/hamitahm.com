import type { Metadata } from "next";
import Link from "next/link";
import { writingPosts } from "@/lib/writing-posts";

export const metadata: Metadata = {
  // NOINDEX + delisted 2026-07-14. This is the index of the older personal-writing
  // cluster (longevity, finance, lifestyle) which is now noindexed. Keeping the index
  // itself indexed — at a high sitemap priority — while its contents are noindexed is
  // contradictory, and the page's own description used to broadcast the exact
  // "longevity / building toward a unicorn" signals we spent the day removing.
  // The on-topic keeper essays (10,000-hour rule, SEO Toronto, etc.) are individually
  // indexed and in the sitemap, so nothing loses discoverability.
  robots: { index: false, follow: true },
  title: "Writing",
  description:
    "Older personal essays by Hami Tahm. For AI-visibility, AEO and GEO writing, see the blog.",
};

export default function WritingPage() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 30, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }} />
          Writing
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 48 }}>
          All articles
        </h1>

        <div>
          {writingPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 24,
                padding: "20px 0",
                borderTop: "1px solid var(--line)",
                transition: "padding-left .25s",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)" }}>{post.cat}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>{post.title}</span>
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", whiteSpace: "nowrap" }}>{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
