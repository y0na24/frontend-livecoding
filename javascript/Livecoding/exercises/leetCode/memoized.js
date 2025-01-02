/* 
Input: fnName = 'sum'
actions = ['call', 'call', 'getCallCount', 'call', 'getCallCount']
values = [[2, 2], [2, 2], [], [1, 2], []]
Output: [4, 4, 1, 3, 2]
*/

function memoize(fn) {
	const cache = {}

	return function (...args) {
		const key = Array.from(args).join('_')

		if (key in cache) {
			return cache[key]
		} else {
			const result = fn.apply(this, args)
			cache[key] = result
			return result
		}
	}
}
