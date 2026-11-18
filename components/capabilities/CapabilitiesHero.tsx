"use client";
import { motion } from "framer-motion";

export default function CapabilitiesHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      // 👇 تغییر اصلی: اضافه شدن lg:-translate-x-32 برای کشیدن به چپ
      className="w-full lg:w-[40%] z-20 pt-10 lg:pt-0 lg:-translate-x-32 xl:-translate-x-48"
    >
      {/* لیبل بالا */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-[2px] bg-kardo-accent" />
        <span className="text-xs md:text-sm tracking-[0.3em] text-white/80 font-medium">
          OUR CAPABILITIES
        </span>
      </div>

      {/* تیتر اصلی */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6">
        FROM VISION<br />
        TO <span className="font-bold text-kardo-accent drop-shadow-[0_0_15px_rgba(232,119,34,0.5)]">FINAL FRAME</span>
      </h1>

      {/* پاراگراف */}
      <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-md">
        A full-spectrum animation & VFX production studio, combining creative storytelling with cutting-edge technology to deliver world-class visual content.
      </p>
    </motion.div>
  );
}