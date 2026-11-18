"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StudioHero() {
  return (
    <section className="relative w-full pt-32 md:pt-40 pb-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* متن سمت چپ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="italic">KARDOONI</span>{" "}
            <span className="italic text-kardo-accent">STUDIOS</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
            Kardooni Studios is an independent animation and visual effects studio based in Yerevan, Armenia. We develop original intellectual properties and deliver a wide range of animation, CG, and VFX production services.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            From original animated productions to complex visual effects projects, we combine creative vision, technical expertise, and production experience to create distinctive visual experiences for film, television, and digital media.
          </p>
        </motion.div>

        {/* عکس ساختمان سمت راست */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20"
        >
          <Image
            src="/images/studio-building.jpg"
            alt="Kardooni Studios Building"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}