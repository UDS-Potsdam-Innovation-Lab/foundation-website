/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/foundation-website',
  assetPrefix: '/foundation-website/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src https://www.google.com https://www.gstatic.com https://maps.google.com https://maps.gstatic.com"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;