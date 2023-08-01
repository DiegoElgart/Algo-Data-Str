import DSA101_BST_Node from "../../Lesson4/A7-BinaryTree/A7-BST-Node.mjs";

const NUM_OF_ITTERATIONS_S = 1023;
const NUM_OF_ITTERATIONS_M = 4095;
const NUM_OF_ITTERATIONS_L = 16383;
const NUM_OF_ITTERATIONS_XL = 65535;

console.info("+-------------------------------------------------------------------------------+");
console.info("| Performamce measures - Binary Search over Array 10K, 20K, 50K, 100K finds:");
console.info("+-------------------------------+---------------+-------+---------------+-------+");
console.log("| Data Structure\t\t| T-Shirt\t| Size\t| Find \t\t| Errs\t|");
console.log("|\t\t\t\t|\t\t|\t| (in msec)\t|\t|");
console.info("+-------------------------------+---------------+-------+---------------+-------+");

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
		arrInputs.push(i);
	}
	return arrInputs;
}

function getNumberWithScaleByTShirt(tShiftSz) {
	let outStr = "0";
	if ("XL" === tShiftSz) {
		outStr = "32K";
	} else if ("L" === tShiftSz) {
		outStr = "16";
	} else if ("M" === tShiftSz) {
		outStr = "4K";
	} else if ("S" === tShiftSz) {
		outStr = "1K";
	}
	return outStr;
}

function generateStatsLine(tstName, shirtSz, tFindStart, tFindComplete, countErrors) {
	let strStats = "| " + tstName + "\t\t| ";
	strStats += shirtSz + "\t\t| ";
	strStats += getNumberWithScaleByTShirt(shirtSz);
	strStats += "\t| ";
	strStats += tFindComplete - tFindStart;
	strStats += "\t\t| ";
	strStats += countErrors + "\t|";
	return strStats;
}

// Defininf function to re-use code
function runPerformanceTestArrayNormal(tstName, shirtSz) {
	let sz = getSizeByTShirt(shirtSz);
	if (sz == 0) return;
	// prepare inputs
	var arrInputs = initializeInputArray(sz);
	var currValue = 0;
	var foundValue = 0;
	var countErrors = 0;
	const tFindStart = Date.now();
	for (let i = 0; i < arrInputs.length; i++) {
		currValue = arrInputs[i];
		foundValue = arrInputs.indexOf(i);
		if (foundValue != currValue) countErrors++;
	}
	const tFindComplete = Date.now();
	// Build statistics msg
	let strStats = generateStatsLine(tstName, shirtSz, tFindStart, tFindComplete, countErrors);
	console.log(strStats);
}

function runPerformanceTestArrayOrdered(tstName, shirtSz) {
	let sz = getSizeByTShirt(shirtSz);
	if (sz == 0) return;
	// prepare inputs
	var arrInputs = initializeInputArray(sz);
	var currValue = 0;
	var foundValue = 0;
	var countErrors = 0;
	const tFindStart = Date.now();
	for (let i = 0; i < arrInputs.length; i++) {
		currValue = arrInputs[i];
		foundValue = _binarySearchOrderedArray(arrInputs, i);
		if (foundValue != currValue) countErrors++;
	}
	const tFindComplete = Date.now();
	// Build statistics msg
	let strStats = generateStatsLine(tstName, shirtSz, tFindStart, tFindComplete, countErrors);
	console.log(strStats);
}

function _binarySearchOrderedArray(arr, value, pivot = Math.floor(arr.length / 2), delta = Math.floor(arr.length / 4)) {
	if (arr == null || value == null) return null;
	if (arr[pivot] === value) return arr[pivot];
	if (delta == 0) delta++;
	var newPivot = pivot;
	if (value < arr[pivot]) {
		// Move left
		newPivot = pivot - delta;
	} else {
		// Move right
		newPivot = pivot + delta;
	}
	return _binarySearchOrderedArray(arr, value, newPivot, Math.floor(delta / 2));
}

function binarySearchOrderedArray(arr, value) {
	if (arr == null || value == null) return null;
	var pivot = Math.floor(arr.length / 2);
	var foundValue = null;
	while (foundValue == null && pivot >= 0 && pivot < arr.length) {
		if (arr[pivot] === value) {
			foundValue = arr[pivot];
		} else if (pivot == 0) {
			pivot--;
		} else if (pivot == arr.length - 1) {
			pivot++;
		} else if (pivot <= Math.floor(arr.length / 2)) {
			pivot = Math.floor(pivot / 2);
		} else {
			pivot = arr.length - Math.floor(pivot / 2);
		}
	}
	return foundValue;
}

function getMin(tree) {
	var currNode = tree.root;
	var outValue = null;
	while (currNode == null) {
		outValue = currNode.value;
		currNode = currNode.left;
	}
	return outValue;
}

runPerformanceTestArrayNormal("Array LinearSearch", "S");
runPerformanceTestArrayNormal("Array LinearSearch", "M");
runPerformanceTestArrayNormal("Array LinearSearch", "L");
runPerformanceTestArrayNormal("Array LinearSearch", "XL");
console.info("+-------------------------------+---------------+-------+---------------+-------+");

runPerformanceTestArrayOrdered("Array BinarySearch", "S");
runPerformanceTestArrayOrdered("Array BinarySearch", "M");
runPerformanceTestArrayOrdered("Array BinarySearch", "L");
runPerformanceTestArrayOrdered("Array BinarySearch", "XL");
console.info("+-------------------------------+---------------+-------+---------------+-------+");
