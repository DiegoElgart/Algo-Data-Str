console.log("+--------------------------------------");
console.log("| Array1 - Caps Characters");
var array1 = ["A", "B", "C"];
console.log("|\t Array1: length=" + array1.length + ", values=" + array1.toString());
console.log("+--------------------------------------");
console.log("| Array2 - Numbers");
var array2 = [1, 2, 3];
console.log("|\t Array2: length=" + array2.length + ", values=" + array2.toString());
console.log("+--------------------------------------");
console.log("| Array3 - Concatenated");
var array3 = array1.concat(array2);
console.log("|\t Array3: length=" + array3.length + ", values=" + array3.toString());
console.log("+--------------------------------------");
console.log("| Array3 - Reversed");
array3.reverse();
console.log("|\t Array3: length=" + array3.length + ", values=" + array3.toString());
console.log("+--------------------------------------");
console.log("| Array4 - Numbers");
var array4 = ["a", "b", "c"];
console.log("|\t Array4: length=" + array4.length + ", values=" + array4.toString());
console.log("+--------------------------------------");
console.log("| Array5 - Concatenated");
var array5 = array2.concat(array3);
console.log("|\t Array5: length=" + array5.length + ", values=" + array5.toString());
console.log("+--------------------------------------");
console.log("| Array5 - Sorted");
array5.sort();
console.log("|\t Array5: length=" + array5.length + ", values=" + array5.toString());
