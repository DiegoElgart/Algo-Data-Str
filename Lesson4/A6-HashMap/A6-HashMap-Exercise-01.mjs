import DSA101_Stack from "../../Lesson1/A2-Stack/A2-Stack-Implementation.js";
import DSA101_DoubleLL from "../../Lesson3/A5-DoubleLL/A5-DoubleLL-Implementation.mjs";
import DSA101_HashMap from "./A6_HashMap-Implementation.mjs";
import DSA101_HashMap2 from "./A6-HashMap-Exercise-02.mjs";

var stack1 = new DSA101_Stack();
var doubleLL = new DSA101_DoubleLL();
var hashMap = new DSA101_HashMap();
var hashMap2 = new DSA101_HashMap2();

console.log("| SETTERS");
console.log("| ----------------------------------------+");

var startTime1 = Date.now();
console.log("Current Timestmp startTime Stack List = " + startTime1);
for (let i = 0; i < 100000; i++) {
	stack1.push(i);
}
var endTime1 = Date.now();
console.log("Current Timestmp endTime  Stack List = " + endTime1);
console.log("Elapsed Time (in milliseconds) = Stack List " + (endTime1 - startTime1));

console.log("| ----------------------------------------+");

var startTime2 = Date.now();
console.log("Current Timestmp startTime DoubleLL = " + startTime2);
for (let i = 0; i < 100000; i++) {
	doubleLL.add(i);
}
var endTime2 = Date.now();
console.log("Current Timestmp endTime  DoubleLL = " + endTime2);
console.log("Elapsed Time (in milliseconds) DoubleLL =  " + (endTime2 - startTime2));

console.log("| ----------------------------------------+");

var startTime3 = Date.now();
console.log("Current Timestmp startTime DoubleLL = " + startTime3);
for (let i = 0; i < 100000; i++) {
	hashMap.set(i, i);
}
var endTime3 = Date.now();
console.log("Current Timestmp endTime  Hash Map = " + endTime3);
console.log("Elapsed Time (in milliseconds) Hash Map =  " + (endTime3 - startTime3));

console.log("| ----------------------------------------+");

var startTime4 = Date.now();
console.log("Current Timestmp startTime Hash Map2 = " + startTime4);
for (let i = 0; i < 100000; i++) {
	hashMap2.set(i, i);
}
var endTime4 = Date.now();
console.log("Current Timestmp endTime  Hash Map2 = " + endTime4);
console.log("Elapsed Time (in milliseconds) Hash Map2 =  " + (endTime4 - startTime4));

console.log("| FINDERS");
console.log("| ----------------------------------------+");

var startTime1 = Date.now();
console.log("Current Timestmp startTime Stack List = " + startTime1);
for (let i = 0; i < 100000; i++) {
	stack1.peek(i);
}
var endTime1 = Date.now();
console.log("Current Timestmp endTime  Stack List = " + endTime1);
console.log("Elapsed Time (in milliseconds) = Stack List " + (endTime1 - startTime1));

console.log("| ----------------------------------------+");

var startTime2 = Date.now();
console.log("Current Timestmp startTime DoubleLL = " + startTime2);
for (let i = 0; i < 100000; i++) {
	doubleLL.get(i);
}
var endTime2 = Date.now();
console.log("Current Timestmp endTime  DoubleLL = " + endTime2);
console.log("Elapsed Time (in milliseconds) DoubleLL =  " + (endTime2 - startTime2));

console.log("| ----------------------------------------+");

var startTime3 = Date.now();
console.log("Current Timestmp startTime DoubleLL = " + startTime3);
for (let i = 0; i < 100000; i++) {
	hashMap.get(i);
}
var endTime3 = Date.now();
console.log("Current Timestmp endTime  Hash Map = " + endTime3);
console.log("Elapsed Time (in milliseconds) Hash Map =  " + (endTime3 - startTime3));

console.log("| ----------------------------------------+");

var startTime4 = Date.now();
console.log("Current Timestmp startTime Hash Map2 = " + startTime4);
for (let i = 0; i < 15; i++) {
	hashMap2.get(i);
}
var endTime4 = Date.now();
console.log("Current Timestmp endTime  Hash Map2 = " + endTime4);
console.log("Elapsed Time (in milliseconds) Hash Map2 =  " + (endTime4 - startTime4));
