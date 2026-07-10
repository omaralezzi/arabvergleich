import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.APP_DIST_DIR ?? ".next",
};

export default nextConfig;
