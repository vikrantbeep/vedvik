"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW, BRAND_GRADIENT } from "./SiteChrome";
import { packaging, inspection, type Solution } from "@/lib/solutions";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";


function cardRise(show: boolean, i: number): React.CSSProperties {
  return {
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(34px)",
    transition: `opacity 1.3s cubic-bezier(.2,.7,.2,1) ${i * 0.18}s, transform 1.3s cubic-bezier(.2,.7,.2,1) ${i * 0.18}s`,
  };
}

function SolutionCard({ item, kind, show, index, image }: { item: Solution; kind: string; show: boolean; index: number; image?: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={cardRise(show, index)}>
      <a
        href={`/solutions/${item.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          textDecoration: "none", height: "100%", borderRadius: "16px", overflow: "hidden",
          border: `1px solid ${hover ? "transparent" : "rgba(2,0,98,.1)"}`,
          background: hover ? BRAND_GRADIENT : "#fff",
          boxShadow: hover ? "0 26px 55px rgba(2,0,98,.28)" : "0 1px 2px rgba(2,0,98,.04)",
          transform: hover ? "translateY(-8px)" : "translateY(0)",
          transition: "transform .9s cubic-bezier(.2,.7,.2,1), background 1.2s ease, box-shadow 1s ease, border-color 1.2s ease",
          display: "flex", flexDirection: "column",
        }}
      >
        {image && (
          <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "#eaf1fc", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={`${item.name} machine — ${item.partner}, supplied by Vedvik Machinery Ahmedabad`} loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 1.2s ease" }} />
          </div>
        )}
        <div style={{ padding: "1.7rem 1.8rem 1.6rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: hover ? SKY : BLUE, transition: "color 1.2s ease" }}>
            {kind}
          </span>
          <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.3rem", margin: "0.8rem 0 0.6rem", letterSpacing: "-0.01em", color: hover ? "#fff" : NAVY, transition: "color 1.2s ease" }}>
            {item.name}
          </h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.6, margin: 0, flex: 1, color: hover ? "rgba(255,255,255,.82)" : "rgba(14,23,80,.62)", transition: "color 1.2s ease" }}>
            {item.desc}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem" }}>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.03em", color: hover ? "rgba(255,255,255,.9)" : BLUE, transition: "color 1.2s ease" }}>
              {item.partner}
            </span>
            <span style={{ color: hover ? "#fff" : BLUE, transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .6s ease, color 1.2s ease" }}>→</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Solutions() {
  const loaded = usePageReady();
  const [packIn, setPackIn] = useState(false);
  const [inspIn, setInspIn] = useState(false);
  const packRef = useRef<HTMLDivElement | null>(null);
  const inspRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === packRef.current) setPackIn(true);
          if (e.target === inspRef.current) setInspIn(true);
        });
      },
      { threshold: 0.15 }
    );
    if (packRef.current) obs.observe(packRef.current);
    if (inspRef.current) obs.observe(inspRef.current);
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
        .sol-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}
        @media (max-width:900px){.sol-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:600px){.sol-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}.page-hero{height:auto!important;min-height:0!important;padding:clamp(3rem,13vw,4.5rem) 0!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="page-hero" style={{ position: "relative", height: "100svh", minHeight: "560px", overflow: "hidden" }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto", padding: `0 ${PAD}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ ...reveal(0.1), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>
            Our Solutions
          </div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff", maxWidth: "18ch" }}>
            Every product has its line.
          </TextEffect>
          <p style={{ ...reveal(0.42), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>
            From pouches and bottles to bulk sacks, vision and X-ray — a complete range of packaging
            and inspection systems, matched to your product, speed and format.
          </p>
        </div>
      </section>

      {/* ── PACKAGING MACHINES ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={packRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...reveal(0), marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Division 01</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0.6rem 0 0", color: NAVY }}>Packaging Machines</ScrollText>
          </div>
          <div className="sol-grid">
            {packaging.map((item, i) => (
              <SolutionCard key={item.slug} item={item} image={item.heroImage} kind="Packaging" show={packIn} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INSPECTION SYSTEMS ── */}
      <section style={{ background: "#f5f8ff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div ref={inspRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>Division 02</span>
            <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0.6rem 0 0", color: NAVY }}>Inspection Systems</ScrollText>
          </div>
          <div className="sol-grid">
            {inspection.map((item, i) => (
              <SolutionCard key={item.slug} item={item} kind="Inspection & Support" show={inspIn} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
