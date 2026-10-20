"use client";

import { motion } from "framer-motion";

const capabilities = [
  { number: "01", title: "Visual Effects", description: "Photorealistic environments, characters, and simulations for film and television." },
  { number: "02", title: "3D Animation", description: "Character animation, creature design, and cinematic sequences built from scratch." },
  { number: "03", title: "Compositing", description: "Seamless integration of live-action footage with digital elements." },
  { number: "04", title: "Motion Design", description: "Title sequences, brand identities, and motion graphics for screens of every size." },
  { number: "05", title: "CGI", description: "Full CG production — from concept to final pixel." },
  { number: "06", title: "Look Development", description: "Color, light, and texture — defining the visual language of every frame." },
];

export default function Capabilities() {
  return (
    <section className="relative py-32 md:py-40 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
            03 — Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-[-0.02em]">
            What we do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-white/10 pt-6"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                {cap.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-3 mb-3 group-hover:text-white/90 transition-colors">
                {cap.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}