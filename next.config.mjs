/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  basePath: "/apex",
  assetPrefix: "/apex/",

  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  distDir: "build",
  output: "export",
};

export default nextConfig;
