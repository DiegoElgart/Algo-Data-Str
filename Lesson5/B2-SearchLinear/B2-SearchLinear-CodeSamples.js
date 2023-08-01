function linearSearch(arr, value) {
	if (arr == null || value == null) return null;
	if (arr.length == 0) return null;

	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) return value;
	}
}

function getMin(arr) {
	if (arr == null) return null;
	if (arr.length == 0) return null;
	var minVal = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (minVal > arr[i]) minVal = arr[i];
	}
	return minVal;
}

function getMax(arr) {
	if (arr == null) return null;
	if (arr.length == 0) return null;
	var maxVal = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (maxVal < arr[i]) maxVal = arr[i];
	}
	return maxVal;
}
