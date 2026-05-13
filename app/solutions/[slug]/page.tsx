"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact Us", href: "/contact" },
  ];
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-900 font-headline">
          Vedvik Machinery
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-bold tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-zinc-600 hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-headline font-bold scale-95 active:scale-90 transition-transform"
        >
          Request Quote
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-1">
          <div className="text-lg font-bold text-zinc-900 font-headline mb-4">Vedvik Machinery</div>
          <p className="text-xs text-zinc-500 uppercase tracking-widest leading-loose">
            Official Indian representative of Effytec, Spain.
          </p>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-widest font-bold text-zinc-900 mb-6">Global Hubs</h5>
          <ul className="space-y-4 text-sm text-zinc-500">
            {["Spain", "Italy", "Japan", "India"].map((item) => (
              <li key={item} className="hover:underline decoration-secondary decoration-2 underline-offset-4 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-widest font-bold text-zinc-900 mb-6">Solutions</h5>
          <ul className="space-y-4 text-sm text-zinc-500">
            {["HFFS Systems", "VFFS Systems", "End of Line", "Custom Engineering"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-widest font-bold text-zinc-900 mb-6">Support</h5>
          <ul className="space-y-4 text-sm text-zinc-500">
            {["Maintenance", "Spare Parts", "Documentation"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-widest font-bold text-zinc-900 mb-6">Connect</h5>
          <div className="flex gap-4">
            {["hub", "monitoring", "mail"].map((icon) => (
              <span key={icon} className="material-symbols-outlined text-xl text-zinc-500 hover:text-secondary cursor-pointer transition-colors">{icon}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-12 py-8 max-w-screen-2xl mx-auto border-t border-zinc-200 flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">© {new Date().getFullYear()} Vedvik Machinery. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Product Data ─────────────────────────────────────────────────────────────
// Add a new object here for each product. The slug must match the URL.
// e.g. /solutions/hp-500 → slug: "hp-500"

const products: Record<string, {
  badge: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  efficiencyRating: string;
  demoImage: string;
  brand: string;
  brandDesc: string;
  specs: { parameter: string; rating: string }[];
  showcaseImages: string[];
}> = {
  "hp-500": {
    badge: "Precision Series",
    name: "HP-Series 500",
    subtitle: "Horizontal Form Fill Seal",
    description:
      "An architectural marvel in mechanical engineering. Designed for quiet precision, the HP-500 delivers high-speed pouching with zero material waste and surgical accuracy.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOvMpK3M5VFxjZk-P7OmiDhQrH-cHycmYWKaNUJEek-zW4ySCC5g2G1AX_g54UaBr9wMJxwNLB5ihvGp_GVSyta4CRZn4DDRcujtU21PSqZmSW8O3wNmVzqObIjXsNeNkRCbHPQAySGSYPDea-bvHSqaBn9Ha-cS-gZKDIXC6_gQiVBF1nSzOSBkDzVPcb3KvSfGUyA19GPHIYBxW3bN1YEWcXNlHZCUA_lUMCo7Xp77XsHYey-RVr6BkeDuymBMlfaaFkAv2SdZI",
    efficiencyRating: "99.8%",
    demoImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnPht-w3d7uiOaB8i2SXw57gE1A15IEMplFMKttpvF4zVe_uLVjX3-i-ETOzqEG7gWxugpm1c0sDmdn-2nOGnUeg9-e8GBsvFyzT3y6ZOkHqVUlFdpddoTynllxG19mNq3BC9druE5GmUc04cizMSGTJSOGB1888Gq_8goIRIZ7alM9uFry4lcz7VDMqHGGl8ZNbwifpUN3Yjeq65e-kedtGg7HeRXskANRO7BN-TY_5zcBLRCKtGtFJGLojbSr7OkA77xrOSdqyk",
    brand: "Effytec, Spain",
    brandDesc: "Advanced HFFS systems since 1992.",
    specs: [
      { parameter: "Max Pouch Width", rating: "500 mm" },
      { parameter: "Operating Speed", rating: "120 pouches / min" },
      { parameter: "Material Compatibility", rating: "PE, PET, ALU, Bio-Composites" },
      { parameter: "Power Consumption", rating: "4.5 kW (Energy-Saver Mode)" },
      { parameter: "Precision Tolerance", rating: "± 0.2 mm" },
      { parameter: "HMI Control System", rating: '15" Multi-touch Panel' },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARiiLOYkwPdE-UA9zAF-Qi9NzjP9605kPnWQ1MKETWinWxRrfm_fy93Zxd8g2XEtsmMgrusip8dCI83x2fM_GUHGu-VXFwiHNLDh1X3GcOol7l3rrA9wn7-jcBGhUlSuchetLFEfkZE6kL1klhLyJkHZHg1V1_tAkWdWuNhDoHiuAoywxoDWR4sC72nZ0RteVUOvUdx5SY-g8lI3tFPhKtuIxH1L6FQLEP5PlHX8Cy3TDUwTiczeL-hSDxk2D_Wad9U657wYSJHKI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4q2UinzZZOH-_bZODrsStRe-ejRhvH4nob8ieCJybE_EnWHJ8off8ek-PWtcioYBz1yiI4EfwM__UjON14JMTe9afCB8Ly6Flf7wUeywfzwiHQCeCUzY2E3gG5O6OMBNj1tw3ldZM-4Wji2Pg0-lppP5mccEIQfmJvtME02LbUb97VHZvk6Kfut9Mpyi6nIXBklJLJzmHuJexyyuvG_qUX9cMz6Piyl6vqRJNsvEmU0el4kwGBz6L6KYVdwgycEwqSOZEGxjqmQ",
    ],
  },
  // Add more products here following the same structure
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary font-headline mb-4">Product Not Found</h1>
            <Link href="/solutions" className="text-secondary underline">Back to Solutions</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="pt-24 flex-grow">

        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[0.6875rem] font-body font-bold tracking-widest uppercase">
                {product.badge}
              </span>
            </div>
            <h1 className="text-[3.5rem] font-headline font-extrabold leading-tight tracking-tighter text-primary mb-6">
              {product.name} <br />{product.subtitle}
            </h1>
            <p className="text-lg font-body text-on-surface-variant max-w-xl leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-headline font-bold tracking-tight shadow-sm"
              >
                Request Technical Quote
              </Link>
              <button className="border border-outline-variant/20 text-secondary px-8 py-4 rounded-md font-headline font-bold tracking-tight hover:bg-surface-container transition-colors">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden relative">
              <img className="w-full h-full object-cover" src={product.heroImage} alt={product.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-40" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/10 hidden md:block">
              <p className="text-xs font-body text-on-surface-variant uppercase tracking-[0.2em] mb-2">Efficiency Rating</p>
              <p className="text-4xl font-headline font-bold text-primary">{product.efficiencyRating}</p>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="bg-primary py-24">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-white text-3xl font-headline font-bold mb-4 tracking-tight">Machine Demo</h2>
              <div className="h-1 w-24 bg-secondary" />
            </div>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative bg-zinc-900 border border-white/5">
              <img className="w-full h-full object-cover opacity-60" src={product.demoImage} alt="Machine Demo" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-8 left-8 text-white/80 text-sm tracking-widest flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                LIVE OPERATION DEMO: 4K 60FPS
              </div>
            </div>
          </div>
        </section>

        {/* Specs + Showcase */}
        <section className="py-32 max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

            {/* Specs */}
            <div>
              <h3 className="text-2xl font-headline font-bold mb-12 text-primary border-l-4 border-secondary pl-6">
                Technical Specifications
              </h3>
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden">
                <table className="w-full text-left font-body text-sm">
                  <thead className="bg-surface-container-low border-b border-outline-variant/20">
                    <tr>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Parameter</th>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {product.specs.map((spec) => (
                      <tr key={spec.parameter}>
                        <td className="px-6 py-5 font-semibold text-on-surface">{spec.parameter}</td>
                        <td className="px-6 py-5 text-on-surface-variant">{spec.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 flex items-center gap-6 p-8 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span>
                <div>
                  <p className="text-xs font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1">Manufacturer Info</p>
                  <p className="text-lg font-headline font-bold text-primary">Engineering by {product.brand}</p>
                  <p className="text-sm font-body text-on-surface-variant">{product.brandDesc}</p>
                </div>
              </div>
            </div>

            {/* Showcase */}
            <div>
              <h3 className="text-2xl font-headline font-bold mb-12 text-primary border-l-4 border-secondary pl-6">
                Packaging Showcase
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.showcaseImages.map((src, i) => (
                  <div key={i} className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={src} alt={`Showcase ${i + 1}`} />
                  </div>
                ))}
                <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-outline-variant/30">
                  <p className="text-[0.6875rem] font-bold text-on-surface-variant text-center uppercase px-4">+ More Profiles</p>
                </div>
              </div>
              <div className="mt-12 p-8 bg-surface-container-lowest shadow-sm rounded-xl border border-outline-variant/10">
                <h4 className="font-headline font-bold text-primary mb-4 italic">Custom Tooling Available</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Our modular forming stations allow for rapid changeovers between complex shapes.
                  Whether you require shaped sachets, twin-packs, or custom corner-valves, the system
                  adapts to your brand&apos;s unique silhouette.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
