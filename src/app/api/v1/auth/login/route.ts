// libs
import { NextResponse } from "next/server";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
import type { NextRequest } from "next/server";

const MOCK_USERS = [
  {
    id: "user-1",
    email: "user@example.com",
    password: "password123",
    fullName: "Nguyễn Văn A",
    phone: "0123456789"
  },
  {
    id: "admin-1",
    email: "admin@example.com",
    password: "admin123",
    fullName: "Admin User",
    phone: "0987654321"
  },
  {
    id: "manager-1",
    email: "manager@example.com",
    password: "manager123",
    fullName: "Manager User",
    phone: "0369852147"
  }
];

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    let body: LoginFormValues;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const user = MOCK_USERS.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate tokens
    const accessToken =
      "Bearer " +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    const idToken = "Bearer " + Math.random().toString(36).substring(2, 15);
    const refreshToken =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const response: LoginSuccessResponse = {
      message: "Login successful",
      data: {
        accessToken,
        idToken
      },
      status: 200,
      reasonStatusCode: "OK"
    };

    // Set refresh token as HttpOnly cookie
    const responseWithCookie = NextResponse.json(response, { status: 200 });

    // Set refresh token cookie with security attributes
    responseWithCookie.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/"
    });

    return responseWithCookie;
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
