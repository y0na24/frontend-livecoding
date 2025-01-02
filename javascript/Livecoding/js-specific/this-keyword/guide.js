// 1) Отдельно стоящая функция в глобальной области видимости
// a) Браузер: this = window
// b) Node.js: this = Global
// c) при use strict: this = undefined
function myFn() {
	console.log(this)
}
myFn()

// 2) Метод объекта (dot notation)

const item = {
	title: 'Phone',
	fullPrice: 100,
	calculatePrice(discountPercent = 0) {
		console.log(this.fullPrice - (discountPercent / 100) * this.fullPrice)
	},
}

item.calculatePrice()

// 3) Вызов функции с привязкой контекста
function fn() {
	console.log(this)
}

const item2 = { name: 'Матвей' }

fn.call(item)

// 4) Функции конструктор

function Example(title, price) {
	this.title = title
	this.price = price
}


// 5) Стрелочные функции.
// Своего контекста не имеют, значение this берется из внешней function, если такой нет, то глобальный контекст - window

const obj = {
	names: ['Matvey', 'Egor', 'Anton'],
	lastName: 'Klenov',
	logFullNamesWRONG: function () {
		this.names.forEach(function (name) {
			console.log(`${name} ${this.lastName}`)
		})
	},
	logFullNames: function () {
		this.names.forEach(function (name) {
			console.log(`${name} ${this.lastName}`)
		}, this)
	},
	logFullNames2: function () {
		this.names.forEach(name => console.log(`${name} ${this.lastName}`))
	},
}

obj.logFullNamesWRONG()
obj.logFullNames()
obj.logFullNames2()
