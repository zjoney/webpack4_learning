/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/*
    运行项目指令： npx webpack-dev-server

*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'eval-source-map'
};
/**
source-map:一种提供源代码到构建后的代码映射 技术
[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

source-map: 外部
     1.错误代码准确信息 和 源代码的错误位置
inline-source-map: 内联
     1. 只生成一个个内联source-map
     2.错误代码准确信息 和 源代码的错误位置
hidden-source-map: 外部
  1.错误代码错误原因，但是没有错误位置，不能追踪源代码位置
eval-source-map: 内联
     1. 每一个文件都生成对应的source-map,在eval中
     2. 错误代码准确信息 和 源代码的错误位置
nosources--source-map： 外部
  1.错误代码准确信息 没有源代码的信息
cheap-source-map： 外部
  1.错误代码准确信息 和 源代码的错误位置
  2.只能精确到行
cheap-module-source-map：外部
  1.错误代码准确信息 和 源代码的错误位置
  2.module会将loader的source-map加入

内联 和 外部的区别：1外部生成一个文件， 内联没有2内联构建速度快

开发环境：速度快， 调试更友好
速度快(eval>inline>cheap>...)
    eval-cheap-source-map
    eval-source-map
调试更友好：
    source-map
    cheap-module-source-map
    cheap-source-map

-->eval-source-map / eval-cheap-module-source-map
生产环境：源码要不要隐藏？调试需要友好吗?
    内联只会增加体积
    nosources-source-map 全部隐藏
    hidden-source-map 只隐藏源代码
  --> source-map / cheap-module-source-map
 */
