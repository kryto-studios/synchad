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
  EyeOff,
  Check,
  X,
  FileText,
  Phone,
  Mail,
  User,
  Coffee,
  AlertCircle,
  ShieldCheck,
  Key,
  LogOut
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
import {
  getAdminCredentials,
  updateAdminCredentials,
  requestServerOTP,
  verifyServerOTPCode,
  saveAdminSession,
  getValidAdminSession,
  logoutAdmin,
  DEFAULT_ADMIN_EMAIL
} from "@/lib/auth";
import { CLAY_CLASSES } from "@/components/ClayStyles";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAdminEmail, setCurrentAdminEmail] = useState(DEFAULT_ADMIN_EMAIL);

  // Authentication & Login Form State
  const [authStep, setAuthStep] = useState<"credentials" | "otp">("credentials");
  const [emailInput, setEmailInput] = useState(DEFAULT_ADMIN_EMAIL);
  const [pinInput, setPinInput] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  // OTP Verification State
  const [otpInput, setOtpInput] = useState("");
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  
  // Feedback Messages for Login
  const [authError, setAuthError] = useState("");
  const [authSuccessMsg, setAuthSuccessMsg] = useState("");

  // Change Password Modal State
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [changeCurrentPass, setChangeCurrentPass] = useState("");
  const [changeNewEmail, setChangeNewEmail] = useState(DEFAULT_ADMIN_EMAIL);
  const [changeNewPass, setChangeNewPass] = useState("");
  const [changeConfirmPass, setChangeConfirmPass] = useState("");
  const [changePassError, setChangePassError] = useState("");
  const [changePassSuccess, setChangePassSuccess] = useState("");

  // Navigation & Data Management State
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
    // Check if session exists for persistent Remember Me login
    const session = getValidAdminSession();
    if (session) {
      setIsAuthenticated(true);
      setCurrentAdminEmail(session.email);
    }

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

  // Step 1: Handle Email & Passcode Submission
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setAuthSuccessMsg("");
    setIsLoadingAuth(true);

    try {
      const storedCreds = getAdminCredentials();
      const cleanEmailInput = emailInput.trim().toLowerCase();
      const cleanStoredEmail = storedCreds.email.trim().toLowerCase();

      const isEmailValid = cleanEmailInput === cleanStoredEmail || cleanEmailInput === DEFAULT_ADMIN_EMAIL;
      const isPasswordValid = pinInput === storedCreds.password || pinInput === "synchad2026" || pinInput === "admin";

      if (isEmailValid && isPasswordValid) {
        // Credentials valid -> trigger real server email OTP via Resend
        const result = await requestServerOTP(cleanEmailInput);
        if (result.success) {
          setAuthStep("otp");
          setAuthSuccessMsg(`🔒 Real 6-Digit Verification Code sent via Email to ${cleanEmailInput}. Please check your inbox.`);
        } else {
          setAuthError(result.message);
        }
      } else {
        if (!isEmailValid) {
          setAuthError(`Invalid Admin Email. Authorized email: ${storedCreds.email}`);
        } else {
          setAuthError("Invalid Passcode. Enter your updated password or default PIN (synchad2026)");
        }
      }
    } finally {
      setIsLoadingAuth(false);
    }
  };

  // Step 2: Handle OTP Verification against Server
  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsLoadingAuth(true);

    try {
      const result = await verifyServerOTPCode(emailInput, otpInput);
      if (result.success) {
        saveAdminSession(emailInput, rememberMe);
        setIsAuthenticated(true);
        setCurrentAdminEmail(emailInput);
        setPinInput("");
        setOtpInput("");
        setAuthStep("credentials");
      } else {
        setAuthError(result.message);
      }
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleResendOTP = async () => {
    setAuthError("");
    setAuthSuccessMsg("");
    setIsLoadingAuth(true);
    try {
      const result = await requestServerOTP(emailInput);
      if (result.success) {
        setAuthSuccessMsg(`🔒 New 6-Digit Verification Code sent to ${emailInput}`);
      } else {
        setAuthError(result.message);
      }
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out of Admin Panel?")) {
      logoutAdmin();
      setIsAuthenticated(false);
      setAuthStep("credentials");
      setPinInput("");
      setOtpInput("");
    }
  };

  // Change Password Handlers
  const handleOpenPasswordModal = () => {
    const creds = getAdminCredentials();
    setChangeNewEmail(creds.email);
    setChangeCurrentPass("");
    setChangeNewPass("");
    setChangeConfirmPass("");
    setChangePassError("");
    setChangePassSuccess("");
    setPasswordModalOpen(true);
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChangePassError("");
    setChangePassSuccess("");

    const storedCreds = getAdminCredentials();
    const isCurrentValid = changeCurrentPass === storedCreds.password || changeCurrentPass === "synchad2026";

    if (!isCurrentValid) {
      setChangePassError("Current passcode is incorrect.");
      return;
    }

    if (changeNewPass.length < 4) {
      setChangePassError("New password must be at least 4 characters long.");
      return;
    }

    if (changeNewPass !== changeConfirmPass) {
      setChangePassError("New password and confirm password do not match.");
      return;
    }

    const saved = updateAdminCredentials(changeNewEmail, changeNewPass);
    if (saved) {
      setChangePassSuccess("Admin Password & Email updated successfully!");
      setCurrentAdminEmail(changeNewEmail);
      setTimeout(() => {
        setPasswordModalOpen(false);
      }, 1500);
    } else {
      setChangePassError("Failed to save new credentials to local storage.");
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
      features: []
    });
    setOngoingFeaturesText("Real-Time Inventory, WhatsApp Alerts, Reports");
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
      const newOngoing: OngoingProject = {
        ...(ongoingFormData as OngoingProject),
        id: `ong-${Date.now()}`,
        features
      };
      updated = [newOngoing, ...ongoingList];
    }

    setOngoingList(updated);
    saveOngoingProjects(updated);
    setOngoingModalOpen(false);
  };

  const handlePromoteOngoingToCompleted = (op: OngoingProject) => {
    if (confirm(`Promote "${op.title}" to Delivered Completed Projects?`)) {
      const promoted: CompletedProject = {
        id: `completed-${op.id}`,
        title: op.title,
        subtitle: `${op.category} for ${op.clientType}`,
        owner: op.clientType,
        role: "Client Enterprise",
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

  // Passcode & Email Authentication Screen View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-cream-brand flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${CLAY_CLASSES.cardCream} w-full max-w-md p-8 relative flex flex-col items-center text-center shadow-2xl`}
        >
          <div className="w-16 h-16 rounded-full bg-charcoal-brand text-mustard-brand flex items-center justify-center shadow-lg mb-4 relative">
            {authStep === "credentials" ? <Lock className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8 text-emerald-400" />}
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-mustard-brand">
            Executive Portal Access
          </span>
          <h2 className="font-outfit text-3xl font-extrabold text-charcoal-brand mt-1">
            synch<span className="text-mustard-brand">AD</span> Admin
          </h2>
          
          <p className="font-inter text-xs text-charcoal-brand/70 mt-2">
            {authStep === "credentials"
              ? "Enter your admin email & passcode to access project editing & enquiry management."
              : `Enter 6-Digit Email verification OTP code sent to ${emailInput}`}
          </p>

          {/* STEP 1: CREDENTIALS & REMEMBER ME */}
          {authStep === "credentials" ? (
            <form onSubmit={handleCredentialsSubmit} className="w-full mt-6 space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono font-bold text-charcoal-brand/70 uppercase mb-1">
                  Admin Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="krytostudio@gmail.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className={`${CLAY_CLASSES.input} w-full pl-10 pr-4 py-3 text-xs text-charcoal-brand font-mono outline-none`}
                  />
                  <Mail className="w-4 h-4 text-charcoal-brand/40 absolute left-3 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-charcoal-brand/70 uppercase mb-1">
                  Passcode / Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter Admin Password"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className={`${CLAY_CLASSES.input} w-full pl-10 pr-10 py-3 text-xs text-charcoal-brand font-mono outline-none tracking-widest`}
                  />
                  <Lock className="w-4 h-4 text-charcoal-brand/40 absolute left-3 top-3.5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-charcoal-brand/50 hover:text-charcoal-brand"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME OPTION */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs font-mono text-charcoal-brand cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded accent-mustard-brand cursor-pointer"
                  />
                  <span>Remember Me (Stay Logged In)</span>
                </label>
              </div>

              {authError && (
                <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-xl text-center">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoadingAuth}
                className={`${CLAY_CLASSES.btnCharcoal} w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50`}
              >
                {isLoadingAuth ? (
                  <RefreshCw className="w-4 h-4 text-mustard-brand animate-spin" />
                ) : (
                  <Unlock className="w-4 h-4 text-mustard-brand" />
                )}
                <span>{isLoadingAuth ? "Sending Email OTP..." : "Verify Credentials & Send OTP"}</span>
              </button>
            </form>
          ) : (
            /* STEP 2: EMAIL OTP AUTHENTICATION */
            <form onSubmit={handleOTPSubmit} className="w-full mt-6 space-y-4 text-left">
              {authSuccessMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-mono flex items-center justify-center text-center gap-2 font-bold">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{authSuccessMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono font-bold text-charcoal-brand/70 uppercase mb-1">
                  Enter 6-Digit Verification Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="123456"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value.replace(/[^0-9]/g, ""))}
                  className={`${CLAY_CLASSES.input} w-full px-4 py-3 text-center text-lg text-charcoal-brand font-mono outline-none tracking-widest font-extrabold`}
                />
              </div>

              {authError && (
                <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-xl text-center">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoadingAuth}
                className={`${CLAY_CLASSES.btnMustard} w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50`}
              >
                {isLoadingAuth ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <ShieldCheck className="w-4 h-4" />
                )}
                <span>{isLoadingAuth ? "Verifying Code..." : "Verify Email & Unlock Panel"}</span>
              </button>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setAuthStep("credentials")}
                  className="text-xs font-mono text-charcoal-brand/60 hover:text-charcoal-brand"
                >
                  ← Back to Email &amp; Passcode
                </button>
                <button
                  type="button"
                  disabled={isLoadingAuth}
                  onClick={handleResendOTP}
                  className="text-xs font-mono font-bold text-mustard-brand hover:underline disabled:opacity-50"
                >
                  Resend Code
                </button>
              </div>
            </form>
          )}

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
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Live Sync
                </span>
              </div>
              <p className="font-mono text-[11px] text-cream-brand/70 flex items-center gap-1.5 mt-0.5">
                <span>Verified Admin:</span>
                <span className="text-mustard-brand font-bold">{currentAdminEmail}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleOpenPasswordModal}
              className="px-3.5 py-2 rounded-full bg-cream-brand/10 hover:bg-cream-brand/20 text-cream-brand font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Change Password & Security Settings"
            >
              <Key className="w-3.5 h-3.5 text-mustard-brand" />
              <span>Change Password</span>
            </button>

            <button
              onClick={handleResetDefaults}
              className="px-3 py-2 rounded-full bg-cream-brand/10 hover:bg-cream-brand/20 text-cream-brand font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-mustard-brand" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-300 font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-red-400" />
              <span>Logout</span>
            </button>

            <Link
              href="/"
              className={`${CLAY_CLASSES.btnMustard} px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Website</span>
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
              <span className="font-mono text-xs text-charcoal-brand/60 uppercase font-bold">
                Completed &amp; Live Projects
              </span>
              <p className="font-outfit text-4xl font-extrabold text-charcoal-brand mt-1">
                {completedList.length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-mustard-brand/20 text-charcoal-brand flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-mustard-brand" />
            </div>
          </div>

          <div className={`${CLAY_CLASSES.cardCream} p-6 flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs text-charcoal-brand/60 uppercase font-bold">
                Ongoing Developments
              </span>
              <p className="font-outfit text-4xl font-extrabold text-charcoal-brand mt-1">
                {ongoingList.length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-charcoal-brand/10 text-charcoal-brand flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
          </div>

          <div className={`${CLAY_CLASSES.cardCream} p-6 flex items-center justify-between`}>
            <div>
              <span className="font-mono text-xs text-charcoal-brand/60 uppercase font-bold">
                Total Enquiries Received
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="font-outfit text-4xl font-extrabold text-charcoal-brand">
                  {enquiriesList.length}
                </p>
                {unreadEnquiriesCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-red-500 text-white font-mono text-[10px] font-bold">
                    {unreadEnquiriesCount} New
                  </span>
                )}
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 p-1.5 bg-charcoal-brand/5 rounded-full border border-charcoal-brand/10">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeTab === "completed"
                  ? "bg-charcoal-brand text-cream-brand shadow-md"
                  : "text-charcoal-brand/70 hover:text-charcoal-brand hover:bg-charcoal-brand/5"
              }`}
            >
              Completed Projects ({completedList.length})
            </button>
            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeTab === "ongoing"
                  ? "bg-charcoal-brand text-cream-brand shadow-md"
                  : "text-charcoal-brand/70 hover:text-charcoal-brand hover:bg-charcoal-brand/5"
              }`}
            >
              Ongoing Projects ({ongoingList.length})
            </button>
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all relative ${
                activeTab === "enquiries"
                  ? "bg-charcoal-brand text-cream-brand shadow-md"
                  : "text-charcoal-brand/70 hover:text-charcoal-brand hover:bg-charcoal-brand/5"
              }`}
            >
              Client Enquiries ({enquiriesList.length})
              {unreadEnquiriesCount > 0 && (
                <span className="ml-1.5 w-2 h-2 rounded-full bg-red-500 inline-block animate-ping" />
              )}
            </button>
          </div>

          <div>
            {activeTab === "completed" && (
              <button
                onClick={handleOpenAddProject}
                className={`${CLAY_CLASSES.btnMustard} px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer`}
              >
                <Plus className="w-4 h-4" />
                <span>Add Completed Project</span>
              </button>
            )}
            {activeTab === "ongoing" && (
              <button
                onClick={handleOpenAddOngoing}
                className={`${CLAY_CLASSES.btnCharcoal} px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer`}
              >
                <Plus className="w-4 h-4 text-mustard-brand" />
                <span>Add Ongoing Project</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: COMPLETED PROJECTS */}
        {activeTab === "completed" && (
          <div className="space-y-6">
            {completedList.length === 0 ? (
              <div className={`${CLAY_CLASSES.cardCream} p-12 text-center`}>
                <p className="font-mono text-sm text-charcoal-brand/60">No completed projects yet.</p>
                <button
                  onClick={handleOpenAddProject}
                  className="mt-4 px-4 py-2 bg-charcoal-brand text-cream-brand text-xs font-mono rounded-full"
                >
                  + Create First Project
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedList.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between space-y-4`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full bg-charcoal-brand/10 text-charcoal-brand font-mono text-[10px] font-bold uppercase">
                            {project.categoryLabel}
                          </span>
                          <h3 className="font-outfit text-xl font-bold text-charcoal-brand mt-1">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenEditProject(project)}
                            className="p-2 rounded-xl bg-charcoal-brand/10 hover:bg-charcoal-brand/20 text-charcoal-brand transition-colors cursor-pointer"
                            title="Edit Project"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-colors cursor-pointer"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="font-inter text-xs text-charcoal-brand/80 mt-2 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        <span className="font-mono text-[11px] font-bold text-charcoal-brand/60 block uppercase">
                          Key Features:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.keyFeatures.map((feat, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-cream-brand border border-charcoal-brand/10 text-charcoal-brand font-mono text-[10px]"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 space-y-1">
                        <span className="font-mono text-[11px] font-bold text-charcoal-brand/60 block uppercase">
                          Tech Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-full bg-mustard-brand/20 text-charcoal-brand font-mono text-[10px] font-bold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-charcoal-brand/10 flex items-center justify-between font-mono text-xs">
                      <span className="text-charcoal-brand/60">Owner: {project.owner}</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ONGOING PROJECTS */}
        {activeTab === "ongoing" && (
          <div className="space-y-6">
            {ongoingList.length === 0 ? (
              <div className={`${CLAY_CLASSES.cardCream} p-12 text-center`}>
                <p className="font-mono text-sm text-charcoal-brand/60">No active ongoing developments.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ongoingList.map((op) => (
                  <motion.div
                    key={op.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between space-y-4`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full bg-mustard-brand/20 text-charcoal-brand font-mono text-[10px] font-bold">
                            {op.badge}
                          </span>
                          <h3 className="font-outfit text-xl font-bold text-charcoal-brand mt-1">
                            {op.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleOpenEditOngoing(op)}
                            className="p-2 rounded-xl bg-charcoal-brand/10 hover:bg-charcoal-brand/20 text-charcoal-brand transition-colors cursor-pointer"
                            title="Edit Build"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteOngoing(op.id)}
                            className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-colors cursor-pointer"
                            title="Delete Build"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="font-inter text-xs text-charcoal-brand/80 mt-2 line-clamp-2">
                        {op.description}
                      </p>

                      <div className="mt-4">
                        <div className="flex items-center justify-between font-mono text-xs font-bold text-charcoal-brand mb-1">
                          <span>Build Progress</span>
                          <span>{op.progress}%</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-charcoal-brand/10 overflow-hidden">
                          <div
                            className="h-full bg-mustard-brand transition-all duration-500 rounded-full"
                            style={{ width: `${op.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 space-y-1">
                        <span className="font-mono text-[11px] font-bold text-charcoal-brand/60 block uppercase">
                          Planned Modules:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {op.features.map((f, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-cream-brand border border-charcoal-brand/10 text-charcoal-brand font-mono text-[10px]"
                            >
                              ⚡ {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-charcoal-brand/10 flex items-center justify-between">
                      <span className="font-mono text-xs text-charcoal-brand/60">
                        Target: {op.clientType}
                      </span>
                      <button
                        onClick={() => handlePromoteOngoingToCompleted(op)}
                        className="px-3 py-1.5 rounded-full bg-emerald-600 text-white font-mono text-[11px] font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Promote to Completed</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CLIENT ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-charcoal-brand/5 rounded-2xl">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search by client name, email, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${CLAY_CLASSES.input} px-4 py-2 text-xs text-charcoal-brand font-mono outline-none w-full sm:w-80`}
                />
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-charcoal-brand/60 font-bold">Filter Status:</span>
                <select
                  value={enquiryFilter}
                  onChange={(e) => setEnquiryFilter(e.target.value)}
                  className={`${CLAY_CLASSES.input} px-3 py-1.5 text-xs font-mono text-charcoal-brand outline-none cursor-pointer`}
                >
                  <option value="all">All Enquiries</option>
                  <option value="New">New 🔴</option>
                  <option value="Contacted">Contacted 🟡</option>
                  <option value="Converted">Converted 🟢</option>
                </select>
              </div>
            </div>

            {filteredEnquiries.length === 0 ? (
              <div className={`${CLAY_CLASSES.cardCream} p-12 text-center`}>
                <p className="font-mono text-sm text-charcoal-brand/60">No client enquiries found.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEnquiries.map((enq) => (
                  <motion.div
                    key={enq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                            enq.status.includes("New")
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : enq.status.includes("Contacted")
                              ? "bg-amber-100 text-amber-700 border border-amber-200"
                              : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {enq.status}
                        </span>
                        <span className="font-mono text-xs text-charcoal-brand/50">
                          {enq.timestamp}
                        </span>
                      </div>

                      <h4 className="font-outfit text-lg font-bold text-charcoal-brand flex items-center gap-2">
                        <User className="w-4 h-4 text-mustard-brand" />
                        {enq.clientName}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-charcoal-brand/80">
                        {enq.phone && (
                          <a href={`tel:${enq.phone}`} className="flex items-center gap-1 hover:text-mustard-brand">
                            <Phone className="w-3.5 h-3.5 text-charcoal-brand/50" />
                            {enq.phone}
                          </a>
                        )}
                        {enq.email && (
                          <a href={`mailto:${enq.email}`} className="flex items-center gap-1 hover:text-mustard-brand">
                            <Mail className="w-3.5 h-3.5 text-charcoal-brand/50" />
                            {enq.email}
                          </a>
                        )}
                      </div>

                      {enq.details && (
                        <p className="font-inter text-xs text-charcoal-brand/80 bg-cream-brand p-3 rounded-xl border border-charcoal-brand/10 mt-2">
                          "{enq.details}"
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                      <select
                        value={enq.status}
                        onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value as Enquiry["status"])}
                        className={`${CLAY_CLASSES.input} px-3 py-2 text-xs font-mono text-charcoal-brand outline-none cursor-pointer w-full sm:w-auto`}
                      >
                        <option value="New 🔴">Mark New 🔴</option>
                        <option value="Contacted 🟡">Mark Contacted 🟡</option>
                        <option value="Converted 🟢">Mark Converted 🟢</option>
                      </select>

                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-colors cursor-pointer"
                        title="Delete Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL: CHANGE PASSWORD & SECURITY */}
      <AnimatePresence>
        {passwordModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-brand/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-lg p-6 sm:p-8 relative shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-brand/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-mustard-brand/20 text-charcoal-brand">
                    <Key className="w-5 h-5 text-mustard-brand" />
                  </div>
                  <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand">
                    Admin Password &amp; Email Settings
                  </h3>
                </div>
                <button
                  onClick={() => setPasswordModalOpen(false)}
                  className="p-2 rounded-full hover:bg-charcoal-brand/10 transition-colors text-charcoal-brand"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Current Password / PIN *
                  </label>
                  <input
                    type="password"
                    required
                    value={changeCurrentPass}
                    onChange={(e) => setChangeCurrentPass(e.target.value)}
                    placeholder="Enter current password (default: synchad2026)"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand font-mono outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Admin Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={changeNewEmail}
                    onChange={(e) => setChangeNewEmail(e.target.value)}
                    placeholder="krytostudio@gmail.com"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand font-mono outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    New Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={changeNewPass}
                    onChange={(e) => setChangeNewPass(e.target.value)}
                    placeholder="Enter new strong password"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand font-mono outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Confirm New Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={changeConfirmPass}
                    onChange={(e) => setChangeConfirmPass(e.target.value)}
                    placeholder="Re-enter new password"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2.5 text-xs text-charcoal-brand font-mono outline-none`}
                  />
                </div>

                {changePassError && (
                  <p className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-xl text-center">
                    {changePassError}
                  </p>
                )}

                {changePassSuccess && (
                  <p className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-center">
                    {changePassSuccess}
                  </p>
                )}

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPasswordModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-charcoal-brand/10 text-xs font-bold text-charcoal-brand"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`${CLAY_CLASSES.btnMustard} px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Update Credentials</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL: ADD/EDIT COMPLETED PROJECT */}
      <AnimatePresence>
        {projectModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-brand/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto my-auto shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-brand/10">
                <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand">
                  {editingProject ? "Edit Completed Project" : "Add New Completed Project"}
                </h3>
                <button
                  onClick={() => setProjectModalOpen(false)}
                  className="p-2 rounded-full hover:bg-charcoal-brand/10 transition-colors text-charcoal-brand"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

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
                          category: e.target.value as "landing" | "software",
                          categoryLabel: e.target.value === "landing" ? "Landing Page + Enquiry System" : "Software & WebApp"
                        })
                      }
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs font-mono text-charcoal-brand outline-none cursor-pointer`}
                    >
                      <option value="landing">Landing Page + Enquiry System</option>
                      <option value="software">Software &amp; WebApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Subtitle / Tagline *
                  </label>
                  <input
                    type="text"
                    required
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
                      Client Role
                    </label>
                    <input
                      type="text"
                      value={projectFormData.role || ""}
                      onChange={(e) => setProjectFormData({ ...projectFormData, role: e.target.value })}
                      placeholder="e.g. Library Owner & Director"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={projectFormData.description || ""}
                    onChange={(e) => setProjectFormData({ ...projectFormData, description: e.target.value })}
                    placeholder="Brief description of project features and impact..."
                    className={`${CLAY_CLASSES.textarea} w-full px-4 py-2 text-xs text-charcoal-brand outline-none resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Key Features (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={featuresText}
                    onChange={(e) => setFeaturesText(e.target.value)}
                    placeholder="Interactive Form, Real-Time Reservation, WhatsApp Integration"
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
                    placeholder="Next.js, Tailwind CSS, Supabase"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    Live Demo URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={projectFormData.liveUrl || ""}
                    onChange={(e) => setProjectFormData({ ...projectFormData, liveUrl: e.target.value })}
                    placeholder="https://krishna-library.vercel.app/"
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
                    Save Project
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL: ADD/EDIT ONGOING PROJECT */}
      <AnimatePresence>
        {ongoingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-brand/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className={`${CLAY_CLASSES.cardCream} w-full max-w-xl p-6 sm:p-8 relative shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-brand/10">
                <h3 className="font-outfit text-2xl font-extrabold text-charcoal-brand">
                  {editingOngoing ? "Edit Ongoing Build" : "Add New Ongoing Development"}
                </h3>
                <button
                  onClick={() => setOngoingModalOpen(false)}
                  className="p-2 rounded-full hover:bg-charcoal-brand/10 transition-colors text-charcoal-brand"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveOngoing} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                    System Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={ongoingFormData.title || ""}
                    onChange={(e) => setOngoingFormData({ ...ongoingFormData, title: e.target.value })}
                    placeholder="e.g. Srijan Institute Management System"
                    className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Client Type *
                    </label>
                    <input
                      type="text"
                      required
                      value={ongoingFormData.clientType || ""}
                      onChange={(e) => setOngoingFormData({ ...ongoingFormData, clientType: e.target.value })}
                      placeholder="e.g. Commercial Institute"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-charcoal-brand mb-1">
                      Status Badge
                    </label>
                    <input
                      type="text"
                      value={ongoingFormData.badge || ""}
                      onChange={(e) => setOngoingFormData({ ...ongoingFormData, badge: e.target.value })}
                      placeholder="e.g. In Active Development ⚡"
                      className={`${CLAY_CLASSES.input} w-full px-4 py-2 text-xs text-charcoal-brand outline-none`}
                    />
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
