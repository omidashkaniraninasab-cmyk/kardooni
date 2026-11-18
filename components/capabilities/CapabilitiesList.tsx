"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const CAPABILITIES = [
  { num: "01", title: "ANIMATION PRODUCTION", desc: "High-quality 3D animation production, from character creation to final performance." },
  { num: "02", title: "VISUAL EFFECTS & SIMULATION", desc: "Dynamic and cinematic visual effects, including large-scale simulations and complex phenomena." },
  { num: "03", title: "3D ASSET & ENVIRONMENT DEVELOPMENT", desc: "Production-ready assets and rich, believable worlds with cinematic quality and strong visual identity." },
  { num: "04", title: "LOOK DEVELOPMENT & LIGHTING", desc: "Crafting the final look through advanced materials, textures, and cinematic lighting." },
  { num: "05", title: "RIGGING & CHARACTER FX", desc: "Robust and production-ready rigs, along with advanced simulations for cloth, hair, and dynamic elements." },
  { num: "06", title: "COMPOSITING & FINAL IMAGE", desc: "Seamlessly combining all elements into a polished, cinematic final frame." },
  { num: "07", title: "FULL CG PRODUCTION", desc: "Complete end-to-end CG production, from concept development to final delivery." },
];

export default function CapabilitiesList() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getOffsetY = (index: number) => {
    if (index === 0) return -80;
    if (index === 1) return -60;
    if (index === 2) return -40;
    if (index === 3) return -20;
    if (index === 4) return -20;
    if (index === 5) return -30;
    if (index === 6) return -40;
    return 0;
  };

  return (
    // 👇 تغییر اصلی: اضافه شدن lg:translate-x-32 xl:translate-x-48 برای حرکت به راست
    <div className="w-full lg:w-[60%] z-20 flex flex-col relative mt-[150px] lg:translate-x-32 xl:translate-x-48">
      
      <div className="flex flex-col w-full">
        {CAPABILITIES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50, y: getOffsetY(i) }}
            animate={{ 
              opacity: 1, 
              x: hoveredIdx === i ? -10 : 0,
              y: getOffsetY(i)
            }}
            transition={{
              x: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.8, delay: i * 0.1 },
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative flex items-center justify-between px-4 md:px-6 py-6 md:py-8 border-b transition-colors duration-500 cursor-pointer ${
              hoveredIdx === i 
                ? "border-kardo-accent shadow-[0_10px_30px_rgba(232,119,34,0.15)] bg-black/20" 
                : "border-white/10"
            }`}
          >
            {i === 0 && (
              <div className={`absolute top-0 left-0 w-full h-[1px] ${
                hoveredIdx === 0 ? "bg-kardo-accent/50 shadow-[0_0_10px_rgba(232,119,34,0.8)]" : "bg-white/10"
              }`} />
            )}

            <div className="flex items-center gap-4 md:gap-8">
              <span className={`text-2xl md:text-4xl font-light transition-colors duration-500 ${
                hoveredIdx === i ? "text-kardo-accent drop-shadow-[0_0_10px_rgba(232,119,34,0.8)]" : "text-white/60"
              }`}>
                {item.num}
              </span>
              <span className={`text-xl font-light transition-colors duration-500 ${
                hoveredIdx === i ? "text-kardo-accent" : "text-white/20"
              }`}>|</span>
              <h3 className={`text-sm md:text-xl font-bold tracking-wider transition-colors duration-500 ${
                hoveredIdx === i ? "text-white" : "text-white/80"
              }`}>
                {item.title}
              </h3>
            </div>

            <p className={`hidden xl:block w-[40%] text-xs md:text-sm leading-relaxed text-right transition-colors duration-500 ${
              hoveredIdx === i ? "text-white/90" : "text-white/40"
            }`}>
              {item.desc}
            </p>

            {hoveredIdx === i && (
              <motion.div 
                layoutId="glow-line"
                className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-kardo-accent to-transparent shadow-[0_0_20px_rgba(232,119,34,1)]"
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-end mt-12"
      >
        <a 
          href="/contact" 
          className="group flex items-center gap-4 px-8 py-4 border border-kardo-accent/60 hover:bg-kardo-accent transition-all duration-300 bg-black/40 backdrop-blur-sm"
        >
          <span className="text-xs md:text-sm tracking-widest font-semibold text-white group-hover:text-black transition-colors">
            LET'S CREATE TOGETHER
          </span>
          <span className="text-lg text-kardo-accent group-hover:text-black group-hover:translate-x-1 transition-all">
            →
          </span>
        </a>
      </motion.div>
    </div>
  );
}