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