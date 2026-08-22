import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import GoogleOneTap from "@/components/GoogleOneTap";
import LocalSEO from "@/components/LocalSEO";
import Navbar from "@/components/Navbar";
import SupabaseSyncProvider from "@/components/SupabaseSyncProvider";

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
  title: "synchAD | Web & App Developers in Ambikapur, Surguja — Digitalizing The Local",
  description: "Top-rated Web Development & Custom Software Agency in Ambikapur, Surguja, Chhattisgarh. Co-founded by Dewansh Chatterjee & Aryan Gupta. High-converting landing sites, custom ERP web applications, and motion edits.",
  keywords: [
    "synchAD",
    "Website Developers Near Me",
    "Web Development Agency Ambikapur",
    "Best Web Developer in Ambikapur",
    "App Developers Surguja",
    "Website Developers Chhattisgarh",
    "Dewansh Chatterjee",
    "Aryan Gupta",
    "Library Management Software Ambikapur",
    "Digitalizing The Local"
  ],
  authors: [{ name: "Dewansh Chatterjee" }, { name: "Aryan Gupta" }],
  verification: {
    google: "WwpCXfiYdIaHH5uXCAmLB1H6PInsV1ZwBJPT-iPd4MQ",
  },
  icons: {
    icon: [
      { url: "/synchAD.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/synchAD.png",
    apple: "/synchAD.png",
  },

  openGraph: {
    title: "synchAD | Web & App Developers in Ambikapur, Surguja",
    description: "Digitalizing The Local — Custom full-stack platforms, client apps, and high-fidelity motion graphic assets by Dewansh Chatterjee & Aryan Gupta in Ambikapur.",
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

        {/* Local SEO JSON-LD Structured Data Schema */}
        <LocalSEO />

        {/* Supabase Auto Database Sync */}
        <SupabaseSyncProvider />

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

        {/* Google Analytics 4 (GA4) Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TC77Q4T18E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TC77Q4T18E', {
              page_path: window.location.pathname,
            });
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
