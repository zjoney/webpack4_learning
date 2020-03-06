/* eslint-disable semi */
// import '@babel/polyfill'; 使用了core-js

const add = (a, d) => a + d

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完成');
    resolve();
  }, 1000);
})
// eslint-disable-next-line
console.log(add(1, 2));
console.log(promise);
