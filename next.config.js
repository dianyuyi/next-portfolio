/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  dangerouslyAllowSVG: true,
  output: 'standalone',
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/loxi/image/upload/",
  },
}

module.exports = nextConfig
