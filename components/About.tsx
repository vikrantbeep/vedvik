"use client";

import React, { useEffect, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { usePageReady } from "./usePageReady";
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";
import { ScrollText } from "@/components/core/scroll-text";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW, BRAND_GRADIENT } from "./SiteChrome";

const vmv = [
  {
    label: "01",
    title: "Vision",
    body: "To make precision packaging and inspection technology — built in-house and by Europe's specialist machine builders — accessible to every Indian manufacturer, from Ahmedabad outward.",
  },
  {
    label: "02",
    title: "Mission",
    body: "To specify, supply, install and service the right line for each customer's product and pack — sized to real throughput, certified where it counts, and kept running by local engineers and spares.",
  },
  {
    label: "03",
    title: "Values",
    body: "More than 28 years of shop-floor experience say the same thing every time: recommend what fits the product, guarantee the accuracy, stand behind the installation, and treat the customer's line as our own.",
  },
];

type City = { label: string; lon: number; lat: number; hq?: boolean };
const cities: City[] = [
  // Partner locations: Barcelona (Effytec, Varpe, E2M Couth, GMS), Bastia Umbra (MF Tecno),
  // Schio (Comipack), Gorizia (Boato Pack), Spaichingen (Kraus), Durban (Filtec),
  // Toronto (MapleJet), plus Vedvik in Ahmedabad (HQ) and Pune.
  { label: "Barcelona", lon: 2.1686, lat: 41.3874 },
  { label: "Bastia Umbra", lon: 12.55, lat: 43.065 },
  { label: "Schio", lon: 11.3559, lat: 45.7114 },
  { label: "Gorizia", lon: 13.6221, lat: 45.9411 },
  { label: "Spaichingen", lon: 8.7372, lat: 48.0751 },
  { label: "Durban", lon: 31.0218, lat: -29.8587 },
  { label: "Toronto", lon: -79.3832, lat: 43.6532 },
  { label: "Ahmedabad", lon: 72.5714, lat: 23.0225, hq: true },
  { label: "Pune", lon: 73.8567, lat: 18.5204 },
];

type Marker = { x: number; y: number; label: string; hq?: boolean };

function WorldMap() {
  const W = 980;
  const H = 500;
  const [landPath, setLandPath] = useState<string>("");
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const topo: any = await res.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const land: any = feature(topo, topo.objects.land);
        const projection = geoNaturalEarth1().fitSize([W, H], land);
        const d = geoPath(projection)(land) || "";
        const pts = cities
          .map((c): Marker | null => {
            const p = projection([c.lon, c.lat]);
            return p ? { x: p[0], y: p[1], label: c.label, hq: c.hq } : null;
          })
          .filter((p): p is Marker => p !== null);
        if (!cancelled) {
          setLandPath(d);
          setMarkers(pts);
        }
      } catch {
        /* map is decorative — fail silently */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }} aria-hidden>
      <path d={landPath} fill="rgba(57,105,196,.10)" stroke="rgba(57,105,196,.20)" strokeWidth={0.4} strokeLinejoin="round" />
      {markers.map((m, i) => (
        <g key={i} className="map-pin">
          <circle cx={m.x} cy={m.y} r={m.hq ? 13 : 9} fill={m.hq ? "rgba(2,0,98,.16)" : "rgba(57,105,196,.16)"} />
          <circle cx={m.x} cy={m.y} r={m.hq ? 5 : 3.6} fill={m.hq ? NAVY : BLUE} stroke="#fff" strokeWidth={1.2} />
        </g>
      ))}
    </svg>
  );
}

