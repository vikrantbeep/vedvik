"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const LOGO_URL = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778775822/Primary_Logo_1_zjdriv.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-16">

        {/* Logo on the LEFT */}
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO_URL}
            alt="Vedvik Machinery"
            width={80}
            height={26}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links on the RIGHT */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-['Montserrat'] font-bold uppercase tracking-tight text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#020062] border-b-2 border-[#020062] pb-1"
                  : "text-slate-500 hover:text-[#020062]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-machined text-white px-5 py-2 font-['Montserrat'] font-bold text-xs uppercase tracking-widest hover:scale-95 transition-all"
          >
            Request Quote
          </Link>
        </div>

        {/* Hamburger on the RIGHT for mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8"
        >
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#020062] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown — aligned to the RIGHT */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col items-end gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-['Montserrat'] font-bold uppercase tracking-tight text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#020062]"
                    : "text-slate-500 hover:text-[#020062]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-machined text-white px-5 py-2 font-['Montserrat'] font-bold text-xs uppercase tracking-widest"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
