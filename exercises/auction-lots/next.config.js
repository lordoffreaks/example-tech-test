/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
