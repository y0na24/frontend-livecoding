function asyncLimit(asyncFn, delay) {
	return function(...args) {
		const timeout = new Promise((_, rej) => {
			setTimeout(() => rej('Ошибк'), delay)
		})

		return Promise.race([asyncFn(...args), timeout])
	}
}

const map = new Map()

map.size