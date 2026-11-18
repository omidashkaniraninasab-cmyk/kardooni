"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Header from "@/components/layout/Header";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Boy looking out airplane window" 
          fill 
          priority
          className="object-contain md:object-cover md:object-center"
        />
      </div>

      <Header activePage="HOME" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full w-full pl-6 md:pl-10 pr-6 md:pr-40 lg:pr-60 flex flex-col md:flex-row-reverse md:justify-between md:items-end md:pb-24 pt-24 md:pt-0"
      >
        {/* I'm From Space Block */}
        <motion.div 
          variants={itemVariants}
          // 👇 اصلاح: حذف translate منفی بزرگ، فقط یک جابجایی ملایم
          className="md:w-1/3 flex flex-col items-center text-center z-20 mb-8 md:mb-0 md:-translate-y-10 lg:-translate-y-16 w-full"
        >
          <div className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] text-gray-300 font-semibold mb-2">
            AN ORIGINAL ANIMATED FEATURE BY
          </div>
          <div className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] text-gray-400 mb-4 md:mb-6">
            KARDOONI STUDIOS
          </div>
          <div className="w-16 md:w-24 h-[1px] bg-white/20 mb-6 md:mb-8" />
          
          {/* 👇 اصلاح: کوچیک‌تر کردن عرض لوگو */}
          <div className="relative w-[220px] sm:w-[300px] md:w-[360px] lg:w-[460px] xl:w-[520px] mb-6 md:mb-8 mix-blend-screen flex justify-center">
            <Image 
              src="/images/im-from-space.png" 
              alt="I'm From Space Logo" 
              width={1600} 
              height={800} 
              priority
              className="object-contain w-full h-auto max-w-full drop-shadow-[0_0_20px_rgba(232,119,34,0.3)]"
            />
          </div>

          <a 
            href="/our-ip" 
            className="group flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 border border-white/40 hover:border-kardo-accent hover:bg-kardo-accent transition-all duration-300"
          >
            <span className="text-[10px] sm:text-xs md:text-sm tracking-widest font-semibold group-hover:text-black transition-colors">
              DISCOVER OUR IP
            </span>
            <span className="text-base md:text-lg group-hover:translate-x-1 group-hover:text-black transition-all">→</span>
          </a>
        </motion.div>

        {/* IMAGINATION Text */}
        <div className="mt-auto md:mt-0 md:w-1/3 z-20 mb-10 md:mb-0 md:text-right md:pr-40 lg:pr-60">
          <motion.div variants={itemVariants} className="flex items-center justify-end gap-4 mb-4">
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-300 font-medium">
              INDEPENDENT ANIMATION & VFX STUDIO
            </span>
            <div className="w-[2px] h-4 bg-kardo-accent" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            IMAGINATION<br />
            BEYOND LIMITS.
          </motion.h1>
        </div>
      </motion.div>
    </main>
  );
}