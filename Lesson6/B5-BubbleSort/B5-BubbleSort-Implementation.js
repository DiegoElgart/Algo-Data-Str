function bubbleSort(arr) {
	var arrSorted = [...arr];
	var swaps = 1;
	var cycle = 0;
	var j = 0;
	var tmp = 0;
	console.log("Cycle #0\tinitial state:\t" + arrSorted);
	while (swaps > 0) {
		cycle++;
		swaps = 0;
		for (let i = 1; i < arrSorted.length; i++) {
			j = i - 1;
			if (arrSorted[j] > arrSorted[i]) {
				swaps++;
				tmp = arrSorted[j];
				arrSorted[j] = arrSorted[i];
				arrSorted[i] = tmp;
			}
		}
		console.log("Cycle #" + cycle + "\tswaps=" + swaps + ":\t" + arrSorted);
	}
	return arrSorted;
}

console.info("+----------------------------------------");
console.info("| Bubble Sort - create values array:");
var arrValues1 = [8, 7, 6, 5, 4, 3, 6, 2, 6, 1, 1, 2, 3, 5, 6, 7, 2, 3, 5, 7, 9, 0];
var arrOut1 = bubbleSort(arrValues1);
console.log("|\tarrValues1 =\t" + arrValues1.toString());
console.log("|\tarrOut1 =\t" + arrOut1.toString());

console.info("+----------------------------------------");
console.info("| Buuble Sort - create values array:");
var arrValues2 = [-1, 0, -1, 1, 1, 1, -1, 0, 0, 1, -1, 1, 0];
var arrOut2 = bubbleSort(arrValues2);
console.log("|\tarrValues2 =\t" + arrValues2.toString());
console.log("|\tarrOut2 =\t" + arrOut2.toString());
