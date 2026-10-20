"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-white font-bold text-lg md:text-xl tracking-[0.35em] uppercase hover:opacity-70 transition-opacity"
        >
          Kardooni
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-7 h-7"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px bg-white transition-all duration-300 ${
              menuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-7"
            }`}
          />
          <span
            className={`h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "w-5"
            }`}
          />
          <span
            className={`h-px bg-white transition-all duration-300 ${
              menuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-6"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80" : "max-h-0"
        } bg-black border-t border-white/5`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}