export default function About() {
  // ── Entrance animations (match the homepage) ──
  const loaded = usePageReady();
  const [vmvIn, setVmvIn] = useState(false);
  const [numIn, setNumIn] = useState(false);
  const [leadIn, setLeadIn] = useState(false);
  const [mapIn, setMapIn] = useState(false);
  const vmvRef = useRef<HTMLDivElement | null>(null);
  const numRef = useRef<HTMLDivElement | null>(null);
  const leadRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === vmvRef.current) setVmvIn(true);
          if (e.target === numRef.current) setNumIn(true);
          if (e.target === leadRef.current) setLeadIn(true);
          if (e.target === mapRef.current) setMapIn(true);
        });
      },
      { threshold: 0.12 }
    );
    if (vmvRef.current) obs.observe(vmvRef.current);
    if (numRef.current) obs.observe(numRef.current);
    if (leadRef.current) obs.observe(leadRef.current);
    if (mapRef.current) obs.observe(mapRef.current);
    return () => obs.disconnect();
  }, []);

  const reveal = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });
  const rise = (show: boolean, d: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(26px)",
    transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1s cubic-bezier(.2,.7,.2,1) ${d}s`,
  });

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: INK_TEXT, background: "#fff" }}>
      <style>{`
        .nav-link{color:rgba(14,23,80,.7);text-decoration:none;font-size:.85rem;font-weight:500;transition:color .45s;font-family:'Montserrat',sans-serif;letter-spacing:.02em}
        .nav-link:hover{color:${NAVY}}
        .show-mobile{display:none}
        .map-pin{animation:pinPulse 2.6s ease-in-out infinite}
        @keyframes pinPulse{0%,100%{opacity:.85}50%{opacity:1}}
        @media (prefers-reduced-motion: reduce){.map-pin{animation:none}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}.vmv-grid{grid-template-columns:1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}.page-hero{height:auto!important;min-height:0!important;padding:clamp(3rem,13vw,4.5rem) 0!important}.lead-grid{grid-template-columns:1fr!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO (video background) ── */}
      <section className="page-hero" style={{ position: "relative", height: "100svh", minHeight: "560px", overflow: "hidden" }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 2, maxWidth: MAXW, margin: "0 auto", padding: `0 ${PAD}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ ...reveal(0.1), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>
            About Vedvik Machinery
          </div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.6rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff", maxWidth: "20ch" }}>
            Engineered to keep your line running.
          </TextEffect>
          <p style={{ ...reveal(0.42), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>
            Vedvik Machinery is a packaging machinery manufacturer and supplier in Ahmedabad,
            India — delivering packaging machines and inspection systems for food, pharmaceutical
            and FMCG production lines. We manufacture our own systems in-house, supply proven
            European packaging technology across India, and back every installation with prompt
            local service and support.
          </p>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,9vw,7rem) ${PAD}` }}>
        <div ref={vmvRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(vmvIn, 0), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "0.9rem" }}>
            What drives us
          </div>
          <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 clamp(2.5rem,5vw,3.8rem)", color: NAVY, maxWidth: "20ch" }}>
            Built on a simple idea: precision should be local.
          </ScrollText>

          <div className="vmv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "clamp(2rem,4vw,3.5rem)" }}>
            {vmv.map((v, i) => (
              <div
                key={v.title}
                style={{
                  // Premium slide-in: each card glides in from the left in sequence
                  // while its top rule draws itself across.
                  opacity: vmvIn ? 1 : 0,
                  transform: vmvIn ? "translateX(0)" : "translateX(-56px)",
                  transition: `opacity 1.2s cubic-bezier(.2,.7,.2,1) ${0.2 + i * 0.25}s, transform 1.2s cubic-bezier(.2,.7,.2,1) ${0.2 + i * 0.25}s`,
                  position: "relative", paddingTop: "1.4rem",
                }}
              >
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "rgba(57,105,196,.35)", transformOrigin: "left",
                  transform: vmvIn ? "scaleX(1)" : "scaleX(0)",
                  transition: `transform 1.5s cubic-bezier(.2,.7,.2,1) ${0.35 + i * 0.25}s`,
                }} />
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.1em", color: BLUE, marginBottom: "0.8rem" }}>[{v.label}]</div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "clamp(1.5rem,2.5vw,2rem)", margin: "0 0 0.9rem", color: NAVY, letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.98rem", lineHeight: 1.65, color: "rgba(14,23,80,.66)", margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / CREDENTIALS ── */}
      <section style={{ background: BRAND_GRADIENT, color: "#fff", padding: `clamp(4rem,9vw,7rem) ${PAD}` }}>
        <div ref={numRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(numIn, 0), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: SKY, marginBottom: "0.9rem" }}>By the numbers</div>
          <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 clamp(2.5rem,5vw,3.5rem)", maxWidth: "24ch" }}>
            28+ years bringing European packaging technology to India.
          </ScrollText>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "clamp(1.6rem,3vw,3rem)" }}>
            {[
              ["28+", "years of industry experience"],
              ["10", "international brands represented"],
              ["15", "industries served"],
              ["14", "machine & inspection systems"],
            ].map(([num, lbl], i) => (
              <div key={lbl} style={{ ...rise(numIn, 0.2 + i * 0.1), borderTop: "1px solid rgba(255,255,255,.3)", paddingTop: "1.1rem" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.6rem,5.5vw,4rem)", lineHeight: 1, color: "#fff", letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.84rem", lineHeight: 1.45, color: "rgba(255,255,255,.72)", marginTop: "0.7rem", maxWidth: "15rem" }}>{lbl}</div>
              </div>
            ))}
          </div>
          <p style={{ ...rise(numIn, 0.45), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.5vw,1.12rem)", lineHeight: 1.7, color: "rgba(255,255,255,.82)", maxWidth: "54rem", marginTop: "clamp(2.5rem,5vw,3.5rem)" }}>
            Vedvik Machinery manufactures packaging machines in Ahmedabad and supplies European
            packaging and inspection systems across India. From pouch packing and liquid filling
            to checkweighing, X-ray, vision inspection and coding, we supply, install, commission
            and service every machine ourselves — for manufacturers in pharmaceuticals,
            nutraceuticals, food, beverages, dairy, spices, personal care and agrochemicals.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP / EXPERTISE ── */}
      <section style={{ background: "#fff", padding: `clamp(4rem,9vw,7rem) ${PAD}` }}>
        <div ref={leadRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(leadIn, 0), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "0.9rem" }}>
            Our Expertise
          </div>
          <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: NAVY, margin: "0 0 clamp(2rem,4vw,3rem)", maxWidth: "22ch" }}>
            The experience behind every recommendation.
          </ScrollText>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2.2fr) minmax(0,1fr)", gap: "clamp(2rem,5vw,4rem)", alignItems: "start" }} className="lead-grid">
            <div style={rise(leadIn, 0.22)}>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "clamp(1.3rem,2.5vw,1.7rem)", color: NAVY, margin: "0 0 1.3rem" }}>28+ years on the shop floor</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(14,23,80,.78)", margin: "0 0 1.1rem" }}>
                Across more than 28 years, our team has worked hands-on with packaging machines
                and inspection systems — specifying, commissioning and servicing production
                lines for India&apos;s pharmaceutical, food, beverage and FMCG manufacturers.
                That accumulated experience is the reason customers get a configuration matched
                to their product and pack, not a catalogue answer.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: "rgba(14,23,80,.78)", margin: 0 }}>
                All of it is focused on a single aim: high-quality packaging machines backed by
                reliable, prompt service — every machine sized to real throughput, installed
                properly, and kept running with fast local support from our Ahmedabad head
                office and our team in Pune.
              </p>
            </div>
            <div style={{ ...rise(leadIn, 0.34), display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ borderTop: "2px solid rgba(57,105,196,.25)", paddingTop: "1.4rem" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.6rem,5vw,3.8rem)", lineHeight: 1, color: NAVY, letterSpacing: "-0.03em" }}>28+</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.5, color: "rgba(14,23,80,.66)", marginTop: "0.7rem" }}>years of experience in packaging &amp; inspection machinery</div>
              </div>
              <div style={{ borderTop: "2px solid rgba(57,105,196,.25)", paddingTop: "1.4rem" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.6rem,5vw,3.8rem)", lineHeight: 1, color: NAVY, letterSpacing: "-0.03em" }}>2</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.5, color: "rgba(14,23,80,.66)", marginTop: "0.7rem" }}>locations in India — Ahmedabad (head office) and Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH (map) ── */}
      <section style={{ background: "linear-gradient(180deg,#ffffff 0%,#f3f7fe 100%)", padding: `clamp(4rem,9vw,7rem) ${PAD}`, overflow: "hidden" }}>
        <div ref={mapRef} style={{ maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...rise(mapIn, 0), display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "0.9rem" }}>
                Locations
              </div>
              <ScrollText style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: NAVY, maxWidth: "16ch" }}>
                Ten partners. Six countries. One point of contact.
              </ScrollText>
            </div>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "0.74rem", letterSpacing: "0.1em", color: "rgba(2,0,98,.4)" }}>[ 03 ]</span>
          </div>

          <div style={{ ...rise(mapIn, 0.15), position: "relative", margin: "clamp(1rem,3vw,2.5rem) 0" }}>
            <WorldMap />
          </div>

          <div style={{ ...rise(mapIn, 0.25), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "1.2rem 2rem", marginTop: "1rem" }}>
            {[
              ["India", "Ahmedabad (HQ), Pune"],
              ["Spain", "Barcelona"],
              ["Italy", "Bastia Umbra, Schio, Gorizia"],
              ["Germany", "Spaichingen"],
              ["South Africa", "Durban"],
              ["Canada", "Toronto"],
            ].map(([country, list]) => (
              <div key={country}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.82rem", color: NAVY }}>{country}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", lineHeight: 1.55, color: "rgba(14,23,80,.6)", marginTop: "0.25rem" }}>{list}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
