const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'header_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Header': './components/Header.js',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
          nextConfig: {
    experimental: {
      outputFileTracingExcludes: {
        '*': [
          './*.js', 
          './node_modules/@module-federation/*',
          './node_modules/next/dist/compiled/@vercel/nft/**',
        ],
      },
    },
  },
      })
    );
    return config;
  },
};
