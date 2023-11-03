/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.dummyjson.com', 's3.amazonaws.com']
  }
};

module.exports = nextConfig
