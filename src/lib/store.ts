// Global Store & LocalStorage Manager for Projects & Enquiries
import { supabase } from "./supabase";

export interface ProjectScreenshot {
  id: string;
  title: string;
  type: "desktop" | "mobile" | "dashboard" | "enquiry";
  src: string;
  caption: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  completed: boolean;
  targetDate?: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  subtitle: string;
  owner: string;
  role: string;
  category: "landing" | "software";
  categoryLabel: string;
  status: "Delivered & Live" | "Operating & Deployed";
  statusColor: string;
  thumbnail: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  hasEnquiryDemo?: boolean;
  liveUrl?: string;
  // CRM & Client Portal Fields
  milestones?: ProjectMilestone[];
  clientNotes?: string;
  shareToken?: string;
  clientEmail?: string;
  clientPhone?: string;
  dealAmount?: string;
}

export interface OngoingProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  progress: number;
  badge: string;
  description: string;
  features: string[];
  // CRM & Client Portal Fields
  milestones?: ProjectMilestone[];
  clientNotes?: string;
  shareToken?: string;
  clientEmail?: string;
  clientPhone?: string;
  dealAmount?: string;
}


export interface Enquiry {
  id: string;
  type: "contact_proposal" | "project_enquiry";
  clientName: string;
  email?: string;
  phone?: string;
  serviceOrDesk?: string;
  details?: string;
  timestamp: string;
  status: "New 🔴" | "Contacted 🟡" | "Converted 🟢";
  adminNotes?: string;
}

