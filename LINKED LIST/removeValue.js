//remove a specified node by its value from the list

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
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value}  `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
    
removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value === value){
        this.head = this.head.next
    this.size--
    return value
    }else{
        let prev = this.head
        while(prev.next && prev.next.value !==value){
            prev = prev.next
        }
        if(prev.next){
           const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
        }
        return null
    }
}
}


const list = new LinkedList()
list.prepend(50)
list.prepend(40)
list.prepend(80)
list.print()
list.removeValue(40)
list.print()