function frequency(arr) {
	if (arr == null) return null;
	if (arr.length == 0) return null;

	let frequencyCounter = {};

	for (let val of arr) {
		frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
	}
	return frequencyCounter;
}

function printFrequncyTable(arr) {
	let outStr = "\n+-------+---------------+";
	outStr += "\n| Digit | Occursnces    |";
	outStr += "\n+-------+---------------+";
	// Frequency data array - cell per digit (each digit is index)
	let arrFreq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	if (arr != null) {
		// collect frequency data
		for (let i = 0; i < arr.length; i++) {
			arrFreq[arr[i]]++;
		}
		// printout frequency table
		for (let j = 0; j < arrFreq.length; j++) {
			outStr += "\n| " + j + "\t| " + arrFreq[j] + "\t\t|";
		}
		outStr += "\n+-------+---------------+";
	}
	return outStr;
}

var arr1 = [0, 1, 2, 3, 1, 2, 3, 1, 2, 5, 6, 7, 8, 5, 6, 3, 4, 5, 6, 2, 4, 4, 6, 7, 3, 9, 8, 7, 5, 0, 1];
console.log("\nArray 1 - Frequency Table:" + printFrequncyTable(arr1));

var arr2 = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
console.log("\nArray 2 - Frequency Table:" + printFrequncyTable(arr2));

const result = frequency(arr2);
console.log(result);
