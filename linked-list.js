const createLinkedList = () => {
	let head = null;
	let size = 0;
	
	const append = (value) => {
		const newNode = createNode(value);
		if (!head) {
			head = newNode;
		} else {
			let current = head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		size++;
	};

	const displayHead = () => head;
	const displaySize = () => size;

	return { append, displayHead, displaySize };
};

const createNode = (value = null, next = null) => {
	return { value, next };
};

const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("tiger");

console.log(list.displaySize());
console.log(list.displayHead());
console.log(list.head.next);
