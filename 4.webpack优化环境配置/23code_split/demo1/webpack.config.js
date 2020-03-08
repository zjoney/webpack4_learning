/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 单入口
  // entry: './src/js/index.js',
  entry: {
    // 多入口
    main: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true,
      }
    })
  ],
  mode: 'production',
};
