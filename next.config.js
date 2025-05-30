/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src https://www.google.com https://www.gstatic.com"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;