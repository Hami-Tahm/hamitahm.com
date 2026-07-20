"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RevealSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // NOTE: this used to call getBoundingClientRect() on mount to catch elements
    // already in the viewport. That forced a synchronous layout for every
    // RevealSection on the page (15+ on the homepage) during hydration, and showed
    // up in Lighthouse as "Forced reflow". It was also redundant: IntersectionObserver
    // queues an initial callback with the current intersection state as soon as you
    // observe(), so an already-visible element still reveals immediately — without
    // forcing layout. Removed 2026-07-19.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      // threshold:0 so even 1px visibility triggers reveal.
      // rootMargin pre-triggers slightly before scroll reaches element.
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );

    io.observe(el);

    // Safety net: if observer never fires within 1.5s, force reveal.
    const safety = window.setTimeout(() => {
      el.classList.add("in");
      io.disconnect();
    }, 1500);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return (
    <div className="rv" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
