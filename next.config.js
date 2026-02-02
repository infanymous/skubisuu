const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/skubisuu/' : '',
  basePath: isProd ? '/skubisuu' : '',
  output: 'export'
};

export default nextConfig;