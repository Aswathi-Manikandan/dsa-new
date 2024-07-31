// insertion of new node at the given index
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
        return this.size ===0
    }

prepend(value){
    let node = new Node(value)
    if(this.isEmpty()){
         this.head =node
    }else{
        node.next = this.head
        this.head =node
    }
    this.size++
}


insert(value, index) {
    if(index<0 || index>this.size){
        return 
    }
    if(index===0){
        this.prepend(value)
    }else{
        let node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
         prev.next = node
         this.size++
    }
   
}



    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}


const list = new LinkedList()

list.prepend(40)
list.prepend(20)
list.prepend(60)
list.prepend(80)
list.insert(99,2)
list.print()