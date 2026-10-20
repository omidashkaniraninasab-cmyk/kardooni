"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { number: "01", title: "Visual Effects", description: "From photorealistic environments to complex simulations — we create effects that serve the story.", items: ["Environment Design", "Simulation & FX", "Set Extensions", "Matte Painting"] },
  { number: "02", title: "3D Animation", description: "Character-driven animation and cinematic sequences built from the ground up.", items: ["Character Animation", "Creature Design", "Rigging", "Motion Capture"] },
  { number: "03", title: "Compositing", description: "Seamless integration of live-action footage with digital elements — invisible when it works.", items: ["Roto & Paint", "Keying", "Tracking", "Final Comp"] },
  { number: "04", title: "Motion Design", description: "Title sequences, brand identities, and motion graphics for screens of every size.", items: ["Title Design", "Broadcast Graphics", "Explainer Videos", "Brand Identity"] },
  { number: "05", title: "CGI Production", description: "Full computer-generated imagery — from concept to final pixel, no live-action needed.", items: ["Full CG Shots", "Product Visualization", "Architectural Viz", "Concept Art"] },
  { number: "06", title: "Look Development", description: "Color, light, and texture — defining the visual language of every frame.", items: ["Color Grading", "Lighting Design", "Texture Creation", "Style Frames"] },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <section className="px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6"
            >
              Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.02em] mb-8"
            >
              What we do best
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              Every service is a craft. Every craft, a discipline. From pre-visualization to final delivery — we handle it all.
            </motion.p>
          </div>
        </section>

        <section className="px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 md:pb-24 border-b border-white/10"
              >
                <div className="lg:col-span-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    {service.number}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:col-span-6 lg:pl-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/70">
                        <span className="w-1 h-1 bg-white/40 rounded-full flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto mt-20 text-center"
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
            >
              Start a Project
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}