/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fdn2.gsmarena.com",
      },
    ],
  },
};

export default nextConfig;
