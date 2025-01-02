const useLatest = (value) => {
	const valueRef = useRef()

	useLayoutEffect(() => {
		valueRef.current = value
	}, [value])

	return valueRef
}
