//remove a node from the given index

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
       const node = new Node(value)
       if(this.isEmpty()){
        this.head = node
       }
       else{
        node.next = this.head
        this.head = node
       }
       this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues +=  `${curr.value}  `
                curr = curr.next
            }
            console.log(listValues);
        }
    }


remove(index){
    if(index<0||index>=this.size){
        return null
    } 
    let removedNode 
    if(index===0){
         removedNode = this.head
         this.head = this.head.next
}else{
    let prev = this.head
    for(let i=0;i<index-1;i++){
        prev = prev.next
    }
    removedNode = prev.next
    prev.next = removedNode.next
}
this.size--
return removedNode.value
}

}

const list = new LinkedList()
list.prepend(60)
list.prepend(90)
list.prepend(80)
list.prepend(80)
list.prepend(10)
list.print()
list.remove(3)
list.print()
