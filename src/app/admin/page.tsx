"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  RefreshCw,
  MessageSquare,
  Layers,
  Clock,
  Send,
  Eye,
  Check,
  X,
  FileText,
  Phone,
  Mail,
  User,
  Coffee,
  AlertCircle
} from "lucide-react";
import {
  CompletedProject,
  OngoingProject,
  Enquiry,
  getCompletedProjects,
  saveCompletedProjects,
  getOngoingProjects,
  saveOngoingProjects,
  getEnquiries,
  saveEnquiries,
  resetStoreToDefaults,
  STORE_EVENT_NAME
} from "@/lib/store";
import { CLAY_CLASSES } from "@/components/ClayStyles";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  const [activeTab, setActiveTab] = useState<"completed" | "ongoing" | "enquiries">("completed");

  const [completedList, setCompletedList] = useState<CompletedProject[]>([]);
  const [ongoingList, setOngoingList] = useState<OngoingProject[]>([]);
  const [enquiriesList, setEnquiriesList] = useState<Enquiry[]>([]);

  // Modal State for Completed Projects
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<CompletedProject | null>(null);
  const [projectFormData, setProjectFormData] = useState<Partial<CompletedProject>>({
    title: "",
    subtitle: "",
    owner: "",
    role: "",
    category: "landing",
    categoryLabel: "Landing Page + Enquiry System",
    status: "Delivered & Live",
    statusColor: "bg-emerald-500",
    thumbnail: "/projects/krishna_library.jpg",
    description: "",
    keyFeatures: [],
    techStack: [],
    screenshots: [
      { id: "s1", title: "Desktop Hero View", type: "desktop", src: "/projects/krishna_library.jpg", caption: "Hero section overview" }
    ]
  });
  const [featuresText, setFeaturesText] = useState("");
  const [techStackText, setTechStackText] = useState("");

  // Modal State for Ongoing Projects
  const [ongoingModalOpen, setOngoingModalOpen] = useState(false);
  const [editingOngoing, setEditingOngoing] = useState<OngoingProject | null>(null);
  const [ongoingFormData, setOngoingFormData] = useState<Partial<OngoingProject>>({
    title: "",
    category: "Web & POS System",
    clientType: "Commercial Client",
    progress: 50,
    badge: "In Active Development ⚡",
    description: "",
    features: []
  });
  const [ongoingFeaturesText, setOngoingFeaturesText] = useState("");

  // Filter for Enquiries
  const [enquiryFilter, setEnquiryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Load store data
    const refreshData = () => {
      setCompletedList(getCompletedProjects());
      setOngoingList(getOngoingProjects());
      setEnquiriesList(getEnquiries());
    };

    refreshData();
    window.addEventListener(STORE_EVENT_NAME, refreshData);
    return () => window.removeEventListener(STORE_EVENT_NAME, refreshData);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "synchad2026" || pinInput === "admin") {
      setIsAuthenticated(true);
      setPinError("");
    } else {
      setPinError("Invalid Passcode. Default admin PIN is synchad2026");
    }
  };

  // Completed Project CRUD Handlers
  const handleOpenAddProject = () => {
    setEditingProject(null);
    setProjectFormData({
      title: "",
      subtitle: "",
      owner: "",
      role: "Client & Director",
      category: "landing",
      categoryLabel: "Landing Page + Enquiry System",
      status: "Delivered & Live",
      statusColor: "bg-emerald-500",
      thumbnail: "/projects/krishna_library.jpg",
      description: "",
      keyFeatures: ["Responsive Design", "Fast Performance"],
      techStack: ["Next.js", "Tailwind CSS"],
      hasEnquiryDemo: true,
      screenshots: [
        { id: `s-${Date.now()}`, title: "Main Desktop Preview", type: "desktop", src: "/projects/krishna_library.jpg", caption: "Overview mockup" }
      ]
    });
    setFeaturesText("Interactive Enquiry Form, Mobile Parallax Layout");
    setTechStackText("Next.js, Tailwind CSS, Supabase");
    setProjectModalOpen(true);
  };

  const handleOpenEditProject = (project: CompletedProject) => {
    setEditingProject(project);
    setProjectFormData(project);
    setFeaturesText(project.keyFeatures.join(", "));
    setTechStackText(project.techStack.join(", "));
    setProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const keyFeatures = featuresText.split(",").map((s) => s.trim()).filter(Boolean);
    const techStack = techStackText.split(",").map((s) => s.trim()).filter(Boolean);

    let updated: CompletedProject[];
    if (editingProject) {
      updated = completedList.map((p) =>
        p.id === editingProject.id
          ? ({ ...p, ...projectFormData, keyFeatures, techStack } as CompletedProject)
          : p
      );
    } else {
      const newProj: CompletedProject = {
        ...(projectFormData as CompletedProject),
        id: `proj-${Date.now()}`,
        keyFeatures,
        techStack,
        screenshots: projectFormData.screenshots && projectFormData.screenshots.length > 0
          ? projectFormData.screenshots
          : [{ id: `s-${Date.now()}`, title: "Hero View", type: "desktop", src: projectFormData.thumbnail || "/projects/krishna_library.jpg", caption: "Project interface view" }]
      };
      updated = [newProj, ...completedList];
    }

    setCompletedList(updated);
    saveCompletedProjects(updated);
    setProjectModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updated = completedList.filter((p) => p.id !== id);
      setCompletedList(updated);
      saveCompletedProjects(updated);
    }
  };

  // Ongoing Project CRUD Handlers
  const handleOpenAddOngoing = () => {
    setEditingOngoing(null);
    setOngoingFormData({
      title: "",
      category: "Custom WebApp & Management",
      clientType: "Commercial Enterprise",
      progress: 50,
      badge: "In Active Development ⚡",
      description: "",
      features: ["Custom UI Mockups", "Database Backend Integration"]
    });
    setOngoingFeaturesText("Custom UI Mockups, Database Backend Integration");
    setOngoingModalOpen(true);
  };

  const handleOpenEditOngoing = (op: OngoingProject) => {
    setEditingOngoing(op);
    setOngoingFormData(op);
    setOngoingFeaturesText(op.features.join(", "));
    setOngoingModalOpen(true);
  };

  const handleSaveOngoing = (e: React.FormEvent) => {
    e.preventDefault();
    const features = ongoingFeaturesText.split(",").map((s) => s.trim()).filter(Boolean);

    let updated: OngoingProject[];
    if (editingOngoing) {
      updated = ongoingList.map((op) =>
        op.id === editingOngoing.id ? ({ ...op, ...ongoingFormData, features } as OngoingProject) : op
      );
    } else {
      const newOp: OngoingProject = {
        ...(ongoingFormData as OngoingProject),
        id: `op-${Date.now()}`,
        features
      };
      updated = [newOp, ...ongoingList];
    }

    setOngoingList(updated);
    saveOngoingProjects(updated);
    setOngoingModalOpen(false);
  };

  const handleMarkOngoingCompleted = (op: OngoingProject) => {
    if (confirm(`Mark "${op.title}" as completed and promote it to Delivered Projects?`)) {
      // Create new completed project
      const promoted: CompletedProject = {
        id: `promoted-${Date.now()}`,
        title: op.title,
        subtitle: `${op.category} for ${op.clientType}`,
        owner: op.clientType,
        role: "Client & Director",
        category: "software",
        categoryLabel: op.category,
        status: "Delivered & Live",
        statusColor: "bg-emerald-500",
        thumbnail: "/projects/srijan_institute.jpg",
        description: op.description,
        keyFeatures: op.features,
        techStack: ["Next.js", "Tailwind CSS", "Supabase"],
        screenshots: [
          { id: `ps-${Date.now()}`, title: `${op.title} Interface`, type: "dashboard", src: "/projects/srijan_institute.jpg", caption: "Completed application interface overview" }
        ]
      };

      const updatedCompleted = [promoted, ...completedList];
      const updatedOngoing = ongoingList.filter((item) => item.id !== op.id);

      setCompletedList(updatedCompleted);
      saveCompletedProjects(updatedCompleted);

      setOngoingList(updatedOngoing);
      saveOngoingProjects(updatedOngoing);
    }
  };

  const handleDeleteOngoing = (id: string) => {
    if (confirm("Are you sure you want to delete this ongoing project?")) {
      const updated = ongoingList.filter((op) => op.id !== id);
      setOngoingList(updated);
      saveOngoingProjects(updated);
    }
  };

  // Enquiry Handlers
  const handleUpdateEnquiryStatus = (id: string, status: Enquiry["status"]) => {
    const updated = enquiriesList.map((e) => (e.id === id ? { ...e, status } : e));
    setEnquiriesList(updated);
    saveEnquiries(updated);
  };

  const handleUpdateEnquiryNotes = (id: string, adminNotes: string) => {
    const updated = enquiriesList.map((e) => (e.id === id ? { ...e, adminNotes } : e));
    setEnquiriesList(updated);
    saveEnquiries(updated);
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm("Delete this enquiry record?")) {
      const updated = enquiriesList.filter((e) => e.id !== id);
      setEnquiriesList(updated);
      saveEnquiries(updated);
    }
  };

  const handleResetDefaults = () => {
    if (confirm("Reset all project and enquiry data to initial default state?")) {
      resetStoreToDefaults();
    }
  };

  // Passcode Lock View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-cream-brand flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${CLAY_CLASSES.cardCream} w-full max-w-md p-8 relative flex flex-col items-center text-center shadow-2xl`}
        >
          <div className="w-16 h-16 rounded-full bg-charcoal-brand text-mustard-brand flex items-center justify-center shadow-lg mb-4">
            <Lock className="w-8 h-8" />
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-mustard-brand">
            Executive Portal Access
          </span>
          <h2 className="font-outfit text-3xl font-extrabold text-charcoal-brand mt-1">
            synch<span className="text-mustard-brand">AD</span> Admin
          </h2>
          <p className="font-inter text-xs text-charcoal-brand/70 mt-2">
            Enter your admin passcode to access project editing &amp; enquiry management.
          </p>

          <form onSubmit={handleLogin} className="w-full mt-6 space-y-4">
            <div>
              <input
                type="password"
                required
                placeholder="Enter Passcode (default: synchad2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className={`${CLAY_CLASSES.input} w-full px-5 py-3 text-center text-sm text-charcoal-brand font-mono outline-none tracking-widest`}
              />
            </div>

            {pinError && (
              <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full">
                {pinError}
              </p>
            )}

            <button
              type="submit"
              className={`${CLAY_CLASSES.btnCharcoal} w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer`}
            >
              <Unlock className="w-4 h-4 text-mustard-brand" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <Link
            href="/"
            className="mt-6 flex items-center gap-1 text-xs font-mono font-bold text-charcoal-brand/60 hover:text-charcoal-brand"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const filteredEnquiries = enquiriesList.filter((e) => {
    const matchesFilter = enquiryFilter === "all" || e.status.includes(enquiryFilter);
    const matchesSearch =
      searchQuery === "" ||
      e.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.phone && e.phone.includes(searchQuery)) ||
      (e.email && e.email.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const unreadEnquiriesCount = enquiriesList.filter((e) => e.status.includes("New")).length;

  return (
    <div className="min-h-screen w-full bg-[#faf6ef] text-charcoal-brand">
      {/* Top Admin Header */}
      <header className="w-full bg-charcoal-brand text-cream-brand border-b border-charcoal-brand px-6 sm:px-10 py-5 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cream-brand flex items-center justify-center p-1.5 shadow-inner">
              <Image src="/logo.png" alt="logo" width={26} height={26} className="object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-outfit text-xl font-extrabold text-cream-brand tracking-tight">
                  synch<span className="text-mustard-brand font-black">AD</span> Control Panel
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  Live Sync Active
                </span>
              </div>
              <p className="font-mono text-[11px] text-cream-brand/50">
                Logged in as Administrator (Dewansh &amp; Aryan)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetDefaults}
              className="px-3.5 py-2 rounded-full bg-cream-brand/10 hover:bg-cream-brand/20 text-cream-brand font-mono text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-mustard-brand" />
              <span>Reset Defaults</span>
            </button>

            <Link
              href="/"
              className={`${CLAY_CLASSES.btnMustard} px-5 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Live Website</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto py-10 px-6 sm:px-10">
        
        {/* Quick Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className={`${CLAY_CLASSES.cardCream} p-6 flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal-brand/60">
                Delivered Projects
              </span>
              <h3 className="font-outfit text-3xl font-black text-charcoal-brand mt-1">
                {completedList.length}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className={`${CLAY_CLASSES.cardCream} p-6 flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal-brand/60">
                Active Ongoing Builds
              </span>
              <h3 className="font-outfit text-3xl font-black text-charcoal-brand mt-1">
                {ongoingList.length}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
          </div>

          <div className={`${CLAY_CLASSES.cardCream} p-6 flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal-brand/60">
                Total Enquiries Received
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand">
                  {enquiriesList.length}
                </h3>
                {unreadEnquiriesCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500 text-white font-mono text-[10px] font-bold animate-pulse">
                    {unreadEnquiriesCount} New
                  </span>
                )}
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-charcoal-brand/15 pb-4">
          <div className="flex items-center gap-3">
            {[
              { key: "completed", label: `Completed Projects (${completedList.length})` },
              { key: "ongoing", label: `In The Lab / Ongoing (${ongoingList.length})` },
              { key: "enquiries", label: `Client Enquiries Inbox (${enquiriesList.length})` },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={[
                  "px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer",
                  activeTab === tab.key
                    ? `${CLAY_CLASSES.btnCharcoal} text-cream-brand`
                    : "text-charcoal-brand/70 hover:text-charcoal-brand hover:bg-charcoal-brand/5",
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "completed" && (
            <button
              onClick={handleOpenAddProject}
              className={`${CLAY_CLASSES.btnMustard} px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer`}
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          )}

          {activeTab === "ongoing" && (
            <button
              onClick={handleOpenAddOngoing}
              className={`${CLAY_CLASSES.btnMustard} px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer`}
            >
              <Plus className="w-4 h-4" />
              <span>Add Ongoing Build</span>
            </button>
          )}
        </div>

        {/* TAB 1: COMPLETED PROJECTS MANAGER */}
        {activeTab === "completed" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedList.map((p) => (
              <div key={p.id} className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between relative`}>
                <div>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-charcoal-brand/10">
                    <Image src={p.thumbnail} alt={p.title} fill className="object-cover" />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-charcoal-brand/80 text-white font-mono text-[10px] font-bold">
                      {p.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-mustard-brand/20 text-charcoal-brand">
                    {p.categoryLabel}
                  </span>
                  <h3 className="font-outfit text-xl font-extrabold text-charcoal-brand mt-2">
                    {p.title}
                  </h3>
                  <p className="font-mono text-xs text-charcoal-brand/60 mt-0.5">
                    Owner: <span className="font-bold text-charcoal-brand">{p.owner}</span> ({p.role})
                  </p>
                  <p className="font-inter text-xs text-charcoal-brand/80 mt-2 line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-charcoal-brand/5 text-[10px] font-mono font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-brand/10 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEditProject(p)}
                    className="px-3 py-1.5 rounded-full bg-charcoal-brand/10 hover:bg-charcoal-brand hover:text-cream-brand text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDeleteProject(p.id)}
                    className="px-3 py-1.5 rounded-full bg-red-100 hover:bg-red-600 hover:text-white text-red-700 text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: ONGOING PROJECTS MANAGER */}
        {activeTab === "ongoing" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingList.map((op) => (
              <div key={op.id} className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-mustard-brand uppercase">
                      {op.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-charcoal-brand bg-charcoal-brand/10 px-2 py-0.5 rounded">
                      {op.progress}% Complete
                    </span>
                  </div>

                  <h3 className="font-outfit text-xl font-extrabold text-charcoal-brand">
                    {op.title}
                  </h3>
                  <p className="font-mono text-xs text-charcoal-brand/60 font-semibold mt-0.5">
                    {op.category}
                  </p>
                  <p className="font-inter text-xs text-charcoal-brand/80 mt-3 leading-relaxed">
                    {op.description}
                  </p>

                  <div className="mt-4">
                    <label className="block text-[11px] font-mono font-bold text-charcoal-brand/70 mb-1">
                      Quick Progress Adjuster:
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={op.progress}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        const updated = ongoingList.map((item) =>
                          item.id === op.id ? { ...item, progress: val } : item
                        );
                        setOngoingList(updated);
                        saveOngoingProjects(updated);
                      }}
                      className="w-full accent-mustard-brand cursor-pointer"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-brand/10 flex flex-col gap-2">
                  <button
                    onClick={() => handleMarkOngoingCompleted(op)}
                    className={`${CLAY_CLASSES.btnEmerald} w-full py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Mark Completed &amp; Promote 🎉</span>
                  </button>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => handleOpenEditOngoing(op)}
                      className="flex-1 py-1.5 rounded-full bg-charcoal-brand/10 hover:bg-charcoal-brand hover:text-cream-brand text-xs font-bold transition-all text-center"
                    >
                      Edit Build
                    </button>
                    <button
                      onClick={() => handleDeleteOngoing(op.id)}
                      className="px-3 py-1.5 rounded-full bg-red-100 hover:bg-red-600 hover:text-white text-red-700 text-xs font-bold transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: CLIENT ENQUIRIES INBOX */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className={`${CLAY_CLASSES.cardCream} p-4 flex flex-col sm:flex-row items-center justify-between gap-4`}>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-charcoal-brand/70">Filter Status:</span>
                {["all", "New", "Contacted", "Converted"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setEnquiryFilter(st)}
                    className={[
                      "px-3 py-1 text-xs font-mono font-bold rounded-full transition-all",
                      enquiryFilter === st
                        ? "bg-charcoal-brand text-cream-brand"
                        : "bg-charcoal-brand/5 text-charcoal-brand hover:bg-charcoal-brand/10",
                    ].join(" ")}
                  >
                    {st === "all" ? "All Enquiries" : st}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Search by client name, email or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${CLAY_CLASSES.input} px-4 py-2 text-xs text-charcoal-brand w-full sm:w-72 outline-none`}
              />
            </div>

            {filteredEnquiries.length === 0 ? (
              <div className="text-center py-16 bg-white/60 rounded-3xl border border-charcoal-brand/10">
                <MessageSquare className="w-12 h-12 text-charcoal-brand/30 mx-auto mb-3" />
                <h4 className="font-outfit text-xl font-bold text-charcoal-brand">
                  No Enquiries Found
                </h4>
                <p className="font-inter text-xs text-charcoal-brand/60 mt-1">
                  Enquiries submitted on the public website will appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEnquiries.map((enq) => (
                  <div key={enq.id} className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between relative`}>
                    <div>
                      {/* Enquiry Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-charcoal-brand/10 text-charcoal-brand font-mono text-[10px] font-bold uppercase">
                          {enq.type === "contact_proposal" ? "Website Proposal" : "Project Seat Enquiry"}
                        </span>
                        <span className="font-mono text-[11px] text-charcoal-brand/50 font-semibold">
                          {enq.timestamp}
                        </span>
                      </div>

                      <h4 className="font-outfit text-2xl font-black text-charcoal-brand">
                        {enq.clientName}
                      </h4>

                      <div className="space-y-1 mt-2 font-mono text-xs text-charcoal-brand/80">
                        {enq.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <a href={`tel:${enq.phone}`} className="hover:underline font-bold text-charcoal-brand">
                              {enq.phone}
                            </a>
                          </div>
                        )}
                        {enq.email && (
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <a href={`mailto:${enq.email}`} className="hover:underline font-medium">
                              {enq.email}
                            </a>
                          </div>
                        )}
                        {enq.serviceOrDesk && (
                          <div className="flex items-center gap-2 pt-1 font-bold text-mustard-brand">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span>Requested: {enq.serviceOrDesk}</span>
                          </div>
                        )}
                      </div>

                      {enq.details && (
                        <div className="mt-4 p-3 rounded-xl bg-charcoal-brand/5 border border-charcoal-brand/10">
                          <p className="font-inter text-xs text-charcoal-brand/85 leading-relaxed">
                            &quot;{enq.details}&quot;
                          </p>
                        </div>
                      )}

                      {/* Admin Notes Section */}
                      <div className="mt-4">
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-charcoal-brand/60 mb-1">
                          Internal Admin Notes:
                        </label>
                        <input
                          type="text"
                          placeholder="Add quick notes (e.g. Called client, quote sent)..."
                          value={enq.adminNotes || ""}
                          onChange={(e) => handleUpdateEnquiryNotes(enq.id, e.target.value)}
                          className={`${CLAY_CLASSES.input} w-full px-3 py-1.5 text-xs text-charcoal-brand outline-none`}
                        />
                      </div>
                    </div>

                    {/* Enquiry Status Selector & Delete */}
                    <div className="mt-6 pt-4 border-t border-charcoal-brand/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-charcoal-brand/60">
                          Status:
                        </span>
                        <select
                          value={enq.status}
                          onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value as Enquiry["status"])}
                          className={`${CLAY_CLASSES.input} px-3 py-1 text-xs font-mono font-bold text-charcoal-brand cursor-pointer outline-none`}
                        >
                          <option value="New 🔴">New 🔴</option>
                          <option value="Contacted 🟡">Contacted 🟡</option>
                          <option value="Converted 🟢">Converted 🟢</option>
                        </select>
                      </div>

                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="p-2 rounded-full hover:bg-red-100 text-red-600 transition-colors"
                        title="Delete enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* COMPLETED PROJECT EDIT/ADD MODAL */}
      <AnimatePresence>
        {projectModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-brand/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setProjectModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto my-auto shadow-2xl`}
            >
              <button
                onClick={() => setProjectModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-charcoal-brand/10 text-charcoal-brand"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand mb-6">
                {editingProject ? "Edit Completed Project" : "Add New Completed Project"}
              </h3>

              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={projectFormData.title || ""}
                      onChange={(e) => setProjectFormData({ ...projectFormData, title: e.target.value })}
                      placeholder="e.g. Krishna Library"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Category Type *
                    </label>
                    <select
                      value={projectFormData.category || "landing"}
                      onChange={(e) =>
                        setProjectFormData({
                          ...projectFormData,
                          category: e.target.value as any,
                          categoryLabel: e.target.value === "landing" ? "Landing Page + Enquiry System" : "Application Software / ERP"
                        })
                      }
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    >
                      <option value="landing">Landing Page &amp; Enquiry System</option>
                      <option value="software">Application Software / ERP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Subtitle / Summary Tagline
                  </label>
                  <input
                    type="text"
                    value={projectFormData.subtitle || ""}
                    onChange={(e) => setProjectFormData({ ...projectFormData, subtitle: e.target.value })}
                    placeholder="e.g. High-Conversion Study Space Landing Page"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Client / Owner Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={projectFormData.owner || ""}
                      onChange={(e) => setProjectFormData({ ...projectFormData, owner: e.target.value })}
                      placeholder="e.g. Shivendra Singh"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Owner Role / Designation
                    </label>
                    <input
                      type="text"
                      value={projectFormData.role || ""}
                      onChange={(e) => setProjectFormData({ ...projectFormData, role: e.target.value })}
                      placeholder="e.g. Library Director"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Thumbnail Image URL / Path
                  </label>
                  <input
                    type="text"
                    value={projectFormData.thumbnail || ""}
                    onChange={(e) => setProjectFormData({ ...projectFormData, thumbnail: e.target.value })}
                    placeholder="/projects/krishna_library.jpg"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={projectFormData.description || ""}
                    onChange={(e) => setProjectFormData({ ...projectFormData, description: e.target.value })}
                    placeholder="Detailed explanation of what was built for the client..."
                    className={`${CLAY_CLASSES.textarea} w-full px-4 py-2 text-xs text-charcoal-brand outline-none resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Key Features Delivered (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={featuresText}
                    onChange={(e) => setFeaturesText(e.target.value)}
                    placeholder="Interactive Seat Enquiry, Ambience Showcase, Parallax Layout"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Tech Stack (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={techStackText}
                    onChange={(e) => setTechStackText(e.target.value)}
                    placeholder="Next.js, Tailwind CSS, Supabase SQL"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setProjectModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-charcoal-brand/10 text-xs font-bold text-charcoal-brand"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`${CLAY_CLASSES.btnMustard} px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer`}
                  >
                    Save Project Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ONGOING PROJECT EDIT/ADD MODAL */}
      <AnimatePresence>
        {ongoingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-brand/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setOngoingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-lg p-6 sm:p-8 relative shadow-2xl`}
            >
              <button
                onClick={() => setOngoingModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-charcoal-brand/10 text-charcoal-brand"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand mb-6">
                {editingOngoing ? "Edit Ongoing Build" : "Add New Ongoing Build"}
              </h3>

              <form onSubmit={handleSaveOngoing} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Build / Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={ongoingFormData.title || ""}
                    onChange={(e) => setOngoingFormData({ ...ongoingFormData, title: e.target.value })}
                    placeholder="e.g. Smart Cafe & Order Portal"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Category Type
                    </label>
                    <input
                      type="text"
                      value={ongoingFormData.category || ""}
                      onChange={(e) => setOngoingFormData({ ...ongoingFormData, category: e.target.value })}
                      placeholder="e.g. Cafe WebApp + POS"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Badge Label
                    </label>
                    <select
                      value={ongoingFormData.badge || "In Active Development ⚡"}
                      onChange={(e) => setOngoingFormData({ ...ongoingFormData, badge: e.target.value })}
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    >
                      <option value="In Active Development ⚡">In Active Development ⚡</option>
                      <option value="Confidential Build 🔒">Confidential Build 🔒</option>
                      <option value="Testing & Polishing 🚗">Testing &amp; Polishing 🚗</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Completion Percentage ({ongoingFormData.progress || 0}%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ongoingFormData.progress || 0}
                    onChange={(e) => setOngoingFormData({ ...ongoingFormData, progress: parseInt(e.target.value) })}
                    className="w-full accent-mustard-brand cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Build Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={ongoingFormData.description || ""}
                    onChange={(e) => setOngoingFormData({ ...ongoingFormData, description: e.target.value })}
                    placeholder="Brief description of the upcoming system..."
                    className={`${CLAY_CLASSES.textarea} w-full px-4 py-2 text-xs text-charcoal-brand outline-none resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Features List (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={ongoingFeaturesText}
                    onChange={(e) => setOngoingFeaturesText(e.target.value)}
                    placeholder="Digital QR Menu, Kitchen KDS Display, Table Booking"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOngoingModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-charcoal-brand/10 text-xs font-bold text-charcoal-brand"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`${CLAY_CLASSES.btnMustard} px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer`}
                  >
                    Save Build
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
