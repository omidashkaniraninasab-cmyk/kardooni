"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { number: "12+", label: "Years in Production" },
  { number: "80+", label: "Completed Projects" },
  { number: "24", label: "Industry Awards" },
  { number: "15", label: "Team Members" },
];

const values = [
  { title: "Craft", description: "We believe in the discipline of making — the slow, deliberate work of building worlds pixel by pixel." },
  { title: "Story", description: "Effects are nothing without a story. Every frame we create serves the narrative first." },
  { title: "Collaboration", description: "We work as partners with directors, studios, and brands — never as an outsourced vendor." },
  { title: "Restraint", description: "The best VFX is invisible. We know when to push boundaries — and when to hold back." },
];

export default function StudioPage() {
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
              Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.02em] max-w-5xl"
            >
              Built by people who love the craft.
            </motion.h1>
          </div>
        </section>

        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6">
                Kardooni was founded on a simple idea: that visual effects should feel like an extension of the story, not a spectacle in themselves.
              </p>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6">
                Based in Tehran, we work with filmmakers, studios, and brands worldwide. Our team combines decades of experience across film, television, and advertising — but we still approach every project like it&apos;s our first.
              </p>
              <p className="text-white/50 text-base md:text-lg leading-relaxed">
                We&apos;re small by choice. Small enough to care about every frame. Large enough to deliver on the biggest stages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 lg:pt-4"
            >
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-white/10 pt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl md:text-5xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-5xl font-bold text-white mb-16"
            >
              What we stand for
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-white/10 pt-6"
                >
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}