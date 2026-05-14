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
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 font-headline">
          Vedvik Machinery
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 font-bold transition duration-300"
        >
          Request Quote
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-50 border-t border-slate-200">
      <div className="text-lg font-black text-slate-900 font-headline">Vedvik Machinery</div>
      <div className="flex gap-8 flex-wrap justify-center">
        {["Privacy Policy", "Terms of Service", "Technical Documentation", "Global Offices"].map((item) => (
          <a key={item} href="#" className="text-slate-500 hover:underline decoration-2 underline-offset-4 text-xs font-bold uppercase tracking-widest">
            {item}
          </a>
        ))}
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Vedvik Machinery. All rights reserved.
      </p>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <div className="text-on-surface min-h-screen flex flex-col" style={{ backgroundColor: "#fafaf5" }}>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Form */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-sm font-bold text-primary mb-4 block uppercase tracking-widest font-label">
                Inquiry Channel
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-[#020062] tracking-tighter leading-none mb-6 font-headline">
                CONNECT WITH <br />US.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Direct communication for high-specification packaging systems. Submit your
                requirements for a call back.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-10">
                <div className="relative">
                  <label className="text-xs font-bold text-outline mb-2 block uppercase tracking-widest font-label" htmlFor="email">
                    Email ID
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 placeholder:text-outline-variant/50 outline-none"
                    id="email"
                    placeholder="client@organization.com"
                    type="email"
                  />
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-outline mb-2 block uppercase tracking-widest font-label" htmlFor="requirement">
                    Requirement
                  </label>
                  <select
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 appearance-none outline-none"
                    id="requirement"
                  >
                    <option disabled value="">Select machinery category</option>
                    <option value="flow-wrap">Vertical Flow Wrap Systems</option>
                    <option value="bottling">High-Speed Bottling Lines</option>
                    <option value="cartoning">End-of-Line Cartoning</option>
                    <option value="custom">Custom Robotic Integration</option>
                    <option value="support">Technical Support & Maintenance</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-outline-variant">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-outline mb-2 block uppercase tracking-widest font-label" htmlFor="notes">
                    Notes
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 placeholder:text-outline-variant/50 resize-none outline-none"
                    id="notes"
                    placeholder="Briefly describe your production volume and specific material challenges..."
                    rows={4}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="group flex items-center gap-4 bg-[#2563EB] hover:bg-blue-700 text-white px-10 py-5 font-bold transition-all duration-300 shadow-xl shadow-blue-900/10 active:scale-[0.98] uppercase tracking-widest font-label">
                  <span>Submit Form</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Info Panel */}
          <aside className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="bg-surface-container-low p-10 md:p-14 space-y-12">
              <div>
                <h3 className="text-sm font-black text-[#020062] mb-8 uppercase tracking-widest font-label">
                  Factory Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="font-bold text-lg leading-tight">Ahmedabad, Gujarat, India</p>
                      <p className="text-on-surface-variant font-medium">Bakrol, Indore-Ahmedabad Highway, Ahmedabad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <div>
                      <p className="font-bold text-lg leading-tight">vikrant@vedvikmachinery.com</p>
                      <p className="text-on-surface-variant font-medium">Call if Urgent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <div>
                      <p className="font-bold text-lg leading-tight">+91 81558 92080</p>
                      <p className="text-on-surface-variant font-medium">Mon - Sat: 09:00 - 18:00 IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/20">
                <h3 className="text-xs font-black text-outline mb-6 uppercase tracking-widest font-label">
                  Works
                </h3>
                <div className="aspect-video w-full bg-surface-container overflow-hidden">
                  <img
                    alt="Vedvik Machinery"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJHRjpWQfcaKjI0FZrGnkWiietoyvARCCNlF4I0AP2YM7H_4v048trLeRLojxl8P5hM5YO6BIgZr_fn279MGkP02hE17gtntlFErfwp4pkSuNMbKRYXuG3KlXBkXj2fnyNszYczjXVgoP2JJiA0dGNYehaxv3v-A8CZZvGmi8Y7TGo-n0y2_SiIzQpvT6Yiq8Tc_r_jiBOL0mZDLtzEnkhqqznp1_bVFaH0VGfcDEgYK7d7xQJmv-G_SUvtHOnzlJNRnGsW_RaUoUJ"
                  />
                </div>
              </div>

              <div className="p-6 bg-surface-container-highest/30">
                <p className="text-sm font-medium text-on-surface-variant italic leading-snug">
                  "We look forward to fulfilling your packaging requirements witht the best solution."
                </p>
                <p className="text-xs font-bold uppercase tracking-widest mt-4 text-[#020062] font-label">
                  - Vedvik Machinery 
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
