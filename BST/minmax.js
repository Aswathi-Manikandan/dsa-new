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

    search(root, value) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty()); // Output: true
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(bst.root, 10)); // Output: true
console.log(bst.search(bst.root, 5));  // Output: true
console.log(bst.search(bst.root, 15)); // Output: true
console.log(bst.search(bst.root, 110)); // Output: false
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));


