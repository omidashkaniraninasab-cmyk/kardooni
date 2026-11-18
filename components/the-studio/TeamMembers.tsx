"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const MEMBERS = [
  { name: "Mohammad Javad Kardooni", role: "Founder & CEO", image: "/images/Javad Kardooni Founder&CEO.jpg" },
  { name: "Farnoosh Shajari", role: "Production Manager", image: "/images/Farnoosh Shajari Production Manager.jpg" },
  { name: "Ako Ghader Marzi", role: "Environment Artist", image: "/images/Ako Ghader marzi Environment Artist.jpg" },
  { name: "Ali Ghaheri", role: "3D Modeler", image: "/images/Ali Ghaheri 3d Modeler.jpg" },
  { name: "Ali Sadeghi", role: "Artist", image: "/images/Ali Sadeghi Artist.jpg" },
  { name: "Azarakhsh Raisi", role: "Character Designer", image: "/images/Azarakhsh Raisi Character Designer.jpg" },
  { name: "Behnam Ajirnia", role: "Character Modeler", image: "/images/Behnam Ajirnia Character Modeler.jpg" },
  { name: "Farhang Taghavi", role: "Texture / Lookdev / Lighter", image: "/images/Farhang Taghavi Texture-Lookedev Lighter.jpg" },
  { name: "Farshid Karimzadeh", role: "Animator", image: "/images/Farshid Karimzadeh Animator.jpg" },
  { name: "Hadi Mirzadi", role: "Rigger", image: "/images/Hadi Mirzadi Rigger.jpg" },
  { name: "Kooshyar Mahmoodi", role: "Director", image: "/images/Kooshyar Mahmoodi Director.jpg" },
  { name: "Mina Babapoor", role: "Animator", image: "/images/Mina Babapoor Animator.jpg" },
  { name: "Mohammad Afshari", role: "Environment Artist", image: "/images/Mohammad Afshari Environment Artist.jpg" },
  { name: "Mohammad Hossein Arefzadeh", role: "Character Modeler", image: "/images/Mohammad Hossein Arefzadeh Character Modeler.jpg" },
  { name: "Mohammad Javad Naraqi", role: "Animator", image: "/images/Mohammad javad Naraqi Animator.jpg" },
  { name: "Mohammad Mahdi Khezri", role: "Animator", image: "/images/Mohammad Mahdi Khezri Animator.jpg" },
  { name: "Sahar Mohammadi", role: "Environment Modeler", image: "/images/Sahar Mohammadi Environment Modeler.jpg" },
  { name: "Shahram Dinarvand", role: "Character Artist", image: "/images/Shahram Dinarvand Character Artist.jpg" },
  { name: "Shayan Afshar", role: "Environment Modeler", image: "/images/Shayan Afshar Environment Modeler.jpg" },
  { name: "Shohre Dabbaghian", role: "CFX Artist", image: "/images/Shohre Dabbaghian CFX Artist.jpg" },
  { name: "Taha Faraji", role: "FX & TD", image: "/images/Taha Faraji FX&TD.jpg" },
];

export default function TeamMembers() {
  return (
    <section className="relative w-full py-16">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-12"
        >
          OUR <span className="text-kardo-accent italic">TEAM</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* دایره عکس با افکت هاور */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  borderColor: "rgba(232,119,34,1)",
                  boxShadow: "0 0 25px rgba(232,119,34,0.6)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-kardo-accent/60 mb-3"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="150px"
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
              <h4 className="text-sm md:text-base font-bold tracking-wide group-hover:text-kardo-accent transition-colors duration-300">
                {member.name}
              </h4>
              <p className="text-xs md:text-sm text-white/60 tracking-wide">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}