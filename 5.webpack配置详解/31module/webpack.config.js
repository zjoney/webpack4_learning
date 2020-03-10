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
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 多个loader文件使用use
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // 只检查src目录
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
        enforce: 'post',
        // 延后执行
        loader: 'eslint-loader'
      },
      {
        // 以下配置生效一个
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode:'development'
}