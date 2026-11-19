"use client";
import Header from "@/components/layout/Header";
import CapabilitiesHero from "@/components/capabilities/CapabilitiesHero";
import CapabilitiesList from "@/components/capabilities/CapabilitiesList";

export default function CapabilitiesPage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* بک‌گراند تمیز - محدود به کانتینر مشترک */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto min-h-screen">
          
          {/* بک‌گراند اصلی */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
            style={{ backgroundImage: "url('/images/capabilities-bg-clean.jpg')" }}
          />
          <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none z-0" />

          {/* محتوا */}
          <div className="relative z-10 w-full h-full flex flex-col">
            <Header activePage="CAPABILITIES" />
            
            <div className="flex-1 w-full px-6 md:px-10 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <CapabilitiesHero />
              <CapabilitiesList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}