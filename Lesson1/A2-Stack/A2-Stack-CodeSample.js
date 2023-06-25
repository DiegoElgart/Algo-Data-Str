const DSA101_Stack = require("./A2-Stack-Implementation");

var stack1 = new DSA101_Stack();

stack1.push("Prepare to die!");
stack1.push("You killed my father!");
stack1.push("My name is Innego Montoya");
stack1.push("Hello...");

console.log("------------------");
console.log("|Stack Print");
console.log(stack1.toString());

console.log("------------------");
console.log("| Stack Peek");
var popup1 = stack1.peek();
console.log("|\t popup1 = " + popup1);
console.log(stack1.toString());

console.log("------------------");
console.log("| Stack Pop");
var popup2 = stack1.pop();
console.log("|\t popup2 = " + popup2);
console.log(stack1.toString());

// console.log("------------------");
// console.log("| Stack Peek");
// console.log( stack1.peek());
