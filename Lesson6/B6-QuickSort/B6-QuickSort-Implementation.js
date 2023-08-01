var cycles = 0;

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let tmp = arr[0];
	if (arr.length == 2) {
		if (arr[0] > arr[1]) {
			arr[0] = arr[1];
			arr[1] = tmp;
		}
		return arr;
	}
	let cycle = ++cycles;
	let pivot = Math.floor(arr.length * Math.random());
	let pivotValue = arr[pivot];
	let arrLeft = [];
	let arrRight = [];
	let arrPivot = [];
	for (let i = 0; i < arr.length; i++) {
		if (pivotValue === arr[i]) {
			arrPivot.push(pivotValue);
		} else if (pivotValue > arr[i]) {
			arrLeft.push(arr[i]);
		} else {
			arrRight.push(arr[i]);
		}
	}
	console.log("|\tCycle #" + cycle + " Start\tarrLeft=" + arrLeft + "\tarrPivot=" + arrPivot + "\tarrRight=" + arrRight);
	arrLeft = quickSort(arrLeft);
	arrRight = quickSort(arrRight);
	let arrSorted = [].concat(arrLeft, arrPivot, arrRight);
	console.log("|\tCycle #" + cycle + " End\tarrLeft=" + arrLeft + "\tarrPivot=" + arrPivot + "\tarrRight=" + arrRight);
	return arrSorted;
}

console.info("+----------------------------------------");
console.info("| Quick Sort - create values array:");
var cycles = 0;
var arrValues1 = [8, 7, 6, 5, 4, 3, 6, 2, 6, 1, 1, 2, 3, 5, 6, 7, 2, 3, 5, 7, 9, 0];
console.log("|\tarrValues1 =\t" + arrValues1.toString());
var arrOut1 = quickSort(arrValues1);
console.log("|\tarrOut1 =\t" + arrOut1.toString());

console.info("+----------------------------------------");
console.info("| Quick Sort - create values array:");
var cycles = 0;
var arrValues2 = [-1, 0, -1, 1, 1, 1, -1, 0, 0, 1, -1, 1, 0];
console.log("|\tarrValues2 =\t" + arrValues2.toString());
var arrOut2 = quickSort(arrValues2);
console.log("|\tarrOut2 =\t" + arrOut2.toString());
