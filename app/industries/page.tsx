import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve – Packaging Solutions by Sector",
  description: "Vedvik Machinery provides packaging and inspection solutions across pharmaceuticals, food, beverages, agrochemicals, personal care, and more.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    description: "Precision dosing and sterile packaging for tablets, capsules, liquids and powders.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
  },
  {
    slug: "food-snacks",
    name: "Food & Snacks",
    description: "High-speed packing for namkeens, chips, biscuits, and ready-to-eat formats.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80",
  },
  {
    slug: "beverages",
    name: "Juices & Beverages",
    description: "Filling and sealing lines for juices, energy drinks, and liquid sachets.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  },
  {
    slug: "dairy",
    name: "Dairy",
    description: "Hygienic filling systems for milk, curd, butter, ghee, and dairy powders.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80",
  },
  {
    slug: "edible-oils",
    name: "Edible Oils",
    description: "Accurate volumetric filling for sunflower, mustard, palm, and blended oils.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
  },
  {
    slug: "agrochemicals",
    name: "Agrochemicals",
    description: "Safe and precise filling for pesticides, herbicides, fertilisers, and seeds.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
  },
  {
    slug: "seeds",
    name: "Seeds & Grains",
    description: "Weighing and pouch packing systems for paddy, wheat, vegetable seeds, and pulses.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    description: "Sachet and bottle filling for shampoos, lotions, creams, and hygiene products.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
  },
  {
    slug: "detergents",
    name: "Detergents & Homecare",
    description: "Powder and liquid packing for detergents, dishwash, and surface cleaners.",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
  },
  {
    slug: "spices-powders",
    name: "Spices & Powders",
    description: "Auger-based filling and sealing for masalas, spice blends, and dry powders.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  },
  {
    slug: "pet-food",
    name: "Pet Food",
    description: "Multihead weighing and doypack filling for dry kibble, treats, and wet food.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=80",
  },
  {
    slug: "chemicals",
    name: "Industrial Chemicals",
    description: "Bulk and drum filling for industrial solvents, lubricants, and specialty chemicals.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    slug: "bakery",
    name: "Bakery & Confectionery",
    description: "Twist tying, flow wrapping and case packing for breads, cakes, and sweets.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    description: "Sachet and stick pack filling for protein powders, health supplements, and vitamins.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80",
  },
  {
    slug: "coffee-tea",
    name: "Coffee & Tea",
    description: "Drip bag, sachet, and canister filling for ground coffee, instant coffee, and teas.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
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
        .page-header-animate {
          animation: fadeUp 0.8s ease both;
          animation-delay: 0.15s;
        }
        .page-header-label {
          animation: slideLeft 0.6s ease both;
          animation-delay: 0.05s;
        }
      `}</style>
      <main className="flex-grow pt-28 md:pt-32 pb-24 px-5 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-12 md:mb-20">
          <p className="page-header-label text-[#0C4CA2] font-semibold tracking-widest uppercase text-xs mb-4 font-['Montserrat']">Industries</p>
<h1 className="page-header-animate text-4xl md:text-7xl font-black tracking-tighter text-[#0C4CA2] leading-none mb-4 md:mb-6 font-['Montserrat']">            SECTORS<br />WE SERVE
          </h1>
          <p className="page-header-animate text-slate-500 max-w-xl text-base md:text-lg leading-relaxed font-light" style={{ animationDelay: "0.3s" }}>
            From pharmaceuticals to pet food, Vedvik Machinery delivers tailored packaging and inspection systems across 15 industries — built around the specific requirements of each sector.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="scroll-fade group block overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
<h2 className="font-['Montserrat'] font-black text-lg text-[#0C4CA2] mb-2">{industry.name}</h2>                <p className="text-slate-500 text-sm leading-relaxed">{industry.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[#0C4CA2] text-[10px] font-black uppercase tracking-widest">
                  View Solutions <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
