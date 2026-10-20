import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kardooni.com"),
  title: {
    default: "Kardooni — We make the impossible, visible.",
    template: "%s | Kardooni",
  },
  description:
    "Kardooni is a cinematic animation and visual effects studio crafting worlds for film, television, and beyond.",
  keywords: [
    "VFX studio",
    "Animation studio",
    "Visual Effects",
    "Motion Design",
    "Cinematic Animation",
    "Kardooni",
    "Tehran VFX",
  ],
  authors: [{ name: "Kardooni" }],
  creator: "Kardooni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kardooni.com",
    siteName: "Kardooni",
    title: "Kardooni — We make the impossible, visible.",
    description:
      "A cinematic animation and visual effects studio crafting worlds for film, television, and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kardooni — We make the impossible, visible.",
    description:
      "A cinematic animation and visual effects studio crafting worlds for film, television, and beyond.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}