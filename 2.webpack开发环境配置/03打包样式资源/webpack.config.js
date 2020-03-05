/*
作用： 指示webpack干活（运行webpack指令时候，会加载里面的配置）

所有构建工具基于nodejs 运行~ 模块默认采用commonjs
*/

const { resolve } = require('path');

module.exports = {
  // webpack 入口配置
  entry: './src/index.js',
  //输出
  output: {
    //输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量， 代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  //loader配置
  module: {
 //  loader 配置
 // 不同文件必须配置不同的loader处理
 rules: [
   {
     // 匹配哪些文件
     test: /\.css$/,
     // 使用哪些Loader处理
     use: [
       // 创建一个style标签， 将js资源插入进行 添加到Head中生效
       'style-loader',
       // 将css文件转成commonjs模块加载js, 里面内容是样式字符串
       'css-loader',
     ]
   },
   {
     test: /\.less$/,
     use: [
       'style-loader',
       'css-loader',
       // 将less 编译成css 文件
       'less-loader'

     ]
   }
 ]
  },
  plugins: [
  // 详细的plugins配置
  ],
  mode: 'development',// 开发模式
  // mode: 'production',
}


