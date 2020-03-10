const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: {
    index: './src/js/index.js',
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  // 解析模块规则
  resolve: {
    // 模块别名, 简写路径， 缺点没有提示
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
      // 配置省略文件路径的后缀名
      extensions: ['.js', '.css'],
      // 告诉webpack解析模块是去哪一个目录
      modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  }
}