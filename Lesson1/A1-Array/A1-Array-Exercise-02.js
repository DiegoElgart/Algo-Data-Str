const arrStudentFirstNames = ["Lisa", "Karen", "Rihana", "Adel"];
const arrStudentLastNames = ["Presley", "Carpenter", "Fenty", "Adkins"];
const arrStudentGrades = [50.0, 79.0, 85.0, 85.0];

function indexOf(arr, value) {
	if (value == undefined || value == null) {
		return -1;
	} else {
		let output = -1;
		arr.forEach((item, index) => {
			if (item === value) {
				output = index;
			}
		});
		return output;
	}
}

// A more efficcient and correct implementation we discussed in class

function indexOf2(arr, value) {
	for (let indx = 0; indx < arr.length; indx++) {
		if (arr[indx] === value) {
			return indx;
		}
	}
	return -1;
}

console.log("+----------------------------------------+");
console.log("| Using indexOf to find values - Lisa - found in indx 0");
var indxLisa = indexOf(arrStudentFirstNames, "Lisa");
console.log('|\tValue "Lisa" found in index = ' + indxLisa);

console.log("+----------------------------------------+");
console.log("| Using indexOf to find values - Mama - not found - result is -1");
var indxMama = indexOf2(arrStudentFirstNames, "Mama");
console.log('|\tValue "Mama" found in index = ' + indxMama);
