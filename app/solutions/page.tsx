import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Packaging & Inspection Solutions",
  description:
    "Explore Vedvik Machinery's full range: HFFS pouch packers, liquid filling lines, checkweighers, X-ray inspection, vision systems, printers, and more. European technology, Indian support.",
  alternates: { canonical: "/solutions" },
};

type Product = {
  slug: string;
  category: string;
  name: string;
  brand: string;
  origin: string;
  image: string;
  disabled?: boolean;
};

const products: Product[] = [
  { slug: "Comipack", category: "Packaging", name: "Twist Tying", brand: "Comipack", origin: "Italy", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780376386/Screenshot_2026-06-02_at_10.29.18_AM_j5z9jz.png" },
  { slug: "Boato-Pack", category: "Packaging", name: "Stick and Sachet Packing", brand: "Boato Pack", origin: "Italy", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png" },
  { slug: "GMS", category: "Feeding Systems", name: "Feeding Systems", brand: "GMS", origin: "Italy", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312482/ChatGPT_Image_Jun_1_2026_04_44_32_PM_njslyg.png" },
  { slug: "Kraus", category: "Product Handling", name: "Product Handling Systems", brand: "Kraus", origin: "Germany", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png" },
  { slug: "HFFS", category: "Packaging", name: "Horizontal Form Fill Seal", brand: "Effytec", origin: "Spain", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png" },
  { slug: "Liquid-Filling", category: "Packaging", name: "Liquid Filling Lines", brand: "Filtec Automation", origin: "South Africa", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png" },
  { slug: "PFS", category: "Packaging", name: "Pick Fill Seal", brand: "Vedvik Machinery", origin: "India", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png" },
  { slug: "Bulk-Packing", category: "Packaging", name: "Bulk HFFS & VFFS", brand: "MF Tecno", origin: "Italy", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png" },
  { slug: "Secondary-Automation", category: "Packaging", name: "Secondary Automation", brand: "Vedvik Machinery", origin: "India", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png" },
  { slug: "Inspection", category: "Inspection", name: "Vision Inspection", brand: "E2M Couth", origin: "Spain", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png" },
  { slug: "Checkweighers", category: "Inspection", name: "Checkweighers", brand: "Varpe", origin: "Spain", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png" },
  { slug: "roller-unwinders", category: "Packaging Support", name: "Slitting, Printing and Lamination", brand: "Vedvik Machinery", origin: "India", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780828263/ChatGPT_Image_Jun_7_2026_04_00_26_PM_safla9.png" },
  { slug: "Printing", category: "Printing", name: "Printers and Coders", brand: "MapleJet", origin: "Canada", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png" },
  { slug: "xray-metal-detector", category: "Quality Control", name: "X-ray and Metal Detector", brand: "Varpe", origin: "Spain", image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollReveal />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hero-badge    { animation: fadeUp    0.6s ease both; animation-delay: 0.1s; }
        .hero-heading  { animation: slideLeft 0.75s ease both; animation-delay: 0.2s; }
        .hero-sub      { animation: fadeUp    0.7s ease both; animation-delay: 0.5s; }
        .scroll-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .scroll-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <main className="flex-grow pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-12 md:mb-20">
          <p className="hero-badge text-xs font-medium uppercase tracking-wider text-[#0C4CA2] mb-4">Systems</p>
          <h1 className="hero-heading text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
            Packaging & Inspection Systems
          </h1>
          <p className="hero-sub text-base text-slate-600 max-w-xl leading-relaxed">
            Vedvik Machinery represents leading global manufacturers across 10 product categories — from pouch packaging and liquid filling to vision inspection and X-ray detection.
          </p>
          <div className="hero-sub mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-xs font-semibold text-[#0C4CA2] uppercase tracking-widest mb-2">Division 01 — Packaging</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-speed form-fill-seal machines, liquid filling lines, stick pack, and secondary automation systems from Effytec, Boato-Pack, MF Tecno, Filtec, Comipack, GMS, and Kraus — covering outputs from 20 packs/min to 320 packs/min across all formats.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-xs font-semibold text-[#0C4CA2] uppercase tracking-widest mb-2">Division 02 — Inspection</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inline checkweighers, vision inspection cameras, X-ray and metal detection systems, industrial coders, and film slitting and lamination machines from Varpe, E2M Couth, and MapleJet — all OIML, CE, and FDA-compliant where applicable.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const delay = (i % 3) * 100;

            if (product.disabled) {
              return (
                <div key={i} className="scroll-fade v-card block overflow-hidden !cursor-not-allowed opacity-60 grayscale" data-delay={delay}>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">{product.category}</span>
                      <span className="v-chip">Coming Soon</span>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-800 mb-3">{product.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="v-chip">{product.brand}</span>
                      <span className="v-chip">{product.origin}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={i} href={`/solutions/${product.slug}`} className="scroll-fade v-card group block overflow-hidden" data-delay={delay}>
                <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#0C4CA2]">{product.category}</span>
                  <h2 className="text-lg font-semibold text-slate-800 mt-1 mb-3">{product.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="v-chip">{product.brand}</span>
                    <span className="v-chip">{product.origin}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#0C4CA2] text-sm font-medium">
                    Learn More <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </main>
      <Footer />
    </div>
  );
}
