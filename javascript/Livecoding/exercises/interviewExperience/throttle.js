function throttle(cb, delay = 1000) {
	let shouldWait = false
	let waitingArgs = null

	function timeoutFn() {
		if (!waitingArgs) {
			shouldWait = false
		} else {
			cb(...waitingArgs)
			waitingArgs = null
			setTimeout(timeoutFn, delay)
		}
	}

	return function (...args) {
		if (shouldWait) {
			waitingArgs = args
			return
		}

		cb(...args)
		shouldWait = true
		setTimeout(timeoutFn, delay)
	}
}
