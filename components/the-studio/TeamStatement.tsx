"use client";
import { motion } from "framer-motion";

export default function TeamStatement() {
  return (
    <section className="relative w-full py-16">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full text-center text-white/90 text-base md:text-lg leading-relaxed"
      >
        Our team brings together artists, technologists, and storytellers with expertise across all stages of animation and VFX production. We are passionate about creating original content and collaborating on diverse projects with international studios and creative partners.
      </motion.p>
    </section>
  );
}