/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.NEXT_PRIVATE_EXPORT === 'true'

const nextConfig = {
  // Only set distDir for production builds
  ...(isProd ? { distDir: '../html/thalirmanam_prod' } : {}),

  output: 'export',
  trailingSlash: true,
  // basePath: '/thalirmanam',
  // assetPrefix: '/thalirmanam',
  images: {
    unoptimized: true,
  },

  // Disable minification for readable HTML output
  swcMinify: false,

  // Allow cross-origin requests for development
  allowedDevOrigins: [
    'srv662677.hstgr.cloud',
  ],
}

export default nextConfig
