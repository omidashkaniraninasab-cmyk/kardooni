"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "I'm From Space scene 1" },
  { src: "/images/gallery-2.jpg", alt: "I'm From Space scene 2" },
  { src: "/images/gallery-3.jpg", alt: "I'm From Space scene 3" },
];

export default function Gallery() {
  return (
    <section className="relative w-full py-10 px-4 md:px-8 z-10">
      {/* 👇 max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative w-full aspect-video rounded-2xl border-2 border-kardo-accent/60 overflow-hidden group bg-black/40"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}