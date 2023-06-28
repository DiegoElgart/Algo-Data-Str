import ChatClient from "./A3-Queue-Exercise-01.mjs";
import DSA101_Queue from "./A3-Queue-Implementation.mjs";

let q1 = new DSA101_Queue();
let q2 = new DSA101_Queue();

let user1 = new ChatClient("Person1", q1, q2);
let user2 = new ChatClient(q2, q1);

q1.push("Hello.");
console.log(q1.toString());
user1.readMsg();
user1.sendMsg("Aknowledge");
console.log(q2.toString());
