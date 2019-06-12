const webpack = require('webpack')
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const productionConfig = require("./webpack.prod.conf.js"); // 引入生产环境配置文件
const developmentConfig = require("./webpack.dev.conf.js"); // 引入开发环境配置文件

const webpackConfig = env => {
  let jsLoader = [{
    loader: 'babel-loader',
    options: {
      presets: [['env', { modules: false }], 'react', 'stage-0'],
      cacheDirectory: true,
      "plugins": [
        "react-hot-loader/babel",
        "transform-runtime",
        'transform-class-properties',
        'transform-object-rest-spread'
      ],
      // babelrc: false
    }
  }]

  return {
    entry: {},
    output: {
      publicPath: env === "development" ? "/" : "/",
      path: path.resolve(__dirname, "..", "dist"),
      filename: "js/[name]-[hash:5].bundle.js",
      chunkFilename: "js/[name]-[hash:5].chunk.js"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules)/, use: jsLoader },
        {
          test: /\.css$/, use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.(jp[e]?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.less', '.css']
    },
    mode: env === "development" ? 'development' : 'production',
    optimization: {},
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "..", "src/index.html"),
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ]
  }
}

module.exports = env => {
  const config = env === "production" ? productionConfig : developmentConfig;
  return merge(webpackConfig(env), config);
}