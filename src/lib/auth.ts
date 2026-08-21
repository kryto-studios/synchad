// Admin Authentication & Session Management Module

export interface AdminCredentials {
  email: string;
  passwordHash: string;
  updatedAt: string;
}

export interface AdminSession {
  token: string;
  email: string;
  rememberMe: boolean;
  loggedInAt: number;
}

export interface PendingOTP {
  code: string;
  email: string;
  expiresAt: number;
}

const STORAGE_KEYS = {
  CREDENTIALS: "synchad_admin_credentials",
  SESSION: "synchad_admin_session",
  PENDING_OTP: "synchad_pending_otp"
};

export const DEFAULT_ADMIN_EMAIL = "krytostudio@gmail.com";
export const DEFAULT_ADMIN_PASSWORD = "synchad2026";

/**
 * Retrieve admin credentials from localStorage or fallback to defaults
 */
export function getAdminCredentials(): { email: string; password: string } {
  if (typeof window === "undefined") {
    return { email: DEFAULT_ADMIN_EMAIL, password: DEFAULT_ADMIN_PASSWORD };
  }
  try {
    const item = localStorage.getItem(STORAGE_KEYS.CREDENTIALS);
    if (item) {
      const parsed = JSON.parse(item);
      return {
        email: parsed.email || DEFAULT_ADMIN_EMAIL,
        password: parsed.password || DEFAULT_ADMIN_PASSWORD
      };
    }
  } catch (e) {
    console.error("Error reading admin credentials:", e);
  }
  return { email: DEFAULT_ADMIN_EMAIL, password: DEFAULT_ADMIN_PASSWORD };
}

/**
 * Save updated password and/or email to localStorage
 */
export function updateAdminCredentials(newEmail: string, newPassword: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const data = {
      email: newEmail.trim() || DEFAULT_ADMIN_EMAIL,
      password: newPassword,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.CREDENTIALS, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Error saving admin credentials:", e);
    return false;
  }
}

/**
 * Request real 6-digit OTP code sent via server (Resend API) to email
 */
export async function requestServerOTP(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase() })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true, message: data.message || "Verification code sent to your email." };
    } else {
      return { success: false, message: data.error || "Failed to send verification code." };
    }
  } catch (e: any) {
    return { success: false, message: e?.message || "Network error requesting verification code." };
  }
}

/**
 * Verify 6-digit OTP code against server
 */
export async function verifyServerOTPCode(email: string, inputCode: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), code: inputCode.trim() })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { success: true, message: "Email verified successfully!" };
    } else {
      return { success: false, message: data.error || "Invalid verification code." };
    }
  } catch (e: any) {
    return { success: false, message: e?.message || "Network error verifying code." };
  }
}


/**
 * Save logged-in session (Remember Me in localStorage, non-Remember Me in sessionStorage)
 */
export function saveAdminSession(email: string, rememberMe: boolean): AdminSession {
  const sessionToken = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const session: AdminSession = {
    token: sessionToken,
    email: email.trim().toLowerCase(),
    rememberMe,
    loggedInAt: Date.now()
  };

  if (typeof window !== "undefined") {
    try {
      const serialized = JSON.stringify(session);
      if (rememberMe) {
        localStorage.setItem(STORAGE_KEYS.SESSION, serialized);
        sessionStorage.removeItem(STORAGE_KEYS.SESSION);
      } else {
        sessionStorage.setItem(STORAGE_KEYS.SESSION, serialized);
        localStorage.removeItem(STORAGE_KEYS.SESSION);
      }
    } catch (e) {
      console.error("Error saving session:", e);
    }
  }

  return session;
}

/**
 * Check if a valid session exists in localStorage or sessionStorage
 */
export function getValidAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;

  try {
    // Check localStorage (Remember Me)
    const localItem = localStorage.getItem(STORAGE_KEYS.SESSION);
    if (localItem) {
      const parsed: AdminSession = JSON.parse(localItem);
      // Valid for 30 days
      const maxAge = 30 * 24 * 60 * 60 * 1000;
      if (Date.now() - parsed.loggedInAt < maxAge) {
        return parsed;
      } else {
        localStorage.removeItem(STORAGE_KEYS.SESSION);
      }
    }

    // Check sessionStorage (Single Tab / Browser session)
    const sessionItem = sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (sessionItem) {
      const parsed: AdminSession = JSON.parse(sessionItem);
      return parsed;
    }
  } catch (e) {
    console.error("Error reading admin session:", e);
  }

  return null;
}

/**
 * Logout admin and clear all sessions
 */
export function logoutAdmin(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    sessionStorage.removeItem(STORAGE_KEYS.PENDING_OTP);
  } catch (e) {
    console.error("Error during logout:", e);
  }
}
