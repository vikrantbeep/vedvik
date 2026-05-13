"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">
        <Link href="/" className="font-['Montserrat'] font-black text-2xl tracking-tighter text-[#020062]">
          VEDVIK
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-['Montserrat'] font-bold uppercase tracking-tight text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#020062] border-b-2 border-[#020062] pb-1"
                  : "text-slate-500 hover:text-[#020062]"
              }`}>
              {link.label}
            </Link>
          ))}
        </div>
        <button className="btn-machined text-white px-6 py-2 font-['Montserrat'] font-bold text-xs uppercase tracking-widest hover:scale-95 transition-all">
          Request Quote
        </button>
      </div>
    </nav>
  );
}