"use client";
import Image from "next/image";
import Header from "@/components/layout/Header";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";

export default function CareersPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      
      {/* کانتینر مشترک */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto min-h-screen">

          {/* بک‌گراند - داخل کانتینر */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <Image
              src="/images/careers-hero.jpg"
              alt="Kardooni Studios Workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
          </div>

          {/* محتوا */}
          <div className="relative z-10">
            <Header activePage="CAREERS" />
            <CareersHero />
            <OpenPositions />
          </div>
        </div>
      </div>
    </main>
  );
}