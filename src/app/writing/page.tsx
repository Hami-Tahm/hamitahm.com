import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Hami Tahm on startups, longevity, finance, and building toward a unicorn.",
};

const posts = [
  { slug: "/service-business-growth", cat: "Unicorn Building", title: "What I'm Actually Good At", date: "Apr 20, 2026" },
  { slug: "/the-longevity-economy-6-high-growth-sectors", cat: "Longevity & Health", title: "The Longevity Economy: 6 High-Growth Sectors Ranked by Market Size", date: "May 26, 2025" },
  { slug: "/how-many-diets-exist-in-the-world", cat: "Longevity & Health", title: "How Many Diets Exist in the World?", date: "May 30, 2025" },
  { slug: "/wine-profile", cat: "Hobby", title: "Understanding My Wine Taste Profile", date: "Mar 07, 2026" },
  { slug: "/under-30", cat: "Longevity & Health", title: "How to be under 30 (Bioage)", date: "Mar 02, 2026" },
  { slug: "/optimal-shower-hair-routine", cat: "Longevity & Health", title: "The Optimal Shower & Hair Routine for Busy Founders", date: "Feb 24, 2026" },
  { slug: "/fitness-pyramid", cat: "Longevity & Health", title: "Fitness Pyramid (Beginner → Advanced)", date: "Feb 13, 2026" },
  { slug: "/these-days", cat: "Blog", title: "These days ...", date: "Nov 19, 2025" },
  { slug: "/after-product-launch", cat: "Unicorn Building", title: "My Entrepreneurial Journey with Up-Diet.com", date: "Sep 16, 2025" },
  { slug: "/the-real-founder-dilemma", cat: "Mindset & Growth", title: "The Real Founder Dilemma (Not About Shares)", date: "Jul 16, 2025" },
  { slug: "/1-out-of-20", cat: "Unicorn Building", title: "From Zero to Unicorn: Can an Ordinary Founder Make It?", date: "Jul 05, 2025" },
  { slug: "/how-ai-is-reshaping-learning", cat: "Productivity", title: "How AI Is Reshaping Learning: Your Shortcut to Mastering Skills Faster", date: "Apr 01, 2025" },
  { slug: "/exercise", cat: "Longevity & Health", title: "Exercise & Physical Activity: Your Guide to Smarter Workouts", date: "Mar 09, 2025" },
  { slug: "/sleep-quality-101", cat: "Longevity & Health", title: "Sleep Quality 101: Unlock the Secrets to Better Rest", date: "Mar 06, 2025" },
  { slug: "/how-much-wealth-should-you-aim-for", cat: "Mindset & Growth", title: "How Much Wealth Should You Aim For?", date: "Mar 03, 2025" },
  { slug: "/the-10000-hour-rule", cat: "Productivity", title: "The 10,000-Hour Rule: How Many Hours Do You Need to Reach 7/10 Mastery?", date: "Feb 22, 2025" },
  { slug: "/hydration", cat: "Longevity & Health", title: "Hydration for High Performers", date: "Feb 21, 2025" },
  { slug: "/the-future-of-life-expectancy", cat: "Longevity & Health", title: "Lifespan: The Role of Wealth and Technology in Extending Life Expectancy", date: "Feb 13, 2025" },
  { slug: "/happiness-and-satisfaction-in-2024", cat: "Longevity & Health", title: "The Complex Relationship Between Money, Happiness, and Satisfaction", date: "Dec 31, 2024" },
  { slug: "/investment-types", cat: "Financial", title: "A Comprehensive Guide to Investment Types", date: "Dec 30, 2024" },
  { slug: "/reit", cat: "Financial", title: "Understanding REITs: Pros, Cons, and Building a Balanced Portfolio", date: "Dec 29, 2024" },
  { slug: "/etf-stock-mutualfund", cat: "Financial", title: "Understanding the Difference Between Stocks, ETFs, and Mutual Funds", date: "Dec 25, 2024" },
  { slug: "/invest-amid-inflation-in-canada", cat: "Financial", title: "How to Invest Amid Inflation and the Weakening Canadian Dollar", date: "Dec 10, 2024" },
  { slug: "/home-service-in-iran", cat: "Startup & Market Analysis", title: "2024 Market Analysis: Home Services Industry in Iran", date: "Dec 09, 2024" },
  { slug: "/real-estate-lawyer-in-toronto", cat: "Blog", title: "Real estate lawyer in Toronto", date: "Dec 08, 2024" },
  { slug: "/pov", cat: "Mindset & Growth", title: "point of view", date: "Dec 02, 2024" },
  { slug: "/thriving", cat: "Mindset & Growth", title: "Adapting and thriving in a new country", date: "Nov 26, 2024" },
  { slug: "/pushing-boundaries", cat: "Mindset & Growth", title: "Pushing Boundaries", date: "Nov 20, 2024" },
  { slug: "/the-first-one", cat: "Mindset & Growth", title: "The Courage to Start", date: "Nov 13, 2024" },
];

export default function WritingPage() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ fontFamily: "var(--mono)", fontSize: "12.5px", letterSpacing: ".18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 30, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 34, height: 1, background: "var(--accent)", display: "inline-block" }} />
          Writing
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 48 }}>
          All articles
        </h1>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 24,
                padding: "20px 0",
                borderTop: "1px solid var(--line)",
                transition: "padding-left .25s",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)" }}>{post.cat}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}>{post.title}</span>
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", whiteSpace: "nowrap" }}>{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
