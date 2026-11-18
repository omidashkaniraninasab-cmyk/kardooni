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

      {/* کانتینر مشترک - هدر هم داخلشه */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto">  {/* ← اینجا تغییر کرد */}

          {/* هدر - هم‌عرض بقیه */}
          <Header activePage="OUR IP" />

          {/* هیرو */}
          <div className="relative w-full overflow-hidden">
            <Hero />

            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none z-30" />

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

          {/* پس‌زمینه کهکشان + محتوا */}
          <div className="relative w-full">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{ backgroundImage: "url('/images/our-bg.jpg')" }}
            />
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />

            <div className="relative z-10 pt-24 md:pt-32">
              <VideoSection />
              <Gallery />
              <FooterQuote />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}