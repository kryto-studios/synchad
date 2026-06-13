"use client";

import { MessageSquare } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function WhatsAppFloat() {
  // Replace with synchAD official phone number or generic wa.me link
  const whatsappUrl = "https://wa.me/9182234408123"; // Using the phone number from the portfolio image reference

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <Magnetic strength={0.4}>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 ${CLAY_CLASSES.btnEmerald} text-cream-brand hover:scale-105 group`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          aria-label="Chat with synchAD on WhatsApp"
        >
          {/* Pulse Dot Indicator (online) */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mustard-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-mustard-brand"></span>
          </span>
          
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </motion.a>
      </Magnetic>
    </div>
  );
}
