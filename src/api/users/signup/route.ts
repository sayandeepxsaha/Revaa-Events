import { connect } from "@/dbConnect/dbConnect";
import { sendVerificationEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });
    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    await sendVerificationEmail({
      email,
      emailType: "VERIFY",
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
