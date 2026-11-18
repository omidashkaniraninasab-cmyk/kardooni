// components/layout/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "OUR IP", href: "/our-ip" },
  { label: "THE STUDIO", href: "/the-studio" },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header({ activePage = "HOME" }: { activePage?: string }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-6 flex justify-between items-center"
    >
      <Link href="/">
        <div className="w-24 md:w-32 relative mix-blend-screen">
          <Image src="/images/logo-kardooni.png" alt="Kardooni Studios" width={200} height={80} priority className="object-contain" />
        </div>
      </Link>
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
    </motion.header>
  );
}