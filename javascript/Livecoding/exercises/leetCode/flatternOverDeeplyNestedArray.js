// Write method flat() from js with your own hands
/* 
Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
*/

var flat = function (arr, n) {
	const result = []

	for (const element of arr) {
		if (Array.isArray(element) && n > 0) {
			result.push(...flat(element, n - 1))
		} else {
			result.push(element)
		}
	}

	return result
}
