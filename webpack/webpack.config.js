const { webpackConfig } = require('lyxcool-webpack')
const WebpackRetryPlugin = require('webpack-retry-plugin')

if (process.env.DEV_SERVER) {
  webpackConfig.devServer.disableHostCheck = true
} else {
  webpackConfig.plugins.push(
    new WebpackRetryPlugin()
  )
}

module.exports = webpackConfig