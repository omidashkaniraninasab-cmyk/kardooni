"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const LEADERS = [
  {
    name: "JAVAD KARDOONI",
    role: "Founder & CEO",
    description: "Founder and CEO of Kardooni Studios, with over 10 years of professional experience in animation and visual effects. He leads the studio's creative direction, production vision, and original IP development.",
    image: "/images/javad.jpg",
  },
  {
    name: "FORNOOSH SHAJARI",
    role: "Production Manager",
    description: "An experienced production management professional with international experience in visual effects production. She has managed and coordinated production workflows across various VFX projects, leading teams, managing schedules, and overseeing complex production and delivery pipelines.",
    image: "/images/fornoosh.jpg",
  },
];

export default function Leadership() {
  return (
   <section className="relative w-full py-16">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* عکس با گوشه‌های نارنجی */}
              <div className="relative w-40 h-56 md:w-48 md:h-72 shrink-0 rounded-2xl overflow-hidden border-2 border-kardo-accent/70">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              {/* متن */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                  {leader.name.split(" ")[0]}
                </h3>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white/90 mb-3">
                  {leader.name.split(" ")[1]}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* جداکننده عمودی وسط (فقط دسکتاپ) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-kardo-accent/60" />
        </div>
      </div>
    </section>
  );
}