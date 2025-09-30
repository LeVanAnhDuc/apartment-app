// libs
import { NextResponse } from "next/server";
// types
import type { NextRequest } from "next/server";
// others
import CONSTANTS from "./constants";

const { LOGIN, HOME } = CONSTANTS.ROUTES;
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === HOME) {
    return NextResponse.redirect(new URL(LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
