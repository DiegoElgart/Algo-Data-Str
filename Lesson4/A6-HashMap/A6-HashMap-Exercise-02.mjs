import DSA101_LinkeList from "../../Lesson3/A4-LinkedLists/A4-LinkedList-Implementation.mjs";
import DSA101_DoubleLL from "../../Lesson3/A5-DoubleLL/A5-DoubleLL-Implementation.mjs";
import DSA101_HashMap from "./A6_HashMap-Impl-Ex02.mjs";

const NUM_OF_ITERATIONS_S = 10000;
const NUM_OF_ITERATIONS_M = 20000;
const NUM_OF_ITERATIONS_L = 50000;
const NUM_OF_ITERATIONS_XL = 100000;

console.info("+------------------------------------------------------------------------------------------------------------------+");
console.info("| Perfomance measure - Appends & Finds 10k, 20K, 50K, 100K:");
console.info("+-----------------------+-----------------------+---------------+---------------+----------------------------------+");
console.info("| Data Structure\t| T-Shirt\t| Size\t| Append\t| Find\t\t|");
console.log("|\t\t\t|\t\t|\t| (in msec)\t| (in msec)\t|");
console.info("+-----------------------+-----------------------+---------------+---------------+----------------------------------+");

var ll = new DSA101_LinkeList();

const startTimeLL_Append_S = Date.now();
var currValue = 0;
let i = 0;
for (i = 0; i < NUM_OF_ITERATIONS_S; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_S);
	ll.add(currValue);
}
const completeTimeLL_Append_S = Date.now();

const startTimeLL_Append_M = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_M; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_M);
	ll.add(currValue);
}
const completeTimeLL_Append_M = Date.now();

const startTimeLL_Append_L = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_L; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_L);
	ll.add(currValue);
}
const completeTimeLL_Append_L = Date.now();

const startTimeLL_Append_XL = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_XL; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_XL);
	ll.add(currValue);
}
const completeTimeLL_Append_XL = Date.now();
const startTimeLL_Find_XL = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_XL; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_S);
	ll.get(currValue);
}
const completeTimeLL_Find_XL = Date.now();
console.log("| LinkedList\t\t| S\t\t| 10K\t|" + (completeTimeLL_Append_S - startTimeLL_Append_S) / 10 + "\t\t|");
console.log("| LinkedList\t\t| M\t\t| 20K\t|" + (completeTimeLL_Append_M - startTimeLL_Append_M) / 10 + "\t\t|");
console.log("| LinkedList\t\t| L\t\t| 50K\t|" + (completeTimeLL_Append_L - startTimeLL_Append_L) / 10 + "\t\t|");
console.log("| LinkedList\t\t| XL\t\t| 100K\t|" + (completeTimeLL_Append_XL - startTimeLL_Append_XL) / 10 + "\t\t|");

console.info("+-----------------------+-----------------------+---------------+---------------+----------------------------------+");
var dll = new DSA101_LinkeList();

const startTimeDLL_Append_S = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_S; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_S);
	dll.add(currValue);
}
const completeTimeDLL_Append_S = Date.now();

const startTimeDLL_Append_M = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_M; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_M);
	dll.add(currValue);
}
const completeTimeDLL_Append_M = Date.now();

const startTimeDLL_Append_L = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_L; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_L);
	dll.add(currValue);
}
const completeTimeDLL_Append_L = Date.now();

const startTimeDLL_Append_XL = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_XL; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_XL);
	dll.add(currValue);
}
const completeTimeDLL_Append_XL = Date.now();
const startTimedLL_Find_XL = Date.now();
var currValue = 0;
for (i = 0; i < NUM_OF_ITERATIONS_XL; i++) {
	currValue = Math.floor(Math.random() * NUM_OF_ITERATIONS_S);
	dll.get(currValue);
}
const completeTimeDLL_Find_XL = Date.now();
console.log("| Double LL\t\t| S\t\t| 10K\t|" + (completeTimeDLL_Append_S - startTimeDLL_Append_S));
console.log("| Double LL\t\t| M\t\t| 20K\t|" + (completeTimeDLL_Append_M - startTimeDLL_Append_M));
console.log("| Double LL\t\t| L\t\t| 50K\t|" + (completeTimeDLL_Append_L - startTimeDLL_Append_L));
console.log("| Double LL\t\t| XL\t\t| 100K\t|" + (completeTimeDLL_Append_XL - startTimeDLL_Append_XL));
