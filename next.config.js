const { withModuleFederation } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        './*.js',
        './node_modules/@module-federation/*',
        './node_modules/next/dist/compiled/@vercel/nft/**',
      ],
    },
  },
};

module.exports = withModuleFederation({
  name: 'header_app',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Header': './components/Header.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})(nextConfig); 
