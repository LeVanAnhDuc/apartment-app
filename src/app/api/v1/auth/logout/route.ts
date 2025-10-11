// libs
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  try {
    // Simulate logout processing time
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Create response for successful logout
    const response = {
      message: "Logout successful",
      status: 200,
      reasonStatusCode: "OK"
    };

    // Clear refresh token cookie
    const responseWithClearedCookie = NextResponse.json(response, {
      status: 200
    });

    // Clear the refresh token cookie
    responseWithClearedCookie.cookies.set("refreshToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expire immediately
      path: "/"
    });

    return responseWithClearedCookie;
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
