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

    // If already visible on mount, reveal immediately — prevents stuck-hidden
    // content when JS hydrates after element is already in viewport.
    const rect = el.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportH && rect.bottom > 0) {
      el.classList.add("in");
      return;
    }

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
