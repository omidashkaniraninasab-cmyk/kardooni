"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="relative min-h-dvh md:min-h-screen w-full overflow-visible bg-black">
      {/* بک‌گراند: موبایل عکس جدا، دسکتاپ عکس فول‌اسکرین */}
      <div className="relative md:absolute md:inset-0 z-0 bg-black overflow-hidden">
        {/* عکس موبایل - زیر هدر نمی‌رود */}
        <div className="md:hidden mt-[72px] relative">
          <Image
            src="/images/hero-mobile.jpg"
            alt="Boy looking out airplane window - mobile"
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full h-auto"
          />
          {/* گرادیان absolute روی لبه پایین عکس موبایل */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* عکس دسکتاپ - فول‌اسکرین */}
        <div className="hidden md:block md:absolute md:inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Boy looking out airplane window"
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-bottom"
          />
          {/* گرادیان absolute روی لبه پایین عکس دسکتاپ */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>

      {/* نوار مشکی سرتاسری هم‌اندازه هدر که زیرش به عکس محو می‌شود - ثابت */}
      <div className="fixed top-0 left-0 z-[5] w-full pointer-events-none">
        <div className="h-[52px] md:h-[56px] bg-black" />
        <div className="h-12 md:h-16 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* گرادیان مشکی محو در پایین صفحه - ثابت، برعکس گرادیان بالا */}
     {/* گرادیان مشکی محو در پایین صفحه - ثابت، برعکس گرادیان بالا */}
<div className="fixed bottom-0 left-0 z-[5] w-full pointer-events-none">
  <div className="h-8 md:h-12 bg-gradient-to-t from-black to-transparent" />
</div>

      {/* کانتینر مشترک برای هدر و دکمه */}
      <div className="relative z-10 w-full md:h-full px-4 md:px-8">
        <div className="relative w-full md:h-full max-w-6xl mx-auto">
          {/* هدر */}
          <Header activePage="HOME" />

          {/* دکمه DISCOVER OUR IP - موبایل: چسبیده زیر عکس، دسکتاپ: پایین صفحه */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
  className="relative mt-6 pb-8 md:mt-0 md:pb-0 md:fixed md:bottom-24 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto z-20 flex justify-center"
>
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
        </div>
      </div>

      {/* اسکرول خیلی کم در دسکتاپ */}
      <div className="hidden md:block h-[40px] w-full" aria-hidden="true" />
      {/* حاشیه مشکی باریک پایین صفحه */}
      <div className="h-[16px] w-full bg-black" aria-hidden="true" />
    </main>
  );
}