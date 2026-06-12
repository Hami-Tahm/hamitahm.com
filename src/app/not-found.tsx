import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px",
      }}
    >
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        {/* 404 number */}
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(100px, 20vw, 180px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-.04em",
            color: "var(--accent)",
            opacity: 0.15,
            userSelect: "none",
          }}
        >
          404
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-.02em",
            marginTop: -24,
          }}
        >
          This page has zero
          <br />
          <span style={{ color: "var(--accent)" }}>AI visibility.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: 17,
            color: "var(--muted)",
            lineHeight: 1.7,
            marginTop: 20,
            maxWidth: 440,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          No search engine, no LLM, and no human can find anything here —
          because it doesn't exist. Let's get you somewhere real.
        </p>

        {/* About blurb */}
        <div
          style={{
            marginTop: 40,
            padding: "24px 28px",
            background: "var(--accent-soft)",
            borderRadius: 14,
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11.5px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 10,
            }}
          >
            About me
          </div>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 15,
              color: "var(--ink)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            I'm <strong>Hami Tahm</strong> — I help businesses become the answer
            when AI talks about their industry. If your brand isn't showing up in
            ChatGPT, Perplexity, or Google AI Overviews, that's the problem I
            solve.
          </p>
        </div>

        {/* CTAs */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: ".04em",
              padding: "12px 28px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              transition: "background .2s",
            }}
          >
            Go Home
          </Link>
          <Link
            href="/ai-visibility/ai-visibility-audit"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: ".04em",
              padding: "12px 28px",
              borderRadius: 999,
              border: "1px solid var(--line-strong)",
              color: "var(--ink)",
              transition: "all .2s",
            }}
          >
            Get an AI Visibility Audit
          </Link>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: ".04em",
              padding: "12px 28px",
              borderRadius: 999,
              border: "1px solid var(--line-strong)",
              color: "var(--ink)",
              transition: "all .2s",
            }}
          >
            Read the Blog
          </Link>
        </div>

        {/* Fun footer line */}
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            color: "var(--faint)",
            marginTop: 48,
            letterSpacing: ".02em",
          }}
        >
          Error 404 · Not indexed · Not cited · Not found
        </p>
      </div>
    </main>
  );
}
