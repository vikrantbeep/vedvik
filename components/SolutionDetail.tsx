"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW, BRAND_GRADIENT } from "./SiteChrome";
import type { Solution } from "@/lib/solutions";
import { solutionOverview } from "@/lib/solutions";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";
import { ScrollRise } from "@/components/core/scroll-rise";

// Fallback demo video if a machine has no youtubeId (all currently do).
const DEMO_YT = "ScMzIvxBSi4";

function useScrollIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setSeen(true); }),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

export default function SolutionDetail({ solution }: { solution: Solution }) {
  const loaded = usePageReady();
  const showcase = useScrollIn();
  const specs = useScrollIn();

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });
  const rise = (show: boolean, d: number): React.CSSProperties => ({
    opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  const showcaseTitle = solution.category === "Packaging" ? "Packaging Showcase" : "Inspection Coverage";
  const showcaseLead =
    solution.category === "Packaging"
      ? "A range of pack formats this system can run — matched to your product, speed and material."
      : "What this system verifies and protects against on the line, at full production speed.";

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:'Montserrat',sans-serif;letter-spacing:.02em}
        .nav-link:hover{color:${NAVY}}
        .show-mobile{display:none}
        .sd-hero{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:clamp(2rem,5vw,4rem);align-items:center}
        .sd-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
        .sd-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(2rem,5vw,3.5rem)}
        @media (max-width:860px){.sd-hero{grid-template-columns:1fr}.sd-two{grid-template-columns:1fr}.sd-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:520px){.sd-grid{grid-template-columns:1fr 1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}.page-hero{height:auto!important;min-height:0!important;padding:clamp(3rem,13vw,4.5rem) 0!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="page-hero" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", padding: `calc(clamp(3rem,7vw,5rem) + 68px) ${PAD} clamp(3rem,7vw,5rem)`, overflow: "hidden" }}>
        <AnimatedGradient />
        <div className="sd-hero" style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto", width: "100%" }}>
          <div>
            <div style={{ ...reveal(0.08), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1rem" }}>
              {solution.category}
            </div>
            <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
              style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.3rem,6vw,4.6rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>
              {solution.name}
            </TextEffect>
            <div style={{ ...reveal(0.3), fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "clamp(1.05rem,2vw,1.4rem)", color: "rgba(255,255,255,.85)", marginTop: "0.7rem" }}>
              {solution.tagline}
            </div>
            <div style={{ ...reveal(0.36), width: "64px", height: "2px", background: "rgba(255,255,255,.45)", margin: "1.6rem 0" }} />
            <p style={{ ...reveal(0.44), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.5vw,1.12rem)", lineHeight: 1.65, color: "rgba(255,255,255,.86)", maxWidth: "34rem", margin: 0 }}>
              {solution.desc}
            </p>
            <div style={{ ...reveal(0.54), display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <a href="/contact" className="btn btn-white" style={{ minWidth: "190px", padding: "0.9rem 1.8rem" }}>Request Technical Quote</a>
              {solution.brochureUrl ? (
                <a href={solution.brochureUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light" style={{ minWidth: "190px", padding: "0.9rem 1.8rem" }}>Download Brochure</a>
              ) : (
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "190px", padding: "0.9rem 1.8rem", borderRadius: "2rem", border: "1px solid rgba(255,255,255,.3)", color: "rgba(255,255,255,.45)", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.95rem", cursor: "not-allowed" }}>Download Brochure</span>
              )}
            </div>
          </div>

          <div style={{ ...reveal(0.3) }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 30px 70px rgba(2,0,98,.3)", aspectRatio: "5 / 4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={solution.heroImage} alt={`${solution.name} machine — ${solution.tagline}, supplied by Vedvik Machinery, Ahmedabad`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW (descriptive body copy for SEO) ── */}
      {solutionOverview[solution.slug] && (
        <section style={{ background: "#fff", padding: `clamp(3.5rem,7vw,6rem) ${PAD} 0` }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Overview</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", margin: "0.5rem 0 1.4rem", color: NAVY }}>{solution.tagline}</ScrollText>
            {solutionOverview[solution.slug].map((para, i) => (
              <ScrollRise key={i} delay={i * 0.1}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.08rem", lineHeight: 1.75, color: "rgba(14,23,80,.78)", margin: "0 0 1.2rem" }}>{para}</p>
              </ScrollRise>
            ))}
          </div>
        </section>
      )}

      {/* ── DEMO VIDEO (directly below hero) ── */}
      <section style={{ background: "#fff", padding: `clamp(3.5rem,7vw,6rem) ${PAD} 0` }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(1.5rem,3vw,2.2rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Demo</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", margin: "0.5rem 0 0", color: NAVY }}>See it in action</ScrollText>
          </div>
          <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "18px", overflow: "hidden", background: INK_TEXT, boxShadow: "0 24px 60px rgba(2,0,98,.18)" }}>
            <iframe
              title={`${solution.name} demo`}
              src={`https://www.youtube-nocookie.com/embed/${solution.youtubeId ?? DEMO_YT}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ── SHOWCASE ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={showcase.ref} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(showcase.seen, 0), marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Capabilities</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0.6rem 0 0.8rem", color: NAVY }}>{showcaseTitle}</ScrollText>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.6, color: "rgba(14,23,80,.62)", maxWidth: "40rem", margin: 0 }}>{showcaseLead}</p>
          </div>

          <div className="sd-grid">
            {solution.showcaseLabels && solution.showcaseLabels.length > 0
              ? solution.showcaseLabels.map((label, i) => (
                  <ShowcaseTile key={label} label={label} show={showcase.seen} delay={0.12 + i * 0.08} rise={rise} />
                ))
              : solution.showcaseImages.map((src, i) => (
                  <ShowcaseTile key={i} image={src} show={showcase.seen} delay={0.12 + i * 0.08} rise={rise} />
                ))}
          </div>
        </div>
      </section>

      {/* ── SPECS + MANUFACTURER ── */}
      <section style={{ background: "#f5f8ff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={specs.ref} className="sd-two" style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(specs.seen, 0) }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Technical</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.02em", margin: "0.6rem 0 1.6rem", color: NAVY }}>Specifications</ScrollText>
            <div style={{ borderTop: "1px solid rgba(2,0,98,.12)" }}>
              {solution.specs.map((sp) => (
                <div key={sp.label} style={{ display: "flex", justifyContent: "space-between", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid rgba(2,0,98,.1)" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", color: "rgba(14,23,80,.6)" }}>{sp.label}</span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "0.95rem", color: NAVY, textAlign: "right" }}>{sp.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...rise(specs.seen, 0.15) }}>
            <div style={{ background: "#fff", border: "1px solid rgba(2,0,98,.1)", borderRadius: "16px", padding: "1.8rem" }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "0.7rem" }}>Manufacturer</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "1.25rem", color: NAVY }}>{solution.partner}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", color: "rgba(14,23,80,.6)", marginTop: "0.4rem" }}>{solution.partnerNote}</div>
            </div>
            <div style={{ marginTop: "1.2rem", background: BRAND_GRADIENT, borderRadius: "16px", padding: "1.8rem", color: "#fff" }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.6rem" }}>Custom configurations</div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", lineHeight: 1.6, color: "rgba(255,255,255,.85)", margin: 0 }}>
                Modular tooling allows rapid format changeovers. We adapt the system to your product,
                output and integration requirements — and support it locally from Ahmedabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// No hover effects here — these tiles are not clickable, so per site rules they stay static.
function ShowcaseTile({ image, label, show, delay, rise }: { image?: string; label?: string; show: boolean; delay: number; rise: (s: boolean, d: number) => React.CSSProperties }) {
  return (
    <div style={rise(show, delay)}>
      <div
        style={{
          display: "flex", flexDirection: "column", height: "100%", borderRadius: "14px", overflow: "hidden",
          border: "1px solid rgba(2,0,98,.1)",
          background: image ? "#eaf1fc" : "#fff",
          boxShadow: "0 1px 2px rgba(2,0,98,.04)",
        }}
      >
        {image ? (
          <div style={{ aspectRatio: "4 / 3", overflow: "hidden", background: "#eaf1fc", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={label ?? "Packaging format produced on this Vedvik Machinery system"} loading="lazy"
              onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = "https://picsum.photos/seed/vedvik-showcase/400/300"; } }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ) : (
          <div style={{ aspectRatio: "4 / 3", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1.4rem 1rem" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "0.95rem", letterSpacing: "-0.01em", color: NAVY }}>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