// Initial Default Data
export const INITIAL_COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: "krishna-library",
    title: "Krishna Library",
    subtitle: "High-Conversion Study Space Landing Page & Seat Enquiry Engine",
    owner: "Shivendra Singh",
    role: "Library Owner & Director",
    category: "landing",
    categoryLabel: "Landing Page + Enquiry System",
    status: "Delivered & Live",
    statusColor: "bg-emerald-500",
    thumbnail: "/projects/KRISHNA LIBRARY/overview.png",
    liveUrl: "https://krishna-library.vercel.app/",
    description:
      "A fully responsive, eye-catching landing page and study space management ERP designed specifically for Krishna Library. Features visual seat map reservation, automated dues tracking, instant receipt generation, and real-time student activity logging.",
    keyFeatures: [
      "Interactive Seat Availability & Visual Floor Map Grid",
      "Automated Student Monthly Dues Tracker & WhatsApp Reminders",
      "Instant Cash & UPI Payment Logger with Digital Invoices",
      "Live Member Activity Logs & Comprehensive Admin Settings"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase SQL"],
    hasEnquiryDemo: true,
    screenshots: [
      {
        id: "kl-overview",
        title: "Executive Dashboard & Analytics Overview",
        type: "dashboard",
        src: "/projects/KRISHNA LIBRARY/overview.png",
        caption: "Main executive management overview showing total active members, seat occupancy, and revenue metrics."
      },
      {
        id: "kl-seat-map",
        title: "Interactive Floor Seat Map & Desk Grid",
        type: "desktop",
        src: "/projects/KRISHNA LIBRARY/seat map.png",
        caption: "Visual seat map layout allowing real-time desk assignment, shift filtering, and seat status updates."
      },
      {
        id: "kl-due-tracker",
        title: "Student Fee & Monthly Dues Tracker",
        type: "dashboard",
        src: "/projects/KRISHNA LIBRARY/Due Tracker.png",
        caption: "Automated dues manager highlighting pending fees, expiry dates, and automated reminder triggers."
      },
      {
        id: "kl-invoice",
        title: "Automated Student Invoice & Receipt Generator",
        type: "desktop",
        src: "/projects/KRISHNA LIBRARY/Invoice.png",
        caption: "Professional printable invoice generator for student seat passes and membership fees."
      },
      {
        id: "kl-payment",
        title: "Instant Payment Entry & Receipt Register",
        type: "enquiry",
        src: "/projects/KRISHNA LIBRARY/record payement.png",
        caption: "Fast cash & UPI payment logger with instant digital receipt generation and transaction logs."
      },
      {
        id: "kl-activity",
        title: "Live Activity Log & Audit Trail",
        type: "dashboard",
        src: "/projects/KRISHNA LIBRARY/activity section.png",
        caption: "Real-time activity log tracking member check-ins, payments, and system admin updates."
      },
      {
        id: "kl-settings",
        title: "Library Settings & Configuration Panel",
        type: "desktop",
        src: "/projects/KRISHNA LIBRARY/settings.png",
        caption: "Library configuration panel for shift timings, seat pricing tiers, and notification templates."
      }
    ]
  },
  {
    id: "mindspace-library",
    title: "Mindspace Library",
    subtitle: "Premium Digital Library Landing Page & Desk Availability Engine",
    owner: "Harsh Goyal",
    role: "Founder & Manager",
    category: "landing",
    categoryLabel: "Landing Page + Desk Selector",
    status: "Delivered & Live",
    statusColor: "bg-emerald-500",
    thumbnail: "/projects/mindspace_library.jpg",
    liveUrl: "https://mindspace-lib.vercel.app/",
    description:
      "An emerald and gold aesthetic digital experience for Mindspace Library. Includes an interactive desk availability selector, live seat enquiry submission, and smooth parallax visual section cards.",
    keyFeatures: [
      "Real-Time Interactive Desk Selector Grid",
      "Zone-Based Enquiry (Quiet Zone, Discussion Pods)",
      "Ultra-Eye-Catchy Dark & Emerald Claymorphic Aesthetic",
      "Automated Student Enquiry Routing"
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "React Motion"],
    hasEnquiryDemo: true,
    screenshots: [
      {
        id: "ml-1",
        title: "Landing Page & Desk Selector Map",
        type: "desktop",
        src: "/projects/mindspace_library.jpg",
        caption: "Interactive floor-map grid displaying live desk availability by study zone."
      },
      {
        id: "ml-2",
        title: "Real-Time Enquiry & Membership Form",
        type: "enquiry",
        src: "/projects/mindspace_library.jpg",
        caption: "Direct enquiry module for monthly passes and reserved student lockers."
      },
      {
        id: "ml-3",
        title: "Zone Breakdown & Mobile Experience",
        type: "mobile",
        src: "/projects/mindspace_library.jpg",
        caption: "Mobile view adapted for fast booking and map navigation."
      }
    ]
  },
  {
    id: "srijan-institute",
    title: "Srijan Institute Software",
    subtitle: "Custom ERP & Educational Management Application",
    owner: "Naveen Singh Rajput",
    role: "Institute Principal & Founder",
    category: "software",
    categoryLabel: "Application Software / ERP",
    status: "Operating & Deployed",
    statusColor: "bg-amber-500",
    thumbnail: "/projects/srijan_institute.jpg",
    description:
      "A complete institutional management application software built for Srijan Institute. Streamlines student registrations, batch timetables, monthly fee collection metrics, attendance logging, and staff management.",
    keyFeatures: [
      "Comprehensive Student Records & Registration Database",
      "Batch Timetable Scheduler & Faculty Management",
      "Automated Fee Ledger, Due Reminders & Collection Stats",
      "Admin Analytics Dashboard with Revenue Charts"
    ],
    techStack: ["Next.js App Router", "Python API", "Supabase SQL", "Tailwind CSS"],
    hasEnquiryDemo: false,
    screenshots: [
      {
        id: "si-1",
        title: "Executive Admin Dashboard Overview",
        type: "dashboard",
        src: "/projects/srijan_institute.jpg",
        caption: "Central dashboard showing student enrollment metrics, revenue trends, and active batches."
      },
      {
        id: "si-2",
        title: "Student Enrollment & Fee Tracking Module",
        type: "desktop",
        src: "/projects/srijan_institute.jpg",
        caption: "Searchable database table for batch management and automated receipts."
      },
      {
        id: "si-3",
        title: "Batch Timetable & Attendance Log",
        type: "desktop",
        src: "/projects/srijan_institute.jpg",
        caption: "Weekly batch schedule calendar and daily student attendance tracking."
      }
    ]
  }
];

