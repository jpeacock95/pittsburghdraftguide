import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // PDF checklist has shortened URLs that need to redirect to actual pages
      { source: "/hotels", destination: "/where-to-stay", permanent: true },
      { source: "/transit", destination: "/getting-around", permanent: true },
      { source: "/parking", destination: "/parking-transportation", permanent: true },
      { source: "/bars", destination: "/bars-restaurants", permanent: true },
    ];
  },
};

export default nextConfig;
