import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET ?? "fallback-secret-change-in-production"
);
const COOKIE = "tesdef_admin_session";
const EXPIRY = "24h";

export type AdminPayload = {
  sub: string;
  email: string;
  name: string;
  role: string;
};

export async function createSession(payload: AdminPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRY)
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function getSession(): Promise<AdminPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as AdminPayload;
  } catch {
    return null;
  }
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE);
}

export async function requireSession(): Promise<AdminPayload> {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}
