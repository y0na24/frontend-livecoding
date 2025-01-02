function reverse(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];

    start++;
    end--;
  }

  return array;
}

const array = [24, 35, 17, 88];
console.log(reverse(array));
