export class DSA101_BST_Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}

	findNode(value) {
		if (this.value === value) {
			return this;
		} else if (this.value > value) {
			if (this.left == null) return null;
			return this.left.findNode(value);
		} else {
			if (this.right == null) return null;
			return this.right.findNode(value);
		}
	}
	quickPrint() {
		let outStr = "BST_Node:{";
		outStr += '"value":' + this.value + ", L:";
		if (this.left == null) {
			outStr += "null";
		} else {
			outStr += this.left.quickPrint();
		}
		outStr += ", R:";
		if (this.right == null) {
			outStr += "null";
		} else {
			outStr += this.right.quickPrint();
		}
		outStr += "}";
		return outStr;
	}
}

export default DSA101_BST_Node;
