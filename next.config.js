/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // experimental: {
  //   reactCompiler: true,
  //   serverActions: {},
  //   ppr: isProd ? "incremental" : undefined,
  // },

  // experimental: {
  //   reactCompiler: false, // still valid
  //   // serverActions: false, ❌ remove this
  // },

  // experimental: {
  //   reactCompiler: false,
  //   serverActions: {
  //     enabled: false, // or true
  //   },
  // },

  experimental: {
    reactCompiler: true, // Enable React Forget
    serverActions: {}, // Correct: enables Server Actions
    ppr: isProd ? "incremental" : undefined, // Partial Prerendering
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
