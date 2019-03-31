const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");

const nextConfig = {};

module.exports = withCSS(withOffline(nextConfig));
