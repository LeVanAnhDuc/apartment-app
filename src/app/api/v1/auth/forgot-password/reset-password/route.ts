import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Mock data for testing
const MOCK_EMAIL = "levananhduc1804@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, newPassword, confirmPassword } = body;

    // Validate required fields
    if (!email || !newPassword || !confirmPassword) {
      return NextResponse.json(
        {
          message: "Email, new password, and confirm password are required",
          success: false
        },
        { status: 400 }
      );
    }

    // Validate password match
    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        {
          message: "Passwords do not match",
          success: false
        },
        { status: 400 }
      );
    }

    // Validate password strength
    if (newPassword.length < 8) {
      return NextResponse.json(
        {
          message: "Password must be at least 8 characters long",
          success: false
        },
        { status: 400 }
      );
    }

    // For demo purposes, only allow the specific email
    if (email === MOCK_EMAIL) {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return NextResponse.json(
        {
          data: {
            message: "Your password has been reset successfully"
          },
          message: "Password reset successfully",
          status: 200,
          reasonStatusCode: "OK"
        },
        { status: 200 }
      );
    } else {
      // For other emails, return email not found error
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
