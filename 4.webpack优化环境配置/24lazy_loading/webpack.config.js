const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production',
  
  // 1可以将node_modules单独打包一个chunk 最终输出
  // 2自动分析多入口chunk中，有公共的文件，就会打包一个单独的chunk(大于一定体积)
  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  }
}

