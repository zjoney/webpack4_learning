const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * entry: 入口文件
 * 1.string --> './src/index.js'
 *  打包形成一个chunk, 输出一个bundle文件
 * 此时chunk的名称默认是main
 * 2.array -->  ['./src/index.js', './src/add.js']
 * 多入口
 * 所有文件都会形成一个chunk，输出出去的值只有一个bundle
 *   --> 只有在HMR功能中让html热更新生效~
 * 3.object
 * 多入口  
 * 有几个文件就是几个chunk,输出几个Bundle
 * 此时chunk的名称是Key
 * --> 特殊用法
 *      {
 *      // 所有入口文件形成一个 chunk,输出一个Bundle  
 *        index: ['./src/index.js',  './src/count.js'],
 *         // 形成一个 chunk,输出一个Bundle 
 *        add: './src/add.js'   
 * }
 */

module.exports = {
  entry: {
    index: './src/index.js',
    add: './src/add.js'
  },
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode:'development'
}