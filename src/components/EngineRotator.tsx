"use client";

import { useEffect, useState } from "react";

// Engines cycle in the homepage H1 ("Get ChatGPT to recommend you..."), slot-machine
// style: a vertical reel that steps down one name every few seconds. All names stay
// in the DOM (only clipped via overflow, not display:none/visibility:hidden), so
// crawlers and screen readers still see the full list, not just whichever one is
// visible when the page renders.
const ENGINES = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Meta AI", "Grok"];

const INTERVAL_MS = 2200;

export function EngineRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect reduced-motion users: don't cycle, just show the first engine.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ENGINES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        height: "1em",
        lineHeight: 1,
        verticalAlign: "top",
      }}
    >
      <span
        style={{
          display: "block",
          transform: `translateY(-${index}em)`,
          transition: "transform .5s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {ENGINES.map((name) => (
          <span key={name} style={{ display: "block", height: "1em", lineHeight: 1 }}>
            {name}
          </span>
        ))}
      </span>
    </span>
  );
}
