"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-black">
      
      {/* کانتینر مشترک */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto min-h-[110vh] pt-16 md:pt-0 md:-mt-16 pb-20 flex flex-col md:block">

          {/* بک‌گراند داخل کانتینر با افکت هاور و لرزش */}
          <motion.div 
            className="relative md:absolute md:inset-0 z-0 bg-[#0a0a0a] overflow-hidden w-full h-[35vh] md:h-full rounded-lg"
            whileHover={{ scale: 1.02 }} // ← rotate حذف شد
            whileTap={{ 
              x: [0, -3, 3, -3, 3, 0],
              transition: { duration: 0.3 }
            }} // ← rotate حذف شد
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Boy looking out airplane window" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-contain object-center md:object-contain"
            />

            {/* دکمه DISCOVER OUR IP - روی عکس در موبایل */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-2 right-2 z-20 md:hidden"
            >
              <a 
                href="/our-ip" 
                className="group flex items-center gap-2 px-3 py-2 border border-white/40 hover:border-kardo-accent hover:bg-kardo-accent transition-all duration-300 bg-black/60 backdrop-blur-sm rounded-lg"
              >
                <span className="text-[8px] sm:text-xs tracking-widest font-semibold group-hover:text-black transition-colors">
                  DISCOVER OUR IP
                </span>
                <span className="text-xs group-hover:translate-x-1 group-hover:text-black transition-all">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* هدر */}
          <Header activePage="HOME" />

          {/* دکمه DISCOVER OUR IP - در دسکتاپ سمت راست وسط */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex absolute md:top-1/2 md:right-8 md:-translate-y-1/2 z-20"
          >
            <a 
              href="/our-ip" 
              className="group flex items-center gap-4 px-8 py-4 border border-white/40 hover:border-kardo-accent hover:bg-kardo-accent transition-all duration-300 bg-black/40 backdrop-blur-sm rounded-lg"
            >
              <span className="text-sm tracking-widest font-semibold group-hover:text-black transition-colors">
                DISCOVER OUR IP
              </span>
              <span className="text-lg group-hover:translate-x-1 group-hover:text-black transition-all">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}