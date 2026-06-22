# گزارش هفتگی hamitahm.com — هفتهٔ منتهی به ۱۸ ژوئن ۲۰۲۶

## 📊 Weekly Snapshot

یک خط خلاصه: GSC = ۲ کلیک / ۳.۵۲K impression (pos 47.3) · Bing = ۲ کلیک / ۲۷۴ impression · **برد بزرگ هفته:** Copilot citations رسید به **۷۲۰** و یک صفحهٔ on-brand (peec-vs-profound-vs-airops) با ۲۵۲ citation ظاهر شد · **نگرانی اصلی:** صفحهٔ پول (audit) با **Redirect error** اصلاً index نشده.

**Bot signal:** Singapore users excluded = ۵۱ session (۴۱.۸٪ کل ترافیک)، ۰ engaged session، engagement ~۰s. کل bot. همه در کانال Direct.

---

## 🔍 Google Search Console (۷ روز)

- Clicks **۲** · Impressions **۳.۵۲K** · CTR **۰.۱٪** · Avg position **۴۷.۳**
- **Top queries:** (۱) `hami tahm` — branded، ۱ کلیک · (۲) خوشهٔ `ai visibility checkers / best ai visibility tools / free ai visibility checker` — هرکدام ۶۰–۸۴ impression ولی **۰ کلیک** (position بالای ۴۰).
- **Top pages by impression:** همه blog هستند — `/blog/how-to-check-ai-visibility` (1,137)، `/blog/best-ai-visibility-tools` (878)، `/the-10000-hour-rule` (630). **هیچ‌کدام از ۱۰ صفحهٔ P1 commercial در top impressions نیستند.**
- **Indexing:** ۵۰ indexed / ۱۶۷ not indexed. عدد ۱۱۹ تای «Crawled - currently not indexed» تقریباً همه **noise** است (فایل‌های Next.js: `_next/static/chunks`, woff2, favicon) — مشکل واقعی محتوا نیست.
- 🛑 **بحرانی — صفحهٔ پول index نشده:** URL inspection روی `/ai-visibility/ai-visibility-audit/` می‌گوید **"URL is not on Google — Page is not indexed: Redirect error"**، Page fetch = **Failed: Redirect error**. یعنی Google اصلاً نمی‌تواند صفحهٔ ۱۵۰۰ دلاری را fetch/index کند.
- **Sitemap:** فقط `https://www.hamitahm.com/sitemap.xml` submit شده — یعنی روی host **www** (در حالی که canonical = non-www). Status: Success، ۵۴ صفحه. این mismatch احتمالاً به همان redirect error دامن می‌زند.

---

## 🅱 Bing / Copilot (۷ روز)

- Web: Clicks **۲** · Impressions **۲۷۴** · CTR **۰.۷۳٪**
- **Copilot citations: ۷۲۰** این هفته (Avg cited pages = ۳). صفحات cited:
  - `/the-10000-hour-rule` → **۴۶۰** citation (همان authority asset)
  - `/blog/peec-vs-profound-vs-airops` → **۲۵۲** citation ← **جدید و on-brand** (مقایسهٔ ابزارهای AI visibility). تقریباً به اندازهٔ ۱۰٬۰۰۰-hour دارد citation می‌گیرد.
- **Bing Web pages:** فقط `/the-10000-hour-rule` (256 impr, pos 4.66) + یک پست legacy. **هیچ صفحهٔ P1 هنوز Bing impression ندارد.**
- **تز Bing→Copilot:** این هفته روی یک **blog post** (peec-vs-profound) شلیک کرد، نه روی صفحهٔ P1. هنوز روی money pages فعال نشده.

---

## 📈 Google Analytics (Singapore حذف شده)

