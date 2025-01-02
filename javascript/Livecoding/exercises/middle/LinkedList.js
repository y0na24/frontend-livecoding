class Node {
	value = null
	next = null

	constructor(value) {
		this.value = value
	}
}

class LinkedList {
	root = null

	getFirst() {
		return this.root
	}

	getLast() {
		let node = this.root

		while (node.next) {
			node = node.next
		}

		return node
	}

	add(node) {
		if (!this.root) {
			this.root = node
		} else {
			const lastNode = this.getLast()
			lastNode.next = node
		}
	}

	remove(value) {
		if (this.root === value) {
			this.root = this.root.next
		} else {
			let prevNode = this.root
			let targetNode = this.root.next

			while (targetNode.value !== value) {
				prevNode = targetNode
				targetNode = targetNode.next

				if (!targetNode.next) {
					return (prevNode.next = null)
				}
			}

			prevNode.next = targetNode.next
		}
	}
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

const list = new LinkedList()
list.add(node1) //1
list.add(node2) //1 -> 2
list.add(node3) //1 -> 2 -> 3
list.remove(2)
console.log(list)
