"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePageReady } from "./usePageReady";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";
import { ScrollRise } from "@/components/core/scroll-rise";
import { industries as industryPages } from "@/lib/industries";
import { BRAND_GRADIENT, BTN_CSS, SiteFooter } from "./SiteChrome";
import type { Faq, SiteSettings } from "@/lib/content";

// ── Brand tokens (Vedvik blues) ────────────────────────────────
const NAVY = "#020062"; // deep anchor
const BLUE = "#3969C4"; // brand mid-blue (accents, links)
const SKY = "#80AFE8"; // brand light blue (highlights)
const INK_TEXT = "#0e1750";

const PAD = "clamp(1.4rem, 4vw, 3.5rem)";
const MAXW = "1280px";


const LOGO = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780846274/Vedvik_Logo_TightCrop_ght0v2.svg";
// Cloudinary transformations: q_auto picks the lightest acceptable quality, vc_auto/f_auto the
// best codec/format per browser — typically 40–70% smaller than the raw upload.
const HERO_VIDEO = "https://res.cloudinary.com/dnts8gzbh/video/upload/q_auto,vc_auto/v1785571369/Untitled_design_1_itmvr2.mp4";
// Hero fallback image — shown instantly under the video, on mobile (which never loads the
// video), and permanently if the video hasn't loaded within 3 seconds.
const HERO_IMG = "https://res.cloudinary.com/dnts8gzbh/image/upload/f_auto,q_auto/v1782014222/Gemini_Generated_Image_jm7nt3jm7nt3jm7n_cinajn.png";

type Item = {
  name: string;
  desc: string;
  brand: string;
  icon?: string;
  img?: string;
  slug?: string;
};

const CLD = "https://res.cloudinary.com/dnts8gzbh/image/upload";
const packaging: Item[] = [
  { name: "Pouch Packing", slug: "horizontal-form-fill-seal", desc: "High-speed pouch packing with the Effytec HB Series — up to 320 PPM for shaped, spouted and ziplock pouches.", brand: "Effytec · Spain", img: `${CLD}/v1778774880/Effytec_rnrkwy.png` },
  { name: "Liquid Filling", slug: "liquid-filling", desc: "Rotary filling lines from 50 ml to 50 L — servo and gravity fill, CIP/SIP ready.", brand: "Filtec · South Africa", img: `${CLD}/v1778774882/Filtec_pjlyz3.png` },
  { name: "Pick Fill Seal", slug: "pick-fill-seal", desc: "Cam-driven PFS systems for doy pouches and ziplock bags — 50 g to 5 kg, up to 60 cycles/min.", brand: "Vedvik · India", img: `${CLD}/v1778774881/VMpfs_fazimw.png` },
  { name: "Friction Feeders", slug: "friction-feeders", desc: "Servo-driven friction feeders for precise feeding, transfer and placement of cards, leaflets, cartons and other flat products at line speed.", brand: "Kraus · Germany", img: `${CLD}/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png` },
  { name: "Bulk Packing", slug: "bulk-packing", desc: "Heavy-duty bag packing in HFFS/VFFS format for 5–50 kg. Heat seal or stitch seal.", brand: "MF Tecno · Italy", img: `${CLD}/v1778774883/MFtecno_t1p2xp.png` },
  { name: "Twist Tying", slug: "twist-tying", desc: "Twist tying packaging systems engineered for precision across FMCG and pharma.", brand: "Comipack · Italy", img: `${CLD}/v1780314168/ChatGPT_Image_Jun_1_2026_05_12_27_PM_tpx536.png` },
  { name: "Stick Packing", slug: "stick-packing", desc: "Advanced packaging for high-production stick and sachet formats.", brand: "Boato Pack · Italy", img: `${CLD}/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png` },
  { name: "Feeding Systems", slug: "feeding-systems", desc: "Versatile feeding for pumps, triggers, spouts, spray heads and roll-ons.", brand: "GMS · Spain", img: `${CLD}/v1779350063/th_alimentadores-vibratorios-para-obturadores-de-goma-o-liofilizados_8195478_jl7lui.jpg` },
  { name: "Secondary Packaging", slug: "secondary-packaging", desc: "Cartoning, case packing, shrink wrapping, pick-and-place and palletising.", brand: "Vedvik · India", img: `${CLD}/v1778774885/Secondary_zqcr5t.png` },
];

