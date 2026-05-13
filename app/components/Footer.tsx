import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 py-12">
        <div className="space-y-4">
          <div className="font-['Montserrat'] font-black text-xl text-[#020062] uppercase tracking-tighter">
            VEDVIK
          </div>
          <p className="font-['Hind'] text-sm leading-relaxed text-slate-500 max-w-xs">
            Technical precision guaranteed for the pharmaceutical, food, and beverage sectors.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Montserrat'] font-bold text-xs uppercase tracking-widest text-[#020062]">
            Navigation
          </h4>
          <div className="flex flex-col space-y-2">
            <Link href="/support" className="text-sm text-slate-500 hover:text-[#020062] transition-colors">Technical Support</Link>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-[#020062] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-[#020062] transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Montserrat'] font-bold text-xs uppercase tracking-widest text-[#020062]">
            Copyright
          </h4>
          <p className="font-['Hind'] text-sm leading-relaxed text-slate-500">
            © 2024 Vedvik Machinery. Technical Precision Guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
