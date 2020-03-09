
import '../css/index.css';

function sum(...args) {
  return args.reduce((x, y) => x + y, 0);
}


console.log(sum(7, 8, 9, 15));
/**
 * 1.eslint不认识window/navigator全局变量，需要在package.json中配置eslintConfig
   "env": {
   "browser": true
 }
   2. sw代码必须运行在node服务器上
   -->nodejs
   -->npm i serve -g
      serve -s build 启动服务器，将build目录作为静态下的资源暴露出去
 */
// 注册serviceWorker
// 出现兼容问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('注册成功了');
    }).catch(() => {
      console.log('注册失败了');
    });
  });
}
