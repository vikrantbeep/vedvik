"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW } from "./SiteChrome";
import { industries, industryImage, industryImageFallback } from "@/lib/industries";
import { usePageReady } from "./usePageReady";
import { TextEffect } from "@/components/core/text-effect";
import AnimatedGradient from "./AnimatedGradient";

function IndustryCard({ slug, name, desc, show, index }: { slug: string; name: string; desc: string; show: boolean; index: number }) {
  const [hover, setHover] = useState(false);
  const rise: React.CSSProperties = {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 1.3s cubic-bezier(.2,.7,.2,1) ${(index % 3) * 0.18}s, transform 1.3s cubic-bezier(.2,.7,.2,1) ${(index % 3) * 0.18}s`,
  };
  return (
    <div style={rise}>
      <a
        href={`/industries/${slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
          borderRadius: "16px", overflow: "hidden", background: "#fff",
          border: "1px solid rgba(2,0,98,.1)",
          boxShadow: hover ? "0 22px 48px rgba(2,0,98,.14)" : "0 1px 2px rgba(2,0,98,.04)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          transition: "transform .9s cubic-bezier(.2,.7,.2,1), box-shadow 1s ease",
        }}
      >
        <div style={{ aspectRatio: "3 / 2", overflow: "hidden", background: "#eaf1fc" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={industryImage(slug)} alt={`${name} packaging — packaging machines for the ${name.toLowerCase()} industry from Vedvik Machinery`} loading="lazy"
            onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = industryImageFallback(slug); } }}
            style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 1.2s ease" }} />
        </div>
        <div style={{ padding: "1.6rem 1.7rem 1.7rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE }}>Industry</span>
          <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.3rem", margin: "0.8rem 0 0.6rem", letterSpacing: "-0.01em", color: NAVY }}>{name}</h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.6, margin: 0, flex: 1, color: "rgba(14,23,80,.62)" }}>{desc}</p>
          <span style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.03em", color: BLUE }}>
            View Solutions <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .6s ease" }}>→</span>
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Industries() {
  const loaded = usePageReady();
  const [gridIn, setGridIn] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setGridIn(true); }), { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
        .ind-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.6rem}
        @media (max-width:900px){.ind-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:600px){.ind-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO / INTRO ── */}
      <section className="page-hero" style={{ position: "relative", overflow: "hidden", padding: `calc(clamp(3.5rem,8vw,5.5rem) + 68px) ${PAD} clamp(3rem,6vw,4rem)` }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...reveal(0.05), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>Industries</div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>Sectors we serve</TextEffect>
          <p style={{ ...reveal(0.28), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>
            From pharmaceuticals to pet food, Vedvik Machinery delivers tailored packaging and
            inspection systems across {industries.length} industries — each built around the
            regulatory environment, pack formats and production speeds of the sector.
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ background: "#fff", padding: `clamp(3rem,6vw,5rem) ${PAD} clamp(4rem,8vw,7rem)` }}>
        <div ref={gridRef} className="ind-grid" style={{ maxWidth: MAXW, margin: "0 auto" }}>
          {industries.map((ind, i) => (
            <IndustryCard key={ind.slug} slug={ind.slug} name={ind.name} desc={ind.desc} show={gridIn} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
