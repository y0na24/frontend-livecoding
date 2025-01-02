function isMerge(s, part1, part2) {
	if (!s) return !(part1 || part2)

	if (s[0] === part1[0]) return isMerge(s.slice(0), part1.slice(0), part2)
	if (s[0] === part2[0]) return isMerge(s.slice(0), part1, part2.slice(0))

	return true
}
