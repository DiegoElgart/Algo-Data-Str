const DSA101_Stack = require("./A2-Stack-Implementation");

const stkAmmunition = new DSA101_Stack();

stkAmmunition.push("Trace");
stkAmmunition.push("DumDum");
stkAmmunition.push("Trace");
stkAmmunition.push("HollowPoint");
stkAmmunition.push("Lead");
stkAmmunition.push("AmorPiercing");
stkAmmunition.push("Trace");
stkAmmunition.push("Explosive");

//console.log(stkAmmunition.toString());

function extractAll(item) {
	let output = new DSA101_Stack();
	//let dump = new DSA101_Stack();

	for (let indx = stkAmmunition.headIndex; indx > -1; indx--) {
		if (stkAmmunition.data[indx] !== item) {
			output.push(stkAmmunition.pop());
		} else {
			//dump.push(stkAmmunition.pop());
			stkAmmunition.pop();
		}
	}
	for (let indx = output.headIndex; indx > -1; indx--) {
		stkAmmunition.push(output.pop());
	}
	return stkAmmunition.toString();
}

function extractAll2(stack, value) {
	var sktTemp = new DSA101_Stack();
	var currValue = undefined;
	while ((currValue = stack.pop())) {
		if (currValue != value) {
			sktTemp.push(currValue);
		}
	}
	while ((currValue = sktTemp.pop())) {
		stack.push(currValue);
	}
}

//console.log(extractAll("Trace"));
extractAll2(stkAmmunition, "Trace");

console.log(stkAmmunition.toString());
