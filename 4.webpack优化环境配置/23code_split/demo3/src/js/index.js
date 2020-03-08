function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
// 通过js 文件让某一个文件单独打包一个chunk 
 import(/*webpackChunkName: 'test' */ './test').then((e) => {
  console.log(e);
 }).catch((e) => {
   console.log('文件加载失败');
   
 })

// eslint-disable-next-line no-console
console.log(sum(1, 2, 3));

 
