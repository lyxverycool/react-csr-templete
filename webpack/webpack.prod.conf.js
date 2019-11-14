const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');// js压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css压缩
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const NODE_ENV = process.env.NODE_ENV || 'development'
const path = require('path')

const ExtractCSS = new MiniCssExtractPlugin({
  filename: 'css/[name].[hash].css',
  chunkFilename: 'css/[id].[hash].css',
})

const plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),
    verbose: true,
  }),
  ExtractCSS,
]

if (NODE_ENV !== 'production') {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, '..', 'src/index.js')],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
  optimization: {
    minimizer: [// 压缩js
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      minChunks: 3,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins,
};
