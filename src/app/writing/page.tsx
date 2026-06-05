import type { Metadata } from "next";
import Link from "next/link";
import { writingPosts } from "@/lib/writing-posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Hami Tahm on startups, longevity, finance, and building toward a unicorn.",
  alternates: {
    canonical: "https://hamitahm.com/writing/",
  },
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
