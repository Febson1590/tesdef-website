import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Vercel Blob public storage (uploaded images)
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
};

export default nextConfig;
