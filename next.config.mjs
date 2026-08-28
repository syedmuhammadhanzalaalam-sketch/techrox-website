/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

export default nextConfig;