const inspection: Item[] = [
  { name: "Vision Inspection", slug: "vision-inspection", desc: "Camera-based inspection for cap defects, label placement, fill level and seal integrity — up to 1,200 units/min.", brand: "E2M Couth · Spain", icon: "lens" },
  { name: "Checkweighers", slug: "checkweighers", desc: "Dynamic inline checkweighing from 5 g to 15 kg — up to 300 packs/min with automatic reject. OIML/CE certified.", brand: "Varpe · Spain", icon: "scale" },
  { name: "X-Ray & Metal Detection", slug: "x-ray-and-metal-detection", desc: "Detection of foreign bodies, voids and underfill, combined with metal detection. CE / FDA 21 CFR.", brand: "Varpe · Spain", icon: "xray" },
  { name: "Printers & Coders", slug: "printers-coders", desc: "TIJ, CIJ and laser coders for batch codes, MRP dates and barcodes — Industry 4.0 and MQTT enabled.", brand: "MapleJet · Canada", icon: "code" },
  { name: "Slitting & Lamination", slug: "slitting-lamination", desc: "Converting solutions for cutting, printing and bonding flexible packaging films.", brand: "Vedvik · India", icon: "roll" },
];

const stats = [
  { value: 28, suffix: "+", label: "years of industry experience" },
  { value: 6, suffix: "", label: "international brands represented" },
  { value: 13, suffix: "", label: "industries served" },
  { value: 14, suffix: "", label: "machine & inspection systems" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// International partners — each tile links to the brand's official website.
const partners = [
  { name: "Effytec", url: "https://effytec.com/en/" },
  { name: "Varpe", url: "https://www.varpe.com/" },
  { name: "E2M Couth", url: "https://e2mcouth.com/en/" },
  { name: "Filtec", url: "https://www.filtec.co.za/" },
  { name: "MF Tecno", url: "https://www.mftecno.com/" },
  { name: "MapleJet", url: "https://maplejet.com/" },
  { name: "Comipack", url: "https://www.comipak.com/" },
  { name: "Boato Pack", url: "https://boatopack.com/" },
  { name: "GMS", url: "https://www.gmsfeedingsystems.com/" },
  { name: "Kraus", url: "https://www.krausmb.de/index.php/en/" },
];


// ── Inspection line icons (meaningful, not generic) ────────────
function InspectionIcon({ type, color, size = 24 }: { type: string; color: string; size?: number }) {
  const s: React.SVGProps<SVGSVGElement> = { width: size, height: size, fill: "none", stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "lens": return (<svg viewBox="0 0 38 38" {...s}><circle cx="16" cy="16" r="9" /><circle cx="16" cy="16" r="3.4" /><line x1="22.5" y1="22.5" x2="31" y2="31" /></svg>);
    case "scale": return (<svg viewBox="0 0 38 38" {...s}><line x1="19" y1="6" x2="19" y2="31" /><line x1="9" y1="31" x2="29" y2="31" /><path d="M19 9 L7 9 M19 9 L31 9" /><path d="M7 9 L3 18 a5 5 0 0 0 8 0 Z" /><path d="M31 9 L27 18 a5 5 0 0 0 8 0 Z" /></svg>);
    case "xray": return (<svg viewBox="0 0 38 38" {...s}><rect x="6" y="6" width="26" height="26" rx="3" /><line x1="6" y1="19" x2="32" y2="19" opacity="0.5" /><circle cx="19" cy="19" r="5" /><line x1="19" y1="14" x2="19" y2="24" opacity="0.5" /></svg>);
    case "code": return (<svg viewBox="0 0 38 38" {...s}><rect x="6" y="9" width="26" height="20" rx="2" /><line x1="11" y1="14" x2="11" y2="24" /><line x1="15" y1="14" x2="15" y2="24" /><line x1="19" y1="14" x2="19" y2="24" /><line x1="24" y1="14" x2="24" y2="24" /><line x1="28" y1="14" x2="28" y2="24" /></svg>);
    case "roll": return (<svg viewBox="0 0 38 38" {...s}><ellipse cx="13" cy="19" rx="7" ry="9" /><path d="M13 10 L27 10 M13 28 L27 28" /><path d="M27 10 a7 9 0 0 1 0 18" /></svg>);
    default: return null;
  }
}

function Stat({ value, suffix, label, run, index }: { value: number; suffix: string; label: string; run: boolean; index: number }) {
  // Dial-style count-up: animates 0 → value once the section scrolls into view.
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (!run) return;
    const duration = 2600; // slow, premium dial settle
    const start = performance.now() + index * 150; // stagger with the reveal delay
    const tick = (t: number) => {
      const p = Math.min(Math.max((t - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic, like a dial settling
      setDisplay(Math.round(eased * value));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [run, value, index]);
  return (
    <div style={{
      borderTop: "1px solid rgba(255,255,255,.3)", paddingTop: "1.1rem",
      opacity: run ? 1 : 0.001, transform: run ? "translateY(0)" : "translateY(14px)",
      transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${index * 0.15}s, transform 1s cubic-bezier(.2,.7,.2,1) ${index * 0.15}s`,
    }}>
      <div style={{
        fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300,
        fontSize: "clamp(2.6rem,5.5vw,4rem)", lineHeight: 1, color: "#fff",
        fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em",
      }}>{display}<span style={{ color: SKY }}>{suffix}</span></div>
      <div style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.84rem", lineHeight: 1.45, color: "rgba(255,255,255,.72)", marginTop: "0.7rem", maxWidth: "15rem" }}>{label}</div>
    </div>
  );
}

function Eyebrow({ label, num, color }: { label: string; num: string; color: string }) {
  const line = color === "#fff" ? "rgba(255,255,255,.28)" : "rgba(2,0,98,.16)";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${line}`, paddingBottom: "0.9rem", marginBottom: "clamp(2rem,5vw,3.6rem)" }}>
      <span style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color }}>{label}</span>
      <span style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 500, fontSize: "0.74rem", letterSpacing: "0.1em", color }}>[{num}]</span>
    </div>
  );
}

function Pill({ children, light, filled, wide, href = "#" }: { children: React.ReactNode; light?: boolean; filled?: boolean; wide?: boolean; href?: string }) {
  // Blue button → hover white with blue text; white/outline button → hover inverts likewise.
  const cls = filled ? "btn btn-blue" : light ? "btn btn-ghost-light" : "btn btn-ghost-dark";
  return (
    <a href={href} className={cls} style={{ fontWeight: 500, padding: "0.85rem 2rem", minWidth: wide ? "190px" : undefined }}>
      {children}
    </a>
  );
}

// ── Standard scroll-in rise for cards (matches the Solutions page) ──
function cardRise(show: boolean, i: number): React.CSSProperties {
  return {
    height: "100%",
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(34px)",
    transition: `opacity 1.3s cubic-bezier(.2,.7,.2,1) ${i * 0.18}s, transform 1.3s cubic-bezier(.2,.7,.2,1) ${i * 0.18}s`,
  };
}

// ── Packaging card (machine photo fills the box) ──
function PackagingCard({ name, desc, brand, img, slug }: Item) {
  const [hover, setHover] = useState(false);
  return (
    <a href={slug ? `/solutions/${slug}` : "/solutions"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        border: "1px solid rgba(2,0,98,.1)", borderRadius: "18px", overflow: "hidden",
        background: "#fff", transform: hover ? "translateY(-5px)" : "translateY(0)",
        transition: "all .9s cubic-bezier(.2,.7,.2,1)",
        boxShadow: hover ? "0 22px 50px rgba(2,0,98,.13)" : "0 1px 2px rgba(2,0,98,.04)",
        display: "flex", flexDirection: "column", height: "100%",
      }}>
      <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: "#eaf1fc" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={`${name} machine by ${brand} — supplied by Vedvik Machinery, Ahmedabad`} loading="lazy"
          onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = "https://picsum.photos/seed/vedvik-pack/640/480"; } }}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 1.2s ease" }} />
      </div>
      <div style={{ padding: "1.5rem 1.5rem 1.6rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 500, fontSize: "1.25rem", margin: "0 0 0.6rem", color: NAVY, letterSpacing: "-0.01em" }}>{name}</h3>
        <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.88rem", lineHeight: 1.55, flex: 1, margin: 0, color: "rgba(14,23,80,.6)" }}>{desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.3rem" }}>
          <span style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.03em", color: BLUE }}>{brand}</span>
          <span style={{ color: BLUE, transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .6s ease" }}>→</span>
        </div>
      </div>
    </a>
  );
}

