function sequence(start, step) {
	function* generator() {
		while (true) {
			yield start
			start += step
		}
	}

	const counter = generator()

	return () => {
		return counter.next().value
	}
}
