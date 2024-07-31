class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

IsEmpty(){
    return this.size===0
}

print(){
    if(this.IsEmpty()){
        console.log('no elements');
    }else{
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues += `${curr.value} `
            curr=curr.next
        }
    }
}
}