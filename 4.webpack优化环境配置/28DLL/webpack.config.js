/*
*/
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }
    ),
    // 告诉webpack 哪些库不打包， 同时使用时的名称也得变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/mainfest.json')
    }),
    // 将某一个文件打包出去，并在html文件中引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production'
}