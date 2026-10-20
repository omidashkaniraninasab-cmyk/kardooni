"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 lg:px-8 bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,40,100,0.15),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8"
        >
          04 — Let's Create
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.02em]"
        >
          Have a story
          <br />
          to tell?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/contact"
            className="px-10 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Start a Project
          </Link>
          <Link
            href="/work"
            className="text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors group inline-flex items-center gap-2"
          >
            Explore Our Work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}