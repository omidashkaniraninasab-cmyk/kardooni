"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,40,80,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(80,60,120,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 mb-8"
        >
          Cinematic Animation · Visual Effects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] leading-[0.92] max-w-5xl"
        >
          We make the
          <br />
          impossible, visible.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Link
            href="/work"
            className="px-10 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Watch Showreel
          </Link>
          <Link
            href="/work"
            className="text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors group inline-flex items-center gap-2"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}