
/**
 * 使用dll 技术，对某些库（jQuery， react， vue..）进行单独打包
 * 运行webpack 指令：
 *   --> webpack --config webpack.dll.js
 */
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  // 最终生成的[name].js --> jquery
  // ['jquery']  --> 要打包的库是jquery
  entry: {
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库向外暴露出去的内容名字叫什么
  },
  plugins: [
    // 打包生成一个mainfest.json  --> 提供jquery映射关系
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露内容的名称
      path: resolve(__dirname, 'dll/mainfest.json') // 输出文件路径
    })
  ],
  mode: 'production'
}