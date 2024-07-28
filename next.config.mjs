/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pexels.com",
      "anotherdomain.com",
      "cdn.example.com",
    ], // Add as many domains as needed
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000",
  },
};

export default nextConfig;
