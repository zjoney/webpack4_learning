/* eslint-disable import/no-unresolved */


function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// eslint-disable-next-line no-console
console.log(sum(1, 2, 3));
console.log(mul(2, 3));
