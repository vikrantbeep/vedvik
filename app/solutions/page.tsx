import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "title: "Solutions – Vedvik Machinery | Packaging & Inspection Systems",
  description:
    "Explore Vedvik Machinery's full range: HFFS pouch packers, liquid filling lines, checkweighers, X-ray inspection, vision systems, printers, and more. European technology, Indian support.",
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
  {
    slug: "Comipack",
    category: "Packaging",
    name: "Twist Tying",
    brand: "Comipack",
    origin: "Italy",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780376386/Screenshot_2026-06-02_at_10.29.18_AM_j5z9jz.png",
  },
  {
    slug: "Boato-Pack",
    category: "Packaging",
    name: "Stick and Sachet Packing",
    brand: "Boato Pack",
    origin: "Italy",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312396/ChatGPT_Image_Jun_1_2026_04_42_50_PM_gibudi.png",
  },
  {
    slug: "GMS",
    category: "Feeding Systems",
    name: "Feeding Systems",
    brand: "GMS",
    origin: "Italy",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780312482/ChatGPT_Image_Jun_1_2026_04_44_32_PM_njslyg.png",
  },
  {
    slug: "Kraus",
    category: "Product Handling",
    name: "Product Handling Systems",
    brand: "Kraus",
    origin: "Germany",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png",
  },
  {
    slug: "HFFS",
    category: "Packaging",
    name: "Horizontal Form Fill Seal",
    brand: "Effytec",
    origin: "Spain",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png",
  },
  {
    slug: "Liquid-Filling",
    category: "Packaging",
    name: "Liquid Filling Lines",
    brand: "Filtec Automation",
    origin: "South Africa",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png",
  },
  {
    slug: "PFS",
    category: "Packaging",
    name: "Pick Fill Seal",
    brand: "Vedvik Machinery",
    origin: "India",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png",
  },
  {
    slug: "Bulk-Packing",
    category: "Packaging",
    name: "Bulk HFFS & VFFS",
    brand: "MF Tecno",
    origin: "Italy",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png",
  },
  {
    slug: "Secondary-Automation",
    category: "Packaging",
    name: "Secondary Automation",
    brand: "Vedvik Machinery",
    origin: "India",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774885/Secondary_zqcr5t.png",
  },
  {
    slug: "Inspection",
    category: "Inspection",
    name: "Vision Inspection",
    brand: "E2M Couth",
    origin: "Spain",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png",
  },
  {
    slug: "Checkweighers",
    category: "Inspection",
    name: "Checkweighers",
    brand: "Varpe",
    origin: "Spain",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Varpe_kdbgnh.png",
  },
  {
    slug: "roller-unwinders",
    category: "Packaging Support",
    name: "Roller Unwinders",
    brand: "Vedvik Machinery",
    origin: "India",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823717/Unwinder_h1jw5i.png",
  },
  {
    slug: "Printing",
    category: "Printing",
    name: "Printers and Coders",
    brand: "MapleJet",
    origin: "Canada",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/MapleJet_yrppqj.png",
  },
  {
    slug: "xray-metal-detector",
    category: "Quality Control",
    name: "X-ray and Metal Detector",
    brand: "Varpe",
    origin: "Spain",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778823792/X_ray_obgczv.png",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-12 md:mb-20">
          <p className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4">Systems</p>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
            PACKAGING &<br />INSPECTION SYSTEMS
          </h1>
          <p className="text-on-surface-variant max-w-xl text-base md:text-lg leading-relaxed font-light">
            Vedvik Machinery represents leading global manufacturers across 10 product categories — from pouch packaging and liquid filling to vision inspection and X-ray detection.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {products.map((product, i) => {
            if (product.disabled) {
              return (
                <div key={i} className="block cursor-not-allowed">
                  <div className="aspect-[4/5] overflow-hidden bg-surface-container relative mb-6 rounded-lg opacity-50 grayscale">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700" />
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">{product.category}</span>
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-white rounded-full">Coming Soon</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start opacity-50">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-2 font-headline">{product.name}</h2>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-secondary">{product.brand}</span>
                        <span className="w-1 h-1 bg-outline-variant rounded-full" />
                        <span className="text-sm text-on-surface-variant">{product.origin}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full flex-shrink-0">
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={i} href={`/solutions/${product.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-surface-container relative mb-6 rounded-lg">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">{product.category}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-2 font-headline">{product.name}</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-secondary">{product.brand}</span>
                      <span className="w-1 h-1 bg-outline-variant rounded-full" />
                      <span className="text-sm text-on-surface-variant">{product.origin}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
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
