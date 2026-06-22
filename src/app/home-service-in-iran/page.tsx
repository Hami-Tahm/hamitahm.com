import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2024 Market Analysis: Home Services Industry in Iran",
  description: "2024 Market Analysis: Home Services Industry in Iran — by Hami Tahm",
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
          <span>2024 Market Analysis: Home Services Industry in Iran</span>
        </div>

        {/* Header */}
        <div style={ { fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 } }>
          Startup &amp; Market Analysis
        </div>
        <h1 style={ { fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 16 } }>
          2024 Market Analysis: Home Services Industry in Iran
        </h1>
        <div style={ { fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", marginBottom: 48 } }>
          Dec 09, 2024 &mdash; Hami Tahm
        </div>

        {/* Featured Image */}
        <Image
          src="/images/writing/home-service-in-iran/index-pic.png"
          alt="Home services industry in Iran — market analysis overview"
          width={880}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: 12, margin: "32px 0" }}
          priority
        />

        {/* Content Images */}
        <Image
          src="/images/writing/home-service-in-iran/Life-style-The-best.png"
          alt="Cafebazaar lifestyle category app rankings for home services in Iran"
          width={1080}
          height={1920}
          style={{ width: "100%", height: "auto", borderRadius: 12, margin: "32px 0" }}
        />
        <Image
          src="/images/writing/home-service-in-iran/home-services-in-iran-2.png"
          alt="Home services market data and competitive analysis in Iran"
          width={1927}
          height={1200}
          style={{ width: "100%", height: "auto", borderRadius: 12, margin: "32px 0" }}
        />
        <Image
          src="/images/writing/home-service-in-iran/homesevices-in-iran.png"
          alt="Home services competitive landscape and market share in Iran"
          width={1927}
          height={1200}
          style={{ width: "100%", height: "auto", borderRadius: 12, margin: "32px 0" }}
        />

        {/* Content */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={ { __html: `<p>Iran's online home services market is experiencing rapid growth, driven by increasing consumer adoption of digital platforms and evolving behaviors. Companies in this sector leverage various customer acquisition strategies, including websites, mobile apps, digital advertising, and social media, to establish and strengthen their positions in this competitive landscape.</p><p>Drawing on tools such as SimilarWeb, SEMrush, Cafebazaar, and Myket and insights from Google Ads performance and internal analytics, this report provides a data-driven view of the market. It explores competitive dynamics, highlights key strategies employed by leading players, and offers valuable insights into the trends shaping this industry.
<h3>Customer Acquisition Channels Analyzed</h3>
To evaluate the competitive landscape and performance of businesses in the online home services market, I analyzed the following customer acquisition channels:
<ul>
 	<li><strong>Website</strong></li>
 	<li><strong>Mobile App</strong></li>
 	<li><strong>Digital Ads</strong></li>
 	<li><strong>Instagram</strong></li>
</ul>
<h4>Website Analysis</h4>
Using the <a href="https://www.similarweb.com/corp/extension/">SimilarWeb extension</a>, I identified profitable keywords that competitors ranked for on the first page of Google. Through SEMrush, I generated detailed reports for each site, highlighting traffic volumes and rankings for key terms. This analysis clarified our website’s relative position in the market.</p><p>Internal dashboards and data from the past year (July 1, 2023, to June 30, 2024) were used to calculate the average number of organic requests to our site. This data was then extrapolated to provide a comprehensive comparison with competitors.
<h4>Mobile App Analysis</h4>
Given that Cafebazaar—a localized version of Google Play—is widely used in Iran (where Google Play is filtered), I analyzed the Top Charts in the Lifestyle category of Cafebazaar to assess app performance. These rankings, system-generated and reflective of overall performance, indicated that our app's daily install count (adjusted for uninstalls) exceeded that of competitors in the same category.</p><p>To refine this analysis, I also reviewed data from <a href="https://myket.ir/apps/lifestyle">Myket</a>, which reports active downloads rather than cumulative figures like <a href="https://cafebazaar.ir/cat/lifestyle?l=en">Cafebazaar</a>. This allowed for a more accurate comparison of app performance.</p><p><img class="aligncenter" src="https://hamitahm.com/wp-content/uploads/2024/12/Life-style-The-best.png" width="241" height="428" alt="Cafebazaar and Myket Lifestyle category top chart rankings showing Iranian home service apps" />
<h4>Digital Ads Analysis</h4>
Google Ads provided clear insights through the Auction Insight tool, which shows the percentage of market share held by each competitor. By running campaigns targeting competitors’ brand names, I determined the daily requests generated from searches for their brands. This analysis also revealed that competitors run similar campaigns targeting our brand.
<h4>Instagram Analysis</h4>
I analyzed the 50 most recent posts and stories from each competitor’s Instagram page over the past 30 days. The data showed that Instagram does not contribute significantly to daily requests, as conversion rates from even highly-followed pages were relatively low.</p><p><img class="aligncenter" src="https://hamitahm.com/wp-content/uploads/2024/12/homesevices-in-iran.png" width="591" height="368" alt="Instagram engagement and conversion analysis across competing Iranian home service brands over 30 days" />
<h3>Key Findings</h3>
After consolidating data from all sources, the following conclusions emerged:
<ol>
 	<li><strong>Market Data Accessibility</strong>: While much of the analysis (e.g., app installs, keyword rankings) is accessible to anyone in the industry, accurately estimating how many requests these keywords or installs generate requires insider knowledge.</li>
 	<li><strong>Market Leader Advantage</strong>: Only the first and second players in the market can accurately gauge request-to-install ratios and other critical metrics. Estimates from third and fourth players tend to be less precise.</li>
</ol>
While not claiming to be entirely free of inaccuracies, this report addresses a significant gap in reliable market data. In a landscape often marked by flawed or questionable reports, it offers a more informed and realistic perspective on the competitive dynamics of Iran’s online home services market.</p><p> </p><p><img class="aligncenter" src="https://hamitahm.com/wp-content/uploads/2024/12/home-services-in-iran-2.png" alt="Iran online home services market competitive landscape — Achareh, Sanjagh, and Khedmat Az Ma comparison" /></p><p> </p><p>Source for Achareh:
<ol>
 	<li><a href="https://meet.google.com/sxt-mxkb-fuc?ijlm=1735580192603&hs=187&adhoc=1" target="_blank" rel="noopener">podcast</a></li>
 	<li><a href="https://digiato.com/article/2018/12/09/%D8%B3%D8%B1%D9%85%D8%A7%DB%8C%D9%87-%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C-%DB%B6-%DB%B2-%D9%85%DB%8C%D9%84%DB%8C%D9%88%D9%86-%D8%AF%D9%84%D8%A7%D8%B1%DB%8C-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A7%D9%88%D9%84" target="_blank" rel="noopener">6.2 million US (round 2)</a></li>
 	<li><a href="https://www.zoomit.ir/tech-iran/414543-kayson-investment-in-achareh/" target="_blank" rel="noopener">70 billion Toman</a></li>
</ol>
Source for Sanjagh:
<ol>
 	<li><a href="https://peivast.com/p/209072" target="_blank" rel="noopener">last fundraising</a></li>
 	<li><a href="https://rahnema.com/rahnema-ventures/" target="_blank" rel="noopener">fist fundraising</a></li>
</ol>
Source for Salamsakhteman:
<ol>
 	<li><a href="https://ecomotive.ir/1398/07/10/smartup-ventures-companny/" target="_blank" rel="noopener">Seed</a></li>
</ol>
Source for Odtadkar:
<ol>
 	<li><a href="https://www.zoomit.ir/tech-iran/371225-kerman-khodro-investment-in-ostadkar/" target="_blank" rel="noopener">The last fundraising</a></li>
</ol>
Source of Pelak:
<ol>
 	<li><a href="https://peivast.com/p/70248" target="_blank" rel="noopener">The last fundraising</a></li>
 	<li><a href="https://digiato.com/article/2017/12/31/%D8%B5%D8%A8%D8%A7-%D8%A7%DB%8C%D8%AF%D9%87-%D9%BE%D9%84%D8%A7%DA%A9" target="_blank" rel="noopener">Seed</a></li>
</ol>
 </p>` } }
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
