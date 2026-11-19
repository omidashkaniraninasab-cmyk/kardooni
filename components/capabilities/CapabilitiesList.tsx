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

  return (
    <div className="w-full lg:w-[55%] z-20 flex flex-col relative mt-16 lg:mt-0 lg:pt-16">
      
      <div className="flex flex-col w-full relative z-10">
        {CAPABILITIES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative flex items-center justify-between px-4 md:px-6 py-3 md:py-4 transition-colors duration-500 cursor-pointer ${
              hoveredIdx === i 
                ? "shadow-[0_10px_30px_rgba(232,119,34,0.15)] bg-black/40" 
                : ""
            }`}
          >
            {/* خط نورانی زیرین */}
 <div 
  className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 ${
    hoveredIdx === i
      ? "bg-gradient-to-r from-transparent via-kardo-accent to-transparent shadow-[0_0_20px_rgba(232,119,34,1)]"
      : "bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse-glow"
  }`}
/>

            {/* خط نورانی SVG - دایره به چپ منتقل شد */}
            <svg 
              className="hidden lg:block absolute left-[-120px] top-0 w-[150px] h-full pointer-events-none z-0" 
              viewBox="0 0 150 100" 
              fill="none"
            >
              <defs>
                <linearGradient id={`glowGradient-${i}`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(232,119,34,0)" />
                  <stop offset="40%" stopColor="rgba(232,119,34,1)" />
                  <stop offset="100%" stopColor="rgba(232,119,34,1)" />
                </linearGradient>
                <filter id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* منحنی نورانی - نقطه پایانی به 120 منتقل شد */}
              <path
                d="M 0 85 C 50 85, 70 50, 120 50"
                stroke={`url(#glowGradient-${i})`}
                strokeWidth="2"
                filter={`url(#glow-${i})`}
                className={`transition-opacity duration-300 ${hoveredIdx === i ? "opacity-100" : "opacity-40"}`}
              />

              {/* دایره نورانی - cx به 120 تغییر کرد تا از اعداد فاصله بگیرد */}
              <circle
                cx="120"
                cy="50"
                r={hoveredIdx === i ? 5 : 3.5}
                fill="#E87722"
                filter={`url(#glow-${i})`}
                className="transition-all duration-300"
              />
            </svg>

            {/* محتوای آیتم */}
            <div className="flex items-center justify-between w-full relative z-10 transition-transform duration-300 group-hover:-translate-x-2">
              <div className="flex items-center gap-4 md:gap-6">
                <span className={`text-2xl md:text-4xl font-light transition-colors duration-500 ${
                  hoveredIdx === i ? "text-kardo-accent drop-shadow-[0_0_10px_rgba(232,119,34,0.8)]" : "text-white/60"
                }`}>
                  {item.num}
                </span>
                <span className={`text-xl font-light transition-colors duration-500 ${
                  hoveredIdx === i ? "text-kardo-accent" : "text-white/20"
                }`}>|</span>
                <h3 className={`text-sm md:text-lg font-bold tracking-wider transition-colors duration-500 ${
                  hoveredIdx === i ? "text-white" : "text-white/80"
                }`}>
                  {item.title}
                </h3>
              </div>

              <p className={`hidden xl:block w-[35%] text-xs md:text-sm leading-relaxed text-right transition-colors duration-500 ${
                hoveredIdx === i ? "text-white/90" : "text-white/40"
              }`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-end mt-10"
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