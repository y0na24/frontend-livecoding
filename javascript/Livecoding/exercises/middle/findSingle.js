function findSingle(nums) {
	const map = new Map()

	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1)
		} else {
			map.set(num, 1)
		}
	}

	return Array.from(map.keys()).filter(key => map.get(key) === 1)
}
