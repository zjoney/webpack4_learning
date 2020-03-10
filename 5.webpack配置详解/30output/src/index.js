// import add from './add';
import count from './count'
console.log('index,js1212');
import('./add')
.then(({default: add}) => {
  console.log(add(3,6));
  
})
// console.log(add(3,4));
console.log(count(5));


