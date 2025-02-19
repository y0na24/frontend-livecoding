Array.prototype.myFilter = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const isValid = cb(this[i], i, this);

    if (isValid) result.push(this[i]);
  }

  return result;
};

const result = [1, 2, 3, 4, 5].myFilter((item) => item > 3); // [4, 5]
