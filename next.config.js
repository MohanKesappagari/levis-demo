/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const images = {
  domains: ["www.levi.com", "lsco.scene7.com"],
};
module.exports = { nextConfig, images };
