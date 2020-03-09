
import '../css/index.css';

function sum(...args) {
  return args.reduce((x, y) => x + y, 0);
}


console.log(sum(7, 8, 9, 15));

