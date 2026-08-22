-- Supabase Database Schema for Synchad Portfolio & Client Admin System

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Completed Projects Table
CREATE TABLE IF NOT EXISTS public.completed_projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    owner TEXT NOT NULL,
    role TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('landing', 'software')),
    category_label TEXT NOT NULL,
    status TEXT NOT NULL,
    status_color TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    description TEXT NOT NULL,
    key_features JSONB NOT NULL DEFAULT '[]'::jsonb,
    tech_stack JSONB NOT NULL DEFAULT '[]'::jsonb,
    screenshots JSONB NOT NULL DEFAULT '[]'::jsonb,
    has_enquiry_demo BOOLEAN DEFAULT false,
    live_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Ongoing Projects Table
CREATE TABLE IF NOT EXISTS public.ongoing_projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    client_type TEXT NOT NULL,
    progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
    badge TEXT NOT NULL,
    description TEXT NOT NULL,
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('contact_proposal', 'project_enquiry')),
    client_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    service_or_desk TEXT,
    details TEXT,
    timestamp TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New 🔴',
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Admin Credentials Table
CREATE TABLE IF NOT EXISTS public.admin_credentials (
    id TEXT PRIMARY KEY DEFAULT 'default',
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row-Level Security (RLS) on all public tables
ALTER TABLE public.completed_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ongoing_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_credentials ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public read completed projects" ON public.completed_projects;
DROP POLICY IF EXISTS "Public read ongoing projects" ON public.ongoing_projects;
DROP POLICY IF EXISTS "Public read enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Public insert enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Public update enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Public all completed projects" ON public.completed_projects;
DROP POLICY IF EXISTS "Public all ongoing projects" ON public.ongoing_projects;

-- Row Level Security Policies
-- Completed Projects: Read and Write permissions for anon & public (client-side admin)
CREATE POLICY "Public read completed projects" ON public.completed_projects FOR SELECT TO public USING (true);
CREATE POLICY "Public all completed projects" ON public.completed_projects FOR ALL TO public USING (true) WITH CHECK (true);

-- Ongoing Projects: Read and Write permissions for anon & public
CREATE POLICY "Public read ongoing projects" ON public.ongoing_projects FOR SELECT TO public USING (true);
CREATE POLICY "Public all ongoing projects" ON public.ongoing_projects FOR ALL TO public USING (true) WITH CHECK (true);

-- Enquiries: Anyone can submit (INSERT) and read/update (for Admin Dashboard)
CREATE POLICY "Public read enquiries" ON public.enquiries FOR SELECT TO public USING (true);
CREATE POLICY "Public insert enquiries" ON public.enquiries FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Public update enquiries" ON public.enquiries FOR UPDATE TO public USING (true) WITH CHECK (true);

-- Admin Credentials Policy
CREATE POLICY "Public read admin credentials" ON public.admin_credentials FOR SELECT TO public USING (true);
CREATE POLICY "Public update admin credentials" ON public.admin_credentials FOR UPDATE TO public USING (true) WITH CHECK (true);


-- Initial Seed Data Insertion
INSERT INTO public.completed_projects (id, title, subtitle, owner, role, category, category_label, status, status_color, thumbnail, live_url, description, key_features, tech_stack, has_enquiry_demo, screenshots)
VALUES
(
    'krishna-library',
    'Krishna Library',
    'High-Conversion Study Space Landing Page & Seat Enquiry Engine',
    'Shivendra Singh',
    'Library Owner & Director',
    'landing',
    'Landing Page + Enquiry System',
    'Delivered & Live',
    'bg-emerald-500',
    '/projects/KRISHNA LIBRARY/overview.png',
    'https://krishna-library.vercel.app/',
    'A fully responsive, eye-catching landing page and study space management ERP designed specifically for Krishna Library. Features visual seat map reservation, automated dues tracking, instant receipt generation, and real-time student activity logging.',
    '["Interactive Seat Availability & Visual Floor Map Grid", "Automated Student Monthly Dues Tracker & WhatsApp Reminders", "Instant Cash & UPI Payment Logger with Digital Invoices", "Live Member Activity Logs & Comprehensive Admin Settings"]'::jsonb,
    '["Next.js", "Tailwind CSS", "Framer Motion", "Supabase SQL"]'::jsonb,
    true,
    '[{"id": "kl-overview", "src": "/projects/KRISHNA LIBRARY/overview.png", "type": "dashboard", "title": "Executive Dashboard & Analytics Overview", "caption": "Main executive management overview showing total active members, seat occupancy, and revenue metrics."}, {"id": "kl-seat-map", "src": "/projects/KRISHNA LIBRARY/seat map.png", "type": "desktop", "title": "Interactive Floor Seat Map & Desk Grid", "caption": "Visual seat map layout allowing real-time desk assignment, shift filtering, and seat status updates."}, {"id": "kl-due-tracker", "src": "/projects/KRISHNA LIBRARY/Due Tracker.png", "type": "dashboard", "title": "Student Fee & Monthly Dues Tracker", "caption": "Automated dues manager highlighting pending fees, expiry dates, and automated reminder triggers."}, {"id": "kl-invoice", "src": "/projects/KRISHNA LIBRARY/Invoice.png", "type": "desktop", "title": "Automated Student Invoice & Receipt Generator", "caption": "Professional printable invoice generator for student seat passes and membership fees."}, {"id": "kl-payment", "src": "/projects/KRISHNA LIBRARY/record payement.png", "type": "enquiry", "title": "Instant Payment Entry & Receipt Register", "caption": "Fast cash & UPI payment logger with instant digital receipt generation and transaction logs."}, {"id": "kl-activity", "src": "/projects/KRISHNA LIBRARY/activity section.png", "type": "dashboard", "title": "Live Activity Log & Audit Trail", "caption": "Real-time activity log tracking member check-ins, payments, and system admin updates."}, {"id": "kl-settings", "src": "/projects/KRISHNA LIBRARY/settings.png", "type": "desktop", "title": "Library Settings & Configuration Panel", "caption": "Library configuration panel for shift timings, seat pricing tiers, and notification templates."}]'::jsonb
),
(
    'mindspace-library',
    'Mindspace Library',
    'Premium Digital Library Landing Page & Desk Availability Engine',
    'Harsh Goyal',
    'Founder & Manager',
    'landing',
    'Landing Page + Desk Selector',
    'Delivered & Live',
    'bg-emerald-500',
    '/projects/mindspace_library.jpg',
    'https://mindspace-lib.vercel.app/',
    'An emerald and gold aesthetic digital experience for Mindspace Library. Includes an interactive desk availability selector, live seat enquiry submission, and smooth parallax visual section cards.',
    '["Real-Time Interactive Desk Selector Grid", "Zone-Based Enquiry (Quiet Zone, Discussion Pods)", "Ultra-Eye-Catchy Dark & Emerald Claymorphic Aesthetic", "Automated Student Enquiry Routing"]'::jsonb,
    '["Next.js", "Tailwind CSS", "TypeScript", "React Motion"]'::jsonb,
    true,
    '[{"id": "ml-1", "src": "/projects/mindspace_library.jpg", "type": "desktop", "title": "Landing Page & Desk Selector Map", "caption": "Interactive floor-map grid displaying live desk availability by study zone."}, {"id": "ml-2", "src": "/projects/mindspace_library.jpg", "type": "enquiry", "title": "Real-Time Enquiry & Membership Form", "caption": "Direct enquiry module for monthly passes and reserved student lockers."}, {"id": "ml-3", "src": "/projects/mindspace_library.jpg", "type": "mobile", "title": "Zone Breakdown & Mobile Experience", "caption": "Mobile view adapted for fast booking and map navigation."}]'::jsonb
),
(
    'srijan-institute',
    'Srijan Institute Software',
    'Custom ERP & Educational Management Application',
    'Naveen Singh Rajput',
    'Institute Principal & Founder',
    'software',
    'Application Software / ERP',
    'Operating & Deployed',
    'bg-amber-500',
    '/projects/srijan_institute.jpg',
    NULL,
    'A complete institutional management application software built for Srijan Institute. Streamlines student registrations, batch timetables, monthly fee collection metrics, attendance logging, and staff management.',
    '["Comprehensive Student Records & Registration Database", "Batch Timetable Scheduler & Faculty Management", "Automated Fee Ledger, Due Reminders & Collection Stats", "Admin Analytics Dashboard with Revenue Charts"]'::jsonb,
    '["Next.js App Router", "Python API", "Supabase SQL", "Tailwind CSS"]'::jsonb,
    false,
    '[{"id": "si-1", "src": "/projects/srijan_institute.jpg", "type": "dashboard", "title": "Executive Admin Dashboard Overview", "caption": "Central dashboard showing student enrollment metrics, revenue trends, and active batches."}, {"id": "si-2", "src": "/projects/srijan_institute.jpg", "type": "desktop", "title": "Student Enrollment & Fee Tracking Module", "caption": "Searchable database table for batch management and automated receipts."}, {"id": "si-3", "src": "/projects/srijan_institute.jpg", "type": "desktop", "title": "Batch Timetable & Attendance Log", "caption": "Weekly batch schedule calendar and daily student attendance tracking."}]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.ongoing_projects (id, title, category, client_type, progress, badge, description, features)
VALUES
(
    'cafe-management',
    'Smart Cafe & Order Portal',
    'Cafe WebApp + POS Management',
    'Hospitality / F&B Client',
    80,
    'In Active Development ⚡',
    'A modern cafe landing page combined with a real-time table QR menu ordering system, kitchen order display (KDS), and inventory tracker.',
    '["Digital QR Menu & Direct Ordering", "Live Kitchen Status Display", "Table Reservation & Bill Splitter"]'::jsonb
),
(
    'hotel-management',
    'Luxury Hotel Suite & PMS',
    'Hotel Landing Page + WebApp PMS',
    'Resort & Hotel Client',
    65,
    'Confidential Build 🔒',
    'An elegant hotel booking website coupled with an internal Property Management System (PMS) for room allocations, guest check-ins, and billing.',
    '["Direct Room Reservation Engine", "Housekeeping & Room Status Matrix", "Automated Invoice & Identity Scan Integration"]'::jsonb
),
(
    'car-rental',
    'DriveNow Car Rental Service',
    'Car Rental Landing Page & Calculator',
    'Automobile Fleet Client',
    75,
    'Testing & Polishing 🚗',
    'A sleek rental service website featuring real-time vehicle fleet filtering, hourly/daily cost estimator, document verification, and instant booking.',
    '["Interactive Hourly Cost Calculator", "Vehicle Spec Comparison & Gallery", "Deposit & Booking Confirmation System"]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.enquiries (id, type, client_name, email, phone, service_or_desk, details, timestamp, status, admin_notes)
VALUES
(
    'enq-101',
    'contact_proposal',
    'Rohan Verma',
    'rohan@vtech.com',
    '+91 98112 34567',
    'webs',
    'Looking to build a custom ERP landing page & client portal for our tech institute.',
    '2026-08-19 12:30 PM',
    'New 🔴',
    'Urgent query regarding pricing package.'
),
(
    'enq-102',
    'project_enquiry',
    'Ananya Sharma',
    NULL,
    '+91 97654 32109',
    'Krishna Library - Quiet Study Desk',
    'Shift: Morning (8 AM - 2 PM). Wants reserved locker.',
    '2026-08-19 01:15 PM',
    'Contacted 🟡',
    'Called student, confirmed desk availability.'
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.admin_credentials (id, email, password_hash)
VALUES
(
    'default',
    'krytostudio@gmail.com',
    'synchad2026'
)
ON CONFLICT (id) DO NOTHING;
