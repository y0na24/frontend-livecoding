Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

const result = [1, 2, 3, 4, 5].myReduce((acc, item) => acc + item, 0); // 15

console.log(result);
