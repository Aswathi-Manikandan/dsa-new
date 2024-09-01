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
            return null
        }else{
            insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }
            this.insertNode(root.left,newNode)
        }else{
            if(root.right === null){
                root.right = newNode
            }
            this.insertNode(root.right,newNode)
        }
    }
}

const  bst = new BinarySearchTree()
bst.insert(10)
bst.insert(40)
bst.insert(6)
bst.insert(19)