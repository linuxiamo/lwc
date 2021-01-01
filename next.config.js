// next.config.js
module.exports = {
    i18n: {
      locales: ['en-US', 'it-IT'],
      defaultLocale: 'it-IT',
    },
    target: 'serverless',
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
  }