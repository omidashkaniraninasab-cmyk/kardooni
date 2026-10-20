import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedWork from "@/components/home/FeaturedWork";
import Capabilities from "@/components/home/Capabilities";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
        <Capabilities />
        <CTA />
      </main>
      <Footer />
    </>
  );
}