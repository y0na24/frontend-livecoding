async function print() {
	console.log(1)
}

async function foo() {
	console.log(2)
	await print()
	console.log(5)
}

console.log(4)
foo()
console.log(7)

// 4 2 1 7 5