"use client";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "ADDRESS",
    value: "Azatutyan Ave., Yerevan, Armenia",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "EMAIL",
    value: "kardoonistudios@gmail.com",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "PHONE",
    value: "+374 7777 86 20",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      // flex-col-reverse برای موبایل، lg:flex-col برای دسکتاپ
      className="w-full flex flex-col-reverse lg:flex-col"
    >
      {/* بخش پایین در موبایل / بالا در دسکتاپ: تیتر و متن */}
      <div>
        {/* لیبل */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[3px] bg-kardo-accent rounded-full" />
          <span className="text-sm tracking-[0.3em] text-white/80 font-medium">
            CONTACT US
          </span>
        </div>

        {/* تیتر */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
          GET IN <span className="text-kardo-accent">TOUCH</span>
        </h1>

        {/* پاراگراف */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mb-12">
          Have a project, collaboration idea, or inquiry? We'd love to hear from you.
        </p>
      </div>

      {/* بخش بالا در موبایل / پایین در دسکتاپ: اطلاعات تماس */}
      <div className="flex flex-col gap-0">
        {CONTACT_ITEMS.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-6 py-5">
              <div className="w-14 h-14 rounded-xl bg-kardo-accent/10 border border-kardo-accent/30 flex items-center justify-center text-kardo-accent shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs tracking-[0.25em] text-white/60 font-semibold mb-1">{item.label}</h4>
                <p className="text-white text-base md:text-lg">{item.value}</p>
              </div>
            </div>
            {/* خط جداکننده نورانی */}
            {i !== CONTACT_ITEMS.length - 1 && (
              <div 
                className="w-full h-[1px]"
                style={{
                  backgroundImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                  boxShadow: "0 0 10px rgba(255,255,255,0.15)"
                }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}