"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const LOGO_URL = "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780846274/Vedvik_Logo_TightCrop_ght0v2.svg";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src={LOGO_URL}
            alt="Vedvik Machinery"
            width={190}
            height={64}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`v-link font-medium text-sm cursor-pointer ${
                pathname === link.href
                  ? "v-link-active"
                  : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="v-btn-primary text-sm !px-5 !py-2.5">
            Request Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer active:scale-95 transition-transform duration-150"
        >
          <span className={`block w-6 h-0.5 bg-[#0C4CA2] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0C4CA2] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0C4CA2] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown — CSS max-height slide-down */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-end gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`v-link font-medium text-sm cursor-pointer ${
                pathname === link.href ? "v-link-active" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="v-btn-primary text-sm !px-5 !py-2.5"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
