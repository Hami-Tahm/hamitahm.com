import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hami Tahm — AI Visibility Consultant",
    short_name: "Hami Tahm",
    description:
      "AI Visibility Consultant in Canada. Helping businesses appear in ChatGPT, Perplexity, and Google AI Overviews.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#f4f1ea",
    theme_color: "#0f6e78",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
