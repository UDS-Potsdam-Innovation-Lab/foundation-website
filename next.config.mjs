const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'foundation-website'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : '',
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

export default nextConfig;