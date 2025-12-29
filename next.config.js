/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: '../html/thalirmanam_prod',
  // basePath: '/thalirmanam',
  // assetPrefix: '/thalirmanam',
  images: {
  unoptimized: true,
},
}

export default nextConfig