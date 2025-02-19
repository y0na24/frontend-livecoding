const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const pipe = (funcs) => (x) => funcs.reduce((acc, fn) => fn(acc), x);

const fn = pipe([times(2), plus(2)]);

console.log(fn(5));
