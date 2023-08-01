import DSA101_DoubleLL from "../../Lesson3/A5-DoubleLL/A5-DoubleLL-Implementation.mjs";
import DSA101_DoubleLL2 from "./B2-LinearSearch-Ex02-Impl.mjs";

const NUM_OF_ITTERATIONS_S = 5000;
const NUM_OF_ITTERATIONS_M = 10000;
const NUM_OF_ITTERATIONS_L = 20000;
const NUM_OF_ITTERATIONS_XL = 50000;

console.info("+---------------------------------------------------------------------------------------");
console.info("| Performamce measures - Linked List 10K, 20K, 50K, 100K appends & finds:");
console.info("+-----------------------+---------------+-------+---------------+---------------+-------+");
console.log("| Data Structure\t| T-Shirt\t| Size\t| Append \t| Find X10\t| Errs\t|");
console.log("|\t\t\t|\t\t|\t| (in msec)\t| (in msec)\t|\t|");
console.info("+-----------------------+---------------+-------+---------------+---------------+-------+");

function getSizeByTShirt(tShiftSz) {
	let sz = 0;
	if ("XL" === tShiftSz) {
		sz = NUM_OF_ITTERATIONS_XL;
	} else if ("L" === tShiftSz) {
		sz = NUM_OF_ITTERATIONS_L;
	} else if ("M" === tShiftSz) {
		sz = NUM_OF_ITTERATIONS_M;
	} else if ("S" === tShiftSz) {
		sz = NUM_OF_ITTERATIONS_S;
	}
	return sz;
}

function initializeInputArray(sz) {
	var currValue = 0;
	var arrInputs = new Array();
	for (let i = 0; i < sz; i++) {
		currValue = Math.floor(Math.random() * sz);
		arrInputs.push(currValue);
	}
	return arrInputs;
}

function getNumberWithScaleByTShirt(tShiftSz) {
	let outStr = "0";
	if ("XL" === tShiftSz) {
		outStr = "50K";
	} else if ("L" === tShiftSz) {
		outStr = "20K";
	} else if ("M" === tShiftSz) {
		outStr = "10K";
	} else if ("S" === tShiftSz) {
		outStr = "5K";
	}
	return outStr;
}

function generateStatsLine(tstName, shirtSz, tAppendStart, tAppendComplete, tFindStart, tFindComplete, countErrors) {
	let strStats = "| " + tstName + "\t\t| ";
	strStats += shirtSz + "\t\t| ";
	strStats += getNumberWithScaleByTShirt(shirtSz);
	strStats += "\t| ";
	strStats += tAppendComplete - tAppendStart;
	strStats += "\t\t| ";
	strStats += tFindComplete - tFindStart;
	strStats += "\t\t| ";
	strStats += countErrors + "\t|";
	return strStats;
}

// Defininf function to re-use code
function runPerformanceTestLinkedList(tstName, list, shirtSz) {
	let sz = getSizeByTShirt(shirtSz);
	if (sz == 0) return;
	// prepare inputs
	var arrInputs = initializeInputArray(sz);
	// append values
	const tAppendStart = Date.now();
	for (let i = 0; i < arrInputs.length; i++) {
		currValue = arrInputs[i];
		list.add(currValue);
	}
	const tAppendComplete = Date.now();
	var currValue = 0;
	var foundValue = 0;
	var countErrors = 0;
	const tFindStart = Date.now();
	for (let i = 0; i < arrInputs.length; i++) {
		currValue = arrInputs[i];
		for (let j = 0; j < 10; j++) {
			foundValue = list.get(i);
			if (foundValue != currValue) countErrors++;
		}
	}
	const tFindComplete = Date.now();
	// Build statistics msg
	let strStats = generateStatsLine(tstName, shirtSz, tAppendStart, tAppendComplete, tFindStart, tFindComplete, countErrors);
	console.log(strStats);
}

var dll = new DSA101_DoubleLL();
runPerformanceTestLinkedList("DoubleLL", dll, "S");
var dll = new DSA101_DoubleLL();
runPerformanceTestLinkedList("DoubleLL", dll, "M");
var dll = new DSA101_DoubleLL();
runPerformanceTestLinkedList("DoubleLL", dll, "L");
var dll = new DSA101_DoubleLL();
runPerformanceTestLinkedList("DoubleLL", dll, "XL");
console.info("+-----------------------+---------------+-------+---------------+---------------+-------+");

var dll2 = new DSA101_DoubleLL2();
runPerformanceTestLinkedList("DoubleLL2", dll2, "S");
var dll2 = new DSA101_DoubleLL2();
runPerformanceTestLinkedList("DoubleLL2", dll2, "M");
var dll2 = new DSA101_DoubleLL2();
runPerformanceTestLinkedList("DoubleLL2", dll2, "L");
var dll2 = new DSA101_DoubleLL2();
runPerformanceTestLinkedList("DoubleLL2", dll2, "XL");
console.info("+-----------------------+---------------+-------+---------------+---------------+-------+");
