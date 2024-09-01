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
            this.root = newNode;  
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode); 
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode); 
            }
        }
    }

    findMin(root = this.root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root.value  
    }
}

// Example usage
const bin = new BinarySearchTree();
bin.insert(50);
bin.insert(52);
bin.insert(10);
bin.insert(45);

console.log(bin.findMin()); // Output: 10
