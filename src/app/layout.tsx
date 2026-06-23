import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const GA_ID = "G-Z1L4M2SD14";
const GTM_ID = "GTM-P3HNG5HQ";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Site-wide entity schema — establishes Hami Tahm + HamiTahm.com as canonical
// entities across every page. Page-level schema references these via @id.
const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://hamitahm.com/#hami-tahm",
      name: "Hami Tahm",
      url: "https://hamitahm.com/",
      jobTitle: "AI Visibility Consultant",
      worksFor: { "@id": "https://hamitahm.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "111 Peter Street, 9th Floor, Suite 902",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2H1",
        addressCountry: "CA",
      },
      knowsAbout: [
        "AI Visibility",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization",
        "SEO",
      ],
      sameAs: [
        "https://www.linkedin.com/in/hamitahm",
        "https://x.com/hamitahm",
        "https://www.crunchbase.com/person/hami-tahm",
        "https://homecalc.ca",
        "https://houmse.com",
        "https://dimaht.com/",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://hamitahm.com/#organization",
      name: "HamiTahm.com",
      url: "https://hamitahm.com/",
      founder: { "@id": "https://hamitahm.com/#hami-tahm" },
      areaServed: { "@type": "Country", name: "Canada" },
      foundingDate: "2024",
    },
    {
      "@type": "WebSite",
      "@id": "https://hamitahm.com/#website",
      name: "Hami Tahm",
      url: "https://hamitahm.com/",
      publisher: { "@id": "https://hamitahm.com/#organization" },
      inLanguage: "en-CA",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Hami Tahm \u2014 AI Visibility Consultant in Canada",
    template: "%s | Hami Tahm",
  },
  description:
    "Hami Tahm \u2014 AI Visibility Consultant in Canada. Helping businesses appear in ChatGPT, Perplexity, and Google AI Overviews.",
  metadataBase: new URL("https://hamitahm.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Hami Tahm",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hamitahm",
    creator: "@hamitahm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* GA4 now fires via GTM — no standalone gtag needed */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
