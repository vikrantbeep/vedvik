"use client";

import React, { useState } from "react";
import { SiteNav, SiteFooter, NAVY, BLUE, SKY, INK_TEXT, PAD, MAXW, BRAND_GRADIENT } from "./SiteChrome";
import { usePageReady } from "./usePageReady";
import { ScrollRise } from "@/components/core/scroll-rise";

const ADDRESS = "9, Siddhi Vinayak Industrial Estate, Bakrol, 382210 - Ahmedabad, Gujarat, India";
const MAPS_QUERY = encodeURIComponent(`Vedvik Machinery, ${ADDRESS}`);
// Opens Google Maps with turn-by-turn directions to the company.
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
import AnimatedGradient from "./AnimatedGradient";
import { TextEffect } from "@/components/core/text-effect";

const inputStyle: React.CSSProperties = {
  width: "100%", boxSizing: "border-box", padding: "0.85rem 1rem", borderRadius: "10px",
  border: "1px solid rgba(2,0,98,.16)", fontFamily: "'Inter',sans-serif", fontSize: "0.95rem",
  color: INK_TEXT, background: "#fff", outline: "none",
};
const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.08em",
  textTransform: "uppercase", color: "rgba(14,23,80,.6)", marginBottom: "0.45rem", display: "block",
};

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ marginBottom: "1.6rem" }}>
      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: SKY, marginBottom: "0.35rem" }}>{label}</div>
      {href ? (
        <a href={href} style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.55, color: "#fff", textDecoration: "none" }}>{value}</a>
      ) : (
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.55, color: "rgba(255,255,255,.92)" }}>{value}</div>
      )}
    </div>
  );
}

// Formspree endpoint — same form ID the previous vedvikmachinery.com site used, so
// enquiries continue arriving in the existing Formspree inbox.
const FORM_ENDPOINT = "https://formspree.io/f/mojrgynq";

