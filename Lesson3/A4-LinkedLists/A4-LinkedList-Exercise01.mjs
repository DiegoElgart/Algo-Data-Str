import DSA101_LinkedList from "./A4-LinkedList-Impl-Ex01.mjs";

var ll1 = new DSA101_LinkedList();

console.log("+--------------------------");
console.log("| Linked List - Add numeric value");
ll1.add(2);
console.log("| ll1 = " + ll1.toString());

console.log("+--------------------------");
console.log("| Linked List - Add Innigo Montoya");
ll1.add("Hello.");
ll1.add("My name is Innigo Montoya.");
ll1.add("You killed my father.");
ll1.add("Prepare to die.");
console.log("| ll1 = " + ll1.toString());

console.log("+--------------------------");
console.log("| Linked List - Search value in list");
var indx = ll1.search("Hello.");
console.log("| ll1= " + ll1.toString());
var value = ll1.get(indx);
console.log("| ? > Hello. == " + value);
