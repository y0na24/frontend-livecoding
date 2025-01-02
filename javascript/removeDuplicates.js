function removeDuplicates(array) {
  const result = [];

  for (const elem of array) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
}

const arr = [1, 1, 2, 2, 3, 4, 5, 6, 6, 6];
console.log(removeDuplicates(arr));
