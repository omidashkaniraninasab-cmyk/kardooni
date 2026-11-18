"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full flex flex-col"
    >
      {/* لوگوی بزرگ کاردونی */}
      <div className="relative w-full flex justify-center mb-10 mix-blend-screen">
        <Image
          src="/images/logo-kardooni.png"
          alt="Kardooni Studios"
          width={1200}
          height={400}
          className="w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_50px_rgba(232,119,34,0.6)]"
        />
      </div>

      {/* فرم - با mt-40 خیلی پایین‌تر اومد */}
      <form className="w-full flex flex-col gap-5 mt-40">
        {/* ردیف اول: Name و Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField icon={<UserIcon />} placeholder="Your Name" type="text" />
          <InputField icon={<MailIcon />} placeholder="Your Email" type="email" />
        </div>

        {/* Subject */}
        <InputField icon={<TagIcon />} placeholder="Subject" type="text" />

        {/* Message */}
        <div className="relative w-full">
          <div className="absolute left-4 top-4 text-white/50">
            <MessageIcon />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-transparent border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-kardo-accent transition-colors resize-none"
            style={{
              borderImageSource: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              borderImageSlice: 1,
              boxShadow: "0 0 15px rgba(255,255,255,0.05)"
            }}
          />
        </div>

        {/* دکمه ارسال */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="group flex items-center gap-3 px-8 py-3 border-2 border-kardo-accent bg-kardo-accent/10 hover:bg-kardo-accent text-white hover:text-black rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(232,119,34,0.3)] hover:shadow-[0_0_30px_rgba(232,119,34,0.6)]"
          >
            <SendIcon />
            <span className="text-sm font-bold tracking-widest">SEND MESSAGE</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function InputField({ icon, placeholder, type }: { icon: React.ReactNode; placeholder: string; type: string }) {
  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/20 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:border-kardo-accent transition-colors"
        style={{
          borderImageSource: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          borderImageSlice: 1,
          boxShadow: "0 0 15px rgba(255,255,255,0.05)"
        }}
      />
    </div>
  );
}

// آیکون‌ها (بدون تغییر)
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}