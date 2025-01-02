const states = []
let tracker = 0

function useState(value) {
	const localTracker = tracker++

	if (states[localTracker]) {
		return states[localTracker]
	}

	const [_, rerender] = useReducer(() => {})

	function forceUpdate() {
		tracker = 0
		rerender()
	}

	function setState(newValue) {
		const prevState = states[localTracker][0]
		let currentState =
			typeof newValue === 'function' ? newValue(prevState) : newValue

		if (!Object.is(prevState, currentState)) {
			states[localTracker][0] = currentState
			forceUpdate()
		}
	}
	const tuple = [value, setState]

	states[localTracker] = tuple

	return tuple
}
