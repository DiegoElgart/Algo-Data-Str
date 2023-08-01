function recursiveATOI(str, n) {
	if (str.match("/^[0-9]+$/") == false) {
		return 0;
	}
	var currDigit = str[n - 1] - "0";
	if (n == 1) {
		return currDigit;
	}
	var subproblem = recursiveATOI(str, n - 1);
	return 10 * subproblem + currDigit;
}

function loopATOI(str, n) {
	var output = 0;
	var currDigit = 0;
	for (let i = 0; i < n; i++) {
		currDigit = str[i] - "0";
		output = 10 * output + currDigit;
	}
	return output;
}
console.info("+----------------------------------------");
var str = "0";
console.info("| Recursive ATOI - for single digit '" + str + "':");
var len = str.length;
recursiveOutcome = recursiveATOI(str, len);
loopOutcome = loopATOI(str, len);
console.log("|\trecursiveATOI('" + str + "') = " + recursiveOutcome);
console.log("|\tloopATOI('" + str + "') = " + loopOutcome);

console.info("+----------------------------------------");
var str = "5";
console.info("| Recursive ATOI - for single digit '" + str + "':");
var len = str.length;
recursiveOutcome = recursiveATOI(str, len);
loopOutcome = loopATOI(str, len);
console.log("|\trecursiveATOI('" + str + "') = " + recursiveOutcome);
console.log("|\tloopATOI('" + str + "') = " + loopOutcome);

console.info("+----------------------------------------");
var str = "50";
console.info("| Recursive ATOI - for digit string '" + str + "':");
var len = str.length;
recursiveOutcome = recursiveATOI(str, len);
loopOutcome = loopATOI(str, len);
console.log("|\trecursiveATOI('" + str + "') = " + recursiveOutcome);
console.log("|\tloopATOI('" + str + "') = " + loopOutcome);

console.info("+----------------------------------------");
var str = "287349617568235";
console.info("| Recursive ATOI - for digit string '" + str + "':");
var len = str.length;
recursiveOutcome = recursiveATOI(str, len);
loopOutcome = loopATOI(str, len);
console.log("|\trecursiveATOI('" + str + "') = " + recursiveOutcome);
console.log("|\tloopATOI('" + str + "') = " + loopOutcome);

console.info("+----------------------------------------");
var str = "287349617568235287349617568235287349617568235";
console.info("| Recursive ATOI - for digit string '" + str + "':");
var len = str.length;
recursiveOutcome = recursiveATOI(str, len);
loopOutcome = loopATOI(str, len);
console.log("|\trecursiveATOI('" + str + "') = " + recursiveOutcome);
console.log("|\tloopATOI('" + str + "') = " + loopOutcome);

console.info("+----------------------------------------");
