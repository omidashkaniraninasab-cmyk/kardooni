"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
  { src: "/images/team-13.jpg", alt: "Team working" },
];

const MotionImage = ({ img, delay, big = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group ${
      big ? "h-full" : ""
    }`}
  >
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={big ? "(max-width: 768px) 100vw, 60vw" : "30vw"}
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </motion.div>
);

export default function TeamGallery() {
  return (
    <section className="relative w-full py-16">
      <div className="w-full flex flex-col gap-4 md:gap-6">

        {/* --- ردیف بالا: تصویر بزرگ چپ + ۲ تصویر کوچک راست --- */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* تصویر بزرگ (سمت چپ) */}
          <div className="w-full md:w-2/3">
            <MotionImage img={TEAM_IMAGES[0]} delay={0} big />
          </div>
          {/* ۲ تصویر کوچک (سمت راست) */}
          <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <MotionImage img={TEAM_IMAGES[1]} delay={0.1} />
            <MotionImage img={TEAM_IMAGES[2]} delay={0.2} />
          </div>
        </div>

        {/* --- ردیف وسط: ۶ تصویر کوچک در دو ردیف ۳ ستونه --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {TEAM_IMAGES.slice(3, 9).map((img, i) => (
            <MotionImage key={i + 3} img={img} delay={(i + 3) * 0.05} />
          ))}
        </div>

        {/* --- ردیف پایین (قرینه): ۲ تصویر کوچک چپ + تصویر بزرگ راست --- */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* ۲ تصویر کوچک (سمت چپ) */}
          <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 order-2 md:order-1">
            <MotionImage img={TEAM_IMAGES[9]} delay={0.1} />
            <MotionImage img={TEAM_IMAGES[10]} delay={0.2} />
          </div>
          {/* تصویر بزرگ (سمت راست) */}
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <MotionImage img={TEAM_IMAGES[11]} delay={0} big />
          </div>
        </div>
      </div>
    </section>
  );
}