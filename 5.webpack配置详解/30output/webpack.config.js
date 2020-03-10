const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 
 */

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    // 文件名称(名称 + 目录)
    filename: 'js/[name].js',
    // 输出文件目录
    path: resolve(__dirname, 'build'),
    // 所有输出资源的公共路径的前缀 -->  'imgs/a.jpg'
    publicPath:'/',
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
    library: '[name]', 
    libraryTarget: 'window', // 整个库向外暴露的名字 browser
    // libraryTarget: 'global', // 变量名添加到哪一个属性上 node
    // libraryTarget: 'commonjs', // 变量名添加到哪一个属性上 node
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode:'development'
}