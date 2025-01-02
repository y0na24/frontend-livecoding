/* Write a map() method from js with your own hands*/

var map = function (arr, fn) {
	return arr.reduce((acc, element, i) => {
		acc.push(fn(element, i))
		return acc
	}, [])
}
