/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  dangerouslyAllowSVG: true,
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com'],
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/loxi/image/upload/",
  },
}

module.exports = nextConfig
