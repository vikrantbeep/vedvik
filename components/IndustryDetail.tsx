"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW, BRAND_GRADIENT } from "./SiteChrome";
import { type Industry, industryImage, industryImageFallback } from "@/lib/industries";
import { getSolution } from "@/lib/solutions";
import { usePageReady } from "./usePageReady";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";
import { ScrollRise } from "@/components/core/scroll-rise";

// Smaller version of the Solutions-page card — same hover behaviour (gradient fill,
// lift, white text), compact sizing for the recommended-systems grid.
function MiniSolutionCard({ s, show, delay }: { s: NonNullable<ReturnType<typeof getSolution>>; show: boolean; delay: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={rise(show, delay)}>
      <a
        href={`/solutions/${s.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
          borderRadius: "14px", overflow: "hidden",
          border: `1px solid ${hover ? "transparent" : "rgba(2,0,98,.1)"}`,
          background: hover ? BRAND_GRADIENT : "#fff",
          boxShadow: hover ? "0 20px 44px rgba(2,0,98,.24)" : "0 1px 2px rgba(2,0,98,.04)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          transition: "transform .9s cubic-bezier(.2,.7,.2,1), background 1.2s ease, box-shadow 1s ease, border-color 1.2s ease",
        }}
      >
        <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "#eaf1fc", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.heroImage} alt={`${s.name} machine — recommended packaging system from Vedvik Machinery`} loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 1.2s ease" }} />
        </div>
        <div style={{ padding: "1.1rem 1.2rem 1.2rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: hover ? SKY : BLUE, transition: "color 1.2s ease" }}>
            {s.category}
          </span>
          <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.05rem", margin: "0.5rem 0 0.3rem", letterSpacing: "-0.01em", color: hover ? "#fff" : NAVY, transition: "color 1.2s ease" }}>
            {s.name}
          </h3>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.03em", flex: 1, color: hover ? "rgba(255,255,255,.9)" : BLUE, transition: "color 1.2s ease" }}>
            {s.partner}
          </div>
          <span style={{ marginTop: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.78rem", color: hover ? "#fff" : BLUE, transition: "color 1.2s ease" }}>
            View specifications <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .6s ease, color 1.2s ease" }}>→</span>
          </span>
        </div>
      </a>
    </div>
  );
}

function useScrollIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setSeen(true); }), { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

const rise = (show: boolean, d: number): React.CSSProperties => ({
  opacity: show ? 1 : 0,
  transform: show ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
});

export default function IndustryDetail({ industry }: { industry: Industry }) {
  const loaded = usePageReady();
  const req = useScrollIn();
  const sys = useScrollIn();

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  const systems = industry.recommended.map((slug) => getSolution(slug)).filter(Boolean);

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:'Montserrat',sans-serif;letter-spacing:.02em}
        .nav-link:hover{color:${NAVY}}
        .show-mobile{display:none}
        .req-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem}
        .sys-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.2rem}
        @media (max-width:1080px){.sys-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
        @media (max-width:860px){.req-grid{grid-template-columns:1fr}.sys-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:560px){.sys-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="page-hero" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: BRAND_GRADIENT }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={industryImage(industry.slug, 1600, 900)} alt={`${industry.name} packaging — packaging machines and inspection systems for ${industry.name.toLowerCase()} manufacturers in India`}
          onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = industryImageFallback(industry.slug, 1600, 900); } }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,52,.45) 0%, rgba(8,18,52,.35) 45%, rgba(8,18,52,.8) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: MAXW, margin: "0 auto", width: "100%", padding: `clamp(2.5rem,6vw,4.5rem) ${PAD}` }}>
          <a href="/industries" style={{ ...reveal(0.05), display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.8)", marginBottom: "1.2rem" }}>← Industries</a>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.3rem,6vw,4.6rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>{industry.name}</TextEffect>
          <p style={{ ...reveal(0.3), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.6, color: "rgba(255,255,255,.85)", maxWidth: "40rem", marginTop: "1rem" }}>{industry.desc}</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,8vw,6.5rem) ${PAD}` }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "1.2rem" }}>Overview</div>
          <ScrollRise delay={0.1}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(1.1rem,2vw,1.5rem)", lineHeight: 1.6, color: INK_TEXT, maxWidth: "52rem", margin: 0, fontWeight: 300 }}>{industry.overview}</p>
          </ScrollRise>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section style={{ background: "#f5f8ff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={req.ref} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(req.seen, 0), marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Challenges</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-0.02em", margin: "0.5rem 0 0", color: NAVY }}>Industry requirements</ScrollText>
          </div>
          <div className="req-grid">
            {industry.requirements.map((r, i) => (
              <div key={r.title} style={{ ...rise(req.seen, 0.12 + i * 0.1), background: "#fff", border: "1px solid rgba(2,0,98,.1)", borderRadius: "16px", padding: "1.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "0.9rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "9px", background: BLUE, color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "1.15rem", margin: 0, color: NAVY }}>{r.title}</h3>
                </div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.92rem", lineHeight: 1.6, color: "rgba(14,23,80,.62)", margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED SYSTEMS ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={sys.ref} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(sys.seen, 0), marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Equipment</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-0.02em", margin: "0.5rem 0 0", color: NAVY }}>Recommended systems</ScrollText>
          </div>
          <div className="sys-grid">
            {systems.map((s, i) => s && (
              <MiniSolutionCard key={s.slug} s={s} show={sys.seen} delay={0.12 + (i % 4) * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: BRAND_GRADIENT, padding: `clamp(4rem,9vw,6.5rem) ${PAD}`, textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.9rem,5vw,3.4rem)", letterSpacing: "-0.03em", color: "#fff", margin: "0 auto 1.4rem", maxWidth: "24ch", textAlign: "center" }}>{`Packaging a ${industry.name.toLowerCase()} product?`}</ScrollText>
          <ScrollRise delay={0.15}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.6, color: "rgba(255,255,255,.88)", maxWidth: "34rem", margin: "0 auto 2.2rem" }}>Tell us your product and output — we&apos;ll recommend the right line for your sector.</p>
          </ScrollRise>
          <a href="/contact" className="btn btn-white" style={{ minWidth: "190px" }}>Talk to our team</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