export const INITIAL_ONGOING_PROJECTS: OngoingProject[] = [
  {
    id: "cafe-management",
    title: "Smart Cafe & Order Portal",
    category: "Cafe WebApp + POS Management",
    clientType: "Hospitality / F&B Client",
    progress: 80,
    badge: "In Active Development ⚡",
    description:
      "A modern cafe landing page combined with a real-time table QR menu ordering system, kitchen order display (KDS), and inventory tracker.",
    features: ["Digital QR Menu & Direct Ordering", "Live Kitchen Status Display", "Table Reservation & Bill Splitter"],
    shareToken: "cafe-management",
    clientNotes: "Client requested custom Kitchen KDS display integration. Contact: Rohit Verma (+91 98112 34567).",
    dealAmount: "₹13,799",
    milestones: [
      { id: "m1", title: "UI Wireframes & Digital QR Menu Design", completed: true, targetDate: "Aug 10" },
      { id: "m2", title: "Kitchen Order Display (KDS) & Order Pipeline", completed: true, targetDate: "Aug 18" },
      { id: "m3", title: "Supabase Database & POS Billing Setup", completed: true, targetDate: "Aug 22" },
      { id: "m4", title: "Final Staff Training & Deployment", completed: false, targetDate: "Aug 28" }
    ]
  },
  {
    id: "hotel-management",
    title: "Luxury Hotel Suite & PMS",
    category: "Hotel Landing Page + WebApp PMS",
    clientType: "Resort & Hotel Client",
    progress: 65,
    badge: "Confidential Build 🔒",
    description:
      "An elegant hotel booking website coupled with an internal Property Management System (PMS) for room allocations, guest check-ins, and billing.",
    features: ["Direct Room Reservation Engine", "Housekeeping & Room Status Matrix", "Automated Invoice & Identity Scan Integration"],
    shareToken: "hotel-management",
    clientNotes: "Confidential resort project. Room allocation grid testing in progress.",
    dealAmount: "₹18,500",
    milestones: [
      { id: "hm1", title: "Suite Showcase Landing Page", completed: true, targetDate: "Aug 12" },
      { id: "hm2", title: "Property Management System (PMS) Matrix", completed: true, targetDate: "Aug 20" },
      { id: "hm3", title: "Guest ID Scan & Invoice Generator", completed: false, targetDate: "Sep 02" },
      { id: "hm4", title: "Payment Gateway & Production Deployment", completed: false, targetDate: "Sep 10" }
    ]
  },
  {
    id: "car-rental",
    title: "DriveNow Car Rental Service",
    category: "Car Rental Landing Page & Calculator",
    clientType: "Automobile Fleet Client",
    progress: 75,
    badge: "Testing & Polishing 🚗",
    description:
      "A sleek rental service website featuring real-time vehicle fleet filtering, hourly/daily cost estimator, document verification, and instant booking.",
    features: ["Interactive Hourly Cost Calculator", "Vehicle Spec Comparison & Gallery", "Deposit & Booking Confirmation System"],
    shareToken: "car-rental",
    clientNotes: "Fleet spec matrix complete. Document verification testing.",
    dealAmount: "₹10,899",
    milestones: [
      { id: "cr1", title: "Vehicle Spec Filter Grid & Gallery", completed: true, targetDate: "Aug 14" },
      { id: "cr2", title: "Hourly/Daily Cost Estimator Engine", completed: true, targetDate: "Aug 19" },
      { id: "cr3", title: "Security Deposit & Identity Upload", completed: false, targetDate: "Aug 29" }
    ]
  }
];


