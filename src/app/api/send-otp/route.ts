import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ success: false, error: "Email and OTP code are required" }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const gmailAppPass = process.env.GMAIL_APP_PASSWORD;
    const gmailUser = process.env.GMAIL_USER || "krytostudio@gmail.com";

    const emailSubject = `[${code}] Your synchAD Admin Verification Code`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #faf6ef; padding: 30px; border-radius: 12px; color: #1c1c1c; max-width: 500px; margin: 0 auto; border: 1px solid #e2d9c8;">
        <h2 style="color: #1c1c1c; font-size: 24px; margin-bottom: 8px;">synch<span style="color: #d99b26;">AD</span> Admin Access</h2>
        <p style="font-size: 14px; color: #555; margin-bottom: 20px;">Use the following 6-digit verification code to complete your login into the synchAD Executive Control Panel:</p>
        
        <div style="background-color: #1c1c1c; color: #f59e0b; font-size: 32px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 18px; border-radius: 10px; margin-bottom: 20px;">
          ${code}
        </div>
        
        <p style="font-size: 12px; color: #888;">This code is valid for 5 minutes. If you did not request this code, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #e0d5c0; margin: 20px 0;" />
        <p style="font-size: 11px; color: #aaa; text-align: center;">synchAD Agency Portal Security &bull; krytostudio@gmail.com</p>
      </div>
    `;

    // OPTION 1: Resend API Delivery (Recommended - Free 3,000 emails/mo)
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const resendData = await resend.emails.send({
        from: "synchAD Security <onboarding@resend.dev>",
        to: [email],
        subject: emailSubject,
        html: emailHtml
      });

      if (resendData.error) {
        console.error("Resend API error:", resendData.error);
        return NextResponse.json({ success: false, error: resendData.error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, provider: "resend", message: `Real OTP email sent via Resend to ${email}` });
    }

    // OPTION 2: Gmail SMTP Delivery via Nodemailer
    if (gmailAppPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPass
        }
      });

      await transporter.sendMail({
        from: `"synchAD Security" <${gmailUser}>`,
        to: email,
        subject: emailSubject,
        html: emailHtml
      });

      return NextResponse.json({ success: true, provider: "gmail", message: `Real OTP email sent via Gmail to ${email}` });
    }

    // Fallback: Neither API key configured -> Return notice
    return NextResponse.json({
      success: false,
      error: "Neither RESEND_API_KEY nor GMAIL_APP_PASSWORD configured in .env.local",
      demoMode: true
    });
  } catch (error: any) {
    console.error("Error sending OTP email:", error);
    return NextResponse.json({ success: false, error: error?.message || "Failed to send email" }, { status: 500 });
  }
}
