import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://corvane-store.vercel.app"),
  title: { default: "Corvane | Commute and travel gear built for the in-between", template: "%s | Corvane" },
  description:
    "Weather-ready bags, outer layers and travel gear for city commuters and weekend travellers. Waxed canvas totes, packable rain shells, 36-hour bottles. Built for the in-between.",
  openGraph: {
    title: "Corvane | Built for the in-between",
    description: "Weather-ready bags, outer layers and travel gear for commuters and weekend travellers.",
    images: ["/hero.jpg"],
    siteName: "Corvane",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#1E4D43" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
