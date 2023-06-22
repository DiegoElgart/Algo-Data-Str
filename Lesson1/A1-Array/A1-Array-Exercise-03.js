let arr = [1, 2, 3, 4, 2, 1, 4];
let value = 4;
let occurrence = -2;

const arrStudentFirstNames = ["Lisa", "Karen", "Rihana", "Adel"];
const arrStudentLastNames = ["Presley", "Carpenter", "Fenty", "Adkins"];
const arrStudentGrades = [50.0, 79.0, 85.0, 85.0];

function find(arr, val, occ) {
	let currOccur = 0;
	let outputIndx = -1;
	if (occ == 0 || occ === undefined) {
		return -1;
	}
	if (arr == undefined || arr.length == 0) {
		return -1;
	}
	if (value == undefined) {
		return -1;
	}

	if (occ > 0) {
		arr.forEach((item, index) => {
			if (item == val) {
				currOccur++;
				outputIndx = index;
			}
		});
	} else {
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == val) {
				currOccur--;
				if (currOccur == occ) {
					outputIndx = i;
				}
			}
		}
	}
	return outputIndx;
}

console.log(find(arr, value, occurrence));

// console.log("+----------------------------------------+");
// console.log("| Using indexOf to find values - Lisa");
// var indxLisa = find(arrStudentFirstNames, "Lisa", 1);
// console.log('|\tValue "Lisa" found in index = ' + indxLisa);

// console.log("+----------------------------------------+");
// console.log("| Using indexOf to find values - Lisa (reverse)");
// var indxLisa = find(arrStudentFirstNames, "Lisa", -1);
// console.log('|\tValue "Lisa" found in index = ' + indxLisa);

// Code for sorting functon on an Array - implementation of Selection Sort
function selectionSort(arr) {
	let output = [...arr]; //shallow copy
	let min;
	let indxMin;
	let startFrom = 0;
	let curr = 0;
	while (startFrom < output.length - 1) {
		indxMin = startFrom;
		min = output[startFrom];
		for (let indx = startFrom; indx < output.length; indx++) {
			curr = output[indx];
			if (min > curr) {
				min = curr;
				indxMin = indx;
			}
		}
		if (indxMin > startFrom) {
			output[indxMin] = output[startFrom];
			output[startFrom] = min;
		}
		startFrom++;
	}
	return output;
}

// Code for testing sort
income = [9, 1, 5, 6, 0, 1, 8, 7, 2, 3, 2, 7];
console.log("Unsorted = " + income.toLocaleString());
outcome = selectionSort(income);
console.log("Sorted = " + outcome.toLocaleString());
