"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterQuote() {
  return (
    <section className="relative w-full py-16 px-6 md:px-10 bg-transparent z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center gap-8 max-w-3xl mx-auto"
      >
        <p className="text-white/90 italic text-sm md:text-lg leading-relaxed font-light">
          “I'M FROM SPACE” is a cinematic journey into the unknown, where every discovery raises a new question.
        </p>
        <div className="w-32 md:w-44 relative mix-blend-screen opacity-80">
          <Image
            src="/images/logo-kardooni.png"
            alt="Kardooni Studios"
            width={300}
            height={120}
            className="object-contain w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}