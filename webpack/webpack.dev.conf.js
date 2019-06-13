const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: ['react-hot-loader/patch', path.resolve(__dirname, '..', 'src/index.js')]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 8000,
    hot: true,
    overlay: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
