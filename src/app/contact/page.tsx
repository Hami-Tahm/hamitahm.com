import type { Metadata } from "next";
import Link from "next/link";
import { RevealSection } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hami Tahm — AI visibility, SEO, partnerships, or ambitious projects. Based in Toronto, Canada.",
};

export default function ContactPage() {
  return (
    <section style={{ padding: "80px 0", minHeight: "calc(100vh - 200px)" }}>
      <div className="wrap">
        <div className="contact-grid">
          {/* ── Left column ── */}
          <div>
            <RevealSection>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12.5px",
                  letterSpacing: ".18em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 1,
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                Contact
              </div>
            </RevealSection>

            <RevealSection delay={0.06}>
              <h1
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 500,
                  fontSize: "clamp(38px, 5.4vw, 60px)",
                  lineHeight: 1.03,
                  letterSpacing: "-.03em",
                  marginTop: 24,
                }}
              >
                Let&rsquo;s build something{" "}
                <em style={{ color: "var(--accent)" }}>worth scaling.</em>
              </h1>
            </RevealSection>

            <RevealSection delay={0.12}>
              <p
                style={{
                  fontSize: "18.5px",
                  color: "var(--muted)",
                  maxWidth: "42ch",
                  lineHeight: 1.65,
                  marginTop: 22,
                }}
              >
                Whether you want your business found in AI search, or
                you&rsquo;re working on something ambitious and thinking
                globally&nbsp;&mdash;{" "}
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  I read every message.
                </b>
              </p>
            </RevealSection>

            <RevealSection delay={0.18}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  marginTop: 34,
                }}
              >
                <div className="fit-row">
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "13px",
                      color: "var(--accent)",
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "15.5px",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                      AI visibility &amp; SEO
                    </b>{" "}
                    &mdash; get found in ChatGPT, Perplexity, and Google
                    AI&nbsp;Overviews.
                  </span>
                </div>

                <div className="fit-row">
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "13px",
                      color: "var(--accent)",
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "15.5px",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                      Founders &amp; operators
                    </b>{" "}
                    &mdash; building something ambitious, especially AI-driven
                    or with strong distribution loops.
                  </span>
                </div>

                <div className="fit-row">
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "13px",
                      color: "var(--accent)",
                    }}
                  >
                    &rarr;
                  </span>
                  <span
                    style={{
                      fontSize: "15.5px",
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                      Collaboration &amp; ideas
                    </b>{" "}
                    &mdash; partnerships, advising, or just a good conversation.
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* ── Right column ── */}
          <RevealSection delay={0.14}>
            <div className="card">
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11.5px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: 20,
                }}
              >
                Reach me directly
              </div>

              {/* Email */}
              <a href="mailto:hami@hamitahm.com" className="channel">
                <span className="ch-ic">@</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12.5px",
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    hami@hamitahm.com
                  </div>
                </div>
              </a>

              {/* LinkedIn — /in/hami-tahm is the real profile; /in/hamitahm 404s.
                  Same dead URL was already fixed in Footer.tsx + layout.tsx sameAs. */}
              <a
                href="https://www.linkedin.com/in/hami-tahm/"
                target="_blank"
                rel="noopener"
                className="channel"
              >
                <span className="ch-ic">in</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    LinkedIn
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12.5px",
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    Best for work inquiries
                  </div>
                </div>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/hamitahm"
                target="_blank"
                rel="noopener"
                className="channel"
              >
                <span className="ch-ic">X</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    X / Twitter
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12.5px",
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    DMs open
                  </div>
                </div>
              </a>

              {/* Office address */}
              <a
                href="https://maps.google.com/?q=111+Peter+Street+9th+Floor+Suite+902+Toronto+ON+M5V+2H1"
                target="_blank"
                rel="noopener"
                className="channel"
              >
                <span className="ch-ic">&#9678;</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Office
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12.5px",
                      color: "var(--muted)",
                      marginTop: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    111 Peter Street, 9th Floor, Suite 902
                    <br />
                    Toronto, ON M5V 2H1 &middot; Canada
                  </div>
                </div>
              </a>

              {/* CTA */}
              <Link
                href="/ai-visibility/ai-visibility-audit/"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "15px",
                  borderRadius: "999px",
                  marginTop: 26,
                  transition: "transform .2s, box-shadow .2s",
                }}
              >
                Get Your AI Visibility Audit &rarr;
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
