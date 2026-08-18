import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  title: "synchAD | Digitalizing The Local — Web Systems, Creative Media & Digital Marketing",
  description: "synchAD is an integrated digital growth studio co-founded by Dewansh Chatterjee & Aryan Gupta. We build custom websites, production-grade web apps, high-retention video edits, and targeted marketing campaigns for local businesses.",
  keywords: [
    "synchAD",
    "Digitalizing The Local",
    "Dewansh Chatterjee",
    "Aryan Gupta",
    "Web Development",
    "Custom Software",
    "Video Editing",
    "Motion Graphics",
    "Digital Marketing",
    "Social Media Marketing",
    "Meta Ads",
    "Local Business Digitalization"
  ],
  authors: [{ name: "Dewansh Chatterjee" }, { name: "Aryan Gupta" }],
  metadataBase: new URL("https://synchad.vercel.app"),
  openGraph: {
    title: "synchAD | Digitalizing The Local",
    description: "Custom web development, high-retention video editing, and digital growth marketing under one roof. Co-founded by Dewansh Chatterjee & Aryan Gupta.",
    type: "website",
    url: "https://synchad.vercel.app",
    siteName: "synchAD",
    images: [
      {
        url: "/synchAD.png",
        width: 1200,
        height: 630,
        alt: "synchAD — Digitalizing The Local",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "synchAD | Digitalizing The Local",
    description: "Build custom web software, create high-retention video content, and scale digital marketing with synchAD.",
    images: ["/synchAD.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "synchAD",
    "url": "https://synchad.vercel.app",
    "logo": "https://synchad.vercel.app/logo.png",
    "image": "https://synchad.vercel.app/synchAD.png",
    "description": "Digital growth partner for local businesses — combining custom web systems development, high-retention creative media production, and digital marketing campaigns.",
    "founder": [
      {
        "@type": "Person",
        "name": "Dewansh Chatterjee",
        "jobTitle": "Co-Founder & Frontend Director"
      },
      {
        "@type": "Person",
        "name": "Aryan Gupta",
        "jobTitle": "Co-Founder & Systems Architect"
      }
    ],
    "serviceType": [
      "Web Development",
      "Custom Software Development",
      "Video Editing & Motion Graphics",
      "Digital Marketing & Social Media Management"
    ],
    "email": "synchad.studio@gmail.com",
    "telephone": "+91 82234 40812",
    "sameAs": [
      "https://instagram.com/synch.ad"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${bacley.variable} ${gued.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream-brand text-charcoal-brand custom-cursor-active selection:bg-mustard-brand selection:text-charcoal-brand overflow-x-hidden">
        {/* Paper Grain Overlay */}
        <div className="paper-texture" aria-hidden="true" />
        
        {/* Custom Custom Cursor */}
        <CustomCursor />
        
        {/* Floating WhatsApp Shortcut */}
        <WhatsAppFloat />

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
