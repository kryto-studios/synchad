"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  UserCheck,
  CheckCircle2,
  Lock,
  Clock,
  Send,
  Eye,
  Coffee,
  Hotel,
  Car,
  MessageSquareCheck
} from "lucide-react";
import { CLAY_CLASSES } from "./ClayStyles";
import {
  CompletedProject,
  OngoingProject,
  getCompletedProjects,
  getOngoingProjects,
  addEnquiry,
  STORE_EVENT_NAME
} from "@/lib/store";

export default function Projects() {
  const [completedProjects, setCompletedProjects] = useState<CompletedProject[]>([]);
  const [ongoingProjects, setOngoingProjects] = useState<OngoingProject[]>([]);

  const [activeTab, setActiveTab] = useState<"all" | "landing" | "software" | "ongoing">("all");
  const [selectedProject, setSelectedProject] = useState<CompletedProject | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Quick Enquiry Demo Modal State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryProjectName, setEnquiryProjectName] = useState("");
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: "", phone: "", deskType: "Quiet Study Desk", notes: "" });

  useEffect(() => {
    const loadProjects = () => {
      setCompletedProjects(getCompletedProjects());
      setOngoingProjects(getOngoingProjects());
    };

    loadProjects();
    window.addEventListener(STORE_EVENT_NAME, loadProjects);
    return () => window.removeEventListener(STORE_EVENT_NAME, loadProjects);
  }, []);

  const filteredProjects = completedProjects.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  const handleOpenModal = (project: CompletedProject) => {
    setSelectedProject(project);
    setActiveScreenshotIdx(0);
  };

  const handleOpenEnquiryDemo = (projectName: string, e: MouseEvent) => {
    e.stopPropagation();
    setEnquiryProjectName(projectName);
    setEnquirySubmitted(false);
    setEnquiryForm({ name: "", phone: "", deskType: "Quiet Study Desk", notes: "" });
    setEnquiryModalOpen(true);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add enquiry to store so it shows up live in Admin Panel (/admin)
    addEnquiry({
      type: "project_enquiry",
      clientName: enquiryForm.name,
      phone: enquiryForm.phone,
      serviceOrDesk: `${enquiryProjectName} - ${enquiryForm.deskType}`,
      details: enquiryForm.notes ? `Shift/Timings: ${enquiryForm.notes}` : "Seat enquiry demo submission",
    });

    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquiryModalOpen(false);
    }, 2200);
  };

  return (
    <section id="projects" className="w-full py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-[#faf6ef] relative overflow-hidden">
      {/* Decorative background glow shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-mustard-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-brand/5 border border-charcoal-brand/15 text-charcoal-brand font-mono text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-mustard-brand" />
            <span>Proven Digital Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-brand tracking-tight max-w-3xl"
          >
            Our Delivered Projects &amp; <span className="text-mustard-brand underline decoration-charcoal-brand/20">Client Showcase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-charcoal-brand/70 text-base sm:text-lg max-w-2xl mt-4"
          >
            Explore real-world landing pages, working enquiry engines, and custom application software engineered for our clients.
          </motion.p>

          {/* Filter Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-2.5 mt-8 p-1.5 rounded-full bg-white/80 border border-charcoal-brand/10 shadow-sm backdrop-blur-md"
          >
            {[
              { key: "all", label: "All Delivered Work" },
              { key: "landing", label: "Landing Pages & Enquiries" },
              { key: "software", label: "Application Software" },
              { key: "ongoing", label: "In The Lab (Ongoing 🧪)" },
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={[
                    "px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer",
                    isActive
                      ? `${CLAY_CLASSES.btnCharcoal} text-cream-brand scale-105`
                      : "text-charcoal-brand/70 hover:text-charcoal-brand hover:bg-charcoal-brand/5",
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Completed Projects Grid (Shown if activeTab != 'ongoing') */}
        {activeTab !== "ongoing" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenModal={() => handleOpenModal(project)}
                onOpenEnquiryDemo={(e) => handleOpenEnquiryDemo(project.title, e)}
              />
            ))}
          </div>
        )}

        {/* Ongoing / Confidential Pipelines Section (Shown if activeTab === 'all' or 'ongoing') */}
        {(activeTab === "all" || activeTab === "ongoing") && (
          <div className="mt-12 pt-12 border-t border-charcoal-brand/15">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-mustard-brand font-bold">
                  Confidential Development Pipeline
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-charcoal-brand">
                  In The Lab: Ongoing &amp; Upcoming Software
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-charcoal-brand text-cream-brand font-mono text-xs font-bold tracking-wide">
                Under NDA &amp; Active Build ⚡
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ongoingProjects.map((op, idx) => {
                let IconComponent = Coffee;
                if (op.id.includes("hotel")) IconComponent = Hotel;
                if (op.id.includes("car")) IconComponent = Car;

                return (
                  <motion.div
                    key={op.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between relative group hover:border-mustard-brand/40`}
                  >
                    <div>
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-mustard-brand/15 border border-mustard-brand/30 flex items-center justify-center text-charcoal-brand">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-charcoal-brand/10 text-charcoal-brand">
                          {op.badge}
                        </span>
                      </div>

                      {/* Title & Category */}
                      <h4 className="font-outfit text-xl font-extrabold text-charcoal-brand group-hover:text-mustard-brand transition-colors">
                        {op.title}
                      </h4>
                      <p className="font-mono text-xs text-charcoal-brand/60 font-semibold mt-1">
                        {op.category}
                      </p>

                      <p className="font-inter text-xs text-charcoal-brand/75 mt-3 leading-relaxed">
                        {op.description}
                      </p>

                      {/* Key Features List */}
                      {op.features && op.features.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {op.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-inter text-charcoal-brand/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Progress Bar & CTA */}
                    <div className="mt-6 pt-4 border-t border-charcoal-brand/10">
                      <div className="flex items-center justify-between text-xs font-mono text-charcoal-brand/70 mb-1.5">
                        <span>Development Progress</span>
                        <span className="font-bold text-charcoal-brand">{op.progress}%</span>
                      </div>
                      <div className="w-full bg-charcoal-brand/10 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-mustard-brand to-emerald-brand h-full rounded-full transition-all duration-1000"
                          style={{ width: `${op.progress}%` }}
                        />
                      </div>

                      <Link
                        href="#contact"
                        className="mt-4 w-full py-2 flex items-center justify-center gap-2 rounded-full bg-charcoal-brand/5 hover:bg-charcoal-brand hover:text-cream-brand transition-all text-xs font-bold text-charcoal-brand"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Pre-Order Similar Solution</span>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* MULTI-SCREENSHOT LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-brand/75 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative flex flex-col gap-6 shadow-2xl border-2 border-white/50`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-brand/10 hover:bg-charcoal-brand hover:text-cream-brand transition-all text-charcoal-brand"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="pr-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-mustard-brand/20 border border-mustard-brand/40 text-charcoal-brand font-mono text-xs font-bold uppercase tracking-wider">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="font-outfit text-2xl sm:text-4xl font-extrabold text-charcoal-brand mt-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-charcoal-brand/60 font-semibold mt-1">
                  Client / Owner: <span className="text-charcoal-brand font-bold">{selectedProject.owner}</span> ({selectedProject.role})
                </p>
              </div>

              {/* Multi-Screenshot Gallery Slider */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-video bg-charcoal-brand/90 rounded-2xl overflow-hidden border border-charcoal-brand/20 shadow-inner flex items-center justify-center group">
                    <Image
                      src={selectedProject.screenshots[activeScreenshotIdx]?.src || selectedProject.thumbnail}
                      alt={selectedProject.screenshots[activeScreenshotIdx]?.title || selectedProject.title}
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Navigation Arrows */}
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveScreenshotIdx((prev) =>
                              prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-brand/70 hover:bg-mustard-brand text-white hover:text-charcoal-brand transition-all backdrop-blur-sm"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveScreenshotIdx((prev) =>
                              prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-brand/70 hover:bg-mustard-brand text-white hover:text-charcoal-brand transition-all backdrop-blur-sm"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-charcoal-brand via-charcoal-brand/80 to-transparent text-cream-brand flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-mustard-brand font-bold">
                          Screenshot {activeScreenshotIdx + 1} of {selectedProject.screenshots.length}
                        </span>
                        <p className="font-inter text-xs text-cream-brand/90 mt-0.5">
                          {selectedProject.screenshots[activeScreenshotIdx]?.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Thumbnails Navigation */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((screen, idx) => (
                      <button
                        key={screen.id || idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={[
                          "relative flex-1 min-w-[120px] h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer",
                          activeScreenshotIdx === idx
                            ? "border-mustard-brand ring-2 ring-mustard-brand/50 scale-105"
                            : "border-charcoal-brand/10 opacity-70 hover:opacity-100",
                        ].join(" ")}
                      >
                        <Image src={screen.src} alt={screen.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-charcoal-brand/30 flex items-end p-1.5">
                          <span className="font-mono text-[10px] text-white font-bold truncate">
                            {screen.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Description & Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-charcoal-brand/10">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-outfit text-lg font-bold text-charcoal-brand">
                    About Project &amp; Solution
                  </h4>
                  <p className="font-inter text-sm text-charcoal-brand/80 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <h5 className="font-outfit text-sm font-bold text-charcoal-brand pt-2">
                    Key Features Delivered:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-inter text-charcoal-brand/85">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Action Side Card */}
                <div className="flex flex-col justify-between gap-4 p-5 rounded-2xl bg-charcoal-brand/5 border border-charcoal-brand/10">
                  <div>
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal-brand/70 mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white text-charcoal-brand border border-charcoal-brand/15 text-xs font-mono font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${CLAY_CLASSES.btnEmerald} w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md`}
                      >
                        <ExternalLink className="w-4 h-4 text-mustard-brand" />
                        <span>Visit Live Website 🌐</span>
                      </a>
                    )}

                    {selectedProject.hasEnquiryDemo && (
                      <button
                        onClick={(e) => {
                          const pName = selectedProject.title;
                          setSelectedProject(null);
                          handleOpenEnquiryDemo(pName, e);
                        }}
                        className={`${CLAY_CLASSES.btnMustard} w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2`}
                      >
                        <MessageSquareCheck className="w-4 h-4" />
                        <span>Try Working Enquiry Demo</span>
                      </button>
                    )}

                    <Link
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className={`${CLAY_CLASSES.btnCharcoal} w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2`}
                    >
                      <Send className="w-4 h-4" />
                      <span>Get Similar Project Built</span>
                    </Link>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WORKING ENQUIRY DEMO MODAL */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-brand/80 backdrop-blur-md"
            onClick={() => setEnquiryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-md p-6 sm:p-8 relative shadow-2xl`}
            >
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-charcoal-brand/10 text-charcoal-brand"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">
                  Live Enquiry Engine Demo
                </span>
                <h3 className="font-outfit text-2xl font-bold text-charcoal-brand mt-2">
                  Enquire for {enquiryProjectName}
                </h3>
                <p className="font-inter text-xs text-charcoal-brand/70 mt-1">
                  Test the exact instant enquiry flow we integrated for this client. Submissions log live into Admin Panel.
                </p>
              </div>

              {enquirySubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-outfit text-xl font-bold text-charcoal-brand">
                    Enquiry Logged in Admin Panel!
                  </h4>
                  <p className="font-inter text-xs text-charcoal-brand/70 max-w-xs">
                    This enquiry is now live in the executive admin dashboard inbox.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Student / Visitor Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      WhatsApp / Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Preferred Desk / Seat Type
                    </label>
                    <select
                      value={enquiryForm.deskType}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, deskType: e.target.value })}
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand outline-none`}
                    >
                      <option value="Quiet Study Desk">Quiet Single Study Desk</option>
                      <option value="Discussion Pod">Group Discussion Pod</option>
                      <option value="AC Executive Cabin">AC Executive Cabin Desk</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Shift / Timings Needed
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Morning Shift (8 AM - 2 PM)"
                      value={enquiryForm.notes}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${CLAY_CLASSES.btnMustard} w-full py-3 text-xs font-bold uppercase tracking-wider mt-2 cursor-pointer`}
                  >
                    Submit Live Test Enquiry
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// INDIVIDUAL PROJECT CARD COMPONENT WITH MOUSE PARALLAX TILT
function ProjectCard({
  project,
  index,
  onOpenModal,
  onOpenEnquiryDemo
}: {
  project: CompletedProject;
  index: number;
  onOpenModal: () => void;
  onOpenEnquiryDemo: (e: MouseEvent) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out"
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
      className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between cursor-pointer group relative hover:border-mustard-brand/50`}
    >
      <div>
        {/* Screenshot / Image Preview Container */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-charcoal-brand/10 border border-charcoal-brand/10 mb-5 shadow-inner">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Hover Overlay Badge */}
          <div className="absolute inset-0 bg-charcoal-brand/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
            <span className="px-4 py-2 rounded-full bg-cream-brand text-charcoal-brand font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <Eye className="w-4 h-4 text-mustard-brand" />
              <span>View Screenshots ({project.screenshots ? project.screenshots.length : 1})</span>
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-brand/80 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
            <span className={`w-2 h-2 rounded-full ${project.statusColor || "bg-emerald-500"} animate-pulse`} />
            <span>{project.status}</span>
          </div>
        </div>

        {/* Category Pill & Owner Info */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-mustard-brand/15 text-charcoal-brand">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-mono text-charcoal-brand/60 font-semibold flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{project.owner}</span>
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand group-hover:text-mustard-brand transition-colors">
          {project.title}
        </h3>
        <p className="font-inter text-xs text-charcoal-brand/70 font-medium mt-1 line-clamp-2">
          {project.subtitle}
        </p>

        {/* Highlights */}
        <div className="mt-4 pt-3 border-t border-charcoal-brand/10 space-y-1.5">
          {project.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-inter text-charcoal-brand/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-6 pt-4 border-t border-charcoal-brand/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 rounded-full bg-emerald-brand/15 hover:bg-emerald-brand text-emerald-brand hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-1 shadow-2xs border border-emerald-brand/30"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Site 🌐</span>
            </a>
          )}
          {project.hasEnquiryDemo && (
            <button
              onClick={onOpenEnquiryDemo}
              className="px-3 py-1.5 rounded-full bg-mustard-brand/15 hover:bg-mustard-brand text-charcoal-brand font-mono text-xs font-bold transition-all flex items-center gap-1 border border-mustard-brand/30"
            >
              <MessageSquareCheck className="w-3.5 h-3.5" />
              <span>Demo</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-charcoal-brand group-hover:translate-x-1 transition-transform">
          <span>Explore</span>
          <ChevronRight className="w-4 h-4 text-mustard-brand" />
        </div>
      </div>
    </motion.div>
  );
}
