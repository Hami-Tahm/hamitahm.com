import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaTracking } from "@/components/CtaTracking";

const GA_ID = "G-Z1L4M2SD14";
const GTM_ID = "GTM-P3HNG5HQ";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Hanken Grotesk is the body/UI font (--sans). It used to load via a
// render-blocking <link> to fonts.googleapis.com, which cost a DNS + TLS +
// stylesheet round trip before first paint (~1.6s of render-blocking on
// mobile). next/font self-hosts it from our own origin at build time, so the
// blocking third-party request — and both preconnects — are gone.
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Site-wide entity schema — establishes Hami Tahm + HamiTahm.com as canonical
// entities across every page. Page-level schema references these via @id.
const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // THE canonical Person. Defined here ONCE and referenced everywhere else by @id.
    // (/hami-tahm/ used to redefine this same @id with a conflicting sameAs list —
    // removed 2026-07-14. Add new properties HERE, never in a page.)
    {
      "@type": "Person",
      "@id": "https://hamitahm.com/#hami-tahm",
      name: "Hami Tahm",
      url: "https://hamitahm.com/hami-tahm/",
      jobTitle: "AI Visibility Consultant",
      // CANONICAL DESCRIPTOR — keep this identical to the footer, the X bio, the
      // LinkedIn headline, the Linktree bio and every other profile. The repetition
      // of one exact sentence across surfaces is what tells machines these profiles
      // are a single entity. If you change it, change it EVERYWHERE, or you rebuild
      // the fragmentation this was written to fix.
      description:
        "AI Visibility Consultant in Toronto — AEO & GEO for Canadian businesses that want to be cited in Google AI Overviews, ChatGPT, Gemini, and Claude.",
      image: "https://hamitahm.com/images/hami-tahm/hami-tahm-portrait.png",
      worksFor: { "@id": "https://hamitahm.com/#organization" },
      /*
       * ADDRESS — corrected three times now, so read this before touching it.
       *
       * The working space is a dedicated desk in an incubator at this address. Hami
       * is there during stated hours and clients CAN be received, by appointment.
       * So the address is true and belongs here.
       *
       * What it is NOT is a Google Business Profile location. GBP additionally
       * requires permanent signage in the business's own name, and the signage there
       * is the incubator's. No GBP listing is being pursued, which is the right call
       * — an ineligible listing gets suspended later, usually at the worst moment.
       *
       * `geo` has been off, on, and off again. The full history is in the comment
       * where it used to sit, just below the address. Short version: it is TRUE but
       * it is not VALID on a Person, so it needs a Place node before it comes back.
       *
       * Two things stay off, each for its own reason:
       *   - `ProfessionalService` / any LocalBusiness subtype ON THE SERVICE PAGES.
       *     That was a real bug, not a deprecation: three pages each declared their
       *     own business entity and fragmented the identity graph. Services are
       *     `Service` with `provider` pointing here. Declaring a LocalBusiness type
       *     ONCE, on this node, would not have that problem — see AGENTS.md §5.
       *
       * This node is the ONE place the address is declared. Keep it that way.
       */
      address: {
        "@type": "PostalAddress",
        streetAddress: "111 Peter Street, 9th Floor, Suite 902",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5V 2H1",
        addressCountry: "CA",
      },
      /*
       * `geo` REMOVED AGAIN 2026-08-16 — and this time for a DIFFERENT reason than
       * the 08-11 removal, so read both before touching it.
       *
       * 08-11: removed because "no rich result" was treated as grounds for deletion.
       * That reasoning was wrong and AGENTS.md §5 now forbids it.
       *
       * 08-16: removed because Ahrefs reports "Unexpected property for Person" on all
       * 69 pages. `geo` belongs to Place / LocalBusiness, never to Person. So the
       * coordinates were true but sat on a node that cannot carry them.
       *
       * The coordinates are 43.6469, -79.3924 and they are correct. They are parked
       * here in a comment rather than deleted, so that whoever declares a Place or
       * LocalBusiness node does not have to look them up again. See AGENTS.md §5.
       */
      knowsAbout: [
        "AI Visibility",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Search Optimization",
        "SEO",
        "Real estate technology",
        "Canadian mortgage market",
      ],
      // Every URL below was opened and confirmed to resolve (2026-07-14).
      // The previous LinkedIn entry was a dead URL and had been declared site-wide,
      // in both schema and footer. VERIFY ANY URL BEFORE ADDING IT HERE — a broken
      // sameAs is worse than no sameAs.
      //
      // This list is deliberately SCOPED to the professional English-language entity.
      // sameAs is an identity assertion, not a link: everything listed here is being
      // declared, to every crawler and every model, as "this is the same person."
      // So only list properties that belong to this practice. Personal, other-language
      // and unrelated-venture properties are intentionally NOT declared — not hidden,
      // just not asserted as part of this professional identity.
      // sameAs holds ALTER-EGO PROFILES only — other places that ARE this same person.
      // homecalc.ca and houmse.com were removed 2026-07-14: they are companies Hami
      // FOUNDED, not alternate identities of the person, so they do not belong here.
      // That call was right; the `owns` array it originally pointed to was not, and is
      // gone as of 2026-08-16 (see the note below it). The founder relationship now
      // lives where it is valid: `founder` on each Organization node, pointing back
      // at this Person.
      sameAs: [
        "https://www.linkedin.com/in/hami-tahm/",
        "https://x.com/hamitahm",
        "https://www.youtube.com/@HamiTahm",
        "https://linktr.ee/Hami_Tahm",
        "https://www.crunchbase.com/person/hami-tahm",
        "https://github.com/Hami-Tahm",
        "https://www.producthunt.com/@hamitahm",
      ],
      /*
       * `owns` WAS HERE AND WAS INVALID — removed 2026-08-16. Do not re-add it.
       *
       * Ahrefs flagged this on all 69 crawled pages: "Unexpected type for owns.
       * Expected types: OwnershipInfo, Product." schema.org's `owns` does not accept
       * an Organization, so pointing it at homecalc.ca and houmse.com was never valid
       * — the note that used to sit here claimed it was the schema.org-correct
       * modelling, and that claim was simply wrong.
       *
       * Nothing is lost by deleting it. The relationship is ALREADY expressed, and
       * expressed validly, by `founder` on each Organization node below pointing back
       * at this Person. That is the canonical direction for this link.
       *
       * Note for AGENTS.md §5: this removal does not contradict the rule. §5 protects
       * markup that is TRUE and FREE. Invalid markup is not free — a validator error
       * can cost the parse of the whole node, which is a real price, unlike "Google
       * says it doesn't use this".
       */
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
    // Companies Hami founded — declared as first-class entities with a founder link
    // back to the Person, which is the schema.org-correct way to connect them.
    {
      "@type": "Organization",
      "@id": "https://homecalc.ca/#organization",
      name: "HomeCalc.ca",
      url: "https://homecalc.ca/",
      description:
        "Canadian real-estate and personal-finance calculators. A live case study in AI citation growth.",
      founder: { "@id": "https://hamitahm.com/#hami-tahm" },
    },
    {
      "@type": "Organization",
      "@id": "https://houmse.com/#organization",
      name: "Houmse",
      url: "https://houmse.com/",
      description: "Home services marketplace serving Toronto and the GTA.",
      founder: { "@id": "https://hamitahm.com/#hami-tahm" },
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
    "Hami Tahm \u2014 AI Visibility Consultant in Canada. Helping businesses appear in Google AI Overviews, ChatGPT, Gemini, and Claude.",
  metadataBase: new URL("https://hamitahm.com"),
  // SELF-REFERENCING CANONICAL FOR EVERY PAGE, from one place.
  // Next resolves a relative `alternates.canonical` against metadataBase + the current
  // route, so "./" yields the page's own URL. Previously only ~24 of 63 pages set a
  // canonical explicitly; the other 39 had none. Pages that declare their own absolute
  // canonical still override this. trailingSlash:true keeps the slash consistent.
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Hami Tahm",
    // Root default. Next resolves this against each page's own canonical/metadataBase,
    // so per-page og:url comes out correct rather than every page claiming the root.
    url: "https://hamitahm.com/",
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
    <html
      lang="en-CA"
      className={`${newsreader.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        {/* Google Tag Manager.
            lazyOnload (was afterInteractive): GTM pulls ~158KiB and was the main
            source of long tasks / TBT on mobile. Deferring it until the browser is
            idle keeps it off the critical path. Trade-off: tags fire a beat later,
            so a visitor who bounces in well under a second may go uncounted. */}
        <Script id="gtm-init" strategy="lazyOnload">
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
        {/* Single delegated listener that emits `cta_click` for every funnel CTA. */}
        <CtaTracking />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
