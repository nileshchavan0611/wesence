module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  generateBuildId: async () => {
    return process.env.npm_package_version;
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