export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: "enq-101",
    type: "contact_proposal",
    clientName: "Rohan Verma",
    email: "rohan@vtech.com",
    phone: "+91 98112 34567",
    serviceOrDesk: "webs",
    details: "Looking to build a custom ERP landing page & client portal for our tech institute.",
    timestamp: "2026-08-19 12:30 PM",
    status: "New 🔴",
    adminNotes: "Urgent query regarding pricing package."
  },
  {
    id: "enq-102",
    type: "project_enquiry",
    clientName: "Ananya Sharma",
    phone: "+91 97654 32109",
    serviceOrDesk: "Krishna Library - Quiet Study Desk",
    details: "Shift: Morning (8 AM - 2 PM). Wants reserved locker.",
    timestamp: "2026-08-19 01:15 PM",
    status: "Contacted 🟡",
    adminNotes: "Called student, confirmed desk availability."
  }
];

// Helper functions with localStorage + event listener dispatch for live reactivity
const STORAGE_KEYS = {
  COMPLETED: "synchad_completed_projects_v1",
  ONGOING: "synchad_ongoing_projects_v1",
  ENQUIRIES: "synchad_enquiries_v1",
};

export const STORE_EVENT_NAME = "synchad_store_update";

function dispatchUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(STORE_EVENT_NAME));
  }
}

// Completed Projects Accessors
export function getCompletedProjects(): CompletedProject[] {
  if (typeof window === "undefined") return INITIAL_COMPLETED_PROJECTS;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.COMPLETED);
    if (!item) return INITIAL_COMPLETED_PROJECTS;
    const parsed: CompletedProject[] = JSON.parse(item);
    // Upgrade Krishna Library images if using old single thumbnail
    const updated = parsed.map(p => {
      if (p.id === "krishna-library" && (!p.screenshots || p.screenshots.length < 7 || p.thumbnail === "/projects/krishna_library.jpg")) {
        const initial = INITIAL_COMPLETED_PROJECTS.find(i => i.id === "krishna-library");
        return initial || p;
      }
      return p;
    });
    return updated;
  } catch (e) {
    return INITIAL_COMPLETED_PROJECTS;
  }
}


export function saveCompletedProjects(projects: CompletedProject[]) {

  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(projects));
  dispatchUpdate();

  // Async sync to Supabase if connected
  if (supabase) {
    const formatted = projects.map(p => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      owner: p.owner,
      role: p.role,
      category: p.category,
      category_label: p.categoryLabel,
      status: p.status,
      status_color: p.statusColor,
      thumbnail: p.thumbnail,
      description: p.description,
      key_features: p.keyFeatures,
      tech_stack: p.techStack,
      screenshots: p.screenshots,
      has_enquiry_demo: p.hasEnquiryDemo || false,
      live_url: p.liveUrl || null,
      milestones: p.milestones || [],
      client_notes: p.clientNotes || null,
      share_token: p.shareToken || p.id,
      client_email: p.clientEmail || null,
      client_phone: p.clientPhone || null,
      deal_amount: p.dealAmount || null
    }));
    Promise.resolve(supabase.from("completed_projects").upsert(formatted)).catch((err: any) => console.warn("Supabase sync warning:", err));
  }
}

// Ongoing Projects Accessors
export function getOngoingProjects(): OngoingProject[] {
  if (typeof window === "undefined") return INITIAL_ONGOING_PROJECTS;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.ONGOING);
    return item ? JSON.parse(item) : INITIAL_ONGOING_PROJECTS;
  } catch (e) {
    return INITIAL_ONGOING_PROJECTS;
  }
}

export function saveOngoingProjects(projects: OngoingProject[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.ONGOING, JSON.stringify(projects));
  dispatchUpdate();

  if (supabase) {
    const formatted = projects.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      client_type: p.clientType,
      progress: p.progress,
      badge: p.badge,
      description: p.description,
      features: p.features,
      milestones: p.milestones || [],
      client_notes: p.clientNotes || null,
      share_token: p.shareToken || p.id,
      client_email: p.clientEmail || null,
      client_phone: p.clientPhone || null,
      deal_amount: p.dealAmount || null
    }));
    Promise.resolve(supabase.from("ongoing_projects").upsert(formatted)).catch((err: any) => console.warn("Supabase sync warning:", err));
  }
}

