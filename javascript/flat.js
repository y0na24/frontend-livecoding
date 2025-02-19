function flat(arr, depth = 1) {
  const result = [];

  for (const elem of arr) {
    if (Array.isArray(elem) && depth > 0) {
      result.push(...flat(elem, depth - 1));
    } else {
      result.push(elem);
    }
  }

  return result;
}

const arr = [1, [2], [3, 4]];

console.log(flat(arr));
