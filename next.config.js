const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");

const nextConfig = {};

module.exports = withTypescript(withCSS(withOffline(nextConfig)));