// Enquiries Accessors
export function getEnquiries(): Enquiry[] {
  if (typeof window === "undefined") return INITIAL_ENQUIRIES;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return item ? JSON.parse(item) : INITIAL_ENQUIRIES;
  } catch (e) {
    return INITIAL_ENQUIRIES;
  }
}

export function saveEnquiries(enquiries: Enquiry[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  dispatchUpdate();

  if (supabase) {
    const formatted = enquiries.map(e => ({
      id: e.id,
      type: e.type,
      client_name: e.clientName,
      email: e.email || null,
      phone: e.phone || null,
      service_or_desk: e.serviceOrDesk || null,
      details: e.details || null,
      timestamp: e.timestamp,
      status: e.status,
      admin_notes: e.adminNotes || null
    }));
    Promise.resolve(supabase.from("enquiries").upsert(formatted)).catch((err: any) => console.warn("Supabase sync warning:", err));
  }
}


export function addEnquiry(enquiry: Omit<Enquiry, "id" | "timestamp" | "status">) {
  const current = getEnquiries();
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: `enq-${Date.now()}`,
    timestamp: new Date().toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }),
    status: "New 🔴",
  };
  saveEnquiries([newEnquiry, ...current]);
  return newEnquiry;
}

export function resetStoreToDefaults() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEYS.COMPLETED);
  localStorage.removeItem(STORAGE_KEYS.ONGOING);
  localStorage.removeItem(STORAGE_KEYS.ENQUIRIES);
  dispatchUpdate();
}

/**
 * Async fetch from Supabase to update local store when available
 */
export async function syncFromSupabase() {
  if (!supabase) return;
  try {
    const [compRes, ongRes, enqRes] = await Promise.all([
      supabase.from("completed_projects").select("*"),
      supabase.from("ongoing_projects").select("*"),
      supabase.from("enquiries").select("*")
    ]);

    if (compRes.data && compRes.data.length > 0) {
      const projects: CompletedProject[] = compRes.data.map(p => ({
        id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        owner: p.owner,
        role: p.role,
        category: p.category,
        categoryLabel: p.category_label,
        status: p.status,
        statusColor: p.status_color,
        thumbnail: p.thumbnail,
        description: p.description,
        keyFeatures: p.key_features || [],
        techStack: p.tech_stack || [],
        screenshots: p.screenshots || [],
        hasEnquiryDemo: p.has_enquiry_demo,
        liveUrl: p.live_url,
        milestones: p.milestones || [],
        clientNotes: p.client_notes,
        shareToken: p.share_token || p.id,
        clientEmail: p.client_email,
        clientPhone: p.client_phone,
        dealAmount: p.deal_amount
      }));
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(projects));
    }

    if (ongRes.data && ongRes.data.length > 0) {
      const ongoing: OngoingProject[] = ongRes.data.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        clientType: p.client_type,
        progress: p.progress,
        badge: p.badge,
        description: p.description,
        features: p.features || [],
        milestones: p.milestones || [],
        clientNotes: p.client_notes,
        shareToken: p.share_token || p.id,
        clientEmail: p.client_email,
        clientPhone: p.client_phone,
        dealAmount: p.deal_amount
      }));
      localStorage.setItem(STORAGE_KEYS.ONGOING, JSON.stringify(ongoing));
    }

    if (enqRes.data && enqRes.data.length > 0) {
      const enquiries: Enquiry[] = enqRes.data.map(e => ({
        id: e.id,
        type: e.type,
        clientName: e.client_name,
        email: e.email,
        phone: e.phone,
        serviceOrDesk: e.service_or_desk,
        details: e.details,
        timestamp: e.timestamp,
        status: e.status,
        adminNotes: e.admin_notes
      }));
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
    }

    dispatchUpdate();
  } catch (err) {
    console.warn("Error fetching data from Supabase:", err);
  }
}


