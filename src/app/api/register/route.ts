import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract fields from frontend form
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const gender = formData.get("gender") as string;
    const portfolioLink = formData.get("portfolioLink") as string;
    const role = formData.get("role") as string;
    const paymentScreenshot = formData.get("paymentScreenshot") as File | null;

    // Convert file (if uploaded) to buffer
    const attachments: { filename: string; content: Buffer }[] = [];
if (paymentScreenshot) {
  const buffer = Buffer.from(await paymentScreenshot.arrayBuffer());
  attachments.push({
    filename: paymentScreenshot.name,
    content: buffer,
  });
}

    // 🔐 Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // 📨 Compose Email
    const mailOptions = {
      from: `"Revaa Couture Night" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your destination email
      subject: `✨ New ${role.charAt(0).toUpperCase() + role.slice(1)} Registration - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #fff0f5; padding: 20px; border-radius: 10px;">
          <h2 style="color: #e91e63;">👗 Revaa Couture Night Registration</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Role:</strong> ${role}</p>
          ${
            portfolioLink
              ? `<p><strong>Portfolio:</strong> <a href="${portfolioLink}" target="_blank">${portfolioLink}</a></p>`
              : ""
          }
          ${
            role === "model"
              ? `<p><strong>Payment Screenshot:</strong> Attached below 👇</p>`
              : `<p style="color: green;"><strong>Designer Registration:</strong> Free Entry 🎨</p>`
          }
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <p style="font-size: 0.9rem; color: #555;">This email was automatically generated from the Revaa Couture Night registration form.</p>
        </div>
      `,
      attachments,
    };

    // 🚀 Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
