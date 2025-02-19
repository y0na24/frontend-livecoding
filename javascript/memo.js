function memo(fn) {
  const cache = {};

  return function (...args) {
    const key = Array.from(args).join("_");

    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const func = (arg1, arg2) => {
  return arg1 + arg2;
};
const memoed = memo(func);
memoed(1, 2);
// 3, func is called
memoed(1, 2);
// 3 is returned right away without calling func
memoed(1, 2);
// 4, new arguments, so func is called
