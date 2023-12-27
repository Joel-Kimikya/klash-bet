/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com", "github.com"],
  },
  i18n: {
    locales: ["en", "fr", "sw"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
