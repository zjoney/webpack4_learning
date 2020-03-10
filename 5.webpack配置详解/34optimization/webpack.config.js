const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
    chunkFilename: 'js/[name].[contenthash:10]_chunk.js'
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
  mode: 'production',
  resolve: {
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
      extensions: ['.js', '.css', '.json', '.jsx'],
      modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 默认值可以不写
      // 分割的chunk 最小30kb
      // minSize: 30 * 1024,
      // // 最大没有限制
      // maxSize: 0,
      // // 要提取的chunks 最少被引用一次
      // minCHunks: 1,
      // //按需加载时并行加载的最大文件数量
      // maxAsyncRequest: 2,
      // // 入口js文件请求的最大数量
      // maxInitialRequest: 3,
      // //名称连接符
      // automaticNameDelimiter: '~',
      // // 使用命名规则
      // name: true,
      // //  分割chunk的组
      // cacheGroups: {
      //   vendors: {
      //     // node_modules文件被打包到vendors组的chunk  -> vendors~xxx.js
      //     // 满足上面的公共规则， 如：大小超过30kb，至少被引用一次
      //     test: /[\\/]node_modules[\\/]/,
      //     // 优先级
      //     priority: -10
      //   },
      //   default: {
      //     // 要提取的chunks 最少被引用一次
      //     minChunks: 2,
      //      // 优先级
      //     priority: -10,
      //     //如果当前和之前已经被提取的chunk是同一个就会  复用，而不是重新打包模块
      //     reuseExistingChunk: true
      //   }
      // }
    },
    runtimeChunk: {
      // 将当前模块的记录其他模块的hash 单独打包为一个文件 runtime
      // 解决： 修改a 文件导致b文件contenthash变化
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      // 配置生还环境压缩方案js和 css  uglyWebpackPlugin不再维护了使用teser
      new TerserWebpackPlugin({
        cache: true, // 开启缓存
        parallel: true, // 开启多线程打包
        sourceMap: true, // 启动
      })
    ]
  }
}