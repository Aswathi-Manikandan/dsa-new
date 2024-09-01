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

   delete(value){
        this.root = this.deleteNode(this.root,value)
   }

   deleteNode(root,value){
    if(root === null){
        return root
    }

    if(value <root.value){
        root.left = this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(root.left === null){
            return root.right
        }else if(root.right === null){
            return root.left
        }
        const minRight = this.findMin(root.right);
root.value = minRight.value;
root.right = this.deleteNode(root.right, minRight.value);

    }
    return root
   }

   findMin(root) {
    while (root.left !== null) {
        root = root.left;
    }
    return root;
}
inorder(root = this.root) {
    if (root !== null) {
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
    }
}

}
// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Inorder before deletion:");
bst.inorder(); // Should print the tree in sorted order

bst.delete(50);

console.log("Inorder after deletion:");
bst.inorder(); // Should print the tree after deleting the node with value 50
