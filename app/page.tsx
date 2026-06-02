import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vedvik Machinery – Packaging Machinery Manufacturer & Supplier in India",
  description: "Advanced packaging and inspection systems engineered for efficient FMCG and pharmaceutical applications.",
};

const HERO_IMAGE = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png";
const LOGO = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png";

interface Machine { title: string; description: string; image: string; }
interface InspectionSystem { title: string; description: string; icon: string; }

const machineSlugMap: Record<string, string> = {
  "Comipack": "Comipack",
  "Boato Pack": "Boato-Pack",
  "GMS": "GMS",
  "Kraus": "Kraus",
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
  { title: "Comipack", description: "High-speed packaging systems engineered for precision and reliability across FMCG and pharma applications.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780314168/ChatGPT_Image_Jun_1_2026_05_12_27_PM_tpx536.png" },
  { title: "Boato Pack", description: "Advanced packaging solutions for demanding production environments with high throughput requirements.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png" },
  { title: "GMS", description: "Versatile range of feeding systems.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312482/ChatGPT_Image_Jun_1_2026_04_44_32_PM_njslyg.png" },
  { title: "Kraus", description: "Product handling automation systems.", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png" },
  { title: "Liquid Filling", description: "Rotary filling lines from 50 ml to 50 L — servo and gravity fill, CIP/SIP ready for food and pharma. By Filtec, South Africa.", image: HERO_IMAGE },
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

function MachineCard({ machine }: { machine: Machine }) {
  const slug = machineSlugMap[machine.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-slate-100 overflow-hidden mb-2">
        <img alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={machine.image} />
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#020062]">{machine.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{machine.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#020062] text-[10px] font-black uppercase tracking-tighter">
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
        <span className="material-symbols-outlined text-2xl text-[#020062]">{system.icon}</span>
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#020062]">{system.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{system.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#020062] text-[10px] font-black uppercase tracking-tighter">
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
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col pt-16">
          <div className="absolute inset-0 z-0">
            <img alt="Background Machine" className="w-full h-full object-cover brightness-[0.4]" src={HERO_IMAGE} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex-grow flex items-center py-8">
            <div className="max-w-2xl text-white">
              <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Precision Engineering
              </div>
              <div className="mb-8">
                <img src={LOGO} alt="Vedvik Machinery" className="h-28 md:h-40 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <p className="text-slate-300 text-base md:text-lg max-w-md leading-relaxed mb-8">
                Advanced packaging and inspection systems engineered for efficient FMCG and pharmaceutical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/solutions" className="bg-[#020062] text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-colors shadow-xl text-center">View Solutions</a>
                <a href="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors text-center">Request a Quote</a>
              </div>
            </div>
          </div>

          {/* Industries banner */}
          <div className="relative z-10 w-full bg-black/50 backdrop-blur-sm border-t border-white/10">
            {/* Label row */}
            <div className="max-w-7xl mx-auto px-8 pt-4 pb-2">
              <p className="text-white font-['Montserrat'] font-black text-sm uppercase tracking-[0.25em]">
                Industries We Serve
              </p>
            </div>
            {/* Scrolling ticker */}
            <div className="overflow-hidden pb-4">
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
              `}</style>
              <div className="ticker-track">
                {[...industries, ...industries].map((industry, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-10 border-r border-white/20 h-12"
                    style={{ minWidth: "200px" }}
                  >
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
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#020062] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 01</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#020062] mt-2">PACKAGING MACHINES</h2>
              </div>
              <a className="text-xs font-bold text-[#020062] uppercase tracking-widest border-b border-[#020062] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={packagingMachines} renderCard={(machine) => <MachineCard machine={machine} />} />
          </div>
        </section>

        {/* Inspection Systems */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[#020062] font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 02</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#020062] mt-2">INSPECTION SYSTEMS</h2>
              </div>
              <a className="text-xs font-bold text-[#020062] uppercase tracking-widest border-b border-[#020062] pb-1 hover:opacity-70 transition-opacity" href="/solutions">All Systems</a>
            </div>
            <ThreeTwoGrid items={inspectionSystems} renderCard={(system) => <InspectionCard system={system} />} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#020062] text-white">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-['Montserrat'] font-black text-3xl md:text-5xl mb-4">HAVE A PACKAGING REQUIREMENT?</h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">Tell us your product, output speed, and pack format — our team will suggest the right system and arrange a demonstration.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="/contact" className="bg-white text-[#020062] px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-colors text-center">Talk to Our Team</a>
              <a href="/solutions" className="border border-white/30 text-white px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center">Browse Solutions</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