// ── Inspection card (compact, small icon — no large image area) ──
function InspectionCard({ name, desc, brand, icon, slug }: Item) {
  const [hover, setHover] = useState(false);
  return (
    <a href={slug ? `/solutions/${slug}` : "/solutions"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        border: "1px solid rgba(2,0,98,.1)", borderRadius: "14px", background: "#fff",
        padding: "1.4rem 1.4rem 1.5rem", display: "flex", flexDirection: "column", height: "100%",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all .9s cubic-bezier(.2,.7,.2,1)",
        boxShadow: hover ? "0 14px 32px rgba(2,0,98,.1)" : "0 1px 2px rgba(2,0,98,.04)",
      }}>
      <div style={{
        width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
        background: hover ? BLUE : "rgba(57,105,196,.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background .5s ease", marginBottom: "1rem",
      }}>
        {icon ? <InspectionIcon type={icon} color={hover ? "#fff" : BLUE} size={22} /> : null}
      </div>
      <h3 style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 500, fontSize: "1.05rem", margin: "0 0 0.5rem", color: NAVY, letterSpacing: "-0.01em" }}>{name}</h3>
      <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.84rem", lineHeight: 1.5, flex: 1, margin: 0, color: "rgba(14,23,80,.6)" }}>{desc}</p>
      <span style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.03em", color: BLUE, marginTop: "1rem" }}>{brand}</span>
    </a>
  );
}

