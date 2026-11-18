"use client";
import Header from "@/components/layout/Header";
import StudioHero from "@/components/the-studio/StudioHero";
import Leadership from "@/components/the-studio/Leadership";
import TeamGallery from "@/components/the-studio/TeamGallery";
import TeamStatement from "@/components/the-studio/TeamStatement";
import TeamMembers from "@/components/the-studio/TeamMembers";
import StudioFooter from "@/components/the-studio/StudioFooter";

export default function TheStudioPage() {
  return (
    <main className="relative w-full bg-black overflow-x-hidden">
      {/* بک‌گراند کهکشان */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/studio-bg.jpg')" }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />

      <div className="relative z-10">
        <Header activePage="THE STUDIO" />
        <StudioHero />
        <Leadership />
        <TeamGallery />
        <TeamStatement />
        <TeamMembers />
        <StudioFooter />
      </div>
    </main>
  );
}