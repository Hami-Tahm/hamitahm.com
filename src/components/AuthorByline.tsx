import Image from "next/image";
import Link from "next/link";

/**
 * Standard author byline block used on every blog post and writing page.
 *
 * Layout: 38px circular portrait + name (linked to /hami-tahm/) + jobTitle
 * line. Optionally appends date + read time as part of the second line.
 *
 * Sits inside the post header, below the H1 + subhead, above the article
 * body. Use one of these on every post — never inline a custom byline.
 */
export function AuthorByline({
  date,
  readTime,
}: {
  /** Human-readable date string, e.g. "Mar 07, 2026". */
  date?: string;
  /** Optional read time, e.g. "9 min read". */
  readTime?: string;
}) {
  const meta = [
    "AI Visibility Consultant",
    date,
    readTime,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginTop: 26,
        paddingTop: 22,
        borderTop: "1px solid var(--line)",
      }}
    >
      <Image
        src="/images/hami-tahm/hami-tahm-portrait.png"
        alt="Hami Tahm — AI Visibility Consultant"
        width={42}
        height={42}
        style={{
          borderRadius: "50%",
          border: "1px solid var(--line-strong)",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
      <div>
        <Link
          href="/hami-tahm/"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          Hami Tahm
        </Link>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11.5px",
            color: "var(--faint)",
            marginTop: 2,
          }}
        >
          {meta}
        </div>
      </div>
    </div>
  );
}
