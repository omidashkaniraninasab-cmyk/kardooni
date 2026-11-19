"use client";
import { motion } from "framer-motion";

export default function StudioHero() {
  return (
    <section className="relative w-full pt-32 md:pt-40 pb-16">
      <div className="w-full">
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
            Kardooni Studios is an independent animation studio based in Yerevan, Armenia. We develop original intellectual properties and deliver a wide range of animation, CG, and VFX production services.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            From original animated productions to complex visual effects projects, we combine creative vision, technical expertise, and production experience to create distinctive visual experiences for film, television, and digital media.
          </p>
        </motion.div>
      </div>
    </section>
  );
}