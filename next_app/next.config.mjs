/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        port: '',
        pathname: '/static/img/coins/64x64/**'

      }
    ]
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },

};

export default nextConfig;
