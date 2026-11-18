"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TEAM_IMAGES = [
  { src: "/images/team-1.jpg", alt: "Team working", className: "col-span-2 row-span-2" },
  { src: "/images/team-2.jpg", alt: "Team working", className: "col-span-1 row-span-1" },
  { src: "/images/team-3.jpg", alt: "Team working", className: "col-span-1 row-span-1" },
  { src: "/images/team-4.jpg", alt: "Team working", className: "col-span-1 row-span-1" },
  { src: "/images/team-5.jpg", alt: "Team working", className: "col-span-1 row-span-1" },
  { src: "/images/team-6.jpg", alt: "Team working", className: "col-span-1 row-span-1" },
];

export default function TeamGallery() {
  return (
    <section className="relative w-full py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* عکس بزرگ چپ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative col-span-2 md:row-span-2 aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image
            src="/images/team-1.jpg"
            alt="Team working"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* عکس‌های کوچک راست */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image src="/images/team-2.jpg" alt="Team working" fill sizes="30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image src="/images/team-3.jpg" alt="Team working" fill sizes="30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>

        {/* سه عکس پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image src="/images/team-4.jpg" alt="Team working" fill sizes="30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image src="/images/team-5.jpg" alt="Team working" fill sizes="30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-kardo-accent/60 group"
        >
          <Image src="/images/team-6.jpg" alt="Team working" fill sizes="30vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>
      </div>
    </section>
  );
}