class DSA101_Stack {
	constructor(initCapacity = 10) {
		this.data = new Array(initCapacity);
		this.headIndex = -1;
	}

	push(value) {
		this.headIndex++;
		this.data[this.headIndex] = value;
	}

	peek() {
		if (this.headIndex == -1) {
			return undefined;
		}

		return this.data[[this.headIndex]];
	}
	pop() {
		if (this.headIndex <= -1) {
			return undefined;
		}
		let output = this.data[this.headIndex];
		this.data[this.headIndex] = undefined;
		this.headIndex--;
		return output;
	}

	toString() {
		let output = "";
		for (let indx = this.headIndex; indx > -1; indx--) {
			output += "[" + indx + "] " + this.data[indx] + "\n";
		}
		return output;
	}
}

module.exports = DSA101_Stack;
