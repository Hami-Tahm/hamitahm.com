/**
 * Shared Article + BreadcrumbList JSON-LD builder for blog posts.
 * Returns a string ready to drop into a <script type="application/ld+json"> tag.
 */

const SITE = "https://hamitahm.com";
const AUTHOR_ID = `${SITE}/#hami-tahm`;
const PUBLISHER_ID = `${SITE}/#organization`;

type BlogSchemaInput = {
  /** URL slug, e.g. "what-is-ai-visibility" */
  slug: string;
  /** Article headline / H1 */
  title: string;
  /** Short description (used for Article.description) */
  description: string;
  /** ISO date, e.g. "2026-05-12" */
  datePublished: string;
  /** ISO date, defaults to datePublished */
  dateModified?: string;
  /** Optional OG image, absolute or site-relative */
  image?: string;
  /** Breadcrumb cluster — defaults to AI Visibility cluster */
  cluster?: "ai-visibility" | "blog";
};

export function buildBlogSchema(input: BlogSchemaInput) {
  const {
    slug,
    title,
    description,
    datePublished,
    dateModified = datePublished,
    image,
    cluster = "ai-visibility",
  } = input;

  const url = `${SITE}/blog/${slug}/`;
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE}${image}`
    : undefined;

  const breadcrumbItems =
    cluster === "ai-visibility"
      ? [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Visibility",
            item: `${SITE}/ai-visibility/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Blog",
            item: `${SITE}/blog/`,
          },
          { "@type": "ListItem", position: 4, name: title, item: url },
        ]
      : [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE}/blog/`,
          },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ];

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: "en-CA",
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": PUBLISHER_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  if (resolvedImage) article.image = resolvedImage;

  return {
    "@context": "https://schema.org",
    "@graph": [
      article,
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
    ],
  };
}

/** Convenience: returns the JSON string ready for dangerouslySetInnerHTML. */
export function blogSchemaJson(input: BlogSchemaInput): string {
  return JSON.stringify(buildBlogSchema(input));
}
