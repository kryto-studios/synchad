// Global Store & LocalStorage Manager for Projects & Enquiries

export interface ProjectScreenshot {
  id: string;
  title: string;
  type: "desktop" | "mobile" | "dashboard" | "enquiry";
  src: string;
  caption: string;
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
    thumbnail: "/projects/krishna_library.jpg",
    liveUrl: "https://krishna-library.vercel.app/",
    description:
      "A fully responsive, eye-catching landing page designed specifically for Krishna Library study space. Features a dynamic seat reservation preview, high-converting interactive enquiry modal, quiet ambience highlights, and custom micro-interactions.",
    keyFeatures: [
      "Interactive Seat Enquiry & Reservation Form",
      "Real-Time Ambience & Amenity Showcase",
      "Mobile-First Responsive Layout with Smooth Parallax",
      "Instant WhatsApp & Direct Contact Integration"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase SQL"],
    hasEnquiryDemo: true,
    screenshots: [
      {
        id: "kl-1",
        title: "Desktop Hero & Seat Reservation Grid",
        type: "desktop",
        src: "/projects/krishna_library.jpg",
        caption: "Main hero banner highlighting premium study spaces and instant seat booking."
      },
      {
        id: "kl-2",
        title: "Interactive Enquiry Section View",
        type: "enquiry",
        src: "/projects/krishna_library.jpg",
        caption: "High-converting inquiry drawer allowing students to submit seat preferences."
      },
      {
        id: "kl-3",
        title: "Mobile Amenity & Feature Showcase",
        type: "mobile",
        src: "/projects/krishna_library.jpg",
        caption: "Optimized mobile view showcasing high-speed Wi-Fi, 24/7 access, and ergonomic pods."
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
    features: ["Digital QR Menu & Direct Ordering", "Live Kitchen Status Display", "Table Reservation & Bill Splitter"]
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
    features: ["Direct Room Reservation Engine", "Housekeeping & Room Status Matrix", "Automated Invoice & Identity Scan Integration"]
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
    features: ["Interactive Hourly Cost Calculator", "Vehicle Spec Comparison & Gallery", "Deposit & Booking Confirmation System"]
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
    return item ? JSON.parse(item) : INITIAL_COMPLETED_PROJECTS;
  } catch (e) {
    return INITIAL_COMPLETED_PROJECTS;
  }
}

export function saveCompletedProjects(projects: CompletedProject[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(projects));
  dispatchUpdate();
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
