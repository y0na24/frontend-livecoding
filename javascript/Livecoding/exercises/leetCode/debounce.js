// Write a debounce method

var debounce = function (fn, t) {
	let timer

	return function (...args) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args)
		}, t)
	}
}
