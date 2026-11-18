"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-transparent">
      {/* تصویر هیرو - کاملاً بدون برش */}
      <div className="relative w-full">
        <Image
          src="/images/our-ip-hero.jpg"
          alt="I'm From Space"
          width={1080}
          height={1463}
          priority
          sizes="100vw"
          className="w-full h-auto object-contain block"
        />
      </div>
    </section>
  );
}