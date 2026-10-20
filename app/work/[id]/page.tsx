"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectData: Record<string, {
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  gradient: string;
}> = {
  "1": {
    title: "Beyond the Veil",
    category: "Feature Film",
    year: "2025",
    client: "Placeholder Studio",
    description: "A full-VFX feature film exploring the boundaries between dreams and reality. Kardooni handled over 400 shots, from environment design to creature animation.",
    gradient: "from-indigo-900 via-purple-900 to-black",
  },
  "2": {
    title: "Nova",
    category: "Series · Season 1",
    year: "2025",
    client: "Placeholder Network",
    description: "An 8-episode science fiction series. We built entire planets, designed a new alien species, and delivered over 1,200 finished shots.",
    gradient: "from-slate-800 via-blue-900 to-black",
  },
  "3": {
    title: "Silent Orbit",
    category: "Commercial",
    year: "2024",
    client: "Placeholder Brand",
    description: "A 60-second spot for a global technology brand. Filmed entirely in-camera, with all space environments created in CG.",
    gradient: "from-rose-900 via-red-900 to-black",
  },
  "4": {
    title: "Ashes of Eden",
    category: "Music Video",
    year: "2024",
    client: "Placeholder Artist",
    description: "A visual album companion piece. Kardooni designed the full visual language — from concept art to final grade.",
    gradient: "from-amber-900 via-orange-900 to-black",
  },
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectData[id] || projectData["1"];

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors mb-12"
            >
              ← Back to Work
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                {project.category}
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                {project.year}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.02em] max-w-5xl mb-16"
            >
              {project.title}
            </motion.h1>
          </div>
        </section>

        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-[0.5em]">
                  Showreel · Coming Soon
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Client
                  </div>
                  <p className="text-white text-lg">{project.client}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Year
                  </div>
                  <p className="text-white text-lg">{project.year}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Category
                  </div>
                  <p className="text-white text-lg">{project.category}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}