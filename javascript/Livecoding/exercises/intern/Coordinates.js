// Есть массив направлений движений. Каждый элемент массива представляет собой [Направление, число шагов]. Направление может быть равно: Север, Юг, Запад, Восток. Необходимо найти координаты клада в виде x,y.

function getCoordinates(directions) {
	return directions.reduce(
		([x, y], [side, step]) => {
			if (side === 'Север') {
				return [x, y + step]
			}

			if (side === 'Юг') {
				return [x, y - step]
			}

			if (side === 'Запад') {
				return [x - step, y]
			}

			if (side === 'Восток') {
				return [x + step, y]
			}
		},
		[0, 0]
	)
}
