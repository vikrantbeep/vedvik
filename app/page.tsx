import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import HeroCarousel from "./components/HeroCarousel";

export const metadata: Metadata = {
  title: { absolute: "Vedvik Machinery – Packaging & Inspection Machinery" },
  description: "Packaging machinery manufacturer in Ahmedabad, India. HFFS pouch packing, liquid filling, checkweighers, X-ray & vision inspection. Official representative of Effytec, Varpe, Filtec & more.",
  alternates: { canonical: "/" },
};

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

// slugs must match the keys in app/industries/[slug]/page.tsx
const industries = [
  { label: "Juices & Beverages", icon: "water_drop", slug: "beverages" },
  { label: "Bakery & Snacks", icon: "bakery_dining", slug: "bakery" },
  { label: "Pet Food", icon: "pets", slug: "pet-food" },
  { label: "Pharmaceuticals", icon: "medication", slug: "pharmaceuticals" },
  { label: "Edible Oils", icon: "oil_barrel", slug: "edible-oils" },
  { label: "Dairy", icon: "egg", slug: "dairy" },
  { label: "Agrochemicals", icon: "agriculture", slug: "agrochemicals" },
  { label: "Personal Care", icon: "soap", slug: "personal-care" },
  { label: "Detergents", icon: "cleaning_services", slug: "detergents" },
  { label: "Spices & Powders", icon: "set_meal", slug: "spices-powders" },
  { label: "Chemicals", icon: "science", slug: "chemicals" },
  { label: "Nutraceuticals", icon: "nutrition", slug: "nutraceuticals" },
  { label: "Coffee & Tea", icon: "local_cafe", slug: "coffee-tea" },
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
    <Link href={`/solutions/${slug}`} className="scroll-fade v-card group flex flex-col overflow-hidden" style={{ transitionDelay: "0ms", animationDelay: `${(index % 3) * 100}ms` }} data-delay={(index % 3) * 100}>
      <div className="aspect-video bg-slate-50 overflow-hidden">
        <img alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={machine.image} />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-grow">
        <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">Packaging</span>
        <h3 className="text-lg font-semibold text-slate-800">{machine.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{machine.description}</p>
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-[#0C4CA2] text-sm font-medium">
          Learn More <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}

function InspectionCard({ system, index }: { system: InspectionSystem; index: number }) {
  const slug = inspectionSlugMap[system.title] ?? "";
  return (
    <Link href={`/solutions/${slug}`} className="scroll-fade v-card group flex flex-col p-6 gap-3" data-delay={(index % 3) * 100}>
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-1 group-hover:bg-[#0C4CA2] transition-colors duration-300">
        <span className="material-symbols-outlined text-2xl text-[#0C4CA2] group-hover:text-white transition-colors duration-300">{system.icon}</span>
      </div>
      <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">Inspection & Support</span>
      <h3 className="text-lg font-semibold text-slate-800">{system.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{system.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-1.5 text-[#0C4CA2] text-sm font-medium">
        Learn More <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </div>
    </Link>
  );
}

function ThreeTwoGrid<T>({ items, renderCard }: { items: T[]; renderCard: (item: T, index: number) => React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => <div key={i} className="flex">{renderCard(item, i)}</div>)}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollReveal />
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
          .hero-gradient {
            background:
              radial-gradient(ellipse 80% 60% at 0% 0%, rgba(12,76,162,0.04), transparent 60%),
              radial-gradient(circle, #e2e8f0 1px, transparent 1px);
            background-size: auto, 24px 24px;
          }
          .hero-in-1 { animation: vFadeInUp .6s ease-out both; }
          .hero-in-2 { animation: vFadeInUp .6s ease-out both; animation-delay: .2s; }
          .hero-in-3 { animation: vFadeInUp .6s ease-out both; animation-delay: .4s; }
          .hero-in-4 { animation: vFadeInUp .6s ease-out both; animation-delay: .6s; }
        `}</style>

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">

          {/* Background image + dark overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png"
              alt=""
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-slate-900/72" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex-grow flex items-center py-20">
            <div className="max-w-4xl">
              <h1 className="hero-in-1 text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6">
                Advanced packaging and inspection systems engineered for{" "}
                <span className="text-blue-300">efficiency</span> and{" "}
                <span className="text-blue-300">reliability.</span>
              </h1>
              <p className="hero-in-2 text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
                Advanced packaging and inspection systems for FMCG and pharmaceutical lines — built with precision, backed by local support.
              </p>
              <div className="hero-in-3 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0C4CA2] text-white text-base font-semibold rounded-md hover:bg-[#0a3d87] transition-colors min-w-[180px]"
                >
                  View Solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-base font-semibold rounded-md hover:bg-white hover:text-slate-900 transition-colors min-w-[180px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Industries ticker */}
          <div className="relative z-10 w-full bg-black/40 backdrop-blur-sm border-t border-white/15">
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-3 pb-2">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">Industries We Serve</p>
            </div>
            <div className="overflow-hidden pb-3 md:pb-4">
              <div className="ticker-track">
                {[...industries, ...industries].map((industry, i) => (
                  <Link
                    key={i}
                    href={`/industries/${industry.slug}`}
                    className="flex items-center gap-2 md:gap-3 px-6 md:px-10 border-r border-white/15 h-10 md:h-12 cursor-pointer hover:opacity-70 transition-opacity duration-150"
                    style={{ minWidth: "160px" }}
                  >
                    <span className="material-symbols-outlined text-white/40 text-sm md:text-base flex-shrink-0">{industry.icon}</span>
                    <span className="text-white/65 text-[10px] md:text-[11px] font-medium uppercase tracking-widest whitespace-nowrap">{industry.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Packaging Machines ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-end justify-between mb-10">
              <div className="scroll-fade">
                <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">Division 01</span>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mt-2">Packaging Machines</h2>
              </div>
              <Link className="scroll-fade v-link text-sm font-medium text-slate-600" href="/solutions">All Systems →</Link>
            </div>
            <ThreeTwoGrid items={packagingMachines} renderCard={(machine, i) => <MachineCard machine={machine} index={i} />} />
          </div>
        </section>

        {/* ── Inspection Systems ── */}
        <section className="py-20 v-tint">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-end justify-between mb-10">
              <div className="scroll-fade">
                <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">Division 02</span>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mt-2">Inspection Systems</h2>
              </div>
              <Link className="scroll-fade v-link text-sm font-medium text-slate-600" href="/solutions">All Systems →</Link>
            </div>
            <ThreeTwoGrid items={inspectionSystems} renderCard={(system, i) => <InspectionCard system={system} index={i} />} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#0C4CA2] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="scroll-fade text-3xl md:text-4xl font-bold tracking-tight mb-4">Have a packaging requirement?</h2>
            <p className="scroll-fade text-blue-100 text-lg max-w-xl mx-auto mb-10" data-delay={100}>
              Tell us your product, output speed, and pack format — our team will suggest the right system and arrange a demonstration.
            </p>
            <div className="scroll-fade flex flex-col sm:flex-row justify-center gap-4" data-delay={200}>
              <Link href="/contact" className="v-btn-primary !bg-white !text-[#0C4CA2] hover:!bg-slate-100">Talk to Our Team</Link>
              <Link href="/solutions" className="v-btn-secondary !border-white/40 !text-white hover:!bg-white/10">Browse Solutions</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
