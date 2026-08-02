import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "fallback-secret-change-in-production"
);
const PUBLIC_ADMIN_PATHS = ["/admin/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (PUBLIC_ADMIN_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next();

  const token = request.cookies.get("tesdef_admin_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    await jwtVerify(token, SECRET);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete("tesdef_admin_session");
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
