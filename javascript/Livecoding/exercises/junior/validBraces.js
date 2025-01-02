function validBraces(braces) {
	const pairs = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	const opens = []

	for (const brace of braces) {
		if (brace in pairs) {
			opens.push(brace)
		} else if (!opens.length || brace !== pairs[opens.pop()]) {
			return false
		}
	}

	return opens.length === 0
}
