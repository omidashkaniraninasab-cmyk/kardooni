"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <section className="px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6"
              >
                Contact
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-[-0.02em] mb-8"
              >
                Let&apos;s make something impossible.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6 mt-12"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:hello@kardooni.com"
                    className="text-white hover:text-white/70 transition-colors text-lg"
                  >
                    hello@kardooni.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Studio
                  </div>
                  <p className="text-white/70">Tehran, Iran</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Follow
                  </div>
                  <div className="flex gap-6">
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Instagram</a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Vimeo</a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">LinkedIn</a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              {sent ? (
                <div className="border border-white/10 p-12 text-center">
                  <div className="text-3xl mb-4">✓</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Message sent
                  </h3>
                  <p className="text-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}