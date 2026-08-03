import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getSession } from "@/lib/auth";

export const runtime = "nodejs";

// Accept only these image types (jpg/jpeg both map to image/jpeg).
const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB (stays under Vercel's serverless body limit)

export async function POST(req: NextRequest) {
  // Admin-only.
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  // Credentials live only on the server; never exposed to the client.
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Image storage is not configured yet. Add BLOB_READ_WRITE_TOKEN." },
      { status: 503 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid upload request." }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file was provided." }, { status: 400 });
  }
  const ext = ALLOWED[file.type];
  if (!ext) {
    return NextResponse.json({ error: "Only JPG, PNG and WebP images are allowed." }, { status: 415 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Image must be 4 MB or smaller." }, { status: 413 });
  }

  try {
    const blob = await put(`uploads/image.${ext}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error("Blob upload failed:", e);
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
  }
}
