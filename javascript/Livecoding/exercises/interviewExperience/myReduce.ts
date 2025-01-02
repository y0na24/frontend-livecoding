function myReduce<Item>(
	array: Item[],
	cb: (acc: Item, item: Item, i: number, array: Item[]) => Item
): Item
function myReduce<Item, Acc>(
	array: Item[],
	cb: (acc: Acc, item: Item, i: number, array: Item[]) => Acc,
	acc: Acc
)

function myReduce<Item, Acc>(
	array: Item[],
	cb: (acc: Acc, item: Item, i: number, array: Item[]) => Acc,
	acc?: Acc
): Acc {
	let result = acc ? acc : (array[0] as unknown as Acc)
	let i = acc ? 0 : 1

	for (i; i < array.length; i++) {
		result = cb(result, array[i], i, array)
	}

	return result
}
