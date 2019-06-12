const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩

const ExtractCSS = new MiniCssExtractPlugin({
  filename: 'css/[name].[hash].css',
  chunkFilename: 'css/[id].[hash].css',
})

const path = require("path");


module.exports = {
  mode: "production",
  entry: {
    app: [path.resolve(__dirname, '..', 'src/index.js')],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  optimization: {
    minimizer: [//压缩js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
      verbose: true
    }),
    ExtractCSS
  ]
};