import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The middleware runs before requests to these paths:
export const config = {
  matcher: ["/admin/:path*", "/page/home/:path*"],
};

export async function middleware(request: NextRequest) {
  // Example: Check for a session cookie or auth token (customize as needed)
  const sessionToken = request.cookies.get("sessionToken"); 

  // If not authenticated, redirect to login or homepage
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }
  return NextResponse.next();
}
