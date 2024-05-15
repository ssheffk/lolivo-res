/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lolivo.bg",
      },
    ],
  },
};

export default nextConfig;
