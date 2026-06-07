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
  "Roller Unwinders": "roller-unwinders",
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
  { title: "Roller Unwinders", description: "Precision film unwinders with servo tension control and auto-splice — for consistent film feed on high-speed packaging lines.", icon: "rotate_right" },
];

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23c8d4e8' fill-opacity='0.5'/%3E%3C/svg%3E")`;

function MachineCard({ machine }: { machine: Machine }) {
  const slug = machineSlugMap[machine.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-slate-100 overflow-hidden mb-2">
        <img alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={machine.image} />
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#0C4CA2]">{machine.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{machine.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#0C4CA2] text-[10px] font-black uppercase tracking-tighter">
        Specifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </Link>
  );
}

function InspectionCard({ system }: { system: InspectionSystem }) {
  const slug = inspectionSlugMap[system.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-2">
        <span className="material-symbols-outlined text-2xl text-[#0C4CA2]">{system.icon}</span>
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#0C4CA2]">{system.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{system.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#0C4CA2] text-[10px] font-black uppercase tracking-tighter">
        Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </Link>
  );
}

function ThreeTwoGrid<T>({ items, renderCard }: { items: T[]; renderCard: (item: T) => React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => <div key={i}>{renderCard(item)}</div>)}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
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
      `}</style>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col pt-16">
          <div className="absolute inset-0 z-0">
            <img alt="Background Machine" className="w-full h-full object-cover" src={HERO_IMAGE} />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex-grow flex items-center py-8">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 border border-slate-400 text-slate-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                Precision Engineering
              </div>
              <h1 className="font-['Montserrat'] font-black text-4xl md:text-5xl leading-tight text-slate-900 mb-4">
                Advanced packaging<br />
                and inspection systems<br />
                engineered for <span className="text-[#0C4CA2]">efficiency</span><br />
                and <span className="text-[#0C4CA2]">reliability.</span>
              </h1>
              <div className="w-12 h-[3px] bg-[#0C4CA2] my-6" />
              <p className="text-slate-600 text-base leading-relaxed mb-10">
                Tailored solutions for FMCG and pharmaceutical<br />
                applications. Built with precision. Backed by experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/solutions" className="btn-primary">View Solutions</a>
                <a href="/contact" className="btn-outline">Request a Quote</a>
              </div>
            </div>
          </div>

          {/* Industries banner */}
          <div className="relative z-10 w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 pt-4 pb-2">
              <p className="text-white font-['Montserrat'] font-black text-sm uppercase tracking-[0.25em]">
                Industries We Serve
              </p>
            </div>
            <div className="overflow-hidden pb-4">
              <div className="ticker-track">
                {[...industries, ...industries].map((industry, i) => (
                  <div key={i} className="flex items-center gap-3 px-10 border-r border-white/20 h-12" style={{ minWidth: "200px" }}>
                    <span className="material-symbols-outlined text-white/70 text-base flex-shrink-0">{industry.icon}</span>
                    <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap font-['Montserrat']">
                      {industry.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packaging Machines */}
        <section className="py-12 bg-white" style={{ backgroundImage: DOT_PATTERN }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#0C4CA2] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 01</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#0C4CA2] mt-2">PACKAGING MACHINES</h2>
              </div>
              <a className="text-xs font-bold text-[#0C4CA2] uppercase tracking-widest border-b border-[#0C4CA2] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={packagingMachines} renderCard={(machine) => <MachineCard machine={machine} />} />
          </div>
        </section>

        {/* Inspection Systems */}
        <section className="py-12 bg-slate-50" style={{ backgroundImage: DOT_PATTERN }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#0C4CA2] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 02</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#0C4CA2] mt-2">INSPECTION SYSTEMS</h2>
              </div>
              <a className="text-xs font-bold text-[#0C4CA2] uppercase tracking-widest border-b border-[#0C4CA2] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={inspectionSystems} renderCard={(system) => <InspectionCard system={system} />} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0C4CA2] text-white" style={{ backgroundImage: DOT_PATTERN }}>
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-['Montserrat'] font-black text-3xl md:text-5xl mb-4">HAVE A PACKAGING REQUIREMENT?</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">Tell us your product, output speed, and pack format — our team will suggest the right system and arrange a demonstration.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
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
