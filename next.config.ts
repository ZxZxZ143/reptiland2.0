import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // иначе next/image не заработает на статиках
  },
};

export default nextConfig;
