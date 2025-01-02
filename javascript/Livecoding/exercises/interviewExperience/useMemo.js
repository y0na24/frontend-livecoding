function areDepsEqual(current, prev) {
	if (current.length !== prev.length) return

	for (let i = 0; i < current.length; i++) {
		if (!Object.is(current[i], prev[i])) {
			return false
		}
	}

	return true
}

function useMemo(fn, deps) {
	const prevDeps = useRef()
	const prevResult = useRef()

	if (prevResult.current && !areDepsEqual(deps, prevDeps.current)) {
		return prevResult.current
	}

	const result = fn()
	prevResult.current = result
	prevDeps.current = deps

	return result
}
