function sequence(start, step) {
	function* generator() {
		while (true) {
			yield start
			start += step
		}
	}

	const counter = generator()

	return () => counter.next().value
}

const generateFn = sequence(5, 5)

console.log(generateFn(), generateFn(), generateFn())
