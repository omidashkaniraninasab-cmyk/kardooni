"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Film", "Series", "Commercial", "Music Video"];

const projects = [
  { id: 1, title: "Beyond the Veil", category: "Film", year: "2025", gradient: "from-indigo-900 via-purple-900 to-black" },
  { id: 2, title: "Nova", category: "Series", year: "2025", gradient: "from-slate-800 via-blue-900 to-black" },
  { id: 3, title: "Silent Orbit", category: "Commercial", year: "2024", gradient: "from-rose-900 via-red-900 to-black" },
  { id: 4, title: "Ashes of Eden", category: "Music Video", year: "2024", gradient: "from-amber-900 via-orange-900 to-black" },
  { id: 5, title: "The Last Signal", category: "Film", year: "2024", gradient: "from-emerald-900 via-teal-900 to-black" },
  { id: 6, title: "Chromatic", category: "Commercial", year: "2023", gradient: "from-fuchsia-900 via-pink-900 to-black" },
  { id: 7, title: "Echoes", category: "Music Video", year: "2023", gradient: "from-cyan-900 via-sky-900 to-black" },
  { id: 8, title: "Dust", category: "Series", year: "2023", gradient: "from-stone-800 via-zinc-900 to-black" },
];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <section className="px-6 lg:px-8 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6"
            >
              Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.02em] mb-8"
            >
              Selected Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              A collection of work across film, television, commercials, and music videos — every frame crafted with intention.
            </motion.p>
          </div>
        </section>

        <section className="px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-all border ${
                    active === cat
                      ? "border-white text-black bg-white"
                      : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={`/work/${project.id}`} className="group block">
                      <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                              {project.category}
                            </span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}