function missingNumber(nums) {
	for (let n = 1; n <= nums.length; n++) {
		if (nums.indexOf(n) === -1) return n
	}
}

const nums = [1, 3]
console.log(missingNumber(nums))

// let missingNumber = function (nums) {
// 	let realSum = 0
// 	let indexSum = 0

// 	for (let i = 0; i <= nums.length; i++) {
// 		if (i !== nums.length) {
// 			realSum += nums[i]
// 		}

// 		indexSum += i
// 	}

// 	return indexSum - realSum
// }

// console.log(missingNumber(nums))
