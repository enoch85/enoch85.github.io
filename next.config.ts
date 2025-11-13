import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // For deployment to rekrytera.danielhansson.nu
  basePath: '',
};

export default nextConfig;
