import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
      <h1 className="text-7xl font-extrabold mb-4 text-kardo-accent">404</h1>
      <h2 className="text-2xl font-semibold mb-8 tracking-widest">PAGE NOT FOUND</h2>
      <Link href="/" className="px-8 py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm font-semibold">
        RETURN HOME
      </Link>
    </div>
  );
}