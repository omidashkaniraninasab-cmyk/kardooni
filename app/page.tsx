"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* کانتینر مشترک */}
      <div className="w-full h-full px-4 md:px-8">
        <div className="relative w-full h-full max-w-6xl mx-auto">

          {/* بک‌گراند داخل کانتینر */}
          <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Boy looking out airplane window" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-contain object-center"
            />
          </div>

          {/* هدر */}
          <Header activePage="HOME" />

         

          {/* دکمه DISCOVER OUR IP - پایین هیرو */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex justify-center"
          >
            <a 
              href="/our-ip" 
              className="group flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 border border-white/40 hover:border-kardo-accent hover:bg-kardo-accent transition-all duration-300 bg-black/40 backdrop-blur-sm"
            >
              <span className="text-[10px] sm:text-xs md:text-sm tracking-widest font-semibold group-hover:text-black transition-colors">
                DISCOVER OUR IP
              </span>
              <span className="text-base md:text-lg group-hover:translate-x-1 group-hover:text-black transition-all">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}