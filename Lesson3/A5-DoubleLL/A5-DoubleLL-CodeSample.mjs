import DSA101_DoubleLL from "./A5-DoubleLL-Implementation.mjs";

console.info("+----------------------------------------");
console.info("| Double LL - create list:");
var list1 = new DSA101_DoubleLL();
console.log("[" + Date.now() + "]\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - push numeric value:");
list1.add(2);
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - push another numeric value:");
list1.add(2);
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - push string values:");
list1.add("Hello.");
list1.add("My name is Inigo Montoya.");
list1.add("You killed my father.");
list1.add("Prepare to die.");
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - get 1st value:");
var outcome = list1.get(0);
console.log("|\toutcome = " + outcome.toString());
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - get 2nd value:");
var outcome = list1.get(1);
console.log("|\toutcome = " + outcome.toString());
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - get 3rd value:");
var outcome = list1.get(2);
console.log("|\toutcome = " + outcome.toString());
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - remove head:");
var removed1 = list1.remove(0);
console.log("|\tremoved1 = " + removed1.toString());
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - remove 3rd item:");
var removed2 = list1.remove(2);
console.log("|\tremoved2 = " + removed2.toString());
console.log("|\tlist1 = " + list1.toString());

console.info("+----------------------------------------");
console.info("| Double LL - remove last item:");
var removed3 = list1.remove(3);
console.log("|\tremoved2 = " + removed3.toString());
console.log("|\tlist1 = " + list1.toString());
