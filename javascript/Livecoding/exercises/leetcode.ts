type Car = {
	brand: string
	model: string
} & ElectricCar

interface ElectricCar {
	batteryRange: number
}
