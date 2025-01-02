// myReduce

// Array.prototype.myReduce = function (cb, initialValue) {
// 	let acc = initialValue ? initialValue : this[0]
// 	let i = initialValue ? 0 : 1

// 	for (i; i < this.length; i++) {
// 		acc = cb(acc, this[i], i, this)
// 	}

// 	return acc
// }

// const array = [1, 2, 3, 4, 5]
// const fn = (acc, item) => {
// 	return acc + item
// }

// const result = array.myReduce(fn)

// console.log(result)

// myMap

// Array.prototype.myMap = function (cb) {
// 	const result = []

// 	for (let i = 0; i < this.length; i++) {
// 		result.push(cb.call(context, this[i], i, this))
// 	}

// 	return result
// }

// const array = [1, 2, 3, 4, 5]
// function fn(item) {
// 	return item * 2
// }
// console.log(array.myMap(fn))

// myBind

// Array.prototype.myBind = function (context, ...args1) {
// 	const fn = this

// 	return (...args2) => {
// 		fn.apply(context, [...args2, ...args1])
// 	}
// }


