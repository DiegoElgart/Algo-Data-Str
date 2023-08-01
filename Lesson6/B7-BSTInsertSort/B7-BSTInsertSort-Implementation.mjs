import DSA101_BST from "../../Lesson4/A7-BinaryTree/A7-BST-Implementation.mjs";

function initializeInputArray(sz) {
	let arrOut = new Array();
	var currValue = 0;
	for (let i = 0; i < sz; i++) {
		currValue = Math.floor(Math.random() * 10000);
		arrOut.push(currValue);
	}
	return arrOut;
}

function sortByBSTInsert(arrIn) {
	if (arrIn == null) return null;
	// New BST
	var treeSort = new DSA101_BST();
	for (let i = 0; i < arrIn.length; i++) {
		treeSort.add(arrIn[i]);
	}
	console.log("DEBUG: tree = " + treeSort.quickPrint());
	var arrOut = new Array();
	treeSort.toArray(arrOut);
	return arrOut;
}

var arr1 = initializeInputArray(1000);
var out1 = sortByBSTInsert(arr1);
console.log("Inoput = " + arr1.toString());
console.log("Output = " + out1.toString());
