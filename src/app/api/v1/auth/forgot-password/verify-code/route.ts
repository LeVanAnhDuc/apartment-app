import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Mock data for testing
const MOCK_EMAIL = "levananhduc1804@gmail.com";
const MOCK_OTP = "123456";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, otp } = body;

    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json(
        {
          message: "Email and OTP are required",
          success: false
        },
        { status: 400 }
      );
    }

    // Validate OTP format (6 digits)
    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        {
          message: "Invalid OTP format",
          success: false
        },
        { status: 400 }
      );
    }

    // For demo purposes, only allow the specific email and OTP combination
    if (email === MOCK_EMAIL && otp === MOCK_OTP) {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return NextResponse.json(
        {
          data: {
            message: "Code verified successfully",
            email: email
          },
          message: "OTP verified successfully",
          status: 200,
          reasonStatusCode: "OK"
        },
        { status: 200 }
      );
    } else {
      // Return appropriate error based on the case
      if (email !== MOCK_EMAIL) {
        return NextResponse.json(
          {
            message: "Email not found in our system",
            success: false
          },
          { status: 404 }
        );
      } else if (otp !== MOCK_OTP) {
        return NextResponse.json(
          {
            message: "Invalid or expired OTP",
            success: false
          },
          { status: 400 }
        );
      }
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
