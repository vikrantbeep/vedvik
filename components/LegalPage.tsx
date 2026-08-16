"use client";

import React from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW } from "./SiteChrome";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollRise } from "@/components/core/scroll-rise";

export type LegalSection = { heading: string; paragraphs: string[] };

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  const loaded = usePageReady();

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  return (
    <div style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .show-mobile{display:none}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      <section className="page-hero" style={{ position: "relative", overflow: "hidden", padding: `calc(clamp(3.5rem,8vw,5.5rem) + 68px) ${PAD} clamp(3rem,6vw,4rem)` }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...reveal(0.05), fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>{eyebrow}</div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>{title}</TextEffect>
          <p style={{ ...reveal(0.28), fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>{intro}</p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: `clamp(3rem,7vw,5rem) ${PAD} clamp(4rem,8vw,7rem)` }}>
        <article style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.88rem", color: "rgba(14,23,80,.55)", margin: "0 0 2.4rem", paddingBottom: "1.6rem", borderBottom: "1px solid rgba(2,0,98,.1)" }}>
            Last updated: {updated}
          </p>
          {sections.map((sec, i) => (
            <ScrollRise key={i}>
              <div style={{ marginBottom: "2.2rem" }}>
                <h2 style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "clamp(1.2rem,2.4vw,1.6rem)", letterSpacing: "-0.01em", color: NAVY, margin: "0 0 0.9rem" }}>{sec.heading}</h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "1.02rem", lineHeight: 1.75, color: "rgba(14,23,80,.78)", margin: "0 0 1rem" }}>{p}</p>
                ))}
              </div>
            </ScrollRise>
          ))}
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(2,0,98,.1)" }}>
            <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "rgba(14,23,80,.78)", margin: 0 }}>
              Questions about this page? Email{" "}
              <a href="mailto:vikrant@vedvikmachinery.com" style={{ color: BLUE, fontWeight: 600, textDecoration: "none" }}>vikrant@vedvikmachinery.com</a>{" "}
              or visit our <a href="/contact" style={{ color: BLUE, fontWeight: 600, textDecoration: "none" }}>contact page</a>.
            </p>
          </div>
        </article>
      </section>

      <SiteFooter />
    </div>
  );
}
