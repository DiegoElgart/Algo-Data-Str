class CallStack {
	constructor(initCapacity = 10) {
		this.functionStackA = new Array(initCapacity);
		this.headIndex = -1;
	}

	invoke(nameOfFunc) {
		this.headIndex++;
		this.functionStackA[this.headIndex] = nameOfFunc;
	}
	pop() {
		if (this.headIndex <= -1) {
			return undefined;
		}
		let output = this.functionStackA[this.headIndex];
		this.functionStackA[this.headIndex] = undefined;
		this.headIndex--;

		return output;
	}

	run(nameOfFunc) {
		let functionStackB = new CallStack();
		for (let i = this.headIndex; i > -1; i--) {
			if (this.functionStackA[this.headIndex] !== nameOfFunc) {
				functionStackB.invoke(this.functionStackA[this.headIndex]);
				//this.functionStackA[this.headIndex] = undefined;
				this.headIndex--;
			}
		}
		this.functionStackA[this.headIndex]();
		functionStackB.functionStackA.forEach(element => {
			this.functionStackA[this.headIndex] = element;
			this.headIndex++;
		});
		console.log(this.functionStackA);
	}

	printStack() {
		let output = "";
		for (let indx = this.headIndex; indx > -1; indx--) {
			output += "[" + indx + "] " + this.functionStackA[indx] + "\n";
		}
		return output;
	}
}

function printNum() {
	console.log(10);
}
function printStr() {
	console.log("Messi");
}
function printStr2() {
	console.log("El mas grande es ");
}

const callStack = new CallStack();
callStack.invoke(printNum);
callStack.invoke(printStr);
callStack.invoke(printStr2);
//console.log(callStack.printStack());

callStack.run(printStr2);
