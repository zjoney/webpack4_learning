/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义Nodejs环境变量： 决定使用browersers在什么环境
// process.env.NODE_ENV = 'development';

// 复用loader
const commonCssLoader = [
  // 'style-loader',
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'built'),
  },
  module: {
    rules: [
      {
        // package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: 'node_modules',
        // 优先执行，代码位置无关
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        // 以下loader只会处理一次
        // 注意：不能有两个配置处理同一个类型的文件
        oneOf: [
          {
            test: /\.css$/,
            use: [
              ...commonCssLoader
            ]
          },
          {
            test: /\.less$/,
            use: [
              ...commonCssLoader,
              'less-loader',
            ]
          },
          /**
           * 正常来说一个文件被一个loader处理
           * 当需要被多个loader处理，那么需要指定loader先后顺序
           * 先eslint 接着babel
           */
          {
            test: /\.js$/,
            exclude: 'node_modules',
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-ev', {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      ie: '9',
                    }
                  }
                ]
              ]
            }
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false,
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: /\.(js|css|less"|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true,
      }
    })
  ],
  mode: 'production',
};
