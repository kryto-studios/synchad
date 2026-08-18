"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "all",
    budget: "growth",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mqaeajld", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.description,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Failed to send message. Please try emailing synchad.studio@gmail.com directly.");
      }
    } catch (err) {
      setError("Something went wrong. Please email us directly at synchad.studio@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-emerald-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-brand">
                // START YOUR PROJECT
              </span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              Get In Touch
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
            DIRECT FOUNDER CONSULTATION
          </span>
        </div>

        {/* Reassurance Banner */}
        <div className="mb-8 p-5 bg-emerald-brand/10 border border-emerald-brand/30 rounded-2xl flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-brand flex-shrink-0" />
          <p className="font-inter text-xs sm:text-sm text-charcoal-brand font-medium">
            <strong className="text-emerald-brand">No complicated sales calls.</strong> Tell us what you're trying to build, and we'll reply within 24 hours with a clear proposed scope, timeline, and fixed quote.
          </p>
        </div>

        {/* Outer Form Container */}
        <div className={`${CLAY_CLASSES.cardCream} p-7 sm:p-10 md:p-12 relative overflow-hidden rounded-[32px] border-2 border-charcoal-brand/20 shadow-xl`}>
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="text-left border-b border-dashed border-charcoal-brand/15 pb-4">
                  <h3 className="font-outfit text-2xl sm:text-3xl font-black text-charcoal-brand uppercase leading-tight">
                    LET'S BUILD SOMETHING THAT MOVES YOUR BUSINESS FORWARD.
                  </h3>
                </div>

                {/* Form Fields Row 1: Name & Business */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      Your Full Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dewansh Chatterjee"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none rounded-xl`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="business-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      Business / Brand Name *
                    </label>
                    <input
                      id="business-input"
                      type="text"
                      name="business"
                      required
                      placeholder="e.g. Krishna Sweets / Kryto Studio"
                      value={formData.business}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none rounded-xl`}
                    />
                  </div>
                </div>

                {/* Form Fields Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      Email Address *
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none rounded-xl`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none rounded-xl`}
                    />
                  </div>
                </div>

                {/* Form Fields Row 3: Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service-select" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      Service Needed *
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand focus:outline-none cursor-pointer rounded-xl`}
                    >
                      <option value="all">BUILD + CREATE + GROW (Full Growth System)</option>
                      <option value="build">BUILD (Web Development & Systems)</option>
                      <option value="create">CREATE (Video Editing & Visual Media)</option>
                      <option value="grow">GROW (Marketing & Social Strategy)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget-select" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget-select"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand focus:outline-none cursor-pointer rounded-xl`}
                    >
                      <option value="startup">Startup Tier (₹19,999)</option>
                      <option value="growth">Growth System Tier (₹49,999)</option>
                      <option value="enterprise">Enterprise Custom Scope</option>
                    </select>
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="desc-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/70">
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="desc-input"
                    name="description"
                    rows={4}
                    required
                    placeholder="Tell us what you're trying to build or achieve (e.g., custom website for our store, YouTube video edits, social media campaign...)"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 ${CLAY_CLASSES.textarea} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none resize-none rounded-xl`}
                  />
                </div>

                {error && (
                  <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-xl">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[10px] text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
                    ✓ DIRECT TO DEWANSH & ARYAN
                  </span>
                  
                  <Magnetic strength={0.2}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${CLAY_CLASSES.btnEmerald} w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 font-outfit font-black uppercase tracking-wider text-sm disabled:opacity-50 transition-all duration-150 cursor-pointer shadow-lg rounded-xl`}
                    >
                      <span>{isSubmitting ? "Sending..." : "Start Your Project"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-brand text-cream-brand rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand uppercase">
                  Project Request Received!
                </h3>
                <p className="font-inter text-sm text-charcoal-brand/80 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you for reaching out. Founders Dewansh & Aryan will review your requirements and reply via WhatsApp/email within 24 hours with a proposed scope & quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={`${CLAY_CLASSES.btnMustard} mt-4 px-7 py-3 font-outfit text-xs font-black uppercase tracking-wider rounded-xl shadow-md`}
                >
                  Send Another Project Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
