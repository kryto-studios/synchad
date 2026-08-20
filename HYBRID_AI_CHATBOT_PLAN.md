# Specification Plan - Hybrid Gemini AI + Live Human Handover Chatbot

**Project:** synchAD Digital Agency Website (`synchad.com`)  
**Status:** Saved for future implementation (Do NOT implement until user explicitly requests).

---

## 🎯 Architecture Overview

```
[ Visitor Chat Bubble Widget ]
             │
             ├─► 1. Primary Line: Google Gemini 1.5 Flash AI Assistant (100% Free Tier)
             │      • Answers queries on synchAD packages:
             │        - ₹5,879 Ultra-Basic Landing (Negotiable!)
             │        - ₹6,799 Starter Landing Pack (Domain + Hostinger + Google Analytics)
             │        - ₹10,899 Custom WebApp Base (Supabase DB + Dashboard)
             │        - ₹13,799 Niche WebApp + Landing (Libraries, Coaching, Clinics, Gyms, Cafes, Rentals)
             │      • Explains 3 Months Free Debugging + 1 Month Dev Error Support Policy.
             │      • Explains Founder Execution (Dewansh & Aryan).
             │
             └─► 2. Handover Triggers:
                    • User requests: "Talk to human", "Dewansh/Aryan se baat karni hai", "Call me".
                    • AI low confidence or complex custom requirement detected.
                    │
                    ▼
     [ SEAMLESS MULTI-CHANNEL HANDOVER EXECUTION ]
             │
             ├─► A. Tawk.to JS Widget Trigger: Auto-maximizes widget & rings Tawk.to App on Dewansh & Aryan's phones.
             ├─► B. One-Tap WhatsApp Handover: Pre-filled text to +91 82234 40812.
             └─► C. Telegram Alert Bot & Admin Inbox: Instant push notification to founders' phones + logged in /admin.
```

---

## 📋 Implementation Steps (When Triggered)

1. **API Route Setup (`src/app/api/chat/route.ts`)**:
   - Integrate `@google/genai` with system instructions containing synchAD's full agency profile, pricing tiers, and founder details.
   - Return response JSON with `handoverTriggered: boolean` flag if human intervention is required.

2. **Floating Chatbot UI (`src/components/AIChatWidget.tsx`)**:
   - Claymorphic floating bubble matching synchAD's mustard/emerald design system.
   - Smooth message streaming and instant action buttons.

3. **Handover Integrations**:
   - **Tawk.to Script**: Embed in `layout.tsx` with hidden widget by default; unhide & maximize on handover.
   - **WhatsApp Direct**: Generate pre-filled `https://wa.me/918223440812?text=...` deep link.
   - **Telegram Push Alert**: Free Telegram Bot API webhook call on handover.
