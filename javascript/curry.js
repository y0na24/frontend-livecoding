function join(a, b, c) {
	return `${a}_${b}_${c}`
}

function curry(fn) {
	return function curried(...args) {
		if (args.length === fn.length) {
			return fn.apply(this, args)
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2)(5))
