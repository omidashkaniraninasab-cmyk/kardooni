"use client";
import { motion } from "framer-motion";

export default function StudioFooter() {
  return (
    <section className="relative w-full py-12 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* مکان */}
        <div className="flex items-center gap-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-kardo-accent">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div>
            <h4 className="text-lg md:text-xl font-extrabold tracking-widest">YEREVAN, ARMENIA</h4>
            <p className="text-white/60 text-xs md:text-sm">Azatutyan Avenue, Yerevan, Armenia</p>
          </div>
        </div>
        
        {/* جداکننده و متن */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-[1px] h-10 bg-white/20" />
          <p className="text-white/70 text-xs md:text-sm tracking-wide text-center md:text-left">
            <span className="italic">Independent Creative Studio</span> · Animation · VFX · Film
          </p>
        </div>
      </motion.div>
    </section>
  );
}