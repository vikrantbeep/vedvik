"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t-[3px] border-[#0C4CA2]">
      <style>{`
        .f-link { position: relative; transition: color .15s ease; }
        .f-link::after {
          content: ""; position: absolute; left: 0; bottom: -2px;
          width: 100%; height: 1.5px; background: #0C4CA2;
          transform: scaleX(0); transform-origin: left;
          transition: transform .15s ease;
        }
        .f-link:hover { color: #7eb2f1; }
        .f-link:hover::after { transform: scaleX(1); }
      `}</style>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="text-lg font-semibold text-white mb-4">Vedvik Machinery</div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-4">
            Manufacturer of Packaging Machines.
          </p>
          <div className="text-xs uppercase tracking-wider text-slate-500">
            © {new Date().getFullYear()} Vedvik Machinery. All rights reserved.
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider border-b border-[#0C4CA2]/40 pb-2 inline-block">Navigation</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: "Industries", href: "/industries" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="f-link text-slate-400 text-sm cursor-pointer">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider border-b border-[#0C4CA2]/40 pb-2 inline-block">Legal</h4>
          <ul className="space-y-3">
            {["Technical Support", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <a href="#" className="f-link text-slate-400 text-sm cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Connect */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider border-b border-[#0C4CA2]/40 pb-2 inline-block">Connect</h4>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/vedvik-machinery-india/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-slate-800 text-slate-300 rounded-lg cursor-pointer hover:bg-[#0C4CA2] hover:text-white active:scale-95 transition-all duration-200">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a href="/contact" aria-label="Contact Us" className="w-10 h-10 flex items-center justify-center bg-slate-800 text-slate-300 rounded-lg cursor-pointer hover:bg-[#0C4CA2] hover:text-white active:scale-95 transition-all duration-200">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
