function maxSubArray(array) {
	let currentMax = array[0]
	let globalMax = array[0]

	for (const element of array) {
		currentMax = Math.max(element, element + currentMax)

		if (currentMax > globalMax) {
			globalMax = currentMax
		}
	}

	return globalMax
}
