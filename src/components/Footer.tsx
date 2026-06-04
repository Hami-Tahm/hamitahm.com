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
          <FooterLink href="https://linkedin.com/in/hamitahm">LinkedIn</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
      </div>
      <div className="wrap">
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11.5px",
            color: "var(--faint)",
            marginTop: 26,
          }}
        >
          {`\u00A9 2024\u2013${new Date().getFullYear()} Hami Tahm`} &mdash; Toronto, Canada. Building toward a unicorn.
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
