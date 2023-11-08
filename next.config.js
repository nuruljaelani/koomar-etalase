/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.dummyjson.com', 's3.amazonaws.com']
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: ":toko",
  //       permanent: true
  //     }
  //   ]
  // }
};

module.exports = nextConfig
