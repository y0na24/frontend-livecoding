Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const mappedElement = cb(this[i], i, this);
    result.push(mappedElement);
  }

  return result;
};

const result = [1, 2, 3, 4, 5].myMap((item) => item * 2); // [2, 4, 6, 8, 10]
