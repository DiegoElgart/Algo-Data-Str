import ChatClient from "./A3-Queue-Exercise-01.mjs";
import DSA101_Queue from "./A3-Queue-Implementation.mjs";

console.log("+-----------------------------");
console.log("| Chat Program |");

let q1 = new DSA101_Queue();
let q2 = new DSA101_Queue();
let user1 = new ChatClient("Person1", q1, q2);
let user2 = new ChatClient("Person2", q2, q1);

// Original exercise implementation

// q1.push("Hello.");
// console.log(q1.toString());
// user1.readMsg();
// user1.sendMsg("Aknowledge");
// console.log(q2.toString());

function getTimestamp() {
	var d = new Date();
	return d.toISOString();
}

console.log("| " + getTimestamp() + " [INFO]\t" + "CHAT BEGINS");
user1.sendMsg("Hi, Person2. How are you?");
user2.readMsg();
user2.sendMsg("Hi, Person1. I am good, thank you. How are you?");
user1.readMsg();
user1.sendMsg("let's cut the crap - you owe me $10.000");
user2.readMsg();
user1.sendMsg("I know you reed the message...");
user2.readMsg();
user2.sendMsg("Person2 has left the country.");
console.log("| " + getTimestamp() + " [INFO]\t" + "CHAT ENDS");
