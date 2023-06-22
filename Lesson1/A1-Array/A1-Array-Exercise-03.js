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
		for (i = arr.length - 1; i >= 0; i--) {
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

//console.log(find(arr, value, occurrence));

console.log("+----------------------------------------+");
console.log("| Using indexOf to find values - Lisa");
var indxLisa = find(arrStudentFirstNames, "Lisa", 1);
console.log('|\tValue "Lisa" found in index = ' + indxLisa);

console.log("+----------------------------------------+");
console.log("| Using indexOf to find values - Lisa (reverse)");
var indxLisa = find(arrStudentFirstNames, "Lisa", -1);
console.log('|\tValue "Lisa" found in index = ' + indxLisa);
