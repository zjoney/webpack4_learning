
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// process.env.NODE_ENV = 'development';


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  mode: 'production',
  externals: {
    // 拒绝jQuery 被打包进来
    jquery: 'jQuery'
  }
};
