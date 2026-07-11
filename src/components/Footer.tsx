import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "50px 0 60px",
        marginTop: 30,
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 500 }}>
          Hami Tahm<span style={{ color: "var(--accent)" }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 22 }}>
          <FooterLink href="https://x.com/hamitahm">X / Twitter</FooterLink>
          {/* Verify this URL if you ever change it — the previous one 404'd. */}
          <FooterLink href="https://www.linkedin.com/in/hami-tahm/">LinkedIn</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
      </div>
      <div className="wrap">
        {/*
          The footer is sitewide, so crawlers and answer engines read it on every page
          \u2014 and they do quote it back. These ~20 words carry the canonical descriptor.

          Keep this sentence identical to the X bio, the LinkedIn headline and the
          Linktree bio. The repetition across surfaces is the point: it is what tells
          machines these profiles are one entity.
        */}
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: "13.5px",
            color: "var(--muted)",
            marginTop: 26,
            maxWidth: "62ch",
            lineHeight: 1.6,
          }}
        >
          AI Visibility Consultant in Toronto &mdash; helping Canadian businesses get
          cited in ChatGPT, Perplexity, and Google AI&nbsp;Overviews.
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11.5px",
            color: "var(--faint)",
            marginTop: 14,
          }}
        >
          {`\u00A9 2024\u2013${new Date().getFullYear()} Hami Tahm`} &middot; Toronto, Canada &middot;{" "}
          <a href="mailto:hami@hamitahm.com" style={{ color: "inherit" }}>
            hami@hamitahm.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  const Component = isExternal ? "a" : Link;
  const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Component
      href={href}
      {...extraProps}
      style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)", transition: "color .2s" }}
    >
      {children}
    </Component>
  );
}
