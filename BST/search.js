class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;  // Set the root to the new node if the tree is empty
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode); // Corrected this call to use `this`
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode); // Corrected this call to use `this`
            }
        }
    }

    search(root, value) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        }
        if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }
}

const bin = new BinarySearchTree();
bin.insert(50);
bin.insert(52);
bin.insert(10);
bin.insert(45);

console.log(bin.search(bin.root, 45)); // Output: true
console.log(bin.search(bin.root, 52)); // Output: true
console.log(bin.search(bin.root, 10)); // Output: true
console.log(bin.search(bin.root, 62)); // Output: false