export default function Contact() {
  const loaded = usePageReady();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setError(null);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setError(
          data?.errors?.[0]?.message ??
            "Something went wrong sending your enquiry. Please email vikrant@vedvikmachinery.com instead."
        );
      }
    } catch {
      setError(
        "We couldn't reach the server. Please check your connection, or email vikrant@vedvikmachinery.com."
      );
    } finally {
      setSending(false);
    }
  }

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
        .contact-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(1.5rem,4vw,3rem);align-items:start}
        @media (max-width:860px){.contact-grid{grid-template-columns:1fr}}
        @media (max-width:820px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media (max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
        @media (max-width:768px){.hide-mobile{display:none!important}.show-mobile{display:flex!important}}
      `}</style>

      <SiteNav />

      {/* ── HERO ── */}
      <section className="page-hero" style={{ position: "relative", overflow: "hidden", padding: `calc(clamp(3.5rem,8vw,5.5rem) + 68px) ${PAD} clamp(3rem,6vw,4rem)` }}>
        <AnimatedGradient />
        <div style={{ position: "relative", zIndex: 1, maxWidth: MAXW, margin: "0 auto" }}>
          <div style={{ ...reveal(0.05), fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: "0.76rem", letterSpacing: "0.22em", textTransform: "uppercase", color: SKY, marginBottom: "1.4rem" }}>Contact</div>
          <TextEffect as="h1" per="word" preset="fade-in-blur" trigger={loaded} speedReveal={1.1} speedSegment={0.3}
            style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "clamp(2.4rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, color: "#fff" }}>Let&apos;s talk</TextEffect>
          <p style={{ ...reveal(0.28), fontFamily: "'Inter',sans-serif", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,.85)", maxWidth: "44rem", marginTop: "1.6rem" }}>
            Tell us your product, output speed and pack format — our team will recommend the right
            system and arrange a demonstration.
          </p>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section style={{ background: "#fff", padding: `clamp(3rem,7vw,5rem) ${PAD} clamp(4rem,8vw,7rem)` }}>
        <div className="contact-grid" style={{ maxWidth: MAXW, margin: "0 auto" }}>
          {/* Form */}
          <div style={{ ...reveal(0.1), background: "#fff", border: "1px solid rgba(2,0,98,.1)", borderRadius: "18px", padding: "clamp(1.6rem,3vw,2.4rem)", boxShadow: "0 1px 2px rgba(2,0,98,.04)" }}>
            {sent ? (
              <div style={{ padding: "2rem 0", textAlign: "center" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.4rem", color: NAVY, marginBottom: "0.6rem" }}>Thank you.</div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", color: "rgba(14,23,80,.66)", margin: 0 }}>We&apos;ve received your enquiry and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action={FORM_ENDPOINT} method="POST">
                <ScrollRise>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.1rem" }}>
                    <div><label style={labelStyle} htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" style={inputStyle} type="text" required /></div>
                    <div><label style={labelStyle} htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" style={inputStyle} type="text" required /></div>
                  </div>
                </ScrollRise>
                <ScrollRise delay={0.1}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.1rem" }}>
                    <div><label style={labelStyle} htmlFor="email">Email</label><input id="email" name="email" autoComplete="email" style={inputStyle} type="email" required /></div>
                    <div><label style={labelStyle} htmlFor="phone">Phone</label><input id="phone" name="phone" autoComplete="tel" style={inputStyle} type="tel" required /></div>
                  </div>
                </ScrollRise>
                <ScrollRise delay={0.2}>
                  <div style={{ marginBottom: "1.1rem" }}>
                    <label style={labelStyle} htmlFor="requirement">Product / requirement</label>
                    <input id="requirement" name="requirement" style={inputStyle} type="text" placeholder="e.g. spice powder, 50 g sachets, 60 packs/min" required />
                  </div>
                </ScrollRise>
                <ScrollRise delay={0.3}>
                  <div style={{ marginBottom: "1.4rem" }}>
                    <label style={labelStyle} htmlFor="message">Message <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                    <textarea id="message" name="message" style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} />
                  </div>
                </ScrollRise>
                {/* Honeypot — bots fill this, humans never see it. */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }} />
                <input type="hidden" name="_subject" value="New enquiry from vedvikmachinery.com" />
                {error && (
                  <div role="alert" style={{ marginBottom: "1rem", padding: "0.85rem 1rem", borderRadius: "10px", background: "rgba(200,30,30,.07)", border: "1px solid rgba(200,30,30,.25)", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: 1.55, color: "#8a1f1f" }}>
                    {error}
                  </div>
                )}
                <ScrollRise delay={0.4}>
                  <button type="submit" className="btn btn-blue" disabled={sending} style={{ width: "100%", padding: "0.95rem 1rem", opacity: sending ? 0.7 : 1, cursor: sending ? "wait" : "pointer" }}>
                    {sending ? "Sending…" : "Send enquiry"}
                  </button>
                </ScrollRise>
              </form>
            )}
          </div>

          {/* Side panel */}
          <aside style={{ ...reveal(0.2), background: BRAND_GRADIENT, borderRadius: "18px", padding: "clamp(1.8rem,3vw,2.4rem)", color: "#fff" }}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: "1.3rem", marginBottom: "1.6rem" }}>Reach us directly</div>
            <Detail label="Email" value="vikrant@vedvikmachinery.com" href="mailto:vikrant@vedvikmachinery.com" />
            <Detail label="Phone" value="+91 81558 92080" href="tel:+918155892080" />
            <Detail label="Address" value={ADDRESS} />

            {/* Clicking anywhere on the map opens Google Maps with directions to the factory. */}
            <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Vedvik Machinery on Google Maps"
              style={{ position: "relative", display: "block", marginTop: "0.5rem", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,.2)", aspectRatio: "1 / 1" }}>
              <iframe
                title="Vedvik Machinery — 9, Siddhi Vinayak Industrial Estate, Bakrol, Ahmedabad"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "100%", border: 0, display: "block", pointerEvents: "none" }}
              />
              <span style={{ position: "absolute", left: "50%", bottom: "0.8rem", transform: "translateX(-50%)", whiteSpace: "nowrap", background: "rgba(2,0,98,.85)", color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", fontWeight: 600, padding: "0.45rem 1rem", borderRadius: "2rem" }}>
                Tap for directions →
              </span>
            </a>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
