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
      {/* کانتینر مشترک - هدر هم داخلشه */}
      <div className="w-full px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto">

          {/* هدر */}
          <Header activePage="THE STUDIO" />

          {/* بک‌گراند کهکشان - محدود به کانتینر */}
          <div className="relative w-full">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{ backgroundImage: "url('/images/studio-bg.jpg')" }}
            />
            {/* گرادیان بالای کهکشان: سیاه → شفاف */}
            <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none z-10" />
            {/* لایه تیره کلی */}
            <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />

            {/* محتوا */}
            <div className="relative z-10">
              <StudioHero />
              <Leadership />
              <TeamGallery />
              <TeamStatement />
              <TeamMembers />
              <StudioFooter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}