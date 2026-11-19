"use client";
import { motion } from "framer-motion";

type Status = "open" | "future" | "not-needed";

interface Position {
  title: string;
  status: Status;
}

const POSITIONS: Position[] = [
  { title: "Rigger", status: "future" },
  { title: "Look Development Artist", status: "future" },
  { title: "Texture Artist", status: "future" },
  { title: "Character Artist", status: "not-needed" },
  { title: "Environment Artist", status: "not-needed" },
  { title: "Production Manager", status: "not-needed" },
  { title: "Animator", status: "future" },
  { title: "FX Artist", status: "open" },
  { title: "Compositor", status: "not-needed" },
  { title: "Lighting Artist", status: "future" },
  { title: "Pipeline TD", status: "open" },
];

const STATUS_STYLES: Record<Status, { label: string; classes: string }> = {
  "open": { label: "Open", classes: "bg-green-950/40 border-green-500 text-green-400" },
  "future": { label: "Future Opportunities", classes: "bg-yellow-950/40 border-yellow-500 text-yellow-400" },
  "not-needed": { label: "Not Needed", classes: "bg-red-950/40 border-red-500 text-red-400" },
};

const APPLY_URL = "https://badstache.com/contact-us/job-apply/";

export default function OpenPositions() {
  const leftCol = POSITIONS.slice(0, 6);
  const rightCol = POSITIONS.slice(6);

  return (
    <section className="relative w-full pt-16 pb-16">
      <div className="w-full">
        
        {/* نوار سفید نورانی */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[3px] bg-kardo-accent rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em]">
            OPEN POSITIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            {leftCol.map((pos, i) => (
              <PositionRow key={i} position={pos} delay={i * 0.05} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightCol.map((pos, i) => (
              <PositionRow key={i} position={pos} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionRow({ position, delay }: { position: Position; delay: number }) {
  const status = STATUS_STYLES[position.status];
  const isClickable = position.status === "open" || position.status === "future";

  const content = (
    <>
      <h3 className="text-base md:text-lg font-bold text-white/90 group-hover:text-white transition-colors">
        {position.title}
      </h3>
      <span className={`px-4 py-1 rounded-full text-xs md:text-sm font-semibold border whitespace-nowrap ${status.classes}`}>
        {status.label}
      </span>
    </>
  );

  const baseStyles = "relative flex items-center justify-between gap-4 py-2 md:py-3 px-4 md:px-5 rounded-lg transition-all duration-300 group border border-transparent";
  const borderStyles = {
    borderImageSource: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
    borderImageSlice: 1,
    boxShadow: "0 0 20px rgba(255,255,255,0.05)"
  };

  if (isClickable) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
      >
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} bg-white/[0.02] hover:bg-white/[0.08] hover:scale-[1.01] cursor-pointer`}
          style={borderStyles}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`${baseStyles} bg-white/[0.02] opacity-60 cursor-default`}
      style={{
        borderImageSource: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
        borderImageSlice: 1,
        boxShadow: "0 0 20px rgba(255,255,255,0.02)"
      }}
    >
      {content}
    </motion.div>
  );
}