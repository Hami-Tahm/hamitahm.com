import Link from "next/link";
import { CANONICAL_DESCRIPTOR_PROSE } from "@/lib/identity";

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
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
          <FooterLink href="https://x.com/hamitahm">X / Twitter</FooterLink>
          {/* Verify this URL if you ever change it: the previous one 404'd. */}
          <FooterLink href="https://www.linkedin.com/in/hami-tahm/">LinkedIn</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          {/*
            Footer only, and deliberately not in the main navigation (2026-09-28).
            The page needs an internal link from somewhere: it sits in the sitemap at
            0.85 and was linked from nowhere, so it carried no internal weight and
            nothing on the site pointed an answer engine at it.

            Not the top nav, because the two buyer types read each other's pages. A
            direct client who sees "white-label for agencies" in the primary nav can
            reasonably ask why they are paying a direct rate. The footer keeps it
            discoverable to crawlers and to agencies who go looking, without putting
            it in front of someone who came here to buy an audit for themselves.
          */}
          <FooterLink href="/for-agencies/">For Agencies</FooterLink>
          {/* Legal pages are noindex, but they must be reachable from every page;
              that's the point of them. A privacy policy nobody can find isn't one. */}
          <FooterLink href="/privacy/">Privacy</FooterLink>
          <FooterLink href="/terms/">Terms</FooterLink>
          <FooterLink href="/disclaimer/">Disclaimer</FooterLink>
        </div>
      </div>
      <div className="wrap">
        {/*
          The footer is sitewide, so crawlers and answer engines read it on every page,
          and they do quote it back. These words carry the canonical descriptor, from src/lib/identity.ts.

          Do not inline the sentence here. It lives in src/lib/identity.ts because
          the previous copy-in-three-files arrangement drifted into three different
          engine lists, which is the exact fragmentation it was meant to prevent.
          The off-site profiles (X, LinkedIn, Linktree, Clutch) still have to be
          updated by hand to match.
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
          {CANONICAL_DESCRIPTOR_PROSE}
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
