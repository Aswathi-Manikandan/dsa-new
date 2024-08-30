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

    // BFS implementation
    bfs() {
        const result = [];
        const queue = [];

        if (this.root === null) {
            return result;
        }

        queue.push(this.root);

        while (queue.length > 0) {
            const currentNode = queue.shift(); // Remove the first node from the queue
            result.push(currentNode.value); // Process the current node

            // Add the left child to the queue if it exists
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            // Add the right child to the queue if it exists
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.bfs()); // Output: [10, 6, 15, 3, 8, 20]
