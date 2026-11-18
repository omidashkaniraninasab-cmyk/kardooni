"use client";
import Image from "next/image";
import Header from "@/components/layout/Header";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";

export default function CareersPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      
      {/* عکس بک‌گراند - fixed تا کل صفحه رو پر کنه */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/images/careers-hero.jpg"
          alt="Kardooni Studios Workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* گرادیان‌ها برای خوانایی */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
      </div>

      {/* محتوا */}
      <div className="relative z-10">
        <Header activePage="CAREERS" />
        <CareersHero />
        <OpenPositions />
      </div>
    </main>
  );
}