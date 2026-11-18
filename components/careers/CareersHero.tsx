"use client";
import { motion } from "framer-motion";

const STATUS_LEGEND = [
  { color: "bg-green-500", title: "Open", desc: "We are actively hiring for this position." },
  { color: "bg-yellow-400", title: "Future Opportunities", desc: "Not hiring now, but we'd like to see your portfolio for future roles." },
  { color: "bg-red-500", title: "Not Needed", desc: "We are not looking for this position at this time." },
];

export default function CareersHero() {
  return (
    <section className="relative w-full min-h-[40vh] flex flex-col justify-center pt-16 pb-8 px-6 md:px-10">
      {/* تغییر max-w-7xl به max-w-[1600px] برای هم‌ترازی با کادرها */}
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // تغییر max-w-2xl به max-w-3xl برای بزرگ‌تر شدن
          className="max-w-3xl"
        >
          {/* لیبل - بزرگ‌تر */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-[3px] bg-kardo-accent rounded-full" />
            <span className="text-sm md:text-base tracking-[0.3em] text-white/80 font-medium">
              CAREER AT KARDOONI STUDIOS
            </span>
          </div>

          {/* تیتر - بزرگ‌تر */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
            JOIN OUR<br />
            <span className="text-kardo-accent italic">CREATIVE TEAM</span>
          </h1>

          {/* پاراگراف - بزرگ‌تر */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            Be part of a passionate team building original worlds and high-quality visual content.
          </p>

          {/* راهنمای وضعیت - بزرگ‌تر */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 relative">
            {STATUS_LEGEND.map((status, i) => (
              <div key={i} className="flex items-start gap-3 relative sm:px-6 first:sm:pl-0 last:sm:pr-0">
                {/* خط عمودی نورانی */}
                {i !== STATUS_LEGEND.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                )}

                <div className={`w-4 h-4 rounded-full mt-1 shrink-0 ${status.color}`} />
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">{status.title}</h4>
                  <p className="text-white/50 text-xs md:text-sm leading-snug max-w-[200px]">{status.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}