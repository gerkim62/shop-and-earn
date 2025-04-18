// @ts-check
import withSerwistInit from "@serwist/next";

// You may want to use a more robust revision to cache
// files more efficiently.
// A viable option is `git rev-parse HEAD`.
const revision = crypto.randomUUID();
console.log("Environment:", process.env.NODE_ENV);
const withSerwist = withSerwistInit({
  disable: process.env.NODE_ENV === "development",
  cacheOnNavigation: true,
  swSrc: "workers/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "fdn2.gsmarena.com",
      },
    ],
  },
};

export default withSerwist(nextConfig);
