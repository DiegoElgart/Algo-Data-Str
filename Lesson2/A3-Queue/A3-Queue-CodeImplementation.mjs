import DSA101_Queue from "./A3-Queue-Implementation.mjs";

var q1 = new DSA101_Queue();

console.log("+--------------------------");
console.log("| Queue1: Push number");
q1.push(2);
console.log(q1.toString());

console.log("+--------------------------");
console.log("| Queue1: Push Strings");
q1.push("Hello.1");
q1.push("Hello.2");
q1.push("Hello.3");
q1.push("Hello.4");
q1.push("Hello.5");
q1.push("Hello.6");

console.log(q1.toString());

console.log("+--------------------------");
console.log("| Queue1: Flush all out");
while (q1.isEmpty() == false) {
	q1.pop();
}

console.log(q1.toString());

console.log("+--------------------------");
console.log("| Queue1: Push many Strings");
for (let i = 0; i < 19; i++) {
	q1.push("Hello." + (i + 1));
}

console.log(q1.toString());
