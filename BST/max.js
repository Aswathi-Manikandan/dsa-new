class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    findMax(root = this.root){
        while(root.right !== null){
            root=root.right
        }
        return root.value
    }

    findMin(root = this.root){
        while(root.left!==null){
            root = root.left
        }
        return root.value
    }
}

const bst = new BinarySearchTree()
bst.insert(85)
bst.insert(55)
bst.insert(9)
bst.insert(999)
bst.insert(3)

console.log(bst.findMax());
console.log(bst.findMin());

