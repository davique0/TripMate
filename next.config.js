/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "plus.unsplash.com",
      "fastly.picsum.photos",
    ],
  },
};

module.exports = nextConfig;
