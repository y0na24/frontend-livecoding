// Даны две строки, необходимо проверить можно ли составить вторую строку из символов первой строки. Необходимо постараться реализовать оптимальный алгоритм.

function shuffle(str1, str2) {
	const map = new Map()

	for (const char of str1) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1)
		} else {
			map.set(char, 1)
		}
	}

	return str2.split('').every(char => {
		if (map.has(char) && map.get(char) > 0) {
			map.set(char, map.get(char) - 1)
			return true
		} else {
			return false
		}
	})
}

console.log(shuffle('rkqodlw', 'world'))
