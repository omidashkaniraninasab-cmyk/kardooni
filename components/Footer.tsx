"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-white font-bold text-lg tracking-[0.35em] uppercase">
              Kardooni
            </span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
              © {year ?? ""}
            </span>
          </div>

          <nav className="flex items-center gap-8 text-[10px] uppercase tracking-[0.25em]">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-white/40 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}