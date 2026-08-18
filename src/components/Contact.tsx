"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "webs",
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
      // Simulate network request milestone
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Pre-configured hooks for Supabase if user configures env variables later
      // import { createClient } from '@supabase/supabase-js'
      // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
      // const { error } = await supabase.from('proposals').insert([formData])
      
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "webs",
        description: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full py-20 px-6 md:px-12 bg-cream-brand"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-emerald-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            Get In Touch
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50">Configure Scope</span>
        </div>

        {/* Outer Form Container */}
        <div className={`${CLAY_CLASSES.cardCream} p-8 md:p-12 relative overflow-hidden`}>
          
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
                  <h3 className="font-outfit text-2xl font-black text-charcoal-brand uppercase">
                    PROPOSE A PROJECT
                  </h3>
                  <p className="font-inter text-xs text-charcoal-brand/60 mt-1">
                    Describe your required systems or creative motion specifications.
                  </p>
                </div>

                {/* Form Fields Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/60">
                      Your Name / Company *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Krishna Sweets"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/60">
                      Email Address *
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. contact@krishnasweets.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Form Fields Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/60">
                      Phone Number
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none`}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service-select" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/60">
                      Target Service Category *
                    </label>
                    <div className="relative">
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 ${CLAY_CLASSES.input} font-inter text-sm text-charcoal-brand focus:outline-none appearance-none cursor-pointer`}
                      >
                        <option value="webs">WEBS (Web Platforms / Dashboards)</option>
                        <option value="app">APP (Mobile / System setups)</option>
                        <option value="edits">EDITS (Motion Graphics / Video Production)</option>
                        <option value="hybrid">HYBRID (Combined Scope)</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-brand pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Form Fields Row 3: Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="desc-input" className="font-mono text-[10px] font-black uppercase tracking-wider text-charcoal-brand/60">
                    Project Description & Requirements *
                  </label>
                  <textarea
                    id="desc-input"
                    name="description"
                    required
                    rows={4}
                    placeholder="Briefly explain what you would like to build or edit (e.g. A library client log, a local delivery application, a video reel showcasing our workshop...)"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 ${CLAY_CLASSES.textarea} font-inter text-sm text-charcoal-brand placeholder-charcoal-brand/30 focus:outline-none resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-full">
                    {error}
                  </p>
                )}

                {/* Submit button */}
                <div className="pt-2 flex justify-start">
                  <Magnetic strength={0.2}>
                    <button
                      id="submit-proposal-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className={`${CLAY_CLASSES.btnCharcoal} inline-flex items-center justify-center gap-2 px-8 py-3.5 font-outfit font-black uppercase tracking-wider text-xs disabled:opacity-50 transition-all duration-150 cursor-pointer`}
                    >
                      {isSubmitting ? "TRANSMITTING..." : "SUBMIT PROPOSAL"}
                      <Send className="w-4.5 h-4.5" />
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-brand/10 border-2 border-emerald-brand flex items-center justify-center text-emerald-brand mb-2 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand uppercase tracking-tight">
                  Proposal Transmitted
                </h3>
                
                <p className="font-inter text-sm text-charcoal-brand/80 max-w-md mx-auto leading-relaxed">
                  Namaste! We have received your query. Dewansh or Aryan will audit your project specifications and connect back within 24 hours to initialize wireframes.
                </p>

                <Magnetic strength={0.3}>
                  <button
                    id="reset-form-btn"
                    onClick={() => setSubmitted(false)}
                    className={`${CLAY_CLASSES.btnMustard} mt-4 px-6 py-2.5 font-outfit text-xs font-black uppercase tracking-wider`}
                  >
                    Submit Another Query
                  </button>
                </Magnetic>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
