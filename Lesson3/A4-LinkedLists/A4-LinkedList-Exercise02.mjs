import DSA101_LinkedList from "./A4-LinkedList-Impl-Ex02.mjs";
var ll1 = new DSA101_LinkedList();

console.log("+--------------------------");
console.log("| Linked List - Insert strings to index 0");
ll1.insert(0, "Hello.");
ll1.insert(0, "My name is Innigo Montoya.");
ll1.insert(0, "You killed my father.");
ll1.insert(0, "Prepare to die.");
console.log("| ll1 = " + ll1.toString());
