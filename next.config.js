const isProd = process.env.NODE_ENV === 'production';

function normalizeBasePath(raw) {
  if (raw === undefined || raw === null) return undefined;
  const trimmed = String(raw).trim();
  if (!trimmed || trimmed === '/') return undefined;
  return trimmed.startsWith('/') ? trimmed.replace(/\/$/, '') : `/${trimmed.replace(/\/$/, '')}`;
}

// Default keeps backward compatibility with GitHub Pages.
// For root deployments (e.g. Hostinger), set NEXT_PUBLIC_BASE_PATH to empty.
const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/skubisuu' : undefined)
);

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Static hosts typically need file-based routing (about/ -> about/index.html)
  trailingSlash: true,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  basePath,
  output: 'export',
};

module.exports = nextConfig;