function removeDuplicates(array) {
	return array.filter((item, i) => i === array.indexOf(item))
}

function remove(array) {
	const result = []

	for (const elem of array) {
		if (!result.includes(elem)) {
			result.push(elem)
		}
	}

	return result
}

const arr = [1, 1, 1, 2, 3, 4, 4, 5]

console.log(remove(arr))

// Задача: Убрать дубликаты.
// Input: [1,1,1,2,3,4,4,5]
// Output: [1,,2,3,,4,5]

function removeDuplicates(array) {
	const result = []

	for (const elem of array) {
		if (!result.includes(elem)) {
			result.push(elem)
		}
	}

	return result
}
