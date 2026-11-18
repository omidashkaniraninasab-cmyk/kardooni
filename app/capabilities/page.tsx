"use client";
import Header from "@/components/layout/Header";
import CapabilitiesHero from "@/components/capabilities/CapabilitiesHero";
import CapabilitiesList from "@/components/capabilities/CapabilitiesList";

export default function CapabilitiesPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* بک‌گراند اصلی - تصویر خالی بدون متن */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/capabilities-bg.jpg')" }}
      />
      
      {/* لایه تیره‌ی خفیف برای خوانایی بهتر */}
      <div className="absolute inset-0 w-full h-full bg-black/20 pointer-events-none z-0" />

      <div className="relative z-10 w-full h-full flex flex-col">
        <Header activePage="CAPABILITIES" />
        
        <div className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-10 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <CapabilitiesHero />
          <CapabilitiesList />
        </div>
      </div>
    </main>
  );
}