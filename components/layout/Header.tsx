"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "OUR IP", href: "/our-ip" },
  { label: "THE STUDIO", href: "/the-studio" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header({ activePage = "HOME" }: { activePage?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* کادر سیاه با لبه‌های محو */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* لایه پس‌زمینه سیاه با محو شدن لبه‌ها */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
            }}
          />
          
          {/* محتوای هدر */}
          <div className="relative z-10 py-4 flex justify-between items-center">
            {/* لوگو */}
            <Link href="/">
              <div className="w-24 md:w-32 relative mix-blend-screen">
                <Image src="/images/logo-kardooni.png" alt="Kardooni Studios" width={200} height={80} priority className="object-contain" />
              </div>
            </Link>

            {/* ناوبری دسکتاپ */}
            <nav className="hidden md:flex gap-6 lg:gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs lg:text-sm tracking-widest font-medium transition-colors duration-300 ${
                    item.label === activePage
                      ? "text-white border-b-2 border-kardo-accent pb-1"
                      : "text-kardo-muted hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* دکمه همبرگری - فقط موبایل */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 z-20"
              aria-label="Toggle menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* منوی موبایل */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden relative z-10"
              >
                <div className="flex flex-col gap-4 py-6 border-t border-white/10">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm tracking-widest font-medium transition-colors duration-300 ${
                        item.label === activePage
                          ? "text-white border-l-2 border-kardo-accent pl-3"
                          : "text-kardo-muted hover:text-white pl-3"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}