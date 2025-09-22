import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // ✅ Extract event inquiry data from frontend
    const { name, email, phone, eventType, message } = await req.json();

    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json(
        { ok: false, message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // ✅ Setup transporter (FIXED)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail from .env.local
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // ✅ Client confirmation email
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Event Inquiry - Revaa Events",
      html: `<p>Hi ${name},</p><p>Thank you for reaching out to Revaa Events! 🎉</p>
             <p>We’ve received your inquiry about <b>${eventType}</b> and will get back to you soon.</p>`,
    };

    // ✅ Internal notification email for Revaa team
    const teamMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🎉 New Event Inquiry: ${eventType} - ${name}`,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Phone:</b> ${phone}</p>
             <p><b>Message:</b> ${message}</p>`,
    };

    // ✅ Send both emails
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(teamMailOptions);

    return NextResponse.json(
      { ok: true, message: "Event inquiry sent successfully! Check your email for confirmation." },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send event inquiry", error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
