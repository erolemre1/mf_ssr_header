const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  outputFileTracing: false,
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
      })
    );
    return config;
  },
};
