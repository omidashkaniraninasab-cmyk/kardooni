import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <div className="font-display text-[120px] md:text-[200px] font-bold text-white/10 leading-none mb-4">
            404
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Page not found
          </h1>
          <p className="text-white/50 text-base md:text-lg mb-12 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 border border-white/25 text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}