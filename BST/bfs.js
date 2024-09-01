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

    // Insert a node in the BST
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
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

    // BFS traversal
    bfs() {
        const result = [];
        const queue = [];

        if (this.root === null) {
            return result;
        }

        queue.push(this.root);

        while (queue.length > 0) {
            const current = queue.shift(); // Dequeue the front node
            result.push(current.value); // Process the current node

            if (current.left !== null) {
                queue.push(current.left); // Enqueue left child
            }

            if (current.right !== null) {
                queue.push(current.right); // Enqueue right child
            }
        }

        return result;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.bfs()); // Output: [ 10, 6, 15, 3, 8, 20 ]
