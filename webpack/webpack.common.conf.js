const webpack = require('webpack')
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require('dotenv')
const DotenvWebpack = require('dotenv-webpack')
const productionConfig = require("./webpack.prod.conf.js"); // 引入生产环境配置文件
const developmentConfig = require("./webpack.dev.conf.js"); // 引入开发环境配置文件
const NODE_ENV = process.env.NODE_ENV || 'development'
const envPath = path.resolve(process.cwd(), 'env')
Dotenv.config({
  path: `${envPath}/common.env`
})

Dotenv.config({
  path: `${envPath}/${NODE_ENV}.env`
})

const commonDot = new DotenvWebpack({
  path: `${envPath}/common.env`,
  systemvars: true
})

const nodeEnvDot = new DotenvWebpack({
  path: `${envPath}/${NODE_ENV}.env`,
  systemvars: true
})

const webpackConfig = env => {
  let jsLoader = [{
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    }
  }]

  return {
    entry: {},
    output: {
      publicPath: env === "development" ? "/" : "/",
      path: path.resolve(__dirname, "..", "dist"),
      filename: env === "development" ? "js/[name]-[hash:5].bundle.js" : "js/[name].[chunkhash:8].js",
      chunkFilename: env === "development" ? "js/[name]-[hash:5].chunk.js" : "js/[name].[chunkhash:8].js"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules)/, use: jsLoader },
        {
          test: /\.css$/, use: [
            env === "development" ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            env === "development" ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  'primary-color': '#1DA57A;',
                  'link-color': '#1DA57A;',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true,
              }
            }
          ]
        },
        {
          test: /\.(jp[e]?g|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images/',
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
      }),
      commonDot,
      nodeEnvDot
    ]
  }
}

module.exports = env => {
  const config = env === "production" ? productionConfig : developmentConfig;
  return merge(webpackConfig(env), config);
}