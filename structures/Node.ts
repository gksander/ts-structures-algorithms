export class Node<T> {
	value!: T;
	next!: undefined | Node<T>;

	// Instantiate values
	constructor(value: T) {
		this.value = value;
		this.next = undefined;
	}
}
