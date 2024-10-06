/* eslint-disable @typescript-eslint/no-var-requires */
// NOTE
// Do not change this file to .mjs
// https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1305424923
const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');
const million = require('million/compiler');

const appHeaders = require('./config/next/headers');
const redirects = require('./config/next/redirects');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  experimental: {
    // ppr: true, // Commented out or removed this line
    // useLightningcss: true,
    // optimizePackageImports: ['react-tweet'],
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'prashantiacademy-schooldiary.vercel.app' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'assets.literal.club' },
      { hostname: 'books.google.com' },
      { hostname: '**.pixpa.com' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },
  headers: () => appHeaders,

  // webpack: (config) => {
  //   config.plugins.push(new VeliteWebpackPlugin());
  //   return config;
  // },
};

const millionConfig = {
  mute: true,
  auto: { rsc: true },
  rsc: true,
};

const config = withBundleAnalyzer(
  million.next(defaultNextConfig, millionConfig),
);

module.exports = config;
