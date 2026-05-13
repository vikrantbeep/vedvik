"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">

        {/* Logo */}
        <Link href="/">
          <Image src="/Logomark_1.jpg" alt="Vedvik Machinery" width={120} height={40} className="object-contain" />
        </Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="flex flex-col justify-center items-center gap-1.5 w-8 h-8">
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-['Montserrat'] font-bold uppercase tracking-tight text-sm transition-colors ${
                  pathname === link.href ? "text-[#020062]" : "text-slate-500 hover:text-[#020062]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
