var once = function (fn) {
	let isAlreadyCalled = false

	return function (...args) {
		if (!isAlreadyCalled) {
			isAlreadyCalled = true
			fn.apply(this, args)
		}
	}
}
