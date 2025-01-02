function makeCounter(count) {
	return function () {
		return count++
	}
}

let counter = makeCounter(0)
let counter2 = makeCounter(0)

console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())
