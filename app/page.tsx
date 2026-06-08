import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
  description: "Advanced packaging and inspection systems engineered for efficient FMCG and pharmaceutical applications.",
};

const HERO_IMAGE = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780753138/ChatGPT_Image_Jun_6_2026_06_55_05_PM_kavigy.png";

interface Machine { title: string; description: string; image: string; }
interface InspectionSystem { title: string; description: string; icon: string; }

const machineSlugMap: Record<string, string> = {
  "Twist Tying": "Comipack",
  "Stick Packing": "Boato-Pack",
  "Feeding Systems": "GMS",
  "Product Handling": "Kraus",
  "Liquid Filling": "Liquid-Filling",
  "Pouch Packing": "HFFS",
  "Pick Fill Seal": "PFS",
  "Bulk Packing": "Bulk-Packing",
  "Secondary Packaging": "Secondary-Automation",
};
const inspectionSlugMap: Record<string, string> = {
  "Inspection Machines": "Inspection",
  "Checkweighers": "Checkweighers",
  "X-Ray and Metal Detectors": "xray-metal-detector",
  "Printer and Coder": "Printing",
  "Slitting, Printing and Lamination": "roller-unwinders",
};

const industries = [
  { label: "Juices & Beverages", icon: "water_drop" },
  { label: "Bakery & Snacks", icon: "bakery_dining" },
  { label: "Pet Food", icon: "pets" },
  { label: "Pharmaceuticals", icon: "medication" },
  { label: "Edible Oils", icon: "oil_barrel" },
  { label: "Dairy", icon: "egg" },
  { label: "Agrochemicals", icon: "agriculture" },
  { label: "Personal Care", icon: "soap" },
  { label: "Detergents", icon: "cleaning_services" },
  { label: "Spices & Powders", icon: "set_meal" },
];

const packagingMachines: Machine[] = [
  { title: "Twist Tying", description: "Twist tying packaging systems engineered for precision and reliability across FMCG and pharma applications requirements.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780376386/Screenshot_2026-06-02_at_10.29.18_AM_j5z9jz.png" },
  { title: "Stick Packing", description: "Advanced packaging solutions for high production environments for stick and sachet packing.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png" },
  { title: "Feeding Systems", description: "Versatile range of feeding systems for pumps, triggers, spouts, spray heads, roll-ons and similar applications.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312482/ChatGPT_Image_Jun_1_2026_04_44_32_PM_njslyg.png" },
  { title: "Product Handling", description: "Product handling and automation systems applications from friction feeding to leaflet insertion systems.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png" },
  { title: "Liquid Filling", description: "Rotary filling lines from 50 ml to 50 L — servo and gravity fill, CIP/SIP ready for food and pharma. By Filtec, South Africa.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png" },
  { title: "Pouch Packing", description: "High-speed pouch packing with Effytec HB Series — up to 320 PPM for shaped, spouted and ziplock pouches. By Effytec, Spain.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png" },
  { title: "Pick Fill Seal", description: "Cam-driven PFS systems for doy pouches and ziplock bags — 50 g to 1 kg fill, up to 60 cycles/min. Engineered by Vedvik.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png" },
  { title: "Bulk Packing", description: "Heavy-duty bag packing in HFFS/VFFS format for 5–50 kg applications. Heat seal or stitch seal. By MF Tecno, Italy.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png" },
  { title: "Secondary Packaging", description: "Cartoning, case packing, shrink wrapping, pick-and-place systems and palletising — designed to integrate with any primary line.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png" },
];

const inspectionSystems: InspectionSystem[] = [
  { title: "Inspection Machines", description: "Automated camera-based inspection for cap defects, label placement, fill level and seal integrity — up to 1,200 units/min. By E2M Couth, Spain.", icon: "search" },
  { title: "Checkweighers", description: "Dynamic inline checkweighing from 5 g to 15 kg — up to 300 packs/min with automatic reject. OIML/CE certified. By Varpe, Spain.", icon: "scale" },
  { title: "X-Ray and Metal Detectors", description: "X-ray inspection for foreign bodies, voids and underfill — combined with metal detection (Fe, Non-Fe, SS). CE/FDA 21 CFR certified. By Varpe, Spain.", icon: "visibility" },
  { title: "Printer and Coder", description: "TIJ, CIJ and laser coders for batch codes, MRP dates and barcodes — Industry 4.0 and MQTT enabled. By MapleJet, Canada.", icon: "sensors" },
  { title: "Slitting, Printing and Lamination", description: "Complete converting solutions for cutting, printing and bonding flexible packaging materials to create finished packaging films.", icon: "rotate_right" },
];