- Sessions ex-Singapore **۷۱** (در مقابل ۱۲۲ all-users) · Active users **۴۰** · Engagement rate **۴۳.۶۶٪** · Avg engagement **۵۸s**.
- **Sources ex-SG:** Direct ۲۲ · **dimaht.com/referral ۱۵** (۷۳.۳٪ engagement، ۱m13s — بالاترین کیفیت) · google/organic ۹ · search.google.com ۶ · **bing/organic ۵** (۶۰٪ eng، ۱m39s) · t.co ۴ · duckduckgo ۲ · ecosia ۲ · instagram ۲.
- **AI referrers:** هیچ visit از chat.openai.com / perplexity.ai / copilot این هفته نبود. (طبیعی است — این‌ها referrer pass نمی‌کنند؛ سیگنال AI را باید از Bing Copilot tab خواند، نه GA.)
- **Top pages ex-SG:** `/` ۳۵ (28s) · `/the-10000-hour-rule` ۲۳ (**1m32s** — قوی) · **`/ai-visibility/ai-visibility-audit` ۱۲ view ولی فقط ۴s engagement** · `/ai-visibility` ۹ (1m33s) · `/case-studies/homecalc-ai-visibility` ۸ (32s).
- **Bridge conversion:** صفحهٔ audit فقط ۴ کاربر / ۴s داشت. حتی اگر کسی از پل ۱۰٬۰۰۰-hour آمده باشد، بلافاصله bounce می‌کند — که با همان redirect error هم‌خوان است.
- **dimaht.com:** ۱۵ session، باکیفیت‌ترین referrer (همیشگی). همچنان قوی.

---

## 🎯 توصیه‌های استراتژیک (مهم‌ترین بخش — به ترتیب leverage)

1. **🔴 FIX فوری — `/ai-visibility/ai-visibility-audit/` (صفحهٔ پول):** GSC می‌گوید "Redirect error" و صفحه index نشده؛ GA هم فقط ۴s engagement نشان می‌دهد. علت احتمالی: redirect loop روی trailing-slash یا تداخل www/non-www. تا این درست نشود، money page نه در Google نشان داده می‌شود نه conversion می‌دهد. **این تک‌اقدام، بالاترین leverage هفته است.** بعد از fix، در GSC «Request Indexing» بزن.

2. **🟠 sitemap را به non-www منتقل کن:** الان `www.hamitahm.com/sitemap.xml` submit شده. باید `https://hamitahm.com/sitemap.xml` (host canonical) باشد. mismatch فعلی به سردرگمی redirect/canonical دامن می‌دهد و دقیقاً همان صفحاتی که نیاز داری index شوند را کند می‌کند.

3. **🟢 موجِ Copilot را سوار شو — `/blog/peec-vs-profound-vs-airops`:** این پست از صفر به ۲۵۲ Copilot citation رسید (on-brand: مقایسهٔ ابزار AI visibility). یک **CTA bridge** از این پست به `/ai-visibility/ai-visibility-audit/` بساز (مثل پلی که روی ۱۰٬۰۰۰-hour داری). این، citation را به صفحهٔ پول وصل می‌کند — کاری که ۱۰٬۰۰۰-hour به‌خاطر بی‌ربط بودن موضوع نمی‌تواند به‌خوبی انجام دهد.

4. **🟢 خوشهٔ `ai visibility checkers / tools` را capture کن:** در GSC این کوئری‌ها ۶۰–۸۴ impression با ۰ کلیک دارند (position بالای ۴۰) و صفحهٔ مقصدشان blog است نه money page. روی `/blog/best-ai-visibility-tools` (که ۸۷۸ impression دارد) یک H2/CTA به audit اضافه کن و meta/H1 را با کلمهٔ «checker» تطبیق بده تا position بالا بیاید. demand بالاست، فقط mapping اشتباه است.

5. **⏳ WAIT روی بقیهٔ صفحات P1 (dental / mortgage / consultant-canada):** هنوز نه Bing impression دارند نه Copilot citation. خیلی زود است برای قضاوت. هفتهٔ بعد دوباره چک — اول باید مشکل index/redirect حل شود تا اصلاً شانس داشته باشند.

---

## ⏳ برای هفتهٔ بعد رصد کن

- آیا fix شدن redirect باعث شد `/ai-visibility/ai-visibility-audit/` بالاخره index شود؟ (URL inspection → Indexed?)
- **آیا تز Bing→Copilot روی هیچ صفحهٔ P1 شلیک کرد؟** این هفته **نه** — فقط روی blog (peec-vs-profound). اولین Bing impression روی یک URL P1 = پیش‌بینی‌کنندهٔ Copilot pickup.
- روند citation صفحهٔ peec-vs-profound (252 → ?) و اینکه آیا CTA bridge جدید traffic به audit می‌فرستد.
