import DSA101_DoubleLL from "./A5-DoubleLL-Implementation.mjs";
import DSA101_LinkedList from "../A4-LinkedLists/A4-LinkedList-Implementation.mjs";

const lList = new DSA101_LinkedList();
const dblList = new DSA101_DoubleLL();

var startTime1 = Date.now();
console.log("Current Timestmp startTime Linked List = " + startTime1);
for (let i = 0; i < 100000; i++) {
	lList.add(i);
}
var endTime1 = Date.now();
console.log("Current Timestmp endTime  Linked List = " + endTime1);
console.log("Elapsed Time (in milliseconds) = Linked List " + (endTime1 - startTime1));

console.log("| ----------------------------------------+");

var startTime2 = Date.now();
console.log("Current Timestmp startTime DoubleLL = " + startTime2);
for (let i = 0; i < 100000; i++) {
	dblList.add(i);
}
var endTime2 = Date.now();
console.log("Current Timestmp endTime  DoubleLL = " + endTime2);
console.log("Elapsed Time (in milliseconds) DoubleLL =  " + (endTime2 - startTime2));
//console.log(dblList.toString());
