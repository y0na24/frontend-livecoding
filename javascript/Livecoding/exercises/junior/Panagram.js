function isPanagram(string) {
	return [...'йцукенгшщзхъфывапролджэёячсмитьбю'].every(char =>
		string.toLowerCase().includes(char)
	)
}
