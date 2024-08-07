/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pexels.com",
      "images.pexels.com",
      "anotherdomain.com",
      "example.com",
      "picsum.photos",
      "cdn.example.com",
    ], // Add as many domains as needed
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000",
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
