import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HERO_IMAGE =
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png";

const LOGO =
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Machine {
  title: string;
  description: string;
  image: string;
}

interface InspectionSystem {
  title: string;
  description: string;
  icon: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const packagingMachines: Machine[] = [
  {
    title: "Liquid Filling",
    description: "Aseptic rotary filling systems with high accuracy. CIP/SIP ready for FMCG & pharma applications.",
    image: HERO_IMAGE,
  },
  {
    title: "Pouch Packing",
    description: "High-speed horizontal form-fill-seal (HFFS) systems with spouts for granular and liquid products.",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774880/Effytec_rnrkwy.png",
  },
  {
    title: "Pick Fill Seal",
    description: "Automated pick, fill and seal systems for precise and hygienic packaging of products.",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774881/VMpfs_fazimw.png",
  },
  {
    title: "Bulk Packing",
    description: "5 to 50 kg product packing in HFFS & VFFS format.",
    image: "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png",
  },
  {
    title: "Secondary Packaging",
    description: "End-of-line secondary packaging systems including cartoning, case packing, and shrink wrapping.",
    image: HERO_IMAGE, // replace with your actual image URL
  },
];

const inspectionSystems: InspectionSystem[] = [
  {
    title: "Inspection Machines",
    description: "Vision-based quality control systems for cap defects and label integrity.",
    icon: "search",
  },
  {
    title: "Checkweighers and Metal Detectors",
    description: "Dynamic inline weighing with automatic reject systems for high-speed lines.",
    icon: "scale",
  },
  {
    title: "X-Ray Systems",
    description: "High-sensitivity X-ray inspection for detecting foreign bodies, voids, and fill-level anomalies.",
    icon: "visibility",
  },
  {
    title: "Printer and Coder",
    description: "Thermal Inkjet (TIJ) printers to advanced IoT and Industry 4.0 enabled models.",
    icon: "sensors",
  },
  {
    title: "Roller Unwinders",
    description: "Precision film unwinding systems for consistent tension control in packaging lines.",
    icon: "rotate_right",
  },
];

// ─── Card Components ──────────────────────────────────────────────────────────

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div className="group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-slate-100 overflow-hidden mb-2">
        {machine.image ? (
          <img
            alt={machine.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={machine.image}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-slate-400">inventory_2</span>
          </div>
        )}
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#020062]">{machine.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{machine.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#020062] text-[10px] font-black uppercase tracking-tighter">
        Specifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </div>
  );
}

function InspectionCard({ system }: { system: InspectionSystem }) {
  return (
    <div className="group bg-white border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-2">
        <span className="material-symbols-outlined text-2xl text-[#020062]">{system.icon}</span>
      </div>
      <h3 className="font-['Montserrat'] font-bold text-lg text-[#020062]">{system.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{system.description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-[#020062] text-[10px] font-black uppercase tracking-tighter">
        Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </div>
  );
}

// ─── 3+2 Grid Layout ─────────────────────────────────────────────────────────

function ThreeTwoGrid<T>({ items, renderCard }: { items: T[]; renderCard: (item: T) => React.ReactNode }) {
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {firstRow.map((item, i) => (
          <div key={i}>{renderCard(item)}</div>
        ))}
      </div>
      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3">
          {secondRow.map((item, i) => (
            <div key={i}>{renderCard(item)}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-16">
          <div className="absolute inset-0 z-0">
            <img
              alt="Background Machine"
              className="w-full h-full object-cover brightness-[0.3]"
              src={HERO_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl text-white">
              {/* Badge */}
              <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Precision Engineering
              </div>

              {/* Logo in place of text title */}
              <div className="mb-8">
                <img
                  src={LOGO}
                  alt="Vedvik Machinery"
                  className="h-28 md:h-40 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              <p className="text-slate-300 text-lg md:text-xl max-w-md leading-relaxed mb-10">
                Advanced packaging and inspection systems engineered for high-speed FMCG &amp; pharmaceutical applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/solutions" className="bg-[#020062] text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-colors shadow-xl">
                  Solutions
                </a>
                <a href="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-colors">
                  Contact Us
                </a>
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
              <a className="text-xs font-bold text-[#020062] uppercase tracking-widest border-b border-[#020062] pb-1 hover:opacity-70 transition-opacity" href="/solutions">
                All Systems
              </a>
            </div>
            <ThreeTwoGrid
              items={packagingMachines}
              renderCard={(machine) => <MachineCard machine={machine} />}
            />
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
              <a className="text-xs font-bold text-[#020062] uppercase tracking-widest border-b border-[#020062] pb-1 hover:opacity-70 transition-opacity" href="/solutions">
                All Systems
              </a>
            </div>
            <ThreeTwoGrid
              items={inspectionSystems}
              renderCard={(system) => <InspectionCard system={system} />}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#020062] text-white">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-['Montserrat'] font-black text-3xl md:text-5xl mb-8">DISCUSS YOUR REQUIREMENTS.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="/contact" className="bg-white text-[#020062] px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-colors">
                Know More
              </a>
              <a href="/solutions" className="border border-white/30 text-white px-12 py-4 font-['Montserrat'] font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                Technical Catalog
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
