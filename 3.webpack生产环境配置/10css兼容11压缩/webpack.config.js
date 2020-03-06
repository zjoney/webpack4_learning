
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 配置loader 
      {
        test: /\.css$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
              loader: "postcss-loader",
              options: {
                  plugins: [
                      require("autoprefixer") /*在这里添加*/
                  ]
              }
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development',
}


