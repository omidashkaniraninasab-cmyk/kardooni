"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative py-32 md:py-48 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              01 — The Studio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-8 leading-[1.05] tracking-[-0.02em]">
              A studio built on the belief that anything imagined can be made real.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-24"
          >
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Kardooni is a cinematic animation and visual effects studio based in Tehran, working with filmmakers, brands, and storytellers worldwide.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              We craft worlds — from the smallest particle to the largest galaxy. Every frame is a decision. Every pixel, a purpose.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white">12+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2">Years</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white">80+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white">24</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2">Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}