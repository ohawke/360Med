/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/landing-page',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
