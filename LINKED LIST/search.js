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
        const node =new Node(value)
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
        let listValues=""
        while(curr){
            listValues += `${curr.value}  `
            curr = curr.next
        }
        console.log(listValues);
    }
}

search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0;
    let curr = this.head
    while(curr){
        if(curr.value === value){
            return i
        }
        curr = curr.next
        i++
    }

    return -1
}
}

const list = new LinkedList()
list.prepend(50)
list.prepend(80)
list.prepend(90)
list.print()
console.log(list.search(80));