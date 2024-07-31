//node creation 

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

//linked list

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

//checking if the list is empty

isEmpty(){
    return this.size === 0
}

//checking the size

getSize(){
    return this.size
}
}

const list = new LinkedList()
console.log('is empty: ' ,list.isEmpty());
console.log('getting size : ',list.getSize());
