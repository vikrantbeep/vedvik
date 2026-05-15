import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const products = [
  {
    slug: "HFFS",
    category: "Packaging",
    name: "Horizontal Form Fill Seal",
    brand: "Effytec",
    origin: "Spain",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
  },
  {
    slug: "Liquid Filling",
    category: "Packaging",
    name: "Liquid Filling Lines",
    brand: "Filtec Automation",
    origin: "South Africa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
  },
  {
    slug: "PFS",
    category: "Packaging",
    name: "Pick Fill Seal",
    brand: "Vedvik Machinery",
    origin: "India",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
  },
  {
    slug: "Bulk Packing",
    category: "Packaging",
    name: "Bulk HFFS & VFFS",
    brand: "MF Tecno",
    origin: "Italy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
  },
  {
    slug: "Inspection",
    category: "Inspection",
    name: "Vision Inspection",
    brand: "E2M Couth",
    origin: "Spain",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
  },
  {
    slug: "Checkweighers",
    category: "Quality Control",
    name: "Checkweighers, X-ray & Metal Detectors",
    brand: "Varpe",
    origin: "Spain",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
  },
  {
    slug: "roller-unwinders",
    category: "Packaging Support",
    name: "Roller Unwinders",
    brand: "Vedvik Machinery",
    origin: "India",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
  },
  {
    slug: "Printing",
    category: "Printing",
    name: "Printers and Coders",
    brand: "MapleJet",
    origin: "Canada",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
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
            PACKAGING<br />SOLUTIONS
          </h1>
          <p className="text-on-surface-variant max-w-xl text-base md:text-lg leading-relaxed font-light">
            A curated selection of high-precision packaging machinery, designed for seamless integration and efficient operation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {products.map((product, i) => (
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
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
