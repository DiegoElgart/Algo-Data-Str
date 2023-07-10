export class DSA101_LinkedList_Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}

	toString() {
		let output = "DSA101_LinkedList_Node::{";
		output += '""value":' + this.value;
		output += ',"next":' + this.next;
		output += "}";
	}
}

export default DSA101_LinkedList_Node;
