import { NextResponse } from "next/server";
import { verifyServerOTP } from "@/lib/otp-store";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ success: false, error: "Email and OTP code are required" }, { status: 400 });
    }

    const result = verifyServerOTP(email, code);

    if (result.success) {
      return NextResponse.json({ success: true, message: "OTP verified successfully" });
    } else {
      return NextResponse.json({ success: false, error: result.error || "Invalid verification code" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ success: false, error: "Server verification error" }, { status: 500 });
  }
}
