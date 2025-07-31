const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  outputFileTracing: false,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'content_app',
          library: { type: 'global', name: 'content_app' }, 
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Content': './components/Content.jsx',
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
      })
    );
    return config;
  },
};
