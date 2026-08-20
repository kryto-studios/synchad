"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { addEnquiry } from "@/lib/store";
import { Sparkles, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to decode JWT payload without external library
function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export default function GoogleOneTap() {
  const [capturedUser, setCapturedUser] = useState<{ name: string; email: string; picture?: string } | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Environment Google Client ID (Only initialized if provided in .env / Vercel env)
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const handleCredentialResponse = (response: any) => {
    if (!response.credential) return;

    const payload = parseJwt(response.credential);
    if (!payload || !payload.email) return;

    const name = payload.name || "Google Visitor";
    const email = payload.email;
    const picture = payload.picture;

    setCapturedUser({ name, email, picture });

    // Check if already captured in session to prevent duplicate entries
    const sessionCaptured = sessionStorage.getItem(`google_captured_${email}`);
    if (!sessionCaptured) {
      sessionStorage.setItem(`google_captured_${email}`, "true");

      // Auto-log Enquiry into global store & admin inbox
      addEnquiry({
        type: "contact_proposal",
        clientName: name,
        email: email,
        phone: "Google Authenticated Visitor",
        serviceOrDesk: "AUTO GOOGLE ONE-TAP LEAD 🟢",
        details: `Auto-captured visitor from Google One-Tap. Verified Gmail: ${email}. Name: ${name}`,
      });
    }
  };

  const initializeGoogleOneTap = () => {
    if (!googleClientId || typeof window === "undefined" || !(window as any).google) return;

    try {
      (window as any).google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCredentialResponse,
        auto_select: true,
        cancel_on_tap_outside: false,
      });

      (window as any).google.accounts.id.prompt();
    } catch (err) {
      console.warn("Google One-Tap initialization error:", err);
    }
  };

  useEffect(() => {
    if (scriptLoaded && googleClientId) {
      initializeGoogleOneTap();
    }
  }, [scriptLoaded, googleClientId]);

  // Do not render script if no Google Client ID is configured
  if (!googleClientId) return null;

  return (
    <>
      {/* Google Identity Services SDK Script */}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Auto-Captured Welcome Banner Notification */}
      <AnimatePresence>
        {capturedUser && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-charcoal-brand text-cream-brand border border-white/20 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            {capturedUser.picture ? (
              <img
                src={capturedUser.picture}
                alt={capturedUser.name}
                className="w-10 h-10 rounded-full border border-mustard-brand"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-emerald-brand text-cream-brand flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            )}
            <div className="flex-grow pr-2">
              <div className="flex items-center gap-1.5 text-mustard-brand font-mono text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Verified Visitor Captured</span>
              </div>
              <p className="font-outfit text-sm font-bold text-cream-brand truncate">
                Welcome, {capturedUser.name}!
              </p>
              <p className="font-mono text-[10px] text-cream-brand/60 truncate">
                {capturedUser.email}
              </p>
            </div>
            <button
              onClick={() => setCapturedUser(null)}
              className="p-1 text-cream-brand/50 hover:text-cream-brand transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
