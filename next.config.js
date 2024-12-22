/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.qrserver.com",
      },
    ],
  },
  experimental: process.env.NODE_ENV === 'production' ? {} : {
    serverActions: {},
  },
};

module.exports = nextConfig;
