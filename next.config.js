/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BASE_URL}:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
