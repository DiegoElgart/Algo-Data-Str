function recursiveFactorial(n) {
	if (n === 0) {
		return 1;
	}
	var subproblem = recursiveFactorial(n - 1);
	return n * subproblem;
}

function loopFactorial1(n) {
	var output = 1;
	while (n > 1) {
		output *= n;
		n--;
	}
	return output;
}

function loopFactorial2(n) {
	var output = 1;
	for (let i = 2; i < n; i++) {
		output *= i;
	}
	return output;
}
