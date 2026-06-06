"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="text-lg font-bold text-zinc-900 mb-4 font-headline">Vedvik Machinery</div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-4">
            Manufacturer of Packaging Machines.
          </p>
          <div className="text-xs uppercase tracking-widest text-zinc-400">
            © {new Date().getFullYear()} Vedvik Machinery. All rights reserved.
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-bold text-zinc-900 mb-4 text-xs uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-500 text-sm hover:text-[#2c52a1] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="font-bold text-zinc-900 mb-4 text-xs uppercase tracking-widest">Legal</h4>
          <ul className="space-y-3">
            {["Technical Support", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <a href="#" className="text-zinc-500 text-sm hover:text-[#2c52a1] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Connect */}
        <div>
          <h4 className="font-bold text-zinc-900 mb-4 text-xs uppercase tracking-widest">Connect</h4>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/vedvik-machinery-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-200 rounded-lg hover:bg-[#2c52a1] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a href="mailto:vikrant@vedvikmachinery.com" className="w-10 h-10 flex items-center justify-center bg-zinc-200 rounded-lg hover:bg-[#2c52a1] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
