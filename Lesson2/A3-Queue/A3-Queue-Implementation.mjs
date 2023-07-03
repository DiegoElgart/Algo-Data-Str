class DSA101_Queue {
	constructor(initCapacity = 20) {
		this.queue = new Array(initCapacity);
		this.headIndex = -1;
		this.tailIndex = -1;
		this.capacity = initCapacity;
		this.size = 0;
	}

	isEmpty() {
		return this.size == 0;
	}

	peek() {
		return this.queue[this.headIndex % this.capacity];
	}

	push(value) {
		this.tailIndex++;
		if (this.headIndex == -1) {
			this.headIndex = this.tailIndex;
		}
		this.queue[this.tailIndex % this.capacity] = value;
		this.size++;
	}

	pop() {
		if (this.headIndex == -1) return undefined;
		var output = this.peek();
		this.queue[this.headIndex % this.capacity] = undefined;
		this.headIndex++;
		this.size--;
		if (this.size <= 0) {
			this.headIndex = -1;
		}
		return output;
	}

	toString() {
		let output = "DSA101_Queue:\n{";
		output += "\tsize = " + this.size + "\n";
		output += "\tinitCapacity = " + this.capacity + "\n";
		output += "\theadIndex = " + this.headIndex + "\n";
		output += "\ttailIndex = " + this.tailIndex + "\n";
		output += "\tqueue = [\n";
		var currIndex = -1;
		for (let offset = 0; offset < this.size; offset++) {
			currIndex = this.headIndex + offset;
			output += "\t\t(index=" + currIndex + ",value=" + this.queue[currIndex % this.capacity] + ")\n";
		}
		output += "\t]\n";
		output += "}";
		return output;
	}
}

export default DSA101_Queue;
