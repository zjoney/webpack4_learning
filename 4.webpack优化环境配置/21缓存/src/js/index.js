/* eslint-disable import/no-unresolved */
import '../css/index.css';

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// eslint-disable-next-line no-console
console.log(sum(1, 2, 3));
