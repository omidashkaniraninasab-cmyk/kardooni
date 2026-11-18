"use client";
import Header from "@/components/layout/Header";
import Hero from "@/components/our-ip/Hero";
import VideoSection from "@/components/our-ip/VideoSection";
import Gallery from "@/components/our-ip/Gallery";
import FooterQuote from "@/components/our-ip/FooterQuote";
import { motion } from "framer-motion";

export default function OurIPPage() {
  return (
    <main className="relative w-full bg-black overflow-x-hidden">
      
      {/* ۱. بخش هیرو */}
      <div className="relative z-20">
        <Header activePage="OUR IP" />
        <Hero />
        
        {/* گرادیان محو شدن پایین هیرو به سمت سیاه */}
        <div className="absolute bottom-0 left-0 w-full h-40 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-30" />
        
        {/* متن روی محل تلاقی - قرار گرفتن در پایین‌ترین نقطه هیرو */}
             {/* متن روی محل تلاقی - قرار گرفتن در پایین‌ترین نقطه هیرو */}
              {/* متن روی محل تلاقی - قرار گرفتن در پایین‌ترین نقطه هیرو */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-4 md:bottom-12 left-0 w-full z-40 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <p className="text-white/95 italic text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed drop-shadow-2xl font-light tracking-wide">
            An unexpected discovery draws a young boy into an extraordinary journey beyond the boundaries of science, space, and reality.
          </p>
        </motion.div>
      </div>

      {/* ۲. بخش کهکشان - با 100 پیکسل رفتن زیر هیرو */}
      <div className="relative w-full z-10 -mt-[100px]">
        
        {/* عکس کهکشان با ماسک محو شدن در بالا */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: "url('/images/our-bg.jpg')",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%)"
          }}
        />
        
        {/* لایه تیره برای خوانایی محتوا روی کهکشان */}
        <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />

        {/* محتوا */}
        <div className="relative z-10 pt-48 md:pt-64">
          <VideoSection />
          <Gallery />
          <FooterQuote />
        </div>
      </div>
    </main>
  );
}