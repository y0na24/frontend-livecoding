//Палинром - слово или текст, одинаково читающееся в обоих направлениях. Необходимо написать функцию, которая проверит является ли переданная строка палиндромом.

/* 
 1. Казак
 2. а роза Упала на лапу Азора
 3. Madam, I'm Adam
*/

const areEqual = (char1, char2) => {
	return char1.toLowerCase() === char2.toLowerCase()
}

const isLetter = char => {
	return char.toLowerCase() !== char.toUpperCase()
}

function isPalindrome(str) {
	let start = 0
	let end = str.length - 1

	while (start < end) {
		const startChar = str[start]
		const endChar = str[end]

		if (!isLetter(startChar)) {
			startChar++
			continue
		}

		if (!isLetter(endChar)) {
			endChar--
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

console.log(isPalindrome('Madam, I"m Adam'))
