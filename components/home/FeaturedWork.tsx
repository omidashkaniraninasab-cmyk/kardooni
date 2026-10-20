"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Beyond the Veil",
    category: "Feature Film",
    year: "2025",
    gradient: "from-indigo-900 via-purple-900 to-black",
  },
  {
    id: 2,
    title: "Nova",
    category: "Series · Season 1",
    year: "2025",
    gradient: "from-slate-800 via-blue-900 to-black",
  },
  {
    id: 3,
    title: "Silent Orbit",
    category: "Commercial",
    year: "2024",
    gradient: "from-rose-900 via-red-900 to-black",
  },
  {
    id: 4,
    title: "Ashes of Eden",
    category: "Music Video",
    year: "2024",
    gradient: "from-amber-900 via-orange-900 to-black",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative py-32 md:py-40 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              02 — Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-[-0.02em]">
              Recent projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors group"
          >
            All Work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/work/${project.id}`} className="group block">
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <span className="text-white text-[10px] uppercase tracking-[0.5em]">
                      Showreel
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:hidden mt-12 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors"
          >
            All Work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}