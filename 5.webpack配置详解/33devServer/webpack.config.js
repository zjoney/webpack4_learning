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
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  resolve: {
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
      extensions: ['.js', '.css'],
      modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  devServer: {
    // 运行代码目录
    contentBase: resolve(__dirname, 'build'),
    // 监视文件目录， 一旦发生变化就会 reload
    watchContentBase: true,
    //
    watchOptions: {
      // 忽略文件
      ignore: /node_modules/
    },
    // 启动gzip压缩
    compress: true,
    port: 3000,
    // 自动打开浏览器
    open: true,
    host: 'localhost',
    // 开启HMR 功能
    hot: true,
    // 不要显示启动服务器日志信息
    clientLogLevel: 'none',
    // 除了一些基本的启动信息意外，其他内容都不需要显示
    quiet: true,
    // 如果出错了， 不要全屏提示
    overlay: false,
    // 服务器代理 -> 解决开发环境跨域问题
    proxy: {
      // 一旦devServer(3000) 接收到/api/xxx请求, 就会转发到3000
      '/api': {
        target: 'http://localhost:3000',
        // 将请求路径/api/xxx -> /xxx(去掉/api)
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}