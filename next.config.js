const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const assetPrefix = "/homelab-wiki";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "export",
  assetPrefix,
  basePath: assetPrefix,
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};