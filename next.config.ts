/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev',
      },
    ],
  },
}

export default nextConfig
