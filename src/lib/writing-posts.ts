export type WritingPost = {
  slug: string;
  cat: string;
  title: string;
  date: string;
  sortDate: string;
};

const posts: WritingPost[] = [
  { slug: "/how-many-diets-exist-in-the-world", cat: "Longevity & Health", title: "How Many Diets Exist in the World?", date: "May 30, 2025", sortDate: "2025-05-30" },
  { slug: "/the-longevity-economy-6-high-growth-sectors", cat: "Longevity & Health", title: "The Longevity Economy: 6 High-Growth Sectors Ranked by Market Size", date: "May 26, 2025", sortDate: "2025-05-26" },
  { slug: "/service-business-growth", cat: "Unicorn Building", title: "What I'm Actually Good At", date: "Apr 20, 2026", sortDate: "2026-04-20" },
  { slug: "/wine-profile", cat: "Hobby", title: "Understanding My Wine Taste Profile", date: "Mar 07, 2026", sortDate: "2026-03-07" },
  { slug: "/under-30", cat: "Longevity & Health", title: "How to be under 30 (Bioage)", date: "Mar 02, 2026", sortDate: "2026-03-02" },
  { slug: "/optimal-shower-hair-routine", cat: "Longevity & Health", title: "The Optimal Shower & Hair Routine for Busy Founders", date: "Feb 24, 2026", sortDate: "2026-02-24" },
  { slug: "/orthodontic-seo-marketing-case-study", cat: "Marketing", title: "From Top 10 to #1: How I Built a Dental Empire Through Honest SEO and Strategy", date: "Feb 15, 2026", sortDate: "2026-02-15" },
  { slug: "/fitness-pyramid", cat: "Longevity & Health", title: "Fitness Pyramid (Beginner → Advanced)", date: "Feb 13, 2026", sortDate: "2026-02-13" },
  { slug: "/these-days", cat: "Blog", title: "These days ...", date: "Nov 19, 2025", sortDate: "2025-11-19" },
  { slug: "/after-product-launch", cat: "Unicorn Building", title: "My Entrepreneurial Journey with Up-Diet.com", date: "Sep 16, 2025", sortDate: "2025-09-16" },
  { slug: "/the-real-founder-dilemma", cat: "Mindset & Growth", title: "The Real Founder Dilemma (Not About Shares)", date: "Jul 16, 2025", sortDate: "2025-07-16" },
  { slug: "/1-out-of-20", cat: "Unicorn Building", title: "From Zero to Unicorn: Can an Ordinary Founder Make It?", date: "Jul 05, 2025", sortDate: "2025-07-05" },
  { slug: "/how-ai-is-reshaping-learning", cat: "Productivity", title: "How AI Is Reshaping Learning: Your Shortcut to Mastering Skills Faster", date: "Apr 01, 2025", sortDate: "2025-04-01" },
  { slug: "/exercise", cat: "Longevity & Health", title: "Exercise & Physical Activity: Your Guide to Smarter Workouts", date: "Mar 09, 2025", sortDate: "2025-03-09" },
  { slug: "/sleep-quality-101", cat: "Longevity & Health", title: "Sleep Quality 101: Unlock the Secrets to Better Rest", date: "Mar 06, 2025", sortDate: "2025-03-06" },
  { slug: "/how-much-wealth-should-you-aim-for", cat: "Mindset & Growth", title: "How Much Wealth Should You Aim For?", date: "Mar 03, 2025", sortDate: "2025-03-03" },
  { slug: "/the-10000-hour-rule", cat: "Productivity", title: "The 10,000-Hour Rule: How Many Hours Do You Need to Reach 7/10 Mastery?", date: "Feb 22, 2025", sortDate: "2025-02-22" },
  { slug: "/hydration", cat: "Longevity & Health", title: "Hydration for High Performers", date: "Feb 21, 2025", sortDate: "2025-02-21" },
  { slug: "/the-future-of-life-expectancy", cat: "Longevity & Health", title: "Lifespan: The Role of Wealth and Technology in Extending Life Expectancy", date: "Feb 13, 2025", sortDate: "2025-02-13" },
  { slug: "/happiness-and-satisfaction-in-2024", cat: "Longevity & Health", title: "The Complex Relationship Between Money, Happiness, and Satisfaction", date: "Dec 31, 2024", sortDate: "2024-12-31" },
  { slug: "/investment-types", cat: "Financial", title: "A Comprehensive Guide to Investment Types", date: "Dec 30, 2024", sortDate: "2024-12-30" },
  { slug: "/reit", cat: "Financial", title: "Understanding REITs: Pros, Cons, and Building a Balanced Portfolio", date: "Dec 29, 2024", sortDate: "2024-12-29" },
  { slug: "/etf-stock-mutualfund", cat: "Financial", title: "Understanding the Difference Between Stocks, ETFs, and Mutual Funds", date: "Dec 25, 2024", sortDate: "2024-12-25" },
  { slug: "/invest-amid-inflation-in-canada", cat: "Financial", title: "How to Invest Amid Inflation and the Weakening Canadian Dollar", date: "Dec 10, 2024", sortDate: "2024-12-10" },
  { slug: "/home-service-in-iran", cat: "Startup & Market Analysis", title: "2024 Market Analysis: Home Services Industry in Iran", date: "Dec 09, 2024", sortDate: "2024-12-09" },
  { slug: "/real-estate-lawyer-in-toronto", cat: "Blog", title: "Real estate lawyer in Toronto", date: "Dec 08, 2024", sortDate: "2024-12-08" },
  { slug: "/pov", cat: "Mindset & Growth", title: "point of view", date: "Dec 02, 2024", sortDate: "2024-12-02" },
  { slug: "/seo-expert-toronto", cat: "Marketing", title: "SEO expert Toronto + FAQ", date: "Nov 24, 2024", sortDate: "2024-11-24" },
  { slug: "/thriving", cat: "Mindset & Growth", title: "Adapting and thriving in a new country", date: "Nov 26, 2024", sortDate: "2024-11-26" },
  { slug: "/pushing-boundaries", cat: "Mindset & Growth", title: "Pushing Boundaries", date: "Nov 20, 2024", sortDate: "2024-11-20" },
  { slug: "/the-first-one", cat: "Mindset & Growth", title: "The Courage to Start", date: "Nov 13, 2024", sortDate: "2024-11-13" },
];

export const writingPosts = [...posts].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);

/**
 * Posts surfaced on the HOMEPAGE — an explicit allowlist, not `.slice(0, 3)`.
 *
 * This used to take the three most recent posts by date, which meant the homepage —
 * the first page every crawler and answer engine reads, and the main signal for what
 * this site is about — surfaced whatever happened to be newest, regardless of topic.
 * Recency is the wrong sort key for a homepage. Curate deliberately, and keep the
 * selection on-topic.
 *
 * /the-10000-hour-rule/ is included on purpose: it is the most-cited page on the
 * domain in AI answer engines, so linking it from the homepage is cheap internal-link
 * equity toward a page that is already earning.
 */
const HOMEPAGE_SLUGS = [
  "/the-10000-hour-rule",
  "/orthodontic-seo-marketing-case-study",
  "/service-business-growth",
] as const;

export const latestWritingPosts = HOMEPAGE_SLUGS.map(
  (slug) => writingPosts.find((p) => p.slug === slug)!,
).filter(Boolean);
