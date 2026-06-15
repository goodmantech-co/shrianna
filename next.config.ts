import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All imagery is self-hosted under /public, so no remote image hosts are
  // allowed. This closes the open image-proxy that `remotePatterns: "**"` left.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
