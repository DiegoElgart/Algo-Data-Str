const arrStudentFirstNames = ["Lisa", "Karen", "Rihana", "Adel"];
const arrStudentLastNames = ["Presley", "Carpenter", "Fenty", "Adkins"];
const arrStudentGrades = [50, 79, 85, 85];

function printStudentsGrades() {
	let output = "";
	arrStudentLastNames.forEach((item, index) => (output += index + 1 + ") " + (item + " " + arrStudentFirstNames[index]).padEnd(20) + arrStudentGrades[index] + "\n"));

	return output;
}

function calculateAverageGrade() {
	let sum = 0.0;
	arrStudentGrades.forEach(grade => (sum += grade));
	return sum / arrStudentGrades.length;
}

console.log(printStudentsGrades());
console.log("Average Grade: ", calculateAverageGrade());
