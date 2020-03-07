/* eslint-disable prefer-arrow-callback */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
import print from './print';
//引入 icon
import '../css/iconfont.css';
import '../css/index.less';

print();
console.log('indexjs 被加载了~~1212');


function add(a, b) {
  return a + b;
}

console.log(add(5, 6));
if (module.hot) {
  // module.hot 为true 说明开启了HMR
  module.hot.accept('./print.js', function () {
    // 方便监听 print.js代码变化, 其他默认不会重新打包
    print();
  });
}
