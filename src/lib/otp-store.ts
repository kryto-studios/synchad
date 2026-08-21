// Server-Side In-Memory OTP Store

interface OTPRecord {
  code: string;
  expiresAt: number;
  attempts: number;
}

// Global server instance to persist across HMR in development
const globalForOTP = global as unknown as { otpStore: Map<string, OTPRecord> };

export const otpStore = globalForOTP.otpStore || new Map<string, OTPRecord>();

if (process.env.NODE_ENV !== "production") globalForOTP.otpStore = otpStore;

export function setServerOTP(email: string, code: string, durationMs: number = 5 * 60 * 1000): void {
  const cleanEmail = email.trim().toLowerCase();
  otpStore.set(cleanEmail, {
    code: code.trim(),
    expiresAt: Date.now() + durationMs,
    attempts: 0
  });
}

export function verifyServerOTP(email: string, inputCode: string): { success: boolean; error?: string } {
  const cleanEmail = email.trim().toLowerCase();
  const record = otpStore.get(cleanEmail);

  if (!record) {
    return { success: false, error: "No OTP request found for this email or it has expired. Please request a new code." };
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(cleanEmail);
    return { success: false, error: "Verification code has expired (valid for 5 minutes). Please request a new code." };
  }

  if (record.attempts >= 5) {
    otpStore.delete(cleanEmail);
    return { success: false, error: "Too many failed attempts. Please request a new code." };
  }

  record.attempts += 1;

  if (record.code === inputCode.trim()) {
    otpStore.delete(cleanEmail);
    return { success: true };
  }

  return { success: false, error: "Incorrect verification code. Please check your email inbox." };
}
