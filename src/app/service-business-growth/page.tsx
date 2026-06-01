import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What I’m Actually Good At",
  description: "What I’m Actually Good At — by Hami Tahm",
};

export default function Post() {
  return (
    <article style={ { padding: "80px 0" } }>
      <div className="wrap" style={ { maxWidth: 720 } }>
        {/* Breadcrumb */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 40, display: "flex", gap: 8 } }>
          <Link href="/" style={ { color: "var(--accent)" } }>Home</Link>
          <span>/</span>
          <Link href="/writing" style={ { color: "var(--accent)" } }>Writing</Link>
          <span>/</span>
          <span>What I’m Actually Good At</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Unicorn Building
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          What I’m Actually Good At
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Apr 20, 2026 &mdash; Hami Tahm
        </div>

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p data-start="356" data-end="458">I’ve spent years building, testing, shutting down, and rebuilding businesses across different markets.</p>
<p data-start="460" data-end="527">Not everything worked.<br data-start="482" data-end="485" />But over time, patterns became very clear.</p>
<p data-start="529" data-end="640">When I compared different perspectives on my strengths, the overlap was consistent. It came down to four areas:</p></p><p><ol>
 	<li data-start="642" data-end="800">Marketplace & Service Platforms</li>
 	<li data-start="642" data-end="800">Digital Marketing (SEO and Lead Generation)</li>
 	<li data-start="642" data-end="800">Strategic Thinking (Pivot and Exit Decisions)</li>
 	<li data-start="642" data-end="800">Execution and Rapid Building</li>
</ol>
<p data-start="802" data-end="860">These are not random skills. Together, they form a system.</p></p><p><h3 data-section-id="1djc49x" data-start="862" data-end="916">Marketplace & Service Platforms (My Core Strength)</h3>
<p data-start="918" data-end="956">This is the center of everything I do.</p>
<p data-start="958" data-end="1073">I don’t just understand marketplaces in theory. I’ve built them, scaled them, and dealt with real-world challenges:</p>
<p data-start="1075" data-end="1191">Supply and demand imbalance<br data-start="1102" data-end="1105" />Chicken-and-egg problems<br data-start="1129" data-end="1132" />Operational friction<br data-start="1152" data-end="1155" />Unit economics in offline services</p>
<p data-start="1193" data-end="1235">This is hands-on experience, not analysis.</p>
<p data-start="1237" data-end="1294">If there is one thing I want to be known for, it is this:</p>
<p data-start="1296" data-end="1345">Turning service businesses into scalable systems.</p></p><p><h3 data-section-id="vqtgsv" data-start="1347" data-end="1400">Digital Marketing (Where Growth Actually Happens)</h3>
<p data-start="1402" data-end="1450">I don’t think about marketing as content or ads.</p>
<p data-start="1452" data-end="1484">I think about timing and intent.</p>
<p data-start="1486" data-end="1505">The goal is simple:</p>
<p data-start="1507" data-end="1567">Capture demand at the exact moment the user is ready to act.</p>
<p data-start="1569" data-end="1658">SEO, tools like calculators, landing pages, and lead funnels all connect to one question:</p>
<p data-start="1660" data-end="1687">Does this generate revenue?</p>
<p data-start="1689" data-end="1729">If the answer is no, it does not matter.</p></p><p><h3 data-section-id="5gmg8a" data-start="1731" data-end="1797">Strategic Thinking (Knowing What to Continue and What to Kill)</h3>
<p data-start="1799" data-end="1872">Starting something is easy.<br data-start="1826" data-end="1829" />Stopping it at the right time is difficult.</p>
<p data-start="1874" data-end="1959">I have shut down multiple projects over the years. Not randomly, but based on signal.</p>
<p data-start="1961" data-end="2011">This comes down to understanding opportunity cost.</p>
<p data-start="2013" data-end="2094">Knowing when to pivot<br data-start="2034" data-end="2037" />Knowing when to double down<br data-start="2064" data-end="2067" />Knowing when to walk away</p>
<p data-start="2096" data-end="2150">This is how you protect your time, capital, and focus.</p></p><p><h3 data-section-id="6t43wo" data-start="2152" data-end="2194">Execution Speed (From Idea to Reality)</h3>
<p data-start="2196" data-end="2222">Speed is a real advantage.</p>
<p data-start="2224" data-end="2330">Today, with AI tools and modern development stacks, one person can build what used to require a full team.</p>
<p data-start="2332" data-end="2364">But tools are not the advantage.</p>
<p data-start="2366" data-end="2393">The real advantage is this:</p>
<p data-start="2395" data-end="2475">Turning ideas into working systems quickly, then testing them in the real world.</p>
<p data-start="2477" data-end="2504">Build. Test. Kill or scale.</p>
<p data-start="2506" data-end="2557">No long planning cycles. No unnecessary complexity.</p></p><p><h2 data-section-id="1q1qfnj" data-start="2559" data-end="2582">The Real Positioning</h2>
<p data-start="2584" data-end="2666">I’m not just a marketer.<br data-start="2608" data-end="2611" />I’m not just a founder.<br data-start="2634" data-end="2637" />And I’m not defined by tools.</p>
<p data-start="2668" data-end="2700">If I had to describe it clearly:</p>
<p data-start="2702" data-end="2785"><strong>I build and scale service-based businesses using growth systems and fast execution.</strong></p>
<p data-start="2787" data-end="2825">That is the intersection I operate in.</p>
<p data-start="2827" data-end="2908">Most people specialize in one layer: strategy, marketing, product, or operations.</p>
<p data-start="2910" data-end="2943">Very few work across all of them.</p>
<p data-start="2945" data-end="2990" data-is-last-node="" data-is-only-node="">That combination is where my edge comes from.</p>` } }
        />

        {/* Author box */}
        <div style={ { marginTop: 60, padding: "24px 0", borderTop: "1px solid var(--line)", display: "flex", gap: 16, alignItems: "center" } }>
          <div>
            <div style={ { fontFamily: "var(--serif)", fontSize: 18, fontWeight: 500 } }>Hami Tahm</div>
            <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" } }>Tech Founder &middot; Toronto</div>
          </div>
        </div>
      </div>
    </article>
  );
}
