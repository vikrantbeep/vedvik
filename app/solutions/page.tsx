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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          Vedvik Machinery
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-bold tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary px-8 py-3 rounded-lg font-headline font-bold tracking-tight"
          >
            Request Quote
          </Link>
        </div>
        <button className="md:hidden">
          <span className="material-symbols-outlined text-on-surface">menu</span>
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-2">
          <div className="text-lg font-bold text-zinc-900 mb-6 font-headline">Vedvik Machinery</div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-6">
            Official Indian representative of Effytec, Spain. Distributing and manufacturing
            precision packaging machinery across India.
          </p>
          <div className="text-sm uppercase tracking-widest text-zinc-400">
            © {new Date().getFullYear()} Vedvik Machinery. All rights reserved.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-500 hover:underline decoration-secondary decoration-2 underline-offset-4 text-sm uppercase tracking-widest transition-all duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            {["Technical Support", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-500 hover:underline decoration-secondary decoration-2 underline-offset-4 text-sm uppercase tracking-widest transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center bg-zinc-200 rounded-lg hover:bg-secondary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-zinc-200 rounded-lg hover:bg-secondary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

const filterCategories = [
  { label: "Packaging", items: ["Pick Fill Seal", "Pouch Packing", "Bulk Packing", "Bottling"] },
  { label: "Inspection", items: ["Inspection Machines", "Metal Detectors", "Rollers", "Coding"] },
  { label: "Manufacturing", items: ["Bakery", "Potato Frying", "Coffee Roasters"] },
];

const products = [
  {
    category: "Packaging",
    name: "HB-14 Pouch Master",
    brand: "Effytec",
    origin: "Spain",
    offset: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
  },
  {
    category: "Inspection",
    name: "X-Ray Clarity 500",
    brand: "Ishida",
    origin: "Japan",
    offset: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
  },
  {
    category: "Manufacturing",
    name: "Aero-Roast Elite",
    brand: "Brambati",
    origin: "Italy",
    offset: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
  },
  {
    category: "Packaging",
    name: "Aqua-Fill Linear",
    brand: "Krones",
    origin: "Germany",
    offset: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
  },
  {
    category: "Manufacturing",
    name: "Crisp-Flow FRY-20",
    brand: "Heat & Control",
    origin: "USA",
    offset: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
  },
  {
    category: "Inspection",
    name: "Duo-Code Mark-V",
    brand: "Videojet",
    origin: "Italy",
    offset: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

        <header className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4">Master Gallery</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-6 font-headline">
              ENGINEERED<br />SOLUTIONS
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-light">
              A curated selection of high-precision industrial machinery, designed for seamless
              integration and silent operation. Filter by application or manufacturer expertise.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-surface-container-low p-1 rounded-full flex gap-1">
              <button className="px-6 py-2 bg-white rounded-full text-sm font-semibold shadow-sm text-primary">All Systems</button>
              <button className="px-6 py-2 hover:bg-white/50 rounded-full text-sm font-medium text-on-surface-variant transition-all">New Arrivals</button>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-12">
            {filterCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  {cat.label}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-medium">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {products.map((product, i) => (
            <div key={i} className={`group ${product.offset ? "md:mt-12" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container relative mb-8 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-primary mb-2 font-headline">{product.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-secondary">{product.brand}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span className="text-sm text-on-surface-variant">{product.origin}</span>
                  </div>
                </div>
                <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
