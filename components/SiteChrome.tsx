"use client";

import React, { useState } from "react";
import type { SiteSettings } from "@/lib/content";
import { defaultSettings } from "@/lib/content";

// ── Shared brand tokens ──
export const NAVY = "#020062";
export const BLUE = "#3969C4";
export const SKY = "#80AFE8";
export const INK_TEXT = "#0e1750";
export const PAD = "clamp(1.4rem, 4vw, 3.5rem)";
export const MAXW = "1280px";
export const LOGO =
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780846274/Vedvik_Logo_TightCrop_ght0v2.svg";

// ── Brand gradient (from homepage "DATA 01" section) — use for all hero/navy backgrounds ──
export const BRAND_GRADIENT = "linear-gradient(140deg,#80afe8 0%,#3969c4 55%,#020062 100%)";

// ── Shared button styles: blue or white, hover inverts (blue↔white) ──
export const BTN_CSS = `
.nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:'Montserrat',sans-serif;letter-spacing:.02em}
.nav-link:hover{color:#020062}
.nav-link-light{color:rgba(255,255,255,.92)}
.nav-link-light:hover{color:#fff}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;text-align:center;text-decoration:none;font-family:'Inter',sans-serif;font-weight:600;font-size:.95rem;padding:.9rem 1.9rem;border-radius:2rem;transition:background .5s ease,color .5s ease,border-color .5s ease;box-sizing:border-box;cursor:pointer}
.btn-blue{background:${BLUE};color:#fff;border:1px solid ${BLUE}}
.btn-blue:hover{background:#fff;color:${BLUE}}
.btn-white{background:#fff;color:${BLUE};border:1px solid #fff}
.btn-white:hover{background:${BLUE};color:#fff;border-color:${BLUE}}
.btn-ghost-light{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.7)}
.btn-ghost-light:hover{background:#fff;color:${BLUE};border-color:#fff}
.btn-ghost-dark{background:transparent;color:${NAVY};border:1px solid rgba(2,0,98,.5)}
.btn-ghost-dark:hover{background:${BLUE};color:#fff;border-color:${BLUE}}
`;

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  // Transparent over the (blue) hero; switches to the frosted light bar once the user
  // scrolls onto white content, so the links never become unreadable.
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !scrolled && !open;

  return (
    <header style={{
      // Fixed so the transparent bar overlays the hero instead of reserving white space.
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: overHero ? "transparent" : "rgba(255,255,255,.6)",
      backdropFilter: overHero ? "none" : "blur(18px) saturate(180%)",
      WebkitBackdropFilter: overHero ? "none" : "blur(18px) saturate(180%)",
      borderBottom: `1px solid ${overHero ? "transparent" : "rgba(255,255,255,.4)"}`,
      boxShadow: overHero ? "none" : "0 1px 0 rgba(2,0,98,.06)",
      transition: "background .6s ease, border-color .6s ease, box-shadow .6s ease",
    }}>
      <style>{BTN_CSS}</style>
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: `0.6rem ${PAD}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <a href="/" aria-label="Vedvik Machinery — home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Vedvik Machinery — packaging machines manufacturer in Ahmedabad"
            style={{ height: "clamp(28px,5.5vw,38px)", width: "auto", display: "block", filter: overHero ? "brightness(0) invert(1)" : "none", transition: "filter .6s ease" }} />
        </a>

        <nav className="hide-mobile" aria-label="Main navigation" style={{ display: "flex", gap: "clamp(1rem,2.2vw,2.2rem)", alignItems: "center" }}>
          {navLinks.map((l) => <a key={l.label} className={overHero ? "nav-link nav-link-light" : "nav-link"} href={l.href}>{l.label}</a>)}
        </nav>

        <a className={`hide-mobile btn ${overHero ? "btn-white" : "btn-blue"}`} href="/contact" style={{ flexShrink: 0, fontSize: "0.85rem", padding: "0.6rem 1.3rem" }}>Request Quote</a>

        <button className="show-mobile" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.4rem", color: overHero ? "#fff" : NAVY, alignItems: "center", transition: "color .6s ease" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : (<><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>)}
          </svg>
        </button>
      </div>

      {open && (
        <div className="show-mobile" style={{ flexDirection: "column", borderTop: "1px solid rgba(2,0,98,.08)", background: "#fff", padding: `0.4rem ${PAD} 1.2rem` }}>
          {navLinks.map((l) => (
            <a key={l.label} className="nav-link" href={l.href} onClick={() => setOpen(false)} style={{ padding: "0.75rem 0", fontSize: "1rem" }}>{l.label}</a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="btn btn-blue" style={{ marginTop: "0.7rem", fontSize: "0.9rem", padding: "0.75rem 1.3rem" }}>Request Quote</a>
        </div>
      )}
    </header>
  );
}

// Company social profiles
export const LINKEDIN_URL = "https://www.linkedin.com/company/vedvik-machinery-india/";
export const YOUTUBE_URL = "https://www.youtube.com/@Vedvik_Machinery";

export function SiteFooter({ settings = defaultSettings }: { settings?: SiteSettings } = {}) {
  const colStyle: React.CSSProperties = { fontFamily: "'Inter',sans-serif", fontSize: "0.88rem", lineHeight: 2, color: "rgba(255,255,255,.6)" };
  const headStyle: React.CSSProperties = { fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: SKY, marginBottom: "1rem" };
  const linkStyle: React.CSSProperties = { color: "rgba(255,255,255,.6)", textDecoration: "none" };
  const socialStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: "0.6rem", color: "rgba(255,255,255,.75)", textDecoration: "none", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", fontWeight: 500 };
  return (
    <footer style={{ position: "relative", overflow: "hidden", background: BRAND_GRADIENT, color: "#fff" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto", padding: `clamp(3.5rem,7vw,5rem) ${PAD} 2.5rem`, display: "grid", gridTemplateColumns: "minmax(0,1.6fr) repeat(2, minmax(0,1fr))", gap: "clamp(2rem,5vw,4rem)" }} className="footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Vedvik Machinery — packaging machines manufacturer in Ahmedabad, India" style={{ height: "44px", width: "auto", marginBottom: "1.2rem", filter: "brightness(0) invert(1)" }} />
          <p style={{ ...colStyle, lineHeight: 1.7, maxWidth: "24rem" }}>{settings.footerBlurb}</p>
          <div style={{ ...colStyle, lineHeight: 1.6, marginTop: "1.2rem" }}>
            {settings.addressLine1},<br />{settings.addressLine2}
          </div>
          <a href={`mailto:${settings.email}`} style={{ display: "inline-block", marginTop: "0.9rem", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            {settings.email}
          </a>
        </div>
        <div>
          <div style={headStyle}>Menu</div>
          <div style={colStyle}>
            {navLinks.map((l) => (
              <React.Fragment key={l.label}>
                <a href={l.href} style={linkStyle}>{l.label}</a><br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div style={headStyle}>Connect</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" style={socialStyle}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.23 0z" />
              </svg>
              LinkedIn
            </a>
            <a href={settings.youtube} target="_blank" rel="noopener noreferrer" style={socialStyle}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden>
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto", padding: `1.4rem ${PAD}`, fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,.85)", display: "flex", flexWrap: "wrap", gap: "0.5rem 1.4rem", justifyContent: "space-between" }}>
          <span>© {new Date().getFullYear()} Vedvik Machinery · Manufacturer of Packaging Machines · Ahmedabad, India</span>
          <span style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <a href="/privacy" style={{ color: "rgba(255,255,255,.85)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "rgba(255,255,255,.85)", textDecoration: "none" }}>Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
