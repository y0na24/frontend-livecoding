var TimeLimitedCache = function () {
	this.cache = new Map()
}
TimeLimitedCache.prototype.set = function (key, value, duration) {
	const isKeyFounded = this.cache.has(key)

	if (isKeyFounded) clearTimeout(this.cache.get(key).timer)
	this.cache.set(key, {
		value,
		timer: setTimeout(() => this.cache.delete(key), duration),
	})

	return isKeyFounded
}

TimeLimitedCache.prototype.get = function (key) {
	return this.cache.has(key) ? this.cache.get(key).value : -1
}

TimeLimitedCache.prototype.count = function () {
	return this.cache.size
}
