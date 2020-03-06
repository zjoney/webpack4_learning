const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /**
       * 1.js兼容处理： babel-loader
          * 只能处理基本的
      *  2.@babel/polyfill
      *    问题： 打包后体积太大
      *   3. 需要做兼容处理： 按需加载 ：core-js
       */ 
      {
        // babel-loader @babel/core @babel/preset-env
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns:'usage',
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: '60',
                  ie: '9'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}

