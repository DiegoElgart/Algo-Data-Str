import DSA101_BST_Node from "./A7-BST-Node.mjs";
import DSA101_BST from "./A7-BST-Implementation.mjs";

var node1 = new DSA101_BST_Node(5);
//console.log(node1.quickPrint());

var bst1 = new DSA101_BST();

bst1.add(1);
bst1.add(9);
bst1.add(2);
bst1.add(6);
bst1.add(3);
bst1.add(12);
console.log(bst1.quickPrint());
