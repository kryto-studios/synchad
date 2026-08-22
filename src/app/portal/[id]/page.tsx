"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Phone,
  MessageSquare,
  Layers,
  Layers3,
  Coffee,
  Check,
  FileText,
  Receipt,
  CreditCard
} from "lucide-react";

import {
  CompletedProject,
  OngoingProject,
  ProjectMilestone,
  getCompletedProjects,
  getOngoingProjects,
  STORE_EVENT_NAME,
  syncFromSupabase
} from "@/lib/store";
import { CLAY_CLASSES } from "@/components/ClayStyles";

interface PortalPageProps {
  params: Promise<{ id: string }>;
}

export default function ClientPortalPage({ params }: PortalPageProps) {
  const { id } = use(params);

  const [project, setProject] = useState<CompletedProject | OngoingProject | null>(null);
  const [projectType, setProjectType] = useState<"ongoing" | "completed">("ongoing");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjectData = () => {
      // First check ongoing projects
      const ongoing = getOngoingProjects();
      const matchedOngoing = ongoing.find(
        (p) => p.id === id || p.shareToken === id
      );

      if (matchedOngoing) {
        setProject(matchedOngoing);
        setProjectType("ongoing");
        setLoading(false);
        return;
      }

      // Then check completed projects
      const completed = getCompletedProjects();
      const matchedCompleted = completed.find(
        (p) => p.id === id || p.shareToken === id
      );

      if (matchedCompleted) {
        setProject(matchedCompleted);
        setProjectType("completed");
        setLoading(false);
        return;
      }

      setProject(null);
      setLoading(false);
    };

    loadProjectData();
    syncFromSupabase();

    window.addEventListener(STORE_EVENT_NAME, loadProjectData);
    return () => window.removeEventListener(STORE_EVENT_NAME, loadProjectData);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf6ef] flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3 font-mono text-sm text-charcoal-brand">
          <div className="w-8 h-8 border-4 border-mustard-brand border-t-transparent rounded-full animate-spin" />
          <span>Loading Client Portal...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf6ef] flex items-center justify-center p-6 text-charcoal-brand">
        <div className={`${CLAY_CLASSES.cardCream} max-w-md w-full p-8 text-center space-y-4`}>
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto font-mono font-bold text-xl">
            404
          </div>
          <h2 className="font-outfit text-2xl font-black">Project Portal Not Found</h2>
          <p className="font-inter text-xs text-charcoal-brand/70">
            The project portal link you opened may be invalid or has been moved. Please check with synchAD team.
          </p>
          <Link
            href="/"
            className={`${CLAY_CLASSES.btnMustard} inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Site</span>
          </Link>
        </div>
      </div>
    );
  }

  const isOngoing = projectType === "ongoing";
  const ongoingProj = project as OngoingProject;
  const completedProj = project as CompletedProject;

  const progressPct = isOngoing ? ongoingProj.progress : 100;
  const milestones: ProjectMilestone[] = project.milestones || [];
  const completedMilestones = milestones.filter((m) => m.completed).length;

  return (
    <div className="min-h-screen bg-[#faf6ef] text-charcoal-brand relative overflow-x-hidden pb-16">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mustard-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-brand/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-charcoal-brand/10 sticky top-0 z-40 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-outfit text-2xl font-black text-emerald-brand">
              synch<span className="text-mustard-brand">AD.</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-charcoal-brand/5 border border-charcoal-brand/10 font-mono text-[10px] font-bold text-charcoal-brand/60 uppercase tracking-widest hidden sm:inline">
              Client Portal
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Client Link</span>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-8 space-y-8 relative z-10">
        
        {/* Project Header Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${CLAY_CLASSES.cardCream} p-6 sm:p-8 relative overflow-hidden`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-charcoal-brand/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-mustard-brand/20 border border-mustard-brand/30 text-charcoal-brand font-mono text-xs font-bold">
                  {isOngoing ? ongoingProj.badge : completedProj.status}
                </span>
                <span className="font-mono text-xs text-charcoal-brand/50 uppercase font-bold">
                  {isOngoing ? ongoingProj.clientType : completedProj.owner}
                </span>
              </div>
              <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-charcoal-brand tracking-tight">
                {project.title}
              </h1>
              <p className="font-inter text-xs sm:text-sm text-charcoal-brand/75 mt-1 max-w-2xl">
                {project.description}
              </p>
            </div>

            {completedProj.liveUrl && (
              <a
                href={completedProj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CLAY_CLASSES.btnMustard} px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 cursor-pointer shadow-md`}
              >
                <span>View Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Progress Overview Bar */}
          <div className="pt-6">
            <div className="flex items-center justify-between font-mono text-xs sm:text-sm font-bold text-charcoal-brand mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-mustard-brand" />
                Overall Build Progress
              </span>
              <span className="text-emerald-brand font-extrabold text-base">{progressPct}%</span>
            </div>

            <div className="w-full h-4 rounded-full bg-charcoal-brand/10 p-0.5 overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-mustard-brand to-emerald-brand rounded-full shadow-sm"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-charcoal-brand/60">
              <span>{isOngoing ? "Active Development Phase" : "Production Delivered"}</span>
              <span>{milestones.length > 0 ? `${completedMilestones} of ${milestones.length} Milestones Completed` : "Modules Verified"}</span>
            </div>
          </div>
        </motion.div>

        {/* Transparent Deal & Investment Summary Card */}
        {project.dealAmount && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="p-5 rounded-2xl bg-white border border-charcoal-brand/10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-mustard-brand/20 text-charcoal-brand flex items-center justify-center font-bold shrink-0">
                <Receipt className="w-5 h-5 text-charcoal-brand" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-charcoal-brand/60 uppercase block">
                  Agreed Deal &amp; Investment Amount:
                </span>
                <h3 className="font-outfit text-2xl font-black text-emerald-brand">
                  {project.dealAmount}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[11px] font-bold flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>Transparent Pricing Policy</span>
              </span>
            </div>
          </motion.div>
        )}

        {/* Official Engineering Notes & Status Updates (Read-Only) */}
        {project.clientNotes && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={`${CLAY_CLASSES.cardCream} p-6 sm:p-8 space-y-3 relative overflow-hidden`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-outfit text-lg sm:text-xl font-bold text-charcoal-brand flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                Official Status Notes &amp; Engineer Remarks
              </h2>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                Read-Only Update
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 border border-charcoal-brand/10 font-mono text-xs sm:text-sm text-charcoal-brand leading-relaxed whitespace-pre-wrap">
              {project.clientNotes}
            </div>
          </motion.div>
        )}


        {/* Milestone & Phase Roadmap Checklist */}
        {milestones.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${CLAY_CLASSES.cardCream} p-6 sm:p-8 space-y-6`}
          >
            <div>
              <h2 className="font-outfit text-xl sm:text-2xl font-bold text-charcoal-brand flex items-center gap-2">
                <Layers3 className="w-5 h-5 text-mustard-brand" />
                Project Milestone &amp; Phase Roadmap
              </h2>
              <p className="font-mono text-xs text-charcoal-brand/60 mt-0.5">
                Track live progress across system architecture, database setup, UI components, and final launch.
              </p>
            </div>

            <div className="space-y-3">
              {milestones.map((m, idx) => (
                <div
                  key={m.id || idx}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                    m.completed
                      ? "bg-emerald-50/70 border-emerald-200 text-charcoal-brand"
                      : "bg-white/60 border-charcoal-brand/10 text-charcoal-brand/80"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold ${
                        m.completed ? "bg-emerald-500 text-white" : "bg-charcoal-brand/10 text-charcoal-brand/40"
                      }`}
                    >
                      {m.completed ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
                    </div>
                    <div>
                      <h4
                        className={`font-outfit text-sm sm:text-base font-bold ${
                          m.completed ? "text-charcoal-brand line-through/40" : "text-charcoal-brand"
                        }`}
                      >
                        {m.title}
                      </h4>
                      {m.targetDate && (
                        <span className="font-mono text-[11px] text-charcoal-brand/50 block mt-0.5">
                          Target: {m.targetDate}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold shrink-0 ${
                      m.completed
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : "bg-amber-100 text-amber-800 border border-amber-200"
                    }`}
                  >
                    {m.completed ? "Completed ✓" : "In Progress ⏳"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* System Features & Modules List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${CLAY_CLASSES.cardCream} p-6 sm:p-8 space-y-6`}
        >
          <div>
            <h2 className="font-outfit text-xl sm:text-2xl font-bold text-charcoal-brand flex items-center gap-2">
              <Layers className="w-5 h-5 text-mustard-brand" />
              Planned &amp; Deployed System Modules
            </h2>
            <p className="font-mono text-xs text-charcoal-brand/60 mt-0.5">
              Core functional features included in this build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(isOngoing ? ongoingProj.features : completedProj.keyFeatures).map((feat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white border border-charcoal-brand/10 font-mono text-xs text-charcoal-brand flex items-center gap-2.5 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Direct Founder Contact & Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${CLAY_CLASSES.cardMustard} p-6 sm:p-8 text-charcoal-brand relative overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-charcoal-brand/60 bg-charcoal-brand/10 px-2.5 py-1 rounded-full border border-charcoal-brand/10">
                Direct Founder Support
              </span>
              <h3 className="font-outfit text-2xl font-extrabold tracking-tight mt-2">
                Have questions or feature updates for Dewansh &amp; Aryan?
              </h3>
              <p className="font-inter text-xs text-charcoal-brand/80 leading-relaxed">
                Connect directly with the lead engineers working on your project. Instant responses via WhatsApp or Call.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919294625866"
                target="_blank"
                rel="noopener noreferrer"
                className={`${CLAY_CLASSES.btnCharcoal} px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md w-full sm:w-auto justify-center`}
              >
                <MessageSquare className="w-4 h-4 text-mustard-brand" />
                <span>WhatsApp Dewansh</span>
              </a>

              <a
                href="tel:+919340411838"
                className="px-5 py-3 rounded-full bg-white border border-charcoal-brand/20 font-mono text-xs font-bold text-charcoal-brand hover:bg-cream-brand transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Aryan</span>
              </a>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
