/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds to avoid conflicts with old code
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