// ── Sticky top navbar with logo image slot ──
function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: "rgba(255,255,255,.6)",
      backdropFilter: "blur(18px) saturate(180%)",
      WebkitBackdropFilter: "blur(18px) saturate(180%)",
      borderBottom: "1px solid rgba(255,255,255,.4)",
      boxShadow: "0 1px 0 rgba(2,0,98,.06)",
    }}>
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: `0.6rem ${PAD}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        {/* Logo image slot (replace src with your logo) */}
        <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Vedvik Machinery" style={{ height: "clamp(28px,5.5vw,38px)", width: "auto", display: "block" }} />
        </a>

        <nav className="hide-mobile" style={{ display: "flex", gap: "clamp(1rem,2.2vw,2.2rem)", alignItems: "center" }}>
          {navLinks.map((l) => <a key={l.label} className="nav-link" href={l.href}>{l.label}</a>)}
        </nav>

        <a className="hide-mobile btn btn-blue" href="/contact" style={{ flexShrink: 0, fontSize: "0.85rem", padding: "0.6rem 1.3rem" }}>Request Quote</a>

        {/* Mobile hamburger */}
        <button className="show-mobile" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.4rem", color: NAVY, alignItems: "center" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
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

export default function VedvikSite({ faqs, settings }: { faqs: Faq[]; settings: SiteSettings }) {
  const loaded = usePageReady();
  const [statsIn, setStatsIn] = useState(false);
  // Only mount the <video> on desktop-sized screens — phones never download a single
  // video byte and get the static poster image instead. (CSS display:none would still
  // download the video, so this must be a JS gate.)
  const [isDesktop, setIsDesktop] = useState(false);
  // Hero video: "loading" → "ready" (playable) or "failed" (error, or not loaded within 3s).
  const [videoState, setVideoState] = useState<"loading" | "ready" | "failed">("loading");
  // Scroll-in state for the packaging / inspection card grids.
  const [packIn, setPackIn] = useState(false);
  const [inspIn, setInspIn] = useState(false);
  const packRef = useRef<HTMLDivElement | null>(null);
  const inspRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // If the video isn't ready to play within 3 seconds, fall back to the static image for good.
  useEffect(() => {
    if (!isDesktop || videoState !== "loading") return;
    const t = setTimeout(() => setVideoState((s) => (s === "loading" ? "failed" : s)), 3000);
    return () => clearTimeout(t);
  }, [isDesktop, videoState]);

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

  useEffect(() => {
    const el = document.getElementById("data");
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStatsIn(true); });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  return (
    <div style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        @media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}
        .nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:var(--font-montserrat, 'Montserrat'), sans-serif;letter-spacing:.02em}
        .nav-link:hover{color:${NAVY}}
        @keyframes scrollX{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .marquee{display:flex;gap:.8rem;width:max-content;animation:scrollX 75s linear infinite}
        .marquee-wrap:hover .marquee{animation-play-state:paused}
        .chip{white-space:nowrap;border:1px solid rgba(2,0,98,.16);border-radius:2rem;padding:.75rem 1.6rem;font-size:1.1rem;color:${NAVY};font-weight:500;font-family:var(--font-inter, 'Inter'), sans-serif;text-decoration:none;display:inline-flex;align-items:center;transition:background .5s ease,color .5s ease,border-color .5s ease}
        .chip:hover{background:${BLUE};color:#fff;border-color:${BLUE}}
        ${BTN_CSS}
        .show-mobile{display:none}
        .pack-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.6rem}
        @media (max-width:900px){.pack-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media (max-width:600px){.pack-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.data-grid{grid-template-columns:1fr!important;gap:1.6rem!important}.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO (Palladio-style full-bleed) ── */}
      <section style={{
        position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden",
        background: "linear-gradient(180deg,#ffffff 0%,#e9f1fc 26%,#9dc1ed 60%,#3969c4 100%)",
      }}>
        {/* Fallback image renders instantly on every device (and is all mobile ever loads). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMG} alt="Vedvik Machinery packaging machines and inspection systems on a production line in Ahmedabad" fetchPriority="high"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        {/* Full-bleed background video — desktop only; removed permanently if it errors or
            isn't ready within 3s, leaving the static image above. */}
        {isDesktop && videoState !== "failed" && (
          <video autoPlay muted loop playsInline preload="auto"
            onCanPlayThrough={() => setVideoState((s) => (s === "loading" ? "ready" : s))}
            onPlaying={() => setVideoState((s) => (s === "loading" ? "ready" : s))}
            onError={() => setVideoState("failed")}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
              opacity: videoState === "ready" ? 1 : 0, transition: "opacity 1s ease",
            }}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}

        {/* veil for legibility (top for eyebrow, bottom for headline) */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,52,.42) 0%, rgba(8,18,52,.12) 28%, rgba(8,18,52,.30) 66%, rgba(16,44,118,.62) 100%)" }} />

        {/* eyebrow top */}
        <div style={{ position: "absolute", top: "clamp(1.4rem,4vw,2.4rem)", left: 0, right: 0, textAlign: "center", ...reveal(0.1), fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.9)" }}>
          Packaging machinery manufacturer · Ahmedabad
        </div>

        {/* giant headline + CTAs anchored at the bottom */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: "clamp(3.6rem,7vw,5rem)", padding: `0 ${PAD}`, ...reveal(0.3) }}>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,10vw,8.5rem)", lineHeight: 0.93, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>
            PACKAGING, ENGINEERED.
          </TextEffect>
          <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontWeight: 400, fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.6, color: "rgba(255,255,255,.92)", maxWidth: "42rem", margin: "clamp(1rem,2.2vw,1.5rem) 0 0" }}>
            Packaging machines and inspection systems for FMCG and pharmaceutical lines —
            HFFS pouch packing, pick fill seal, liquid filling and stick packing, manufactured
            and serviced from Ahmedabad.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "clamp(1.4rem,3vw,2.2rem)" }}>
            <Pill filled wide href="/solutions">View solutions</Pill>
            <Pill light wide href="/contact">Contact us</Pill>
          </div>
        </div>

        {/* Palladio-style bottom strip */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, borderTop: "1px solid rgba(255,255,255,.3)", padding: `0.85rem ${PAD}`, display: "flex", alignItems: "center", justifyContent: "space-between", color: "rgba(255,255,255,.85)", fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          <span className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            WE BUILD <span style={{ width: "26px", height: "1px", background: "rgba(255,255,255,.5)" }} /> THE LINE
          </span>
          <span>↓ Scroll down</span>
          <span className="hide-mobile">Packaging &amp; Inspection</span>
        </div>
      </section>

      {/* ── [01] DATA ── */}
      <section id="data" style={{ background: BRAND_GRADIENT, padding: `clamp(4rem,8vw,7rem) ${PAD}`, color: "#fff" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <Eyebrow label="Data" num="01" color="#fff" />
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "clamp(2rem,6vw,5rem)", alignItems: "start", marginBottom: "clamp(3rem,7vw,5rem)" }} className="data-grid">
            <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2rem,4.6vw,3.7rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>
              Two generations of packaging expertise, bringing precision European technology to Indian production floors.
            </ScrollText>
            <div>
              <ScrollRise delay={0.15}>
                <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(255,255,255,.82)", margin: "0 0 2rem" }}>
                  Vedvik Machinery is a manufacturer and supplier of packaging machines and
                  inspection systems based in Ahmedabad, Gujarat. We manufacture pick fill seal
                  (PFS), secondary automation and film processing machines in-house, and supply
                  HFFS pouch packing, liquid filling, stick packing, bulk bagging, checkweighing
                  and X-ray inspection systems to manufacturers across India — every machine
                  installed, commissioned and serviced by our own engineers from Ahmedabad.
                </p>
                <Pill light href="/about">About us</Pill>
              </ScrollRise>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "clamp(1.6rem,3vw,3rem)" }}>
            {stats.map((s, i) => <Stat key={s.label} {...s} run={statsIn} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── Industries we serve (own strip, above Packaging) ── */}
      <section style={{ background: "#fff", padding: `clamp(2.4rem,5vw,3.4rem) 0`, borderBottom: "1px solid rgba(2,0,98,.07)" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto", padding: `0 ${PAD}`, marginBottom: "1.4rem" }}>
          <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(1.6rem,4vw,2.6rem)", letterSpacing: "-0.01em", color: NAVY, margin: 0 }}>
            Industries we serve
          </ScrollText>
        </div>
        <div className="marquee-wrap" style={{ overflow: "hidden" }}>
          <div className="marquee" style={{ paddingLeft: "0.8rem" }}>
            {[...industryPages, ...industryPages].map((ind, i) => (
              <a key={i} className="chip" href={`/industries/${ind.slug}`}>{ind.name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── [02] PACKAGING ── */}
      <section id="packaging" style={{ background: "#fff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <Eyebrow label="Packaging Machines" num="02" color={NAVY} />
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "clamp(2rem,6vw,5rem)", alignItems: "end", marginBottom: "clamp(2.6rem,5vw,3.6rem)" }} className="data-grid">
            <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2.1rem,5vw,4rem)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: NAVY, maxWidth: "13ch" }}>
              Every product has its line.
            </ScrollText>
            <ScrollRise delay={0.15}>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(14,23,80,.62)", margin: 0 }}>
                From pouches and bottles to bulk sacks, our range of packaging machines spans
                HFFS pouch packing, pick fill seal, liquid filling, stick packing and bulk
                bagging — built in-house or sourced from specialist international manufacturers
                chosen for engineering quality, and matched to your product, speed and format.
              </p>
            </ScrollRise>
          </div>
          <div ref={packRef} className="pack-grid">
            {packaging.map((m, i) => (
              <div key={m.name} style={cardRise(packIn, i)}><PackagingCard {...m} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [03] INSPECTION (compact cards) ── */}
      <section id="inspection" style={{ background: "#f5f8ff", padding: `clamp(4rem,8vw,7rem) ${PAD}` }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <Eyebrow label="Inspection Systems" num="03" color={NAVY} />
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "clamp(2rem,6vw,5rem)", alignItems: "end", marginBottom: "clamp(2.6rem,5vw,3.6rem)" }} className="data-grid">
            <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2.1rem,5vw,4rem)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: 0, color: NAVY, maxWidth: "13ch" }}>
              Precision you can verify.
            </ScrollText>
            <ScrollRise delay={0.15}>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(14,23,80,.62)", margin: 0 }}>
                Every pack checked, weighed, coded and cleared — protecting product
                integrity and keeping your line compliant at full speed.
              </p>
            </ScrollRise>
          </div>
          <div ref={inspRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "1.2rem" }}>
            {inspection.map((m, i) => (
              <div key={m.name} style={cardRise(inspIn, i)}><InspectionCard {...m} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (separate from footer) ── */}
      <section id="contact" style={{ background: BRAND_GRADIENT, padding: `clamp(5rem,10vw,8rem) ${PAD}`, textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(2.2rem,6vw,4.6rem)", letterSpacing: "-0.03em", margin: "0 auto 1.6rem", maxWidth: "20rem", lineHeight: 1.02, color: "#fff", textAlign: "center" }}>
            {"Let's talk"}
          </ScrollText>
          <ScrollRise delay={0.15}>
            <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "1.08rem", lineHeight: 1.6, color: "rgba(255,255,255,.88)", maxWidth: "34rem", margin: "0 auto 2.6rem" }}>
              Tell us your product, output speed and pack format — our team will
              suggest the right system and arrange a demonstration.
            </p>
          </ScrollRise>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-white" style={{ minWidth: "190px" }}>Talk to our team</a>
            <a href="/solutions" className="btn btn-ghost-light" style={{ minWidth: "190px" }}>Browse solutions</a>
          </div>
        </div>
      </section>

      {/* ── Trust signals ── */}
      <section style={{ background: "#f5f8ff", padding: `clamp(3rem,6vw,4.5rem) ${PAD}`, borderTop: "1px solid rgba(2,0,98,.06)" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "clamp(1.4rem,3vw,2.5rem)" }}>
            {[
              ["28+ years", "of hands-on experience specifying and servicing packaging lines across India."],
              ["Made in Ahmedabad", "Pick fill seal, secondary automation and film processing machines built in our own facility."],
              ["CE, OIML & FDA-compliant", "Inspection systems certified to OIML/CE and FDA 21 CFR for regulated production."],
              ["Local service, 2 offices", "Installation, commissioning and spares handled by our own engineers from Ahmedabad and Pune."],
            ].map(([title, body], i) => (
              <ScrollRise key={title} delay={i * 0.1}>
                <div style={{ borderTop: `2px solid ${BLUE}`, paddingTop: "1.1rem" }}>
                  <div style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "1rem", color: NAVY, marginBottom: "0.5rem" }}>{title}</div>
                  <div style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "0.88rem", lineHeight: 1.6, color: "rgba(14,23,80,.66)" }}>{body}</div>
                </div>
              </ScrollRise>
            ))}
          </div>
        </div>
      </section>

      {/* ── International partners ribbon ── */}
      <section style={{ background: "#fff", padding: `clamp(3.5rem,7vw,5.5rem) ${PAD}`, borderTop: "1px solid rgba(2,0,98,.06)" }}>
        <div style={{ maxWidth: MAXW, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "0.8rem" }}>
            Our international partners
          </div>
          <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(1.6rem,4vw,2.6rem)", letterSpacing: "-0.02em", color: NAVY, margin: "0 0 clamp(2rem,4vw,3rem)", textAlign: "center" }}>
            European technology, represented in India.
          </ScrollText>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {partners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "150px", height: "76px", borderRadius: "12px", border: "1px solid rgba(2,0,98,.1)", background: "#fff", overflow: "hidden", transition: "transform .9s cubic-bezier(.2,.7,.2,1), box-shadow 1s ease, border-color 1s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 34px rgba(2,0,98,.12)"; e.currentTarget.style.borderColor = "rgba(57,105,196,.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(2,0,98,.1)"; }}>
                <span style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.02em", color: NAVY, textTransform: "uppercase" }}>{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,8vw,7rem) ${PAD}`, borderTop: "1px solid rgba(2,0,98,.06)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "0.8rem", textAlign: "center" }}>FAQ</div>
          <ScrollText style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 300, fontSize: "clamp(1.8rem,4.5vw,3rem)", letterSpacing: "-0.02em", color: NAVY, margin: "0 0 clamp(2rem,4vw,3rem)", textAlign: "center" }}>
            Packaging machines — common questions
          </ScrollText>
          <div>
            {faqs.map((f, i) => (
              <ScrollRise key={i}>
                <div style={{ borderTop: "1px solid rgba(2,0,98,.1)", padding: "1.5rem 0" }}>
                  <h3 style={{ fontFamily: "var(--font-montserrat, 'Montserrat'), sans-serif", fontWeight: 600, fontSize: "1.15rem", color: NAVY, margin: "0 0 0.6rem" }}>{f.q}</h3>
                  <p style={{ fontFamily: "var(--font-inter, 'Inter'), sans-serif", fontSize: "1rem", lineHeight: 1.65, color: "rgba(14,23,80,.7)", margin: 0 }}>{f.a}</p>
                </div>
              </ScrollRise>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter settings={settings} />
    </div>
  );
}
