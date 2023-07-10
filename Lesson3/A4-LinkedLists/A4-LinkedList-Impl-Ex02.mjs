import DSA101_LinkedList_Node from "./A4-LinkedList-Node.mjs";

export class DSA101_LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size == 0;
	}

	getSize() {
		return this.size;
	}

	add(value) {
		if (value == undefined || value == null) {
			return undefined;
		}

		if (this.size == 0) {
			this.head = new DSA101_LinkedList_Node(value, null);
		} else {
			var currNode = this.head;
			while (currNode.next != null) {
				currNode = currNode.next;
			}
			currNode.next = new DSA101_LinkedList_Node(value, null);
		}
		this.size++;
	}

	get(indx) {
		if (indx < 0 || indx >= this.size) {
			return null;
		}
		let outputNode = this.head;
		for (let i = 0; i < indx; i++) {
			outputNode = outputNode.next;
		}
		return outputNode.value;
	}

	// a > b > c > d > e
	// get(5) --> null
	// get(0) --> a
	// get(1) --> b
	// get(4) --> e

	toString() {
		var output = "DSA101_LinkedList::{";
		output += '"size":' + this.size + ",";
		output += '"head":';
		if (this.head == null || this.head == undefined) {
			output += "null";
		} else {
			output += "(object)";
		}
		output += "\nList:[";
		var currNode = this.head;
		var indx = 0;
		while (currNode != null) {
			if (indx > 0) {
				output += ",";
			}
			output += "\n\t{ [" + indx + '] "value":' + currNode.value + " }";
			currNode = currNode.next;
			indx++;
		}
		output += "]\n}";
		return output;
	}
	search(value) {
		if (value == undefined || value == null) return undefined;

		let foundNode = this.head;
		var indx = 0;
		while (foundNode != null && foundNode.value !== value) {
			foundNode = foundNode.next;
			indx++;
		}
		if (foundNode == null) {
			return -1;
		}
		return indx;
	}

	insert(indx, value) {
		if (indx < 0) return;
		if (indx >= this.size) {
			this.add(value);
			return;
		}
		var newNode = null;
		if (indx == 0) {
			newNode = new DSA101_LinkedList_Node(value, this.head);
			this.head = newNode;
		} else {
			var pushedNode = this.head;
			var prevNode = null;
			// TO GET THE CORRECT POSITION
			for (let i = 0; i < indx; i++) {
				prevNode = pushedNode;
				pushedNode = pushedNode.next;
			}
			// INSERT
			newNode = new DSA101_LinkedList_Node(value, pushedNode);
			prevNode.next = newNode;
		}
		this.size++;
	}
}

export default DSA101_LinkedList;
