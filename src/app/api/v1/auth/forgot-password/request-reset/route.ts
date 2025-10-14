import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Mock data for testing
const MOCK_EMAIL = "levananhduc1804@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          message: "Email is required",
          success: false
        },
        { status: 400 }
      );
    }

    // Check if email is valid format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Invalid email format",
          success: false
        },
        { status: 400 }
      );
    }

    // For demo purposes, only the specific email will succeed
    if (email === MOCK_EMAIL) {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return NextResponse.json(
        {
          data: {
            message: "Reset code sent to your email",
            email: email
          },
          message: "Reset code sent successfully",
          status: 200,
          reasonStatusCode: "OK"
        },
        { status: 200 }
      );
    } else {
      // For other emails, return error that email is not found
      return NextResponse.json(
        {
          message: "Email not found in our system",
          success: false
        },
        { status: 404 }
      );
    }
  } catch {
    // In production, use proper logging service instead of console.error
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false
      },
      { status: 500 }
    );
  }
}
