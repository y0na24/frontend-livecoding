/* 
 1. Казак
 2. а роза Упала на лапу Азора
 3. Madam, I'm Adam
*/

function areEqual(firstChar, secondChar) {
	return firstChar.toLowerCase() === secondChar.toLowerCase()
}

function isLetter(char) {
	return char.toLowerCase() !== char.toUpperCase()
}

function isPalindrome(str) {
	let start = 0
	let end = str.length - 1

	while (start < end) {
		const startChar = str[start]
		const endChar = str[end]

		if (!isLetter(startChar)) {
			start++
			continue
		}

		if (!isLetter(endChar)) {
			end--
			continue
		}

		if (!areEqual(startChar, endChar)) {
			return false
		}

		start++
		end--
	}

	return true
}

console.log(isPalindrome('а роза Упала на лапу Азора'))
console.log(isPalindrome('Madam, I"m Adam'))
