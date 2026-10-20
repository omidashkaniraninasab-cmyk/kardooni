import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Kardooni",
  description: "How Kardooni collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <section className="px-6 lg:px-8 pb-32">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.02em] mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm mb-16">
              Last updated: January 2025
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-white/60 leading-relaxed">
                  When you contact us through our website, we collect the information you provide directly — your name, email address, company, and project details. We use this information solely to respond to your inquiry and discuss potential collaboration.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-white/60 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white/60 leading-relaxed space-y-2 pl-4">
                  <li>Respond to your inquiries and project requests</li>
                  <li>Communicate about ongoing or potential projects</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
                <p className="text-white/60 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law or to protect our rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">4. Cookies</h2>
                <p className="text-white/60 leading-relaxed">
                  Our website uses essential cookies for basic functionality. We do not use tracking cookies for advertising purposes without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-white/60 leading-relaxed">
                  You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at{" "}
                  <a href="mailto:hello@kardooni.com" className="text-white hover:text-white/70 underline">
                    hello@kardooni.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">6. Contact</h2>
                <p className="text-white/60 leading-relaxed">
                  For questions about this Privacy Policy, contact us at{" "}
                  <a href="mailto:hello@kardooni.com" className="text-white hover:text-white/70 underline">
                    hello@kardooni.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}