import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hami Tahm: AI Visibility Consultant",
    short_name: "Hami Tahm",
    description:
      "AI Visibility Consultant in Toronto. I help brands earn citations in Google AI Overviews, ChatGPT, Perplexity, and Gemini using AEO and GEO.",
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
