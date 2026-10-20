import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Kardooni",
  description: "Terms and conditions for using the Kardooni website and services.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-white/40 text-sm mb-16">
              Last updated: January 2025
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-white/60 leading-relaxed">
                  By accessing and using the Kardooni website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">2. Use of Website</h2>
                <p className="text-white/60 leading-relaxed mb-3">
                  You agree to use this website only for lawful purposes. You may not:
                </p>
                <ul className="list-disc list-inside text-white/60 leading-relaxed space-y-2 pl-4">
                  <li>Use the site in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the site</li>
                  <li>Interfere with the proper functioning of the site</li>
                  <li>Copy, reproduce, or redistribute content without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p className="text-white/60 leading-relaxed">
                  All content on this website — including text, images, videos, logos, and design — is the property of Kardooni and is protected by copyright and other intellectual property laws. You may not use our content without explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">4. Project Engagements</h2>
                <p className="text-white/60 leading-relaxed">
                  Any project engagement between you and Kardooni is governed by a separate written agreement. These Terms of Service do not constitute a project agreement.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
                <p className="text-white/60 leading-relaxed">
                  This website is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee that the site will be error-free or uninterrupted.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-white/60 leading-relaxed">
                  Kardooni shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
                <p className="text-white/60 leading-relaxed">
                  We may update these Terms from time to time. Changes will be posted on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">8. Contact</h2>
                <p className="text-white/60 leading-relaxed">
                  For questions about these Terms, contact us at{" "}
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