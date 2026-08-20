import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import GoogleOneTap from "@/components/GoogleOneTap";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-base",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-base",
});

const bacley = localFont({
  src: "./fonts/BacleyDEMO.otf",
  variable: "--font-bacley-base",
});

const gued = localFont({
  src: "./fonts/Gued.otf",
  variable: "--font-gued-base",
});

export const metadata: Metadata = {
  title: "synchAD | WEB • APP • EDITS — Digitalizing The Local",
  description: "Official portfolio of synchAD. Co-founded by Dewansh Chatterjee & Aryan Gupta. Premium full-stack web systems, custom mobile apps, and post-production creative/motion asset creation. Digitalizing The Local.",
  keywords: ["synchAD", "Kryto Studios", "Dewansh Chatterjee", "Aryan Gupta", "Web Development", "App Development", "Video Editing", "Motion Graphics", "Digitalizing The Local"],
  authors: [{ name: "Dewansh Chatterjee" }, { name: "Aryan Gupta" }],
  openGraph: {
    title: "synchAD | WEB • APP • EDITS",
    description: "Digitalizing The Local — Custom full-stack platforms, client apps, and high-fidelity motion graphic assets by Dewansh Chatterjee & Aryan Gupta.",
    type: "website",
    url: "https://synchad.com",
    images: [{ url: "/synchAD.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${bacley.variable} ${gued.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-brand text-charcoal-brand custom-cursor-active selection:bg-mustard-brand selection:text-charcoal-brand overflow-x-hidden">
        {/* Paper Grain Overlay */}
        <div className="paper-texture" aria-hidden="true" />
        
        {/* Custom Custom Cursor */}
        <CustomCursor />
        
        {/* Floating WhatsApp Shortcut */}
        <WhatsAppFloat />

        {/* Google 1-Tap Auto Visitor Lead Capture */}
        <GoogleOneTap />

        {/* Microsoft Clarity Free Heatmaps & Session Recording */}
        <Script id="microsoft-clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y58pu4jyul");
          `}
        </Script>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
