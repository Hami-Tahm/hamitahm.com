"use client";

import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(246,241,232,.80)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--serif)",
            fontSize: 21,
            fontWeight: 500,
            letterSpacing: "-.01em",
            display: "flex",
            alignItems: "center",
            gap: 9,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 10px var(--accent)",
            }}
          />
          Hami Tahm
        </Link>

        <div className="nav-links-desktop" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/writing">Writing</NavLink>
          <NavLink href="/hami-tahm">About</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
          <Link
            href="/ai-visibility"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12.5px",
              letterSpacing: ".05em",
              border: "1px solid var(--line-strong)",
              padding: "8px 16px",
              borderRadius: 999,
              color: "var(--ink)",
              transition: "all .2s",
            }}
          >
            AI Visibility
          </Link>
        </div>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--line-strong)",
            borderRadius: 9,
            width: 40,
            height: 40,
            color: "var(--ink)",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {open && (
        <div style={{ padding: "0 32px 18px", display: "flex", flexDirection: "column", gap: 16 }}>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/writing">Writing</NavLink>
          <NavLink href="/hami-tahm">About</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
          <Link href="/ai-visibility" style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".05em", color: "var(--accent)" }}>
            AI Visibility
          </Link>
        </div>
      )}

    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--mono)",
        fontSize: "12.5px",
        letterSpacing: ".05em",
        color: "var(--muted)",
        transition: "color .2s",
      }}
    >
      {children}
    </Link>
  );
}
