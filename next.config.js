/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars2.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 