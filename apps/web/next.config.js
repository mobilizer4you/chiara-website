const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');
const withTM = require("next-transpile-modules")(["ui", "prisma-local"]);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("_http_common");
    }
    return config;
  },
}
module.exports = withPlugins([withSvgr, withTM], nextConfig);;
