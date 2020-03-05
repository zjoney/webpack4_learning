/*
  loader 下载 使用
  plugins  下载 引入 使用
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
        // loader 配置
        {
          test: /\.less$/,
          // 要使用多个loader处理用use
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        // 处理图片资源
        // 问题 处理不来html中的图片
        {
          test: /\.(jpg|png|gif)$/,
          // 使用一个loader
          // 下载 url-loader file-loader
          loader: 'url-loader',
          options: {
            // 图片小8kb, 会转为base64处理
            // 优点： 减少请求数量
            // 缺点： 图片体积会变大（文件请求速度变慢）
            limit: 8 * 1024,
            // 问题 因为url-loader是es6解析的，html-loader是commonjs解析方式，
            // 解析时候出现问题：[object Module]
            esModule: false,
            // 给图片重命名
            // [ext]文件的 原扩展名
            name: '[hash:10].[ext]'
          }
        },
        {
          test: /\.html$/,
          // 处理html文件的img图片（负责引入img,从而被url-loader进行处理）
          loader: 'html-loader',
        }
    ]
  },
  plugins: [
// plugins 配置  html-webpack-plugin
// 功能： 默认会创建一个空的html ,自动引入打包输出所有资源（js/css）
new HtmlWebpackPlugin({
  //复制 ./src/index.html 文件，自动引入打包输出所有资源（js/css）
  template: './src/index.html',
  }
)
  ],
  mode: 'development'
}