/** @type {import('next').NextConfig} */
const nextConfig = {
  // additional checks to adhere to best practices
  reactStrictMode: true,

  // to be able to access .env from the client-side (browser)
  // be sensitive, remove when not needed
  env: {
    dbName: process.env.DATABASE_NAME,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        // edit this for security and performance considerations
        hostname: "**",
      },
    ],
  },

  // expoerimental features in Next.js
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    missingSuspenseWithCSRBailout: false,
  },

  // customize webpack custmization
  webpack(config) {
    config.experiments = {
      ...config.experiments,

      // the ability to use "await" at the top of your modules
      // without the need to wrap it in an async
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
