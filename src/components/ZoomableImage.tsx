"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * Drop-in replacement for next/image's <Image>: identical props, but clicking
 * the image opens it full-size in a lightbox overlay (click, tap the close
 * button, or press Escape to dismiss).
 *
 * STANDING SITE CONVENTION (see AGENTS.md #6): every genuine content image on
 * this site (a chart, screenshot, or diagram that's part of an article's
 * argument, usually inside a <figure>) should use ZoomableImage instead of a
 * bare <Image>, so readers can zoom in on small text and numbers. Do NOT use
 * this for icons, logos, or avatar/portrait photos, those should stay plain
 * <Image>.
 */
export function ZoomableImage({ style, ...props }: ImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const zoomSrc = typeof props.src === "string" ? props.src : (props.src as { src: string }).src;

  return (
    <>
      <Image
        {...props}
        onClick={() => setOpen(true)}
        style={{ ...style, cursor: "zoom-in" }}
      />
      {open && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          role="dialog"
          aria-modal="true"
          aria-label={typeof props.alt === "string" ? props.alt : "Enlarged image"}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,14,12,.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4vh 4vw",
            cursor: "zoom-out",
          }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            style={{
              position: "fixed",
              top: 18,
              right: 22,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 34,
              lineHeight: 1,
              cursor: "pointer",
              padding: 4,
            }}
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomSrc}
            alt={typeof props.alt === "string" ? props.alt : ""}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
              width: "auto",
              height: "auto",
              borderRadius: 6,
              boxShadow: "0 20px 60px rgba(0,0,0,.5)",
              cursor: "default",
            }}
          />
        </div>
      )}
    </>
  );
}