function MachineCard({ machine, index }: { machine: Machine; index: number }) {
  const slug = machineSlugMap[machine.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="scroll-fade group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="aspect-video bg-slate-100 overflow-hidden mb-2">
        <img alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={machine.image} />
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#0C4CA2]">{machine.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{machine.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#0C4CA2] text-[10px] font-black uppercase tracking-tighter">
        Specifications <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </div>
    </Link>
  );
}

function InspectionCard({ system, index }: { system: InspectionSystem; index: number }) {
  const slug = inspectionSlugMap[system.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="scroll-fade group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-[#0C4CA2] transition-colors duration-300">
        <span className="material-symbols-outlined text-2xl text-[#0C4CA2] group-hover:text-white transition-colors duration-300">{system.icon}</span>
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#0C4CA2]">{system.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{system.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#0C4CA2] text-[10px] font-black uppercase tracking-tighter">
        Details <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </div>
    </Link>
  );
}

function ThreeTwoGrid<T>({ items, renderCard }: { items: T[]; renderCard: (item: T, index: number) => React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => <div key={i}>{renderCard(item, i)}</div>)}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <style>{`
          /* ── Keyframes ── */
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.96); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes barGrow {
            from { width: 0; }
            to   { width: 3rem; }
          }

          /* ── Hero entrance ── */
          .hero-badge   { animation: fadeIn  0.6s ease both; animation-delay: 0.1s; }
          .hero-heading { animation: fadeUp  0.8s ease both; animation-delay: 0.25s; }
          .hero-bar     { animation: barGrow 0.6s ease both; animation-delay: 0.9s; }
          .hero-sub     { animation: fadeUp  0.7s ease both; animation-delay: 1.0s; }
          .hero-cta     { animation: fadeUp  0.7s ease both; animation-delay: 1.15s; }
          .hero-img     { animation: scaleIn 1.2s ease both; animation-delay: 0s; }

          /* ── Scroll-reveal ── */
          .scroll-fade {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.55s ease, transform 0.55s ease;
          }
          .scroll-fade.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .scroll-slide-left {
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.55s ease, transform 0.55s ease;
          }
          .scroll-slide-left.visible {
            opacity: 1;
            transform: translateX(0);
          }

          /* ── Ticker ── */
          .ticker-track {
            display: flex;
            width: max-content;
            animation: ticker 22s linear infinite;
          }

          /* ── Buttons ── */
          .btn-primary {
            display: inline-block;
            background: #0C4CA2;
            color: white;
            padding: 1rem 2.5rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.15s ease;
            box-shadow: 0 4px 14px rgba(12,76,162,0.25);
          }
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(12,76,162,0.35);
          }
          .btn-primary:active {
            background: #7eb2f1;
            transform: translateY(0px);
            box-shadow: 0 2px 8px rgba(12,76,162,0.15);
          }
          .btn-outline {
            display: inline-block;
            background: transparent;
            color: #0C4CA2;
            border: 1.5px solid #0C4CA2;
            padding: 1rem 2.5rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.15s ease;
          }
          .btn-outline:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(12,76,162,0.15);
          }
          .btn-outline:active {
            background: #e8e8e8;
            transform: translateY(0px);
            box-shadow: none;
          }
          .btn-white {
            display: inline-block;
            background: white;
            color: #0C4CA2;
            padding: 1rem 3rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.15s ease;
            box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          }
          .btn-white:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .btn-white:active {
            background: #e8e8e8;
            transform: translateY(0px);
            box-shadow: none;
          }
          .btn-ghost {
            display: inline-block;
            background: transparent;
            color: white;
            border: 1.5px solid rgba(255,255,255,0.3);
            padding: 1rem 3rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.15s ease;
          }
          .btn-ghost:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255,255,255,0.1);
          }
          .btn-ghost:active {
            background: #7eb2f1;
            border-color: #7eb2f1;
            transform: translateY(0px);
            box-shadow: none;
          }

          /* ── CTA section subtle pulse on the heading ── */
          @keyframes softPulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.85; }
          }
          .cta-heading-animate {
            animation: softPulse 4s ease-in-out infinite;
          }
        `}</style>

        {/* Scroll observer script */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function init() {
              var els = document.querySelectorAll('.scroll-fade, .scroll-slide-left');
              if (!els.length) return;
              var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                  if (e.isIntersecting) {
                    var delay = e.target.style.animationDelay || '0ms';
                    var ms = parseFloat(delay) || 0;
                    setTimeout(function() { e.target.classList.add('visible'); }, ms);
                    io.unobserve(e.target);
                  }
                });
              }, { threshold: 0.12 });
              els.forEach(function(el) { io.observe(el); });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              init();
            }
          })();
        `}} />

        {/* Hero */}
        <section className="relative min-h-[100svh] md:min-h-[60vh] flex flex-col pt-16">
          <div className="absolute inset-0 z-0 hero-img">
            <img alt="Background Machine" className="w-full h-full object-cover object-center" src={HERO_IMAGE} />
            <div className="absolute inset-0 bg-white/40 md:bg-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full flex-grow flex items-center py-10 md:py-8">
            <div className="max-w-2xl w-full">
              <div className="hero-badge inline-block px-3 py-1 border border-slate-400 text-slate-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">
                Precision Engineering
              </div>
              <h1 className="hero-heading font-['Montserrat'] font-black text-3xl md:text-5xl leading-tight text-slate-900 mb-4">
                Advanced packaging<br />
                and inspection systems<br />
                engineered for <span className="text-[#0C4CA2]">efficiency</span><br />
                and <span className="text-[#0C4CA2]">reliability.</span>
              </h1>
              <div className="hero-bar w-12 h-[3px] bg-[#0C4CA2] my-5 md:my-6" />
              <p className="hero-sub text-slate-600 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                Tailored solutions for FMCG and pharmaceutical
                applications. Built with precision. Backed by experience.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="/solutions" className="btn-primary text-center">View Solutions</a>
                <a href="/contact" className="btn-outline text-center">Request a Quote</a>
              </div>
            </div>
          </div>
          <div className="relative z-10 w-full bg-black/60 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-5 md:px-8 pt-3 pb-2">
              <p className="text-white font-['Montserrat'] font-black text-xs md:text-sm uppercase tracking-[0.25em]">Industries We Serve</p>
            </div>
            <div className="overflow-hidden pb-3 md:pb-4">
              <div className="ticker-track">
                {[...industries, ...industries].map((industry, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 px-6 md:px-10 border-r border-white/20 h-10 md:h-12" style={{ minWidth: "160px" }}>
                    <span className="material-symbols-outlined text-white/70 text-sm md:text-base flex-shrink-0">{industry.icon}</span>
                    <span className="text-white/90 text-[10px] md:text-[11px] font-bold uppercase tracking-widest whitespace-nowrap font-['Montserrat']">{industry.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packaging Machines */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex items-end justify-between mb-8">
              <div className="scroll-slide-left">
                <span className="text-[#0C4CA2] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 01</span>
                <h2 className="font-['Montserrat'] font-black text-2xl md:text-3xl text-[#0C4CA2] mt-2">PACKAGING MACHINES</h2>
              </div>
              <a className="scroll-fade text-xs font-bold text-[#0C4CA2] uppercase tracking-widest border-b border-[#0C4CA2] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={packagingMachines} renderCard={(machine, i) => <MachineCard machine={machine} index={i} />} />
          </div>
        </section>

        {/* Inspection Systems */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex items-end justify-between mb-8">
              <div className="scroll-slide-left">
                <span className="text-[#0C4CA2] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 02</span>
                <h2 className="font-['Montserrat'] font-black text-2xl md:text-3xl text-[#0C4CA2] mt-2">INSPECTION SYSTEMS</h2>
              </div>
              <a className="scroll-fade text-xs font-bold text-[#0C4CA2] uppercase tracking-widest border-b border-[#0C4CA2] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={inspectionSystems} renderCard={(system, i) => <InspectionCard system={system} index={i} />} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C4CA2] text-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
            <h2 className="scroll-fade cta-heading-animate font-['Montserrat'] font-black text-2xl md:text-5xl mb-4">HAVE A PACKAGING REQUIREMENT?</h2>
            <p className="scroll-fade text-blue-100 text-base md:text-lg max-w-xl mx-auto mb-8" style={{ animationDelay: "100ms" }}>Tell us your product, output speed, and pack format — our team will suggest the right system and arrange a demonstration.</p>
            <div className="scroll-fade flex flex-col md:flex-row justify-center gap-4 md:gap-6" style={{ animationDelay: "200ms" }}>
              <a href="/contact" className="btn-white">Talk to Our Team</a>
              <a href="/solutions" className="btn-ghost">Browse Solutions</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
