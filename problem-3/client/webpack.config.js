const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: [ 'babel-loader?cacheDirectory' ],
        exclude: /node_modules/,
      },
    ],
  },

  devtool: 'eval-source-map',

  devServer: {
    // https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    stats: 'normal',
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],
};
