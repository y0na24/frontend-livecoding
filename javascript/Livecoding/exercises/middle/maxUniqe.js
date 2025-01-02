function maxUnique(s) {
	const set = new Set()
	let deletedP = 0
	let mainP = 0
	let length = 0

	while (s.length > mainP && s.length > deletedP) {
		if (!set.has(s[mainP])) {
			set.add(s[mainP])

			mainP++
			length++
		} else {
			set.delete(s[deletedP])

			deletedP++
			length--
		}
	}

	return length
}

console.log(maxUnique('abcabcbb'))
