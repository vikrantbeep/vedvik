"use client";

import React from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW } from "./SiteChrome";
import type { BlogPost as Post } from "@/lib/blog";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";
import { ScrollRise } from "@/components/core/scroll-rise";

const placeholderImg = (label: string) =>
  `https://placehold.co/600x400/eaf1fc/3969c4?text=${encodeURIComponent(label)}`;

/** Compact card for the "Continue reading" strip under an article. */
function RelatedCard({ post }: { post: Post }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={`/blog/${post.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
        borderRadius: "14px", overflow: "hidden",
        border: `1px solid ${hover ? "transparent" : "rgba(2,0,98,.1)"}`,
        background: hover ? "linear-gradient(140deg,#80afe8 0%,#3969c4 55%,#020062 100%)" : "#fff",
        boxShadow: hover ? "0 20px 44px rgba(2,0,98,.22)" : "0 1px 2px rgba(2,0,98,.04)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "transform .9s cubic-bezier(.2,.7,.2,1), background 1.2s ease, box-shadow 1s ease, border-color 1.2s ease",
      }}
    >
      <div style={{ aspectRatio: "3 / 2", overflow: "hidden", background: "#eaf1fc", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image ?? placeholderImg(post.category)}
          alt={`${post.title} — ${post.category} article from Vedvik Machinery`}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 1.2s ease" }}
        />
      </div>
      <div style={{ padding: "1.1rem 1.2rem 1.3rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.64rem", letterSpacing: "0.16em", textTransform: "uppercase", color: hover ? SKY : BLUE, transition: "color 1.2s ease" }}>
          {post.category}
        </span>
        <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.01em", margin: "0.6rem 0 0.5rem", color: hover ? "#fff" : NAVY, transition: "color 1.2s ease" }}>
          {post.title}
        </h3>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", lineHeight: 1.55, margin: 0, flex: 1, color: hover ? "rgba(255,255,255,.82)" : "rgba(14,23,80,.62)", transition: "color 1.2s ease" }}>
          {post.excerpt.length > 110 ? `${post.excerpt.slice(0, 110).trimEnd()}…` : post.excerpt}
        </p>
        <span style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.03em", color: hover ? "#fff" : BLUE, transition: "color 1.2s ease" }}>
          Read article <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .6s ease" }}>→</span>
        </span>
      </div>
    </a>
  );
}

export default function BlogPost({ post, related = [] }: { post: Post; related?: Post[] }) {
  const loaded = usePageReady();

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:'Montserrat',sans-serif;letter-spacing:.02em}
        .nav-link:hover{color:${NAVY}}
        .show-mobile{display:none}
        .related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem;align-items:stretch}
        @media (max-width:900px){.related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:600px){.related-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      {/* ── ARTICLE HEADER ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: `calc(clamp(3rem,7vw,5rem) + 68px) ${PAD} clamp(3rem,7vw,4.5rem)` }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "820px", margin: "0 auto" }}>
          <a href="/blog" style={{ ...reveal(0.05), display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: SKY, marginBottom: "1.2rem" }}>← Insights</a>
          <div style={{ ...reveal(0.12), display: "flex", gap: "0.9rem", alignItems: "center", marginBottom: "1.1rem" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", background: "rgba(255,255,255,.18)", padding: "0.35rem 0.8rem", borderRadius: "2rem" }}>{post.category}</span>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,.75)" }}>{post.date} · {post.readTime}</span>
          </div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.6rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>{post.title}</TextEffect>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ background: "#fff", padding: `clamp(3rem,7vw,5rem) ${PAD} clamp(4rem,8vw,6rem)` }}>
        <article style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollRise>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.2rem", lineHeight: 1.6, color: "rgba(14,23,80,.7)", fontWeight: 300, margin: "0 0 2.4rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(2,0,98,.1)" }}>{post.excerpt}</p>
          </ScrollRise>
          {post.body.map((sec, i) => (
            <ScrollRise key={i}>
              <div style={{ marginBottom: "2rem" }}>
                {sec.heading && (
                  <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "clamp(1.3rem,2.5vw,1.7rem)", letterSpacing: "-0.01em", color: NAVY, margin: "0 0 0.9rem" }}>{sec.heading}</h2>
                )}
                {sec.paragraphs.map((p, j) => (
                  <p key={j} style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(14,23,80,.78)", margin: "0 0 1.1rem" }}>{p}</p>
                ))}
              </div>
            </ScrollRise>
          ))}

          {/* Related solutions — internal links */}
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(2,0,98,.1)" }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "0.9rem" }}>Related solutions</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
              {post.related.map((r) => (
                <a key={r.href} href={r.href} className="btn btn-ghost-dark" style={{ padding: "0.55rem 1.1rem", fontSize: "0.9rem" }}>{r.label} →</a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: "3rem" }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "clamp(1.4rem,3vw,1.9rem)", color: NAVY, margin: "0 0 1.5rem" }}>Frequently asked questions</h2>
            {post.faqs.map((f, i) => (
              <ScrollRise key={i}>
                <div style={{ borderTop: "1px solid rgba(2,0,98,.1)", padding: "1.3rem 0" }}>
                  <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "1.1rem", color: NAVY, margin: "0 0 0.5rem" }}>{f.q}</h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.65, color: "rgba(14,23,80,.75)", margin: 0 }}>{f.a}</p>
                </div>
              </ScrollRise>
            ))}
          </div>
        </article>
      </section>

      {/* ── CONTINUE READING ── */}
      {related.length > 0 && (
        <section style={{ background: "#fff", padding: `clamp(1rem,2vw,2rem) ${PAD} clamp(4rem,8vw,6rem)`, borderTop: "1px solid rgba(2,0,98,.08)" }}>
          <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, margin: "clamp(2.5rem,5vw,3.5rem) 0 0.8rem" }}>
              Continue reading
            </div>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.6rem,4vw,2.4rem)", letterSpacing: "-0.02em", color: NAVY, margin: "0 0 clamp(2rem,4vw,2.6rem)" }}>
              Related articles
            </ScrollText>
            <div className="related-grid">
              {related.map((r, i) => (
                <ScrollRise key={r.slug} delay={i * 0.12}>
                  <RelatedCard post={r} />
                </ScrollRise>
              ))}
            </div>
            <div style={{ marginTop: "clamp(2rem,4vw,2.6rem)" }}>
              <a href="/blog" className="btn btn-ghost-dark" style={{ padding: "0.7rem 1.5rem", fontSize: "0.88rem" }}>
                All articles →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ background: "#f5f8ff", padding: `clamp(3.5rem,7vw,5.5rem) ${PAD}`, textAlign: "center" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.7rem,4vw,2.8rem)", letterSpacing: "-0.02em", color: NAVY, margin: "0 auto 1.6rem", maxWidth: "26ch", textAlign: "center" }}>Have a question about your line?</ScrollText>
          <a href="/contact" className="btn btn-blue" style={{ minWidth: "190px" }}>Talk to our team</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
