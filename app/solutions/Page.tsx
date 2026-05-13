
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCuTGjp6zgEXir_vdfa3dxl8gTYxALj0wHObrT0wPSzmp0TFWjkwmrmHLs2GwYAooRRG642yjvigEBoEXw9F2IX2XIlS-3VmQmAzlgEQe0MVz03T08wY1-MJolPzk6d6orbkTnFB3OnSMIbCWkEBXXs7rFbPvq20PaRaf-yzHxwdTwOlDbNjpw6sqq8S4iKKAkZuCN63Xnho_EtKRTjCdSKYR4Ge6UBUS8UcqoqB65ygRaK-I8gHaJXvNjoftqZcKOI_Nrqyfz5IxgJ";

const packagingMachines = [
  {
    title: "Liquid Filling",
    description: "Aseptic rotary filling systems with 0.1% accuracy. CIP/SIP ready for pharma applications.",
    image: HERO_IMAGE,
  },
  {
    title: "Pouch Packing",
    description: "High-speed vertical form-fill-seal (VFFS) systems for granular and liquid goods.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5d4-nUdzb6C0Us7hUc4JICEbqO0f5y2f2Vka92j0_TzM_cQfEooIRmjdR7xND9OCWwixKSliOh9O9L-arpL65DWddJrQgoAadh8BGcY3sdpxTuxWYwXb5Ut3OfcCX7haPs_Hc8cuzJdFs2qZU89XiheiO1jroGDidS_yt4AKd3rT1IkC9hNqCSMDH1lhszqKczMmQ1wlIPTF6zNAY69kx46-unGGop_Hk_Xxtg9DpECll5i1mwcGQDNUXCfnUufaZr9wkCXmk8sRD",
  },
  {
    title: "Bulk Packing",
    description: "Automated weighing and discharge systems for industrial bulk container loading.",
    icon: "precision_manufacturing",
  },
];

const inspectionSystems = [
  { title: "Inspection Machines", description: "Vision-based quality control systems for surface defects and label integrity." },
  { title: "Check Weighers", description: "Dynamic inline weighing with automatic reject systems for high-speed lines." },
  { title: "Metal Detectors", description: "Multi-frequency detection technology for ferrous and non-ferrous contaminants." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[80vh] flex items-center pt-16">
          <div className="absolute inset-0 z-0">
            <img alt="Background Machine" className="w-full h-full object-cover grayscale-[0.4] brightness-[0.3]" src={HERO_IMAGE} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl text-white">
              <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 text-primary-fixed text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Precision Engineering
              </div>
              <div className="hero-title-block font-['Montserrat'] font-black mb-8">
                <span className="hero-title-main">VEDVIK</span>
                <span className="hero-title-sub">MACHINERY</span>
              </div>
              <p className="text-slate-300 text-lg md:text-xl max-w-md leading-relaxed mb-10">
                Advanced packaging and filling systems engineered for high-speed pharmaceutical and food manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-machined text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest shadow-xl">
                  Solutions
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-primary font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 01</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#020062] mt-2">PACKAGING MACHINES</h2>
              </div>
              <a className="text-xs font-bold text-primary uppercase tracking-widest border-b border-primary pb-1" href="/solutions">All Systems</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packagingMachines.map((machine) => (
                <div key={machine.title} className="group bg-surface-container-lowest border border-surface-container-highest p-8 flex flex-col gap-4 hover:shadow-lg transition-all">
                  <div className="aspect-video bg-surface-container-low overflow-hidden mb-2">
                    {machine.image ? (
                      <img alt={machine.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={machine.image} />
                    ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-slate-400">{machine.icon}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#020062]">{machine.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{machine.description}</p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-tighter">
                    Specifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-primary font-bold font-['Montserrat'] text-[10px] tracking-widest uppercase">Division 02</span>
                <h2 className="font-['Montserrat'] font-black text-3xl text-[#020062] mt-2">INSPECTION SYSTEMS</h2>
              </div>
              <a className="text-xs font-bold text-primary uppercase tracking-widest border-b border-primary pb-1" href="/solutions">All Systems</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inspectionSystems.map((system) => (
                <div key={system.title} className="group bg-surface-container-lowest border border-surface-container-highest p-8 flex flex-col gap-4 hover:shadow-lg transition-all">
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#020062]">{system.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{system.description}</p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-tighter">
                    Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#020062] text-white">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-['Montserrat'] font-black text-3xl md:text-5xl mb-8">
              DISCUSS YOUR FACILITY REQUIREMENTS.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-white text-[#020062] px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-colors">
                Request Consultation
              </button>
              <button className="border border-white/30 text-white px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                Technical Catalog
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
