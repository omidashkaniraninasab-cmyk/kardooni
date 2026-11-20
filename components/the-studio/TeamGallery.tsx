"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface MotionImageProps {
  img: { src: string; alt: string };
  delay?: number;
  big?: boolean;
}

const TEAM_IMAGES = [
  { src: "/images/team-1.jpg", alt: "Team working" },
  { src: "/images/team-2.jpg", alt: "Team working" },
  { src: "/images/team-3.jpg", alt: "Team working" },
  { src: "/images/team-4.jpg", alt: "Team working" },
  { src: "/images/team-5.jpg", alt: "Team working" },
  { src: "/images/team-6.jpg", alt: "Team working" },
  { src: "/images/team-7.jpg", alt: "Team working" },
  { src: "/images/team-8.jpg", alt: "Team working" },
  { src: "/images/team-9.jpg", alt: "Team working" },
  { src: "/images/team-10.jpg", alt: "Team working" },
  { src: "/images/team-11.jpg", alt: "Team working" },
  { src: "/images/team-12.jpg", alt: "Team working" },
];

const MotionImage = ({ img, delay = 0, big = false }: MotionImageProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`relative rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group ${
      big ? "h-full" : "aspect-video"
    }`}
  >
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={big ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 30vw"}
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </motion.div>
);

export default function TeamGallery() {
  return (
    <section className="relative w-full py-16">
      <div className="w-full flex flex-col gap-4 md:gap-6">

        {/* --- ردیف اول: عکس بزرگ چپ + ۲ عکس کوچک راست --- */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-2/3 aspect-video">
            <MotionImage img={TEAM_IMAGES[0]} delay={0} big />
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <MotionImage img={TEAM_IMAGES[1]} delay={0.1} />
            <MotionImage img={TEAM_IMAGES[2]} delay={0.2} />
          </div>
        </div>

      {/* --- ردیف‌های وسط: در موبایل ۲ تایی، در دسکتاپ ۳ تایی --- */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
  <MotionImage img={TEAM_IMAGES[3]} delay={0.05} />
  <MotionImage img={TEAM_IMAGES[4]} delay={0.1} />
  <MotionImage img={TEAM_IMAGES[5]} delay={0.15} />
  <MotionImage img={TEAM_IMAGES[6]} delay={0.05} />
  <MotionImage img={TEAM_IMAGES[7]} delay={0.1} />
  <MotionImage img={TEAM_IMAGES[8]} delay={0.15} />
</div>

        {/* --- ردیف آخر: ۲ عکس کوچک چپ + عکس بزرگ راست --- */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <MotionImage img={TEAM_IMAGES[9]} delay={0.1} />
            <MotionImage img={TEAM_IMAGES[10]} delay={0.2} />
          </div>
          <div className="w-full md:w-2/3 aspect-video">
            <MotionImage img={TEAM_IMAGES[11]} delay={0} big />
          </div>
        </div>

      </div>
    </section>
  );
}