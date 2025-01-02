// Необходимо реализовать метод diff, который сравнивает два массива. Метод должен возвращать элементы, которые  присутствуют в исходном, но отсутствуют в сравниваемом массиве.

// T vs any

const returnType = (value: number): number => {
	return value
}



const res = returnType(5)

const diff = <T>(list1: T[], list2: T[]) => {
	const result: T[] = []

	// ....

	return result
}

const result = diff(['2', '3', '5'], ['2', '4'])

type UserData = {
	name: string
	age: number
}

interface User {
	name: string,
	age: number
}

type Nullable<T extends object> = {
	[K in keyof T]: T[K] | null
}

type NewType = Nullable<User>


type CartData = {
	items: unknown[]
	favorites: unknown[]
}

type State<Data> = {
	data: Data
	errors: string[]
	isLoading: boolean
}

type UserState = State<UserData>
type CartState = State<CartData>
