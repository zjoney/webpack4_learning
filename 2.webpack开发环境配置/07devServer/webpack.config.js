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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // 打包其他资源 除去HTML /js  /css/
      // exclude
      {
        exclude: /\.(css|js|html)$/,
        // 使用一个loader
        // 下载 url-loader file-loader
        loader: 'file-loader',
        options: {
          name: '[hash:8].[ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }
    )
  ],
  mode: 'development',

  // 开发服务器 devServer : 用来自动化(自动编译、自动打开浏览器、自动刷新浏览器)
  // 特点：只会在内存中编译打包， 不会有任何输出
  // 启动devServer指令为： npx webpack-dev-server
  devServer: {
    // 项目构建后的路径
    contentBase: resolve(__dirname, 'build'),
    //  启动gzip压缩
    compress: true,
    port: 3000,
    open: true,
  }
}