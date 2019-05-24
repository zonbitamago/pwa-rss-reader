const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        // path: path.join(__dirname, '.env'),
        // systemvars: true
      })
    ];

    // Fixes npm packages that depend on `fs` module
    // config.node = {
    //   fs: 'empty'
    // }

    return config;
  }
};

module.exports = withTypescript(withCSS(withOffline(nextConfig)));
