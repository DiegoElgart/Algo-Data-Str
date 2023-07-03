const DSA101_Stack = require("./A2-Stack-Implementation");

class CallStack {
	constructor() {
		this.stack = null;
	}

	run(funcArr) {
		this.stack = new DSA101_Stack();
		funcArr.forEach(element => {
			this.invoke(element);
		});
	}

	invoke(funcName) {
		this.stack.push(funcName);
	}

	printStack() {
		return this.stack.toString();
	}
}

var program = ["main", "getItemsFromDB", "getItemFromDB"];
var vm = new CallStack();
vm.run(program);
var result = vm.printStack();
console.log(result);
