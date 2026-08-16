"use client";

import React from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW } from "./SiteChrome";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";

// Popular destinations — keeps visitors (and crawlers) moving into real content.
const links = [
  { label: "Packaging Machines", href: "/solutions", desc: "HFFS pouch packing, pick fill seal, liquid filling, stick packing and more." },
  { label: "Inspection Systems", href: "/solutions", desc: "Vision inspection, checkweighers, X-ray, metal detection and coders." },
  { label: "Industries We Serve", href: "/industries", desc: "Sector-matched lines for pharma, food, dairy, spices, pet food and more." },
  { label: "About Vedvik", href: "/about", desc: "28+ years of packaging machinery experience, based in Ahmedabad." },
  { label: "Packaging Guides", href: "/blog", desc: "Buying advice, HFFS vs VFFS, checkweigher standards and more." },
  { label: "Contact Us", href: "/contact", desc: "Tell us your product, output and pack format — we'll recommend a system." },
];

export default function NotFoundView() {
  const loaded = usePageReady();

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .show-mobile{display:none}
        .nf-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.2rem}
        @media (max-width:900px){.nf-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:600px){.nf-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      <section className="page-hero" style={{ position: "relative", overflow: "hidden", padding: `calc(clamp(4rem,9vw,6rem) + 68px) ${PAD} clamp(3.5rem,7vw,5rem)` }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...reveal(0.05), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>Error 404</div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>
            This page has moved off the line.
          </TextEffect>
          <p style={{ ...reveal(0.28), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>
            The page you were looking for doesn&apos;t exist or has been moved. Everything else is
            below — or tell us what you need and our Ahmedabad team will point you to the right system.
          </p>
          <div style={{ ...reveal(0.4), display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href="/" className="btn btn-white" style={{ minWidth: "180px" }}>Back to home</a>
            <a href="/contact" className="btn btn-ghost-light" style={{ minWidth: "180px" }}>Contact us</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: `clamp(3rem,6vw,4.5rem) ${PAD} clamp(4rem,8vw,7rem)` }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(1.6rem,4vw,2.4rem)", letterSpacing: "-0.02em", color: NAVY, margin: "0 0 clamp(1.6rem,3vw,2.4rem)" }}>
            Where would you like to go?
          </h2>
          <div className="nf-grid">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                style={{ display: "block", textDecoration: "none", border: "1px solid rgba(2,0,98,.1)", borderRadius: "14px", padding: "1.4rem 1.5rem", background: "#fff" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.1rem", color: NAVY, marginBottom: "0.5rem" }}>{l.label}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 1.6, color: "rgba(14,23,80,.62)" }}>{l.desc}</div>
                <span style={{ display: "inline-block", marginTop: "0.9rem", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.03em", color: BLUE }}>Go →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
