"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/images/our-ip-hero.jpg"
      alt="I'm From Space"
      width={1080}
      height={1463}
      priority
      sizes="(max-width: 1024px) 100vw, 1280px"
      className="w-full h-auto object-contain block"
    />
  );
}