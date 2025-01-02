// Write reduce() method from js with your own hands

var reduce = function (nums, fn, init) {
	let acc = init

	for (let i = 0; i < nums.length; i++) {
		acc = fn(acc, nums[i], i)
	}

	return acc
}
